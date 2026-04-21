import { FadeInView } from "./ParallaxSection";
import { ClickableImage } from "./ClickableImage";
import {
  LayerDiagram,
  DBSchemaWithERD,
  ProblemSolvingBlock,
  SyncFlowDiagram,
} from "./Diagrams";
import {
  SectionInner,
  ContentCard,
  SectionGroup,
  SubSectionTitle,
  TwoColumnLayout,
  NumberedFeatureList,
} from "./design-system";
import { ProjectCover, ProjectLayout, ProjectSidebar, ProjectSubsection } from "./ProjectLayout";
import filteePromo from "../../image/필티표지.png";
import filterScreenshot from "../../image/필터 제작 스크린샷.jpeg";
import chatSearchScreenshot from "../../image/채팅 검색 스크린샷.PNG";
import chatScreenshot from "../../image/실시간 채팅 스크린샷.PNG";

const META = {
  number: "02",
  title: "Filtee",
  kind: "project" as const,
  subtitle: "나만의 필터를 만들고, 공유하고, 필터 작가와 소통하는 감성 필터 플랫폼 (iOS 16+)",
  description: "사용자가 직접 필터를 제작하고 공유하며, 필터 작가와 소통할 수 있는 플랫폼입니다.",
  period: "2025.05.11 ~ 2025.06.12",
  role: "iOS 개발",
  team: "서버 1명, 디자이너 1명, iOS 1명",
  techStack: [
    "SwiftUI",
    "Alamofire",
    "Swift Concurrency",
    "Nuke",
    "SocketIO",
    "KakaoSDK",
    "Firebase",
    "Metal",
  ],
  githubUrl: "https://github.com/ShapeKim98/Filtee",
};

const FEATURES = [
  { title: "소셜로그인 기능", desc: "카카오와 애플 계정을 이용해 간편하게 로그인할 수 있으며, JWT 기반 인증 구조를 통한 사용자 인증 및 자동 로그인을 지원합니다." },
  { title: "사진 필터 조회 기능", desc: "랜덤으로 필터를 소개하는 '오늘의 필터 소개'와 조회 순으로 정렬된 '트렌드' 목록을 제공하며, 커서 기반 페이지네이션을 통해 무한 스크롤 기능을 지원합니다." },
  { title: "세부 정보 조회 기능", desc: "사진 필터의 적용 전후 비교와 메타데이터, 제목, 소개를 확인할 수 있으며, 작가의 프로필과 소개, 보유한 필터 목록까지 함께 조회할 수 있는 세부 정보 기능을 지원합니다." },
  { title: "사진 필터 제작 도구 및 실시간 미리보기", desc: "12가지 필터 조절 항목을 제공하며, 사용자가 조절한 값을 실시간으로 확인할 수 있고, 필터 적용에 대한 실행 취소 및 재실행 기능을 지원합니다." },
  { title: "사진 필터 구매 기능", desc: "사용자가 원하는 사진 필터를 카드나 간편결제로 구매할 수 있도록, 외부 결제 시스템(PG)을 연동해 결제 기능을 지원합니다." },
  { title: "채팅 및 메시지 검색 기능", desc: "실시간으로 채팅을 주고받을 수 있으며, 이전 메시지를 검색해 원하는 대화 위치로 바로 이동할 수 있는 기능을 지원합니다." },
  { title: "검색 기능", desc: "작가 이름을 기준으로 필터 작가를 검색할 수 있으며, 입력한 텍스트에 따라 실시간으로 결과가 반영되는 검색 기능을 지원합니다." },
  { title: "앱 내 이벤트 배너 및 웹브릿지", desc: "앱 내 이벤트를 배너 형태로 노출하고, 웹브릿지를 통해 외부 웹페이지와 앱 사이의 상호작용을 지원합니다." },
];

const APP_LAYERS = [
  { name: "App", desc: "앱 흐름과 생명주기 진입점 제어. 앱의 전반적인 흐름을 조율하며, 앱 생명주기 핸들링과 주요 화면 흐름 전환을 관리합니다. 진입 경로가 명확하게 드러나도록 구성해 구조 파악과 초기화 흐름을 단순하게 유지할 수 있도록 했습니다.", color: "#2563eb" },
  { name: "Feature", desc: "기능 단위로 View와 로직을 통합 구성. 각 기능을 독립된 단위로 구성하여 UI와 상태, 동작을 함께 정의하고 화면 중심으로 구조화했습니다. 기능별로 디렉토리를 나누고 책임을 분리함으로써 기능의 수정 및 확장에 좀 더 유리하도록 구성했습니다.", color: "#7c3aed" },
  { name: "Model", desc: "클라이언트 전용 데이터 모델 정의. 서버에서 명세한 데이터를 직접 사용하지 않고, DTO를 거쳐 클라이언트에서 필요한 형태로 가공한 전용 모델을 정의합니다. 서버 변경이 기능 로직에 영향을 최소화하도록 했습니다.", color: "#f59e0b" },
  { name: "Core", desc: "외부 의존성과 공통 기능 분리. 네트워크, 로컬 DB(CoreData), Metal, DTO 정의 등 외부와의 상호작용을 담당하는 기능을 별도 계층으로 분리했습니다. 다른 계층에 영향을 주지 않고 기능을 독립적으로 교체하거나 확장할 수 있도록 분리했습니다.", color: "#22c55e" },
];

export function ProjectFiltee() {
  return (
    <article>
      <ProjectCover
        number={META.number}
        title={META.title}
        subtitle={META.subtitle}
        kind={META.kind}
        meta={`${META.period} · ${META.role}`}
        imageSrc={filteePromo}
        imageAlt="Filtee 앱 커버"
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
              <NumberedFeatureList items={FEATURES.map((f) => ({ title: f.title, desc: f.desc }))} />
            </ProjectSubsection>

      {/* ───── 프로젝트 설계 ───── */}
      <div>
        <SectionGroup title="프로젝트 설계">

        {/* 바닐라 SwiftUI */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-4">
              바닐라 SwiftUI 선택
            </SubSectionTitle>
            <p className="text-base font-normal text-muted-foreground leading-loose mb-4">
              SwiftUI에서 MVVM을 적용하던 중 @Query 매크로 등과 같은 SwiftData API를 충분히 활용하기 어려운 상황을 경험하며, 애플이 의도한 설계 방향은 자체 제공 API와 UI 프레임워크 간의 긴밀한 연동에 있다는 점을 체감했습니다.
            </p>
            <p className="text-base font-normal text-muted-foreground leading-loose">
              또한 디자인 패턴은 협업 환경에서 컨벤션을 유지하는 데 유효한 수단이지만 이번 프로젝트는 단독으로 진행되었고, 일관된 구조만 갖춘다면 기능 확장이나 추후 iOS 개발자 합류에도 무리가 없다고 판단하여 설계 복잡도를 높이지 않는 선에서 유연한 구조를 선택했습니다.
            </p>
          </ContentCard>
        </FadeInView>

        {/* 4계층 구조 */}
        <FadeInView>
          <div className="mb-4">
            <SubSectionTitle size="md" className="mb-3">
              App - Feature - Model - Core 4계층 구조 설계
            </SubSectionTitle>
            <p className="text-base font-normal text-muted-foreground leading-loose">
              기능 복잡도와 개발 효율성을 고려해 계층 구조는 단순하게 유지하되 각 계층의 책임과 역할은 명확히 나누는 방향으로 설계했습니다. 특히 1인 개발 환경에서 확장성과 유지보수 편의성을 확보하는 실용적인 구조를 목표로 했습니다.
            </p>
          </div>
        </FadeInView>

        <LayerDiagram
          title="4계층 모듈 구조"
          layers={APP_LAYERS}
        />

        {/* 테스트 및 외부 변화 대응 전략 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-3">
              테스트 및 외부 변화 대응 전략
            </SubSectionTitle>
            <p className="text-base font-normal text-muted-foreground leading-loose mb-6">
              구조를 직접 설계해 나가면서 의존성 주입과 외부 변화에 대응할 수 있는 방법에 대해 고민하게 되었고, 이를 고려한 전략들을 설계했습니다.
            </p>
            <div className="space-y-4">
              <ProblemSolvingBlock
                problem="실제 객체와 테스트 객체를 분기 주입해야 하며, Xcode Preview 환경에서도 외부 데이터 통신 없이 독립적으로 동작해야 함"
                solution="SwiftUI Environment 기반 의존성 주입 + Preview 전용 테스트 객체 설계"
                detail="EnvironmentValues와 environment Modifier를 활용하여 실제/테스트 객체를 분기 주입했습니다. Preview는 외부 통신과 단절된 환경이라는 점에서 간이 테스트 수단으로 활용하기에 적합하다고 판단, 테스트용 객체를 별도로 구성하고 주입할 수 있도록 설계했습니다."
              />
              <ProblemSolvingBlock
                problem="외부 API의 응답 형식 변경에 유연하게 대응할 필요"
                solution="API 변경에 따른 클라이언트 영향 최소화 설계"
                detail="DTO를 도입하여 클라이언트 내부 모델과 분리된 구조로 설계했습니다. 이를 통해 API 변경이 클라이언트 로직 전반에 영향을 주지 않도록 했습니다."
              />
            </div>
          </ContentCard>
        </FadeInView>

        {/* ───── 사진 필터 제작 기능 설계 ───── */}
        <FadeInView>
          <SubSectionTitle size="xl" className="mb-3">
            사진 필터 제작 기능 설계
          </SubSectionTitle>
        </FadeInView>

        {/* Metal 선택 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-3">
              고해상도 이미지 보편화에 따른 Metal 선택
            </SubSectionTitle>
            <p className="text-base font-normal text-muted-foreground leading-loose mb-4">
              최근 카메라 기술의 발전으로 고해상도 이미지 사용이 일반화되면서, 슬라이더 조작과 같이 실시간으로 고해상도 이미지를 반복 렌더링해야 하는 기능의 특성상, 렌더링 성능에 대해 고민하게 되었습니다.
            </p>
            <ProblemSolvingBlock
              problem="CIFilter는 렌더링 흐름이 자동 최적화 방식으로 구성되어 있어 개발 편의성이 높지만 시스템 내부 처리 흐름을 개발자가 직접 제어하기 어렵기 때문에 실시간 반응성과 성능 미세조정 측면에서는 다소 제한적"
              solution="Metal을 통해 렌더링 파이프라인을 직접 구성하고, GPU 자원을 보다 직접적으로 활용함으로써 실시간 렌더링 성능을 확보"
              detail="MTLTexture와 MTKView를 통해 렌더링 파이프라인을 직접 구성하고, MTLCommandBuffer로 렌더 명령을 GPU에 직접 제출했습니다. 이를 통해 슬라이더 조작마다 고해상도 이미지를 실시간으로 재렌더링하는 과정에서 CIFilter 대비 더 낮은 지연과 안정적인 프레임 유지를 달성했습니다."
            />
          </ContentCard>
        </FadeInView>

        {/* Undo/Redo Flow */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-4">
              필터값 실행 취소 및 다시 실행 기능 설계
            </SubSectionTitle>

            {/* 2-col: 왼쪽 내용 + 오른쪽 스크린샷 */}
            <TwoColumnLayout
              left={
                <div>
                  {/* 왼쪽: Stack 구조 설명 + 다이어그램 + 스냅샷 전략 */}
                {/* Stack 구조 도입 설명 */}
                <div className="mb-5">
                  <h6 className="text-base font-semibold text-foreground mb-3">필터값 이력의 순서 관리를 위한 Stack 구조 도입</h6>
                  <p className="text-sm-md font-normal text-muted-foreground leading-loose">
                    필터값 상태는 스냅샷 형태로 저장되며, 각 스냅샷은 사용자가 슬라이더 조작을 마칠 때마다 캡처됩니다.
                    작업을 최신순으로 쌓고, 필요 시 가장 최근 작업을 다시 복원하는 흐름은 Stack의 LIFO 특성과 유사하다는 점에서 Stack 구조를 도입했습니다.
                  </p>
                </div>

                {/* Stack 다이어그램 */}
                <div className="p-4 rounded-xl bg-card border border-border mb-5">
                  <h6 className="text-sm font-semibold text-foreground mb-3 text-center">
                    Stack 구조 및 실행 취소 / 다시 실행 흐름
                  </h6>

                  {/* 트리거 행 */}
                  <div className="flex items-end justify-center gap-3 mb-1">
                    <div className="flex flex-col items-center gap-1 flex-1 max-w-[150px]">
                      <div className="w-full px-2 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-center">
                        <span className="text-2xs font-semibold text-blue-600 dark:text-blue-400">슬라이더 조작 완료</span>
                      </div>
                      <div className="flex flex-col items-center gap-0">
                        <div className="w-px h-3 bg-blue-400/60" />
                        <span className="text-3xs font-bold text-blue-500">Push ↓</span>
                      </div>
                    </div>
                    <div className="w-10 shrink-0" />
                    <div className="flex flex-col items-center gap-1 flex-1 max-w-[150px]">
                      <div className="w-full px-2 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/30 text-center">
                        <span className="text-2xs font-semibold text-orange-600 dark:text-orange-400">실행 취소 요청</span>
                      </div>
                      <div className="flex flex-col items-center gap-0">
                        <div className="w-px h-3 bg-orange-400/60" />
                        <span className="text-3xs font-bold text-orange-500">Pop ↓ → Push ↓</span>
                      </div>
                    </div>
                  </div>

                  {/* 스택 본체 */}
                  <div className="flex items-center justify-center gap-3">
                    {/* Undo Stack */}
                    <div className="flex-1 max-w-[150px]">
                      <div className="mb-1.5">
                        <div className="flex items-center justify-between">
                          <p className="text-xxs font-semibold text-blue-600 dark:text-blue-400">실행 취소 Stack</p>
                          <span className="text-3xs font-bold px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500">TOP</span>
                        </div>
                        <p className="text-3xs text-blue-400/80 mt-0.5 leading-snug">최신 작업이 가장 위에 쌓임</p>
                      </div>
                      <div className="flex min-h-[140px] flex-col justify-end rounded-lg border border-dashed border-blue-200 dark:border-blue-900 bg-blue-500/5 p-2">
                        <div className="space-y-1.5">
                          {[
                            { label: "밝기 조정", badge: "최신 작업" },
                            { label: "채도 조정", badge: null },
                            { label: "대비 조정", badge: null },
                          ].map(({ label, badge }, i) => (
                            <div key={label} className="px-2 py-1.5 rounded-md border"
                              style={{
                                borderColor: `rgba(37,99,235,${0.5 - i * 0.1})`,
                                backgroundColor: `rgba(37,99,235,${0.08 - i * 0.02})`,
                                opacity: 1 - i * 0.16,
                              }}>
                              <div className="flex items-center justify-center gap-1">
                                <span className="text-2xs font-semibold text-blue-700 dark:text-blue-300">{label}</span>
                                {badge && (
                                  <span className="text-4xs font-semibold text-blue-500 bg-blue-500/15 px-1 rounded leading-snug">{badge}</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 양방향 화살표 */}
                    <div className="flex flex-col items-center gap-2 shrink-0 w-10">
                      <div className="flex flex-col items-center gap-0.5">
                        <svg width="36" height="9" viewBox="0 0 36 9">
                          <path d="M2 4.5h28M27 1.5l6 3-6 3" fill="none" stroke="#f97316" strokeWidth="1.4"/>
                        </svg>
                        <span className="text-4xs text-orange-500 font-semibold">Undo</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <svg width="36" height="9" viewBox="0 0 36 9">
                          <path d="M34 4.5H6M9 1.5l-6 3 6 3" fill="none" stroke="#3b82f6" strokeWidth="1.4"/>
                        </svg>
                        <span className="text-4xs text-blue-500 font-semibold">Redo</span>
                      </div>
                    </div>

                    {/* Redo Stack */}
                    <div className="flex-1 max-w-[150px]">
                      <div className="mb-1.5">
                        <div className="flex items-center justify-between">
                          <p className="text-xxs font-semibold text-orange-600 dark:text-orange-400">다시 실행 Stack</p>
                          <span className="text-3xs font-bold px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500">TOP</span>
                        </div>
                        <p className="text-3xs text-orange-400/80 mt-0.5 leading-snug">실행 취소된 스냅샷 보존</p>
                      </div>
                      <div className="flex min-h-[140px] flex-col justify-end rounded-lg border border-dashed border-orange-200 dark:border-orange-900 bg-orange-500/5 p-2">
                        <div className="space-y-1.5">
                          {[
                            { label: "밝기 조정", badge: "취소됨" },
                            { label: "채도 조정", badge: null },
                          ].map(({ label, badge }, i) => (
                            <div key={label} className="px-2 py-1.5 rounded-md border"
                              style={{
                                borderColor: `rgba(249,115,22,${0.5 - i * 0.1})`,
                                backgroundColor: `rgba(249,115,22,${0.08 - i * 0.02})`,
                                opacity: 1 - i * 0.16,
                              }}>
                              <div className="flex items-center justify-center gap-1">
                                <span className="text-2xs font-semibold text-orange-700 dark:text-orange-300">{label}</span>
                                {badge && (
                                  <span className="text-4xs font-semibold text-orange-500 bg-orange-500/15 px-1 rounded leading-snug">{badge}</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 스냅샷 시점 전략 */}
                <div>
                  <h6 className="text-base font-semibold text-foreground mb-2">필터값 스냅샷 시점 전략</h6>
                  <p className="text-sm-md font-normal text-muted-foreground leading-loose mb-3">
                    슬라이더 값을 조절할 때마다 필터값을 저장하는 방식은 반복적인 상태 기록이 누적되면서 성능 및 사용자 경험 측면에서 부담이 될 수 있다고 판단했습니다.
                  </p>
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-sm font-medium text-primary leading-loose">
                      스냅샷 시점: DragGesture의 onEnded 시점에 캡처하여 반복적 상태 기록 누적을 방지
                    </p>
                  </div>
                </div>
                </div>
              }
              right={
                <div className="flex justify-center">
                  <ClickableImage
                    src={filterScreenshot}
                    alt="필터 제작 스크린샷"
                    className="w-full max-w-[240px] rounded-2xl"
                  />
                </div>
              }
            />
          </ContentCard>
        </FadeInView>

        {/* ───── 채팅 기능 설계 ───── */}
        <FadeInView>
          <SubSectionTitle size="xl" className="mb-3">
            채팅 기능 설계
          </SubSectionTitle>
        </FadeInView>

        {/* 로컬 DB 도입 배경 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-4">
              로컬 DB 도입 배경
            </SubSectionTitle>
            <p className="text-base font-normal text-muted-foreground leading-loose mb-4">
              채팅 내역은 한 번 저장되면 이후 변경되지 않는 정적인 데이터에 가까워, 채팅방 진입 시마다 동일한 데이터를 서버로부터 반복 요청하는 방식이 과연 효율적인지에 대한 고민이 들었습니다.
            </p>
            <p className="text-base font-normal text-muted-foreground leading-loose">
              더 나아가 로컬 DB를 도입 시 서버 트래픽 개선 뿐만 아니라 실시간 채팅 메시지 검색 시에도 서버를 거치지 않고 클라이언트에서 빠르게 조회할 수 있다는 가능성이 보였습니다. 이러한 점들을 종합적으로 고려하여 로컬 DB를 적용하는 방향으로 설계를 결정하게 되었습니다.
            </p>
          </ContentCard>
        </FadeInView>

        {/* CoreData 선택 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-3">
              CoreData 선택
            </SubSectionTitle>
            <p className="text-base font-normal text-muted-foreground leading-loose">
              프로젝트가 iOS 단독 플랫폼이며 iOS 16 이상을 타겟으로 하고 있다는 점을 고려했습니다. CoreData는 비교적 낮은 iOS 버전에서도 사용할 수 있고, Apple에서 직접 제공하는 퍼스트파티 프레임워크라는 점에서 안정성과 호환성이 높다고 판단했습니다. 특히 채팅 기능에는 날짜 기반 커서 페이지네이션이나 검색어 기반 메시지 조회 등 비교적 복잡한 쿼리가 요구되므로 이를 지원하는 CoreData의 장점이 효과적이라고 생각했습니다.
            </p>
          </ContentCard>
        </FadeInView>

        {/* CoreData Schema + ERD 통합 */}
        <DBSchemaWithERD
          title="DB 모델링 및 쿼리 구조 설계"
          tables={[
            {
              name: "ChatRoom",
              fields: [
                { name: "id", type: "UUID", key: true },
                { name: "lastMessage", type: "Relation" },
                { name: "participants", type: "[Participant]" },
                { name: "messages", type: "[ChatMessage]" },
              ],
            },
            {
              name: "ChatMessage",
              fields: [
                { name: "id", type: "UUID", key: true },
                { name: "content", type: "String" },
                { name: "createdAt", type: "Date" },
                { name: "isHead", type: "Bool" },
                { name: "isTail", type: "Bool" },
                { name: "chatRoom", type: "ChatRoom" },
              ],
            },
            {
              name: "Participant",
              fields: [
                { name: "id", type: "UUID", key: true },
                { name: "name", type: "String" },
                { name: "profileURL", type: "String" },
                { name: "chatRoom", type: "ChatRoom" },
              ],
            },
          ]}
          relations={[
            "ChatRoom ↔ ChatMessage: 1:N 관계 — 채팅방에 속한 메시지를 효율적으로 조회",
            "ChatRoom ↔ Participant: 1:N 관계 — 참여자 목록 조회",
            "ChatRoom → lastMessage: 마지막 메시지와의 관계 설정 — 채팅방 진입 시 DB와 서버 간 마지막 메시지 시점을 비교, 필요한 데이터만 동기화",
            "isHead, isTail: 분 단위 연속 메시지 그루핑 판단 — 저장 시점에 판단 및 기록",
          ]}
        />

        {/* 클라이언트 모델과 동기화 전략 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-4">
              클라이언트 모델과 동기화 전략
            </SubSectionTitle>
            <div className="space-y-4">
              <ProblemSolvingBlock
                problem="로컬 DB 구조와 서버 응답 스키마 간의 차이를 해소해야 함"
                solution="서버와 로컬 DB 간 스키마 통합을 위한 DTO 변환 구조 설계"
                detail="클라이언트 단에서 공통 모델을 정의하고 DTO를 통해 상호 변환하는 구조를 설계했습니다."
              />
            </div>
          </ContentCard>
        </FadeInView>

        {/* 데이터 조회 효율화 — 페이지네이션 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-4">
              데이터 조회 효율화 — 페이지네이션 직접 구현
            </SubSectionTitle>
            <p className="text-sm-md font-normal text-muted-foreground leading-loose mb-4">
              채팅은 실시간으로 데이터가 누적되는 특성이 있어 전체를 한 번에 불러오는 방식은 데이터가 많아질수록 초기 로딩 부담이 커집니다. 또한 오프셋 기반 페이지네이션은 새로운 메시지가 삽입될 때 데이터가 밀려 중복이나 누락이 생길 수 있어, 시간 순으로 정렬되는 채팅 데이터에는 날짜 기반 커서 페이지네이션이 적합하다고 판단했습니다.
            </p>
            <ProblemSolvingBlock
              problem="전체 채팅 데이터를 한 번에 불러오는 방식의 효율성 문제"
              solution="날짜 기반 커서 페이지네이션을 직접 구현해 도입"
              detail="채팅은 실시간으로 쌓이는 데이터 흐름을 갖고 있기 때문에 유연한 커서 기반 페이지네이션이 적합하다고 판단했고, 시간 순으로 정렬되는 데이터 특성을 반영하여 커서를 날짜 기반으로 구성해 의도한 범위만 조회할 수 있도록 했습니다."
            />
            {/* 가로형 플로우 다이어그램 */}
            <div className="mt-6 overflow-x-auto">
              <div className="flex items-start min-w-[560px]">
                {[
                  { step: "1", label: "최신 메시지 N개 조회", desc: "최신 메시지부터 N개 조회. 가장 오래된 날짜를 cursor로 저장", color: "#2563eb" },
                  { step: "2", label: "List셀 재사용 + .task 감지", desc: "상단 셀이 나타나면 SwiftUI .task 모디파이어가 자동 트리거됨", color: "#7c3aed" },
                  { step: "3", label: "cursor 이전 N개 추가 조회", desc: "cursor(날짜) 이전 범위의 메시지를 추가 조회 요청", color: "#7c3aed" },
                  { step: "4", label: "목록 상단 병합 + cursor 갱신", desc: "새 메시지를 목록 상단에 삽입. cursor를 새 범위의 끝으로 갱신", color: "#f59e0b" },
                  { step: "5", label: "데이터 소진 시 종료", desc: "더 이상 불러올 데이터가 없을 때까지 2–4 반복", color: "#22c55e" },
                ].map((item, i, arr) => (
                  <div key={i} className="flex items-start flex-1">
                    <div className="flex flex-col items-center w-full">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xxs font-bold text-white mb-2 shrink-0"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.step}
                      </div>
                      <div
                        className="w-full px-2 py-2.5 rounded-lg bg-card border text-center"
                        style={{ borderColor: item.color + "50" }}
                      >
                        <p className="text-xxs font-semibold leading-snug" style={{ color: item.color }}>{item.label}</p>
                        <p className="text-2xs text-muted-foreground leading-normal mt-1">{item.desc}</p>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex items-start pt-[26px] px-1.5 shrink-0">
                        <svg width="14" height="10" viewBox="0 0 14 10">
                          <path d="M0 5h10M7 1l4 4-4 4" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ContentCard>
        </FadeInView>

        <SyncFlowDiagram
          title="실시간 수신과 동기화 충돌 고려"
          description="채팅방 진입과 동시에 서버와의 동기화 작업이 진행되는 동안에도 실시간 소켓 메시지가 수신될 수 있다는 점을 고려해야했습니다. 소켓 연결은 동기화보다 먼저 수행하고, 동기화 완료 이전에 수신된 메시지는 별도의 대기열(Queue)에 저장하도록 구성했습니다. 동기화가 완료되면 대기열(Queue)에 저장된 메시지를 선처리한 뒤 일반 수신 흐름으로 전환되도록 구현해 실시간성과 데이터 정합성을 보장했습니다."
          steps={[
            { label: "채팅방 진입", color: "#2563eb", desc: "사용자가 채팅방에 접근" },
            { label: "소켓 연결 (동기화 이전)", color: "#2563eb", desc: "동기화보다 소켓을 먼저 연결해 메시지 수신 준비" },
            { label: "서버와 DB 동기화 시작", color: "#f59e0b", desc: "마지막 메시지 시점 기준으로 누락 메시지 조회" },
            { label: "수신 메시지 → 대기열(Queue) 저장", color: "#f59e0b", desc: "동기화 중 수신된 실시간 메시지를 큐에 임시 보관" },
            { label: "동기화 완료", color: "#22c55e", desc: "서버 데이터를 로컬 DB에 병합 완료" },
            { label: "대기열 메시지 선처리", color: "#22c55e", desc: "큐에 보관된 메시지를 우선 적용해 정합성 확보" },
            { label: "일반 수신 흐름 전환", color: "#22c55e", desc: "이후 수신 메시지는 일반 흐름으로 처리" },
          ]}
          problem="채팅방 진입 시 서버 동기화 도중 소켓으로 수신된 메시지가 누락되거나 순서가 뒤틀릴 수 있음"
          solution="소켓 연결을 동기화보다 먼저 시작하고, 동기화 완료 전 수신된 메시지는 Queue에 임시 저장"
          detail="Queue의 FIFO 특성을 활용해 수신 순서를 그대로 보존합니다. 동기화 완료 후 Queue의 메시지를 선처리한 뒤 일반 수신 흐름으로 전환하여 실시간성과 데이터 정합성을 모두 확보했습니다."
          screenshotSrc={chatScreenshot}
          screenshotAlt="실시간 채팅 스크린샷"
        />

        {/* 채팅 검색 기능 설계 — 동일 SyncFlowDiagram 레이아웃 */}
        <SyncFlowDiagram
          title="채팅 검색 시 미로드 영역 스크롤 이동"
          description="검색 결과가 아직 불러오지 않은 메시지 범위에 포함된 경우, 곧바로 해당 위치로 스크롤 이동하는 데 어려움이 생길 수 있다는 점을 고려했습니다."
          steps={[
            { label: "키워드 검색", color: "#2563eb", desc: "로컬 DB에서 키워드 기반 메시지 조회" },
            { label: "검색 메시지 날짜 확인", color: "#7c3aed", desc: "검색된 메시지의 날짜와 현재 cursor 날짜 비교" },
            { label: "미로드 영역 판단", color: "#f59e0b", desc: "메시지 날짜 < 커서 → 아직 로드되지 않은 상태" },
            { label: "커서~날짜 범위 선조회", color: "#f59e0b", desc: "cursor~메시지 날짜 사이 데이터를 먼저 로드" },
            { label: "해당 위치로 스크롤", color: "#22c55e", desc: "ScrollViewProxy로 해당 메시지 위치로 자연스럽게 스크롤" },
          ]}
          problem="검색 결과가 아직 불러오지 않은 메시지 범위에 포함된 경우 스크롤 이동 불가"
          solution="현재 페이지네이션 커서의 날짜와 검색 대상 메시지의 날짜 사이 범위만큼을 먼저 조회한 뒤, 해당 메시지가 포함된 영역으로 자연스럽게 이동되도록 설계"
          detail="검색된 메시지의 날짜와 현재 페이지네이션 커서의 날짜를 비교하여, 대상이 미로드 영역에 해당하면 해당 범위의 데이터를 먼저 선조회합니다. 조회 완료 후 해당 메시지가 포함된 위치로 ScrollViewProxy를 통해 자연스럽게 스크롤 이동합니다."
          screenshotSrc={chatSearchScreenshot}
          screenshotAlt="채팅 검색 스크린샷"
        />

        {/* ───── 결제 기능 설계 ───── */}
        <FadeInView>
          <SubSectionTitle size="xl" className="mb-3">
            결제 기능 설계
          </SubSectionTitle>
        </FadeInView>

        <FadeInView>
          <ContentCard className="mb-8">
            <SubSectionTitle size="md" className="mb-4">
              결제 처리 흐름 설계
            </SubSectionTitle>
            <TwoColumnLayout
              left={
                <div>
                  <h6 className="text-sm-md font-semibold text-foreground mb-3">결제 검증의 주체에 대한 고려</h6>
                  <p className="text-sm-md font-normal text-muted-foreground leading-loose mb-4">
                    결제 기능은 실제 청구가 발생하는 민감한 기능이기 때문에 기능 구현에 앞서 검증 방식에 대한 고민을 했습니다.
                  </p>
                  <p className="text-sm-md font-normal text-muted-foreground leading-loose">
                    앱은 사용자 디바이스에서 실행되기 때문에 탈옥 등의 방법으로 앱을 임의로 변조해 결제 로직을 수정하고, 사용자가 인위적으로 '결제 완료' 상태를 만들 수 있는 위험이 존재합니다. 반면 서버는 개발자가 통제하는 신뢰 가능한 환경이므로 모든 결제 검증은 서버에서 직접 수행하는 것을 원칙으로 했습니다.
                  </p>
                  <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-sm font-medium text-primary">원칙: 결제 검증의 주체는 항상 서버</p>
                  </div>
                </div>
              }
              right={
                <div className="flex flex-col items-center gap-1.5">
                  {[
                    { label: "사용자 필터 구매 시도", desc: "주문 번호 발급 요청", color: "#2563eb" },
                    { label: "PG 결제 진행", desc: "Payment Gateway", color: "#7c3aed" },
                    { label: "결제 완료 → 승인 정보 전달", desc: "앱 → 서버", color: "#f59e0b" },
                    { label: "서버 검증", desc: "금액·상태·주문번호 유효성 확인", color: "#ef4444" },
                    { label: "검증 완료 → 상품 지급", desc: "클라이언트 UI 업데이트", color: "#22c55e" },
                  ].map((step, i, arr) => (
                    <div key={i} className="w-full max-w-[240px]">
                      <div
                        className="px-3 py-2.5 rounded-lg bg-card border text-center"
                        style={{ borderColor: step.color + "50" }}
                      >
                        <span className="text-xs font-semibold" style={{ color: step.color }}>{step.label}</span>
                        {step.desc && <p className="text-2xs text-muted-foreground mt-0.5">{step.desc}</p>}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="flex justify-center py-0.5">
                          <svg width="10" height="12" viewBox="0 0 10 12" className="text-border">
                            <path d="M5 0v8M2 6l3 4 3-4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              }
            />
          </ContentCard>
        </FadeInView>
        </SectionGroup>
      </div>
          </ProjectLayout>
        </SectionInner>
      </section>
    </article>
  );
}
