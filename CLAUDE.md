# Portfolio Project

@AGENTS.md

## DSL 시스템
- 콘텐츠 수정은 `src/content/*.pdsl` 파일만 편집
- .pdsl 문법: @docs/pdsl-syntax.md 참조
- 새 프로젝트 추가: `/add-project` 스킬 사용
- 빌드 후 시각적 검증 필수 (preview_screenshot)

## 스킬
- `/issue-worktree [설명]` — 이슈→워크트리→PR 자동화
- `/add-project [설명]` — 새 프로젝트 DSL 파일 생성
- `/edit-content [대상]` — DSL 콘텐츠 편집
- `/dsl-validate` — DSL 문법 + 빌드 검증

## 금지사항
- `src/content/` 밖에서 콘텐츠 하드코딩 금지
- 기존 디자인 시스템 컴포넌트 대신 새 컴포넌트 작성 금지
- DSL 파서 수정 시 기존 .pdsl 파일 호환성 유지 필수
