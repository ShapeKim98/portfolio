import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { FadeInView } from "./ParallaxSection";
import { GraduationCap, Users, Trophy, Mail, Phone, Github } from "lucide-react";
import { SectionInner, SectionPageHeading, ParallaxBlobLayer, ParallaxAccentLayer } from "./design-system";

const SKILLS = {
  "Framework / Library": [
    { category: "UI", items: ["SwiftUI", "UIKit", "SnapKit"] },
    { category: "Apple", items: ["HealthKit", "WatchConnectivity", "WatchKit", "Share Extension", "AuthenticationServices"] },
    { category: "Network", items: ["Alamofire", "Moya", "Kingfisher"] },
    { category: "Programming", items: ["RxSwift", "Swift Concurrency"] },
    { category: "Architecture", items: ["TCA", "ReactorKit"] },
    { category: "DI", items: ["Swift Dependencies"] },
    { category: "Others", items: ["Firebase", "KakaoSDK", "GoogleSignIn"] },
  ],
  Architecture: [
    { category: "", items: ["MVC", "MVVM", "MVI", "Clean Architecture", "Modular Architecture"] },
  ],
  Tool: [
    { category: "IDE", items: ["Xcode", "VSCode"] },
    { category: "CI/CD", items: ["Github Actions", "Fastlane", "Xcode Cloud"] },
    { category: "Dep. Mgmt", items: ["Tuist", "SPM"] },
    { category: "Others", items: ["Github Desktop", "Figma"] },
  ],
};

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

export function ProfileSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Background decorative layer
  const rawBgY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const bgY = useSpring(rawBgY, { stiffness: 120, damping: 28 });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Accent foreground
  const rawAccentY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const accentY = useSpring(rawAccentY, { stiffness: 80, damping: 20 });
  const accentRotate = useTransform(scrollYProgress, [0, 1], [0, 35]);

  return (
    <section ref={sectionRef} id="profile" className="relative py-32 md:py-40 px-6 bg-muted/30 overflow-hidden">
      {/* Background decorative layer */}
      <ParallaxBlobLayer bgY={bgY} bgScale={bgScale}>
        <div className="absolute top-[5%] -right-[120px] w-[450px] h-[450px] rounded-full bg-primary/4 blur-3xl" />
        <div className="absolute bottom-[10%] -left-[100px] w-[350px] h-[350px] rounded-full bg-primary/3 blur-3xl" />
      </ParallaxBlobLayer>

      {/* Accent foreground layer */}
      <ParallaxAccentLayer accentY={accentY}>
        <motion.div
          style={{ rotate: accentRotate }}
          className="absolute top-[12%] right-[10%] w-3 h-3 rounded-full border-2 border-primary/15"
        />
        <div className="absolute top-[35%] left-[5%] w-16 h-px bg-primary/12" />
        <div className="absolute bottom-[20%] right-[8%] w-2 h-2 rounded-full bg-primary/20" />
      </ParallaxAccentLayer>

      <SectionInner>
        <SectionPageHeading>Profile & Skills</SectionPageHeading>

        {/* Profile Info */}
        <FadeInView speed={1.3}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left - Info */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="mb-6">
                <h3 className="text-4xl font-bold tracking-tight text-foreground">김도형</h3>
                <p className="text-base font-normal text-muted-foreground">1998.02.05</p>
              </div>
              <div className="space-y-3">
                <InfoRow icon={Mail} label="Email" value="shapekim98@gmail.com" href="mailto:shapekim98@gmail.com" />
                <InfoRow icon={Github} label="GitHub" value="ShapeKim98" href="https://github.com/ShapeKim98" />
                <InfoRow icon={Phone} label="Phone" value="010-9027-8292" />
                <InfoRow icon={GraduationCap} label="학력" value="세종대학교 컴퓨터공학과 졸업 (2024.08)" />
              </div>
            </div>

            {/* Right - Award */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy size={20} className="text-primary" />
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">수상</h3>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-md font-semibold text-foreground mb-1">
                    세종대학교 소프트웨어융합대학 해커톤
                  </p>
                  <p className="text-sm-md font-medium text-primary mb-2">2등 총장상 · 2024.05</p>
                  <p className="text-sm-md font-normal text-muted-foreground leading-loose">
                    당일 제시되는 3개의 키워드로 아이디어를 기획하고 MVP 개발하는 해커톤(무박 2일). 서핑 지역에 대한 정보와 레슨 매칭, 조난 구조 요청을 보낼 수 있는 서비스로써, iOS, WatchOS 어플리케이션 개발을 담당했습니다.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={20} className="text-primary" />
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">활동</h3>
                </div>
                <div className="space-y-4">
                  {ACTIVITIES.map((act) => (
                    <div key={act.title} className="flex gap-4">
                      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap mt-0.5 min-w-[120px]">
                        {act.period}
                      </span>
                      <div>
                        <p className="text-base font-semibold text-foreground">{act.title}</p>
                        <p className="text-sm-md font-normal text-muted-foreground mt-0.5">{act.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Skills */}
        <FadeInView delay={0.1} speed={1.4}>
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
            <h3 className="text-3xl font-bold tracking-tight text-foreground mb-8">
              기술 스택
            </h3>
            <div className="space-y-8">
              {Object.entries(SKILLS).map(([section, groups]) => (
                <div key={section} data-print-keep>
                  <h4 className="text-base font-semibold text-primary mb-4 tracking-wide">
                    {section}
                  </h4>
                  <div className="space-y-3">
                    {groups.map((group) => (
                      <div key={group.category || "default"} className="flex flex-wrap items-start gap-2">
                        {group.category && (
                          <span className="text-sm font-medium text-muted-foreground min-w-[80px] mt-1.5">
                            {group.category}
                          </span>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 rounded-lg bg-muted text-sm-md font-medium text-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </SectionInner>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={16} className="text-muted-foreground shrink-0" />
      <span className="text-sm font-medium text-muted-foreground min-w-[50px]">{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-normal text-primary hover:underline"
        >
          {value}
        </a>
      ) : (
        <span className="text-base font-normal text-foreground">{value}</span>
      )}
    </div>
  );
}
