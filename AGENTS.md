# Portfolio Project

## Stack
- React 18.3 + TypeScript + Vite 6.3
- Tailwind CSS 4.1 + Motion.dev 12
- Radix UI (48 components) + Custom Design System
- PDSL (Portfolio DSL) 콘텐츠 시스템

## Commands
- `npm run dev` — 개발 서버 (Vite HMR)
- `npm run build` — 프로덕션 빌드
- `npm run preview` — 빌드 프리뷰

## Architecture (Atomic Design + Layered)
- `src/content/` — Content Layer: .pdsl 콘텐츠 파일
- `src/dsl/` — Domain Layer: DSL 엔진 (tokenizer, parser, registry, vite-plugin)
- `src/app/` — Presentation Layer (Atomic Design):
  - `atoms/` — 최소 UI (Badge, Divider, DotSeparator, SubSectionTitle)
  - `molecules/` — Atom 조합 (IconButton, FeatureItem, NumberedStep, ClickableImage)
  - `organisms/` — 독립 섹션 (ContentCard, ProjectHeader, diagrams/, animation/)
  - `templates/` — 레이아웃 (SectionInner, TwoColumnLayout, SectionHeading)
  - `pages/` — App 진입점, DSLRenderer
  - `components/ui/` — Radix UI 공통 컴포넌트
- `src/styles/` — CSS 변수 테마 (theme.css)
- `src/image/` — 프로젝트 이미지 에셋

## DSL
- DSL 문법 명세: `docs/pdsl-syntax.md`
- 콘텐츠 파일: `src/content/**/*.pdsl`
- 콘텐츠 수정 시 반드시 `docs/pdsl-syntax.md` 참조

## Conventions
- 브랜치: `feat/<이슈번호>-<설명>`, base: `main`
- 커밋: `feat:`, `fix:`, `chore:`, `refactor:` + `(#이슈번호)`
- PR: 70자 이내 제목, Summary + Test plan, `Closes #이슈번호`

## Dependency Rules (Atomic Design)
- atoms/ → 외부 의존 없음 (Tailwind만)
- molecules/ → atoms/ 만 참조
- organisms/ → atoms/ + molecules/ 참조
- templates/ → atoms/ + molecules/ + organisms/ 참조
- pages/ → 모든 상위 참조 + dsl/ 참조

## Deployment
- GitHub Pages: base path `/portfolio/`
- Vercel: PR 프리뷰 자동 배포
