import { frontmatter, ast } from "@/content/projects/filtee.pdsl";
import { DSLProjectPage } from "../templates/ProjectRenderer";
import type { ProjectFrontmatter } from "../templates/ProjectRenderer";

export function ProjectFiltee() {
  return <DSLProjectPage frontmatter={frontmatter as ProjectFrontmatter} ast={ast} />;
}
