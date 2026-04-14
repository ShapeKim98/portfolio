import { Suspense } from "react";
import { ComponentRegistry } from "./ComponentRegistry";
import type { BlockNode, LeafNode } from "../ast/nodes";
import { getIcon } from "../icon-map";
import { getDiagram } from "./diagram-map";
import { cn } from "@/app/components/ui/utils";

/* ─── Registry Helpers ─── */
import { extractBlocksByTag, extractSlot, extractTextContent, extractListItems } from "./helpers";

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
import { ColoredCardGrid } from "@/app/organisms/ColoredCardGrid";
import { InfoBoxFlow } from "@/app/organisms/InfoBoxFlow";
import { SectionGroup } from "@/app/organisms/SectionGroup";

/* ─── Organisms / Diagrams ─── */
import { LayerDiagram } from "@/app/organisms/diagrams/LayerDiagram";
import { FlowChart } from "@/app/organisms/diagrams/FlowChart";
import { ProblemSolvingBlock } from "@/app/organisms/diagrams/ProblemSolvingBlock";
import { TechTags } from "@/app/organisms/diagrams/TechTags";
import { ScreenshotPlaceholder } from "@/app/organisms/diagrams/ScreenshotPlaceholder";
import { DBSchemaWithERD } from "@/app/organisms/diagrams/DBSchemaWithERD";
import { SyncFlowDiagram } from "@/app/organisms/diagrams/SyncFlowDiagram";

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
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => {
      const layers = extractBlocksByTag(node, "layer").map(l => ({
        label: (l.params._title as string) ?? "",
        description: extractTextContent(l.children),
        color: (l.params.color as string) ?? "#6366f1",
      }));
      return <LayerDiagram title={(node.params._title as string) ?? ""} layers={layers} />;
    },
  });

  // flow-chart → FlowChart
  registry.register({
    tag: "flow-chart",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => {
      const steps = extractBlocksByTag(node, "step").map(s => ({
        label: (s.params._title as string) ?? "",
        description: extractTextContent(s.children),
        color: (s.params.color as string) ?? "#6366f1",
      }));
      return <FlowChart title={(node.params._title as string) ?? ""} steps={steps} />;
    },
  });

  // vertical-flow → VerticalFlow
  registry.register({
    tag: "vertical-flow",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => {
      const steps = extractBlocksByTag(node, "flow-step").map(s => ({
        label: (s.params._title as string) ?? "",
        desc: (s.params.desc as string) ?? extractTextContent(s.children),
        color: (s.params.color as string) ?? "#6366f1",
      }));
      return <VerticalFlow steps={steps} maxWidth={node.params.maxWidth as string | undefined} />;
    },
  });

  // problem-solution → ProblemSolvingBlock
  registry.register({
    tag: "problem-solution",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => {
      let problem = "";
      let solution = "";
      let detail: string | undefined;
      for (const child of node.children) {
        if (child.kind === "leaf") {
          if (child.tag === "problem") problem = child.content;
          else if (child.tag === "solution") solution = child.content;
          else if (child.tag === "detail") detail = child.content;
        }
      }
      return (
        <ProblemSolvingBlock
          problem={problem}
          solution={solution}
          detail={detail}
        />
      );
    },
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
      const src = node.content || node.attributes.src || node.params.src as string || "";
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

  /* ══════════════════════════════════════════
   *  Block Tags (new data-driven)
   * ══════════════════════════════════════════ */

  // db-schema → DBSchemaWithERD
  registry.register({
    tag: "db-schema",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => {
      const tables = extractBlocksByTag(node, "table").map(t => ({
        name: (t.params._title as string) ?? "",
        fields: extractListItems(t.children).map(item => {
          // Parse "field: Type (PK)" format
          const match = item.match(/^(\w+):\s*(.+?)(?:\s*\((\w+)\))?$/);
          if (match) {
            return { name: match[1], type: match[2].trim(), key: match[3] === "PK" };
          }
          const parts = item.split(":");
          return { name: parts[0]?.trim() ?? "", type: parts[1]?.trim() ?? "", key: item.includes("(PK)") };
        }),
      }));
      const relationsBlock = extractBlocksByTag(node, "relations")[0];
      const relations = relationsBlock ? extractListItems(relationsBlock.children) : [];
      return <DBSchemaWithERD title={(node.params._title as string) ?? ""} tables={tables} relations={relations} />;
    },
  });

  // sync-flow → SyncFlowDiagram
  registry.register({
    tag: "sync-flow",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => {
      const descParts: string[] = [];
      const steps: { label: string; color: string; desc: string }[] = [];
      let problem = "";
      let solution = "";
      let detail: string | undefined;
      let screenshotSrc: string | undefined;

      for (const child of node.children) {
        if (child.kind === "block" && child.tag === "step") {
          steps.push({
            label: (child.params._title as string) ?? "",
            color: (child.params.color as string) ?? "#6366f1",
            desc: extractTextContent(child.children),
          });
        } else if (child.kind === "block" && child.tag === "problem-solution") {
          for (const psChild of (child as BlockNode).children) {
            if (psChild.kind === "leaf") {
              if (psChild.tag === "problem") problem = psChild.content;
              else if (psChild.tag === "solution") solution = psChild.content;
              else if (psChild.tag === "detail") detail = psChild.content;
            }
          }
        } else if (child.kind === "leaf" && child.tag === "image") {
          screenshotSrc = child.content || child.attributes.src || (child.params.src as string) || "";
        } else if (child.kind === "paragraph") {
          descParts.push(extractTextContent(child.children));
        }
      }

      return (
        <SyncFlowDiagram
          title={(node.params._title as string) ?? ""}
          description={descParts.join(" ") || undefined}
          steps={steps}
          problem={problem}
          solution={solution}
          detail={detail}
          screenshotSrc={screenshotSrc}
        />
      );
    },
  });

  // colored-card-grid → ColoredCardGrid
  registry.register({
    tag: "colored-card-grid",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => {
      const items = extractBlocksByTag(node, "colored-card").map(c => ({
        label: (c.params._title as string) ?? "",
        description: extractTextContent(c.children),
        color: (c.params.color as string) ?? "#6366f1",
        mono: parseBool(c.params.mono),
      }));
      return (
        <ColoredCardGrid
          items={items}
          cols={parseNumber(node.params.cols, 2)}
          gap={parseNumber(node.params.gap, 2)}
          className={node.params.className as string | undefined}
        />
      );
    },
  });

  // colored-card → fallback wrapper (used inside colored-card-grid)
  registry.register({
    tag: "colored-card",
    isBlock: true,
    renderer: ({ children }: { node: BlockNode; children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  });

  // info-box-flow → InfoBoxFlow
  registry.register({
    tag: "info-box-flow",
    isBlock: true,
    renderer: ({ node }: { node: BlockNode; children: React.ReactNode }) => {
      const items = node.children
        .filter((c): c is import("../ast/nodes").LeafNode => c.kind === "leaf" && c.tag === "info-box")
        .map(c => ({
          label: (c.params.label as string) ?? c.content,
          sub: c.params.sub as string | undefined,
          color: (c.params.color as string) ?? "#6366f1",
          center: parseBool(c.params.center),
        }));
      return (
        <InfoBoxFlow
          items={items}
          arrowBreak={parseNumber(node.params["arrow-break"], undefined as unknown as number)}
          className={node.params.className as string | undefined}
        />
      );
    },
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
