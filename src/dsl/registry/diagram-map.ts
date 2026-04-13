import type React from "react";
import {
  RxComposeArchitectureDiagram,
  OGTagParsingDiagram,
  AppleWatchCommunicationDiagram,
  UndoRedoStackDiagram,
} from "@/app/organisms/diagrams";

export const DIAGRAM_MAP: Record<string, React.ComponentType> = {
  "RxCompose 단방향 데이터 흐름 구조도": RxComposeArchitectureDiagram,
  "OG 태그 파싱 결과 UI": OGTagParsingDiagram,
  "Apple Watch ↔ iPhone 통신 구조": AppleWatchCommunicationDiagram,
  "Stack 구조 및 실행 취소 / 다시 실행 흐름": UndoRedoStackDiagram,
};
