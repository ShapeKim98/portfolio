import { lazy } from "react";

const DIAGRAM_MAP: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  "RxComposeArchitecture": lazy(() => import("@/app/organisms/diagrams").then(m => ({ default: m.RxComposeArchitectureDiagram }))),
  "AppleWatchCommunication": lazy(() => import("@/app/organisms/diagrams").then(m => ({ default: m.AppleWatchCommunicationDiagram }))),
  "UndoRedoStack": lazy(() => import("@/app/organisms/diagrams").then(m => ({ default: m.UndoRedoStackDiagram }))),
  "OGTagParsing": lazy(() => import("@/app/organisms/diagrams").then(m => ({ default: m.OGTagParsingDiagram }))),
  "JWTRefresh": lazy(() => import("@/app/organisms/diagrams").then(m => ({ default: m.JWTRefreshDiagram }))),
};

export function getDiagram(name: string) {
  return DIAGRAM_MAP[name] ?? null;
}
