/**
 * PDSL Frontmatter Parser
 *
 * gray-matter로 YAML 프론트매터를 파싱하고 타입별 검증.
 */

import matter from "gray-matter";

/* ─── 프론트매터 타입 ─── */

export interface ManifestFrontmatter {
  type: "manifest";
  title: string;
  nav?: string[];
}

export interface SectionFrontmatter {
  type: "section";
  id: string;
  sectionType: "hero" | "about" | "profile" | "experience" | "footer";
  [key: string]: unknown;
}

export interface ProjectFrontmatter {
  type: "project" | "library";
  index: string;
  title: string;
  subtitle: string;
  period: string;
  team: string;
  role: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  appStoreUrl?: string;
  screenshot?: string;
  screenshotLabel?: string;
  hideScreenshot?: boolean;
  divider?: { bg?: boolean };
}

export type PDSLFrontmatter =
  | ManifestFrontmatter
  | SectionFrontmatter
  | ProjectFrontmatter;

/* ─── 파싱 결과 ─── */

export interface FrontmatterResult {
  frontmatter: PDSLFrontmatter;
  body: string;
}

/* ─── 파싱 함수 ─── */

export function parseFrontmatter(source: string): FrontmatterResult {
  const { data, content } = matter(source);

  return {
    frontmatter: data as PDSLFrontmatter,
    body: content.trim(),
  };
}
