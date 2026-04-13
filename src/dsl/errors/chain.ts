/**
 * Error Handler Chain (Chain of Responsibility Pattern)
 *
 * 파서 에러를 단계적으로 처리.
 * 각 핸들러가 에러를 복구하거나 다음 핸들러로 전달.
 */

import type { DSLError } from "./types";

export interface ErrorHandler {
  handle(error: DSLError): DSLError | null;
  setNext(handler: ErrorHandler): ErrorHandler;
}

/** 알 수 없는 태그: 경고 후 generic으로 렌더링 */
export class UnknownTagHandler implements ErrorHandler {
  private next?: ErrorHandler;

  handle(error: DSLError): DSLError | null {
    if (
      error.phase === "parse" &&
      error.message.startsWith("Unknown tag")
    ) {
      console.warn(
        `[PDSL] ${error.message} at line ${error.line}, rendering as plain block`,
      );
      return null; // 복구됨
    }
    return this.next?.handle(error) ?? error;
  }

  setNext(handler: ErrorHandler): ErrorHandler {
    this.next = handler;
    return handler;
  }
}

/** 누락된 필수 prop: 기본값으로 복구 */
export class MissingPropHandler implements ErrorHandler {
  private next?: ErrorHandler;

  handle(error: DSLError): DSLError | null {
    if (
      error.phase === "parse" &&
      error.message.startsWith("Missing required prop")
    ) {
      console.warn(`[PDSL] ${error.message} at line ${error.line}`);
      return null; // 기본값으로 복구
    }
    return this.next?.handle(error) ?? error;
  }

  setNext(handler: ErrorHandler): ErrorHandler {
    this.next = handler;
    return handler;
  }
}

/** 태그 불일치: 경고 후 계속 파싱 */
export class MismatchedTagHandler implements ErrorHandler {
  private next?: ErrorHandler;

  handle(error: DSLError): DSLError | null {
    if (
      error.phase === "parse" &&
      error.message.startsWith("Mismatched tag")
    ) {
      console.warn(`[PDSL] ${error.message} at line ${error.line}`);
      return null; // 스킵하고 계속
    }
    return this.next?.handle(error) ?? error;
  }

  setNext(handler: ErrorHandler): ErrorHandler {
    this.next = handler;
    return handler;
  }
}

/** 폴백: 복구되지 않은 에러 수집 */
export class FallbackHandler implements ErrorHandler {
  readonly errors: DSLError[] = [];
  private next?: ErrorHandler;

  handle(error: DSLError): DSLError | null {
    this.errors.push(error);
    return error; // 복구 불가
  }

  setNext(handler: ErrorHandler): ErrorHandler {
    this.next = handler;
    return handler;
  }
}

/** 에러 체인 생성 */
export function createErrorChain(): {
  chain: ErrorHandler;
  fallback: FallbackHandler;
} {
  const unknownTag = new UnknownTagHandler();
  const missingProp = new MissingPropHandler();
  const mismatchedTag = new MismatchedTagHandler();
  const fallback = new FallbackHandler();

  unknownTag.setNext(missingProp).setNext(mismatchedTag).setNext(fallback);

  return { chain: unknownTag, fallback };
}
