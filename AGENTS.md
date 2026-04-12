# Portfolio Project - Agent Rules

## 개발 워크플로우
- 새로운 기능/수정 작업 시 반드시 `/issue-worktree` 스킬을 사용할 것
- 워크트리를 통해 다른 브랜치 작업과 격리된 환경에서 진행

## 브랜치 규칙
- 형식: `feat/<이슈번호>-<간단한-설명>` (e.g. `feat/3-image-lightbox`)
- base 브랜치: `main`

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

## 기술 스택
- React 18 + TypeScript + Vite
- Tailwind CSS v4
- Radix UI + Motion (framer-motion)
- GitHub Pages 배포 (base: /portfolio/)
