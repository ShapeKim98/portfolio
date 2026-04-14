export function UndoRedoStackDiagram() {
  return (
    <div className="p-4 rounded-xl bg-card border border-border mb-5">
      <h6 className="text-sm font-semibold text-foreground mb-3 text-center">
        Stack 구조 및 실행 취소 / 다시 실행 흐름
      </h6>

      {/* 트리거 행 */}
      <div className="flex items-end justify-center gap-3 mb-1">
        <div className="flex flex-col items-center gap-1 flex-1 max-w-[150px]">
          <div className="w-full px-2 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-center">
            <span className="text-2xs font-semibold text-blue-600 dark:text-blue-400">슬라이더 조작 완료</span>
          </div>
          <div className="flex flex-col items-center gap-0">
            <div className="w-px h-3 bg-blue-400/60" />
            <span className="text-3xs font-bold text-blue-500">Push ↓</span>
          </div>
        </div>
        <div className="w-10 shrink-0" />
        <div className="flex flex-col items-center gap-1 flex-1 max-w-[150px]">
          <div className="w-full px-2 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/30 text-center">
            <span className="text-2xs font-semibold text-orange-600 dark:text-orange-400">실행 취소 요청</span>
          </div>
          <div className="flex flex-col items-center gap-0">
            <div className="w-px h-3 bg-orange-400/60" />
            <span className="text-3xs font-bold text-orange-500">Pop ↓ → Push ↓</span>
          </div>
        </div>
      </div>

      {/* 스택 본체 */}
      <div className="flex items-center justify-center gap-3">
        {/* Undo Stack */}
        <div className="flex-1 max-w-[150px]">
          <div className="mb-1.5">
            <div className="flex items-center justify-between">
              <p className="text-xxs font-semibold text-blue-600 dark:text-blue-400">실행 취소 Stack</p>
              <span className="text-3xs font-bold px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500">TOP</span>
            </div>
            <p className="text-3xs text-blue-400/80 mt-0.5 leading-snug">최신 작업이 가장 위에 쌓임</p>
          </div>
          <div className="flex min-h-[140px] flex-col justify-end rounded-lg border border-dashed border-blue-200 dark:border-blue-900 bg-blue-500/5 p-2">
            <div className="space-y-1.5">
              {[
                { label: "밝기 조정", badge: "최신 작업" },
                { label: "채도 조정", badge: null },
                { label: "대비 조정", badge: null },
              ].map(({ label, badge }, i) => (
                <div key={label} className="px-2 py-1.5 rounded-md border"
                  style={{
                    borderColor: `rgba(37,99,235,${0.5 - i * 0.1})`,
                    backgroundColor: `rgba(37,99,235,${0.08 - i * 0.02})`,
                    opacity: 1 - i * 0.16,
                  }}>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xs font-semibold text-blue-700 dark:text-blue-300">{label}</span>
                    {badge && (
                      <span className="text-4xs font-semibold text-blue-500 bg-blue-500/15 px-1 rounded leading-snug">{badge}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 양방향 화살표 */}
        <div className="flex flex-col items-center gap-2 shrink-0 w-10">
          <div className="flex flex-col items-center gap-0.5">
            <svg width="36" height="9" viewBox="0 0 36 9">
              <path d="M2 4.5h28M27 1.5l6 3-6 3" fill="none" stroke="#f97316" strokeWidth="1.4"/>
            </svg>
            <span className="text-4xs text-orange-500 font-semibold">Undo</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <svg width="36" height="9" viewBox="0 0 36 9">
              <path d="M34 4.5H6M9 1.5l-6 3 6 3" fill="none" stroke="#3b82f6" strokeWidth="1.4"/>
            </svg>
            <span className="text-4xs text-blue-500 font-semibold">Redo</span>
          </div>
        </div>

        {/* Redo Stack */}
        <div className="flex-1 max-w-[150px]">
          <div className="mb-1.5">
            <div className="flex items-center justify-between">
              <p className="text-xxs font-semibold text-orange-600 dark:text-orange-400">다시 실행 Stack</p>
              <span className="text-3xs font-bold px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500">TOP</span>
            </div>
            <p className="text-3xs text-orange-400/80 mt-0.5 leading-snug">실행 취소된 스냅샷 보존</p>
          </div>
          <div className="flex min-h-[140px] flex-col justify-end rounded-lg border border-dashed border-orange-200 dark:border-orange-900 bg-orange-500/5 p-2">
            <div className="space-y-1.5">
              {[
                { label: "밝기 조정", badge: "취소됨" },
                { label: "채도 조정", badge: null },
              ].map(({ label, badge }, i) => (
                <div key={label} className="px-2 py-1.5 rounded-md border"
                  style={{
                    borderColor: `rgba(249,115,22,${0.5 - i * 0.1})`,
                    backgroundColor: `rgba(249,115,22,${0.08 - i * 0.02})`,
                    opacity: 1 - i * 0.16,
                  }}>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xs font-semibold text-orange-700 dark:text-orange-300">{label}</span>
                    {badge && (
                      <span className="text-4xs font-semibold text-orange-500 bg-orange-500/15 px-1 rounded leading-snug">{badge}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
