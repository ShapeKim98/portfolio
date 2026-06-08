import { FadeInView } from "./ParallaxSection";
import {
  SectionInner,
  EditorialGrid,
  GridLabel,
  GridBody,
  Eyebrow,
  Divider,
} from "./design-system";

const SKILLS = {
  "Framework / Library": [
    { category: "UI", items: ["SwiftUI", "UIKit", "SnapKit"] },
    {
      category: "Apple",
      items: [
        "HealthKit",
        "WatchConnectivity",
        "WatchKit",
        "Share Extension",
        "AuthenticationServices",
      ],
    },
    { category: "Network", items: ["Alamofire", "Moya", "Kingfisher"] },
    { category: "Programming", items: ["RxSwift", "Swift Concurrency"] },
    { category: "Architecture", items: ["TCA", "ReactorKit"] },
    { category: "DI", items: ["Swift Dependencies"] },
    { category: "Others", items: ["Firebase", "KakaoSDK", "GoogleSignIn"] },
  ],
  Architecture: [
    {
      category: "",
      items: [
        "MVC",
        "MVVM",
        "MVI",
        "Clean Architecture",
        "Modular Architecture",
      ],
    },
  ],
  Tool: [
    { category: "IDE", items: ["Xcode", "VSCode"] },
    { category: "CI/CD", items: ["Github Actions", "Fastlane", "Xcode Cloud"] },
    { category: "Dep. Mgmt", items: ["Tuist", "SPM"] },
    { category: "Others", items: ["Github Desktop", "Figma"] },
  ],
};

const CAREERS = [
  {
    period: "2025.08 ~ 2026.04",
    title: "미스고(주)",
    meta: "iOS Developer",
    desc: "Swift/SwiftUI/UIKit 기반 iOS 개발자로 1인 개발 체제에서 2개 앱의 전체 iOS 개발을 단독으로 담당했습니다.",
  },
];

const ACTIVITIES = [
  {
    period: "2024.12 ~ 2025.06",
    title: "SeSAC iOS 앱 개발자 데뷔과정 PLUS 도봉 SW 2기",
    desc: "iOS 개발, CS, 시스템 학습을 통한 과제 및 서비스 레벨 프로젝트 수행",
  },
  {
    period: "2024.05 ~ 2024.09",
    title: "YAPP(기업형 연합 IT동아리) 24기",
    desc: '간편 링크 아카이빙 앱 "Pokit" 개발 및 출시',
  },
  {
    period: "2024.11 ~ 2025.03",
    title: "YAPP(기업형 연합 IT동아리) 25기",
    desc: "iOS 및 CL(커뮤니케이션 리드) 운영진 활동",
  },
];

const EDUCATION = [
  {
    period: "2024.08",
    title: "세종대학교",
    desc: "컴퓨터공학과 졸업",
  },
];

const AWARDS = [
  {
    period: "2024.05",
    title: "세종대학교 소프트웨어융합대학 해커톤",
    meta: "2등 총장상",
    desc: "당일 제시되는 3개의 키워드로 아이디어를 기획하고 MVP 개발하는 해커톤(무박 2일). 서핑 지역에 대한 정보와 레슨 매칭, 조난 구조 요청을 보낼 수 있는 서비스로써, iOS, WatchOS 어플리케이션 개발을 담당했습니다.",
  },
];

export function ProfileSection() {
  return (
    <section id="background" className="relative py-24 md:py-32 bg-muted/40">
      <SectionInner>
        <FadeInView data-print-keep>
          <EditorialGrid className="mb-16">
            <GridLabel>
              <div className="flex flex-col gap-3">
                <Eyebrow>02 — Background</Eyebrow>
                <h2 className="text-2xl font-medium tracking-tight text-foreground">
                  Skills · Career · Education · Activities
                </h2>
              </div>
            </GridLabel>
            <GridBody>
              <p className="text-base font-normal text-muted-foreground leading-normal max-w-prose">
                기술 스택과 경력, 학력, 수상, 활동 이력을 담은 섹션입니다.
              </p>
            </GridBody>
          </EditorialGrid>
        </FadeInView>

        {/* Skills */}
        <FadeInView data-print-keep>
          <EditorialGrid className="mb-16">
            <GridLabel>
              <Eyebrow>Skills</Eyebrow>
            </GridLabel>
            <GridBody>
              <div className="flex flex-col gap-10">
                {Object.entries(SKILLS).map(([section, groups]) => (
                  <div key={section} data-print-keep className="flex flex-col gap-4">
                    <h3 className="text-lg font-medium text-foreground">
                      {section}
                    </h3>
                    <dl className="flex flex-col border-t border-border">
                      {groups.map((group) => (
                        <div
                          key={group.category || "default"}
                          className="grid grid-cols-1 md:grid-cols-[minmax(120px,25%)_1fr] gap-x-6 gap-y-2 py-4 border-b border-border"
                        >
                          {group.category && (
                            <dt className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                              {group.category}
                            </dt>
                          )}
                          <dd
                            className={
                              group.category
                                ? ""
                                : "md:col-span-2"
                            }
                          >
                            <ul className="flex flex-wrap gap-1.5">
                              {group.items.map((item) => (
                                <li
                                  key={item}
                                  className="inline-flex items-center px-2 py-1 rounded-[10px] border border-border bg-card text-xs font-normal text-foreground"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </GridBody>
          </EditorialGrid>
        </FadeInView>

        <Divider className="my-16" />

        {/* Career */}
        <FadeInView data-print-keep>
          <EditorialGrid className="mb-16">
            <GridLabel>
              <Eyebrow>Career</Eyebrow>
            </GridLabel>
            <GridBody>
              <TimelineList items={CAREERS} />
            </GridBody>
          </EditorialGrid>
        </FadeInView>

        {/* Education */}
        <FadeInView data-print-keep>
          <EditorialGrid className="mb-16">
            <GridLabel>
              <Eyebrow>Education</Eyebrow>
            </GridLabel>
            <GridBody>
              <TimelineList items={EDUCATION} />
            </GridBody>
          </EditorialGrid>
        </FadeInView>

        {/* Awards */}
        <FadeInView data-print-keep>
          <EditorialGrid className="mb-16">
            <GridLabel>
              <Eyebrow>Awards</Eyebrow>
            </GridLabel>
            <GridBody>
              <TimelineList
                items={AWARDS.map((a) => ({
                  period: a.period,
                  title: a.title,
                  meta: a.meta,
                  desc: a.desc,
                }))}
              />
            </GridBody>
          </EditorialGrid>
        </FadeInView>

        {/* Activities */}
        <FadeInView data-print-keep>
          <EditorialGrid>
            <GridLabel>
              <Eyebrow>Activities</Eyebrow>
            </GridLabel>
            <GridBody>
              <TimelineList items={ACTIVITIES} />
            </GridBody>
          </EditorialGrid>
        </FadeInView>
      </SectionInner>
    </section>
  );
}

function TimelineList({
  items,
}: {
  items: { period: string; title: string; meta?: string; desc?: string }[];
}) {
  return (
    <ul className="flex flex-col border-t border-border">
      {items.map((item, i) => (
        <li
          key={`${item.title}-${i}`}
          className="py-5 border-b border-border grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-6 gap-y-2"
        >
          <span className="text-sm font-normal tabular-nums text-muted-foreground">
            {item.period}
          </span>
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="text-base font-medium text-foreground">
                {item.title}
              </h3>
              {item.meta && (
                <span className="text-xs tracking-widest uppercase text-primary">
                  {item.meta}
                </span>
              )}
            </div>
            {item.desc && (
              <p className="text-sm font-normal text-muted-foreground leading-normal">
                {item.desc}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
