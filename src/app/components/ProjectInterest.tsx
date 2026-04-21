import { FadeInView } from "./ParallaxSection";
import { ProblemSolvingBlock } from "./Diagrams";
import {
  SectionInner,
  ContentCard,
  SectionGroup,
  SubSectionTitle,
  NumberedFeatureList,
} from "./design-system";
import {
  ProjectCover,
  ProjectLayout,
  ProjectSidebar,
  ProjectSubsection,
} from "./ProjectLayout";
import interestPromo from "../../image/인터레스트표지.png";

const META = {
  number: "04",
  title: "인터레스트",
  kind: "project" as const,
  subtitle: "사용자 맞춤 인터벌 트레이닝 (iOS 17+)",
  description: "사용자 맞춤 인터벌 트레이닝을 가이드 해주는 서비스입니다.",
  period: "2023.11 ~ 2024.04",
  role: "iOS 개발, 디자인",
  team: "iOS 5명",
  techStack: [
    "SwiftUI",
    "MVVM",
    "Clean Architecture",
    "Tuist",
    "HealthKit",
    "WatchConnectivity",
    "WatchKit",
    "SwiftData",
  ],
  githubUrl: "https://github.com/TEAM-ALOM/interest-iOS",
};

const FEATURES = [
  { title: "인터벌 운동 사용자화 및 로컬 스토리지 저장 기능", desc: "" },
  { title: "운동 타이머 기능", desc: "" },
  { title: "심박수 및 칼로리 추적 기능", desc: "" },
  { title: "심박수 구간에 따른 운동 강도 가이드", desc: "" },
  { title: "애플워치 연동 및 미러링 기능", desc: "" },
];

export function ProjectInterest() {
  return (
    <article>
      <ProjectCover
        number={META.number}
        title={META.title}
        subtitle={META.subtitle}
        kind={META.kind}
        meta={`${META.period} · ${META.role}`}
        imageSrc={interestPromo}
        imageAlt="인터레스트 앱 커버"
      />

      <section className="py-16 md:py-20">
        <SectionInner>
          <ProjectLayout
            sidebar={
              <ProjectSidebar
                subtitle={META.subtitle}
                period={META.period}
                role={META.role}
                team={META.team}
                techStack={META.techStack}
                githubUrl={META.githubUrl}
              />
            }
          >
            <ProjectSubsection eyebrow="Overview">
              <p className="text-base font-normal text-muted-foreground leading-relaxed max-w-3xl">
                {META.description}
              </p>
            </ProjectSubsection>

            <ProjectSubsection eyebrow="Features">
              <ul className="flex flex-col border-t border-border">
                {FEATURES.map((f, i) => (
                  <li
                    key={f.title}
                    className="py-5 border-b border-border grid grid-cols-1 md:grid-cols-[80px_1fr] gap-x-6 gap-y-2"
                  >
                    <span className="text-sm font-medium tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-base font-medium text-foreground leading-snug">
                      {f.title}
                    </h4>
                  </li>
                ))}
              </ul>
            </ProjectSubsection>

            <SectionGroup title="프로젝트 설계">
              {/* WatchConnectivity 설계 */}
              <FadeInView>
                <ContentCard>
                  <SubSectionTitle size="md" className="mb-4">
                    Apple Watch ↔ iPhone 통신 설계
                  </SubSectionTitle>
                  <p className="text-base font-normal text-muted-foreground leading-relaxed mb-6">
                    운동 중 실시간으로 심박수와 칼로리를 아이폰에 전달하고, 아이폰의 운동 제어 명령을 애플워치로 전송하는 양방향 통신 구조가 필요했습니다. WCSession을 통한 1초 주기 동기화로 두 기기 간 일관된 운동 상태를 유지했습니다.
                  </p>

                  {/* 통신 구조 다이어그램 — 원본 컬러 */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6">
                    <div className="w-40 h-40 rounded-2xl border-2 border-blue-500/40 bg-blue-500/5 flex flex-col items-center justify-center p-3">
                      <span className="text-base font-bold text-blue-500 mb-2">Apple Watch</span>
                      <div className="space-y-1 text-center">
                        <span className="block text-xs font-normal text-muted-foreground">HealthKit</span>
                        <span className="block text-xs font-normal text-muted-foreground">WatchKit</span>
                        <span className="block text-xs font-normal text-muted-foreground">HKWorkoutSession</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[11px] font-medium text-muted-foreground">WCSession</span>
                      <div className="flex items-center gap-1">
                        <div className="w-16 md:w-24 h-0.5 bg-primary/30" />
                        <svg width="12" height="8" viewBox="0 0 12 8" className="text-primary">
                          <path d="M0 4h8M6 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-normal text-muted-foreground">심박수, 칼로리</span>
                      <div className="flex items-center gap-1">
                        <svg width="12" height="8" viewBox="0 0 12 8" className="text-primary rotate-180">
                          <path d="M0 4h8M6 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <div className="w-16 md:w-24 h-0.5 bg-primary/30" />
                      </div>
                      <span className="text-[10px] font-normal text-muted-foreground">운동 상태 제어</span>
                      <span className="text-[11px] font-medium text-primary mt-1">1초 주기 동기화</span>
                    </div>
                    <div className="w-40 h-40 rounded-2xl border-2 border-green-500/40 bg-green-500/5 flex flex-col items-center justify-center p-3">
                      <span className="text-base font-bold text-green-600 dark:text-green-400 mb-2">iPhone</span>
                      <div className="space-y-1 text-center">
                        <span className="block text-xs font-normal text-muted-foreground">SwiftUI</span>
                        <span className="block text-xs font-normal text-muted-foreground">SwiftData</span>
                        <span className="block text-xs font-normal text-muted-foreground">Combine Timer</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <ProblemSolvingBlock
                      problem="애플워치에서 측정한 운동 정보를 아이폰으로 실시간 전송 필요"
                      solution="WCSessionDelegate의 session(_:didReceive:) 함수를 활용하여 실시간 전송"
                      detail="애플워치에서 수신한 운동 정보를 아이폰으로 전송함으로써, 실시간 심박수 및 칼로리 측정 기능을 구현했습니다."
                    />
                    <ProblemSolvingBlock
                      problem="애플워치와 아이폰 간 주기적 운동정보 동기화 필요"
                      solution="별도의 Timer 객체 구성을 통해 1초마다 운동정보를 통신"
                      detail="애플워치와 아이폰 간의 주기적인 운동정보 동기화를 구현했습니다."
                    />
                  </div>
                </ContentCard>
              </FadeInView>

              {/* HealthKit 설계 */}
              <FadeInView>
                <ContentCard>
                  <SubSectionTitle size="md" className="mb-4">
                    HealthKit 설계
                  </SubSectionTitle>
                  <p className="text-base font-normal text-muted-foreground leading-relaxed mb-4">
                    운동 데이터의 정확한 측정과 애플 피트니스 앱과의 연동을 위해 HealthKit을 활용했습니다. 권한 관리부터 운동 세션 핸들링까지 체계적으로 설계했습니다.
                  </p>
                  <div className="space-y-4">
                    <ProblemSolvingBlock
                      problem="HealthKit 데이터 접근 권한 관리 필요"
                      solution="HKQuantityType을 활용하여 필요한 운동정보를 정의하고 권한 요청 구성"
                      detail="HKHealthStore의 requestAuthorization(toShare:read:completion:) 메서드를 통해 심박수, 칼로리, 운동 타입 정보 요청 권한을 관리했습니다."
                    />
                    <ProblemSolvingBlock
                      problem="애플 피트니스앱과 운동정보 연동 필요"
                      solution="WorkoutManager를 구성하여 HKWorkoutSession 생성 및 상태 핸들링"
                      detail="HKWorkoutSessionDelegate를 활용해 운동 상태(시작, 종료, 일시정지, 재개)를 핸들링하는 로직을 구현함으로써, 애플의 피트니스앱과 운동정보 연동을 구현했습니다."
                    />
                    <ProblemSolvingBlock
                      problem="애플워치 AOD(Always On Display) 화면 상태 변화 대응 필요"
                      solution="SwiftUI의 ScenePhase Environment를 통해 AOD 화면 상태 변화에 대응"
                    />
                  </div>
                </ContentCard>
              </FadeInView>

              {/* Clean Architecture */}
              <FadeInView>
                <ContentCard>
                  <SubSectionTitle size="md" className="mb-4">
                    Clean Architecture 적용
                  </SubSectionTitle>
                  <p className="text-base font-normal text-muted-foreground leading-relaxed mb-4">
                    HealthKit, WatchConnectivity, SwiftData 등 복잡한 외부 프레임워크를 다루다 보니 ViewModel에 과도한 책임이 집중되는 문제가 생겼습니다. Clean Architecture를 통해 각 역할을 분리했습니다.
                  </p>
                  <ProblemSolvingBlock
                    problem="ViewModel에 HealthKit, WatchConnectivity, SwiftData 로직이 집중되어 유지보수가 어려운 문제"
                    solution="Clean Architecture를 적용하여 외부 프레임워크 로직을 ViewModel에서 분리"
                    detail="HealthKit, WatchConnectivity, SwiftData 로직을 각각 독립된 레이어로 분리함으로써, ViewModel에 과도한 책임이 집중되는 문제를 방지하고 로직의 재사용성과 유지보수성을 향상시켰습니다."
                  />
                </ContentCard>
              </FadeInView>

              {/* 타이머 설계 */}
              <FadeInView>
                <ContentCard>
                  <SubSectionTitle size="md" className="mb-4">
                    타이머 설계
                  </SubSectionTitle>
                  <ProblemSolvingBlock
                    problem="Timer 객체 사용 시 메모리 누수 가능성"
                    solution="Combine의 Timer 객체를 사용해 타이머 기능을 구현하고, AnyCancellable로 작업 취소"
                    detail="Combine의 Timer 퍼블리셔와 AnyCancellable을 활용해 Timer 작업을 필요 시 취소함으로써 메모리 누수를 방지했습니다."
                  />
                </ContentCard>
              </FadeInView>
            </SectionGroup>
          </ProjectLayout>
        </SectionInner>
      </section>
    </article>
  );
}
