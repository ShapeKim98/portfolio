import { frontmatter, ast } from "@/content/projects/filtee.pdsl";
import { DSLProjectPage } from "@/app/templates/ProjectRenderer";

export default function ProjectFiltee() {
  return <DSLProjectPage frontmatter={frontmatter} ast={ast} />;
}
