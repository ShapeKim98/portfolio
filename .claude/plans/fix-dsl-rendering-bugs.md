# DSL 렌더링 버그 수정 계획

## 발견된 버그 종합 (11가지)

### A. 구조/레이아웃 버그
1. **프로젝트 제목 중복** — ProjectDivider + ProjectHeader에서 번호/이름이 2번 렌더링
   - 영향: 모든 프로젝트 (RxCompose, Filtee, Pokit, 인터레스트)
   - 원인: `ProjectRenderer.tsx`의 `DSLProjectPage`에서 Divider와 Header 양쪽에 동일 정보 전달
   - 수정: ProjectHeader에서 index/title을 제거 (Divider에만 표시)

2. **다이어그램 제목 중복** — `@card` + `#### 제목` 조합 시 card 밖과 안에 제목이 2번
   - 영향: RxCompose "단방향 데이터 흐름 구조도" 등
   - 원인: pdsl 파일에서 `@card` 앞에 `#### 제목`이 있고, card 내부 diagram에도 제목 포함
   - 수정: pdsl 파일에서 중복 제목 제거

3. **섹션 간 간격 누락** — 핵심 기능↔프로젝트 설계 등 섹션 그룹 사이에 마진 없음
   - 영향: 모든 프로젝트의 section-group 사이
   - **원인 (main과 비교)**: main에서는 `<div className="mt-16"><SectionGroup ...>` 형태로 64px 상단 마진이 있었으나, PR의 pdsl에서 `@section-group` → `SectionGroup` 직접 매핑 시 **`mt-16` 래퍼가 누락**
   - 수정: `section-group` 렌더러에 `mt-16` 마진 추가 (`defaults.tsx` 수정)

### B. 이미지 버그
4. **깨진 이미지 4개** — `@image` DSL 태그의 src가 빈 문자열로 렌더링
   - ShowPot 앱 스크린샷 (`rxcompose.pdsl` → `@/image/쇼팟표지.png`)
   - 필터 제작 스크린샷 (`filtee.pdsl` → `@/image/필터 제작 스크린샷.jpeg`)
   - 채팅 검색 스크린샷 (`filtee.pdsl` → `@/image/채팅 검색 스크린샷.PNG`)
   - Tuist Graph (`pokit.pdsl` → `@/image/Tuist Graph — 모듈 의존 관계 시각화.png`)
   - **원인 (main과 비교)**: main에서는 `import filterScreenshot from "../../image/필터 제작 스크린샷.jpeg"` 형태로 Vite static import → resolve됨. PR의 `@image` 렌더러는 `@/image/...` 경로를 Vite import 없이 사용
   - 수정: `@image` 렌더러에서 Vite의 `import.meta.glob`으로 이미지 경로 resolve 로직 추가

### C. 다이어그램 렌더링 버그
5. **빈 다이어그램 박스 31개** — 텍스트 없는 빈 사각형만 표시
   - 영향: Filtee 4계층 모듈 구조, 결제 흐름, 채팅 흐름 등 모든 diagram-spec 기반 다이어그램
   - **원인 (main과 비교)**: main에서는 `APP_LAYERS` 등 구조화된 JS 배열을 `LayerDiagram`, `FlowChart` 등에 props로 직접 전달. PR에서는 `@diagram-spec` 텍스트 블록을 DSL 파서가 파싱하여 전달해야 하는데, 파싱 로직이 불완전하여 빈 데이터 전달
   - 수정: `@diagram-spec` 파서 또는 관련 렌더러(`LayerDiagram`, `FlowChart` 등)의 파싱 로직 수정

6. **LayerDiagram key 에러** — React "Each child should have a unique key" 경고 대량 발생
   - 영향: Filtee의 모든 LayerDiagram 렌더링
   - 원인: `LayerDiagram.tsx`에서 리스트 렌더링 시 key prop 누락
   - 수정: key prop 추가

### D. 콘텐츠 누락/오류
7. **DB 테이블 카드 필드 누락** — ChatRoom, ChatMessage, Participant 각각 id만 표시
   - 영향: Filtee DB 모델링 섹션
   - **원인 (main과 비교)**: main에서는 `DB_TABLES` 배열에 각 테이블의 전체 필드(id, content, createdAt 등)를 정의. PR의 pdsl에서 테이블 정의가 불완전하거나, `@db-schema` 렌더러가 필드를 제대로 파싱하지 못함
   - 수정: pdsl 데이터 확인 후 렌더러 또는 pdsl 수정

8. **ShowPot 적용사례 스타일 부재** — ProjectHeader가 아닌 평문 텍스트로 렌더링
   - 영향: RxCompose 내 ShowPot 사용사례 섹션
   - **원인 (main과 비교)**: main의 RxCompose에서 ShowPot 사용사례는 `ProjectHeader` + 전용 컴포넌트로 렌더링. PR의 pdsl에서는 plain 마크다운/텍스트로 변환됨
   - 수정: pdsl 파일에서 ShowPot 섹션을 적절한 DSL 태그(`@project-header` 등)로 교체

### E. 기타
9. **Framer Motion scroll position 경고** — "container has non-static position"
   - 영향: 스크롤 애니메이션 정확도
   - 원인: `ScrollSection`의 motion.div에 relative 미지정
   - 수정: className에 `relative` 추가

10. **feature-list와 section-group 사이 간격 부재** — 핵심 기능 카드와 다음 섹션 사이
    - 영향: 모든 프로젝트에서 feature 목록 아래
    - **원인 (main과 비교)**: main에서는 `<FadeInView>` + `<FeatureGrid>` 후 `<div className="mt-16">` 래퍼
    - 수정: `@feature-list` 렌더러에 `mb-12` 또는 `@section-group`에 `mt-16` 추가

11. **@fade-in 래퍼 내부 간격** — `@fade-in` 블록들 사이 간격이 원본보다 좁음
    - 영향: 모든 pdsl 콘텐츠
    - **원인 (main과 비교)**: main에서는 `<FadeInView>` 사이에 개별 `mb-*` 클래스를 지정. PR에서는 `@fade-in` 블록이 연속으로 렌더링되며 별도 마진 없음
    - 수정: `@fade-in` 렌더러에 기본 `mb-8` 또는 `space-y-8` 간격 추가

## 수정 순서 (우선순위)

### Phase 1: 치명적 렌더링 버그
1. **#4 깨진 이미지** — `@image` 렌더러에 `import.meta.glob` 기반 resolve 추가
2. **#5 빈 다이어그램 박스** — diagram-spec 파싱 로직 수정
3. **#6 LayerDiagram key 에러** — key prop 추가

### Phase 2: 레이아웃/간격 버그
4. **#3 섹션 간 간격 누락** — `section-group` 렌더러에 `mt-16` 추가
5. **#10 feature-list↔section-group 간격** — `@feature-list`에 `mb-12` 추가
6. **#11 @fade-in 내부 간격** — `@fade-in` 렌더러에 기본 마진 추가
7. **#1 프로젝트 제목 중복** — ProjectHeader에서 index/title 제거
8. **#2 다이어그램 제목 중복** — pdsl 파일 수정

### Phase 3: 콘텐츠 정확성
9. **#7 DB 테이블 필드 누락** — pdsl 데이터 또는 렌더러 수정
10. **#8 ShowPot 스타일** — pdsl에서 적절한 DSL 태그 사용
11. **#9 Framer Motion 경고** — relative 추가

## 수정 대상 파일

| 파일 | 관련 버그 |
|------|----------|
| `src/dsl/registry/defaults.tsx` | #3, #4, #5, #10, #11 (렌더러 수정 핵심) |
| `src/app/templates/ProjectRenderer.tsx` | #1 (제목 중복) |
| `src/app/organisms/diagrams/LayerDiagram.tsx` | #5, #6 (빈 박스 + key 에러) |
| `src/dsl/registry/diagram-map.ts` | #5 (다이어그램 파싱) |
| `src/content/projects/rxcompose.pdsl` | #2, #8 (제목 중복 + ShowPot 스타일) |
| `src/content/projects/filtee.pdsl` | #2, #7 (제목 중복 + DB 테이블) |
| `src/content/projects/pokit.pdsl` | #2 (제목 중복) |
| `src/app/organisms/animation/ScrollSection.tsx` | #9 (Framer Motion 경고) |

## 작업 환경
- 브랜치: `feat/14-atomic-design-restructure` (현재 체크아웃 상태)
- PR: #15에 커밋 & 푸시
- 빌드 확인: `npm run build` 후 프리뷰로 렌더링 검증
