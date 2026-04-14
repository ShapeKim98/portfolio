export function AppleWatchCommunicationDiagram() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6">
      <div className="w-40 h-40 rounded-2xl border-2 border-blue-500/40 bg-blue-500/5 flex flex-col items-center justify-center p-3">
        <span className="text-base font-bold text-blue-500 mb-2">Apple Watch</span>
        <div className="space-y-1 text-center">
          <span className="block text-xs font-normal text-muted-foreground">HealthKit</span>
          <span className="block text-xs font-normal text-muted-foreground">WatchKit</span>
          <span className="block text-xs font-normal text-muted-foreground">HKWorkoutSession</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xxs font-medium text-muted-foreground">WCSession</span>
        <div className="flex items-center gap-1">
          <div className="w-16 md:w-24 h-0.5 bg-primary/30" />
          <svg width="12" height="8" viewBox="0 0 12 8" className="text-primary">
            <path d="M0 4h8M6 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <span className="text-2xs font-normal text-muted-foreground">심박수, 칼로리</span>
        <div className="flex items-center gap-1">
          <svg width="12" height="8" viewBox="0 0 12 8" className="text-primary rotate-180">
            <path d="M0 4h8M6 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="w-16 md:w-24 h-0.5 bg-primary/30" />
        </div>
        <span className="text-2xs font-normal text-muted-foreground">운동 상태 제어</span>
        <span className="text-xxs font-normal text-primary mt-1">1초 주기 동기화</span>
      </div>
      <div className="w-40 h-40 rounded-2xl border-2 border-green-500/40 bg-green-500/5 flex flex-col items-center justify-center p-3">
        <span className="text-base font-bold text-green-600 dark:text-green-400 mb-2">iPhone</span>
        <div className="space-y-1 text-center">
          <span className="block text-xs font-normal text-muted-foreground">SwiftUI</span>
          <span className="block text-xs font-normal text-muted-foreground">SwiftData</span>
          <span className="block text-xs font-normal text-muted-foreground">Combine Timer</span>
        </div>
      </div>
    </div>
  );
}
