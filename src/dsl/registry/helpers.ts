import type { ASTNode, BlockNode, SlotNode, ParagraphNode } from "../ast/nodes";

/** Extract child BlockNodes by tag name */
export function extractBlocksByTag(node: BlockNode, tag: string): BlockNode[] {
  return node.children.filter(
    (c): c is BlockNode => c.kind === "block" && c.tag === tag
  );
}

/** Extract first SlotNode by name */
export function extractSlot(node: BlockNode, name: string): SlotNode | undefined {
  return node.children.find(
    (c): c is SlotNode => c.kind === "slot" && c.name === name
  ) as SlotNode | undefined;
}

/** Extract all SlotNodes by name */
export function extractSlotsByName(node: BlockNode, name: string): SlotNode[] {
  return node.children.filter(
    (c): c is SlotNode => c.kind === "slot" && c.name === name
  );
}

/** Extract text content from children (paragraphs + text nodes) */
export function extractTextContent(children: ASTNode[]): string {
  const parts: string[] = [];
  for (const child of children) {
    if (child.kind === "text") parts.push(child.content);
    else if (child.kind === "paragraph") {
      parts.push(extractTextContent(child.children));
    } else if (child.kind === "bold") {
      parts.push(extractTextContent(child.children));
    }
  }
  return parts.join(" ").trim();
}

/** Extract list items from children (text content from paragraphs that came from LIST_ITEM tokens) */
export function extractListItems(children: ASTNode[]): string[] {
  return children
    .filter((c): c is ParagraphNode => c.kind === "paragraph")
    .map(p => extractTextContent(p.children));
}
