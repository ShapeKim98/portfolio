import { FadeInView } from "./ParallaxSection";
import { ProjectHeader } from "./ProjectHeader";
import { AppScreenshotPlaceholder, FeatureGrid, LayerDiagram, ProblemSolvingBlock, ScreenshotPlaceholder } from "./Diagrams";
import { ContentCard, SectionGroup, SubSectionTitle, TwoColumnLayout, VerticalFlow } from "./design-system";
import { ClickableImage } from "./ClickableImage";
import pokitPromo from "../../image/포킷표지.png";
import tuistGraph from "../../image/Tuist Graph — 모듈 의존 관계 시각화.png";
import linkThumb1 from "../../image/link-thumbnail-1.jpg";
import linkThumb2 from "../../image/link-thumbnail-2.jpg";

const FEATURES = [
  { title: "소셜 로그인 기능", desc: "애플과 구글 계정으로 간편하게 로그인할 수 있으며, JWT 기반 인증 구조를 통해 안전한 사용자 인증과 자동 로그인을 지원합니다." },
  { title: "링크 저장 기능", desc: "사용자가 원하는 웹페이지 링크를 저장하면 제목과 썸네일을 자동으로 파싱해 정리된 형태로 보여주며, 이후 카테고리별로 손쉽게 관리할 수 있습니다." },
  { title: "카테고리 생성 및 분류 기능", desc: "사용자가 직접 카테고리를 생성하고 저장한 링크를 주제별로 분류하여, 다양한 목적에 맞춰 체계적으로 관리할 수 있습니다." },
  { title: "저장한 링크 검색 기능", desc: "제목, 카테고리, 저장 날짜를 기준으로 필터링하며 원하는 링크를 정확하고 효율적으로 검색할 수 있습니다." },
  { title: "공유 기능 (링크, 카테고리)", desc: "개별 링크는 앱 내 공유 기능으로, 카테고리는 카카오톡을 통해 다른 사용자와 손쉽게 공유할 수 있습니다." },
  { title: "링크 추천 기능", desc: "공개 설정된 카테고리를 기반으로 주제에 맞는 링크를 다른 사용자에게 추천하거나, 나에게 맞는 추천을 받아 새로운 콘텐츠를 발견할 수 있습니다." },
  { title: "즐겨찾기 및 안 읽음 관리", desc: "자주 확인하거나 다시 보고 싶은 링크는 즐겨찾기로 고정할 수 있으며, 아직 읽지 않은 링크는 '안 읽음' 상태로 표시되어 나중에 쉽게 찾아볼 수 있습니다." },
  { title: "미분류 링크 관리 기능", desc: "카테고리에 속하지 않은 미분류 링크를 한눈에 모아 확인할 수 있으며, 필요 시 손쉽게 다른 카테고리로 이동시켜 정리할 수 있습니다." },
];

const MODULE_LAYERS = [
  { name: "App", desc: "앱의 진입점과 전체 흐름 제어. 사용자에게 노출되는 최상위 실행 단위로, 실제 앱의 시작점 역할을 담당합니다. 앱 생명주기 관리, 루트 뷰 구성 등 앱 전체의 흐름을 조율하는 책임을 가집니다.", color: "#2563eb" },
  { name: "Feature", desc: "기능 단위 모듈들이 모인 화면 중심 구성. 로그인, 링크 저장, 검색 등 개별 기능 단위 모듈의 집합입니다. 각 기능은 UI·상태·로직을 하나의 단위로 통합하며, 독립 실행이 가능한 데모 앱 형태로 구성되어 기능별 기기 테스트와 디버깅 효율을 높였습니다.", color: "#7c3aed" },
  { name: "Domain / DSKit", desc: "클라이언트 전용 모델 및 디자인 시스템 정의. 서버 응답 모델과 분리된 클라이언트 전용 데이터 모델을 정의하고, 공통 디자인 시스템 컴포넌트를 제공하는 중간 계층입니다. 여러 기능에서 반복적으로 사용되며 상위 Feature 모듈에 공통된 로직을 제공합니다.", color: "#f59e0b" },
  { name: "CoreKit", desc: "외부 시스템과의 통신 및 기술 추상화 담당. 네트워크 요청, DTO 정의 등 외부 의존성과의 연결을 담당하는 계층입니다. Domain과 Feature 모두에서 공통으로 사용되기 때문에 재사용성이 높으며, 다른 계층의 변경에 영향을 받지 않도록 독립적 구조로 설계했습니다.", color: "#22c55e" },
  { name: "Util / SharedThirdPartyLib", desc: "전 계층에서 활용 가능한 공통 기반. 범용 유틸리티, 확장(Extension), 외부 라이브러리 등을 포함한 최하위 공통 계층입니다. 모든 모듈에서 참조 가능한 구조로 설계되어 있으며, 재사용성을 목표로 했습니다.", color: "#64748b" },
];

export function ProjectPokit() {
  return (
    <div>
      <ProjectHeader
        index="03"
        type="project"
        title="Pokit"
        subtitle="간편 링크 아카이빙 앱 (iOS 16+)"
        period="2024.05.11 ~ 2024.08.27 (유지보수 중)"
        team="PM 1명, 디자이너 2명, 서버 2명, iOS 2명, 안드로이드 2명"
        role="iOS 개발"
        description="간편하게 링크를 저장하고, 분류하고, 잊지 않고 볼 수 있도록 도와주는 서비스입니다."
        techStack={["SwiftUI", "TCA", "Modular Architecture", "Tuist", "Github Actions", "Fastlane", "Moya", "Nuke", "KakaoSDK", "Firebase", "Share Extension"]}
        githubUrl="https://github.com/YAPP-Github/Pokit-iOS"
        appStoreUrl="https://apps.apple.com/kr/app/pokit-%ED%8F%AC%ED%82%B7-%EA%B0%84%ED%8E%B8-%EB%A7%81%ED%81%AC-%EC%95%84%EC%B9%B4%EC%9D%B4%EB%B9%99-%EC%95%B1/id6514313808"
        screenshotLabel="Pokit 앱 스크린샷"
        screenshotSrc={pokitPromo}
      />

      <FadeInView>
        <SubSectionTitle size="lg" className="mb-6">핵심 기능</SubSectionTitle>
        <FeatureGrid features={FEATURES} />
      </FadeInView>

      {/* ───── 프로젝트 설계 ───── */}
      <div className="mt-16">
        <SectionGroup title="프로젝트 설계">

        {/* Tuist Graph */}
        <FadeInView>
          <ClickableImage
            src={tuistGraph}
            alt="Tuist Graph — 모듈 의존 관계 시각화"
            className="w-full rounded-2xl object-contain bg-white p-4"
          />
        </FadeInView>

        {/* Modular Architecture 도입 */}
        <FadeInView>
          <SubSectionTitle size="lg" className="mb-4">
            Modular Architecture 도입
          </SubSectionTitle>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: "기능 테스트 과정의 간소화",
                desc: "프로젝트 개발이 점점 고도화됨에 따라, 특정 기능을 검증하기 위해 여러 단계를 거쳐야 하는 상황을 개선하고자 했습니다. 이에 테스트 흐름을 보다 간결하고 효율적으로 설계해 개발 과정의 집중도를 높였습니다.",
              },
              {
                title: "빌드 효율성 향상",
                desc: "하나의 기능을 점검할 때 전체 프로젝트보다 해당 기능만 빌드하는 것이 더 효율적이라고 판단했습니다. 이에 필요한 기능만 빠르게 빌드하고 실행할 수 있도록 모듈 단위 빌드 구조를 설계하여, 전체 빌드 시간을 단축하고 개발 효율을 높였습니다.",
              },
              {
                title: "확장성과 재사용성 강화",
                desc: "프로젝트의 규모가 커질수록 유지보수와 확장을 유연하게 이어가기 위해, 기능과 계층을 단순한 코드 단위가 아닌 독립적인 모듈 단위로 구성할 필요가 있다고 판단했습니다. 모듈 단위 구성은 각 기능의 책임을 명확히 하고, 다른 코드와의 의존성을 줄여 관심사 분리(Separation of Concerns)를 실현합니다.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-muted/40 border border-border">
                <h6 className="text-base font-semibold text-foreground mb-2">{item.title}</h6>
                <p className="text-sm font-normal text-muted-foreground leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Tuist 도입 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-4">
              Modular Architecture를 위한 Tuist 도입
            </SubSectionTitle>
            <div className="space-y-4">
              <ProblemSolvingBlock
                problem="코드 레벨 분리만으로는 모든 코드에 접근이 가능해 개발자의 의도치 않은 참조나 책임 혼선이 발생할 수 있음"
                solution="물리적 의존성 분리를 통한 책임 명확화"
                detail="타겟 기반으로 모듈을 분리해 접근 범위를 물리적으로 제한하고, 각 개발자가 접근 제어자를 통해 명확한 책임을 직접 관리할 수 있도록 설계했습니다. 이를 통해 협업 시에도 일관된 구조와 책임 분리가 자연스럽게 유지되는 개발 환경을 구축했습니다."
              />
              <ProblemSolvingBlock
                problem="9개 주요 기능의 워크스페이스, 프로젝트, SPM 패키지, 디렉터리 구성에 큰 리소스 필요"
                solution="Tuist를 활용한 모듈화 자동화"
                detail="Tuist를 도입하여 Swift 코드 기반으로 프로젝트 생성을 자동화했습니다. 모듈을 열거형(Enum)으로 정의하고, 공통 설정을 Swift 메서드로 추상화하여 반복 작업을 최소화했으며, Tuist Template을 활용해 디렉터리와 필수 파일 구성을 자동화했습니다. 그 결과, 새로운 모듈 추가 시 열거형 케이스 한 줄 추가와 명령어 한 줄이면 모듈 추가가 자동으로 완성되는 구조를 구축했습니다."
              />
            </div>
          </ContentCard>
        </FadeInView>

        {/* Tuist Graph 장점 */}
        <FadeInView>
          <div className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/10">
            <SubSectionTitle size="md" className="mb-3">
              프로젝트 구조 시각화 및 유지보수 향상
            </SubSectionTitle>
            <p className="text-base font-normal text-muted-foreground leading-loose">
              Tuist의 가장 큰 장점 중 하나가 모듈 관계를 시각적으로 확인할 수 있다는 점입니다. Tuist에서 제공하는 <code className="px-1.5 py-0.5 rounded bg-muted text-sm-md font-medium">tuist graph</code> 명령어를 활용해 프로젝트의 전체 모듈 구조와 의존 관계를 명확히 파악했습니다. 이를 통해 프로젝트 구조를 점검하여, 향후 확장 및 리팩토링 방향을 체계적으로 수립할 수 있는 기반을 마련했습니다.
            </p>
          </div>
        </FadeInView>

        {/* 모듈 구성 및 레이어 설계 */}
        <FadeInView>
          <div className="mb-4">
            <SubSectionTitle size="lg" className="mb-3">
              모듈 구성 및 레이어 설계
            </SubSectionTitle>
            <p className="text-base font-normal text-muted-foreground leading-loose">
              계층화된 모듈 구조를 통해 기능 단위 분리, 공통 로직 재사용, 멀티 타겟 대응을 유연하게 수행할 수 있는 구조를 고민했습니다. 특히 모듈 간의 의존성을 단방향으로 유지하고, 재사용성이 높을수록 아래에 배치하는 전략을 통해 구조의 일관성과 유지보수성을 확보했습니다.
            </p>
          </div>
        </FadeInView>

        <LayerDiagram title="모듈 계층 구조" layers={MODULE_LAYERS} />

        {/* ───── URL 제목 및 썸네일 파싱 설계 ───── */}
        <FadeInView>
          <SubSectionTitle size="xl" className="mb-3">
            URL 제목 및 썸네일 파싱 설계
          </SubSectionTitle>
          <p className="text-base font-normal text-muted-foreground leading-loose mb-6">
            링크 저장 서비스의 특성상, 사용자가 저장한 웹페이지의 썸네일 이미지와 제목을 안정적으로 파싱하는 것이 핵심 UX 중 하나였습니다. 이를 구현하는 과정에서 다음과 같은 설계적 고민 및 문제 해결이 있었습니다.
          </p>
        </FadeInView>

        <FadeInView>
          <TwoColumnLayout
            left={
              <div className="space-y-4">
                <ProblemSolvingBlock
                  problem="일부 사이트에서 사용자 에이전트를 명시하지 않으면 OG 태그 데이터를 반환하지 않음"
                  solution="사용자 에이전트를 명시적으로 지정하는 방식으로 해결"
                  detail="대부분의 웹사이트는 OG(Open Graph) 태그를 통해 제목과 썸네일 정보를 원활히 제공했지만, 일부 사이트에서는 요청 시 사용자 에이전트를 명시해야 정상적으로 데이터를 반환하는 사례가 있었습니다."
                />
                <ProblemSolvingBlock
                  problem="OG 태그를 지원하지 않는 사이트에서 제목과 썸네일 정보를 파싱할 수 없음"
                  solution="사용자가 직접 제목을 입력하고 기본 썸네일 이미지를 자동 삽입하는 UX 개선안을 PM에게 제안"
                  detail="이를 단순히 오류로 처리하기보다, 사용자 경험 저하를 최소화하는 방향으로 해결했습니다."
                />
              </div>
            }
            right={
              <div className="flex flex-col items-center justify-center gap-4">
              {/* OG 태그 파싱 성공 */}
              <div className="w-full max-w-[335px]">
                <p className="text-xs font-semibold text-primary mb-1.5 tracking-snug">OG 태그 파싱 성공</p>
                <div className="rounded-xl border border-border bg-card shadow-[2px_2px_6px_rgba(0,0,0,0.06)] overflow-hidden">
                  <div className="flex items-center gap-4 pr-5">
                    <img src={linkThumb1} alt="" className="w-[124px] h-[108px] object-cover shrink-0" />
                    <div className="flex flex-col gap-2 min-w-0 py-3">
                      <p className="text-base font-semibold leading-[18px] tracking-[-0.15px] text-foreground line-clamp-2">
                        자연 친화적인 라이프스타일을 위한 환경 보호 방법
                      </p>
                      <p className="text-sm font-normal leading-[16px] tracking-[-0.13px] text-muted-foreground truncate">
                        https://www.youtube.com/watch?v=xSTwqKUyM8k
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* OG 태그 미지원 — 기본 썸네일 대체 */}
              <div className="w-full max-w-[335px]">
                <p className="text-xs font-semibold text-primary mb-1.5 tracking-snug">OG 태그 미지원 — 기본 썸네일 대체</p>
                <div className="rounded-xl border border-border bg-card shadow-[2px_2px_6px_rgba(0,0,0,0.06)] overflow-hidden">
                  <div className="flex items-center gap-4 pr-5">
                    <img src={linkThumb2} alt="" className="w-[124px] h-[94px] object-cover shrink-0" />
                    <div className="flex flex-col gap-2 min-w-0 py-3">
                      <p className="text-base font-semibold leading-[18px] tracking-[-0.15px] text-foreground line-clamp-2">
                        자연 친화적인 라이프스타일을 위한 환경 보호 방법
                      </p>
                      <p className="text-sm font-normal leading-[16px] tracking-[-0.13px] text-muted-foreground truncate">
                        https://www.youtube.com/watch?v=xSTwqKUyM8k
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            }
          />
        </FadeInView>

        {/* 썸네일 만료 이슈 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-4">
              썸네일 만료 이슈 분석 및 대응
            </SubSectionTitle>

            {/* 원인 파악 */}
            <div className="mb-6">
              <div>
                <h6 className="text-base font-semibold text-foreground mb-3">원인 파악을 위한 모니터링 및 가설 수립</h6>
                <p className="text-sm-md font-normal text-muted-foreground leading-loose mb-3">
                  썸네일이 로드되지 않는 문제가 보고된 이후, 팀원들과 함께 다양한 케이스를 재현하며 원인을 추적했고, 해당 현상이 인스타그램 URL에서 공통적으로 발생하는 패턴을 확인했습니다.
                </p>
                <p className="text-sm-md font-normal text-muted-foreground leading-loose mb-3">
                  이후 동일한 인스타그램 URL을 매일 확인하며 응답 결과를 모니터링한 결과, 3~4일이 경과한 시점부터 썸네일이 표시되지 않는 현상이 나타났습니다. 명확한 만료 주기를 확인하기 위해 인스타그램의 썸네일 만료 정책 관련 문서를 탐색했으나, 공식적인 자료를 발견하지 못했습니다.
                </p>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm font-medium text-primary leading-loose">
                    결론: 내부 모니터링 결과를 근거로 썸네일 URL이 약 3~4일 이후 만료되는 것으로 추정
                  </p>
                </div>
              </div>
            </div>

            {/* JWT 착안 재파싱 플로우 다이어그램 */}
            <div className="mb-5 p-4 rounded-xl bg-card border border-border">
              <h6 className="text-sm font-semibold text-foreground mb-4 text-center">JWT 리프레시 구조에 착안한 재파싱 로직 흐름</h6>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* 왼쪽: JWT 패턴 대응 설명 */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">JWT 패턴과의 대응</p>
                  <div className="space-y-2">
                    {[
                      { jwt: "API 요청", thumbnail: "썸네일 조회 요청", color: "#2563eb" },
                      { jwt: "401 (토큰 만료)", thumbnail: "이미지 로드 실패 (URL 만료)", color: "#ef4444" },
                      { jwt: "리프레시 토큰으로 재발급", thumbnail: "URL 재파싱 트리거", color: "#f59e0b" },
                      { jwt: "새 액세스 토큰 저장", thumbnail: "새 썸네일 URL 추출 + 갱신 API", color: "#7c3aed" },
                      { jwt: "원래 요청 재시도", thumbnail: "유효한 썸네일 표시", color: "#22c55e" },
                    ].map((item, i) => (
                      <div key={i} className="grid grid-cols-2 gap-2 items-center">
                        <div
                          className="px-2 py-1.5 rounded text-center"
                          style={{ backgroundColor: item.color + "10", border: `1px solid ${item.color}30` }}
                        >
                          <span className="text-xxs font-medium" style={{ color: item.color }}>{item.jwt}</span>
                        </div>
                        <div
                          className="px-2 py-1.5 rounded text-center"
                          style={{ backgroundColor: item.color + "10", border: `1px solid ${item.color}30` }}
                        >
                          <span className="text-xxs font-semibold" style={{ color: item.color }}>{item.thumbnail}</span>
                        </div>
                      </div>
                    ))}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <p className="text-2xs text-center text-muted-foreground">JWT 패턴</p>
                      <p className="text-2xs text-center text-muted-foreground">썸네일 재파싱</p>
                    </div>
                  </div>
                </div>

                {/* 오른쪽: 실제 플로우 */}
                <VerticalFlow
                  maxWidth="max-w-[210px]"
                  steps={[
                    { label: "썸네일 조회 요청", color: "#2563eb" },
                    { label: "이미지 로드 실패", color: "#ef4444", sub: "만료된 URL 감지" },
                    { label: "URL 재파싱 트리거", color: "#f59e0b" },
                    { label: "새 썸네일 URL 추출", color: "#7c3aed" },
                    { label: "링크 데이터 갱신 API", color: "#7c3aed", sub: "서버 개발자 협업 제안" },
                    { label: "유효한 썸네일 표시", color: "#22c55e" },
                  ]}
                />
              </div>
            </div>

            <div className="space-y-4">
              <ProblemSolvingBlock
                problem="인스타그램 URL에서 3~4일 경과 후 썸네일이 표시되지 않는 문제"
                solution="JWT 토큰 리프레시 구조에 착안한 재파싱 로직 설계"
                detail="썸네일이 일정 기간 후 만료된다는 가설을 바탕으로, JWT 토큰의 발급–만료–갱신 흐름에 착안한 재파싱 로직을 설계했습니다. 썸네일 조회 실패 시 URL에서 새 이미지를 자동으로 파싱해 갱신하도록 구성하여, 사용자는 별도의 조작 없이 유효한 썸네일을 확인할 수 있도록 개선했습니다."
              />
              <ProblemSolvingBlock
                problem="만료된 썸네일 URL이 갱신되지 않아 동일한 만료 URL을 계속 재조회하는 구조적 한계"
                solution="새로 파싱된 썸네일 URL을 사용자 링크 데이터에 갱신하는 API를 서버 개발자에게 제안하여 협업 진행"
                detail="사용자가 저장한 링크 데이터의 썸네일 URL을 갱신하지 않는 이상, 해당 URL은 만료된 상태로 유지되어 동일한 만료 URL을 계속 조회하게 됩니다. 이로 인해 썸네일 조회 실패 → 재파싱 → 동일 URL 재조회가 반복되는 구조적 한계가 있었습니다. 그 결과, 썸네일 정보를 안정적으로 유지하면서도 불필요한 재요청과 중복 파싱을 최소화한 구조를 완성했습니다."
              />
            </div>
          </ContentCard>
        </FadeInView>
        </SectionGroup>
      </div>
    </div>
  );
}
