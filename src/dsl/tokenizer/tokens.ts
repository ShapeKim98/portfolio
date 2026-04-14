/**
 * PDSL Token Types
 *
 * 토크나이저가 생산하는 토큰 타입.
 * 라인 기반 스캐너로 소스를 토큰 배열로 변환.
 */

export type TokenType =
  | "BLOCK_OPEN" // @card, @features, @grid(cols=2)
  | "BLOCK_CLOSE" // @/card, @/features
  | "LEAF" // @badge(variant=primary) "text"
  | "HEADING" // # Heading
  | "TEXT" // Plain text
  | "LIST_ITEM" // - item or 1. item
  | "CLASS_PREFIX" // {.class1 .class2}
  | "DIVIDER" // ---
  | "BLANK_LINE" // Empty line (paragraph separator)
  | "EOF";

export interface Token {
  type: TokenType;
  /** 태그명: "card", "grid", "badge" 등 */
  tag?: string;
  /** 파라미터: (cols=2, gap=4) */
  params?: Record<string, string | boolean>;
  /** 텍스트 콘텐츠 */
  content?: string;
  /** 속성: alt="설명" */
  attributes?: Record<string, string>;
  /** {.class1 .class2}에서 파싱된 클래스 */
  classes?: string[];
  /** 제목 레벨 (1~6) */
  headingLevel?: number;
  /** 리스트 아이템 인덱스 (numbered list인 경우) */
  listIndex?: number;
  /** 소스 라인 번호 */
  line: number;
}

/** 알려진 리프 태그 목록 (블록 열기/닫기가 아닌 단일 라인 토큰) */
export const KNOWN_LEAF_TAGS = new Set([
  "badge",
  "button",
  "tech-tags",
  "kv",
  "image",
  "screenshot-placeholder",
  "app-screenshot-placeholder",
  "space",
  "include",
  "info-box",
  "diagram",
  "problem",
  "solution",
  "detail",
]);

/** 알려진 슬롯 태그 (named children) */
export const KNOWN_SLOT_TAGS = new Set(["left", "right", "cell"]);
