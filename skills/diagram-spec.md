---
name: diagram-spec
description: "다이어그램 명세를 작성하거나 기존 명세를 기반으로 React 컴포넌트 코드를 생성합니다. @diagram-spec 블록을 해석하고 SVG/JSX로 구현합니다."
user-invocable: true
argument-hint: "[생성|분석|업데이트] [대상 설명]"
---

사용자의 요청을 분석하여 다음 중 적절한 워크플로우를 수행하세요:

## 모드 1: 명세 작성 (새 다이어그램)

사용자가 새 다이어그램을 설명하면:

### 1. 다이어그램 유형 식별
AskUserQuestion으로 유형을 확인:
- horizontal-flow: 가로 흐름도 (아키텍처 의존성 등)
- bidirectional-flow: 양방향 통신 구조
- vertical-flow: 세로 단계별 흐름
- layer-diagram: 계층 구조
- comparison-grid: 대응 비교표
- ui-mockup: UI 목업 설명
- state-diagram: 상태 전환 다이어그램
- custom: 기타

### 2. 명세 작성
`@diagram-spec` 블록으로 구조화:

```
@diagram-spec "다이어그램 제목"
  type: <유형>

  # 구조 설명 (AI가 이해할 수 있는 형태)
  # 각 요소의 label, color, 관계, 방향 등을 YAML-like로 기술

  items:
    - { label: "요소1", color: "#hex", sub: "부제" }
    - { label: "요소2", color: "#hex" }

  connections:
    - from: "요소1" → to: "요소2", label: "관계"

  description: "전체 다이어그램의 의미 설명"
@/diagram-spec
```

### 3. .pdsl 파일에 삽입
- 대상 프로젝트/섹션의 .pdsl 파일 식별
- 적절한 위치에 `@diagram-spec` 블록 삽입

## 모드 2: 명세 → 코드 변환

사용자가 .pdsl의 `@diagram-spec`을 실제 렌더링 가능한 코드로 변환 요청 시:

### 1. 명세 읽기
- 대상 .pdsl 파일에서 `@diagram-spec` 블록 추출
- 명세의 type, items, connections 분석

### 2. 기존 컴포넌트 매핑 시도
다이어그램 유형에 따라 기존 DSL 토큰으로 변환 가능한지 확인:
- horizontal-flow → `@info-box-flow`
- vertical-flow → `@vertical-flow`
- layer-diagram → `@layer-diagram`
- comparison-grid → `@colored-card-grid`

변환 가능하면 해당 DSL 토큰으로 교체.

### 3. 커스텀 컴포넌트 생성 (변환 불가 시)
기존 토큰으로 표현 불가한 경우:
- `src/app/organisms/diagrams/` 에 새 컴포넌트 생성
- 명세의 구조를 props로 받는 데이터 드리븐 컴포넌트 설계
- `organisms/diagrams/index.ts` barrel export 업데이트
- `src/dsl/registry/defaults.ts`에 새 태그 등록

### 4. 검증
- `npm run build` 실행
- 프리뷰로 시각적 확인

## 모드 3: 기존 SVG/JSX → 명세 추출

사용자가 기존 TSX 컴포넌트에서 다이어그램 명세를 추출 요청 시:

### 1. 대상 컴포넌트 읽기
- 인라인 SVG, 커스텀 JSX 레이아웃 식별
- 구성 요소 (박스, 화살표, 라벨, 색상) 추출

### 2. 명세 생성
- 추출한 요소를 `@diagram-spec` 형식으로 구조화
- 각 요소의 의미와 관계를 description에 기술

### 3. .pdsl 파일 업데이트
- 기존 TSX의 해당 부분을 `@diagram-spec` 블록으로 교체

## 다이어그램 명세 작성 가이드라인

### 필수 필드
- type: 다이어그램 유형
- description: AI가 다이어그램의 의미를 이해할 수 있는 설명

### 권장 필드
- items: 구성 요소 목록 (label, color, sub)
- connections: 요소 간 관계 (from, to, label, direction)
- layout: 배치 방향 (horizontal, vertical, grid)

### 색상 컨벤션 (포트폴리오 디자인 시스템)
- 파란색 (#2563eb): 진입점, UI, 시작
- 보라색 (#7c3aed): 중간 처리, 로직
- 노란색 (#f59e0b): 핵심, 도메인
- 초록색 (#22c55e): 데이터, 완료
- 회색 (#64748b): 유틸리티, 기반
- 빨간색 (#ef4444): 에러, 문제

### 예시: 아키텍처 흐름도
```
@diagram-spec "MVI 아키텍처 흐름"
  type: horizontal-flow
  items:
    - { label: "View", sub: "SwiftUI", color: "#2563eb" }
    - { label: "Intent", sub: "User Action", color: "#7c3aed" }
    - { label: "Model", sub: "State", color: "#f59e0b", center: true }
    - { label: "Side Effect", sub: "API/DB", color: "#22c55e" }
  connections:
    - View → Intent: "사용자 입력"
    - Intent → Model: "상태 변경"
    - Model → View: "UI 갱신"
    - Intent → Side Effect: "비동기 작업"
    - Side Effect → Intent: "결과 반환"
  description: "단방향 데이터 흐름으로 View는 Model만 관찰하고, 모든 상태 변경은 Intent를 통해 이루어집니다."
@/diagram-spec
```

$ARGUMENTS
