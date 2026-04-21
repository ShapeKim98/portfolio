import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { Github, Mail, ChevronDown, Download } from "lucide-react";
import { Badge, IconButton, ParallaxBlobLayer, ParallaxAccentLayer } from "./design-system";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const easeEditorial: [number, number, number, number] = [0.23, 1, 0.32, 1];

  // Editorial 스프링 (stiffness 상향, reduced-motion 대응)
  const spring = { stiffness: 140, damping: 28, restDelta: 0.001 };

  const rawTitleY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -150]);
  const titleY = useSpring(rawTitleY, spring);
  const rawSubtitleY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -100]);
  const subtitleY = useSpring(rawSubtitleY, spring);
  const rawBgY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : 180]);
  const bgY = useSpring(rawBgY, { stiffness: 80, damping: 22 });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const blurProgress = useTransform(scrollYProgress, [0.2, 0.55], [0, shouldReduce ? 0 : 10]);
  const blurFilter = useTransform(blurProgress, (v) => `blur(${v}px)`);

  // Foreground accent layer
  const rawAccentY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -220]);
  const accentY = useSpring(rawAccentY, { stiffness: 70, damping: 18 });
  const accentRotate = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : 60]);

  // 진입 모션 (Editorial: duration 0.45, 딜레이 80ms 간격, y 12)
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduce ? 0.2 : 0.45, delay, ease: easeEditorial },
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Layer 0: Background decoration - slowest */}
      <ParallaxBlobLayer bgY={bgY} bgScale={bgScale}>
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
      </ParallaxBlobLayer>

      {/* Layer 3: Foreground accent - fastest */}
      <ParallaxAccentLayer accentY={accentY}>
        <motion.div
          style={{ rotate: accentRotate }}
          className="absolute top-[15%] left-[10%] w-4 h-4 rounded-full border-2 border-primary/15"
          aria-hidden="true"
        />
        <div className="absolute top-[30%] right-[8%] w-24 h-px bg-primary/10" aria-hidden="true" />
        <motion.div
          style={{ rotate: accentRotate }}
          className="absolute bottom-[30%] left-[15%] w-2 h-2 rounded-full bg-primary/20"
          aria-hidden="true"
        />
        <div className="absolute bottom-[20%] right-[12%] text-2xl text-primary/10 select-none" aria-hidden="true">+</div>
      </ParallaxAccentLayer>

      {/* Main content — editorial 좌측 정렬 + 비대칭 그리드 */}
      <motion.div
        style={{ opacity, scale, filter: blurFilter }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] md:gap-12 items-end">
          {/* Left: 이름 + CTA (주 콘텐츠) */}
          <motion.div style={{ y: titleY }}>
            <motion.div {...enter(0)} className="mb-6">
              <Badge size="sm" className="tracking-wide">iOS Developer</Badge>
            </motion.div>

            <motion.h1
              {...enter(0.08)}
              className="font-black tracking-tightest leading-[0.85] text-foreground text-balance mb-8"
              style={{ fontSize: "clamp(3.5rem, 14vw, 9rem)" }}
            >
              김도형
            </motion.h1>

            <motion.div
              {...enter(0.24)}
              className="flex flex-wrap items-center gap-3"
            >
              <IconButton href="https://github.com/ShapeKim98" variant="primary" size="md" icon={<Github size={16} />} target="_blank" rel="noopener noreferrer" aria-label="GitHub 프로필 (새 탭)">GitHub</IconButton>
              <IconButton href="mailto:shapekim98@gmail.com" variant="secondary" size="md" icon={<Mail size={16} />} aria-label="이메일 보내기">Contact</IconButton>
              <IconButton
                href={`${import.meta.env.BASE_URL}portfolio.pdf`}
                variant="secondary"
                size="md"
                icon={<Download size={16} />}
                download="김도형_iOS_포트폴리오.pdf"
                data-print-hide
                aria-label="포트폴리오 PDF 다운로드"
              >
                PDF
              </IconButton>
            </motion.div>
          </motion.div>

          {/* Right: 서브타이틀 (편집적 오프셋) */}
          <motion.div style={{ y: subtitleY }} className="mt-8 md:mt-0 md:mb-4">
            <motion.p
              {...enter(0.16)}
              className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed tracking-normal max-w-md text-pretty"
            >
              더 나은 방향을 향해 한 걸음씩 나아가는
              <br />
              iOS 개발자입니다.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        aria-hidden="true"
      >
        <span className="text-xs font-normal tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={shouldReduce ? undefined : { y: [0, 8, 0] }}
          transition={shouldReduce ? undefined : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
