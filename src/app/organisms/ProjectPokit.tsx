import { frontmatter, ast } from "@/content/projects/pokit.pdsl";
import { DSLProjectPage } from "../templates/ProjectRenderer";
import type { ProjectFrontmatter } from "@/dsl/frontmatter";
import pokitPromo from "../../image/포킷표지.png";

export function ProjectPokit() {
  return <DSLProjectPage frontmatter={frontmatter as ProjectFrontmatter} ast={ast} screenshotSrc={pokitPromo} />;
}
