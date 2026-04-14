import React, { useMemo } from "react";
import type {
  ASTNode,
  RootNode,
  BlockNode,
  LeafNode,
} from "@/dsl/ast/nodes";
import {
  ComponentRegistry,
  type BlockRenderer,
  type LeafRenderer,
} from "@/dsl/registry/ComponentRegistry";
import { SubSectionTitle } from "@/app/atoms/SubSectionTitle";
import { SectionPageHeading } from "@/app/templates/SectionPageHeading";
import { Divider } from "@/app/atoms/Divider";
import { cn } from "@/app/components/ui/utils";

/* ─── Default Registry Factory ─── */

function createDefaultRegistry(): ComponentRegistry {
  return new ComponentRegistry();
}

/* ─── Core Recursive Renderer ─── */

interface DSLRendererProps {
  node: ASTNode;
  registry: ComponentRegistry;
}

export function DSLRenderer({ node, registry }: DSLRendererProps) {
  switch (node.kind) {
    case "root":
      return (
        <>
          {node.children.map((child) => (
            <DSLRenderer key={child.id} node={child} registry={registry} />
          ))}
        </>
      );

    case "block": {
      const def = registry.get(node.tag);
      if (def && def.isBlock) {
        const Comp = def.renderer as BlockRenderer;
        return (
          <Comp node={node}>
            {node.children.map((child) => (
              <DSLRenderer key={child.id} node={child} registry={registry} />
            ))}
          </Comp>
        );
      }
      // Fallback: render as div
      return (
        <div data-pdsl-tag={node.tag}>
          {node.children.map((child) => (
            <DSLRenderer key={child.id} node={child} registry={registry} />
          ))}
        </div>
      );
    }

    case "slot":
      return (
        <>
          {node.children.map((child) => (
            <DSLRenderer key={child.id} node={child} registry={registry} />
          ))}
        </>
      );

    case "leaf": {
      const def = registry.get(node.tag);
      if (def && !def.isBlock) {
        const Comp = def.renderer as LeafRenderer;
        return <Comp node={node} />;
      }
      return <span data-pdsl-tag={node.tag}>{node.content}</span>;
    }

    case "heading": {
      const cls = node.classes?.length > 0 ? node.classes.join(" ") : undefined;
      switch (node.level) {
        case 1:
          return <SectionPageHeading>{node.content}</SectionPageHeading>;
        case 2:
          return <SubSectionTitle size="xl" className={cls}>{node.content}</SubSectionTitle>;
        case 3:
          return <SubSectionTitle size="lg" className={cls}>{node.content}</SubSectionTitle>;
        case 4:
          return <SubSectionTitle size="md" className={cls}>{node.content}</SubSectionTitle>;
        case 5:
          return <h5 className={cn("text-2xl font-bold text-foreground tracking-snug", cls)}>{node.content}</h5>;
        case 6:
          return <h6 className={cn("text-base font-semibold text-foreground", cls)}>{node.content}</h6>;
      }
    }

    case "paragraph": {
      const classes =
        node.classes.length > 0
          ? node.classes.join(" ")
          : "text-sm-md font-normal text-muted-foreground leading-loose";
      return (
        <p className={classes}>
          {node.children.map((child) => (
            <DSLRenderer key={child.id} node={child} registry={registry} />
          ))}
        </p>
      );
    }

    case "divider":
      return <Divider />;

    case "text":
      return <>{node.content}</>;

    case "bold":
      return (
        <strong className="font-semibold">
          {node.children.map((c) => (
            <DSLRenderer key={c.id} node={c} registry={registry} />
          ))}
        </strong>
      );

    case "inlineCode":
      return (
        <code className="px-1.5 py-0.5 rounded bg-muted text-sm-md font-medium">
          {node.content}
        </code>
      );

    default:
      return null;
  }
}

/* ─── DSLPage Wrapper ─── */

/**
 * Top-level component that creates the registry once
 * and passes it to the recursive DSLRenderer.
 */
export function DSLPage({ ast }: { ast: RootNode }) {
  const registry = useMemo(() => createDefaultRegistry(), []);
  return <DSLRenderer node={ast} registry={registry} />;
}
