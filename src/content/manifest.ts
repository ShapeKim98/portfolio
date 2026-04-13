import { lazy } from "react";

export interface ProjectEntry {
  id: string;
  number: string;
  title: string;
  bg?: boolean;
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
  { id: "project-01", number: "01", title: "RxCompose", component: lazy(() => import("@/app/organisms/ProjectRxCompose").then(m => ({ default: m.ProjectRxCompose }))) },
  { id: "project-02", number: "02", title: "Filtee", bg: true, component: lazy(() => import("@/app/organisms/ProjectFiltee").then(m => ({ default: m.ProjectFiltee }))) },
  { id: "project-03", number: "03", title: "Pokit", component: lazy(() => import("@/app/organisms/ProjectPokit").then(m => ({ default: m.ProjectPokit }))) },
  { id: "project-04", number: "04", title: "\uc778\ud130\ub808\uc2a4\ud2b8", component: lazy(() => import("@/app/organisms/ProjectInterest").then(m => ({ default: m.ProjectInterest }))) },
];

export const footer = {
  id: "contact",
  component: lazy(() => import("@/app/organisms/FooterSection").then(m => ({ default: m.FooterSection }))),
};
