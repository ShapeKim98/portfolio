---
paths:
  - "src/dsl/**/*.ts"
---
# DSL 엔진 개발 규칙
- `ast/nodes.ts`의 ASTNode 타입을 수정하면 DSLRenderer도 업데이트
- tokenizer/parser는 React 의존성 없이 순수 함수로 유지
- 에러 복구: 패닉 모드 — 잘못된 토큰 스킵 후 계속 파싱
- 새 블록 태그 추가 시 `registry/defaults.ts`에 컴포넌트 등록 필수
- 새 어댑터 추가 시 `adapters/` 디렉토리에 배치
- DSL 태그 추가/수정/삭제 시 `/manage-dsl` 스킬 사용 권장
- 수동 편집 시 4곳 동기화 체크리스트:
  1. `tokenizer/tokens.ts` KNOWN_LEAF_TAGS (리프 태그인 경우)
  2. `registry/defaults.ts` 레지스트리 등록
  3. 컴포넌트 파일 + barrel export
  4. `docs/pdsl-syntax.md` 문법 문서
  5. 기존 `.pdsl` 파일 호환성 확인 (`npm run build`)
