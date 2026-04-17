import { frontmatter, ast } from "@/content/projects/interest.pdsl";
import { DSLProjectPage } from "@/app/templates/ProjectRenderer";

export default function ProjectInterest() {
  return <DSLProjectPage frontmatter={frontmatter} ast={ast} />;
}
