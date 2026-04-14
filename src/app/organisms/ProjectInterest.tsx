import { frontmatter, ast } from "@/content/projects/interest.pdsl";
import { DSLProjectPage } from "../templates/ProjectRenderer";
import type { ProjectFrontmatter } from "../templates/ProjectRenderer";

export function ProjectInterest() {
  return <DSLProjectPage frontmatter={frontmatter as ProjectFrontmatter} ast={ast} />;
}
