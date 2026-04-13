import { FadeInView } from "../animation";
import linkThumb1 from "../../../image/link-thumbnail-1.jpg";
import linkThumb2 from "../../../image/link-thumbnail-2.jpg";

export function OGTagParsingDiagram() {
  return (
    <FadeInView>
      <div className="flex flex-col items-center justify-center gap-4">
        {/* OG 태그 파싱 성공 */}
        <div className="w-full max-w-[335px]">
          <p className="text-xs font-semibold text-primary mb-1.5 tracking-snug">OG 태그 파싱 성공</p>
          <div className="rounded-xl border border-border bg-card shadow-[2px_2px_6px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="flex items-center gap-4 pr-5">
              <img src={linkThumb1} alt="" className="w-[124px] h-[108px] object-cover shrink-0" />
              <div className="flex flex-col gap-2 min-w-0 py-3">
                <p className="text-base font-semibold leading-[18px] tracking-[-0.15px] text-foreground line-clamp-2">
                  자연 친화적인 라이프스타일을 위한 환경 보호 방법
                </p>
                <p className="text-sm font-normal leading-[16px] tracking-[-0.13px] text-muted-foreground truncate">
                  https://www.youtube.com/watch?v=xSTwqKUyM8k
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* OG 태그 미지원 — 기본 썸네일 대체 */}
        <div className="w-full max-w-[335px]">
          <p className="text-xs font-semibold text-primary mb-1.5 tracking-snug">OG 태그 미지원 — 기본 썸네일 대체</p>
          <div className="rounded-xl border border-border bg-card shadow-[2px_2px_6px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="flex items-center gap-4 pr-5">
              <img src={linkThumb2} alt="" className="w-[124px] h-[94px] object-cover shrink-0" />
              <div className="flex flex-col gap-2 min-w-0 py-3">
                <p className="text-base font-semibold leading-[18px] tracking-[-0.15px] text-foreground line-clamp-2">
                  자연 친화적인 라이프스타일을 위한 환경 보호 방법
                </p>
                <p className="text-sm font-normal leading-[16px] tracking-[-0.13px] text-muted-foreground truncate">
                  https://www.youtube.com/watch?v=xSTwqKUyM8k
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInView>
  );
}
