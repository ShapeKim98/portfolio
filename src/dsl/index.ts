// AST
export * from "./ast";

// Tokenizer
export { tokenize } from "./tokenizer";
export type { Token, TokenType } from "./tokenizer";

// Parser
export { Parser } from "./parser";
export type { ParseResult } from "./parser";

// Frontmatter
export { parseFrontmatter } from "./frontmatter";
export type {
  PDSLFrontmatter,
  ManifestFrontmatter,
  SectionFrontmatter,
  ProjectFrontmatter,
  FrontmatterResult,
} from "./frontmatter";

// Errors
export { createErrorChain } from "./errors";
export type { DSLError } from "./errors";

// Vite Plugin
export { pdslPlugin } from "./vite";
