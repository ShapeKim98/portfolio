# Portfolio Project - Agent Rules

## 개발 워크플로우
- 기능 추가/버그 수정 시 이슈 기반 브랜치에서 작업할 것
- 브랜치 형식: `feat/<이슈번호>-<간단한-설명>` (e.g. `feat/3-image-lightbox`)
- base 브랜치: `main`

## 빌드 & 테스트
- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm run preview` — 빌드 결과 프리뷰

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

## 배포
- GitHub Pages (base path: /portfolio/)
