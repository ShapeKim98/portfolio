import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { FadeInView } from "./ParallaxSection";
import { Github, Mail, Phone } from "lucide-react";
import { SectionInner } from "./design-system";

export function FooterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawBgY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const bgY = useSpring(rawBgY, { stiffness: 120, damping: 28 });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const rawAccentY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const accentY = useSpring(rawAccentY, { stiffness: 80, damping: 20 });
  const accentRotate = useTransform(scrollYProgress, [0, 1], [0, 35]);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 md:py-40 px-6 overflow-hidden">
      {/* Background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/4 blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-primary/3 blur-3xl" />
      </motion.div>

      {/* Accent */}
      <motion.div
        style={{ y: accentY }}
        className="absolute inset-0 pointer-events-none z-20"
      >
        <motion.div
          style={{ rotate: accentRotate }}
          className="absolute top-[15%] right-[15%] w-3 h-3 rounded-full border-2 border-primary/15"
        />
        <div className="absolute bottom-[30%] left-[8%] w-20 h-px bg-primary/10" />
      </motion.div>

      <SectionInner className="max-w-3xl text-center">
        <FadeInView speed={1.3}>
          <span className="text-[13px] font-medium text-primary tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-lg font-normal text-muted-foreground leading-loose mb-12">
            함께 성장하고, 더 나은 서비스를 만들어 나갈 수 있는 기회를 기다리고 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:shapekim98@gmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              shapekim98@gmail.com
            </a>
            <a
              href="https://github.com/ShapeKim98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border text-foreground text-base font-medium hover:bg-muted transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone size={14} />
            <span className="text-[13px] font-normal">010-9027-8292</span>
          </div>
        </FadeInView>
      </SectionInner>

      <SectionInner className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-sm font-normal text-muted-foreground">
          © 2025 김도형. All rights reserved.
        </p>
      </SectionInner>
    </section>
  );
}
