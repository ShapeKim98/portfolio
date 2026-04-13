---
paths:
  - "src/app/atoms/**/*.tsx"
  - "src/app/molecules/**/*.tsx"
  - "src/app/organisms/**/*.tsx"
  - "src/app/templates/**/*.tsx"
---
# 디자인 시스템 규칙 (Atomic Design)
- atoms/: 외부 의존 없는 최소 UI만 배치
- molecules/: atoms/ 만 참조 가능
- organisms/: atoms/ + molecules/ 참조 가능
- templates/: atoms/ + molecules/ + organisms/ 참조 가능
- 모든 컴포넌트는 `className` prop 지원
- 색상은 CSS 변수 (`--primary`, `--foreground` 등) 사용
- 하드코딩 색상 금지, `theme.css` 변수 참조
- `cn()` 유틸리티는 `../components/ui/utils`에서 임포트
