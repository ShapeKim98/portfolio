/**
 * PDSL Tokenizer (라인 기반 스캐너)
 *
 * 소스 문자열을 Token 배열로 변환.
 * 라인 단위로 처리하여 블록 열기/닫기, 리프, 제목, 텍스트를 식별.
 */

import type { Token } from "./tokens";
import { KNOWN_LEAF_TAGS } from "./tokens";

export function tokenize(source: string): Token[] {
  const lines = source.split("\n");
  const tokens: Token[] = [];

  for (let i = 0; i < lines.length; i++) {
    const lineNum = i + 1;
    const raw = lines[i];
    const trimmed = raw.trim();

    // 빈 줄
    if (trimmed === "") {
      tokens.push({ type: "BLANK_LINE", line: lineNum });
      continue;
    }

    // 구분선: ---
    if (/^-{3,}$/.test(trimmed)) {
      tokens.push({ type: "DIVIDER", line: lineNum });
      continue;
    }

    // 제목: # ~ ######
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      tokens.push({
        type: "HEADING",
        headingLevel: headingMatch[1].length,
        content: headingMatch[2],
        line: lineNum,
      });
      continue;
    }

    // 클래스 프리픽스: {.class1 .class2} optional text
    const classMatch = trimmed.match(
      /^\{((?:\.[a-zA-Z0-9_:/-]+\s*)+)\}\s*(.*)$/,
    );
    if (classMatch) {
      const classes = classMatch[1]
        .trim()
        .split(/\s+/)
        .map((c) => c.slice(1)); // remove leading dots
      tokens.push({
        type: "CLASS_PREFIX",
        classes,
        content: classMatch[2] || undefined,
        line: lineNum,
      });
      continue;
    }

    // 블록 닫기: @/tagname
    const closeMatch = trimmed.match(/^@\/([a-zA-Z][a-zA-Z0-9-]*)$/);
    if (closeMatch) {
      tokens.push({
        type: "BLOCK_CLOSE",
        tag: closeMatch[1],
        line: lineNum,
      });
      continue;
    }

    // @ 태그 (블록 열기 또는 리프)
    const tagMatch = trimmed.match(
      /^@([a-zA-Z][a-zA-Z0-9-]*)(?:\(([^)]*)\))?\s*(.*)$/,
    );
    if (tagMatch) {
      const tag = tagMatch[1];
      const paramStr = tagMatch[2];
      const rest = tagMatch[3];
      const params = paramStr ? parseParams(paramStr) : {};

      // 리프 태그 판별: 알려진 리프 태그만 리프로 처리
      const isLeaf = KNOWN_LEAF_TAGS.has(tag);

      if (isLeaf) {
        const { content, attributes } = parseLeafContent(rest);
        tokens.push({
          type: "LEAF",
          tag,
          params,
          content,
          attributes,
          line: lineNum,
        });
      } else {
        tokens.push({
          type: "BLOCK_OPEN",
          tag,
          params,
          content: rest || undefined,
          line: lineNum,
        });
      }
      continue;
    }

    // 리스트 아이템: - item 또는 1. item
    const unorderedMatch = trimmed.match(/^-\s+(.+)$/);
    if (unorderedMatch) {
      tokens.push({
        type: "LIST_ITEM",
        content: unorderedMatch[1],
        line: lineNum,
      });
      continue;
    }

    const orderedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
    if (orderedMatch) {
      tokens.push({
        type: "LIST_ITEM",
        listIndex: parseInt(orderedMatch[1], 10),
        content: orderedMatch[2],
        line: lineNum,
      });
      continue;
    }

    // 일반 텍스트
    tokens.push({
      type: "TEXT",
      content: trimmed,
      line: lineNum,
    });
  }

  tokens.push({ type: "EOF", line: lines.length + 1 });
  return tokens;
}

/**
 * 파라미터 문자열 파싱: "cols=2, gap=4" → {cols:"2", gap:"4"}
 * "lightbox" → {lightbox: true}
 */
function parseParams(paramStr: string): Record<string, string | boolean> {
  const result: Record<string, string | boolean> = {};
  for (const part of paramStr.split(",")) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) {
      result[trimmed] = true;
    } else {
      const key = trimmed.slice(0, eqIdx).trim();
      const raw = trimmed.slice(eqIdx + 1).trim();
      const val = raw.replace(/^"(.*)"$/, "$1");
      result[key] = val;
    }
  }
  return result;
}

/**
 * 리프 콘텐츠 파싱:
 * - "텍스트" alt="설명" → content: "텍스트", attributes: {alt: "설명"}
 * - Tag1, Tag2 → content: "Tag1, Tag2"
 */
function parseLeafContent(rest: string): {
  content: string;
  attributes: Record<string, string>;
} {
  const attributes: Record<string, string> = {};
  let content = "";

  if (!rest) return { content, attributes };

  // 인용 콘텐츠 추출: "..." 부분
  const quoteMatch = rest.match(/^"([^"]*)"(.*)$/);
  if (quoteMatch) {
    content = quoteMatch[1];
    const remaining = quoteMatch[2].trim();

    // 나머지에서 key="value" 속성 추출
    const attrRegex = /([a-zA-Z_-]+)="([^"]*)"/g;
    let match;
    while ((match = attrRegex.exec(remaining)) !== null) {
      attributes[match[1]] = match[2];
    }
  } else {
    // 인용이 아닌 경우 전체가 콘텐츠 (예: @tech-tags SwiftUI, Alamofire)
    content = rest;
  }

  return { content, attributes };
}
