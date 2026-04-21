import { FadeInView } from "./ParallaxSection";
import {
  SectionInner,
  EditorialGrid,
  GridLabel,
  GridBody,
  Eyebrow,
  Figure,
} from "./design-system";
import profileImg from "@/image/증명사진.jpg";

const VALUES = [
  {
    tag: "겸손한 자세",
    title: "'내가 틀릴 수 있다'는 전제에서 출발합니다.",
    description:
      "가설이나 의견을 단정 짓기보다 다양한 가능성을 경청하고, 코드에서도 스스로의 선택을 다시 점검하며 개선점을 찾는 습관을 들여왔습니다. 협업에서는 상대방의 의견을 존중하며 더 나은 결론에 도달하기 위해 노력합니다.",
  },
  {
    tag: "의도 중심 사고",
    title: "업무의 '무엇'보다 '왜'를 먼저 파악합니다.",
    description:
      "의도를 이해해야만 방식의 적절성을 판단하고, 더 나은 대안을 찾을 수 있다고 생각합니다. 이 과정에서 겪은 시행착오는 방향을 조정하는 중요한 계기가 되었고, 사용자 경험을 개선해 나가며 큰 보람을 느꼈습니다.",
  },
  {
    tag: "도전하는 태도",
    title: "시간의 차이는 있어도, 불가능한 일은 없다고 생각합니다.",
    description:
      "낯선 기술이나 환경이 필요하면 주저하지 않고 도전하며, 스스로 해결 방법을 찾기 위해 다양한 시도를 합니다. 환경이나 상황을 이유로 한계를 짓기보다, 실제로 결과를 만들어내는 개발자가 되고자 합니다.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <SectionInner>
        <FadeInView>
          <EditorialGrid>
            <GridLabel>
              <div className="flex flex-col gap-4">
                <Eyebrow>01 — About</Eyebrow>
                <h2 className="text-2xl font-medium tracking-tight text-foreground">
                  iOS Developer
                </h2>
                <p className="text-sm font-normal text-muted-foreground leading-normal">
                  Kim Dohyeong
                </p>
              </div>
            </GridLabel>

            <GridBody>
              <div className="flex flex-col-reverse md:flex-row md:items-start gap-8 md:gap-10">
                <div className="flex-1 min-w-0 flex flex-col gap-6">
                  <p className="text-lg md:text-xl font-normal text-foreground leading-relaxed max-w-prose">
                    개발에 대한 꾸준한 고민과 되돌아보는 태도를 바탕으로, 더 나은
                    방향을 향해 한 걸음씩 나아가고 있습니다.
                  </p>
                </div>
                <Figure
                  src={profileImg}
                  alt="김도형 프로필 사진"
                  className="shrink-0 w-40 md:w-48"
                  imageClassName="object-cover aspect-[3/4]"
                />
              </div>
            </GridBody>
          </EditorialGrid>
        </FadeInView>

        {/* Values */}
        <div className="mt-20">
          <FadeInView>
            <EditorialGrid>
              <GridLabel>
                <Eyebrow>Values</Eyebrow>
              </GridLabel>
              <GridBody>
                <ol className="flex flex-col border-t border-border">
                  {VALUES.map((v, i) => (
                    <li
                      key={v.tag}
                      className="py-8 border-b border-border grid grid-cols-1 md:grid-cols-[80px_1fr] gap-x-6 gap-y-3"
                    >
                      <span className="text-sm font-medium tracking-widest text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col gap-3">
                        <Eyebrow>{v.tag}</Eyebrow>
                        <h3 className="text-lg font-medium text-foreground leading-snug">
                          {v.title}
                        </h3>
                        <p className="text-base font-normal text-muted-foreground leading-normal">
                          {v.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </GridBody>
            </EditorialGrid>
          </FadeInView>
        </div>
      </SectionInner>
    </section>
  );
}
