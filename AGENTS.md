# Portfolio Project - Agent Rules

## 개발 워크플로우
- 기능 추가/버그 수정 시 이슈 기반 브랜치에서 작업할 것
- 브랜치 형식: `feat/<이슈번호>-<간단한-설명>` (e.g. `feat/3-image-lightbox`)
- base 브랜치: `main`

## 빌드 & 테스트
- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm run preview` — 빌드 결과 프리뷰
- `npm run build:pdf` — 포트폴리오 PDF 추출 (Puppeteer, A4)

## 커밋 컨벤션
- `feat:` 새로운 기능
- `fix:` 버그 수정
- `chore:` 빌드/설정 변경
- `refactor:` 리팩토링
- 이슈 번호 참조: `(#이슈번호)`

## PR 규칙
- 제목: 70자 이내, 한글 OK
- 본문: Summary, Test plan 섹션 포함
- `Closes #이슈번호`로 이슈 자동 닫기

## 스킬 (Skills)
- `/issue-worktree [작업 설명]` — 이슈 생성 -> 워크트리 브랜치 -> 작업 -> 커밋/푸시 -> PR 생성 자동화
  - 소스: `skills/issue-worktree.md`
  - 심볼릭 링크: `.claude/skills/issue-worktree/SKILL.md`

## 컴포넌트 계층
프로젝트 본문은 다음 3단 계층으로 작성한다 (`src/app/components/design-system.tsx`):

- **L1 SectionGroup** — 대챕터 wrapper (예: "프로젝트 설계")
- **L2 DesignGroup** — 대주제 wrapper (예: "채팅 기능 설계")
- **L3 DesignGroup의 자식 (동등 계층)**
  - `DesignUnit` — 소단위 제목+본문
  - `Figure` — 이미지+캡션
  - `HighlightBox` — 강조 박스
  - `TwoColumnLayout` — 2열 비교
  - `ProblemSolvingBlock` / `ProblemSolvingList` — 문제/해결 블록
  - 다이어그램류: `LayerDiagram`, `SyncFlowDiagram`, `DBSchemaWithERD`, `RxComposeArchitectureDiagram`, `InlineDiagram`

새 섹션 추가 시 위 계층을 따를 것.

## PDF 출력 규칙
`npm run build:pdf` 로 추출 (Puppeteer + A4, scale 0.62).

### 페이징 우선순위 매트릭스
| L | 단위 | 정책 |
|---|---|---|
| L0 | `<article>` (각 프로젝트) | 강제 새 페이지 |
| L1 | `SectionGroup` | 강제 새 페이지 |
| L2 | `DesignGroup` | 들어감/미루기/자름 (한 페이지 못 들어가면 자식 단위 분리) |
| L3 | `DesignUnit` | 들어감/미루기/자름 |
| L4 | `TwoColumnLayout` / 다이어그램 | 절대 보호 (`break-inside: avoid`) |
| L5 | `ProblemSolvingBlock` / `HighlightBox` | 절대 보호 |
| L6 | `<p>` / `Figure` / `MetaItem` | 절대 보호 |

> **들어감/미루기/자름**: 현재 페이지 잔여 공간에 들어가면 그대로, 못 들어가면 다음 페이지로 미루기, 새 페이지에서도 초과하면 자식 단위로 자연 분리.

### `data-print-*` anchor (정의: `src/styles/print.css`)
| anchor | 효과 | 자동 부여 위치 |
|---|---|---|
| `data-print-keep` | 절대 보호 (`break-inside: avoid`) | 다이어그램, ProblemSolvingBlock, Figure, HighlightBox |
| `data-print-section-break` | 강제 새 페이지 | SectionGroup, DesignGroup |
| `data-print-design-group` | 들어감/미루기/자름 | DesignGroup |
| `data-print-design-group-head` | 헤더+intro 묶음 보호 | DesignGroup 헤더 |
| `data-print-design-unit` | 들어감/미루기/자름 | DesignUnit |
| `data-print-two-column` | 2열 부모 보호 | TwoColumnLayout |
| `data-print-title-size="xl"` | 다음 콘텐츠와 묶기 | SubSectionTitle xl |
| `data-print-cover` | 표지 보호 (max-h: 60vh) | ProjectCover |
| `data-print-cover-library` | library 표지: 다음 본문과 묶기 (빈 페이지 방지) | ProjectCover (kind="library") |
| `data-print-hide` | PDF에서 숨김 | Navigation, ProgressBar, 사이드바 중복 정보 |

### 새 섹션 추가 가이드
1. "컴포넌트 계층"에 맞춰 작성 (SectionGroup > DesignGroup > L3)
2. 새 다이어그램/특수 블록을 만들면 루트에 `data-print-keep` 부여
3. **비프로젝트 섹션 (Hero/About/Profile/Experience/Footer 등)** 도 의미 묶음 단위로 `data-print-keep` 부여 — `FadeInView` 등 wrapper가 있으면 그곳에 직접
4. `npm run build:pdf` 로 페이지별 위배 확인
5. 위배 점검 항목: DesignGroup 헤더 단독 잔류 / Cover 잘림 / 빈 페이지 / 다이어그램 중간 잘림

## 배포
- GitHub Pages (base path: /portfolio/)
