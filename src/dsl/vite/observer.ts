/**
 * DSL File Observer (Observer Pattern)
 *
 * .pdsl 파일 변경 시 HMR 알림.
 */

import type { RootNode } from "../ast/nodes";
import type { PDSLFrontmatter } from "../frontmatter";

export interface PDSLChangeEvent {
  filePath: string;
  frontmatter: PDSLFrontmatter;
  ast: RootNode;
}

type ChangeHandler = (event: PDSLChangeEvent) => void;

export class DSLFileObserver {
  private listeners = new Set<ChangeHandler>();

  subscribe(handler: ChangeHandler): () => void {
    this.listeners.add(handler);
    return () => this.listeners.delete(handler);
  }

  notify(event: PDSLChangeEvent): void {
    for (const handler of this.listeners) {
      handler(event);
    }
  }
}
