import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useIsMobile } from "./ui/use-mobile";

const VALUES = [
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
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const m = isMobile ? 0.35 : 1;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const spring = { stiffness: 120, damping: 28, restDelta: 0.001 };

  // Layer 0: Background decorative
  const rawBgY = useTransform(scrollYProgress, [0, 1], [25 * m, -25 * m]);
  const bgY = useSpring(rawBgY, spring);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Layer 1: Title
  const rawTitleY = useTransform(scrollYProgress, [0, 1], [40 * m, -40 * m]);
  const titleY = useSpring(rawTitleY, spring);
  const titleScale = useTransform(scrollYProgress, [0.05, 0.3], [0.98, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

  // Layer 2: Cards - subtle stagger
  const rawCard0Y = useTransform(scrollYProgress, [0, 1], [50 * m, -50 * m]);
  const rawCard1Y = useTransform(scrollYProgress, [0, 1], [65 * m, -65 * m]);
  const rawCard2Y = useTransform(scrollYProgress, [0, 1], [80 * m, -80 * m]);
  const card0Y = useSpring(rawCard0Y, { stiffness: 100, damping: 25 });
  const card1Y = useSpring(rawCard1Y, { stiffness: 90, damping: 23 });
  const card2Y = useSpring(rawCard2Y, { stiffness: 80, damping: 20 });
  const cardYs = [card0Y, card1Y, card2Y];

  const card0Opacity = useTransform(scrollYProgress, [0.08, 0.25], [0, 1]);
  const card1Opacity = useTransform(scrollYProgress, [0.13, 0.3], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.18, 0.35], [0, 1]);
  const cardOpacities = [card0Opacity, card1Opacity, card2Opacity];

  // Layer 3: Accent decorative
  const rawAccentY = useTransform(scrollYProgress, [0, 1], [90 * m, -90 * m]);
  const accentY = useSpring(rawAccentY, { stiffness: 80, damping: 20 });
  const accentRotate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 30]);

  // Contact
  const rawContactY = useTransform(scrollYProgress, [0, 1], [40 * m, -40 * m]);
  const contactY = useSpring(rawContactY, spring);
  const contactOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 md:py-40 px-6 overflow-hidden"
    >
      {/* Layer 0: Background decorative */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Gradient blob - top right */}
        <div className="absolute top-[10%] -right-[100px] w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        {/* Gradient blob - bottom left */}
        <div className="absolute bottom-[15%] -left-[80px] w-[300px] h-[300px] rounded-full bg-primary/3 blur-3xl" />
        {/* Dot grid - desktop only */}
        {!isMobile && (
          <div
            className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] text-foreground opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        )}
      </motion.div>

      {/* Layer 3: Accent decorative (foreground) */}
      <motion.div
        style={{ y: accentY }}
        className="absolute inset-0 pointer-events-none z-20"
      >
        {/* Small circle - top left */}
        <motion.div
          style={{ rotate: accentRotate }}
          className="absolute top-[20%] left-[8%] w-3 h-3 rounded-full border-2 border-primary/20"
        />
        {/* Horizontal line - right */}
        <div className="absolute top-[40%] right-[5%] w-20 h-px bg-primary/15" />
        {/* Filled dot - bottom right */}
        <div className="absolute bottom-[25%] right-[12%] w-1.5 h-1.5 rounded-full bg-primary/25" />
        {/* Plus sign - left */}
        {!isMobile && (
          <span className="absolute bottom-[40%] left-[15%] text-[20px] text-primary/15 leading-none select-none">
            +
          </span>
        )}
      </motion.div>

      {/* Main content - z-10 */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Layer 1: Title */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full bg-primary" />
            <span className="text-[16px] font-[700] text-primary tracking-[-0.025em]">
              iOS Developer
            </span>
          </div>
          <h2 className="text-[48px] md:text-[72px] font-[700] tracking-[-0.025em] leading-[1.25] text-foreground mb-6">
            <span>김도형 </span>
            <span className="text-[40px] md:text-[60px] font-[400] text-muted-foreground">
              Kim Dohyeong
            </span>
          </h2>
          <p className="text-[20px] font-[400] text-muted-foreground leading-[1.625] max-w-2xl tracking-[-0.02em]">
            개발에 대한 꾸준한 고민과 되돌아보는 태도를 바탕으로, 더 나은 방향을
            향해 한 걸음씩 나아가고 있습니다.
          </p>
        </motion.div>

        {/* Layer 2: Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.tag}
              style={{ y: cardYs[i], opacity: cardOpacities[i] }}
            >
              <div className="p-6 rounded-2xl bg-card border border-border h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[14px] font-[700] text-primary">
                    {value.tag}
                  </span>
                </div>
                <h3 className="text-[16px] font-[700] tracking-[-0.025em] text-foreground mb-3 leading-[1.375]">
                  {value.title}
                </h3>
                <p className="text-[14px] font-[400] text-muted-foreground leading-[1.625] tracking-[-0.01em]">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div style={{ y: contactY, opacity: contactOpacity }}>
          <div className="border-t border-border pt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
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
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[12px] font-[500] text-muted-foreground tracking-[0.05em] uppercase mb-1.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-[500] text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[14px] font-[500] text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
