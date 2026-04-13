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
import { createDefaultRegistry } from "@/dsl/registry";
import { SubSectionTitle } from "@/app/atoms/SubSectionTitle";
import { SectionPageHeading } from "@/app/templates/SectionPageHeading";
import { Divider } from "@/app/atoms/Divider";

/* ─── Core Recursive Renderer ─── */

interface DSLRendererProps {
  node: ASTNode;
  registry: ComponentRegistry;
}

export const DSLRenderer = React.memo(function DSLRenderer({ node, registry }: DSLRendererProps) {
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
      // Map heading levels to design system components
      // Level 1 → SectionPageHeading
      // Level 2 → SubSectionTitle size="xl"
      // Level 3 → SubSectionTitle size="lg"
      // Level 4+ → SubSectionTitle size="md"
      switch (node.level) {
        case 1:
          return <SectionPageHeading>{node.content}</SectionPageHeading>;
        case 2:
          return (
            <SubSectionTitle size="xl">{node.content}</SubSectionTitle>
          );
        case 3:
          return (
            <SubSectionTitle size="lg">{node.content}</SubSectionTitle>
          );
        default:
          return (
            <SubSectionTitle size="md">{node.content}</SubSectionTitle>
          );
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

    default:
      return null;
  }
});

/* ─── DSLPage Wrapper ─── */

/**
 * Top-level component that creates the registry once
 * and passes it to the recursive DSLRenderer.
 */
export function DSLPage({ ast }: { ast: RootNode }) {
  const registry = useMemo(() => createDefaultRegistry(), []);
  return <DSLRenderer node={ast} registry={registry} />;
}
