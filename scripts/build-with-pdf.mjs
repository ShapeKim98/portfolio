// vite build -> vite preview(백그라운드) -> export-pdf -> preview 종료 순으로 오케스트레이션하는 스크립트.
// Vercel과 GitHub Pages의 base 경로 차이에 따라 '/'와 '/portfolio/' 중 도달 가능한 쪽을 자동 탐지한다.

import { execSync, spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const PREVIEW_HOST = '127.0.0.1';
const PREVIEW_PORT = 4173;
const ROOT_BASE_URL = `http://${PREVIEW_HOST}:${PREVIEW_PORT}/`;
const GH_BASE_URL = `http://${PREVIEW_HOST}:${PREVIEW_PORT}/portfolio/`;

async function tryFetch(url) {
  try {
    const res = await fetch(url, { redirect: 'manual' });
    return res.status;
  } catch {
    return 0;
  }
}

async function waitForPreview() {
  for (let i = 0; i < 30; i++) {
    const status = await tryFetch(ROOT_BASE_URL);
    if (status === 200) return ROOT_BASE_URL;
    const ghStatus = await tryFetch(GH_BASE_URL);
    if (ghStatus === 200) return GH_BASE_URL;
    await sleep(500);
  }
  throw new Error('vite preview did not become ready within 15s');
}

async function main() {
  // 1) 프로덕션 빌드
  console.log('[build-with-pdf] step 1: vite build');
  execSync('npx vite build', { stdio: 'inherit' });

  // 2) vite preview를 백그라운드로 기동
  console.log('[build-with-pdf] step 2: launch vite preview');
  const previewProc = spawn(
    'npx',
    [
      'vite',
      'preview',
      '--port',
      String(PREVIEW_PORT),
      '--strictPort',
      '--host',
      PREVIEW_HOST,
    ],
    {
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: true,
    },
  );

  // preview stdout/stderr는 디버깅을 위해 그대로 흘려보냄
  previewProc.stdout?.on('data', (chunk) => {
    process.stdout.write(`[preview] ${chunk}`);
  });
  previewProc.stderr?.on('data', (chunk) => {
    process.stderr.write(`[preview] ${chunk}`);
  });

  const pid = previewProc.pid;
  console.log(`[build-with-pdf] preview pid=${pid}`);

  try {
    // 3) 서버 준비 대기 및 base 경로 결정
    console.log('[build-with-pdf] step 3: wait for preview to be ready');
    const baseUrl = await waitForPreview();
    console.log(`[build-with-pdf] preview ready at ${baseUrl}`);

    // 4) PDF 내보내기 스크립트 실행
    const pdfUrl = `${baseUrl}?print=1&w=1280`;
    console.log(`[build-with-pdf] step 4: export-pdf -> ${pdfUrl}`);
    execSync(
      `node scripts/export-pdf.mjs "${pdfUrl}" 1280 dist/portfolio.pdf`,
      { stdio: 'inherit' },
    );
  } finally {
    // 5) preview 프로세스 종료
    if (pid) {
      try {
        process.kill(pid, 'SIGTERM');
      } catch {
        /* 이미 종료된 경우 무시 */
      }
    }
  }
}

main().catch((err) => {
  console.error('[build-with-pdf] failed:', err);
  process.exit(1);
});
