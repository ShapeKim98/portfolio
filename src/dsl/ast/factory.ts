/**
 * AST Node Factory (Factory Pattern)
 *
 * 일관된 ID 생성 + 노드 생성 캡슐화.
 * Parser와 Builder 모두 이 Factory를 사용.
 */

import type {
  RootNode,
  BlockNode,
  SlotNode,
  LeafNode,
  HeadingNode,
  ParagraphNode,
  DividerNode,
  TextNode,
  BoldNode,
  InlineNode,
} from "./nodes";

export class NodeFactory {
  private counter = 0;

  createRoot(): RootNode {
    return { kind: "root", id: "root_0", line: 0, children: [] };
  }

  createBlock(
    tag: string,
    params: Record<string, string | boolean>,
    line: number,
  ): BlockNode {
    return {
      kind: "block",
      id: `block_${this.counter++}`,
      tag,
      params,
      line,
      children: [],
    };
  }

  createSlot(name: string, line: number): SlotNode {
    return {
      kind: "slot",
      id: `slot_${this.counter++}`,
      name,
      line,
      children: [],
    };
  }

  createLeaf(
    tag: string,
    params: Record<string, string | boolean>,
    content: string,
    attributes: Record<string, string>,
    line: number,
  ): LeafNode {
    return {
      kind: "leaf",
      id: `leaf_${this.counter++}`,
      tag,
      params,
      content,
      attributes,
      line,
    };
  }

  createHeading(
    level: 1 | 2 | 3 | 4 | 5 | 6,
    content: string,
    line: number,
  ): HeadingNode {
    return {
      kind: "heading",
      id: `h_${this.counter++}`,
      level,
      content,
      line,
    };
  }

  createParagraph(
    classes: string[],
    children: InlineNode[],
    line: number,
  ): ParagraphNode {
    return {
      kind: "paragraph",
      id: `p_${this.counter++}`,
      classes,
      children,
      line,
    };
  }

  createDivider(line: number): DividerNode {
    return { kind: "divider", id: `div_${this.counter++}`, line };
  }

  createText(content: string, line: number): TextNode {
    return {
      kind: "text",
      id: `t_${this.counter++}`,
      content,
      line,
    };
  }

  createBold(children: InlineNode[], line: number): BoldNode {
    return {
      kind: "bold",
      id: `b_${this.counter++}`,
      children,
      line,
    };
  }

  reset(): void {
    this.counter = 0;
  }
}
