---
name: manage-dsl
description: "DSL 태그를 추가, 수정, 삭제합니다. tokens.ts, defaults.ts, 컴포넌트, docs를 일괄 업데이트하고 호환성을 검증합니다."
user-invocable: true
argument-hint: "[add|modify|remove] [태그명]"
---

사용자의 요청을 분석하여 다음 중 적절한 워크플로우를 수행하세요:

## 공통: 현재 DSL 시스템 구조

DSL 태그 관련 파일 (4곳 동기화 필수):
1. `src/dsl/tokenizer/tokens.ts` — `KNOWN_LEAF_TAGS` 세트 (리프 태그만)
2. `src/dsl/registry/defaults.ts` — `registry.register(...)` 컴포넌트 매핑
3. React 컴포넌트 파일 — `src/app/{atoms|molecules|organisms|templates}/`
4. `docs/pdsl-syntax.md` — DSL 문법 문서

---

## 모드 1: 태그 추가 (`add`)

### Step 1: 사전 질문

AskUserQuestion으로 순차적으로 질문:

**질문 1 — 태그 유형:**
```
Q: 태그 유형은 무엇인가요?
  - block: 자식을 가지는 블록 (@tag ... @/tag)
  - leaf: 단일 라인 (@tag(params) "content")
```

**질문 2 — 파라미터:**
```
Q: 파라미터를 알려주세요. (없으면 "없음")
예시: color(string), center(boolean), cols(number, 기본값=2)
```

**질문 3 — Atomic Design 계층:**
```
Q: 컴포넌트 계층은?
  - atom: 최소 UI 단위 (Badge, Divider 수준)
  - molecule: Atom 조합 (IconButton, TechTags 수준)
  - organism: 독립 섹션 단위 (ContentCard, ProjectHeader 수준)
  - template: 레이아웃 뼈대 (TwoColumnLayout 수준)
```

**질문 4 — 컴포넌트:**
```
Q: 컴포넌트 처리 방식은?
  - 새 컴포넌트 생성
  - 기존 컴포넌트 래핑 (어떤 컴포넌트인지 명시)
```

### Step 2: 컴포넌트 생성

새 컴포넌트 생성 시:
1. `src/app/{계층}/{PascalCaseTagName}.tsx` 파일 생성
2. 해당 디렉토리의 `index.ts` barrel export에 추가
3. 컴포넌트는 `className` prop 지원
4. 색상은 CSS 변수 사용 (하드코딩 금지)

기존 컴포넌트 래핑 시:
1. 대상 컴포넌트의 import 경로 확인
2. 필요 시 어댑터 로직을 `defaults.ts` 인라인에 작성

### Step 3: 토크나이저 업데이트 (리프 태그만)

리프 태그인 경우:
- `src/dsl/tokenizer/tokens.ts`의 `KNOWN_LEAF_TAGS` Set에 태그명 추가

블록 태그는 토크나이저 변경 불필요 (파서가 자동 처리).

### Step 4: 레지스트리 등록

`src/dsl/registry/defaults.ts`에 등록 코드 추가:

블록 태그 예시:
```typescript
registry.register({
  tag: "my-tag",
  isBlock: true,
  renderer: ({ node, children }) => (
    <MyTag param={node.params.param}>{children}</MyTag>
  ),
});
```

리프 태그 예시:
```typescript
registry.register({
  tag: "my-tag",
  isBlock: false,
  renderer: ({ node }) => (
    <MyTag content={node.content} variant={node.params.variant} />
  ),
});
```

### Step 5: 문서 업데이트

`docs/pdsl-syntax.md`의 적절한 섹션 테이블에 행 추가:
- 블록 컴포넌트 / 리프 토큰 / 레이아웃 / 다이어그램 중 해당 섹션
- DSL 문법, 매핑 컴포넌트, 파라미터 명시

### Step 6: 검증

1. `npm run build` 실행 → 빌드 성공 확인
2. 기존 `.pdsl` 파일 파싱 정상 확인 (새 태그 추가는 기존 파일에 영향 없음)

---

## 모드 2: 태그 수정 (`modify`)

### Step 1: 현재 태그 정보 수집

다음 파일에서 해당 태그 정보를 읽어 사용자에게 표시:
1. `defaults.ts` — 현재 등록 정보 (isBlock, renderer)
2. `tokens.ts` — KNOWN_LEAF_TAGS 포함 여부
3. 컴포넌트 파일 위치 (Grep으로 탐색)
4. `docs/pdsl-syntax.md` — 현재 문서

### Step 2: 사전 질문

```
Q: 수정 내용을 선택하세요. (멀티셀렉트)
  - 파라미터 추가/제거/이름 변경
  - 렌더링 로직 변경 (다른 컴포넌트로 교체)
  - block ↔ leaf 유형 변환
  - 태그명 변경 (리네임)
```

### Step 3: 영향 분석

**반드시** 수정 전에 실행:
1. `src/content/` 디렉토리에서 해당 태그를 사용하는 모든 `.pdsl` 파일 Grep
2. 사용 중인 파일 목록과 라인 번호를 사용자에게 표시
3. breaking change 여부 판단:
   - 파라미터 추가 (기본값 있으면 non-breaking)
   - 파라미터 제거/이름 변경 (breaking)
   - block↔leaf 변환 (breaking — .pdsl 구문 자체가 변경됨)
   - 태그명 변경 (breaking — 모든 .pdsl에서 치환 필요)

### Step 4: 자동 수행

변경 유형별 처리:

**파라미터 변경:**
1. `defaults.ts`의 renderer 함수 수정
2. 컴포넌트 props 업데이트 (필요 시)
3. docs 테이블 업데이트

**렌더링 로직 변경:**
1. `defaults.ts`의 renderer 함수를 새 컴포넌트로 교체
2. import 경로 업데이트

**block ↔ leaf 변환:**
1. `defaults.ts`의 `isBlock` 값 변경
2. `tokens.ts`의 KNOWN_LEAF_TAGS 추가/제거
3. 사용 중인 `.pdsl` 파일의 구문 변환:
   - block → leaf: `@tag ... @/tag` → `@tag(params) "content"`
   - leaf → block: `@tag(params) "content"` → `@tag(params)\n...\n@/tag`
4. docs 테이블 이동 (블록 ↔ 리프 섹션)

**태그명 변경:**
1. `defaults.ts`의 tag 값 변경
2. `tokens.ts`의 KNOWN_LEAF_TAGS 변경 (리프인 경우)
3. 모든 `.pdsl` 파일에서 `@old-tag` → `@new-tag`, `@/old-tag` → `@/new-tag` 일괄 치환
4. docs 업데이트

### Step 5: 검증

1. `npm run build` 실행
2. 변경된 `.pdsl` 파일이 정상 파싱되는지 확인

---

## 모드 3: 태그 삭제 (`remove`)

### Step 1: 영향 분석

1. `src/content/` 디렉토리에서 해당 태그를 사용하는 모든 `.pdsl` 파일 Grep
2. 결과를 사용자에게 표시
3. 사용 중이면 **경고** 출력 + 대체 태그 제안 (유사 기능 태그가 있는 경우)

### Step 2: 사전 질문

```
Q: 삭제 방식을 선택하세요.
  - 즉시 삭제: 사용 중인 .pdsl 파일도 함께 수정 (해당 블록을 대체 태그로 교체하거나 제거)
  - 점진 삭제: 코드는 유지하되 deprecated 경고 추가 (콘솔에 경고 출력, 추후 정리)
```

### Step 3: 즉시 삭제

1. 사용 중인 `.pdsl` 파일에서 해당 태그 블록을 대체/제거
2. `defaults.ts`에서 `registry.register(...)` 코드 삭제
3. `tokens.ts`의 KNOWN_LEAF_TAGS에서 제거 (리프인 경우)
4. 컴포넌트 파일 삭제 전 확인:
   - Grep으로 해당 컴포넌트를 직접 import하는 곳이 있는지 확인
   - `.pdsl` 외에서 사용 중이면 컴포넌트는 유지하고 레지스트리만 해제
   - 어디서도 미사용이면 컴포넌트 파일 삭제 + barrel export 업데이트
5. `docs/pdsl-syntax.md` 테이블에서 행 삭제

### Step 4: 점진 삭제

1. `defaults.ts`의 renderer에 `console.warn("[PDSL] @태그명 is deprecated")` 추가
2. docs에 `(deprecated)` 표시
3. 컴포넌트/tokens.ts는 변경하지 않음
4. 사용자에게 "추후 /manage-dsl remove로 완전 삭제 가능" 안내

### Step 5: 검증

1. `npm run build` 실행
2. 삭제된 태그가 사용된 `.pdsl` 파일이 있으면 파싱 결과 확인

---

## 안전장치 요약

| 상황 | 대응 |
|---|---|
| 새 태그 추가 | 기존 .pdsl 영향 없음 — 빌드만 확인 |
| 파라미터 변경 (기본값 有) | non-breaking — 빌드 확인 |
| 파라미터 제거/이름변경 | breaking — 사용 중 .pdsl 목록 표시 + 일괄 수정 |
| block↔leaf 변환 | breaking — .pdsl 구문 자동 변환 + 빌드 확인 |
| 태그명 변경 | breaking — .pdsl 일괄 치환 + 빌드 확인 |
| 태그 삭제 (사용 중) | 경고 + 대체 제안 + 사용자 확인 후 처리 |
| 태그 삭제 (미사용) | 바로 삭제 + 빌드 확인 |

$ARGUMENTS
