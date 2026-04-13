import type { BlockNode, LeafNode } from "../ast/nodes";

export type BlockRenderer = React.FC<{
  node: BlockNode;
  children: React.ReactNode;
}>;

export type LeafRenderer = React.FC<{
  node: LeafNode;
}>;

export interface TagDefinition {
  tag: string;
  isBlock: boolean;
  renderer: BlockRenderer | LeafRenderer;
}

export class ComponentRegistry {
  private tags = new Map<string, TagDefinition>();

  register(def: TagDefinition): void {
    this.tags.set(def.tag, def);
  }

  get(tag: string): TagDefinition | undefined {
    return this.tags.get(tag);
  }

  has(tag: string): boolean {
    return this.tags.has(tag);
  }

  isBlock(tag: string): boolean {
    return this.tags.get(tag)?.isBlock ?? true;
  }

  getAllTags(): string[] {
    return Array.from(this.tags.keys());
  }
}
