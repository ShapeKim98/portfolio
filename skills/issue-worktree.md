---
name: issue-worktree
description: "GitHub 이슈 생성 후 git worktree에서 격리된 브랜치 작업을 수행하고 PR을 생성하는 워크플로우. 피처 개발, 버그 수정 등 브랜치 작업이 필요할 때 사용."
user-invocable: true
argument-hint: "[작업 설명]"
---

사용자의 요청을 분석하여 다음 워크플로우를 순서대로 수행하세요:

## 1. 이슈 생성
- 요청 내용을 기반으로 이슈 제목과 본문을 작성
- `gh issue create`로 GitHub 이슈 생성
- 생성된 이슈 번호를 기록

## 2. 워크트리 생성
- `EnterWorktree` 도구를 사용하여 격리된 워크트리를 생성
- name: `feat/<이슈번호>-<간단한-설명>` 형식
- base 브랜치: `main`

## 3. 브랜치 설정
- 워크트리 내에서 `git checkout -b feat/<이슈번호>-<간단한-설명>`

## 4. 작업 수행
- 요청된 기능을 구현
- 작업 단위로 의미 있는 커밋을 생성
- 커밋 메시지 형식: `feat: <설명> (#<이슈번호>)` / `fix:` / `chore:` / `refactor:`
- 작업 완료 후 `npm run build`로 빌드 확인

## 5. 푸시 및 PR 생성
- `git push -u origin <브랜치명>`
- `gh pr create`로 PR 생성
  - 제목: 70자 이내
  - 본문 템플릿:
    ```
    ## Summary
    - <변경 사항 요약>

    ## Test plan
    - [ ] <테스트 항목>

    Closes #<이슈번호>
    ```
  - `gh pr edit`로 본인(리포지토리 소유자)을 assignee로 지정

## 6. 워크트리 정리
- `ExitWorktree`로 워크트리를 정리
- action: "keep" (PR 머지 전까지 유지)

$ARGUMENTS
