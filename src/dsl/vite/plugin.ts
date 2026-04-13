/**
 * Vite Plugin for PDSL
 *
 * .pdsl 파일을 빌드 타임에 JSON(프론트매터+AST) 모듈로 변환.
 * HMR 지원으로 .pdsl 수정 시 브라우저 자동 갱신.
 */

import type { Plugin } from "vite";
import { parseFrontmatter } from "../frontmatter";
import { tokenize } from "../tokenizer";
import { Parser } from "../parser";

export default function pdslPlugin(): Plugin {
  return {
    name: "vite-plugin-pdsl",

    transform(code: string, id: string) {
      if (!id.endsWith(".pdsl")) return null;

      const { frontmatter, body } = parseFrontmatter(code);
      const tokens = tokenize(body);
      const parser = new Parser();
      const { ast, errors } = parser.parse(tokens);

      if (errors.length > 0) {
        for (const err of errors) {
          this.warn(`[PDSL] ${err.message} at line ${err.line} in ${id}`);
        }
      }

      const output = `
export const frontmatter = ${JSON.stringify(frontmatter)};
export const ast = ${JSON.stringify(ast)};
export const errors = ${JSON.stringify(errors)};
`;

      return {
        code: output,
        map: null,
      };
    },

    handleHotUpdate({ file, server }) {
      if (!file.endsWith(".pdsl")) return;

      // .pdsl 변경 시 관련 모듈 무효화
      const mod = server.moduleGraph.getModuleById(file);
      if (mod) {
        server.moduleGraph.invalidateModule(mod);
        return [mod];
      }
    },
  };
}
