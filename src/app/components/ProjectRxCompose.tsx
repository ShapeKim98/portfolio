import { FadeInView } from "./ParallaxSection";
import { RxComposeArchitectureDiagram } from "./Diagrams";
import {
  SectionInner,
  NumberedFeatureList,
  Eyebrow,
  Figure,
  Divider,
  ContentCard,
  DefList,
} from "./design-system";
import {
  ProjectCover,
  ProjectLayout,
  ProjectSidebar,
  ProjectSubsection,
} from "./ProjectLayout";
import { ClickableImage } from "./ClickableImage";
import showpotPromo from "../../image/쇼팟표지.png";

const META = {
  number: "01",
  title: "RxCompose",
  kind: "library" as const,
  subtitle:
    "RxSwift 기반 단방향 아키텍처 라이브러리 (iOS 13+, RxSwift 6.9+)",
  description:
    "ReactorKit은 Effect 개념이 없기 때문에 상태 변화에 따른 후속 작업을 정의하기 어렵다는 문제점이 있습니다. 이러한 문제점을 해결하기 위해, TCA의 단방향 아키텍처 매커니즘을 RxSwift 환경에 맞춰 구현했습니다. 실제 ShowPot이라는 프로젝트에 활용하여 적용 가능성 테스트 및 개선사항을 점검했습니다.",
  period: "2025.02.17 ~ 2025.03.30",
  role: "iOS 개발",
  team: "iOS 1명",
  techStack: ["Swift Package Manager", "CocoaPods"],
  githubUrl: "https://github.com/ShapeKim98/RxCompose",
};

const FEATURES = [
  {
    title: "Composer 프로토콜",
    desc: "Action 및 State를 정의하고, reducer를 재귀적으로 호출하기 위한 프로토콜. Action을 PublishRelay로 정의하여 Effect가 발생할 때마다 내부 map 연산을 통해 새로운 State를 생성하고, reducer 메서드로 재가공한 뒤 바인딩하는 구조로 구현했습니다. Protocol 기반 제약을 도입하여, 개발자가 설계 의도에 부합하는 구조를 자연스럽게 구현하도록 유도했습니다.",
  },
  {
    title: "Effect 제공",
    desc: "새로운 Action 반환 및 Side Effect를 정의하기 위한 Effect. associatedtype Action을 갖는 Protocol로 추상화하여, 다양한 Action 유형에 대응하는 Effect를 유연하게 처리할 수 있도록 설계했습니다.",
  },
  {
    title: "@PresentState 프로퍼티 래퍼",
    desc: "상태기반 화면 전환을 위한 프로퍼티 래퍼. 모든 Output이 단일 State로 통합되어 있기에, 특정 프로퍼티 변경이 다른 프로퍼티에 영향을 미칠 수 있는 상황을 고려해 대응했습니다. ReactorKit의 Pulse 개념을 참고해, 프로퍼티 래퍼 내부에 변경 카운터를 도입하여 해당 문제를 해결했습니다.",
  },
  {
    title: "@Compose 프로퍼티 래퍼",
    desc: "Action의 흐름을 자동으로 바인딩하기 위한 프로퍼티 래퍼. 초기 RxCompose는 Composer 프로토콜을 채택한 객체 생성 시마다 Action의 PublishRelay를 바인딩해야 하는 번거로움이 있었고, 이에 대응하고자 구성했습니다. 프로퍼티 래퍼를 활용해 init(wrappedValue:) 시점과 wrappedValue의 set 시점에 자동으로 바인딩을 수행하도록 설계하여, 문제를 해결했습니다.",
  },
  {
    title: "@ComposableState 프로퍼티 래퍼",
    desc: "State를 Observable로 활용할 수 있게 하는 프로퍼티 래퍼. wrappedValue와 projectedValue를 활용해 BehaviorRelay를 값과 Observable 형태로 제공합니다.",
  },
  {
    title: "run Effect (Observable & Concurrency)",
    desc: "Observable 및 Swift Concurrency에 대응하기 위한 두 가지 run Effect. RxSwift 기반이기 때문에 Swift Concurrency 기반 비동기 로직을 Reducer의 Effect로 변환하고자 구성했습니다. 커스텀 Observable 내부에 Task를 구성하고, Observer를 파라미터로 받는 비동기 클로저를 실행하도록 설계하여, Observable 기반 Effect에 대응했습니다.",
  },
  {
    title: "timer / interval Effect",
    desc: "주기적인 액션 실행을 위한 timer, interval Effect. 별도의 Disposable을 받아 원하는 시점에 액션 실행을 종료할 수 있도록 구성했습니다.",
  },
];

const EFFECT_USAGE = [
  { term: ".run", desc: "비동기 API 호출 (목록 조회, 구독/해제)" },
  { term: ".send", desc: "액션 연쇄 발행 (API 완료 후 상태 갱신)" },
  { term: ".none", desc: "순수 상태 변이 (선택 토글, UI 상태 등)" },
  { term: ".merge", desc: "병렬 실행 — 홈: 장르·아티스트·공연 동시 조회" },
];

export function ProjectRxCompose() {
  return (
    <article>
      <ProjectCover
        number={META.number}
        title={META.title}
        subtitle={META.subtitle}
        kind={META.kind}
        meta={`${META.period} · ${META.role} · ${META.team}`}
      />

      <section className="py-16 md:py-20">
        <SectionInner>
          <ProjectLayout
            sidebar={
              <ProjectSidebar
                number={META.number}
                title={META.title}
                kind={META.kind}
                period={META.period}
                role={META.role}
                team={META.team}
                techStack={META.techStack}
                githubUrl={META.githubUrl}
              />
            }
          >
            {/* Overview */}
            <ProjectSubsection eyebrow="Overview">
              <p className="text-base font-normal text-muted-foreground leading-relaxed max-w-3xl">
                {META.description}
              </p>
            </ProjectSubsection>

            {/* Architecture */}
            <ProjectSubsection eyebrow="Architecture">
              <div data-print-keep>
                <RxComposeArchitectureDiagram />
              </div>
            </ProjectSubsection>

            {/* Features (numbered, long-form) */}
            <ProjectSubsection eyebrow="Features">
              <NumberedFeatureList
                items={FEATURES.map((f) => ({
                  title: f.title,
                  desc: f.desc,
                }))}
              />
            </ProjectSubsection>

            {/* Use Cases — ShowPot */}
            <ProjectSubsection eyebrow="Use Case">
              <FadeInView>
                <ContentCard>
                  {/* Header — editorial row: [number | name+kind+desc] ← → [meta right-aligned] */}
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-x-6 gap-y-4 mb-5">
                    <div className="flex items-baseline gap-4 min-w-0">
                      <span className="text-xs font-medium tracking-widest text-muted-foreground tabular-nums shrink-0">
                        01
                      </span>
                      <div className="flex flex-col gap-1.5 min-w-0">
                        <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                          적용 사례
                        </span>
                        <h5 className="text-lg font-medium text-foreground tracking-tight leading-tight">
                          ShowPot
                        </h5>
                        <p className="text-sm font-normal text-muted-foreground max-w-prose leading-relaxed">
                          내한 공연 정보 및 티켓팅 알림 iOS 앱 · UIKit +
                          RxSwift + Clean Architecture
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-left md:text-right">
                      <span className="text-xs tracking-widest uppercase text-muted-foreground tabular-nums">
                        2025.03
                      </span>
                      <span className="text-xs text-muted-foreground">
                        PM 1 · 디자이너 2 · 서버 2 · iOS 1 · Android 2
                      </span>
                      <a
                        href="https://github.com/AlreadyTakenSeat/ShowPot-iOS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-foreground hover:opacity-70 transition-opacity"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>

                  <Divider className="mb-5" />

                  <Figure
                    className="mb-6"
                    src={undefined}
                  >
                    <ClickableImage
                      src={showpotPromo}
                      alt="ShowPot 앱 스크린샷"
                      className="w-full object-contain"
                    />
                  </Figure>

                  {/* 적용 범위 */}
                  <div className="flex flex-col gap-1 mb-6">
                    <Eyebrow>적용 범위</Eyebrow>
                    <p className="text-sm font-medium text-foreground">
                      13개 화면 전체에 Composer 패턴 적용
                    </p>
                  </div>

                  {/* Effect 활용 — Definition list (monochrome) */}
                  <div className="flex flex-col gap-3 mb-6">
                    <Eyebrow>Effect 활용</Eyebrow>
                    <DefList items={EFFECT_USAGE} />
                  </div>

                  {/* @PresentState */}
                  <div className="flex flex-col gap-2 pt-5 border-t border-border">
                    <Eyebrow>@PresentState 활용 — 화면 전환 관리</Eyebrow>
                    <p className="text-sm font-normal text-muted-foreground leading-normal">
                      ShowDetail → AlarmSelection, Account → Login 등 화면
                      전환을 상태 기반으로 관리. Optional ViewModel을
                      @PresentState로 선언하여 nil 여부로 present/dismiss를
                      제어했습니다.
                    </p>
                  </div>
                </ContentCard>
              </FadeInView>
            </ProjectSubsection>
          </ProjectLayout>
        </SectionInner>
      </section>
    </article>
  );
}
