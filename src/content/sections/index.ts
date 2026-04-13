// Re-export section frontmatter data for use in components
// This will be replaced by .pdsl Vite plugin loading when DSL is fully active

import type { SectionFrontmatter } from "@/dsl/frontmatter";

/* ─── Per-section typed interfaces ─── */

export interface HeroCtaItem {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon: string;
  target?: string;
}

export interface HeroSectionData extends SectionFrontmatter {
  sectionType: "hero";
  badge: string;
  title: string;
  subtitle: string;
  cta: HeroCtaItem[];
  scrollIndicator: string;
}

export interface AboutValueItem {
  tag: string;
  title: string;
  description: string;
}

export interface AboutContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface AboutSectionData extends SectionFrontmatter {
  sectionType: "about";
  heading: string;
  name: string;
  nameEn: string;
  tagline: string;
  values: AboutValueItem[];
  contact: AboutContactItem[];
}

export interface ProfileInfo {
  name: string;
  birth: string;
  email: string;
  emailHref: string;
  github: string;
  githubHref: string;
  phone: string;
  education: string;
}

export interface ProfileAward {
  title: string;
  prize: string;
  date: string;
  description: string;
}

export interface ProfileActivity {
  period: string;
  title: string;
  desc: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ProfileSectionData extends SectionFrontmatter {
  sectionType: "profile";
  heading: string;
  skillsHeading: string;
  profile: ProfileInfo;
  award: ProfileAward;
  activities: ProfileActivity[];
  skills: Record<string, SkillGroup[]>;
}

export interface WorkItem {
  title: string;
  project: string;
  period: string;
  tags: string[];
  bullets: string[];
}

export interface CompanyInfo {
  name: string;
  period: string;
  role: string;
  description: string[];
}

export interface ExperienceSectionData extends SectionFrontmatter {
  sectionType: "experience";
  heading: string;
  initialVisibleCount: number;
  company: CompanyInfo;
  workItems: WorkItem[];
}

export interface FooterCtaItem {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon: string;
  target?: string;
}

export interface FooterSectionData extends SectionFrontmatter {
  sectionType: "footer";
  heading: string;
  subtitle: string;
  label: string;
  cta: FooterCtaItem[];
  phone: string;
  copyright: string;
}

/* ─── Section data ─── */

export const sectionMeta: {
  hero: HeroSectionData;
  about: AboutSectionData;
  profile: ProfileSectionData;
  experience: ExperienceSectionData;
  footer: FooterSectionData;
} = {
  hero: {
    type: "section",
    id: "hero",
    sectionType: "hero",
    badge: "iOS Developer",
    title: "김도형",
    subtitle: "더 나은 방향을 향해 한 걸음씩 나아가는\niOS 개발자입니다.",
    cta: [
      {
        label: "GitHub",
        href: "https://github.com/ShapeKim98",
        variant: "primary",
        icon: "Github",
        target: "_blank",
      },
      {
        label: "Contact",
        href: "mailto:shapekim98@gmail.com",
        variant: "secondary",
        icon: "Mail",
      },
    ],
    scrollIndicator: "Scroll",
  },

  about: {
    type: "section",
    id: "about",
    sectionType: "about",
    heading: "iOS Developer",
    name: "김도형",
    nameEn: "Kim Dohyeong",
    tagline:
      "개발에 대한 꾸준한 고민과 되돌아보는 태도를 바탕으로, 더 나은 방향을 향해 한 걸음씩 나아가고 있습니다.",
    values: [
      {
        tag: "겸손한 자세",
        title: "'내가 틀릴 수 있다'는 전제에서 출발합니다.",
        description:
          "가설이나 의견을 단정 짓기보다 다양한 가능성을 경청하고, 코드에서도 스스로의 선택을 다시 점검하며 개선점을 찾는 습관을 들여왔습니다. 협업에서는 상대방의 의견을 존중하며 더 나은 결론에 도달하기 위해 노력합니다.",
      },
      {
        tag: "의도 중심 사고",
        title: "업무의 '무엇'보다 '왜'를 먼저 파악합니다.",
        description:
          "의도를 이해해야만 방식의 적절성을 판단하고, 더 나은 대안을 찾을 수 있다고 생각합니다. 이 과정에서 겪은 시행착오는 방향을 조정하는 중요한 계기가 되었고, 사용자 경험을 개선해 나가며 큰 보람을 느꼈습니다.",
      },
      {
        tag: "도전하는 태도",
        title: "시간의 차이는 있어도, 불가능한 일은 없다고 생각합니다.",
        description:
          "낯선 기술이나 환경이 필요하면 주저하지 않고 도전하며, 스스로 해결 방법을 찾기 위해 다양한 시도를 합니다. 환경이나 상황을 이유로 한계를 짓기보다, 실제로 결과를 만들어내는 개발자가 되고자 합니다.",
      },
    ],
    contact: [
      { label: "Birth", value: "1998.02.05" },
      {
        label: "Email",
        value: "shapekim98@gmail.com",
        href: "mailto:shapekim98@gmail.com",
      },
      {
        label: "GitHub",
        value: "ShapeKim98",
        href: "https://github.com/ShapeKim98",
      },
      { label: "Phone", value: "010-9027-8292" },
    ],
  },

  profile: {
    type: "section",
    id: "profile",
    sectionType: "profile",
    heading: "Profile & Skills",
    skillsHeading: "기술 스택",
    profile: {
      name: "김도형",
      birth: "1998.02.05",
      email: "shapekim98@gmail.com",
      emailHref: "mailto:shapekim98@gmail.com",
      github: "ShapeKim98",
      githubHref: "https://github.com/ShapeKim98",
      phone: "010-9027-8292",
      education: "세종대학교 컴퓨터공학과 졸업 (2024.08)",
    },
    award: {
      title: "세종대학교 소프트웨어융합대학 해커톤",
      prize: "2등 총장상",
      date: "2024.05",
      description:
        "당일 제시되는 3개의 키워드로 아이디어를 기획하고 MVP 개발하는 해커톤(무박 2일). 서핑 지역에 대한 정보와 레슨 매칭, 조난 구조 요청을 보낼 수 있는 서비스로써, iOS, WatchOS 어플리케이션 개발을 담당했습니다.",
    },
    activities: [
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
    ],
    skills: {
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
        {
          category: "Programming",
          items: ["RxSwift", "Swift Concurrency"],
        },
        { category: "Architecture", items: ["TCA", "ReactorKit"] },
        { category: "DI", items: ["Swift Dependencies"] },
        {
          category: "Others",
          items: ["Firebase", "KakaoSDK", "GoogleSignIn"],
        },
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
        {
          category: "CI/CD",
          items: ["Github Actions", "Fastlane", "Xcode Cloud"],
        },
        { category: "Dep. Mgmt", items: ["Tuist", "SPM"] },
        { category: "Others", items: ["Github Desktop", "Figma"] },
      ],
    },
  },

  experience: {
    type: "section",
    id: "experience",
    sectionType: "experience",
    heading: "Experience",
    initialVisibleCount: 4,
    company: {
      name: "미스고(주)",
      period: "2025. 08 ~ 2026. 04",
      role: "iOS Developer",
      description: [
        "Swift/SwiftUI/UIKit 기반 iOS 개발자로 1인 개발 체제에서 3개 앱의 전체 iOS 개발을 단독으로 담당했습니다.",
        "약 9개월간 신규 기능 개발부터 성능 최적화, CI/CD 구축, 아키텍처 마이그레이션까지 iOS 앱 운영의 전 과정을 경험했습니다.",
        "Claude Code·Codex 등 AI 코딩 도구를 적극 활용해 개발 생산성과 코드 품질을 향상시켰습니다.",
        "부족한 QA 인력을 보충하기 위해 자발적으로 QA 직무에 도전했고, 도메인 숙련도가 부족한 상황을 MCP + AI 스킬 기반 데이터 검증 방식을 직접 고안·적용해 극복하면서 자체 검증을 중시하는 개발 습관을 체득했습니다.",
      ],
    },
    workItems: [
      {
        title: "지도 마커 성능 최적화",
        project: "미스고 옥션/부동산",
        period: "2026. 01 · 약 1주",
        tags: ["NaverMap SDK", "LRU Cache"],
        bullets: [
          "지도에 수천 개의 매물 마커를 동시 표시할 때 발생하는 CPU·메모리 과다 사용 문제를 캐시 구조와 마커 생명주기 개선으로 해결",
          "최근 사용되지 않은 데이터를 우선 제거하는 LRU Cache를 직접 구현하여 시스템 기본 캐시(NSCache) 교체 — 메모리 부족 시 캐시 전체가 초기화되며 발생하던 마커 중복 표시 문제 해결",
          "화면 밖 마커를 재사용 풀에 대기시키는 메커니즘 설계, 매번 새 객체를 생성하는 비용 제거",
          "매물 밀집 지역 30분 사용 기준 CPU 86% → 68% (약 20% 감소), 메모리 1.1GB → 817MB (약 26% 감소) 달성",
        ],
      },
      {
        title: "CI/CD 배포 자동화 구축",
        project: "미스고 옥션/부동산",
        period: "2025. 10. 02 ~ 10. 14 · 약 2주",
        tags: ["GitHub Actions", "Fastlane"],
        bullets: [
          "개발 단계에서 타 직군(웹 프론트 등)의 잦은 빌드 결과물 확인 요청(웹뷰 동작 검증 등)에 대응하기 위해 자동화 파이프라인 구축",
          "Git 태그 푸시 시 TestFlight 자동 배포, PR 생성 시 앱스토어 검수 자동 요청 — PR 본문을 업데이트 노트로 자동 삽입",
          "NaverMap SDK가 CI 서버에서 원격 접근이 불가한 문제를 로컬 SPM 패키지로 변환하여 해결",
          "미스고, 제이스톡 2개 프로젝트에 동일 구조로 구축하여 수동 빌드·배포 반복 작업 제거",
        ],
      },
      {
        title: "딥링크·앱링크·공유하기 시스템 개편",
        project: "미스고 옥션/부동산",
        period: "2026. 03. 26 ~ 03. 30 · 약 1주",
        tags: ["URL Scheme", "Universal Links", "Swift Macro"],
        bullets: [
          "Swift Macro를 활용하여 URL 경로와 파라미터를 자동으로 파싱하는 코드를 생성, 수동 파싱 코드 작성 없이 라우팅 시스템 구축",
          "카카오톡 공유, 푸시 알림 탭, 외부 웹 링크 등 다양한 앱 진입 경로를 하나의 라우팅 흐름으로 통합 처리",
          "apple-app-site-association 설정 및 Universal Links 대응, 개발/스테이지/운영 환경별 URL Scheme 분리 관리",
        ],
      },
      {
        title: "전문가 광고 시스템 신규 개발",
        project: "미스고 옥션/부동산",
        period: "2026. 03. 17 ~ 03. 31 · 약 2주",
        tags: ["UIKit", "SwiftUI"],
        bullets: [
          "부동산 전문가가 매물·지역·건축사 광고 3종을 직접 등록·결제·관리하는 전체 화면 및 로직 신규 개발",
          "단건 등록에서 일괄 등록(최대 10건)으로 확장, 일부만 성공하는 경우 등 케이스별 결과 안내 분기 처리",
          "지도 확대/축소 수준에 따라 시도/시군구/읍면동 단위로 광고 배너 노출 범위가 달라지는 정책 설계",
          "광고 포인트 충전 완료 시 기존 입력 정보를 유지한 채 등록이 자동 재개되는 UX 구성",
        ],
      },
      {
        title: "아키텍처 마이그레이션",
        project: "제이스톡",
        period: "2025. 08. 22 ~ 2026. 02. 23 · 약 6개월",
        tags: ["SwiftUI", "TCA", "Tuist"],
        bullets: [
          "운영이 중단된 서비스를 인수받아 빌드 환경 설정부터 앱 전체를 리뉴얼",
          "잦은 메모리 누수 → Leak Detector 강제 종료 → 딜레이 우회 안티패턴 만연 등 앱 안정성 문제를 근본 해결하기 위해 RIBs → SwiftUI + TCA 아키텍처 전면 마이그레이션 (약 80% 완료)",
          "프로젝트 관리 도구 Tuist 3 → 4 버전 마이그레이션 및 전체 외부 라이브러리 최신 버전 업데이트",
        ],
      },
      {
        title: "실시간 채팅을 통한 비상장 거래 및 PB 중개 매칭 시스템",
        project: "제이스톡",
        period: "2025. 10. 20 ~ 11. 21 · 약 1개월",
        tags: ["TCA", "TalkPlus SDK", "Swift Concurrency"],
        bullets: [
          "TalkPlus SDK 기반 실시간 채팅 구축, 계약서 작성·전문가 지원/초대/퇴장 등 13종 메시지 타입 정의 및 화면 분기 처리",
          "채팅 → 계약서 작성 → 중개 요청 → 전문가 지원/승인/거절 → 채팅방 초대까지 비상장주식 거래 중개 전체 흐름 설계·구현",
          "푸시 알림 데이터를 actor 기반으로 스레드 안전하게 관리하고, AsyncThrowingStream을 활용해 TCA 상태 관리와 통합 — 기존 앱 진입점(AppDelegate)에 산재하던 130줄의 알림 처리 코드 제거",
        ],
      },
      {
        title: "화면 내비게이션 구조 통합",
        project: "제이스톡",
        period: "2026. 02. 20 · 약 1주",
        tags: ["SwiftUI", "TCA"],
        bullets: [
          "6개 탭 화면이 각각 독립적으로 화면 이동을 관리하던 구조를 하나의 통합 객체로 일원화",
          "iOS에서 탭 내 화면 이동 스택이 5개까지만 허용되는 제한을 구조 개편으로 근본 해결",
        ],
      },
      {
        title: "AI 기업가치 예측 차트 시각화",
        project: "제이스톡",
        period: "2026. 01. 07 ~ 02. 04 · 약 1개월",
        tags: ["SwiftUI", "Shape", "Path"],
        bullets: [
          "Shape + Path 기반 선형 차트 컴포넌트 직접 구현, 외부 차트 라이브러리 의존 제거",
          "Drag 제스처 기반 데이터 포인트 탐색, 1주일~1년 기간별 범위 자동 계산 및 동적 표시",
        ],
      },
      {
        title: "기타 주요 작업",
        project: "미스고 옥션/부동산 · 제이스톡",
        period: "",
        tags: [],
        bullets: [
          "iOS 26.0 대응 — 외부 레이아웃 라이브러리(FlexLayout)에서 발생하는 레이아웃 계산 무한루프를 UIStackView 전환으로 해결",
          "파일 캐싱 — 디스크+메모리 이중 캐싱 구조 및 LRU 기반 자동 용량 관리 구현",
          "AI 코딩 도구 도입 — Claude Code·Codex를 활용하고, 프로젝트 규칙 파일(AGENTS.md/CLAUDE.md)을 작성하여 AI가 프로젝트 맥락을 이해한 상태에서 코드를 생성하도록 체계화",
        ],
      },
      {
        title: "모회사 내부 업무 시스템 QA 및 데이터 검증 자동화",
        project: "기타 업무",
        period: "2026. 02 ~ 2026. 03 · 약 2개월",
        tags: ["MySQL MCP", "AI Skill"],
        bullets: [
          "모회사 내부 업무 시스템의 투자 일정 관리, 거래 내역 보고서, 수익 배분 처리 등 핵심 기능에 대한 테스트 케이스 설계·수행",
          "MySQL MCP + AI 스킬을 활용하여 기획 의도와 실제 DB 데이터를 교차 검증하는 자동화 체계 구축, 매일 이상 데이터를 자동 탐지하고 리포트 작성",
        ],
      },
      {
        title: "미스고 서비스 데이터 검증",
        project: "기타 업무",
        period: "2026. 02 ~ 2026. 03 · 약 2개월",
        tags: ["MCP"],
        bullets: [
          "MCP 활용하여 경매 데이터의 패턴 분석 및 이상치 탐지, 면적 계산 오류를 4가지 원인 유형으로 분류하고 우선순위 리포트 작성",
          "공매 물건 누락 원인 분석 — 전체 5,861건 대상 에러 유형별 분류 및 원인 리포트 작성",
        ],
      },
    ],
  },

  footer: {
    type: "section",
    id: "contact",
    sectionType: "footer",
    heading: "Let's Connect",
    subtitle:
      "함께 성장하고, 더 나은 서비스를 만들어 나갈 수 있는 기회를 기다리고 있습니다.",
    label: "Contact",
    cta: [
      {
        label: "shapekim98@gmail.com",
        href: "mailto:shapekim98@gmail.com",
        variant: "primary",
        icon: "Mail",
      },
      {
        label: "GitHub",
        href: "https://github.com/ShapeKim98",
        variant: "secondary",
        icon: "Github",
        target: "_blank",
      },
    ],
    phone: "010-9027-8292",
    copyright: "© 2025 김도형. All rights reserved.",
  },
};
