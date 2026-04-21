// 지정된 URL을 Puppeteer로 렌더링하여 A4 다중 페이지 PDF로 내보내는 스크립트.
// 사용법: node scripts/export-pdf.mjs [url] [widthPx] [outPath]
//
// 환경별 Chromium 전략:
//   - Linux(Vercel/서버리스/CI): @sparticuz/chromium + puppeteer-core
//     (Vercel 빌드 샌드박스에는 libnspr4 등 Chromium 의존 라이브러리가 없어서
//      full puppeteer의 bundled Chromium이 실행되지 않음. 자체 포함 바이너리를 쓴다.)
//   - macOS/기타: full puppeteer (bundled Chromium)
//   - PUPPETEER_EXECUTABLE_PATH 환경변수 지정 시 언제나 그 경로를 우선 사용.

import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_URL = 'http://localhost:4173/?print=1&w=1280';
const DEFAULT_WIDTH = 1280;
const DEFAULT_OUT = 'dist/portfolio.pdf';

const url = process.argv[2] || DEFAULT_URL;
const width = Number(process.argv[3]) || DEFAULT_WIDTH;
const outPath = process.argv[4] || DEFAULT_OUT;

const DESKTOP_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

const useServerlessChromium =
  process.platform === 'linux' && !process.env.PUPPETEER_EXECUTABLE_PATH;

async function getPuppeteerAndLaunchOptions() {
  const baseArgs = [
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--force-color-profile=srgb',
  ];

  if (useServerlessChromium) {
    const [{ default: puppeteer }, { default: chromium }] = await Promise.all([
      import('puppeteer-core'),
      import('@sparticuz/chromium'),
    ]);
    const executablePath = await chromium.executablePath();
    console.log(`[export-pdf] using @sparticuz/chromium at ${executablePath}`);
    return {
      puppeteer,
      launchOptions: {
        headless: chromium.headless,
        args: [...chromium.args, ...baseArgs],
        executablePath,
        defaultViewport: chromium.defaultViewport,
      },
    };
  }

  const { default: puppeteer } = await import('puppeteer');
  const launchOptions = { headless: 'new', args: baseArgs };
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  }
  return { puppeteer, launchOptions };
}

async function main() {
  const { puppeteer, launchOptions } = await getPuppeteerAndLaunchOptions();
  const browser = await puppeteer.launch(launchOptions);

  try {
    const page = await browser.newPage();

    await page.setViewport({
      width,
      height: 2000,
      deviceScaleFactor: 2,
    });

    await page.setUserAgent(DESKTOP_UA);

    await page.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: 'light' },
      { name: 'prefers-reduced-motion', value: 'reduce' },
    ]);

    console.log(`[export-pdf] goto ${url}`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    // 폰트 로드 완료 대기
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    });

    // 다크 모드 제거 및 print-mode 클래스 적용 후 2 rAF 대기
    await page.evaluate(async () => {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('print-mode');
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    });

    // "더보기" / "펼치" / /Showmore/i 매칭되는 버튼/role=button 전부 클릭
    await page.evaluate(() => {
      const selectors = 'button, [role="button"]';
      const nodes = Array.from(document.querySelectorAll(selectors));
      const showMoreRe = /Showmore/i;
      for (const el of nodes) {
        const text = (el.textContent || '').trim();
        if (!text) continue;
        if (
          text.includes('더보기') ||
          text.includes('펼치') ||
          showMoreRe.test(text.replace(/\s+/g, ''))
        ) {
          try {
            el.click();
          } catch {
            /* noop */
          }
        }
      }
    });

    // 확장 애니메이션 대기
    await new Promise((r) => setTimeout(r, 1200));

    // 지연 로딩을 강제하기 위해 전체 페이지 스크롤 (400px 간격, 80ms 딜레이) 후 복귀
    await page.evaluate(async () => {
      const delay = (ms) => new Promise((r) => setTimeout(r, ms));
      const step = 400;
      const maxScroll = () =>
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
        ) - window.innerHeight;
      let y = 0;
      const target = maxScroll();
      while (y < target) {
        window.scrollTo(0, y);
        await delay(80);
        y += step;
      }
      window.scrollTo(0, maxScroll());
      await delay(80);
      window.scrollTo(0, 0);
    });

    await new Promise((r) => setTimeout(r, 500));

    // 출력 디렉토리 생성
    await mkdir(path.dirname(outPath), { recursive: true });

    // 페이지 여백은 유지하되, 배경(body 흰 배경)은 이 여백 안쪽(@page 내용 영역)에만
    // 칠해지도록 print.css 에서 html 배경을 transparent 로 둔다.
    await page.pdf({
      path: outPath,
      format: 'A4',
      printBackground: true,
      scale: 0.62,
      margin: {
        top: '12mm',
        right: '10mm',
        bottom: '12mm',
        left: '10mm',
      },
      preferCSSPageSize: false,
    });

    const info = await stat(outPath);
    const sizeMb = (info.size / (1024 * 1024)).toFixed(2);
    console.log(`[export-pdf] wrote ${outPath} (${sizeMb} MB)`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('[export-pdf] failed:', err);
  process.exit(1);
});
