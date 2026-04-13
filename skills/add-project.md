---
name: add-project
description: "새 프로젝트를 DSL 파일로 추가하고 포트폴리오에 반영합니다. 사전질문으로 정보를 수집한 후 .pdsl 파일을 자동 생성합니다."
user-invocable: true
argument-hint: "[프로젝트 설명]"
---

사용자의 요청을 분석하여 다음 워크플로우를 순서대로 수행하세요:

## 1. 정보 수집 (AskUserQuestion 활용)

### 질문 1 — 기본 정보
AskUserQuestion으로 다음을 물어보세요:
- 프로젝트 타입: project / library
- 프로젝트명 (영문)
- 한줄 설명 (subtitle)

### 질문 2 — 팀 & 기간
- 기간 (예: 2025.02 ~ 2025.06)
- 팀 구성 (예: 서버 1명, 디자이너 1명, iOS 1명)
- 본인 역할 (예: iOS 개발)

### 질문 3 — 기술 & 링크
- 기술 스택 (쉼표로 구분)
- GitHub URL
- App Store URL (선택)
- 스크린샷 이미지 파일명 (선택, src/image/ 내)

### 질문 4 — 콘텐츠 구성
포함할 콘텐츠를 멀티셀렉트로 선택:
- 핵심 기능 설명 (제목 + 상세)
- 아키텍처/설계 다이어그램
- 문제-해결 사례
- DB 스키마
- 기술 구현 (numbered steps)

선택한 항목별로 추가 질문을 진행합니다.

## 2. .pdsl 파일 생성
- `src/content/projects/<kebab-name>.pdsl` 파일 생성
- 프론트매터에 수집한 메타데이터 작성
- 본문에 선택한 콘텐츠 구성 템플릿 작성

## 3. 매니페스트 업데이트
- `src/content/manifest.ts`의 projects 배열에 새 항목 추가
- 인덱스 번호는 기존 마지막 번호 + 1

## 4. TSX 컴포넌트 생성 (필요시)
- 기본 프로젝트 컴포넌트 생성 at `src/app/organisms/Project<Name>.tsx`
- ProjectHeader는 프론트매터에서 자동 생성

## 5. 검증
- `npm run build` 실행
- 에러 발생 시 수정

$ARGUMENTS
