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
  { id: "project-01", number: "01", title: "RxCompose", component: lazy(() => import("@/app/pages/projects/ProjectRxCompose").then(m => ({ default: m.default }))) },
  { id: "project-02", number: "02", title: "Filtee", bg: true, component: lazy(() => import("@/app/pages/projects/ProjectFiltee").then(m => ({ default: m.default }))) },
  { id: "project-03", number: "03", title: "Pokit", component: lazy(() => import("@/app/pages/projects/ProjectPokit").then(m => ({ default: m.default }))) },
  { id: "project-04", number: "04", title: "인터레스트", component: lazy(() => import("@/app/pages/projects/ProjectInterest").then(m => ({ default: m.default }))) },
];

export const footer = {
  id: "contact",
  component: lazy(() => import("@/app/organisms/FooterSection").then(m => ({ default: m.FooterSection }))),
};
