declare module "*.pdsl" {
  import type { PDSLFrontmatter } from "./dsl/frontmatter";
  import type { RootNode } from "./dsl/ast/nodes";
  import type { DSLError } from "./dsl/errors/types";

  export const frontmatter: PDSLFrontmatter;
  export const ast: RootNode;
  export const errors: DSLError[];
}
