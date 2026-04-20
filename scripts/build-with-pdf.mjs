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

function killPreview(proc) {
  if (!proc || proc.exitCode != null || proc.killed) return;
  try {
    // detached=true 로 기동했으므로 프로세스 그룹 전체에 SIGKILL 전달.
    // (vite preview 는 자식으로 esbuild/serve 등을 띄울 수 있어 그룹 단위로 정리)
    process.kill(-proc.pid, 'SIGKILL');
  } catch {
    try {
      proc.kill('SIGKILL');
    } catch {
      /* 이미 종료됨 */
    }
  }
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
      // detached=true 로 새 프로세스 그룹을 만들고, 종료 시 그룹 전체에 시그널 전송
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: true,
    },
  );

  // stdout/stderr 파이프가 이벤트 루프를 붙잡지 않도록 unref 처리.
  // 로그는 여전히 흘려보낸다.
  previewProc.stdout?.on('data', (chunk) => {
    process.stdout.write(`[preview] ${chunk}`);
  });
  previewProc.stderr?.on('data', (chunk) => {
    process.stderr.write(`[preview] ${chunk}`);
  });
  previewProc.unref();

  console.log(`[build-with-pdf] preview pid=${previewProc.pid}`);

  // 어떤 경로로 끝나든 preview 프로세스를 반드시 정리
  const cleanup = () => killPreview(previewProc);
  process.on('exit', cleanup);
  process.on('SIGINT', () => {
    cleanup();
    process.exit(130);
  });
  process.on('SIGTERM', () => {
    cleanup();
    process.exit(143);
  });

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
    cleanup();
  }
}

main().then(
  () => {
    // preview 가 완전히 내려갔음을 확신할 수 없으니 명시적으로 종료한다.
    // (unref 가 있어도 디스크립터 정리가 늦어질 수 있음)
    process.exit(0);
  },
  (err) => {
    console.error('[build-with-pdf] failed:', err);
    process.exit(1);
  },
);
