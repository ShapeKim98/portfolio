import { frontmatter, ast } from "@/content/projects/pokit.pdsl";
import { DSLProjectPage } from "@/app/templates/ProjectRenderer";

export default function ProjectPokit() {
  return <DSLProjectPage frontmatter={frontmatter} ast={ast} />;
}
