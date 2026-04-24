import { motion } from "motion/react";
import { Github, Mail, Download, ArrowUpRight } from "lucide-react";
import { SectionInner, Eyebrow, MetaList } from "./design-system";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start pt-32 md:pt-40 pb-24"
      data-print-keep
    >
      <SectionInner>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-x-[clamp(16px,2vw,32px)] gap-y-12"
        >
          {/* Left: identity + heading + sub */}
          <div className="col-span-1 md:col-span-8 lg:col-span-8 flex flex-col gap-8">
            <Eyebrow>Portfolio — 2026</Eyebrow>

            <h1 className="font-medium tracking-tight leading-[1.05] text-foreground"
                style={{ fontSize: "var(--text-display)" }}>
              김도형
            </h1>

            <p className="text-lg md:text-xl font-normal text-muted-foreground leading-relaxed max-w-2xl">
              더 나은 방향을 향해 한 걸음씩 나아가는
              <br />
              iOS 개발자입니다.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a
                href="https://github.com/ShapeKim98"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground hover:opacity-70 transition-opacity"
              >
                <Github size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="opacity-60" />
              </a>
              <a
                href="mailto:shapekim98@gmail.com"
                className="inline-flex items-center gap-1.5 text-foreground hover:opacity-70 transition-opacity"
              >
                <Mail size={14} />
                <span>Contact</span>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}portfolio.pdf`}
                download="김도형_iOS_포트폴리오.pdf"
                data-print-hide
                className="inline-flex items-center gap-1.5 text-foreground hover:opacity-70 transition-opacity"
              >
                <Download size={14} />
                <span>PDF</span>
              </a>
            </div>
          </div>

          {/* Right: meta column (key-value) */}
          <div className="col-span-1 md:col-span-8 lg:col-span-4 lg:pt-12">
            <MetaList
              items={[
                { label: "Role", value: "iOS Developer" },
                { label: "Based in", value: "Seoul" },
                {
                  label: "Email",
                  value: (
                    <a
                      href="mailto:shapekim98@gmail.com"
                      className="hover:opacity-70 transition-opacity break-all"
                    >
                      shapekim98@gmail.com
                    </a>
                  ),
                },
                {
                  label: "GitHub",
                  value: (
                    <a
                      href="https://github.com/ShapeKim98"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                    >
                      ShapeKim98
                    </a>
                  ),
                },
              ]}
            />
          </div>
        </motion.div>
      </SectionInner>
    </section>
  );
}
