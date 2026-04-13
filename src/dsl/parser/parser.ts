/**
 * PDSL Recursive Descent Parser
 *
 * Token[] → RootNode (N-ary AST)
 * 패닉 모드 에러 복구: 잘못된 토큰 스킵 후 계속 파싱.
 */

import type { Token } from "../tokenizer/tokens";
import { KNOWN_SLOT_TAGS } from "../tokenizer/tokens";
import type {
  ASTNode,
  RootNode,
  InlineNode,
} from "../ast/nodes";
import { NodeFactory } from "../ast/factory";
import type { DSLError } from "../errors/types";
import { createErrorChain } from "../errors/chain";

export interface ParseResult {
  ast: RootNode;
  errors: DSLError[];
}

export class Parser {
  private tokens: Token[] = [];
  private pos = 0;
  private factory = new NodeFactory();
  private errorChain;
  private fallback;

  constructor() {
    const { chain, fallback } = createErrorChain();
    this.errorChain = chain;
    this.fallback = fallback;
  }

  parse(tokens: Token[]): ParseResult {
    this.tokens = tokens;
    this.pos = 0;
    this.factory.reset();
    this.fallback.errors.length = 0;

    const children = this.parseChildren(null);
    const ast = this.factory.createRoot();
    ast.children = children;

    return { ast, errors: [...this.fallback.errors] };
  }

  /**
   * 자식 노드 파싱.
   * closingTag = null이면 EOF까지, "card"면 @/card까지.
   */
  private parseChildren(closingTag: string | null): ASTNode[] {
    const children: ASTNode[] = [];
    let textLines: { content: string; line: number }[] = [];
    let pendingClasses: string[] = [];
    let pendingClassLine = 0;

    const flushText = () => {
      if (textLines.length === 0) return;
      const content = textLines.map((l) => l.content).join("\n");
      const line = textLines[0].line;
      const inlines = this.parseInline(content, line);
      children.push(
        this.factory.createParagraph(pendingClasses, inlines, line),
      );
      textLines = [];
      pendingClasses = [];
    };

    while (this.pos < this.tokens.length) {
      const tok = this.peek();

      // EOF
      if (tok.type === "EOF") {
        if (closingTag) {
          this.reportError(
            "parse",
            "warning",
            `Unclosed block @${closingTag}`,
            tok.line,
            closingTag,
          );
        }
        break;
      }

      // 블록 닫기
      if (tok.type === "BLOCK_CLOSE") {
        flushText();
        if (tok.tag === closingTag) {
          this.advance();
          break;
        } else {
          this.reportError(
            "parse",
            "warning",
            `Mismatched tag: expected @/${closingTag}, got @/${tok.tag}`,
            tok.line,
            tok.tag,
          );
          this.advance();
          continue;
        }
      }

      // 비텍스트 토큰 전에 텍스트 플러시
      if (
        tok.type !== "TEXT" &&
        tok.type !== "BLANK_LINE" &&
        tok.type !== "LIST_ITEM"
      ) {
        flushText();
      }

      switch (tok.type) {
        case "BLOCK_OPEN": {
          this.advance();
          const tag = tok.tag!;

          // 슬롯인 경우
          if (KNOWN_SLOT_TAGS.has(tag)) {
            const slotNode = this.factory.createSlot(tag, tok.line);
            slotNode.children = this.parseChildren(tag);
            children.push(slotNode);
          } else {
            const blockNode = this.factory.createBlock(
              tag,
              tok.params ?? {},
              tok.line,
            );
            // 블록 열기에 인라인 콘텐츠가 있는 경우 (예: @feature "제목" 설명텍스트)
            if (tok.content) {
              const quoteMatch = tok.content.match(/^"([^"]*)"\s*(.*)$/);
              if (quoteMatch) {
                blockNode.params._title = quoteMatch[1];
                // 따옴표 뒤 나머지 텍스트가 있으면 _rest에 저장
                if (quoteMatch[2]) {
                  blockNode.params._rest = quoteMatch[2];
                }
              }
            }
            blockNode.children = this.parseChildren(tag);
            children.push(blockNode);
          }
          break;
        }

        case "LEAF": {
          this.advance();
          children.push(
            this.factory.createLeaf(
              tok.tag!,
              tok.params ?? {},
              tok.content ?? "",
              tok.attributes ?? {},
              tok.line,
            ),
          );
          break;
        }

        case "HEADING": {
          this.advance();
          children.push(
            this.factory.createHeading(
              tok.headingLevel! as 1 | 2 | 3 | 4 | 5 | 6,
              tok.content!,
              tok.line,
            ),
          );
          break;
        }

        case "DIVIDER": {
          this.advance();
          children.push(this.factory.createDivider(tok.line));
          break;
        }

        case "CLASS_PREFIX": {
          this.advance();
          pendingClasses = tok.classes ?? [];
          pendingClassLine = tok.line;
          if (tok.content) {
            textLines.push({ content: tok.content, line: tok.line });
          }
          break;
        }

        case "LIST_ITEM": {
          this.advance();
          textLines.push({
            content: tok.content!,
            line: tok.line,
          });
          break;
        }

        case "TEXT": {
          this.advance();
          textLines.push({ content: tok.content!, line: tok.line });
          break;
        }

        case "BLANK_LINE": {
          this.advance();
          flushText();
          break;
        }

        default:
          this.advance();
          break;
      }
    }

    flushText();
    return children;
  }

  /**
   * 인라인 콘텐츠 파싱: **bold** 및 일반 텍스트
   */
  private parseInline(text: string, line: number): InlineNode[] {
    const nodes: InlineNode[] = [];
    const regex = /\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // bold 전 텍스트
      if (match.index > lastIndex) {
        const before = text.slice(lastIndex, match.index);
        nodes.push(this.factory.createText(before, line));
      }

      // bold 텍스트
      const boldContent = match[1];
      const boldChildren: InlineNode[] = [
        this.factory.createText(boldContent, line),
      ];
      nodes.push(this.factory.createBold(boldChildren, line));

      lastIndex = regex.lastIndex;
    }

    // 나머지 텍스트
    if (lastIndex < text.length) {
      nodes.push(this.factory.createText(text.slice(lastIndex), line));
    }

    // 텍스트가 비어있으면 빈 텍스트 노드 추가
    if (nodes.length === 0) {
      nodes.push(this.factory.createText("", line));
    }

    return nodes;
  }

  private peek(): Token {
    return this.tokens[this.pos];
  }

  private advance(): Token {
    return this.tokens[this.pos++];
  }

  private reportError(
    phase: DSLError["phase"],
    severity: DSLError["severity"],
    message: string,
    line: number,
    tag?: string,
  ): void {
    this.errorChain.handle({ phase, severity, message, line, tag });
  }
}
