---
name: dsl-validate
description: "모든 DSL 파일의 문법을 검증하고 빌드 테스트를 수행합니다."
user-invocable: true
argument-hint: ""
---

다음 검증을 순서대로 수행하세요:

## 1. .pdsl 파일 문법 검증
- `src/content/` 디렉토리의 모든 .pdsl 파일을 Glob으로 탐색
- 각 파일의 YAML 프론트매터 유효성 확인:
  - `type` 필드 존재 여부
  - 프로젝트: index, title, period, team, role, techStack 필수
  - 섹션: id, sectionType 필수

## 2. 이미지 경로 확인
- .pdsl 파일에서 `@/image/` 또는 `screenshot:` 참조된 이미지 경로 추출
- `src/image/` 디렉토리에서 해당 파일 존재 여부 확인
- 누락된 파일 리포트

## 3. 빌드 테스트
- `npm run build` 실행
- 에러 발생 시 상세 리포트

## 4. 결과 요약
- 검증 결과를 테이블로 요약 출력
- 에러가 없으면 "All validations passed" 출력

$ARGUMENTS
