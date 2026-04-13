---
paths:
  - "src/content/**/*.pdsl"
---
# PDSL 콘텐츠 편집 규칙
- YAML 프론트매터 필수 필드 확인 (type, title)
- 프로젝트: index, period, team, role, techStack 필수
- 이미지 경로는 `@/image/` 프리픽스 사용
- `@tag ... @/tag` 쌍이 올바르게 닫혔는지 확인
- 블록 파라미터: `@tag(key=value)` 형식
- 리프 토큰: `@badge(variant=primary) "텍스트"` 형식
