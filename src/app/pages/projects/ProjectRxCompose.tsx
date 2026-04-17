import { frontmatter, ast } from "@/content/projects/rxcompose.pdsl";
import { DSLProjectPage } from "@/app/templates/ProjectRenderer";

export default function ProjectRxCompose() {
  return <DSLProjectPage frontmatter={frontmatter} ast={ast} />;
}
