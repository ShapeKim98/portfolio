import { frontmatter, ast } from "@/content/projects/interest.pdsl";
import { DSLProjectPage } from "../templates/ProjectRenderer";
import type { ProjectFrontmatter } from "@/dsl/frontmatter";
import interestPromo from "../../image/인터레스트표지.png";

export function ProjectInterest() {
  return <DSLProjectPage frontmatter={frontmatter as ProjectFrontmatter} ast={ast} screenshotSrc={interestPromo} />;
}
