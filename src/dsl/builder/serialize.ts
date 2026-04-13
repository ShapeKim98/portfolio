/**
 * PDSL AST Serializer
 *
 * Frontmatter + AST를 .pdsl 텍스트로 직렬화.
 */

import type { PDSLFrontmatter } from "../frontmatter";
import type {
  RootNode,
  ASTNode,
  BlockNode,
  SlotNode,
  LeafNode,
  HeadingNode,
  ParagraphNode,
  DividerNode,
  InlineNode,
} from "../ast/nodes";

export function serialize(
  frontmatter: PDSLFrontmatter,
  ast: RootNode,
): string {
  const fm = serializeFrontmatter(frontmatter);
  const body = serializeNodes(ast.children, 0);
  return `${fm}\n${body}\n`;
}

/* ─── Frontmatter ─── */

function serializeFrontmatter(fm: PDSLFrontmatter): string {
  const lines: string[] = ["---"];
  serializeObject(fm, lines, 0);
  lines.push("---");
  return lines.join("\n");
}

function serializeObject(
  obj: Record<string, unknown>,
  lines: string[],
  depth: number,
): void {
  const indent = "  ".repeat(depth);
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined) continue;

    if (Array.isArray(value)) {
      lines.push(`${indent}${key}:`);
      for (const item of value) {
        if (typeof item === "object" && item !== null) {
          // Inline YAML object for simple objects (e.g. cta items)
          const entries = Object.entries(item as Record<string, unknown>);
          const pairs = entries
            .map(([k, v]) => `${k}: ${yamlScalar(v)}`)
            .join(", ");
          lines.push(`${indent}  - { ${pairs} }`);
        } else {
          lines.push(`${indent}  - ${yamlScalar(item)}`);
        }
      }
    } else if (typeof value === "object" && value !== null) {
      lines.push(`${indent}${key}:`);
      serializeObject(value as Record<string, unknown>, lines, depth + 1);
    } else if (typeof value === "string" && value.includes("\n")) {
      // Multiline strings use YAML folded scalar
      lines.push(`${indent}${key}: >`);
      for (const line of value.split("\n")) {
        lines.push(`${indent}  ${line}`);
      }
    } else {
      lines.push(`${indent}${key}: ${yamlScalar(value)}`);
    }
  }
}

function yamlScalar(value: unknown): string {
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") return String(value);
  if (typeof value === "string") {
    // Quote strings that could be ambiguous
    if (
      value === "" ||
      value === "true" ||
      value === "false" ||
      value === "null" ||
      /^[\d]/.test(value) ||
      /[:#{}[\],&*?|>!%@`]/.test(value)
    ) {
      return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
    }
    return value;
  }
  return JSON.stringify(value);
}

/* ─── AST Body ─── */

function serializeNodes(nodes: ASTNode[], indent: number): string {
  return nodes.map((node) => serializeNode(node, indent)).join("\n\n");
}

function serializeNode(node: ASTNode, indent: number): string {
  const prefix = "  ".repeat(indent);
  switch (node.kind) {
    case "heading":
      return serializeHeading(node, prefix);
    case "paragraph":
      return serializeParagraph(node, prefix);
    case "divider":
      return `${prefix}---`;
    case "block":
      return serializeBlock(node, prefix, indent);
    case "leaf":
      return serializeLeaf(node, prefix);
    case "slot":
      return serializeSlot(node, prefix, indent);
    case "text":
      return node.content;
    case "bold":
      return `**${serializeInlines(node.children)}**`;
    default:
      return "";
  }
}

function serializeHeading(node: HeadingNode, prefix: string): string {
  return `${prefix}${"#".repeat(node.level)} ${node.content}`;
}

function serializeParagraph(node: ParagraphNode, prefix: string): string {
  const classPrefix =
    node.classes.length > 0
      ? `{${node.classes.map((c) => `.${c}`).join(" ")}} `
      : "";
  return `${prefix}${classPrefix}${serializeInlines(node.children)}`;
}

function serializeBlock(
  node: BlockNode,
  prefix: string,
  indent: number,
): string {
  const params = serializeParams(node.params);
  const children = serializeNodes(node.children, indent + 1);
  const childBlock = children ? `\n${children}\n` : "\n";
  return `${prefix}@${node.tag}${params}${childBlock}${prefix}@/${node.tag}`;
}

function serializeLeaf(node: LeafNode, prefix: string): string {
  const params = serializeParams(node.params);
  const content = node.content ? ` "${node.content}"` : "";
  const attrs = Object.entries(node.attributes)
    .map(([k, v]) => ` ${k}="${v}"`)
    .join("");
  return `${prefix}@${node.tag}${params}${content}${attrs}`;
}

function serializeSlot(
  node: SlotNode,
  prefix: string,
  indent: number,
): string {
  const children = serializeNodes(node.children, indent + 1);
  const childBlock = children ? `\n${children}\n` : "\n";
  return `${prefix}@${node.name}${childBlock}${prefix}@/${node.name}`;
}

function serializeParams(params: Record<string, string | boolean>): string {
  const entries = Object.entries(params).filter(([k]) => k !== "_title");
  const titleVal = params._title;

  if (entries.length === 0 && !titleVal) return "";

  const parts: string[] = [];
  for (const [key, value] of entries) {
    if (typeof value === "boolean" && value) {
      parts.push(key);
    } else if (typeof value === "string") {
      parts.push(`${key}=${value}`);
    }
  }

  const paramStr = parts.length > 0 ? `(${parts.join(", ")})` : "";
  const titleStr =
    typeof titleVal === "string" ? ` "${titleVal}"` : "";
  return `${paramStr}${titleStr}`;
}

function serializeInlines(nodes: InlineNode[]): string {
  return nodes
    .map((node) => {
      switch (node.kind) {
        case "text":
          return node.content;
        case "bold":
          return `**${serializeInlines(node.children)}**`;
        case "leaf":
          return serializeLeaf(node, "");
        default:
          return "";
      }
    })
    .join("");
}
