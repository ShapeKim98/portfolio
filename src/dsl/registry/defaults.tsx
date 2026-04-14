import { Suspense } from "react";
import { ComponentRegistry } from "./ComponentRegistry";
import type { BlockNode, LeafNode } from "../ast/nodes";
import { getIcon } from "../icon-map";
import { getDiagram } from "./diagram-map";
import { cn } from "@/app/components/ui/utils";

/* ─── Atoms ─── */
import { Badge } from "@/app/atoms/Badge";

/* ─── Molecules ─── */
import { IconButton } from "@/app/molecules/IconButton";
import { FeatureItem } from "@/app/molecules/FeatureItem";
import { NumberedStep } from "@/app/molecules/NumberedStep";
import { ClickableImage } from "@/app/molecules/ClickableImage";

/* ─── Organisms ─── */
import { ContentCard } from "@/app/organisms/ContentCard";
import { FeatureCard } from "@/app/organisms/FeatureCard";
import { VerticalFlow } from "@/app/organisms/VerticalFlow";
import { ColoredInfoBox } from "@/app/organisms/ColoredInfoBox";
import { SectionGroup } from "@/app/organisms/SectionGroup";

/* ─── Organisms / Diagrams ─── */
import { LayerDiagram } from "@/app/organisms/diagrams/LayerDiagram";
import { FlowChart } from "@/app/organisms/diagrams/FlowChart";
import { ProblemSolvingBlock } from "@/app/organisms/diagrams/ProblemSolvingBlock";
import { TechTags } from "@/app/organisms/diagrams/TechTags";
import { ScreenshotPlaceholder } from "@/app/organisms/diagrams/ScreenshotPlaceholder";

/* ─── Organisms / Animation ─── */
import { FadeInView } from "@/app/organisms/animation/FadeInView";
import { ScrollSection } from "@/app/organisms/animation/ScrollSection";
import { DeepParallax } from "@/app/organisms/animation/DeepParallax";

/* ─── Templates ─── */
import { TwoColumnLayout } from "@/app/templates/TwoColumnLayout";

/* ─── Helpers ─── */

function parseNumber(val: string | boolean | undefined, fallback: number): number {
  if (typeof val === "string") {
    const n = Number(val);
    return Number.isNaN(n) ? fallback : n;
  }
  return fallback;
}

function parseBool(val: string | boolean | undefined): boolean {
  if (typeof val === "boolean") return val;
  if (val === "true") return true;
  return false;
}

function parseJsonArray<T>(val: string | boolean | undefined): T[] {
  if (typeof val !== "string") return [];
  try {
    const parsed = JSON.parse(val);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Creates a ComponentRegistry pre-populated with all default tag mappings.
 */
export function createDefaultRegistry(): ComponentRegistry {
  const registry = new ComponentRegistry();

  /* ══════════════════════════════════════════
   *  Block Tags (have children)
   * ══════════════════════════════════════════ */

  // card → ContentCard
  registry.register({
    tag: "card",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => (
      <ContentCard
        padding={node.params.padding as "sm" | "md" | "lg" | undefined}
        className={node.params.className as string | undefined}
      >
        {children}
      </ContentCard>
    ),
  });

  // features → div wrapper for FeatureCard children
  registry.register({
    tag: "features",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => {
      const cols = node.params.cols as string;
      const gridClass = cn("grid gap-4",
        cols === "1" ? "" : cols === "3" ? "md:grid-cols-3" : "md:grid-cols-2",
        node.params.className as string | undefined
      );
      return (
        <div className={gridClass}>
          {children}
        </div>
      );
    },
  });

  // feature → FeatureCard (title from node.params._title)
  registry.register({
    tag: "feature",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => (
      <FeatureCard
        title={node.params._title as string ?? ""}
        className={node.params.className as string | undefined}
      >
        {children}
      </FeatureCard>
    ),
  });

  // feature-list → div wrapper for FeatureItem children
  registry.register({
    tag: "feature-list",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => (
      <div className={cn("grid md:grid-cols-2 gap-3 mb-12", node.params.className as string | undefined)}>
        {children}
      </div>
    ),
  });

  // feature-item → FeatureItem
  registry.register({
    tag: "feature-item",
    isBlock: true,
    renderer: ({ children }: { node: BlockNode; children: React.ReactNode }) => (
      <FeatureItem>{children}</FeatureItem>
    ),
  });

  // section-group → SectionGroup
  registry.register({
    tag: "section-group",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => {
      const spacing = node.params.spacing !== "false";
      const group = (
        <SectionGroup title={node.params._title as string ?? ""}>
          {children}
        </SectionGroup>
      );
      return spacing ? <div className="mt-16">{group}</div> : group;
    },
  });

  // two-column → TwoColumnLayout (extract left/right slots from children)
  registry.register({
    tag: "two-column",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => {
      // children from slots are rendered as an array; first = left, second = right
      const childArray = Array.isArray(children) ? children : [children];
      const left = childArray[0] ?? null;
      const right = childArray[1] ?? null;
      return (
        <TwoColumnLayout
          left={left}
          right={right}
          className={node.params.className as string | undefined}
        />
      );
    },
  });

  // grid → CSS grid div
  registry.register({
    tag: "grid",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => {
      const cols = parseNumber(node.params.cols, 2);
      const gap = parseNumber(node.params.gap, 4);
      return (
        <div
          className={cn(
            "grid",
            cols === 2 && "md:grid-cols-2",
            cols === 3 && "md:grid-cols-3",
            cols === 4 && "md:grid-cols-4",
            node.params.className as string | undefined,
          )}
          style={{ gap: `${gap * 4}px` }}
        >
          {children}
        </div>
      );
    },
  });

  // flex → CSS flex div
  registry.register({
    tag: "flex",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => {
      const direction = node.params.direction as string ?? "row";
      const gap = parseNumber(node.params.gap, 4);
      const wrap = parseBool(node.params.wrap);
      const alignVal = node.params.items as string | undefined;
      const justifyVal = node.params.justify as string | undefined;
      const ITEMS_MAP: Record<string, string> = { start: "flex-start", end: "flex-end", center: "center", baseline: "baseline", stretch: "stretch" };
      const JUSTIFY_MAP: Record<string, string> = { start: "flex-start", end: "flex-end", center: "center", between: "space-between", around: "space-around", evenly: "space-evenly" };
      return (
        <div
          className={cn(
            "flex",
            direction === "col" || direction === "column" ? "flex-col" : "flex-row",
            wrap && "flex-wrap",
            node.params.className as string | undefined,
          )}
          style={{
            gap: `${gap * 4}px`,
            ...(alignVal ? { alignItems: ITEMS_MAP[alignVal] || alignVal } : {}),
            ...(justifyVal ? { justifyContent: JUSTIFY_MAP[justifyVal] || justifyVal } : {}),
          }}
        >
          {children}
        </div>
      );
    },
  });

  // fade-in → FadeInView
  registry.register({
    tag: "fade-in",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => (
      <FadeInView
        delay={parseNumber(node.params.delay, 0)}
        speed={parseNumber(node.params.speed, 1)}
        direction={node.params.direction as "up" | "left" | "right" | "none" | undefined}
        className={node.params.className as string | undefined}
      >
        {children}
      </FadeInView>
    ),
  });

  // scroll-section → ScrollSection
  registry.register({
    tag: "scroll-section",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => (
      <ScrollSection
        speed={parseNumber(node.params.speed, 1)}
        className={node.params.className as string | undefined}
      >
        {children}
      </ScrollSection>
    ),
  });

  // parallax → DeepParallax
  registry.register({
    tag: "parallax",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => (
      <DeepParallax
        speed={parseNumber(node.params.speed, 1)}
        fade={parseBool(node.params.fade)}
        className={node.params.className as string | undefined}
      >
        {children}
      </DeepParallax>
    ),
  });

  // numbered-steps → div wrapper for NumberedStep children
  registry.register({
    tag: "numbered-steps",
    isBlock: true,
    renderer: ({ node, children }: { node: BlockNode; children: React.ReactNode }) => {
      // Auto-inject index into each NumberedStep child
      const childArray = Array.isArray(children) ? children : [children];
      return (
        <div className={cn("grid gap-3", node.params.cols === "2" ? "md:grid-cols-2" : "")}>
          {childArray.map((child, i) => (
            <NumberedStep key={i} index={i + 1}>
              {child}
            </NumberedStep>
          ))}
        </div>
      );
    },
  });

  /* ══════════════════════════════════════════
   *  Block Tags (diagrams — data-driven)
   * ══════════════════════════════════════════ */

  // layer-diagram → LayerDiagram
  registry.register({
    tag: "layer-diagram",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => (
      <LayerDiagram
        title={node.params._title as string ?? ""}
        layers={parseJsonArray(node.params.layers)}
      />
    ),
  });

  // flow-chart → FlowChart
  registry.register({
    tag: "flow-chart",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => (
      <FlowChart
        title={node.params._title as string ?? ""}
        steps={parseJsonArray(node.params.steps)}
      />
    ),
  });

  // vertical-flow → VerticalFlow
  registry.register({
    tag: "vertical-flow",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => (
      <VerticalFlow
        steps={parseJsonArray(node.params.steps)}
        maxWidth={node.params.maxWidth as string | undefined}
      />
    ),
  });

  // problem-solution → ProblemSolvingBlock
  registry.register({
    tag: "problem-solution",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => (
      <ProblemSolvingBlock
        problem={node.params.problem as string ?? ""}
        solution={node.params.solution as string ?? ""}
        detail={node.params.detail as string | undefined}
      />
    ),
  });

  /* ══════════════════════════════════════════
   *  Leaf Tags (no children)
   * ══════════════════════════════════════════ */

  // badge → Badge
  registry.register({
    tag: "badge",
    isBlock: false,
    renderer: ({ node }: { node: LeafNode }) => (
      <Badge
        variant={node.params.variant as "primary" | "destructive" | "success" | undefined}
        size={node.params.size as "xs" | "sm" | undefined}
        className={node.params.className as string | undefined}
      >
        {node.content}
      </Badge>
    ),
  });

  // button → IconButton
  registry.register({
    tag: "button",
    isBlock: false,
    renderer: ({ node }: { node: LeafNode }) => {
      const iconName = node.params.icon as string | undefined;
      const IconComp = iconName ? getIcon(iconName) : undefined;
      return (
        <IconButton
          href={node.attributes.href ?? node.params.href as string | undefined}
          variant={node.params.variant as "primary" | "secondary" | undefined}
          size={node.params.size as "sm" | "md" | "lg" | undefined}
          icon={IconComp ? <IconComp size={14} /> : undefined}
          target={node.attributes.target as string | undefined}
          rel={node.attributes.rel as string | undefined}
        >
          {node.content}
        </IconButton>
      );
    },
  });

  // tech-tags → TechTags
  registry.register({
    tag: "tech-tags",
    isBlock: false,
    renderer: ({ node }: { node: LeafNode }) => (
      <TechTags tags={parseJsonArray<string>(node.params.tags ?? node.content)} />
    ),
  });

  // kv → KeyValueRow (simple inline component)
  registry.register({
    tag: "kv",
    isBlock: false,
    renderer: ({ node }: { node: LeafNode }) => (
      <div className="flex items-baseline gap-2">
        <span className="text-sm font-semibold text-foreground shrink-0">
          {node.params.label as string ?? ""}
        </span>
        <span className="text-sm text-muted-foreground">{node.content}</span>
      </div>
    ),
  });

  // image → ClickableImage or img
  registry.register({
    tag: "image",
    isBlock: false,
    renderer: ({ node }: { node: LeafNode }) => {
      const src = node.attributes.src ?? node.params.src as string ?? "";
      const alt = node.attributes.alt ?? node.params.alt as string ?? "";
      const className = node.params.className as string | undefined;
      if (parseBool(node.params.lightbox)) {
        return <ClickableImage src={src} alt={alt} className={className} />;
      }
      return <img src={src} alt={alt} className={className} />;
    },
  });

  // screenshot-placeholder → ScreenshotPlaceholder
  registry.register({
    tag: "screenshot-placeholder",
    isBlock: false,
    renderer: ({ node }: { node: LeafNode }) => (
      <ScreenshotPlaceholder label={node.content || (node.params.label as string ?? "")} />
    ),
  });

  // space → spacer div
  registry.register({
    tag: "space",
    isBlock: false,
    renderer: ({ node }: { node: LeafNode }) => {
      const size = parseNumber(node.params.size, 4);
      return <div style={{ height: `${size * 4}px` }} aria-hidden />;
    },
  });

  // info-box → ColoredInfoBox
  registry.register({
    tag: "info-box",
    isBlock: false,
    renderer: ({ node }: { node: LeafNode }) => (
      <ColoredInfoBox
        label={node.params.label as string ?? node.content}
        sub={node.params.sub as string | undefined}
        color={node.params.color as string ?? "#6366f1"}
        center={parseBool(node.params.center)}
        badge={node.params.badge as string | undefined}
        className={node.params.className as string | undefined}
      />
    ),
  });

  // diagram → lazy-loaded diagram component
  registry.register({
    tag: "diagram",
    isBlock: false,
    renderer: ({ node }: { node: LeafNode }) => {
      const name = node.content;
      const DiagramComp = getDiagram(name);
      if (!DiagramComp) return <div data-pdsl-tag="diagram">Unknown diagram: {name}</div>;
      return (
        <Suspense fallback={null}>
          <DiagramComp />
        </Suspense>
      );
    },
  });

  return registry;
}
