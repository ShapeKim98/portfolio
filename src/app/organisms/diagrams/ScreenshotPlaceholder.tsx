export function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/9] rounded-2xl bg-muted/50 border-2 border-dashed border-border flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded-xl bg-muted mx-auto mb-3 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 16l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-sm font-normal text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
