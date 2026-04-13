export function AppScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="mx-auto max-w-[160px] w-full aspect-[9/19.5] rounded-2xl bg-muted/50 border-2 border-dashed border-border flex items-center justify-center">
      <div className="text-center p-2">
        <div className="w-8 h-8 rounded-xl bg-muted mx-auto mb-2 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 16l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-xxs font-normal text-muted-foreground leading-normal">{label}</p>
      </div>
    </div>
  );
}
