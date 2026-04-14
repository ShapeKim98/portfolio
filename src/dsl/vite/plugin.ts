/**
 * Vite Plugin for PDSL
 *
 * .pdsl 파일을 빌드 타임에 JSON(프론트매터+AST) 모듈로 변환.
 * HMR 지원으로 .pdsl 수정 시 브라우저 자동 갱신.
 * @/image/ 경로를 실제 이미지 import로 변환.
 */

import type { Plugin } from "vite";
import { parseFrontmatter } from "../frontmatter";
import { tokenize } from "../tokenizer";
import { Parser } from "../parser";

/**
 * AST JSON에서 @/image/ 경로를 찾아 import 문으로 추출.
 * JSON 문자열에서 "@/image/xxx" 패턴을 모두 찾아서
 * import __img_0 from "@/image/xxx" 로 변환하고,
 * JSON 안의 값을 __img_0 변수 참조로 교체.
 */
function extractImageImports(jsonStr: string): { imports: string[]; patchedJson: string } {
  const imports: string[] = [];
  const seen = new Map<string, string>();

  const patched = jsonStr.replace(/"@\/image\/[^"]+"/g, (match) => {
    const path = match.slice(1, -1); // remove quotes
    if (!seen.has(path)) {
      const varName = `__pdsl_img_${seen.size}`;
      seen.set(path, varName);
      imports.push(`import ${varName} from "${path}";`);
    }
    const varName = seen.get(path)!;
    // Replace the JSON string value with a variable reference
    // We'll use a placeholder that we replace after JSON.stringify
    return `"__PDSL_IMG_REF:${varName}"`;
  });

  return { imports, patchedJson: patched };
}

/**
 * Convert patched JSON string to JS expression,
 * replacing "__PDSL_IMG_REF:varName" strings with actual variable references.
 */
function jsonToJsExpression(patchedJson: string): string {
  // Replace "__PDSL_IMG_REF:__pdsl_img_0" with actual variable reference
  return patchedJson.replace(/"__PDSL_IMG_REF:(__pdsl_img_\d+)"/g, (_, varName) => varName);
}

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

      // Shared map for deduplicating image imports across frontmatter + AST
      const seen = new Map<string, string>();
      const allImports: string[] = [];

      const fmJson = JSON.stringify(frontmatter);
      const patchedFm = fmJson.replace(/"@\/image\/[^"]+"/g, (match) => {
        const path = match.slice(1, -1);
        if (!seen.has(path)) {
          const varName = `__pdsl_img_${seen.size}`;
          seen.set(path, varName);
          allImports.push(`import ${varName} from "${path}";`);
        }
        return `"__PDSL_IMG_REF:${seen.get(path)!}"`;
      });

      const astJson = JSON.stringify(ast);
      const patchedAst = astJson.replace(/"@\/image\/[^"]+"/g, (match) => {
        const path = match.slice(1, -1);
        if (!seen.has(path)) {
          const varName = `__pdsl_img_${seen.size}`;
          seen.set(path, varName);
          allImports.push(`import ${varName} from "${path}";`);
        }
        return `"__PDSL_IMG_REF:${seen.get(path)!}"`;
      });

      const output = `
${allImports.join("\n")}
export const frontmatter = ${jsonToJsExpression(patchedFm)};
export const ast = ${jsonToJsExpression(patchedAst)};
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
