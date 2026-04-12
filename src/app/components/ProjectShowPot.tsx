import { FadeInView } from "./ParallaxSection";
import { ProjectHeader } from "./ProjectHeader";
import { ProblemSolvingBlock } from "./Diagrams";
import { ContentCard, FeatureItem, SubSectionTitle, VerticalFlow } from "./design-system";
import showpotPromo from "../../image/쇼팟표지.png";

const FEATURES = [
  "소셜로그인 기능 (카카오, 애플)",
  "공연 목록 조회 기능 (전체, 티켓 예매 임박, 추천, 알림 설정)",
  "공연 세부 정보 조회 기능",
  "공연 티켓 예매 오픈 알림 시간 설정 기능",
  "관심 공연 설정 기능",
  "구독 관리 기능 (장르, 아티스트)",
  "검색 기능 (아티스트 및 공연)",
];

export function ProjectShowPot() {
  return (
    <div>
      <ProjectHeader
        index="04"
        type="project"
        title="ShowPot"
        subtitle="내한 공연 정보, 티켓팅 알림 (iOS 16+)"
        period="2025.03.29 ~ 2025.04.14"
        team="PM 1명, 디자이너 2명, 서버 2명, iOS 1명, 안드로이드 2명"
        role="iOS 개발"
        description="내한 공연 정보 제공 및 티켓팅 알림 서비스입니다."
        techStack={["UIKit", "SnapKit", "RxSwift", "MVI", "Clean Architecture", "Kingfisher", "Alamofire", "Swift Concurrency", "Swift Dependencies", "KakaoSDK", "Firebase", "SwiftJWT"]}
        githubUrl="https://github.com/AlreadyTakenSeat/ShowPot-iOS"
        screenshotLabel="ShowPot 앱 스크린샷"
        screenshotSrc={showpotPromo}
      />

      <FadeInView>
        <SubSectionTitle size="lg" className="mb-6">핵심 기능</SubSectionTitle>
        <div className="grid md:grid-cols-2 gap-3 mb-12">
          {FEATURES.map((f) => (
            <FeatureItem key={f}>{f}</FeatureItem>
          ))}
        </div>
      </FadeInView>

      {/* ───── 프로젝트 설계 ───── */}
      <div className="space-y-12">
        <FadeInView>
          <SubSectionTitle size="xl" className="mb-3">
            프로젝트 설계
          </SubSectionTitle>
        </FadeInView>

        {/* Clean Architecture 설계 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-6">
              Clean Architecture 의존성 흐름
            </SubSectionTitle>
            {/* 다이어그램: View→Composer→UseCase←Repository←DataSource */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-3">
              {[
                { label: "View", sub: "UI Layer", color: "#2563eb" },
                { label: "Composer", sub: "RxCompose", color: "#7c3aed" },
                { label: "UseCase", sub: "Domain", color: "#f59e0b", center: true },
                { label: "Repository", sub: "Data", color: "#22c55e" },
                { label: "DataSource", sub: "Network/Local", color: "#64748b" },
              ].map((item, i, arr) => (
                <div key={item.label} className="flex items-center gap-4 md:gap-6">
                  <div
                    className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center"
                    style={{
                      borderWidth: item.center ? 3 : 2,
                      borderStyle: "solid",
                      borderColor: item.color + (item.center ? "cc" : "60"),
                      background: item.color + (item.center ? "18" : "10"),
                    }}
                  >
                    <span className="text-sm font-bold" style={{ color: item.color }}>
                      {item.label}
                    </span>
                    <span className="text-xxs font-normal text-muted-foreground mt-1">{item.sub}</span>
                    {item.center && (
                      <span className="text-2xs font-semibold mt-1.5 px-1.5 py-0.5 rounded" style={{ color: item.color, backgroundColor: item.color + "18" }}>
                        핵심
                      </span>
                    )}
                  </div>
                  {i < arr.length - 1 && (
                    <svg width="20" height="12" viewBox="0 0 20 12" className="text-border hidden md:block">
                      {/* i < 2 → 오른쪽 화살표(→), i >= 2 → 왼쪽 화살표(←) */}
                      {i < 2 ? (
                        <path d="M0 6h16M13 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      ) : (
                        <path d="M20 6H4M7 2l-4 4 4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      )}
                    </svg>
                  )}
                </div>
              ))}
            </div>
            {/* 의존성 방향 레이블 */}
            <div className="flex justify-center mb-5">
              <p className="text-xs font-medium text-muted-foreground text-center">
                의존성 방향: 모든 레이어는 UseCase(Domain)을 향해 의존하며, UseCase는 외부 레이어를 전혀 알지 못합니다.
              </p>
            </div>
            <p className="text-sm-md font-normal text-muted-foreground leading-loose">
              직접 설계해 오픈소스로 배포한 단방향 아키텍처(RxCompose)를 이번 프로젝트에 적용하여 라이브러리의 적용가능성 테스트 및 개선사항을 점검했습니다.
            </p>
          </ContentCard>
        </FadeInView>

        {/* Repository 추상화 설계 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-4">
              Repository 추상화 설계
            </SubSectionTitle>
            <p className="text-base font-normal text-muted-foreground leading-loose mb-4">
              Feature 계층에 필요한 로직을 UseCase로 명시하여 Feature 계층과 Data 계층 간 의존성을 분리했습니다. 또한 Data 계층의 주요 기능을 추상화하는 방식에 대해 고민했습니다.
            </p>
            <ProblemSolvingBlock
              problem="Protocol 기반 추상화 시 UseCase가 사용하지 않는 메서드까지 의존하게 되는 문제"
              solution="Repository를 Protocol이 아니라 메서드들을 클로저 형태로 인스턴스에 주입받는 구조체로 추상화"
              detail="UseCase가 불필요한 의존 없이 필요한 메서드만 활용할 수 있도록 구성했습니다. Data 계층의 주요 기능을 Repository로 추상화하여 비즈니스 로직과의 결합도를 낮추고, 재사용성을 높였습니다."
            />
          </ContentCard>
        </FadeInView>

        {/* JWT 토큰 리프레시 설계 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-6">
              JWT 토큰 리프레시 설계
            </SubSectionTitle>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* 왼쪽: 설명 */}
              <div>
                <p className="text-sm-md font-normal text-muted-foreground leading-loose">
                  Alamofire의 RequestInterceptor를 활용해 요청 헤더에 토큰을 자동으로 적용하고, 액세스 토큰 오류 발생 시 토큰 재발급을 수행하는 로직을 구현했습니다.
                </p>
              </div>

              {/* 오른쪽: 플로우 차트 (설명 포함) */}
              <VerticalFlow
                steps={[
                  { label: "API 요청", desc: "RequestInterceptor가 헤더에 액세스 토큰 자동 삽입", color: "#2563eb" },
                  { label: "401 Unauthorized", desc: "액세스 토큰 만료로 인한 인증 오류", color: "#ef4444" },
                  { label: "리프레시 토큰으로 재발급", desc: "리프레시 토큰으로 새 액세스 토큰 요청", color: "#f59e0b" },
                  { label: "새 액세스 토큰 저장", desc: "새 액세스 토큰을 로컬에 저장", color: "#7c3aed" },
                  { label: "원래 요청 재시도 → 성공", desc: "새 토큰으로 원래 API 요청 자동 재시도", color: "#22c55e" },
                ]}
              />
            </div>
          </ContentCard>
        </FadeInView>

        {/* UI 컴포넌트 설계 */}
        <FadeInView>
          <ContentCard>
            <SubSectionTitle size="md" className="mb-4">
              UI 컴포넌트 설계
            </SubSectionTitle>
            <div className="space-y-4">
              <ProblemSolvingBlock
                problem="하나의 화면에서 다양한 레이아웃의 셀과 섹션을 유연하게 구성해야 하는 문제"
                solution="DataSource의 섹션과 데이터를 열거형으로 정의하고, Compositional Layout으로 구성"
                detail="이를 기반으로 Compositional Layout을 구성하여 하나의 화면에서 다양한 섹션과 셀 구성을 유연하게 지원했습니다."
              />
              <ProblemSolvingBlock
                problem="스크롤 위치에 따라 셀 크기와 투명도가 변하는 캐러셀(Carousel) 구현 필요"
                solution="visibleItemsInvalidationHandler를 사용해 셀 위치를 동적으로 계산"
                detail="오프셋에 따라 투명도 및 크기가 변하는 캐러셀 뷰를 구현했습니다."
              />
            </div>
          </ContentCard>
        </FadeInView>

        {/* ───── 기술 구현 ───── */}
        <FadeInView>
          <SubSectionTitle size="xl" className="mb-3">
            기술 구현
          </SubSectionTitle>
        </FadeInView>

        <FadeInView>
          <div className="space-y-3">
            {[
              "탭바의 클릭 이벤트를 BehaviorSubject로 방출하고, 이를 UITabBarController의 selectedIndex에 바인딩하여 커스텀 탭바를 구현했습니다.",
              "DTO에 Generic을 도입하여 외부 데이터를 클라이언트 기능에 적합한 형태로 가공하고, 외부 변경 사항에 유연하게 대응했습니다.",
              "Swift Dependencies의 testValue를 활용해 테스트 가능한 환경을 구성하고, previewValue를 통해 프리뷰 환경에서 목업 데이터를 제공하여 불필요한 API 호출을 줄였습니다.",
              "SwiftJWT를 활용해 애플 리프레시 토큰 발급과 회원 탈퇴 요청에 필요한 Payload를 생성하여 애플 로그인 탈퇴 기능을 구현했습니다.",
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm-md font-normal text-foreground leading-loose">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </div>
  );
}
