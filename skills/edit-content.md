---
name: edit-content
description: "DSL 파일을 편집하여 포트폴리오 콘텐츠를 수정합니다."
user-invocable: true
argument-hint: "[수정 대상 설명]"
---

사용자의 요청을 분석하여 다음 워크플로우를 순서대로 수행하세요:

## 1. 대상 파일 식별
- 사용자 요청에서 수정 대상 섹션/프로젝트 파악
- `src/content/` 디렉토리에서 해당 .pdsl 파일 찾기
- 파일이 없으면 해당 TSX 컴포넌트를 직접 수정

## 2. 수정 수행
- .pdsl 파일인 경우: YAML 프론트매터 또는 DSL 본문 수정
- TSX 파일인 경우: 컴포넌트 직접 수정
- docs/pdsl-syntax.md 참조하여 문법 준수

## 3. 검증
- `npm run build` 실행
- 에러 발생 시 수정

$ARGUMENTS
