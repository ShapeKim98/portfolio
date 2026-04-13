import type React from "react";
import { RxComposeArchitectureDiagram } from "@/app/organisms/diagrams";

export const DIAGRAM_MAP: Record<string, React.ComponentType> = {
  "RxCompose 단방향 데이터 흐름 구조도": RxComposeArchitectureDiagram,
};
