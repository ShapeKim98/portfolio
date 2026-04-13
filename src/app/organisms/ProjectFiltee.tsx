import { frontmatter, ast } from "@/content/projects/filtee.pdsl";
import { DSLProjectPage } from "../templates/ProjectRenderer";
import type { ProjectFrontmatter } from "@/dsl/frontmatter";
import filteePromo from "../../image/필티표지.png";

export function ProjectFiltee() {
  return <DSLProjectPage frontmatter={frontmatter as ProjectFrontmatter} ast={ast} screenshotSrc={filteePromo} />;
}
