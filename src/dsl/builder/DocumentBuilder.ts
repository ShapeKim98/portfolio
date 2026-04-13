/**
 * PDSL Document Builder (Fluent API)
 *
 * .pdsl 문서를 프로그래밍 방식으로 생성하는 빌더.
 * /add-project 스킬 등에서 사용.
 */

import { NodeFactory } from "../ast/factory";
import type { RootNode, ASTNode, InlineNode } from "../ast/nodes";
import { serialize } from "./serialize";
import type { PDSLFrontmatter } from "../frontmatter";

type ParentNode = ASTNode & { children: ASTNode[] };

export class DocumentBuilder {
  private factory = new NodeFactory();
  private root: RootNode;
  private stack: ParentNode[];
  private frontmatter: PDSLFrontmatter;

  constructor(frontmatter: PDSLFrontmatter) {
    this.root = this.factory.createRoot();
    this.stack = [this.root];
    this.frontmatter = frontmatter;
  }

  /* ─── Block operations (push onto stack) ─── */

  card(params?: Record<string, string | boolean>): this {
    this.pushBlock("card", params);
    return this;
  }

  features(): this {
    this.pushBlock("features");
    return this;
  }

  feature(title: string): this {
    this.pushBlock("feature", { _title: title });
    return this;
  }

  sectionGroup(title: string): this {
    this.pushBlock("section-group", { _title: title });
    return this;
  }

  fadeIn(params?: { delay?: number; speed?: number }): this {
    const p: Record<string, string | boolean> = {};
    if (params?.delay !== undefined) p.delay = String(params.delay);
    if (params?.speed !== undefined) p.speed = String(params.speed);
    this.pushBlock("fade-in", p);
    return this;
  }

  twoColumn(): this {
    this.pushBlock("two-column");
    return this;
  }

  left(): this {
    const node = this.factory.createSlot("left", 0);
    this.currentParent().children.push(node);
    this.stack.push(node);
    return this;
  }

  right(): this {
    const node = this.factory.createSlot("right", 0);
    this.currentParent().children.push(node);
    this.stack.push(node);
    return this;
  }

  grid(cols: number, gap?: number): this {
    const p: Record<string, string | boolean> = { cols: String(cols) };
    if (gap !== undefined) p.gap = String(gap);
    this.pushBlock("grid", p);
    return this;
  }

  numberedSteps(): this {
    this.pushBlock("numbered-steps");
    return this;
  }

  featureList(): this {
    this.pushBlock("feature-list");
    return this;
  }

  problemSolution(): this {
    this.pushBlock("problem-solution");
    return this;
  }

  diagramSpec(title: string): this {
    this.pushBlock("diagram-spec", { _title: title });
    return this;
  }

  /* ─── End current block ─── */

  end(): this {
    if (this.stack.length > 1) {
      this.stack.pop();
    }
    return this;
  }

  /* ─── Leaf operations ─── */

  heading(level: 1 | 2 | 3 | 4, text: string): this {
    const node = this.factory.createHeading(level, text, 0);
    this.currentParent().children.push(node);
    return this;
  }

  text(content: string): this {
    const textNode = this.factory.createText(content, 0) as InlineNode;
    const paragraph = this.factory.createParagraph([], [textNode], 0);
    this.currentParent().children.push(paragraph);
    return this;
  }

  badge(
    text: string,
    params?: Record<string, string | boolean>,
  ): this {
    this.addLeaf("badge", text, params ?? {});
    return this;
  }

  button(
    text: string,
    href: string,
    params?: Record<string, string | boolean>,
  ): this {
    this.addLeaf("button", text, { href, ...(params ?? {}) });
    return this;
  }

  techTags(tags: string[]): this {
    this.addLeaf("tech-tags", tags.join(", "));
    return this;
  }

  kv(key: string, value: string): this {
    this.addLeaf("kv", "", { key, value });
    return this;
  }

  image(
    src: string,
    params?: Record<string, string | boolean>,
    attributes?: Record<string, string>,
  ): this {
    const node = this.factory.createLeaf(
      "image",
      params ?? {},
      src,
      attributes ?? {},
      0,
    );
    this.currentParent().children.push(node);
    return this;
  }

  space(n: number): this {
    this.addLeaf("space", "", { n: String(n) });
    return this;
  }

  divider(): this {
    const node = this.factory.createDivider(0);
    this.currentParent().children.push(node);
    return this;
  }

  /* ─── Build & Serialize ─── */

  build(): RootNode {
    return this.root;
  }

  toSource(): string {
    return serialize(this.frontmatter, this.root);
  }

  /* ─── Internal helpers ─── */

  private currentParent(): ParentNode {
    return this.stack[this.stack.length - 1];
  }

  private pushBlock(
    tag: string,
    params: Record<string, string | boolean> = {},
  ): void {
    const node = this.factory.createBlock(tag, params, 0);
    this.currentParent().children.push(node);
    this.stack.push(node);
  }

  private addLeaf(
    tag: string,
    content: string,
    params: Record<string, string | boolean> = {},
    attributes: Record<string, string> = {},
  ): void {
    const node = this.factory.createLeaf(tag, params, content, attributes, 0);
    this.currentParent().children.push(node);
  }
}
