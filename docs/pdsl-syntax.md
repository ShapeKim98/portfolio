# PDSL (Portfolio DSL) 문법 명세

## 파일 구조
```
---
(YAML 프론트매터)
---

(마크다운 확장 본문)
```

## 프론트매터 타입

### manifest
```yaml
type: manifest
title: "김도형 포트폴리오"
nav: [About, Profile, Experience, Projects, Contact]
```

### section
```yaml
type: section
id: hero
sectionType: hero | about | profile | experience | footer
```

### project
```yaml
type: project
index: "01"
title: RxCompose
subtitle: "RxSwift 기반 단방향 아키텍처 라이브러리"
period: "2025.02 ~ 2025.03"
team: "iOS 1명"
role: "iOS 개발"
description: "설명..."
techStack: [Swift Package Manager, CocoaPods]
githubUrl: "https://github.com/..."
appStoreUrl: null
screenshot: "@/image/표지.png"
screenshotLabel: "스크린샷 설명"
hideScreenshot: false
divider: { bg: false }
```

## 본문 문법

### 제목
| DSL | 컴포넌트 |
|---|---|
| `# 제목` | SectionPageHeading |
| `## 제목` | SubSectionTitle size="xl" |
| `### 제목` | SubSectionTitle size="lg" |
| `#### 제목` | SubSectionTitle size="md" |

### 텍스트
| DSL | 설명 |
|---|---|
| 일반 텍스트 | 본문 단락 `<p>` |
| `**bold**` | font-semibold |
| `---` | Divider 구분선 |
| `{.class1 .class2}` | 다음 블록에 Tailwind 클래스 적용 |

### 블록 컴포넌트
| DSL | 컴포넌트 | 파라미터 |
|---|---|---|
| `@card ... @/card` | ContentCard | `padding=sm\|md\|lg`, `className` |
| `@features ... @/features` | FeatureCard 배열 | - |
| `@feature "제목" ... @/feature` | FeatureCard | title 필수 |
| `@feature-list` ... `@/feature-list` | FeatureItem 배열 | 각 `- 항목` |
| `@numbered-steps` ... `@/numbered-steps` | NumberedStep 배열 | `1. 항목` |
| `@section-group "제목" ... @/section-group` | SectionGroup | title |

### 리프 토큰
| DSL | 컴포넌트 | 파라미터 |
|---|---|---|
| `@badge(variant, size) "텍스트"` | Badge | variant=primary\|destructive\|success, size=xs\|sm |
| `@button(href, variant, size, icon) "텍스트"` | IconButton | 모든 props |
| `@tech-tags Tag1, Tag2, ...` | TechTags | 쉼표 구분 |
| `@kv "키" "값"` | KeyValueRow | key, value |
| `@space(N)` | 여백 | Tailwind 단위 |

### 레이아웃
| DSL | 컴포넌트 | 파라미터 |
|---|---|---|
| `@two-column @left...@/left @right...@/right @/two-column` | TwoColumnLayout | - |
| `@grid(cols, gap) @cell...@/cell @/grid` | CSS Grid | cols, gap, className |
| `@flex(direction, gap, align) ... @/flex` | Flex container | direction, gap, align, justify |

### 다이어그램
| DSL | 컴포넌트 |
|---|---|
| `@layer-diagram "제목" @layer(color)...@/layer @/layer-diagram` | LayerDiagram |
| `@vertical-flow @flow-step(color)...@/flow-step @/vertical-flow` | VerticalFlow |
| `@flow-chart "제목" @step...@/step @/flow-chart` | FlowChart |
| `@problem-solution @problem @solution @detail @/problem-solution` | ProblemSolvingBlock |
| `@db-schema @table...@/table @relations...@/relations @/db-schema` | DBSchemaWithERD |
| `@info-box(color, center) "라벨"` | ColoredInfoBox |
| `@info-box-flow(arrow-break) ... @/info-box-flow` | InfoBoxFlow |
| `@colored-card-grid @colored-card(color)...@/colored-card @/colored-card-grid` | ColoredCardGrid |
| `@sync-flow ... @/sync-flow` | SyncFlowDiagram |

### 이미지
| DSL | 컴포넌트 |
|---|---|
| `@image "경로" alt="설명"` | `<img>` |
| `@image(lightbox) "경로" alt="설명"` | ClickableImage |
| `@screenshot-placeholder "라벨"` | ScreenshotPlaceholder |

### 애니메이션
| DSL | 컴포넌트 | 파라미터 |
|---|---|---|
| `@fade-in ... @/fade-in` | FadeInView | delay, speed, direction |
| `@parallax ... @/parallax` | DeepParallax | speed |
| `@scroll-section ... @/scroll-section` | ScrollSection | - |

### 매니페스트 지시어
| DSL | 설명 |
|---|---|
| `@include(path)` | 다른 .pdsl 파일 포함 |
| `@projects ... @/projects` | 프로젝트 섹션 래퍼 |
