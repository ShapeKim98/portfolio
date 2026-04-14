import { FadeInView } from "./animation";
import { ProjectHeader } from "./ProjectHeader";
import { FeatureGrid, RxComposeArchitectureDiagram } from "./diagrams";
import { SubSectionTitle, Badge, Divider } from "../atoms";
import { ContentCard, FeatureCard } from "./";
import { ClickableImage } from "../molecules";
import showpotPromo from "../../image/쇼팟표지.png";

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

export function ProjectRxCompose() {
  return (
    <div>
      <ProjectHeader
        index="01"
        type="library"
        title="RxCompose"
        subtitle="RxSwift 기반 단방향 아키텍처 라이브러리 (iOS 13+, RxSwift 6.9+)"
        period="2025.02.17 ~ 2025.03.30"
        team="iOS 1명"
        role="iOS 개발"
        description="ReactorKit은 Effect 개념이 없기 때문에 상태 변화에 따른 후속 작업을 정의하기 어렵다는 문제점이 있습니다. 이러한 문제점을 해결하기 위해, TCA의 단방향 아키텍처 매커니즘을 RxSwift 환경에 맞춰 구현했습니다. 실제 ShowPot이라는 프로젝트에 활용하여 적용 가능성 테스트 및 개선사항을 점검했습니다."
        techStack={["Swift Package Manager", "CocoaPods"]}
        githubUrl="https://github.com/ShapeKim98/RxCompose"
        screenshotLabel="RxCompose 아키텍처 다이어그램 스크린샷"
        hideScreenshot
      />

      <RxComposeArchitectureDiagram />

      <FadeInView>
        <div className="mb-8">
          <SubSectionTitle size="lg" className="mb-6">
            기능 및 기술 설명
          </SubSectionTitle>
          <div className="space-y-4">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} title={f.title}>{f.desc}</FeatureCard>
            ))}
          </div>
        </div>
      </FadeInView>

      {/* ───── 적용 사례 ───── */}
      <FadeInView>
        <ContentCard>
          {/* 헤더 */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="primary" size="xs">적용 사례</Badge>
              </div>
              <h5 className="text-2xl font-bold text-foreground tracking-snug">ShowPot</h5>
              <p className="text-sm-md font-normal text-muted-foreground mt-1">
                내한 공연 정보 및 티켓팅 알림 iOS 앱 · UIKit + RxSwift + Clean Architecture
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-muted-foreground">2025.03</p>
              <p className="text-xs text-muted-foreground">PM 1 · 디자이너 2 · 서버 2 · iOS 1 · Android 2</p>
              <a
                href="https://github.com/AlreadyTakenSeat/ShowPot-iOS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-1.5 text-xs font-medium text-primary hover:underline"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <Divider className="mb-5" />

          <ClickableImage
            src={showpotPromo}
            alt="ShowPot 앱 스크린샷"
            className="w-full rounded-xl object-contain mb-5"
          />

          {/* 적용 범위 */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-sm font-semibold text-foreground">적용 범위</span>
            <span className="text-sm text-muted-foreground">—</span>
            <span className="text-sm font-medium text-foreground">13개 화면 전체에 Composer 패턴 적용</span>
          </div>

          {/* Effect 활용 */}
          <div className="mb-5">
            <p className="text-sm font-semibold text-foreground mb-3">Effect 활용</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { type: ".run", desc: "비동기 API 호출 (목록 조회, 구독/해제)", color: "#2563eb" },
                { type: ".send", desc: "액션 연쇄 발행 (API 완료 후 상태 갱신)", color: "#7c3aed" },
                { type: ".none", desc: "순수 상태 변이 (선택 토글, UI 상태 등)", color: "#22c55e" },
                { type: ".merge", desc: "병렬 실행 — 홈: 장르·아티스트·공연 동시 조회", color: "#f59e0b" },
              ].map((item) => (
                <div
                  key={item.type}
                  className="flex items-start gap-3 p-3 rounded-xl bg-card border"
                  style={{ borderColor: item.color + "30" }}
                >
                  <span
                    className="shrink-0 text-xs font-bold font-mono px-2 py-0.5 rounded"
                    style={{ color: item.color, backgroundColor: item.color + "12" }}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs font-normal text-muted-foreground leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* @PresentState */}
          <div className="p-3 rounded-xl bg-card border border-border">
            <p className="text-sm font-semibold text-foreground mb-1.5">@PresentState 활용 — 화면 전환 관리</p>
            <p className="text-sm font-normal text-muted-foreground leading-loose">
              ShowDetail → AlarmSelection, Account → Login 등 화면 전환을 상태 기반으로 관리.
              Optional ViewModel을 @PresentState로 선언하여 nil 여부로 present/dismiss를 제어했습니다.
            </p>
          </div>
        </ContentCard>
      </FadeInView>

    </div>
  );
}