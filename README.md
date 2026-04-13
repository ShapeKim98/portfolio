# 김도형 | iOS Developer Portfolio

> 포트폴리오 웹사이트 — React + TypeScript + PDSL

## 링크

- **포트폴리오**: https://ShapeKim98.github.io/portfolio/

## 프로젝트 소개

iOS 개발자 김도형의 포트폴리오 웹사이트입니다.
PDSL(Portfolio DSL)을 통해 마크다운 기반 문서에서 웹 콘텐츠를 자동 생성합니다.

## 기술 스택

| 분류 | 기술 |
|---|---|
| Framework | React 18.3 + TypeScript |
| Build | Vite 6.3 |
| Styling | Tailwind CSS 4.1 + CSS Variables |
| Animation | Motion.dev (Framer Motion) 12 |
| Component | Radix UI + Custom Design System |
| Content | PDSL (Portfolio DSL) |
| Deploy | GitHub Pages + Vercel |

## 아키텍처

### Atomic Design + Layered Architecture

```
┌─────────────────────────────────────────────────┐
│                 Content Layer                    │
│              src/content/*.pdsl                  │
├─────────────────────────────────────────────────┤
│                 Domain Layer                     │
│    src/dsl/ (tokenizer, parser, registry)        │
├─────────────────────────────────────────────────┤
│              Presentation Layer                  │
│   atoms → molecules → organisms → templates      │
│                   → pages                        │
└─────────────────────────────────────────────────┘
```

### DSL 파이프라인 (Compiler Pattern)

```
.pdsl → Tokenizer → Parser(재귀 하강) → AST(N-ary Tree) → DSLRenderer → React
```

### 디렉토리 구조

```
src/
├── content/                  # Content Layer (.pdsl)
│   ├── sections/             # 섹션 콘텐츠
│   └── projects/             # 프로젝트 콘텐츠
├── dsl/                      # Domain Layer
│   ├── ast/                  # AST 노드 타입 + Factory
│   ├── tokenizer/            # 라인 기반 스캐너
│   ├── parser/               # 재귀 하강 파서
│   ├── registry/             # 태그→컴포넌트 레지스트리
│   ├── adapters/             # 타입 변환 어댑터
│   ├── builder/              # .pdsl 문서 Builder
│   └── vite/                 # Vite 플러그인
├── app/                      # Presentation Layer
│   ├── atoms/                # Badge, Divider, DotSeparator
│   ├── molecules/            # IconButton, FeatureItem
│   ├── organisms/            # ContentCard, ProjectHeader
│   │   ├── diagrams/         # LayerDiagram, FlowChart
│   │   └── animation/        # FadeInView, ScrollSection
│   ├── templates/            # SectionShell, TwoColumnLayout
│   ├── pages/                # App, DSLRenderer
│   ├── components/ui/        # Radix UI (48 components)
│   └── styles/               # CSS 변수 테마
└── image/                    # 프로젝트 에셋
```

## 기술적 의사결정

### N-ary Tree (AST)
- 블록 중첩 구조에서 자식 탐색 비효율 → N-ary Tree 사용 → O(1) 자식 접근 + React VDOM 1:1 대응
- Heap은 순서 비보장 → 순서 보존되는 트리 구조 채택 → 문서 순서 유지
- Flat List는 삽입/삭제 시 depth 마커 일괄 수정 필요 → 트리로 해결 → 구조 변경 비용 최소화

### 재귀 하강 파서 (Recursive Descent)
- PEG 파서는 빌드 의존성 + 생성 코드 디버깅 어려움 → 직접 재귀 하강 구현 → 에러 메시지 정확
- 상태 머신은 중첩 시 별도 스택 필요 → 재귀 하강은 콜 스택이 중첩 스택 → 추가 구조 불필요
- 파서 에러 시 전체 실패 위험 → 패닉 모드 복구 적용 → 부분 렌더링 가능

### Atomic Design
- 30+ 컴포넌트가 단일 폴더에 혼합 → Atomic 5단계 분류 → 역할/크기별 명확한 위치
- DSL 태그 매핑 시 컴포넌트 탐색 비용 → 단계별 폴더로 매핑 → 레지스트리 구성 용이
- 상위→하위 역참조 위험 → 의존성 방향 규칙 적용 → 순환 참조 방지

### 디자인 패턴
- AST 순회 시 노드 타입별 분기 복잡 → Composite 패턴 → 균일 인터페이스로 재귀 처리
- 노드 ID 생성 분산 → Factory 패턴 → 일관된 ID 생성 캡슐화
- 스킬에서 .pdsl 문자열 조립 에러 → Builder 패턴 → 플루언트 API로 안전한 문서 생성
- 새 태그 추가 시 파서 수정 필요 → Plugin/Extension(Registry) → 등록만으로 확장
- 비타입 props → 컴포넌트 props 불일치 → Adapter 패턴 → 타입 변환 + 검증
- 5개 섹션 패럴렉스 보일러플레이트 중복 → Strategy + Template Method → 설정만 분리

## AI 스킬 (Claude Code)

### `/issue-worktree`
- 이슈-브랜치-PR 수동 관리 비용 → 워크트리 기반 자동화 스킬 → 이슈 생성부터 PR까지 단일 명령
- 브랜치 작업 시 로컬 변경사항 충돌 → git worktree 격리 → 메인 브랜치 영향 없이 병렬 작업

### `/add-project`
- 프로젝트 추가 시 .pdsl 문법 학습 비용 → 구조화된 사전질문(AskUserQuestion) → 답변 기반 자동 생성
- 프론트매터 필드 누락/오류 → Builder 패턴으로 타입 안전하게 조립 → 유효한 .pdsl 보장
- 매니페스트 수동 등록 → 인덱스 자동 할당 + @include 자동 추가 → 즉시 빌드 가능

### `/edit-content`
- .pdsl 수정 시 문법 오류 가능 → DSL 파서 검증 후 편집 → 깨진 문서 방지
- 콘텐츠 위치 파악 어려움 → 요청에서 대상 .pdsl 자동 식별 → 정확한 파일 편집

### `/dsl-validate`
- .pdsl 문법 오류가 빌드 타임에만 발견 → 사전 검증 스킬 → 빌드 전 조기 발견
- 이미지 경로 오타 시 빈 화면 → 경로 존재 여부 검사 → 누락 에셋 사전 탐지

### `/diagram-spec`
- 복잡한 SVG 다이어그램을 코드로 직접 작성하는 비용 → 자연어 명세(`@diagram-spec`)로 기술 → AI가 해석하여 코드 생성
- 기존 다이어그램 수정 시 SVG 좌표 이해 필요 → 명세만 수정하면 재생성 → 비개발자도 다이어그램 편집 가능
- 명세→코드 변환 시 기존 DSL 토큰 재사용 시도 → `@info-box-flow`, `@vertical-flow` 등으로 자동 매핑 → 일관된 디자인 유지

## AI 개발 효율화

### 컨텍스트 최적화
- `.claude/rules/` 경로별 규칙 분리 → 관련 파일 작업 시에만 규칙 로드 → 토큰 절약
- DSL 명세를 `paths` 프론트매터로 조건부 로드 → .pdsl 작업 시에만 주입 → 불필요한 컨텍스트 제거
- CLAUDE.md 200줄 이내 유지 + `@AGENTS.md` 임포트 → 중복 제거

### Multi-AI 호환
- `AGENTS.md` — Cursor, Codex 등 범용 AI 도구 호환 표준
- `CLAUDE.md` — Claude Code 전용 + AGENTS.md 임포트로 중복 없이 확장
- `docs/pdsl-syntax.md` — DSL 명세를 범용 위치에 배치 → 모든 AI가 참조 가능

### DSL 기반 콘텐츠 자동화
- .pdsl 파일만 수정하면 웹 반영 → AI가 TSX 구조를 이해할 필요 없음 → 컨텍스트 비용 감소
- Builder 패턴으로 .pdsl 생성 → 문자열 조립 에러 없이 유효한 DSL 출력
- ComponentRegistry로 태그→컴포넌트 매핑 → 새 컴포넌트 추가 시 파서 수정 불필요

### 자동화 스킬
- `/issue-worktree` — 이슈→브랜치→PR 전체 워크플로우 자동화 → 반복 작업 제거
- `/add-project` — 사전질문 기반 .pdsl 자동 생성 → DSL 문법 학습 없이 프로젝트 추가
- `/dsl-validate` — 빌드 전 검증 → 빌드 실패 시 디버깅 비용 절감

## PDSL (Portfolio DSL)

콘텐츠를 `.pdsl` 파일로 작성하면 자동으로 웹 페이지에 반영됩니다.

```yaml
---
type: project
title: MyProject
techStack: [SwiftUI, Alamofire]
---

### 핵심 기능

@features
  @feature "기능 A"
    기능 A에 대한 상세 설명
  @/feature
@/features

@image(lightbox) "@/image/screenshot.png" alt="스크린샷"
```

전체 문법은 [docs/pdsl-syntax.md](docs/pdsl-syntax.md)를 참조하세요.

## 실행 방법

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 프리뷰
```
