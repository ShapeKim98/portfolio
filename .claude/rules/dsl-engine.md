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
