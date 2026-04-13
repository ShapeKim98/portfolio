/**
 * PDSL AST Node Types (Composite Pattern)
 *
 * N-ary Tree: 모든 노드가 children을 가진 균일 인터페이스.
 * React Virtual DOM과 1:1 대응하여 재귀 렌더링에 자연스럽게 매핑됨.
 */

/* ─── 공통 베이스 ─── */

export interface ASTNodeBase {
  /** React key용 안정적 고유 ID (파싱 시 생성) */
  id: string;
  /** 에러 리포팅용 소스 위치 */
  line: number;
}

/* ─── 블록 노드 (자식을 가짐) ─── */

export interface BlockNode extends ASTNodeBase {
  kind: "block";
  /** 태그명: "card", "two-column", "grid", "fade-in" 등 */
  tag: string;
  /** 파라미터: (cols=2) → {cols:"2"}, (lightbox) → {lightbox:true} */
  params: Record<string, string | boolean>;
  children: ASTNode[];
}

/* ─── 슬롯 노드 (named children) ─── */

export interface SlotNode extends ASTNodeBase {
  kind: "slot";
  /** 슬롯명: "left", "right", "cell" */
  name: string;
  children: ASTNode[];
}

/* ─── 리프 노드 (자식 없음) ─── */

export interface LeafNode extends ASTNodeBase {
  kind: "leaf";
  /** 태그명: "badge", "image", "kv", "tech-tags" */
  tag: string;
  params: Record<string, string | boolean>;
  /** 인용 콘텐츠: @badge(variant=primary) "텍스트" → "텍스트" */
  content: string;
  /** 속성: alt="설명" → {alt: "설명"} */
  attributes: Record<string, string>;
}

/* ─── 제목 노드 ─── */

export interface HeadingNode extends ASTNodeBase {
  kind: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
}

/* ─── 단락 노드 ─── */

export interface ParagraphNode extends ASTNodeBase {
  kind: "paragraph";
  /** {.class1 .class2} 프리픽스에서 파싱 */
  classes: string[];
  children: InlineNode[];
}

/* ─── 구분선 노드 ─── */

export interface DividerNode extends ASTNodeBase {
  kind: "divider";
}

/* ─── 인라인 노드 ─── */

export interface TextNode extends ASTNodeBase {
  kind: "text";
  content: string;
}

export interface BoldNode extends ASTNodeBase {
  kind: "bold";
  children: InlineNode[];
}

export type InlineNode = TextNode | BoldNode | LeafNode;

/* ─── 루트 노드 ─── */

export interface RootNode extends ASTNodeBase {
  kind: "root";
  children: ASTNode[];
}

/* ─── Union Type ─── */

export type ASTNode =
  | RootNode
  | BlockNode
  | SlotNode
  | LeafNode
  | HeadingNode
  | ParagraphNode
  | DividerNode
  | TextNode
  | BoldNode;
