import { FadeInView } from "./ParallaxSection";
import { Github, Mail, Phone } from "lucide-react";
import {
  SectionInner,
  EditorialGrid,
  GridLabel,
  GridBody,
  Eyebrow,
  MetaList,
} from "./design-system";

const CONTACTS = [
  {
    label: "Email",
    value: (
      <a
        href="mailto:shapekim98@gmail.com"
        className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
      >
        <Mail size={14} />
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
        className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
      >
        <Github size={14} />
        ShapeKim98
      </a>
    ),
  },
  {
    label: "Phone",
    value: (
      <span className="inline-flex items-center gap-2 tabular-nums">
        <Phone size={14} />
        010-9027-8292
      </span>
    ),
  },
  { label: "Birth", value: <span className="tabular-nums">1998.02.05</span> },
];

export function FooterSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border">
      <SectionInner>
        <FadeInView>
          <EditorialGrid className="mb-16">
            <GridLabel>
              <div className="flex flex-col gap-3">
                <Eyebrow>05 — Contact</Eyebrow>
                <h2
                  className="font-medium tracking-tight text-foreground leading-[1.05]"
                  style={{ fontSize: "var(--text-display)" }}
                >
                  Let's Connect
                </h2>
              </div>
            </GridLabel>
            <GridBody>
              <div className="flex flex-col gap-8 max-w-prose">
                <p className="text-base font-normal text-muted-foreground leading-relaxed">
                  함께 성장하고, 더 나은 서비스를 만들어 나갈 수 있는 기회를
                  기다리고 있습니다.
                </p>
                <MetaList items={CONTACTS} />
              </div>
            </GridBody>
          </EditorialGrid>
        </FadeInView>

        <div className="pt-8 border-t border-border flex items-center justify-between text-xs tracking-widest uppercase text-muted-foreground">
          <span>© 2025 김도형</span>
          <span>All rights reserved.</span>
        </div>
      </SectionInner>
    </section>
  );
}
