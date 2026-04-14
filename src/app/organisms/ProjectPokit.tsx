import { frontmatter, ast } from "@/content/projects/pokit.pdsl";
import { DSLProjectPage } from "../templates/ProjectRenderer";
import type { ProjectFrontmatter } from "../templates/ProjectRenderer";

export function ProjectPokit() {
  return <DSLProjectPage frontmatter={frontmatter as ProjectFrontmatter} ast={ast} />;
}
