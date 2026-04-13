import { lazy } from "react";

export interface ProjectEntry {
  id: string;
  component: React.LazyExoticComponent<React.ComponentType>;
}

export interface SectionEntry {
  id: string;
  component: React.LazyExoticComponent<React.ComponentType>;
}

export const sections: SectionEntry[] = [
  { id: "hero", component: lazy(() => import("@/app/organisms/HeroSection").then(m => ({ default: m.HeroSection }))) },
  { id: "about", component: lazy(() => import("@/app/organisms/AboutSection").then(m => ({ default: m.AboutSection }))) },
  { id: "profile", component: lazy(() => import("@/app/organisms/ProfileSection").then(m => ({ default: m.ProfileSection }))) },
  { id: "experience", component: lazy(() => import("@/app/organisms/ExperienceSection").then(m => ({ default: m.ExperienceSection }))) },
];

export const projects: ProjectEntry[] = [
  { id: "project-01", component: lazy(() => import("@/app/organisms/ProjectRxCompose").then(m => ({ default: m.ProjectRxCompose }))) },
  { id: "project-02", component: lazy(() => import("@/app/organisms/ProjectFiltee").then(m => ({ default: m.ProjectFiltee }))) },
  { id: "project-03", component: lazy(() => import("@/app/organisms/ProjectPokit").then(m => ({ default: m.ProjectPokit }))) },
  { id: "project-04", component: lazy(() => import("@/app/organisms/ProjectInterest").then(m => ({ default: m.ProjectInterest }))) },
];

export const footer = {
  id: "contact",
  component: lazy(() => import("@/app/organisms/FooterSection").then(m => ({ default: m.FooterSection }))),
};
