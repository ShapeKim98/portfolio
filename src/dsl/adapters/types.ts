export interface ComponentAdapter<P> {
  adapt(rawProps: Record<string, unknown>, children: React.ReactNode): P;
  validate(rawProps: Record<string, unknown>): string[];
}
