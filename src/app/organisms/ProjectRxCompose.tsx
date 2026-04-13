import { frontmatter, ast } from "@/content/projects/rxcompose.pdsl";
import { DSLProjectPage } from "../templates/ProjectRenderer";
import type { ProjectFrontmatter } from "@/dsl/frontmatter";

export function ProjectRxCompose() {
  return <DSLProjectPage frontmatter={frontmatter as ProjectFrontmatter} ast={ast} />;
}
