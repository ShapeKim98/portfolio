/**
 * DSL Error Types
 */

export interface DSLError {
  phase: "tokenize" | "parse" | "render";
  severity: "warning" | "error";
  message: string;
  line: number;
  tag?: string;
}
