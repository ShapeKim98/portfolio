import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeInView } from "./ParallaxSection";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  SectionInner,
  EditorialGrid,
  GridLabel,
  GridBody,
  Eyebrow,
} from "./design-system";

interface WorkItem {
  title: string;
  project: string;
  period: string;
  tags: string[];
  bullets: string[];
}

const WORK_ITEMS: WorkItem[] = [
  {
    title: "지도 마커 성능 최적화",
    project: "미스고 옥션/부동산",
    period: "2026. 01 · 약 1주",
    tags: ["NaverMap SDK", "LRU Cache"],
    bullets: [
      "지도에 수백 개의 매물 마커를 동시 표시할 때 발생하는 CPU·메모리 과다 사용 문제를 캐시 구조와 마커 생명주기 개선으로 해결",
      "최근 사용되지 않은 데이터를 우선 제거하는 LRU Cache를 직접 구현하여 시스템 기본 캐시(NSCache) 교체 — 메모리 부족 시 캐시 전체가 초기화되며 발생하던 마커 중복 표시 문제 해결",
      "화면 밖 마커를 재사용 풀에 대기시키는 메커니즘 설계, 매번 새 객체를 생성하는 비용 제거",
      "고밀도 구간에서 CPU 약 20%, 메모리 약 26% 수준의 사용량 감소 확인",
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
      "부동산 전문가가 여러 유형의 광고를 직접 등록·결제·관리하는 전체 화면 및 로직 신규 개발",
      "단건 등록에서 일괄 등록 기능으로 확장, 일부만 성공하는 경우 등 케이스별 결과 안내 분기 처리",
      "지도 축척 단계에 따라 광고 노출 범위가 달라지는 정책 설계",
      "결제가 중간에 끊겨도 입력 정보를 유지한 채 등록이 자동 재개되는 UX 구성",
    ],
  },
  {
    title: "아키텍처 마이그레이션",
    project: "제이스톡",
    period: "2025. 08. 22 ~ 2026. 02. 23 · 약 6개월",
    tags: ["SwiftUI", "TCA", "Tuist"],
    bullets: [
      "운영이 중단된 서비스를 인수받아 빌드 환경 설정부터 앱 전체를 리뉴얼",
      "메모리 누수 및 Leak Detector 강제 종료 등 앱 안정성 이슈를 근본 해결하기 위해 RIBs → SwiftUI + TCA 아키텍처 전면 마이그레이션 (약 80% 완료)",
      "프로젝트 관리 도구 Tuist 3 → 4 버전 마이그레이션 및 전체 외부 라이브러리 최신 버전 업데이트",
    ],
  },
  {
    title: "실시간 채팅을 통한 비상장 거래 및 PB 중개 매칭 시스템",
    project: "제이스톡",
    period: "2025. 10. 20 ~ 11. 21 · 약 1개월",
    tags: ["TCA", "TalkPlus SDK", "Swift Concurrency"],
    bullets: [
      "TalkPlus SDK 기반 실시간 채팅 구축, 다양한 메시지 타입 정의 및 화면 분기 처리",
      "채팅 기반 중개 요청·승인 플로우 설계·구현",
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
    title: "사내 업무 시스템 QA 및 데이터 검증 자동화",
    project: "기타 업무",
    period: "2026. 02 ~ 2026. 03 · 약 2개월",
    tags: ["MySQL MCP", "AI Skill"],
    bullets: [
      "사내 업무 시스템의 주요 기능에 대한 테스트 케이스 설계·수행",
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
      "공매 물건 누락 원인 분석 — 전수 대상 에러 유형별 분류 및 원인 리포트 작성",
    ],
  },
];

const INITIAL_VISIBLE_COUNT = 4;

function WorkItemRow({ item, index }: { item: WorkItem; index: number }) {
  return (
    <div
      className="py-8 border-b border-border grid grid-cols-1 md:grid-cols-[80px_1fr] gap-x-6 gap-y-3"
      data-print-keep
    >
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium tracking-widest text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-medium tracking-tight text-foreground leading-snug">
          {item.title}
        </h4>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs tracking-widest uppercase text-muted-foreground">
          <span>{item.project}</span>
          {item.period && (
            <>
              <span aria-hidden>·</span>
              <span className="tabular-nums">{item.period}</span>
            </>
          )}
        </div>

        {item.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <li
                key={t}
                className="inline-flex items-center px-2 py-0.5 rounded-[10px] border border-border bg-card text-[11px] text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-col gap-2 mt-1">
          {item.bullets.map((bullet, j) => (
            <li
              key={j}
              className="flex gap-3 text-base font-normal text-muted-foreground leading-normal"
            >
              <span className="text-muted-foreground mt-[0.55em] shrink-0">·</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);

  const alwaysVisible = WORK_ITEMS.slice(0, INITIAL_VISIBLE_COUNT);
  const hidden = WORK_ITEMS.slice(INITIAL_VISIBLE_COUNT);

  const handleCollapse = () => {
    setExpanded(false);
    const el = document.getElementById("experience");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <SectionInner>
        <FadeInView data-print-keep>
          <EditorialGrid className="mb-14">
            <GridLabel>
              <div className="flex flex-col gap-3">
                <Eyebrow>03 — Experience</Eyebrow>
                <h2 className="text-2xl font-medium tracking-tight text-foreground">
                  미스고(주)
                </h2>
                <div className="flex flex-col gap-1 text-xs tracking-widest uppercase text-muted-foreground">
                  <span className="tabular-nums">2025. 08 ~ 2026. 04</span>
                  <span>iOS Developer</span>
                </div>
              </div>
            </GridLabel>
            <GridBody>
              <div className="flex flex-col gap-4 text-base font-normal text-muted-foreground leading-relaxed">
                <p>
                  Swift/SwiftUI/UIKit 기반 iOS 개발자로 1인 개발 체제에서 2개 앱의
                  전체 iOS 개발을 단독으로 담당했습니다.
                </p>
                <p>
                  약 8개월간 신규 기능 개발부터 성능 최적화, CI/CD 구축, 아키텍처
                  마이그레이션까지 iOS 앱 운영의 전 과정을 경험했습니다.
                </p>
                <p>
                  Claude Code·Codex 등 AI 코딩 도구를 적극 활용해 개발 생산성과
                  코드 품질을 향상시켰습니다.
                </p>
                <p>
                  개발 범위를 넘어 QA 업무까지 자발적으로 맡았고, MCP + AI 스킬
                  기반 데이터 검증 방식을 직접 고안·적용하면서 자체 검증을
                  중시하는 개발 습관을 체득했습니다.
                </p>
              </div>
            </GridBody>
          </EditorialGrid>
        </FadeInView>

        {/* Work items */}
        <EditorialGrid>
          <GridLabel>
            <Eyebrow>Work</Eyebrow>
          </GridLabel>
          <GridBody>
            <div className="border-t border-border">
              {alwaysVisible.map((item, i) => (
                <FadeInView key={item.title} delay={i * 0.03}>
                  <WorkItemRow item={item} index={i} />
                </FadeInView>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="expandable"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.35 },
                  }}
                  className="overflow-hidden"
                >
                  <div>
                    {hidden.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{
                          duration: 0.35,
                          delay: expanded ? i * 0.04 : 0,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <WorkItemRow
                          item={item}
                          index={i + INITIAL_VISIBLE_COUNT}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {WORK_ITEMS.length > INITIAL_VISIBLE_COUNT && (
              <div data-print-hide className="mt-2">
                <button
                  onClick={() =>
                    expanded ? handleCollapse() : setExpanded(true)
                  }
                  className="w-full flex items-center justify-center gap-2 py-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors border-b border-border"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={expanded ? "c" : "e"}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.18 }}
                      className="inline-flex items-center gap-2"
                    >
                      {expanded ? (
                        <>
                          축소
                          <ChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          더보기
                          <ChevronDown size={14} />
                        </>
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
            )}
          </GridBody>
        </EditorialGrid>
      </SectionInner>
    </section>
  );
}
