import { lazy } from "react";

const DIAGRAM_MAP: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  "RxComposeArchitecture": lazy(() => import("@/app/organisms/diagrams").then(m => ({ default: m.RxComposeArchitectureDiagram }))),
};

export function getDiagram(name: string) {
  return DIAGRAM_MAP[name] ?? null;
}
