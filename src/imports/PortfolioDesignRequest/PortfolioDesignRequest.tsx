import svgPaths from "./svg-x3ngsso8az";

function Introduction1() {
  return <div className="bg-[#155dfc] h-[4px] rounded-[16777200px] shrink-0 w-[32px]" data-name="Introduction" />;
}

function Introduction2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[101.508px]" data-name="Introduction">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.4px] whitespace-nowrap">iOS Developer</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-0 top-0 w-[1280px]" data-name="Container">
      <Introduction1 />
      <Introduction2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[90px] left-0 top-[44px] w-[1280px]" data-name="Heading 1">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#0f172b] text-[0px] top-0 tracking-[-1.8px] whitespace-nowrap">
        <span className="leading-[90px] text-[72px]">{`김도형 `}</span>
        <span className="font-['Pretendard:Regular',sans-serif] leading-[60px] text-[#90a1b9] text-[60px]">Kim Dohyeong</span>
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[65px] left-0 top-[154px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[32.5px] left-0 not-italic text-[#62748e] text-[20px] top-0 w-[671px]">개발에 대한 꾸준한 고민과 되돌아보는 태도를 바탕으로, 더 나은 방향을 향해 한 걸음씩 나아가고 있습니다.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[219px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Text() {
  return <div className="bg-[#2b7fff] rounded-[16777200px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63.727px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">겸손한 자세</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[22px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">{`'내가 틀릴 수 있다'는 전제에서 출발합니다.`}</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[91px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] w-[359px]">가설이나 의견을 단정 짓기보다 다양한 가능성을 경청하고, 코드에서도 스스로의 선택을 다시 점검하며 개선점을 찾는 습관을 들여왔습니다. 협업에서는 상대방의 의견을 존중하며 더 나은 결론에 도달하기 위해 노력합니다.</p>
    </div>
  );
}

function Introduction3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[207px] items-start left-0 pb-px pt-[25px] px-[25px] rounded-[16px] top-0 w-[413.328px]" data-name="Introduction">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container3 />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Text2() {
  return <div className="bg-[#2b7fff] rounded-[16777200px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[79.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">의도 중심 사고</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[22px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">{`업무의 '무엇'보다 '왜'를 먼저 파악합니다.`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[91px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] w-[359px]">의도를 이해해야만 방식의 적절성을 판단하고, 더 나은 대안을 찾을 수 있다고 생각합니다. 이 과정에서 겪은 시행착오는 방향을 조정하는 중요한 계기가 되었고, 사용자 경험을 개선해 나가며 큰 보람을 느꼈습니다.</p>
    </div>
  );
}

function Introduction4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[207px] items-start left-[433.33px] pb-px pt-[25px] px-[25px] rounded-[16px] top-0 w-[413.336px]" data-name="Introduction">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container4 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Text4() {
  return <div className="bg-[#2b7fff] rounded-[16777200px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">도전하는 태도</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[22px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">시간의 차이는 있어도, 불가능한 일은 없다고 생각합니다.</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[91px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] w-[362px]">낯선 기술이나 환경이 필요하면 주저하지 않고 도전하며, 스스로 해결 방법을 찾기 위해 다양한 시도를 합니다. 환경이나 상황을 이유로 한계를 짓기보다, 실제로 결과를 만들어내는 개발자가 되고자 합니다.</p>
    </div>
  );
}

function Introduction5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[207px] items-start left-[866.66px] pb-px pt-[25px] px-[25px] rounded-[16px] top-0 w-[413.336px]" data-name="Introduction">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container5 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[207px] relative shrink-0 w-full" data-name="Container">
      <Introduction3 />
      <Introduction4 />
      <Introduction5 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5647 0.6314 0.7255)", strokeOpacity: "1" }} />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5647 0.6314 0.7255)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[308px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[22px] not-italic text-[#90a1b9] text-[12px] top-[-0.5px] tracking-[0.6px] uppercase whitespace-nowrap">{` Birth`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[308px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-[-0.5px] whitespace-nowrap">1998.02.05</p>
      </div>
    </div>
  );
}

function ContactItem() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="ContactItem">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5647 0.6314 0.7255)", strokeOpacity: "1" }} />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5647 0.6314 0.7255)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[308px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[22px] not-italic text-[#90a1b9] text-[12px] top-[-0.5px] tracking-[0.6px] uppercase whitespace-nowrap">{` Email`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[308px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-[-0.5px] whitespace-nowrap">shapekim98@gmail.com</p>
      </div>
    </div>
  );
}

function ContactItem1() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="ContactItem">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe485a00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5647 0.6314 0.7255)", strokeOpacity: "1" }} />
          <path d={svgPaths.p28ae6680} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5647 0.6314 0.7255)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[308px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[22px] not-italic text-[#90a1b9] text-[12px] top-[-0.5px] tracking-[0.6px] uppercase whitespace-nowrap">{` GitHub`}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[308px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-[-0.5px] whitespace-nowrap">ShapeKim98</p>
      </div>
    </div>
  );
}

function ContactItem2() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="ContactItem">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p15efa800} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5647 0.6314 0.7255)", strokeOpacity: "1" }} />
          <path d="M8 12H8.00667" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5647 0.6314 0.7255)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[308px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-[22px] not-italic text-[#90a1b9] text-[12px] top-[-0.5px] tracking-[0.6px] uppercase whitespace-nowrap">{` Phone`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[308px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-[-0.5px] whitespace-nowrap">010-9027-8292</p>
      </div>
    </div>
  );
}

function ContactItem3() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="ContactItem">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[83px] pt-[41px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <ContactItem />
      <ContactItem1 />
      <ContactItem2 />
      <ContactItem3 />
    </div>
  );
}

function Introduction() {
  return (
    <div className="h-[637px] relative shrink-0 w-[1280px]" data-name="Introduction">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[64px] items-start relative size-full">
        <Container />
        <Container2 />
        <Container6 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[925px] items-center justify-center pt-[96px] relative shrink-0 w-full" data-name="Section">
      <Introduction />
    </div>
  );
}

function Text6() {
  return <div className="bg-[#0f172b] h-[4px] rounded-[16777200px] shrink-0 w-[32px]" data-name="Text" />;
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[199.43px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[30px] whitespace-nowrap">{`Profile & Skills`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Heading1 />
    </div>
  );
}

function Text7() {
  return <div className="absolute bg-[#155dfc] h-[20px] left-0 rounded-[16777200px] top-[4px] w-[6px]" data-name="Text" />;
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text7 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[14px] not-italic text-[#0f172b] text-[18px] top-0 whitespace-nowrap">Education</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-[16px] top-0 w-[711.797px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">세종대학교 컴퓨터공학과 졸업</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[24px] w-[711.797px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">2024.08</p>
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#cad5e2] border-2 border-solid border-white left-[-7.5px] rounded-[16777200px] size-[10px] top-[6px]" data-name="Container" />;
}

function Container20() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph7 />
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[21px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[92px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container19 />
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-[#155dfc] h-[20px] left-0 rounded-[16777200px] top-[4px] w-[6px]" data-name="Text" />;
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text8 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[14px] not-italic text-[#0f172b] text-[18px] top-0 whitespace-nowrap">Activity</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-[16px] top-0 w-[711.797px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">SeSAC iOS 앱 개발자 데뷔과정 PLUS 도봉 SW 2기</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[24px] w-[711.797px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">2024.12 ~ 2025.06</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[48px] w-[711.797px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">iOS 개발, CS, 시스템 학습을 통한 과제 및 서비스 레벨 프로젝트 수행</p>
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[#2b7fff] border-2 border-solid border-white left-[-7.5px] rounded-[16777200px] size-[10px] top-[6px]" data-name="Container" />;
}

function Container24() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph8 />
      <Paragraph9 />
      <Container25 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[24px] left-[16px] top-0 w-[711.797px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">YAPP(기업형 연합 IT동아리) 24기</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[24px] w-[711.797px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">2024.05 ~ 2024.09</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[48px] w-[711.797px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">{`간편 링크 아카이빙 앱 'Pokit' 개발 및 출시`}</p>
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-[#2b7fff] border-2 border-solid border-white left-[-7.5px] rounded-[16777200px] size-[10px] top-[6px]" data-name="Container" />;
}

function Container26() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph10 />
      <Paragraph11 />
      <Container27 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[24px] left-[16px] top-0 w-[711.797px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">YAPP(기업형 연합 IT동아리) 25기</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[24px] w-[711.797px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">2024.11 ~ 2025.03</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[48px] w-[711.797px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">iOS 및 CL(커뮤니케이션 리드) 운영진 활동</p>
    </div>
  );
}

function Container29() {
  return <div className="absolute bg-[#2b7fff] border-2 border-solid border-white left-[-7.5px] rounded-[16777200px] size-[10px] top-[6px]" data-name="Container" />;
}

function Container28() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph12 />
      <Paragraph13 />
      <Container29 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[252px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pl-[21px] relative size-full">
        <Container24 />
        <Container26 />
        <Container28 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[300px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container23 />
    </div>
  );
}

function Text9() {
  return <div className="absolute bg-[#f0b100] h-[20px] left-0 rounded-[16777200px] top-[4px] w-[6px]" data-name="Text" />;
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text9 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[14px] not-italic text-[#0f172b] text-[18px] top-0 whitespace-nowrap">Awards</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[327.992px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">2024학년도 세종대학교 소프트웨어융합대학 해커톤</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#fefce8] border border-[#fef9c2] border-solid h-[22px] left-[633.22px] rounded-[16777200px] top-0 w-[73.578px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-[10px] not-italic text-[#a65f00] text-[12px] top-[1.5px] whitespace-nowrap">2등 총장상</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[24px] left-[21px] top-[21px] w-[706.797px]" data-name="Container">
      <Heading9 />
      <Text10 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[20px] left-[21px] top-[53px] w-[706.797px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">2024.05</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute bg-[#f8fafc] h-[69.5px] left-[21px] rounded-[10px] top-[85px] w-[706.797px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-[12px] not-italic text-[#45556c] text-[14px] top-[11.5px] w-[668px]">당일 제시되는 3개의 키워드로 아이디어를 기획하고, MVP 개발하는 해커톤(무박 2일). 서핑 지역에 대한 정보와, 레슨 매칭, 조난 구조 요청을 보낼 수 있는 서비스로써, iOS , WatchOS 어플리케이션 개발을 담당했습니다.</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white h-[175.5px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container32 />
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[223.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container31 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[695.5px] items-start left-0 top-0 w-[748.797px]" data-name="Container">
      <Container18 />
      <Container22 />
      <Container30 />
    </div>
  );
}

function Text11() {
  return <div className="absolute bg-[#0f172b] h-[20px] left-0 rounded-[16777200px] top-[4px] w-[6px]" data-name="Text" />;
}

function Heading10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text11 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[14px] not-italic text-[#0f172b] text-[18px] top-0 whitespace-nowrap">Tech Stack</p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] tracking-[0.7px] uppercase whitespace-nowrap">Framework / Library</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">UI</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[20px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] whitespace-nowrap">SwiftUI, UIKit, SnapKit</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">Apple</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[40px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] w-[290px]">HealthKit, WatchConnectivity, WatchKit, Share Extension, AuthenticationServices</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">Network</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[20px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] whitespace-nowrap">Alamofire, Moya, Kingfisher</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">Programming</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[20px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] whitespace-nowrap">RxSwift, Swift Concurrency</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">Architecture</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[20px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] whitespace-nowrap">TCA, ReactorKit</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">DI</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[20px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] whitespace-nowrap">Swift Dependencies</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">Others</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute h-[20px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] whitespace-nowrap">Firebase, KakaoSDK, GoogleSignIn</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[208px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function SkillGroup() {
  return (
    <div className="h-[281px] relative shrink-0 w-full" data-name="SkillGroup">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[20px] px-[20px] relative size-full">
        <Heading11 />
        <Container35 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] tracking-[0.7px] uppercase whitespace-nowrap">Architecture</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#f1f5f9] border-solid h-[30px] left-0 rounded-[8px] top-0 w-[52.211px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[10px] not-italic text-[#45556c] text-[14px] top-[3.5px] whitespace-nowrap">MVC</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#f1f5f9] border-solid h-[30px] left-[58.21px] rounded-[8px] top-0 w-[63.945px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[10px] not-italic text-[#45556c] text-[14px] top-[3.5px] whitespace-nowrap">MVVM</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#f1f5f9] border-solid h-[30px] left-[128.16px] rounded-[8px] top-0 w-[46.391px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[10px] not-italic text-[#45556c] text-[14px] top-[3.5px] whitespace-nowrap">MVI</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#f1f5f9] border-solid h-[30px] left-[180.55px] rounded-[8px] top-0 w-[138.047px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[10px] not-italic text-[#45556c] text-[14px] top-[3.5px] whitespace-nowrap">Clean Architecture</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#f1f5f9] border-solid h-[30px] left-0 rounded-[8px] top-[36px] w-[153.586px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[10px] not-italic text-[#45556c] text-[14px] top-[3.5px] whitespace-nowrap">Modular Architecture</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[66px] relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Text27 />
      <Text28 />
      <Text29 />
      <Text30 />
    </div>
  );
}

function SkillGroup1() {
  return (
    <div className="h-[139px] relative shrink-0 w-full" data-name="SkillGroup">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[20px] px-[20px] relative size-full">
        <Heading12 />
        <Container43 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] tracking-[0.7px] uppercase whitespace-nowrap">Tool</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">IDE</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute h-[20px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] whitespace-nowrap">Xcode, VSCode</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Text31 />
      <Text32 />
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">CI/CD</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[20px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] whitespace-nowrap">Github Actions, Fastlane, Xcode Cloud</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Text33 />
      <Text34 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">Dep. Mgmt</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[20px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] whitespace-nowrap">Tuist, SPM</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Text35 />
      <Text36 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">Others</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute h-[20px] left-[88px] top-0 w-[353.203px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-[-0.5px] whitespace-nowrap">Github Desktop, Figma</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Text37 />
      <Text38 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function SkillGroup2() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="SkillGroup">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[20px] px-[20px] relative size-full">
        <Heading13 />
        <Container44 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[598px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <SkillGroup />
        <SkillGroup1 />
        <SkillGroup2 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[695.5px] items-start left-[796.8px] top-0 w-[483.203px]" data-name="Container">
      <Heading10 />
      <Container34 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[695.5px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container33 />
    </div>
  );
}

function ProfileAndSkills() {
  return (
    <div className="h-[795.5px] relative shrink-0 w-[1280px]" data-name="ProfileAndSkills">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[64px] items-start relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[987.5px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <ProfileAndSkills />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 4.66667V14" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0824 0.3647 0.9882)", strokeOpacity: "1" }} />
          <path d={svgPaths.p8c8fb00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0824 0.3647 0.9882)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[134.914px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">Open Source Library</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Text39 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#0f172b] text-[36px] top-[-0.5px] whitespace-nowrap">RxCompose</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#62748e] text-[16px] top-[-0.5px] whitespace-nowrap">RxSwift 기반 단방향 아키텍처 라이브러리 (iOS 13+, RxSwift 6.9+)</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[28px] left-0 rounded-[4px] top-0 w-[141.273px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[10px] not-italic text-[#45556c] text-[14px] top-[3.5px] whitespace-nowrap">2025.02 ~ 2025.03</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[28px] left-[153.27px] rounded-[4px] top-0 w-[132.656px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[10px] not-italic text-[#45556c] text-[14px] top-[3.5px] whitespace-nowrap">SPM / CocoaPods</p>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[28px] left-[297.93px] rounded-[4px] top-0 w-[63.477px]" data-name="Text">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[10px] not-italic text-[#45556c] text-[14px] top-[3.5px] whitespace-nowrap">iOS 1명</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Text40 />
      <Text41 />
      <Text42 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[148px] relative shrink-0 w-[434.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container51 />
        <Heading14 />
        <Paragraph16 />
        <Container52 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pbf3e180} id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" style={{ stroke: "color(display-p3 0.0588 0.0902 0.1686)", strokeOpacity: "1" }} />
          <path d={svgPaths.p5272800} id="Vector_2" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" style={{ stroke: "color(display-p3 0.0588 0.0902 0.1686)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[24px] relative shrink-0 w-[109.836px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-[28px] not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">{` Repository`}</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[181px] items-end justify-between pb-[33px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container50 />
      <Link />
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[131.828px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">라이브러리 개발 동기</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[139.83px] rounded-[16777200px] top-[0.75px] w-[91.031px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Motivation</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading15 />
      <Text43 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[838px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container56 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container61() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container59() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[746px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[739px]">ReactorKit은 Effect 개념이 포함되어 있지 않아 상태 변화에 따른 후속 작업(Side Effect)을 체계적으로 정의하기 어려운 점이 있었습니다. RxSwift 환경에서 단방향 아키텍처를 적용하려 할 때, 이 부분이 반복적으로 과제가 되었습니다.</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container62 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container66() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container64() {
  return (
    <div className="h-[326.625px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container72() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container70() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[712px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[706px]">ReactorKit은 RxSwift 생태계에서 널리 사용되는 단방향 아키텍처이지만, Action → Mutation → State 흐름에서 Side Effect를 체계적으로 다루는 구조가 포함되어 있지 않아 복잡한 비동기 흐름에서 코드가 분산되는 경향이 반복되었습니다.</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Container73 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pdc43e70} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.pab3a610} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M3.5 10.5H8.5" id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M6 1.5V10.5" id="Vector_4" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2de32600} id="Vector_5" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container77() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container75() {
  return (
    <div className="h-[111.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container76 />
        <Container77 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[712px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[701px]">TCA(The Composable Architecture)는 Effect를 일급 객체로 다루며 상태 관리와 Side Effect 처리를 체계적으로 분리합니다. 이 구조적 이점을 RxSwift 생태계에 맞춰 재구현하면, ReactorKit의 아쉬운 점을 보완하면서도 기존 RxSwift 프로젝트에 자연스럽게 도입할 수 있겠다고 판단했습니다.</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="flex-[1_0_0] h-[111.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#2b7fff] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">대안 비교</p>
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[10px] h-[111.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container78 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container81 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[712px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[710px]">TCA의 Action → Reducer → Effect → State 매커니즘을 RxSwift의 Observable 체인으로 번역하면 구조적 일관성과 생태계 호환성을 동시에 확보할 수 있다고 결론 내리고, 오픈소스 라이브러리로 설계·배포하기로 결정했습니다.</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container80 />
      <Container82 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col h-[272.625px] items-start left-0 top-[34px] w-[746px]" data-name="Container">
      <Container69 />
      <Container74 />
      <Container79 />
    </div>
  );
}

function Container67() {
  return (
    <div className="flex-[1_0_0] h-[326.625px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container68 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[12px] h-[326.625px] items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container67 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container86() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container84() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container85 />
        <Container86 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[746px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[657px]">TCA의 단방향 아키텍처 매커니즘을 RxSwift 환경에 맞춰 구현한 오픈소스 라이브러리 RxCompose를 설계하고 SPM/CocoaPods으로 배포했습니다.</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container84 />
      <Container87 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container90 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[696.258px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">실제 ShowPot 프로젝트에 적용하여 적용 가능성을 검증하고, 발견한 개선사항을 반영하는 선순환 구조를 구축했습니다.</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[696.258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container91 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col h-[572.5px] items-start left-[25px] top-[82px] w-[790px]" data-name="Container">
      <Container58 />
      <Container63 />
      <Container83 />
      <Container88 />
    </div>
  );
}

function ProblemSolvingBlock() {
  return (
    <div className="bg-white h-[679.5px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container55 />
        <Container57 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] top-0 whitespace-nowrap">기능 및 기술 설명</p>
    </div>
  );
}

function Code() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.336px]" data-name="Code">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">Composer 프로토콜</p>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[251.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">— Action · State 정의 및 reducer 재귀 호출</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Code />
      <Text44 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">Action을 PublishRelay로 정의하고 Effect 발생 시 내부 map 연산으로 새 State를 생성, reducer로 재가공하여 바인딩하는 구조</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">Protocol 기반 제약으로 설계 의도에 부합하는 구조를 자연스럽게 유도</p>
    </div>
  );
}

function List() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[12px] relative size-full">
        <ListItem />
        <ListItem1 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] h-[111.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container95 />
        <List />
      </div>
    </div>
  );
}

function Code1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96.914px]" data-name="Code">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">Effect 추상화</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[20px] relative shrink-0 w-[215.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">— 새 Action 반환 및 Side Effect 정의</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-start left-[17px] top-[17px] w-[806px]" data-name="Container">
      <Code1 />
      <Text45 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[22.75px] left-[29px] top-[45px] w-[794px]" data-name="List Item">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">associatedtype Action을 갖는 Protocol로 추상화하여 다양한 Action 유형에 유연하게 대응</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] h-[84.75px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container97 />
      <ListItem2 />
    </div>
  );
}

function Code2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.508px]" data-name="Code">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">@PresentState</p>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[124.258px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">— 상태 기반 화면 전환</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Code2 />
      <Text46 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">단일 State 통합 구조에서 특정 프로퍼티 변경이 다른 프로퍼티에 영향을 미치는 상황에 대응</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">ReactorKit의 Pulse 개념을 참고해 프로퍼티 래퍼 내부에 변경 카운터를 도입하여 해결</p>
    </div>
  );
}

function List1() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[12px] relative size-full">
        <ListItem3 />
        <ListItem4 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] h-[111.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container99 />
        <List1 />
      </div>
    </div>
  );
}

function Code3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.234px]" data-name="Code">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">@Compose</p>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[20px] relative shrink-0 w-[152.133px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">— Action 흐름 자동 바인딩</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Code3 />
      <Text47 />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">Composer 객체 생성 시마다 수동으로 바인딩해야 하는 번거로움을 해소</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">init(wrappedValue:) 및 set 시점에 자동 바인딩 수행</p>
    </div>
  );
}

function List2() {
  return (
    <div className="h-[49.5px] relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[12px] relative size-full">
        <ListItem5 />
        <ListItem6 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] h-[111.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container101 />
        <List2 />
      </div>
    </div>
  );
}

function Code4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[138.469px]" data-name="Code">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">@ComposableState</p>
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[177.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">— State를 Observable로 활용</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-start left-[17px] top-[17px] w-[806px]" data-name="Container">
      <Code4 />
      <Text48 />
    </div>
  );
}

function ListItem7() {
  return (
    <div className="absolute h-[22.75px] left-[29px] top-[45px] w-[794px]" data-name="List Item">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">wrappedValue와 projectedValue로 BehaviorRelay를 값·Observable 형태 모두 제공</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] h-[84.75px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container103 />
      <ListItem7 />
    </div>
  );
}

function Code5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[86.547px]" data-name="Code">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">run Effect</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[20px] relative shrink-0 w-[251.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">— Observable 및 Swift Concurrency 대응</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-start left-[17px] top-[17px] w-[806px]" data-name="Container">
      <Code5 />
      <Text49 />
    </div>
  );
}

function ListItem8() {
  return (
    <div className="absolute h-[22.75px] left-[29px] top-[45px] w-[794px]" data-name="List Item">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">커스텀 Observable 내부에 Task를 구성하고, Observer 파라미터 기반 비동기 클로저를 실행하여 Observable 기반 Effect에 대응</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] h-[84.75px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container105 />
      <ListItem8 />
    </div>
  );
}

function Code6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199.055px]" data-name="Code">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[-0.5px] whitespace-nowrap">timer / interval Effect</p>
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[20px] relative shrink-0 w-[108.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-[-0.5px] whitespace-nowrap">— 주기적 액션 실행</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-start left-[17px] top-[17px] w-[806px]" data-name="Container">
      <Code6 />
      <Text50 />
    </div>
  );
}

function ListItem9() {
  return (
    <div className="absolute h-[22.75px] left-[29px] top-[45px] w-[794px]" data-name="List Item">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap">별도 Disposable을 받아 원하는 시점에 액션 실행을 종료 가능</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] h-[84.75px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container107 />
      <ListItem9 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[745.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container94 />
      <Container96 />
      <Container98 />
      <Container100 />
      <Container102 />
      <Container104 />
      <Container106 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[785.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading16 />
      <Container93 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[1497px] items-start left-0 top-0 w-[840px]" data-name="Container">
      <ProblemSolvingBlock />
      <Container92 />
    </div>
  );
}

function Container108() {
  return <div className="absolute h-[1497px] left-[880px] top-0 w-[400px]" data-name="Container" />;
}

function Container53() {
  return (
    <div className="h-[1497px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container108 />
    </div>
  );
}

function RxComposeSection() {
  return (
    <div className="h-[1726px] relative shrink-0 w-[1280px]" data-name="RxComposeSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start relative size-full">
        <Container49 />
        <Container53 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1918px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <RxComposeSection />
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute bg-[#0f172b] h-[24px] left-0 rounded-[16777200px] top-[1.5px] w-[82.32px]" data-name="Container">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-[12px] not-italic text-[12px] text-white top-[3.5px] tracking-[0.6px] uppercase whitespace-nowrap">Project</p>
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute h-[60px] left-0 top-[41.5px] w-[505.328px]" data-name="Heading 2">
      <p className="absolute font-['Pretendard:ExtraBold',sans-serif] leading-[60px] left-0 not-italic text-[#0f172b] text-[48px] top-[0.5px] whitespace-nowrap">Filtee</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[65px] left-0 top-[117.5px] w-[505.328px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[32.5px] left-0 not-italic text-[#45556c] text-[20px] top-0 w-[499px]">나만의 필터를 만들고, 공유하고, 필터 작가와 소통하는 감성 필터 플랫폼 (iOS 16+)</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[182.5px] relative shrink-0 w-full" data-name="Container">
      <Container111 />
      <Heading17 />
      <Paragraph23 />
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[28px] left-0 rounded-[4px] top-0 w-[179.094px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[12px] not-italic text-[#62748e] text-[14px] top-[3.5px] whitespace-nowrap">2025.05.11 ~ 2025.06.12</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[16px] top-[6px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe485a00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p28ae6680} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[28px] left-[195.09px] top-0 w-[65.063px]" data-name="Link">
      <Icon13 />
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[20px] not-italic text-[#62748e] text-[14px] top-[3.5px] whitespace-nowrap">{` GitHub`}</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Text51 />
      <Link1 />
    </div>
  );
}

function FilteeSection() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="FilteeSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[0] left-0 not-italic text-[#45556c] text-[0px] top-[-0.5px] w-[504px]">
        <span className="leading-[24px] text-[16px]">{`사용자가 직접 필터를 제작하고 공유하며, 필터 작가와 소통할 수 있는 플랫폼입니다. 기획부터 배포까지 전 과정에 참여했으며, `}</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[24px] text-[16px]">고성능 이미지 처리</span>
        <span className="leading-[24px] text-[16px]">{`와 `}</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[24px] text-[16px]">실시간 데이터 동기화</span>
        <span className="leading-[24px] text-[16px]">에 집중했습니다.</span>
      </p>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[116.82px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#62748e] text-[0px] top-[-0.5px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">Role:</span>
          <span className="font-['Pretendard:Regular',sans-serif] leading-[20px] text-[14px]">{` iOS 개발 (1인)`}</span>
        </p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[20px] relative shrink-0 w-[191.633px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#62748e] text-[0px] top-[-0.5px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">Team:</span>
          <span className="font-['Pretendard:Regular',sans-serif] leading-[20px] text-[14px]">{` Server 1, Design 1, iOS 1`}</span>
        </p>
      </div>
    </div>
  );
}

function FilteeSection1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="FilteeSection">
      <Text52 />
      <Text53 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
      <FilteeSection />
      <FilteeSection1 />
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-0 rounded-[4px] top-[17px] w-[73.93px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">SwiftUI</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[81.93px] rounded-[4px] top-[17px] w-[88.766px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Alamofire</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[178.7px] rounded-[4px] top-[17px] w-[148.109px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Swift Concurrency</p>
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[334.8px] rounded-[4px] top-[17px] w-[51.672px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Nuke</p>
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[394.48px] rounded-[4px] top-[17px] w-[81.344px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">SocketIO</p>
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-0 rounded-[4px] top-[51px] w-[81.344px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">KakaoSDK</p>
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[89.34px] rounded-[4px] top-[51px] w-[81.344px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Firebase</p>
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[178.69px] rounded-[4px] top-[51px] w-[59.094px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Metal</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Text54 />
      <Text55 />
      <Text56 />
      <Text57 />
      <Text58 />
      <Text59 />
      <Text60 />
      <Text61 />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[487.5px] items-start left-0 top-0 w-[505.328px]" data-name="Container">
      <Container110 />
      <Container112 />
      <Container113 />
      <Container114 />
    </div>
  );
}

function ImageErrorLoadingImage() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Image (Error loading image)">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="bg-[#f3f4f6] h-[406.75px] relative shrink-0 w-[724.672px]" data-name="ImageWithFallback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ImageErrorLoadingImage />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute bg-[#f8fafc] h-[408.75px] left-[553.33px] rounded-[16px] top-[39.38px] w-[726.672px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ProjectOverview() {
  return (
    <div className="h-[487.5px] relative shrink-0 w-[1280px]" data-name="ProjectOverview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container109 />
        <Container115 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[743.5px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <ProjectOverview />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">핵심 기능</p>
    </div>
  );
}

function Text62() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">소셜로그인</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">카카오·애플 계정 간편 로그인, JWT 기반 인증 및 자동 로그인 지원</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[361.266px]" data-name="Container">
      <Heading19 />
      <Paragraph24 />
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text62 />
      <Container118 />
    </div>
  );
}

function Text63() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">필터 조회</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">{`'오늘의 필터 소개'와 조회순 '트렌드' 목록 제공, 커서 기반 무한 스크롤`}</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[376.688px]" data-name="Container">
      <Heading20 />
      <Paragraph25 />
    </div>
  );
}

function Container119() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text63 />
      <Container120 />
    </div>
  );
}

function Text64() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">세부 정보 조회</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">필터 적용 전후 비교, 메타데이터·작가 프로필·보유 필터 목록 조회</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[353.398px]" data-name="Container">
      <Heading21 />
      <Paragraph26 />
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text64 />
      <Container122 />
    </div>
  );
}

function Text65() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">필터 제작·미리보기</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">12가지 조절 항목, 실시간 프리뷰, 실행 취소·재실행 지원</p>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[303.781px]" data-name="Container">
      <Heading22 />
      <Paragraph27 />
    </div>
  );
}

function Container123() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text65 />
      <Container124 />
    </div>
  );
}

function Text66() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">필터 구매</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">외부 PG 연동 결제, 구매 후 필터값 접근 권한 획득</p>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[271.398px]" data-name="Container">
      <Heading23 />
      <Paragraph28 />
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text66 />
      <Container126 />
    </div>
  );
}

function Text67() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">채팅·메시지 검색</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">실시간 채팅, 이전 메시지 검색 및 해당 위치로 즉시 이동</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[301.406px]" data-name="Container">
      <Heading24 />
      <Paragraph29 />
    </div>
  );
}

function Container127() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text67 />
      <Container128 />
    </div>
  );
}

function Text68() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">검색</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">작가 이름 기준 실시간 검색 결과 반영</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[202.578px]" data-name="Container">
      <Heading25 />
      <Paragraph30 />
    </div>
  );
}

function Container129() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text68 />
      <Container130 />
    </div>
  );
}

function Text69() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">이벤트 배너</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">앱 내 이벤트 노출, 웹브릿지 통한 외부 웹페이지 상호작용</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[309.992px]" data-name="Container">
      <Heading26 />
      <Paragraph31 />
    </div>
  );
}

function Container131() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text69 />
      <Container132 />
    </div>
  );
}

function FeatureGrid() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] h-[375px] relative shrink-0 w-full" data-name="FeatureGrid">
      <Container117 />
      <Container119 />
      <Container121 />
      <Container123 />
      <Container125 />
      <Container127 />
      <Container129 />
      <Container131 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[423px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading18 />
      <FeatureGrid />
    </div>
  );
}

function Heading27() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#0f172b] text-[24px] top-[-0.5px] whitespace-nowrap">Technical Decisions</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">프로젝트 진행 중 마주한 기술적 난관과 의사결정 과정</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[41px] top-[41px] w-[1198px]" data-name="Container">
      <Heading27 />
      <Paragraph32 />
    </div>
  );
}

function Text70() {
  return <div className="absolute bg-[#155dfc] h-[24px] left-0 rounded-[16777200px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading28() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text70 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[16px] not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">프로젝트 설계 및 아키텍처</p>
    </div>
  );
}

function Heading29() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[131.125px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">바닐라 SwiftUI 선택</p>
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[139.13px] rounded-[16777200px] top-[0.75px] w-[107.992px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Architecture</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading29 />
      <Text71 />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container137 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container141() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container142() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container140() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container141 />
        <Container142 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[1104px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[1094px]">SwiftUI에서 MVVM을 적용하던 중, @Query 매크로 등 SwiftData API를 더 잘 활용할 수 있는 여지가 있다고 느꼈습니다. 디자인 패턴이 프레임워크의 활용 방식과 맞지 않을 수 있다는 의문이 들었습니다.</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container140 />
      <Container143 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container146() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container147() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container145() {
  return (
    <div className="h-[277.875px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container146 />
        <Container147 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container152() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container153() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container151() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container152 />
        <Container153 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1061px]">MVVM 패턴을 적용하면 View와 로직이 분리되어 구조적으로 깔끔해지지만, SwiftData의 @Query 매크로처럼 View에서 직접 사용하도록 설계된 API를 ViewModel로 우회하면 코드의 복잡도가 높아지는 현상을 체감했습니다.</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container151 />
      <Container154 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container157() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Container158() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container156() {
  return (
    <div className="h-[62.375px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container157 />
        <Container158 />
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">애플이 의도한 설계 방향은 프레임워크 API와 UI의 긴밀한 연동에 있는데, 외부 디자인 패턴을 적용하면 이 연동 흐름이 우회되면서 추가적인 보일러플레이트가 생기는 상황이었습니다.</p>
    </div>
  );
}

function Container159() {
  return (
    <div className="flex-[1_0_0] h-[62.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#e17100] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">한계 발견</p>
        <Paragraph35 />
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex gap-[10px] h-[62.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container156 />
      <Container159 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container162() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container162 />
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1066px]">디자인 패턴은 협업 시 컨벤션 유지에 유효하지만, 1인 프로젝트에서는 일관된 구조만 갖추면 충분합니다. 프레임워크가 의도한 방식에 충실하면서 추상화를 최소화하는 유연한 구조가 더 적합하다고 결론 내렸습니다.</p>
    </div>
  );
}

function Container163() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph36 />
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container161 />
      <Container163 />
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute content-stretch flex flex-col h-[223.875px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container150 />
      <Container155 />
      <Container160 />
    </div>
  );
}

function Container148() {
  return (
    <div className="flex-[1_0_0] h-[277.875px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container149 />
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex gap-[12px] h-[277.875px] items-start relative shrink-0 w-full" data-name="Container">
      <Container145 />
      <Container148 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container166() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container167() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container165() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container166 />
        <Container167 />
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[639.969px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">설계 복잡도를 높이지 않는 선에서, 애플이 의도한 프레임워크 활용 방식에 충실한 유연한 구조를 선택했습니다.</p>
    </div>
  );
}

function Container168() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[639.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph37 />
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container165 />
      <Container168 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container171() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container171 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[722.742px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">SwiftData 등 네이티브 API를 제약 없이 활용할 수 있었고, 불필요한 보일러플레이트 없이 기능 개발 속도가 향상되었습니다.</p>
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[722.742px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph38 />
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container170 />
      <Container172 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute content-stretch flex flex-col h-[499.375px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container139 />
      <Container144 />
      <Container164 />
      <Container169 />
    </div>
  );
}

function ProblemSolvingBlock1() {
  return (
    <div className="bg-white h-[606.375px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container136 />
        <Container138 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading30() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">App - Feature - Model - Core 4계층 구조</p>
    </div>
  );
}

function Container173() {
  return (
    <div className="bg-[rgba(248,250,252,0.8)] h-[57px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Heading30 />
      </div>
    </div>
  );
}

function Heading31() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[59px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">설계 의도</p>
    </div>
  );
}

function Container176() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading31 />
    </div>
  );
}

function FilteeSection3() {
  return (
    <div className="h-[48.75px] relative shrink-0 w-full" data-name="FilteeSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[638px]">기능 복잡도와 개발 효율성을 고려해 계층 구조는 단순하게 유지하되, 각 계층의 책임과 역할은 명확히 나누어 1인 개발 환경에서도 확장성과 유지보수 편의성을 확보하는 것을 목표로 했습니다.</p>
    </div>
  );
}

function TechItem() {
  return (
    <div className="h-[78.75px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container176 />
        <FilteeSection3 />
      </div>
    </div>
  );
}

function Heading32() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[62.297px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">App 계층</p>
    </div>
  );
}

function Container177() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading32 />
    </div>
  );
}

function FilteeSection4() {
  return (
    <div className="h-[48.75px] relative shrink-0 w-full" data-name="FilteeSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[627px]">앱 생명주기와 주요 화면 흐름 전환을 관리합니다. 진입 경로가 명확하게 드러나도록 구성해 구조 파악과 초기화 흐름을 단순하게 유지했습니다.</p>
    </div>
  );
}

function TechItem1() {
  return (
    <div className="h-[78.75px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container177 />
        <FilteeSection4 />
      </div>
    </div>
  );
}

function Heading33() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[88.461px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Feature 계층</p>
    </div>
  );
}

function Container178() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading33 />
    </div>
  );
}

function FilteeSection5() {
  return (
    <div className="h-[48.75px] relative shrink-0 w-full" data-name="FilteeSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[633px]">각 기능을 독립된 단위로 구성하여 UI와 상태, 동작을 함께 정의하고 화면 중심으로 구조화했습니다. 기능별 디렉토리 분리로 수정·확장에 유리하도록 구성했습니다.</p>
    </div>
  );
}

function TechItem2() {
  return (
    <div className="h-[78.75px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container178 />
        <FilteeSection5 />
      </div>
    </div>
  );
}

function Heading34() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[77.984px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Model 계층</p>
    </div>
  );
}

function Container179() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading34 />
    </div>
  );
}

function FilteeSection6() {
  return (
    <div className="h-[48.75px] relative shrink-0 w-full" data-name="FilteeSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[635px]">서버 데이터를 직접 사용하지 않고, DTO를 거쳐 클라이언트 전용 모델을 정의합니다. 서버 변경이 기능 로직에 미치는 영향을 최소화했습니다.</p>
    </div>
  );
}

function TechItem3() {
  return (
    <div className="h-[78.75px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container179 />
        <FilteeSection6 />
      </div>
    </div>
  );
}

function Heading35() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[67.516px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Core 계층</p>
    </div>
  );
}

function Container180() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading35 />
    </div>
  );
}

function FilteeSection7() {
  return (
    <div className="h-[48.75px] relative shrink-0 w-full" data-name="FilteeSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[636px]">네트워크, CoreData, Metal, DTO 정의 등 외부 상호작용을 담당하는 기능을 별도로 분리하여, 독립적으로 교체·확장할 수 있도록 설계했습니다.</p>
    </div>
  );
}

function TechItem4() {
  return (
    <div className="h-[78.75px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container180 />
        <FilteeSection7 />
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[473.75px] items-start left-[24px] top-[24px] w-[656.328px]" data-name="Container">
      <TechItem />
      <TechItem1 />
      <TechItem2 />
      <TechItem3 />
      <TechItem4 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[16.5px] left-[21px] top-[21px] w-[417.672px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#90a1b9] text-[11px] top-[-0.5px] tracking-[0.55px] uppercase whitespace-nowrap">Architecture Layers</p>
    </div>
  );
}

function Container184() {
  return <div className="bg-[#2b7fff] h-[32px] rounded-[16777200px] shrink-0 w-[8px]" data-name="Container" />;
}

function Paragraph40() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[24px] w-[87.133px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[-0.5px] whitespace-nowrap">생명주기 · 화면 흐름</p>
    </div>
  );
}

function Container185() {
  return (
    <div className="h-[40.5px] relative shrink-0 w-[87.133px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-px whitespace-nowrap">App</p>
        <Paragraph40 />
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="bg-[#eff6ff] h-[66.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[13px] pr-px py-px relative size-full">
          <Container184 />
          <Container185 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon21 />
    </div>
  );
}

function Container182() {
  return (
    <div className="absolute content-stretch flex flex-col h-[86.5px] items-start left-[21px] top-[49.5px] w-[417.672px]" data-name="Container">
      <Container183 />
      <Container186 />
    </div>
  );
}

function Container189() {
  return <div className="bg-[#615fff] h-[32px] rounded-[16777200px] shrink-0 w-[8px]" data-name="Container" />;
}

function Paragraph41() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[24px] w-[95.008px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[-0.5px] whitespace-nowrap">기능 단위 View · 로직</p>
    </div>
  );
}

function Container190() {
  return (
    <div className="h-[40.5px] relative shrink-0 w-[95.008px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-px whitespace-nowrap">Feature</p>
        <Paragraph41 />
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="bg-[#eef2ff] h-[66.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c6d2ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[13px] pr-px py-px relative size-full">
          <Container189 />
          <Container190 />
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute content-stretch flex flex-col h-[86.5px] items-start left-[21px] top-[140px] w-[417.672px]" data-name="Container">
      <Container188 />
      <Container191 />
    </div>
  );
}

function Container194() {
  return <div className="bg-[#8e51ff] h-[32px] rounded-[16777200px] shrink-0 w-[8px]" data-name="Container" />;
}

function Paragraph42() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[24px] w-[91.086px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[-0.5px] whitespace-nowrap">클라이언트 전용 모델</p>
    </div>
  );
}

function Container195() {
  return (
    <div className="h-[40.5px] relative shrink-0 w-[91.086px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-px whitespace-nowrap">Model</p>
        <Paragraph42 />
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="bg-[#f5f3ff] h-[66.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ddd6ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[13px] pr-px py-px relative size-full">
          <Container194 />
          <Container195 />
        </div>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Container192() {
  return (
    <div className="absolute content-stretch flex flex-col h-[86.5px] items-start left-[21px] top-[230.5px] w-[417.672px]" data-name="Container">
      <Container193 />
      <Container196 />
    </div>
  );
}

function Container198() {
  return <div className="bg-[#62748e] h-[32px] rounded-[16777200px] shrink-0 w-[8px]" data-name="Container" />;
}

function Paragraph43() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[24px] w-[162.547px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[-0.5px] whitespace-nowrap">Network · CoreData · Metal · DTO</p>
    </div>
  );
}

function Container199() {
  return (
    <div className="h-[40.5px] relative shrink-0 w-[162.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-px whitespace-nowrap">Core</p>
        <Paragraph43 />
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex gap-[12px] h-[66.5px] items-center left-[21px] pl-[13px] pr-px py-px rounded-[10px] top-[321px] w-[417.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container198 />
      <Container199 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute h-[23px] left-[21px] top-[391.5px] w-[417.672px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[208.86px] not-italic text-[#90a1b9] text-[10px] text-center top-[8.5px] whitespace-nowrap">상위 → 하위 단방향 의존</p>
    </div>
  );
}

function FilteeLayerDiagram() {
  return (
    <div className="bg-white flex-[1_0_0] h-[435.5px] min-h-px min-w-px relative rounded-[14px]" data-name="FilteeLayerDiagram">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph39 />
        <Container182 />
        <Container187 />
        <Container192 />
        <Container197 />
        <Paragraph44 />
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute content-stretch flex h-[473.75px] items-start left-[712.33px] top-[24px] w-[459.672px]" data-name="Container">
      <FilteeLayerDiagram />
    </div>
  );
}

function Container174() {
  return (
    <div className="h-[521.75px] relative shrink-0 w-full" data-name="Container">
      <Container175 />
      <Container181 />
    </div>
  );
}

function TechBlock() {
  return (
    <div className="bg-white h-[580.75px] relative rounded-[14px] shrink-0 w-full" data-name="TechBlock">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container173 />
          <Container174 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading36() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">테스트 및 외부 변화 대응 전략</p>
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.8)] content-stretch flex flex-col h-[57px] items-start left-px pb-px pt-[16px] px-[24px] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Heading36 />
    </div>
  );
}

function Heading37() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[203.344px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Environment 기반 의존성 주입</p>
    </div>
  );
}

function Container202() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading37 />
    </div>
  );
}

function Code7() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[157.633px]" data-name="Code">
      <p className="font-['SFMono-Regular:Regular',sans-serif] leading-[24.375px] not-italic relative shrink-0 text-[#45556c] text-[15px] whitespace-nowrap">EnvironmentValues</p>
    </div>
  );
}

function Code8() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[174.37px] top-[3px] w-[102px]" data-name="Code">
      <p className="font-['SFMono-Regular:Regular',sans-serif] leading-[24.375px] not-italic relative shrink-0 text-[#45556c] text-[15px] whitespace-nowrap">environment</p>
    </div>
  );
}

function FilteeSection8() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="FilteeSection">
      <Code7 />
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-[157.63px] not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">{`와 `}</p>
      <Code8 />
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-[276.37px] not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">{` Modifier를 활용하여 실제 객체와 테스트 객체를 분기 주입했습니다.`}</p>
    </div>
  );
}

function TechItem5() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container202 />
        <FilteeSection8 />
      </div>
    </div>
  );
}

function Heading38() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[122.922px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Preview 환경 활용</p>
    </div>
  );
}

function Container203() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading38 />
    </div>
  );
}

function FilteeSection9() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="FilteeSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">Preview는 외부 통신과 단절된 환경에서 동작하므로 간이 테스트 수단으로 적합하다고 판단, 테스트용 객체를 별도 구성·주입할 수 있도록 설계했습니다.</p>
    </div>
  );
}

function TechItem6() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container203 />
        <FilteeSection9 />
      </div>
    </div>
  );
}

function Heading39() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[88.391px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">API 변경 대응</p>
    </div>
  );
}

function Container204() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading39 />
    </div>
  );
}

function FilteeSection10() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="FilteeSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">외부 API 응답 형식 변경에 유연하게 대응하기 위해 DTO를 도입하여 클라이언트 내부 모델과 분리된 구조로 설계했습니다.</p>
    </div>
  );
}

function TechItem7() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container204 />
        <FilteeSection10 />
      </div>
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[203.125px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <TechItem5 />
      <TechItem6 />
      <TechItem7 />
    </div>
  );
}

function TechBlock1() {
  return (
    <div className="bg-white h-[310.125px] relative rounded-[14px] shrink-0 w-full" data-name="TechBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container200 />
        <Container201 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[1537.25px] items-start relative shrink-0 w-full" data-name="Container">
      <ProblemSolvingBlock1 />
      <TechBlock />
      <TechBlock1 />
    </div>
  );
}

function TechSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1654.25px] items-start left-[41px] pt-[33px] top-[129px] w-[1198px]" data-name="TechSection">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Heading28 />
      <Container135 />
    </div>
  );
}

function Text72() {
  return <div className="absolute bg-[#155dfc] h-[24px] left-0 rounded-[16777200px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading40() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text72 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[16px] not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">사진 필터 제작 기능 설계</p>
    </div>
  );
}

function Heading41() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[301.094px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">고해상도 이미지의 실시간 렌더링 — Metal 선택</p>
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[309.09px] rounded-[16777200px] top-[0.75px] w-[105.602px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Performance</p>
    </div>
  );
}

function Container207() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading41 />
      <Text73 />
    </div>
  );
}

function Container206() {
  return (
    <div className="bg-gradient-to-r from-[#f8fafc] h-[57px] relative shrink-0 to-[rgba(239,246,255,0.3)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container207 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container212() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Container213() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container211() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container212 />
        <Container213 />
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[616px]">최근 카메라 기술의 발전으로 고해상도 이미지 사용이 보편화되었습니다. 슬라이더 조작처럼 실시간으로 고해상도 이미지를 반복 렌더링해야 하는 기능에서 렌더링 성능 확보가 핵심 과제가 되었습니다.</p>
    </div>
  );
}

function Container214() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph45 />
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container211 />
      <Container214 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container217() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Container218() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container216() {
  return (
    <div className="h-[351px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container217 />
        <Container218 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container223() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Container224() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container222() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container223 />
        <Container224 />
      </div>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[566px]">가장 먼저 iOS에서 이미지 필터링의 표준인 CIFilter를 검토했습니다. 파이프라인 구성이 간단하고 Apple이 내부적으로 GPU 최적화를 처리해 주기 때문입니다.</p>
    </div>
  );
}

function Container225() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph46 />
      </div>
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container222 />
      <Container225 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container228() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Container229() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container227() {
  return (
    <div className="h-[111.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container228 />
        <Container229 />
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[581px]">그런데 슬라이더를 빠르게 조작하며 테스트해 보니, CIFilter는 렌더링 타이밍과 텍스처 재사용을 개발자가 직접 제어할 수 없어 프레임이 간헐적으로 지연되는 현상이 나타났습니다. 자동 최적화 구조만으로는 기대만큼의 실시간 반응성을 확보하기 어려운 상황이었습니다.</p>
    </div>
  );
}

function Container230() {
  return (
    <div className="flex-[1_0_0] h-[111.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#e17100] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">한계 발견</p>
        <Paragraph47 />
      </div>
    </div>
  );
}

function Container226() {
  return (
    <div className="content-stretch flex gap-[10px] h-[111.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container227 />
      <Container230 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container233() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Container232() {
  return (
    <div className="h-[99.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[73.125px] pt-[2px] relative size-full">
        <Container233 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[576px]">이 병목을 해소하려면 GPU 파이프라인을 직접 구성할 수 있어야 했고, iOS에서 이를 가능하게 하는 선택지는 Metal이었습니다. 커맨드 버퍼 단위로 렌더링 시점을 제어하고, 텍스처를 재사용하여 불필요한 할당을 줄일 수 있다는 점이 결정적이었습니다.</p>
    </div>
  );
}

function Container234() {
  return (
    <div className="flex-[1_0_0] h-[99.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph48 />
      </div>
    </div>
  );
}

function Container231() {
  return (
    <div className="content-stretch flex gap-[10px] h-[99.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container232 />
      <Container234 />
    </div>
  );
}

function Container220() {
  return (
    <div className="absolute content-stretch flex flex-col h-[297px] items-start left-0 top-[34px] w-[615.664px]" data-name="Container">
      <Container221 />
      <Container226 />
      <Container231 />
    </div>
  );
}

function Container219() {
  return (
    <div className="flex-[1_0_0] h-[351px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container220 />
      </div>
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex gap-[12px] h-[351px] items-start relative shrink-0 w-full" data-name="Container">
      <Container216 />
      <Container219 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container237() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Container238() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container236() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container237 />
        <Container238 />
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[610px]">Metal을 통해 렌더링 파이프라인을 직접 구성하고, GPU 자원을 보다 직접적으로 활용함으로써 실시간 렌더링 성능을 확보했습니다.</p>
    </div>
  );
}

function Container239() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph49 />
      </div>
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container236 />
      <Container239 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container242() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Container241() {
  return (
    <div className="h-[76.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[44.75px] relative size-full">
        <Container242 />
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[616px]">슬라이더 조작 시에도 고해상도 이미지의 필터 변경이 즉각적으로 반영되는 매끄러운 사용자 경험을 구현할 수 있었습니다.</p>
    </div>
  );
}

function Container243() {
  return (
    <div className="flex-[1_0_0] h-[76.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph50 />
      </div>
    </div>
  );
}

function Container240() {
  return (
    <div className="content-stretch flex gap-[12px] h-[76.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container241 />
      <Container243 />
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute content-stretch flex flex-col h-[621.25px] items-start left-[24px] top-[24px] w-[659.664px]" data-name="Container">
      <Container210 />
      <Container215 />
      <Container235 />
      <Container240 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M4.66667 24.5V16.3333" id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3176 0.6353 1.0000)", strokeOpacity: "1" }} />
          <path d="M4.66667 11.6667V3.5" id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3176 0.6353 1.0000)", strokeOpacity: "1" }} />
          <path d="M14 24.5V14" id="Vector_3" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3176 0.6353 1.0000)", strokeOpacity: "1" }} />
          <path d="M14 9.33333V3.5" id="Vector_4" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3176 0.6353 1.0000)", strokeOpacity: "1" }} />
          <path d="M23.3333 24.5V18.6667" id="Vector_5" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3176 0.6353 1.0000)", strokeOpacity: "1" }} />
          <path d="M23.3333 14V3.5" id="Vector_6" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3176 0.6353 1.0000)", strokeOpacity: "1" }} />
          <path d="M2.33333 16.3333H7" id="Vector_7" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3176 0.6353 1.0000)", strokeOpacity: "1" }} />
          <path d="M11.6667 9.33333H16.3333" id="Vector_8" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3176 0.6353 1.0000)", strokeOpacity: "1" }} />
          <path d="M21 18.6667H25.6667" id="Vector_9" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3176 0.6353 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container245() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[204.16px] p-px rounded-[16px] size-[56px] top-[26px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon31 />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[151.469px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-[75.99px] not-italic text-[#45556c] text-[14px] text-center top-[-0.5px] whitespace-nowrap">필터 제작 도구 화면</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[24px] w-[151.469px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-[76px] not-italic text-[#90a1b9] text-[11px] text-center top-[-0.5px] whitespace-nowrap">12가지 조절 항목 · 실시간 미리보기</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[40.5px] w-[151.469px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-[75.97px] not-italic text-[#90a1b9] text-[11px] text-center top-[-0.5px] whitespace-nowrap">Metal 기반 GPU 렌더링</p>
    </div>
  );
}

function Container246() {
  return (
    <div className="absolute h-[57px] left-[156.43px] top-[94px] w-[151.469px]" data-name="Container">
      <Paragraph51 />
      <Paragraph52 />
      <Paragraph53 />
    </div>
  );
}

function Text74() {
  return (
    <div className="bg-white h-[21px] relative rounded-[4px] shrink-0 w-[35.289px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[9px] not-italic text-[#62748e] text-[10px] top-[3.5px] whitespace-nowrap">밝기</p>
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="bg-white h-[21px] relative rounded-[4px] shrink-0 w-[35.289px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[9px] not-italic text-[#62748e] text-[10px] top-[3.5px] whitespace-nowrap">대비</p>
      </div>
    </div>
  );
}

function Text76() {
  return (
    <div className="bg-white h-[21px] relative rounded-[4px] shrink-0 w-[35.289px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[9px] not-italic text-[#62748e] text-[10px] top-[3.5px] whitespace-nowrap">채도</p>
      </div>
    </div>
  );
}

function Text77() {
  return (
    <div className="bg-white flex-[1_0_0] h-[21px] min-h-px min-w-px relative rounded-[4px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[9px] not-italic text-[#62748e] text-[10px] top-[3.5px] whitespace-nowrap">온도</p>
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="bg-white h-[21px] relative rounded-[4px] shrink-0 w-[30.336px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[9px] not-italic text-[#90a1b9] text-[10px] top-[3.5px] whitespace-nowrap">+8</p>
      </div>
    </div>
  );
}

function Container247() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[21px] items-start left-[130.41px] top-[167px] w-[203.492px]" data-name="Container">
      <Text74 />
      <Text75 />
      <Text76 />
      <Text77 />
      <Text78 />
    </div>
  );
}

function FilterEditorPlaceholder() {
  return (
    <div className="flex-[1_0_0] h-[214px] min-h-px min-w-px relative rounded-[14px]" data-name="FilterEditorPlaceholder" style={{ backgroundImage: "linear-gradient(155.256deg, rgb(248, 250, 252) 0%, rgba(239, 246, 255, 0.3) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container245 />
        <Container246 />
        <Container247 />
      </div>
    </div>
  );
}

function Container244() {
  return (
    <div className="absolute content-stretch flex h-[621.25px] items-start left-[707.66px] pt-[8px] top-[24px] w-[464.328px]" data-name="Container">
      <FilterEditorPlaceholder />
    </div>
  );
}

function Container208() {
  return (
    <div className="h-[669.25px] relative shrink-0 w-full" data-name="Container">
      <Container209 />
      <Container244 />
    </div>
  );
}

function ProblemSolvingBlock2() {
  return (
    <div className="bg-white h-[728.25px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container206 />
          <Container208 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading42() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[312.75px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">필터값 실행 취소 및 다시 실행 — Stack 구조 설계</p>
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[320.75px] rounded-[16777200px] top-[0.75px] w-[121.359px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Data Structure</p>
    </div>
  );
}

function Container249() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading42 />
      <Text79 />
    </div>
  );
}

function Container248() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container249 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container253() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Container254() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container252() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container253 />
        <Container254 />
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[843.992px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">사용자가 필터를 조절하다가 이전 상태로 되돌리거나 다시 실행할 수 있어야 합니다. 이를 위한 이력 관리 구조와 스냅샷 시점 전략이 필요했습니다.</p>
    </div>
  );
}

function Container255() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[843.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph54 />
      </div>
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container252 />
      <Container255 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container258() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function Container259() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container257() {
  return (
    <div className="h-[302.25px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container258 />
        <Container259 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container264() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon34 />
      </div>
    </div>
  );
}

function Container265() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container263() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container264 />
        <Container265 />
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1055px]">작업을 최신순으로 쌓고 가장 최근 작업을 복원하는 흐름은 Stack의 LIFO 특성과 유사합니다. Undo용 Stack과 Redo용 Stack을 분리하면 두 동작을 독립적으로 관리할 수 있겠다고 착안했습니다.</p>
    </div>
  );
}

function Container266() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph55 />
      </div>
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container263 />
      <Container266 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container269() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Container270() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container268() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container269 />
        <Container270 />
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1067px]">그런데 슬라이더 값이 변할 때마다 스냅샷을 저장하면, 미세한 조작마다 이력이 쌓여 메모리 사용량이 늘어나고 원하는 시점으로 되돌리기까지 여러 번 Undo해야 하는 UX 측면의 개선이 필요해집니다.</p>
    </div>
  );
}

function Container271() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#e17100] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">한계 발견</p>
        <Paragraph56 />
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container268 />
      <Container271 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container274() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Container273() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container274 />
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1061px]">{`스냅샷 시점을 '사용자의 조작이 완료되는 순간'으로 한정하면 의미 있는 상태만 기록할 수 있습니다. SwiftUI의 DragGesture에서 onEnded 시점이 정확히 이 기준에 부합한다고 판단했습니다.`}</p>
    </div>
  );
}

function Container275() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph57 />
      </div>
    </div>
  );
}

function Container272() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container273 />
      <Container275 />
    </div>
  );
}

function Container261() {
  return (
    <div className="absolute content-stretch flex flex-col h-[248.25px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container262 />
      <Container267 />
      <Container272 />
    </div>
  );
}

function Container260() {
  return (
    <div className="flex-[1_0_0] h-[302.25px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container261 />
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="content-stretch flex gap-[12px] h-[302.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Container257 />
      <Container260 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container278() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Container279() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container277() {
  return (
    <div className="h-[100.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container278 />
        <Container279 />
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">실행 취소 Stack과 다시 실행 Stack을 분리하여, 사용자가 완료한 필터값 스냅샷과 실행 취소된 스냅샷을 각각 보존하도록 구성했습니다.</p>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">스냅샷 시점을 사용자의 조작이 완료되는 시점인 DragGesture의 onEnded에서만 수행하도록 최적화했습니다.</p>
    </div>
  );
}

function Container281() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[52.75px] items-start left-0 top-[28px] w-[791.938px]" data-name="Container">
      <Paragraph58 />
      <Paragraph59 />
    </div>
  );
}

function Container280() {
  return (
    <div className="h-[100.75px] relative shrink-0 w-[791.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Container281 />
      </div>
    </div>
  );
}

function Container276() {
  return (
    <div className="content-stretch flex gap-[12px] h-[100.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container277 />
      <Container280 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container284() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function Container283() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container284 />
      </div>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[772.953px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">불필요한 중간 상태 없이 의미 있는 시점의 스냅샷만 관리하여, 직관적인 실행 취소/재실행 경험과 메모리 효율을 동시에 확보했습니다.</p>
    </div>
  );
}

function Container285() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[772.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph60 />
      </div>
    </div>
  );
}

function Container282() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container283 />
      <Container285 />
    </div>
  );
}

function Container250() {
  return (
    <div className="absolute content-stretch flex flex-col h-[527.75px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container251 />
      <Container256 />
      <Container276 />
      <Container282 />
    </div>
  );
}

function ProblemSolvingBlock3() {
  return (
    <div className="bg-white h-[634.75px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container248 />
        <Container250 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container205() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[1383px] items-start relative shrink-0 w-full" data-name="Container">
      <ProblemSolvingBlock2 />
      <ProblemSolvingBlock3 />
    </div>
  );
}

function TechSection1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1500px] items-start left-[41px] pt-[33px] top-[1783.25px] w-[1198px]" data-name="TechSection">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Heading40 />
      <Container205 />
    </div>
  );
}

function Text80() {
  return <div className="absolute bg-[#155dfc] h-[24px] left-0 rounded-[16777200px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading43() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text80 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[16px] not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">채팅 기능 설계</p>
    </div>
  );
}

function Heading44() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[228.609px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">로컬 DB 도입 배경 — 반복 요청 개선</p>
    </div>
  );
}

function Text81() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[236.61px] rounded-[16777200px] top-[0.75px] w-[48.43px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Data</p>
    </div>
  );
}

function Container288() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading44 />
      <Text81 />
    </div>
  );
}

function Container287() {
  return (
    <div className="bg-gradient-to-r from-[#f8fafc] h-[57px] relative shrink-0 to-[rgba(239,246,255,0.3)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container288 />
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container293() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon39 />
      </div>
    </div>
  );
}

function Container294() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container292() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container293 />
        <Container294 />
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[614px]">채팅 내역은 한 번 저장되면 변경되지 않는 정적 데이터에 가깝습니다. 채팅방 진입 시마다 동일한 데이터를 서버로부터 반복 요청하는 방식을 더 효율적으로 개선할 수 있을 것이라 생각했습니다.</p>
    </div>
  );
}

function Container295() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph61 />
      </div>
    </div>
  );
}

function Container291() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container292 />
      <Container295 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container298() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon40 />
      </div>
    </div>
  );
}

function Container299() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container297() {
  return (
    <div className="h-[326.625px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container298 />
        <Container299 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container304() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon41 />
      </div>
    </div>
  );
}

function Container305() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container303() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container304 />
        <Container305 />
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[569px]">로컬 DB를 도입하면 서버 트래픽 개선뿐 아니라, 실시간 채팅 메시지 검색 시에도 서버를 거치지 않고 클라이언트에서 빠르게 조회할 수 있다는 가능성이 보였습니다.</p>
    </div>
  );
}

function Container306() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph62 />
      </div>
    </div>
  );
}

function Container302() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container303 />
      <Container306 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pdc43e70} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.pab3a610} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M3.5 10.5H8.5" id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M6 1.5V10.5" id="Vector_4" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2de32600} id="Vector_5" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container309() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon42 />
      </div>
    </div>
  );
}

function Container310() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container308() {
  return (
    <div className="h-[111.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container309 />
        <Container310 />
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[576px]">iOS 16+ 단일 플랫폼 타겟이므로 서드파티 대신 퍼스트파티 프레임워크가 안정성 면에서 유리합니다. 채팅 기능에는 날짜 기반 커서 페이지네이션이나 검색어 기반 조회 등 비교적 복잡한 쿼리가 필요하므로, 이를 지원하는 CoreData가 SwiftData보다 적합하다고 판단했습니다.</p>
    </div>
  );
}

function Container311() {
  return (
    <div className="flex-[1_0_0] h-[111.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#2b7fff] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">대안 비교</p>
        <Paragraph63 />
      </div>
    </div>
  );
}

function Container307() {
  return (
    <div className="content-stretch flex gap-[10px] h-[111.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container308 />
      <Container311 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container314() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon43 />
      </div>
    </div>
  );
}

function Container313() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container314 />
      </div>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[570px]">CoreData를 도입하되, 채팅방-메시지-참여자 간 1:N 관계를 설정하고 각 메시지에 isHead·isTail 속성을 부여하면 분 단위 메시지 그룹핑 UI까지 효율적으로 지원할 수 있다고 결론 내렸습니다.</p>
    </div>
  );
}

function Container315() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph64 />
      </div>
    </div>
  );
}

function Container312() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container313 />
      <Container315 />
    </div>
  );
}

function Container301() {
  return (
    <div className="absolute content-stretch flex flex-col h-[272.625px] items-start left-0 top-[34px] w-[615.664px]" data-name="Container">
      <Container302 />
      <Container307 />
      <Container312 />
    </div>
  );
}

function Container300() {
  return (
    <div className="flex-[1_0_0] h-[326.625px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container301 />
      </div>
    </div>
  );
}

function Container296() {
  return (
    <div className="content-stretch flex gap-[12px] h-[326.625px] items-start relative shrink-0 w-full" data-name="Container">
      <Container297 />
      <Container300 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container318() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon44 />
      </div>
    </div>
  );
}

function Container319() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container317() {
  return (
    <div className="h-[121.125px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container318 />
        <Container319 />
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[604px]">CoreData를 도입하고, 채팅방-메시지-참여자 간 1:N 관계를 설정하여 효율적 조회가 가능하도록 DB 모델링을 설계했습니다. 각 메시지에 isHead, isTail 속성을 부여하여 분 단위로 연속된 메시지를 묶어 보여주는 UI 구조를 지원했습니다.</p>
    </div>
  );
}

function Container320() {
  return (
    <div className="flex-[1_0_0] h-[121.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph65 />
      </div>
    </div>
  );
}

function Container316() {
  return (
    <div className="content-stretch flex gap-[12px] h-[121.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container317 />
      <Container320 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container323() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon45 />
      </div>
    </div>
  );
}

function Container322() {
  return (
    <div className="h-[76.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[44.75px] relative size-full">
        <Container323 />
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[605px]">서버 트래픽 감소, 클라이언트 측 즉시 검색, 오프라인 환경에서의 이전 채팅 열람이 가능한 구조를 확보했습니다.</p>
    </div>
  );
}

function Container324() {
  return (
    <div className="flex-[1_0_0] h-[76.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph66 />
      </div>
    </div>
  );
}

function Container321() {
  return (
    <div className="content-stretch flex gap-[12px] h-[76.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container322 />
      <Container324 />
    </div>
  );
}

function Container290() {
  return (
    <div className="absolute content-stretch flex flex-col h-[621.25px] items-start left-[24px] top-[24px] w-[659.664px]" data-name="Container">
      <Container291 />
      <Container296 />
      <Container316 />
      <Container321 />
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#90a1b9] text-[11px] top-[-0.5px] tracking-[0.55px] uppercase whitespace-nowrap">CoreData Schema</p>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p15384580} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p77eed00} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1e7c0380} id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text82() {
  return (
    <div className="h-[16px] relative shrink-0 w-[59.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#1447e6] text-[12px] top-[-0.5px] whitespace-nowrap">ChatRoom</p>
      </div>
    </div>
  );
}

function Container328() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[13px] top-[13px] w-[396.328px]" data-name="Container">
      <Icon46 />
      <Text82 />
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="absolute h-[15px] left-[33px] top-[37px] w-[376.328px]" data-name="Paragraph">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(21,93,252,0.7)] top-[-0.5px] whitespace-nowrap">id, title, lastMessage</p>
    </div>
  );
}

function Container327() {
  return (
    <div className="bg-[#eff6ff] h-[65px] relative rounded-[10px] shrink-0 w-[422.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container328 />
        <Paragraph68 />
      </div>
    </div>
  );
}

function Text83() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[0.5px] whitespace-nowrap">1:N</p>
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[14px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-0.58px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 9.33333">
              <path d="M0.583333 0.583333V8.75" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-14.29%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.25">
              <path d={svgPaths.p218c0c80} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container330() {
  return (
    <div className="h-[29.5px] relative shrink-0 w-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center relative size-full">
        <Text83 />
        <Icon47 />
      </div>
    </div>
  );
}

function Text84() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[0.5px] whitespace-nowrap">1:N</p>
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[14px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-0.58px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 9.33333">
              <path d="M0.583333 0.583333V8.75" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-14.29%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.25">
              <path d={svgPaths.p218c0c80} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container331() {
  return (
    <div className="h-[29.5px] relative shrink-0 w-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center relative size-full">
        <Text84 />
        <Icon48 />
      </div>
    </div>
  );
}

function Container329() {
  return (
    <div className="h-[29.5px] relative shrink-0 w-[422.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pl-[114.578px] pr-[114.586px] relative size-full">
        <Container330 />
        <Container331 />
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3e661000} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text85() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[71.914px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#008236] text-[11px] top-[-0.5px] whitespace-nowrap">ChatMessage</p>
      </div>
    </div>
  );
}

function Container334() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon49 />
      <Text85 />
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(0,166,62,0.7)] top-[-0.5px] whitespace-nowrap">content, sentAt</p>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(0,166,62,0.7)] top-[-0.5px] whitespace-nowrap">isHead, isTail</p>
    </div>
  );
}

function Container335() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph69 />
      <Paragraph70 />
    </div>
  );
}

function Container333() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex flex-col gap-[6px] h-[80.5px] items-start left-0 pb-px pt-[13px] px-[13px] rounded-[10px] top-0 w-[207.164px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container334 />
      <Container335 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p22c7cc0} id="Vector" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.6784 0.2745 1.0000)", strokeOpacity: "1" }} />
          <path d="M6 9H6.005" id="Vector_2" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.6784 0.2745 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text86() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[56.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#8200db] text-[11px] top-[-0.5px] whitespace-nowrap">Participant</p>
      </div>
    </div>
  );
}

function Container337() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon50 />
      <Text86 />
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(152,16,250,0.7)] top-[-0.5px] whitespace-nowrap">userId, nickname</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(152,16,250,0.7)] top-[-0.5px] whitespace-nowrap">profileImage</p>
    </div>
  );
}

function Container338() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph71 />
      <Paragraph72 />
    </div>
  );
}

function Container336() {
  return (
    <div className="absolute bg-[#faf5ff] content-stretch flex flex-col gap-[6px] h-[80.5px] items-start left-[215.16px] pb-px pt-[13px] px-[13px] rounded-[10px] top-0 w-[207.164px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container337 />
      <Container338 />
    </div>
  );
}

function Container332() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[422.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container333 />
        <Container336 />
      </div>
    </div>
  );
}

function Container326() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[191px] items-start relative shrink-0 w-full" data-name="Container">
      <Container327 />
      <Container329 />
      <Container332 />
    </div>
  );
}

function Container339() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[211.64px] not-italic text-[#90a1b9] text-[10px] text-center top-[9.5px] whitespace-nowrap">isHead/isTail로 분 단위 메시지 그룹핑</p>
    </div>
  );
}

function CoreDataSchemaDiagram() {
  return (
    <div className="bg-white flex-[1_0_0] h-[305.5px] min-h-px min-w-px relative rounded-[14px]" data-name="CoreDataSchemaDiagram">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Paragraph67 />
        <Container326 />
        <Container339 />
      </div>
    </div>
  );
}

function Container325() {
  return (
    <div className="absolute content-stretch flex h-[621.25px] items-start left-[707.66px] pt-[8px] top-[24px] w-[464.328px]" data-name="Container">
      <CoreDataSchemaDiagram />
    </div>
  );
}

function Container289() {
  return (
    <div className="h-[669.25px] relative shrink-0 w-full" data-name="Container">
      <Container290 />
      <Container325 />
    </div>
  );
}

function ProblemSolvingBlock4() {
  return (
    <div className="bg-white h-[728.25px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container287 />
          <Container289 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading45() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[286.484px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">데이터 조회 효율화 — 페이지네이션 직접 구현</p>
    </div>
  );
}

function Text87() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[294.48px] rounded-[16777200px] top-[0.75px] w-[102.422px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Optimization</p>
    </div>
  );
}

function Container341() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading45 />
      <Text87 />
    </div>
  );
}

function Container340() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container341 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container345() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon51 />
      </div>
    </div>
  );
}

function Container346() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container344() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container345 />
        <Container346 />
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[789.609px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">로컬 DB에서 채팅 내역을 조회할 때, 전체 데이터를 한 번에 불러오는 방식은 대화가 쌓일수록 효율을 더 높일 수 있는 여지가 있었습니다.</p>
    </div>
  );
}

function Container347() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[789.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph73 />
      </div>
    </div>
  );
}

function Container343() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container344 />
      <Container347 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container350() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon52 />
      </div>
    </div>
  );
}

function Container351() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container349() {
  return (
    <div className="h-[191.125px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container350 />
        <Container351 />
      </div>
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pdc43e70} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.pab3a610} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M3.5 10.5H8.5" id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M6 1.5V10.5" id="Vector_4" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2de32600} id="Vector_5" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container356() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon53 />
      </div>
    </div>
  );
}

function Container357() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container355() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container356 />
        <Container357 />
      </div>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1067px]">오프셋 기반 페이지네이션은 구현이 간단하지만, 채팅처럼 실시간으로 데이터가 추가되는 환경에서는 페이지 경계가 밀려 중복·누락이 발생할 수 있습니다. 반면 커서 기반은 특정 지점 이후의 데이터를 정확히 가져올 수 있어 동적 데이터에 적합합니다.</p>
    </div>
  );
}

function Container358() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#2b7fff] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">대안 비교</p>
        <Paragraph74 />
      </div>
    </div>
  );
}

function Container354() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container355 />
      <Container358 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container361() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon54 />
      </div>
    </div>
  );
}

function Container360() {
  return (
    <div className="h-[50.375px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24.375px] pt-[2px] relative size-full">
        <Container361 />
      </div>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">채팅 메시지는 시간 순으로 정렬되는 특성이 있으므로, 날짜를 커서로 활용하면 별도의 커서 필드 없이도 안정적인 페이지네이션을 구현할 수 있다고 판단했습니다.</p>
    </div>
  );
}

function Container362() {
  return (
    <div className="flex-[1_0_0] h-[50.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph75 />
      </div>
    </div>
  );
}

function Container359() {
  return (
    <div className="content-stretch flex gap-[10px] h-[50.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container360 />
      <Container362 />
    </div>
  );
}

function Container353() {
  return (
    <div className="absolute content-stretch flex flex-col h-[137.125px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container354 />
      <Container359 />
    </div>
  );
}

function Container352() {
  return (
    <div className="flex-[1_0_0] h-[191.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container353 />
      </div>
    </div>
  );
}

function Container348() {
  return (
    <div className="content-stretch flex gap-[12px] h-[191.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container349 />
      <Container352 />
    </div>
  );
}

function Icon55() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container365() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon55 />
      </div>
    </div>
  );
}

function Container366() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container364() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container365 />
        <Container366 />
      </div>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[558.422px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">날짜 기반 커서 페이지네이션을 직접 구현하여, 의도한 범위만 정확히 조회할 수 있도록 했습니다.</p>
    </div>
  );
}

function Container367() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[558.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph76 />
      </div>
    </div>
  );
}

function Container363() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container364 />
      <Container367 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container370() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon56 />
      </div>
    </div>
  );
}

function Container369() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container370 />
      </div>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[675.102px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">대화량에 관계없이 일정한 조회 성능을 유지하며, 필요한 범위의 데이터만 효율적으로 로드하는 구조를 완성했습니다.</p>
    </div>
  );
}

function Container371() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[675.102px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph77 />
      </div>
    </div>
  );
}

function Container368() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container369 />
      <Container371 />
    </div>
  );
}

function Container342() {
  return (
    <div className="absolute content-stretch flex flex-col h-[388.25px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container343 />
      <Container348 />
      <Container363 />
      <Container368 />
    </div>
  );
}

function ProblemSolvingBlock5() {
  return (
    <div className="bg-white h-[495.25px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container340 />
        <Container342 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading46() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[304px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">실시간 수신과 동기화 충돌 — 데이터 정합성 보장</p>
    </div>
  );
}

function Text88() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[312px] rounded-[16777200px] top-[0.75px] w-[50.539px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Sync</p>
    </div>
  );
}

function Container373() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading46 />
      <Text88 />
    </div>
  );
}

function Container372() {
  return (
    <div className="bg-gradient-to-r from-[#f8fafc] h-[57px] relative shrink-0 to-[rgba(239,246,255,0.3)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container373 />
      </div>
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container378() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon57 />
      </div>
    </div>
  );
}

function Container379() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container377() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container378 />
        <Container379 />
      </div>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[614px]">채팅방 진입과 동시에 서버와의 동기화 작업이 진행되는 동안에도 실시간 소켓 메시지가 수신될 수 있습니다. 동기화 완료 전 수신된 메시지가 유실되거나 중복될 가능성이 있어 데이터 정합성 확보가 과제였습니다.</p>
    </div>
  );
}

function Container380() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph78 />
      </div>
    </div>
  );
}

function Container376() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container377 />
      <Container380 />
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container383() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon58 />
      </div>
    </div>
  );
}

function Container384() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container382() {
  return (
    <div className="h-[288.625px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container383 />
        <Container384 />
      </div>
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pdc43e70} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.pab3a610} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M3.5 10.5H8.5" id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M6 1.5V10.5" id="Vector_4" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2de32600} id="Vector_5" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container389() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon59 />
      </div>
    </div>
  );
}

function Container390() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container388() {
  return (
    <div className="h-[111.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container389 />
        <Container390 />
      </div>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[576px]">동기화 완료 후에 소켓을 연결하면 구현이 단순해지지만, 그 사이에 수신된 메시지를 놓칠 수 있습니다. 반대로 소켓을 먼저 연결하면 메시지 수신은 보장되지만, 동기화 중 수신된 메시지와 동기화 데이터 간 순서 정합성이라는 새로운 과제가 생깁니다.</p>
    </div>
  );
}

function Container391() {
  return (
    <div className="flex-[1_0_0] h-[111.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#2b7fff] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">대안 비교</p>
        <Paragraph79 />
      </div>
    </div>
  );
}

function Container387() {
  return (
    <div className="content-stretch flex gap-[10px] h-[111.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container388 />
      <Container391 />
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container394() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon60 />
      </div>
    </div>
  );
}

function Container393() {
  return (
    <div className="h-[123.5px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[97.5px] pt-[2px] relative size-full">
        <Container394 />
      </div>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="absolute h-[97.5px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[575px]">{`두 가지 문제를 동시에 해결하려면 '소켓 먼저 연결 + 수신 메시지를 즉시 처리하지 않고 대기열에 보관'하는 전략이 필요합니다. 동기화가 완료된 시점에 대기열을 비우면 순서 보장과 유실 방지를 모두 달성할 수 있고, 이 구조는 소켓 연결 → 동기화 → 대기열 플러시 → 일반 수신 모드 전환이라는 4단계 상태 머신으로 정리됩니다.`}</p>
    </div>
  );
}

function Container395() {
  return (
    <div className="flex-[1_0_0] h-[123.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph80 />
      </div>
    </div>
  );
}

function Container392() {
  return (
    <div className="content-stretch flex gap-[10px] h-[123.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container393 />
      <Container395 />
    </div>
  );
}

function Container386() {
  return (
    <div className="absolute content-stretch flex flex-col h-[234.625px] items-start left-0 top-[34px] w-[615.664px]" data-name="Container">
      <Container387 />
      <Container392 />
    </div>
  );
}

function Container385() {
  return (
    <div className="flex-[1_0_0] h-[288.625px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container386 />
      </div>
    </div>
  );
}

function Container381() {
  return (
    <div className="content-stretch flex gap-[12px] h-[288.625px] items-start relative shrink-0 w-full" data-name="Container">
      <Container382 />
      <Container385 />
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container398() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon61 />
      </div>
    </div>
  );
}

function Container399() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container397() {
  return (
    <div className="h-[121.125px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container398 />
        <Container399 />
      </div>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[615px]">소켓 연결을 동기화보다 먼저 수행하고, 동기화 완료 전 수신 메시지는 별도의 대기열(Queue)에 저장하도록 구성했습니다. 동기화 완료 후 대기열 메시지를 선처리한 뒤, 일반 수신 흐름으로 전환되도록 구현했습니다.</p>
    </div>
  );
}

function Container400() {
  return (
    <div className="flex-[1_0_0] h-[121.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph81 />
      </div>
    </div>
  );
}

function Container396() {
  return (
    <div className="content-stretch flex gap-[12px] h-[121.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container397 />
      <Container400 />
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container403() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon62 />
      </div>
    </div>
  );
}

function Container402() {
  return (
    <div className="h-[76.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[44.75px] relative size-full">
        <Container403 />
      </div>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[607px]">메시지 유실이나 중복 없이, 실시간성과 데이터 정합성을 모두 보장하는 안정적인 채팅 시스템을 구축했습니다.</p>
    </div>
  );
}

function Container404() {
  return (
    <div className="flex-[1_0_0] h-[76.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph82 />
      </div>
    </div>
  );
}

function Container401() {
  return (
    <div className="content-stretch flex gap-[12px] h-[76.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container402 />
      <Container404 />
    </div>
  );
}

function Container375() {
  return (
    <div className="absolute content-stretch flex flex-col h-[583.25px] items-start left-[24px] top-[24px] w-[659.664px]" data-name="Container">
      <Container376 />
      <Container381 />
      <Container396 />
      <Container401 />
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#90a1b9] text-[11px] top-[-0.5px] tracking-[0.55px] uppercase whitespace-nowrap">Sync Flow</p>
    </div>
  );
}

function Icon63() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 12.8333">
            <path d={svgPaths.p3cdb9400} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.1725 1.16667">
            <path d="M0.583333 0.583333H0.589167" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container409() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon63 />
      </div>
    </div>
  );
}

function Text89() {
  return (
    <div className="h-[16px] relative shrink-0 w-[54.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[-0.5px] whitespace-nowrap">채팅방 진입</p>
      </div>
    </div>
  );
}

function Container408() {
  return (
    <div className="bg-[#f8fafc] h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[11px] pr-px py-px relative size-full">
          <Container409 />
          <Text89 />
        </div>
      </div>
    </div>
  );
}

function Icon64() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 2.91667V11.0833" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d={svgPaths.p10793100} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container410() {
  return (
    <div className="content-stretch flex h-[18px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon64 />
    </div>
  );
}

function Container407() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container408 />
      <Container410 />
    </div>
  );
}

function Icon65() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p35d10900} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container413() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon65 />
      </div>
    </div>
  );
}

function Text90() {
  return (
    <div className="h-[16px] relative shrink-0 w-[76.664px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[-0.5px] whitespace-nowrap">소켓 연결 (우선)</p>
      </div>
    </div>
  );
}

function Container412() {
  return (
    <div className="bg-[#eff6ff] h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[11px] pr-px py-px relative size-full">
          <Container413 />
          <Text90 />
        </div>
      </div>
    </div>
  );
}

function Icon66() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 2.91667V11.0833" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d={svgPaths.p10793100} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container414() {
  return (
    <div className="content-stretch flex h-[18px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon66 />
    </div>
  );
}

function Container411() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container412 />
      <Container414 />
    </div>
  );
}

function Icon67() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[12.5%] right-[12.5%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.41667">
            <path d={svgPaths.p347a280} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_66.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08333 4.08333">
            <path d="M3.5 0.583333V3.5H0.583333" id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.41667">
            <path d={svgPaths.p2ff765c0} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_66.67%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08333 4.08333">
            <path d="M3.5 0.583333H0.583333V3.5" id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container417() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon67 />
      </div>
    </div>
  );
}

function Text91() {
  return (
    <div className="h-[16px] relative shrink-0 w-[78.461px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[-0.5px] whitespace-nowrap">서버 동기화 시작</p>
      </div>
    </div>
  );
}

function Container416() {
  return (
    <div className="bg-[#fffbeb] h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[11px] pr-px py-px relative size-full">
          <Container417 />
          <Text91 />
        </div>
      </div>
    </div>
  );
}

function Icon68() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 2.91667V11.0833" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d={svgPaths.p10793100} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container418() {
  return (
    <div className="content-stretch flex h-[18px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon68 />
    </div>
  );
}

function Container415() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container416 />
      <Container418 />
    </div>
  );
}

function Icon69() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.5%_66.67%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 4.66667">
            <path d={svgPaths.pa013c80} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 1.0000 0.4118 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
            <path d={svgPaths.p3f514200} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 1.0000 0.4118 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-33.33%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 2.91667">
            <path d={svgPaths.p2bef4300} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 1.0000 0.4118 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container421() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon69 />
      </div>
    </div>
  );
}

function Text92() {
  return (
    <div className="h-[16px] relative shrink-0 w-[131.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[-0.5px] whitespace-nowrap">수신 메시지 → Queue 대기</p>
      </div>
    </div>
  );
}

function Container420() {
  return (
    <div className="bg-[#fff7ed] h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffd6a8] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[11px] pr-px py-px relative size-full">
          <Container421 />
          <Text92 />
        </div>
      </div>
    </div>
  );
}

function Icon70() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 2.91667V11.0833" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d={svgPaths.p10793100} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container422() {
  return (
    <div className="content-stretch flex h-[18px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon70 />
    </div>
  );
}

function Container419() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container420 />
      <Container422 />
    </div>
  );
}

function Icon71() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-9.09%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 7.58333">
            <path d={svgPaths.p3db88f00} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container425() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon71 />
      </div>
    </div>
  );
}

function Text93() {
  return (
    <div className="h-[16px] relative shrink-0 w-[54.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[-0.5px] whitespace-nowrap">동기화 완료</p>
      </div>
    </div>
  );
}

function Container424() {
  return (
    <div className="bg-[#f0fdf4] h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[11px] pr-px py-px relative size-full">
          <Container425 />
          <Text93 />
        </div>
      </div>
    </div>
  );
}

function Icon72() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 2.91667V11.0833" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d={svgPaths.p10793100} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container426() {
  return (
    <div className="content-stretch flex h-[18px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon72 />
    </div>
  );
}

function Container423() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container424 />
      <Container426 />
    </div>
  );
}

function Icon73() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p35d10900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.0000 0.6510 0.2431)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container428() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon73 />
      </div>
    </div>
  );
}

function Text94() {
  return (
    <div className="h-[16px] relative shrink-0 w-[131.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[-0.5px] whitespace-nowrap">Queue 선처리 → 일반 수신</p>
      </div>
    </div>
  );
}

function Container427() {
  return (
    <div className="bg-[#f0fdf4] h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[11px] pr-px py-px relative size-full">
          <Container428 />
          <Text94 />
        </div>
      </div>
    </div>
  );
}

function Container406() {
  return (
    <div className="content-stretch flex flex-col h-[318px] items-start relative shrink-0 w-full" data-name="Container">
      <Container407 />
      <Container411 />
      <Container415 />
      <Container419 />
      <Container423 />
      <Container427 />
    </div>
  );
}

function Container429() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[211.65px] not-italic text-[#90a1b9] text-[10px] text-center top-[9.5px] whitespace-nowrap">실시간성 + 데이터 정합성 보장</p>
    </div>
  );
}

function ChatSyncFlowDiagram() {
  return (
    <div className="bg-white flex-[1_0_0] h-[424.5px] min-h-px min-w-px relative rounded-[14px]" data-name="ChatSyncFlowDiagram">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Paragraph83 />
        <Container406 />
        <Container429 />
      </div>
    </div>
  );
}

function Container405() {
  return (
    <div className="absolute content-stretch flex h-[583.25px] items-start left-[707.66px] pt-[8px] top-[24px] w-[464.328px]" data-name="Container">
      <ChatSyncFlowDiagram />
    </div>
  );
}

function Container374() {
  return (
    <div className="h-[631.25px] relative shrink-0 w-full" data-name="Container">
      <Container375 />
      <Container405 />
    </div>
  );
}

function ProblemSolvingBlock6() {
  return (
    <div className="bg-white h-[690.25px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container372 />
          <Container374 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading47() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[229.547px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">채팅 검색 시 미로드 영역 스크롤 이동</p>
    </div>
  );
}

function Text95() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[237.55px] rounded-[16777200px] top-[0.75px] w-[34.391px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">UX</p>
    </div>
  );
}

function Container431() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading47 />
      <Text95 />
    </div>
  );
}

function Container430() {
  return (
    <div className="bg-gradient-to-r from-[#f8fafc] h-[57px] relative shrink-0 to-[rgba(239,246,255,0.3)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container431 />
      </div>
    </div>
  );
}

function Icon74() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container436() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon74 />
      </div>
    </div>
  );
}

function Container437() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container435() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container436 />
        <Container437 />
      </div>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[614px]">검색 결과가 아직 불러오지 않은 메시지 범위에 포함된 경우, 해당 위치로 바로 이동하기 어려운 상황이었습니다.</p>
    </div>
  );
}

function Container438() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph84 />
      </div>
    </div>
  );
}

function Container434() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container435 />
      <Container438 />
    </div>
  );
}

function Icon75() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container441() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon75 />
      </div>
    </div>
  );
}

function Container442() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container440() {
  return (
    <div className="h-[239.875px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container441 />
        <Container442 />
      </div>
    </div>
  );
}

function Icon76() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container447() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon76 />
      </div>
    </div>
  );
}

function Container448() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container446() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container447 />
        <Container448 />
      </div>
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[572px]">이미 로드된 범위 내의 메시지라면 ScrollViewProxy로 즉시 이동할 수 있지만, 미로드 영역에 있는 메시지는 뷰가 아직 준비되지 않아 스크롤 대상이 존재하지 않는 상태입니다.</p>
    </div>
  );
}

function Container449() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph85 />
      </div>
    </div>
  );
}

function Container445() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container446 />
      <Container449 />
    </div>
  );
}

function Icon77() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container452() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon77 />
      </div>
    </div>
  );
}

function Container451() {
  return (
    <div className="h-[99.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[73.125px] pt-[2px] relative size-full">
        <Container452 />
      </div>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[576px]">현재 페이지네이션 커서의 날짜와 검색 대상 메시지의 날짜를 비교하면 그 사이 범위를 계산할 수 있습니다. 해당 범위를 먼저 추가 로드한 뒤 스크롤을 실행하면 미로드 영역의 메시지에도 도달할 수 있다고 판단했습니다.</p>
    </div>
  );
}

function Container453() {
  return (
    <div className="flex-[1_0_0] h-[99.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph86 />
      </div>
    </div>
  );
}

function Container450() {
  return (
    <div className="content-stretch flex gap-[10px] h-[99.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container451 />
      <Container453 />
    </div>
  );
}

function Container444() {
  return (
    <div className="absolute content-stretch flex flex-col h-[185.875px] items-start left-0 top-[34px] w-[615.664px]" data-name="Container">
      <Container445 />
      <Container450 />
    </div>
  );
}

function Container443() {
  return (
    <div className="flex-[1_0_0] h-[239.875px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container444 />
      </div>
    </div>
  );
}

function Container439() {
  return (
    <div className="content-stretch flex gap-[12px] h-[239.875px] items-start relative shrink-0 w-full" data-name="Container">
      <Container440 />
      <Container443 />
    </div>
  );
}

function Icon78() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container456() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon78 />
      </div>
    </div>
  );
}

function Container457() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container455() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container456 />
        <Container457 />
      </div>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[609px]">현재 커서 날짜와 검색 대상 메시지 날짜 사이 범위를 먼저 로드한 뒤, 해당 메시지가 포함된 영역으로 자연스럽게 스크롤 이동하도록 설계했습니다.</p>
    </div>
  );
}

function Container458() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph87 />
      </div>
    </div>
  );
}

function Container454() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container455 />
      <Container458 />
    </div>
  );
}

function Icon79() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container461() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon79 />
      </div>
    </div>
  );
}

function Container460() {
  return (
    <div className="h-[76.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[44.75px] relative size-full">
        <Container461 />
      </div>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[605px]">사용자가 검색한 메시지가 어느 시점에 있든, 끊김 없이 해당 대화 위치로 즉시 이동하는 경험을 제공할 수 있었습니다.</p>
    </div>
  );
}

function Container462() {
  return (
    <div className="flex-[1_0_0] h-[76.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph88 />
      </div>
    </div>
  );
}

function Container459() {
  return (
    <div className="content-stretch flex gap-[12px] h-[76.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container460 />
      <Container462 />
    </div>
  );
}

function Container433() {
  return (
    <div className="absolute content-stretch flex flex-col h-[510.125px] items-start left-[24px] top-[24px] w-[659.664px]" data-name="Container">
      <Container434 />
      <Container439 />
      <Container454 />
      <Container459 />
    </div>
  );
}

function Icon80() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3a098740} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.0196 0.8745 0.4471)", strokeOpacity: "1" }} />
          <path d="M24.5 24.5L19.4833 19.4833" id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.0196 0.8745 0.4471)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container464() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon80 />
      </div>
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[146.906px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[20px] left-[73.88px] not-italic text-[#45556c] text-[14px] text-center top-[-0.5px] whitespace-nowrap">채팅 메시지 검색</p>
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[24px] w-[146.906px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-[73.5px] not-italic text-[#90a1b9] text-[11px] text-center top-[-0.5px] whitespace-nowrap">검색 결과 위치로 즉시 스크롤 이동</p>
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[40.5px] w-[146.906px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-[73.64px] not-italic text-[#90a1b9] text-[11px] text-center top-[-0.5px] whitespace-nowrap">미로드 영역 선조회 후 점프</p>
    </div>
  );
}

function Container465() {
  return (
    <div className="h-[57px] relative shrink-0 w-[146.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph89 />
        <Paragraph90 />
        <Paragraph91 />
      </div>
    </div>
  );
}

function ChatSearchPlaceholder() {
  return (
    <div className="flex-[1_0_0] h-[180px] min-h-px min-w-px relative rounded-[14px]" data-name="ChatSearchPlaceholder" style={{ backgroundImage: "linear-gradient(158.811deg, rgb(248, 250, 252) 0%, rgba(240, 253, 244, 0.3) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center justify-center p-[2px] relative size-full">
        <Container464 />
        <Container465 />
      </div>
    </div>
  );
}

function Container463() {
  return (
    <div className="absolute content-stretch flex h-[510.125px] items-start left-[707.66px] pt-[8px] top-[24px] w-[464.328px]" data-name="Container">
      <ChatSearchPlaceholder />
    </div>
  );
}

function Container432() {
  return (
    <div className="h-[558.125px] relative shrink-0 w-full" data-name="Container">
      <Container433 />
      <Container463 />
    </div>
  );
}

function ProblemSolvingBlock7() {
  return (
    <div className="bg-white h-[617.125px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container430 />
          <Container432 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container286() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[2590.875px] items-start relative shrink-0 w-full" data-name="Container">
      <ProblemSolvingBlock4 />
      <ProblemSolvingBlock5 />
      <ProblemSolvingBlock6 />
      <ProblemSolvingBlock7 />
    </div>
  );
}

function TechSection2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[2707.875px] items-start left-[41px] pt-[33px] top-[3283.25px] w-[1198px]" data-name="TechSection">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Heading43 />
      <Container286 />
    </div>
  );
}

function Text96() {
  return <div className="absolute bg-[#155dfc] h-[24px] left-0 rounded-[16777200px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading48() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text96 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[16px] not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">결제 기능 설계</p>
    </div>
  );
}

function Heading49() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[217.344px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">결제 검증의 주체 — 보안 중심 설계</p>
    </div>
  );
}

function Text97() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[225.34px] rounded-[16777200px] top-[0.75px] w-[76.102px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Security</p>
    </div>
  );
}

function Container467() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading49 />
      <Text97 />
    </div>
  );
}

function Container466() {
  return (
    <div className="bg-gradient-to-r from-[#f8fafc] h-[57px] relative shrink-0 to-[rgba(239,246,255,0.3)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container467 />
      </div>
    </div>
  );
}

function Icon81() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container472() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon81 />
      </div>
    </div>
  );
}

function Container473() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container471() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container472 />
        <Container473 />
      </div>
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[610px]">{`결제 기능은 실제 청구가 발생하는 민감한 기능입니다. 기능 구현에 앞서 '결제가 정상적으로 이루어졌음을 누가 검증해야 하는가'에 대한 근본적인 고민이 필요했습니다.`}</p>
    </div>
  );
}

function Container474() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph92 />
      </div>
    </div>
  );
}

function Container470() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container471 />
      <Container474 />
    </div>
  );
}

function Icon82() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container477() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon82 />
      </div>
    </div>
  );
}

function Container478() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container476() {
  return (
    <div className="h-[326.625px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container477 />
        <Container478 />
      </div>
    </div>
  );
}

function Icon83() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container483() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon83 />
      </div>
    </div>
  );
}

function Container484() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container482() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container483 />
        <Container484 />
      </div>
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[569px]">가장 단순한 구현은 클라이언트에서 PG 결제 완료 후 바로 상품을 지급하는 방식이지만, 이 경우 검증 로직이 사용자 디바이스에서 실행됩니다.</p>
    </div>
  );
}

function Container485() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph93 />
      </div>
    </div>
  );
}

function Container481() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container482 />
      <Container485 />
    </div>
  );
}

function Icon84() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container488() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon84 />
      </div>
    </div>
  );
}

function Container489() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container487() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container488 />
        <Container489 />
      </div>
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[568px]">앱은 사용자 디바이스에서 실행되기 때문에, 탈옥 등의 방법으로 결제 흐름이 의도와 다르게 처리될 가능성이 있습니다. 클라이언트 측 검증만으로는 충분한 신뢰성을 확보하기 어렵습니다.</p>
    </div>
  );
}

function Container490() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#e17100] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">한계 발견</p>
        <Paragraph94 />
      </div>
    </div>
  );
}

function Container486() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container487 />
      <Container490 />
    </div>
  );
}

function Icon85() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container493() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon85 />
      </div>
    </div>
  );
}

function Container492() {
  return (
    <div className="h-[99.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[73.125px] pt-[2px] relative size-full">
        <Container493 />
      </div>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[581px]">서버는 개발자가 통제하는 신뢰 가능한 환경이므로, 결제 검증을 서버에서 수행해야 결제 흐름의 신뢰성을 원천적으로 확보할 수 있다고 판단했습니다. 클라이언트는 서버의 검증 완료 응답 후에만 UI를 업데이트하는 구조가 필요합니다.</p>
    </div>
  );
}

function Container494() {
  return (
    <div className="flex-[1_0_0] h-[99.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph95 />
      </div>
    </div>
  );
}

function Container491() {
  return (
    <div className="content-stretch flex gap-[10px] h-[99.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container492 />
      <Container494 />
    </div>
  );
}

function Container480() {
  return (
    <div className="absolute content-stretch flex flex-col h-[272.625px] items-start left-0 top-[34px] w-[615.664px]" data-name="Container">
      <Container481 />
      <Container486 />
      <Container491 />
    </div>
  );
}

function Container479() {
  return (
    <div className="flex-[1_0_0] h-[326.625px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container480 />
      </div>
    </div>
  );
}

function Container475() {
  return (
    <div className="content-stretch flex gap-[12px] h-[326.625px] items-start relative shrink-0 w-full" data-name="Container">
      <Container476 />
      <Container479 />
    </div>
  );
}

function Icon86() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container497() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon86 />
      </div>
    </div>
  );
}

function Container498() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container496() {
  return (
    <div className="h-[185.875px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container497 />
        <Container498 />
      </div>
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">모든 결제 검증은 서버에서 직접 수행하는 것을 원칙으로 설계했습니다.</p>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">① 사용자 구매 시도 → 서버에서 주문 번호 발급 → PG 결제 시작</p>
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">② 결제 완료 → 앱이 결제 승인 정보를 서버에 전달</p>
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">③ 서버가 PG 검증 API로 유효성 확인 → 검증 완료 시 상품 지급</p>
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">{`④ 클라이언트는 서버의 '결제 완료' 응답 후에만 UI 업데이트 및 권한 부여`}</p>
    </div>
  );
}

function Container500() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[137.875px] items-start left-0 top-[28px] w-[424.805px]" data-name="Container">
      <Paragraph96 />
      <Paragraph97 />
      <Paragraph98 />
      <Paragraph99 />
      <Paragraph100 />
    </div>
  );
}

function Container499() {
  return (
    <div className="h-[185.875px] relative shrink-0 w-[424.805px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Container500 />
      </div>
    </div>
  );
}

function Container495() {
  return (
    <div className="content-stretch flex gap-[12px] h-[185.875px] items-start relative shrink-0 w-full" data-name="Container">
      <Container496 />
      <Container499 />
    </div>
  );
}

function Icon87() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container503() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon87 />
      </div>
    </div>
  );
}

function Container502() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container503 />
      </div>
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[473.109px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">클라이언트 측 검증의 한계를 보완하고, 신뢰할 수 있는 결제 흐름을 확보했습니다.</p>
    </div>
  );
}

function Container504() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[473.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph101 />
      </div>
    </div>
  );
}

function Container501() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container502 />
      <Container504 />
    </div>
  );
}

function Container469() {
  return (
    <div className="absolute content-stretch flex flex-col h-[661.625px] items-start left-[24px] top-[24px] w-[659.664px]" data-name="Container">
      <Container470 />
      <Container475 />
      <Container495 />
      <Container501 />
    </div>
  );
}

function Paragraph102() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[91.781px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#90a1b9] text-[11px] top-[-0.5px] tracking-[0.55px] uppercase whitespace-nowrap">Payment Flow</p>
      </div>
    </div>
  );
}

function Icon88() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text98() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[15px] left-0 not-italic text-[#00a63e] text-[10px] top-[0.5px] whitespace-nowrap">서버 검증 원칙</p>
      </div>
    </div>
  );
}

function Container507() {
  return (
    <div className="h-[15px] relative shrink-0 w-[72.742px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon88 />
        <Text98 />
      </div>
    </div>
  );
}

function Container506() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-center justify-between left-[21px] top-[21px] w-[422.328px]" data-name="Container">
      <Paragraph102 />
      <Container507 />
    </div>
  );
}

function Text99() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#62748e] text-[10px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container510() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[3px] whitespace-nowrap">구매 시도</p>
      </div>
    </div>
  );
}

function Text100() {
  return (
    <div className="flex-[1_0_0] h-[13.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">사용자</p>
      </div>
    </div>
  );
}

function Icon89() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text101() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">앱</p>
      </div>
    </div>
  );
}

function Container511() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[51.148px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text100 />
        <Icon89 />
        <Text101 />
      </div>
    </div>
  );
}

function Container509() {
  return (
    <div className="bg-[#f1f5f9] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[9px] py-px relative size-full">
          <Text99 />
          <Container510 />
          <Container511 />
        </div>
      </div>
    </div>
  );
}

function Text102() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#62748e] text-[10px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container513() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[3px] whitespace-nowrap">주문번호 발급</p>
      </div>
    </div>
  );
}

function Text103() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">앱</p>
      </div>
    </div>
  );
}

function Icon90() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text104() {
  return (
    <div className="flex-[1_0_0] h-[13.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">서버</p>
      </div>
    </div>
  );
}

function Container514() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[43.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text103 />
        <Icon90 />
        <Text104 />
      </div>
    </div>
  );
}

function Container512() {
  return (
    <div className="bg-[#eff6ff] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[9px] py-px relative size-full">
          <Text102 />
          <Container513 />
          <Container514 />
        </div>
      </div>
    </div>
  );
}

function Text105() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#62748e] text-[10px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container516() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[3px] whitespace-nowrap">PG 결제 진행</p>
      </div>
    </div>
  );
}

function Text106() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">앱</p>
      </div>
    </div>
  );
}

function Icon91() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.5px_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
              <path d="M0.5 0.5H7.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
              <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text107() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[11.133px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">PG</p>
      </div>
    </div>
  );
}

function Container517() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[38.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text106 />
        <Icon91 />
        <Text107 />
      </div>
    </div>
  );
}

function Container515() {
  return (
    <div className="bg-[#eef2ff] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c6d2ff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[9px] py-px relative size-full">
          <Text105 />
          <Container516 />
          <Container517 />
        </div>
      </div>
    </div>
  );
}

function Text108() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#62748e] text-[10px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Container519() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[3px] whitespace-nowrap">결제 승인 정보 전달</p>
      </div>
    </div>
  );
}

function Text109() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">앱</p>
      </div>
    </div>
  );
}

function Icon92() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text110() {
  return (
    <div className="flex-[1_0_0] h-[13.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">서버</p>
      </div>
    </div>
  );
}

function Container520() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[43.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text109 />
        <Icon92 />
        <Text110 />
      </div>
    </div>
  );
}

function Container518() {
  return (
    <div className="bg-[#fffbeb] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[9px] py-px relative size-full">
          <Text108 />
          <Container519 />
          <Container520 />
        </div>
      </div>
    </div>
  );
}

function Text111() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#62748e] text-[10px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container522() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[3px] whitespace-nowrap">PG 검증 API 확인</p>
      </div>
    </div>
  );
}

function Text112() {
  return (
    <div className="flex-[1_0_0] h-[13.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">서버</p>
      </div>
    </div>
  );
}

function Icon93() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text113() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[11.133px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">PG</p>
      </div>
    </div>
  );
}

function Container523() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[46.703px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text112 />
        <Icon93 />
        <Text113 />
      </div>
    </div>
  );
}

function Container521() {
  return (
    <div className="bg-[#fff7ed] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffd6a8] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[9px] py-px relative size-full">
          <Text111 />
          <Container522 />
          <Container523 />
        </div>
      </div>
    </div>
  );
}

function Text114() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#62748e] text-[10px] whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Container525() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#314158] text-[12px] top-[3px] whitespace-nowrap">검증 완료 → 상품 지급</p>
      </div>
    </div>
  );
}

function Text115() {
  return (
    <div className="flex-[1_0_0] h-[13.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">서버</p>
      </div>
    </div>
  );
}

function Icon94() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text116() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[7.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[13.5px] left-0 not-italic text-[#90a1b9] text-[9px] top-[-0.5px] whitespace-nowrap">앱</p>
      </div>
    </div>
  );
}

function Container526() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[43.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text115 />
        <Icon94 />
        <Text116 />
      </div>
    </div>
  );
}

function Container524() {
  return (
    <div className="bg-[#f0fdf4] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[9px] py-px relative size-full">
          <Text114 />
          <Container525 />
          <Container526 />
        </div>
      </div>
    </div>
  );
}

function Container508() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[282px] items-start left-[21px] top-[41.5px] w-[422.328px]" data-name="Container">
      <Container509 />
      <Container512 />
      <Container515 />
      <Container518 />
      <Container521 />
      <Container524 />
    </div>
  );
}

function Container527() {
  return (
    <div className="absolute border-[#f1f5f9] border-solid border-t h-[24px] left-[21px] top-[335.5px] w-[422.328px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[211.46px] not-italic text-[#90a1b9] text-[10px] text-center top-[8.5px] whitespace-nowrap">클라이언트 변조 위험 원천 차단</p>
    </div>
  );
}

function PaymentFlowDiagram() {
  return (
    <div className="bg-white flex-[1_0_0] h-[380.5px] min-h-px min-w-px relative rounded-[14px]" data-name="PaymentFlowDiagram">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container506 />
        <Container508 />
        <Container527 />
      </div>
    </div>
  );
}

function Container505() {
  return (
    <div className="absolute content-stretch flex h-[661.625px] items-start left-[707.66px] pt-[8px] top-[24px] w-[464.328px]" data-name="Container">
      <PaymentFlowDiagram />
    </div>
  );
}

function Container468() {
  return (
    <div className="h-[709.625px] relative shrink-0 w-full" data-name="Container">
      <Container469 />
      <Container505 />
    </div>
  );
}

function ProblemSolvingBlock8() {
  return (
    <div className="bg-white h-[768.625px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container466 />
          <Container468 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function TechSection3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[885.625px] items-start left-[41px] pt-[33px] top-[5991.13px] w-[1198px]" data-name="TechSection">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Heading48 />
      <ProblemSolvingBlock8 />
    </div>
  );
}

function Container133() {
  return (
    <div className="bg-white h-[6917.75px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container134 />
      <TechSection />
      <TechSection1 />
      <TechSection2 />
      <TechSection3 />
    </div>
  );
}

function FilteeSection2() {
  return (
    <div className="h-[7388.75px] relative shrink-0 w-[1280px]" data-name="FilteeSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start relative size-full">
        <Container116 />
        <Container133 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[7580.75px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <FilteeSection2 />
    </div>
  );
}

function Container530() {
  return (
    <div className="absolute bg-[#0f172b] h-[24px] left-0 rounded-[16777200px] top-[1.5px] w-[82.32px]" data-name="Container">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-[12px] not-italic text-[12px] text-white top-[3.5px] tracking-[0.6px] uppercase whitespace-nowrap">Project</p>
    </div>
  );
}

function Heading50() {
  return (
    <div className="absolute h-[60px] left-0 top-[41.5px] w-[505.328px]" data-name="Heading 2">
      <p className="absolute font-['Pretendard:ExtraBold',sans-serif] leading-[60px] left-0 not-italic text-[#0f172b] text-[48px] top-[0.5px] whitespace-nowrap">Pokit</p>
    </div>
  );
}

function Paragraph103() {
  return (
    <div className="absolute h-[32.5px] left-0 top-[117.5px] w-[505.328px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[32.5px] left-0 not-italic text-[#45556c] text-[20px] top-0 whitespace-nowrap">간편 링크 아카이빙 앱 (iOS 16+)</p>
    </div>
  );
}

function Container529() {
  return (
    <div className="h-[150px] relative shrink-0 w-full" data-name="Container">
      <Container530 />
      <Heading50 />
      <Paragraph103 />
    </div>
  );
}

function Text117() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[28px] left-0 rounded-[4px] top-0 w-[263.016px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[12px] not-italic text-[#62748e] text-[14px] top-[3.5px] whitespace-nowrap">2024.05.11 ~ 2024.08.27 (유지 보수 중)</p>
    </div>
  );
}

function Icon95() {
  return (
    <div className="absolute left-0 size-[16px] top-[6px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe485a00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p28ae6680} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[28px] left-[279.02px] top-0 w-[65.063px]" data-name="Link">
      <Icon95 />
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[20px] not-italic text-[#62748e] text-[14px] top-[3.5px] whitespace-nowrap">{` GitHub`}</p>
    </div>
  );
}

function Icon96() {
  return (
    <div className="absolute left-0 size-[16px] top-[6px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[28px] left-[360.08px] top-0 w-[83.43px]" data-name="Link">
      <Icon96 />
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[20px] not-italic text-[#62748e] text-[14px] top-[3.5px] whitespace-nowrap">{` App Store`}</p>
    </div>
  );
}

function Container531() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Text117 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function PokitSection() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="PokitSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[0] left-0 not-italic text-[#45556c] text-[0px] top-[-0.5px] w-[505px]">
        <span className="leading-[24px] text-[16px]">{`간편하게 링크를 저장하고, 분류하고, 잊지 않고 볼 수 있도록 도와주는 서비스입니다. 9인 팀 프로젝트에서 iOS 리드 개발자로 `}</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[24px] text-[16px]">모듈화 아키텍처 설계</span>
        <span className="leading-[24px] text-[16px]">{`와 `}</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[24px] text-[16px]">자동화 환경 구축</span>
        <span className="leading-[24px] text-[16px]">을 주도했습니다.</span>
      </p>
    </div>
  );
}

function Text118() {
  return (
    <div className="h-[20px] relative shrink-0 w-[118.898px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#62748e] text-[0px] top-[-0.5px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">Role:</span>
          <span className="font-['Pretendard:Regular',sans-serif] leading-[20px] text-[14px]">{` iOS 개발 (2명)`}</span>
        </p>
      </div>
    </div>
  );
}

function Text119() {
  return (
    <div className="h-[20px] relative shrink-0 w-[303.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#62748e] text-[0px] top-[-0.5px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">Team:</span>
          <span className="font-['Pretendard:Regular',sans-serif] leading-[20px] text-[14px]">{` PM 1, Design 2, Server 2, iOS 2, Android 2`}</span>
        </p>
      </div>
    </div>
  );
}

function PokitSection1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="PokitSection">
      <Text118 />
      <Text119 />
    </div>
  );
}

function Container532() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
      <PokitSection />
      <PokitSection1 />
    </div>
  );
}

function Text120() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-0 rounded-[4px] top-[17px] w-[73.93px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">SwiftUI</p>
    </div>
  );
}

function Text121() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[81.93px] rounded-[4px] top-[17px] w-[44.258px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">TCA</p>
    </div>
  );
}

function Text122() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[134.19px] rounded-[4px] top-[17px] w-[170.359px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Modular Architecture</p>
    </div>
  );
}

function Text123() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[312.55px] rounded-[4px] top-[17px] w-[59.094px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Tuist</p>
    </div>
  );
}

function Text124() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-0 rounded-[4px] top-[51px] w-[125.852px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Github Actions</p>
    </div>
  );
}

function Text125() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[133.85px] rounded-[4px] top-[51px] w-[81.344px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Fastlane</p>
    </div>
  );
}

function Text126() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[223.2px] rounded-[4px] top-[51px] w-[51.672px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Moya</p>
    </div>
  );
}

function Text127() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[282.87px] rounded-[4px] top-[51px] w-[51.672px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Nuke</p>
    </div>
  );
}

function Text128() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[342.54px] rounded-[4px] top-[51px] w-[81.344px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">KakaoSDK</p>
    </div>
  );
}

function Text129() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-0 rounded-[4px] top-[85px] w-[81.344px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Firebase</p>
    </div>
  );
}

function Text130() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[89.34px] rounded-[4px] top-[85px] w-[133.273px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Share Extension</p>
    </div>
  );
}

function Container533() {
  return (
    <div className="h-[111px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Text120 />
      <Text121 />
      <Text122 />
      <Text123 />
      <Text124 />
      <Text125 />
      <Text126 />
      <Text127 />
      <Text128 />
      <Text129 />
      <Text130 />
    </div>
  );
}

function Container528() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[489px] items-start left-0 top-0 w-[505.328px]" data-name="Container">
      <Container529 />
      <Container531 />
      <Container532 />
      <Container533 />
    </div>
  );
}

function ImageErrorLoadingImage1() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Image (Error loading image)">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="bg-[#f3f4f6] h-[406.75px] relative shrink-0 w-[724.672px]" data-name="ImageWithFallback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ImageErrorLoadingImage1 />
      </div>
    </div>
  );
}

function Container534() {
  return (
    <div className="absolute bg-[#f8fafc] h-[408.75px] left-[553.33px] rounded-[16px] top-[40.13px] w-[726.672px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ProjectOverview1() {
  return (
    <div className="h-[489px] relative shrink-0 w-[1280px]" data-name="ProjectOverview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container528 />
        <Container534 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[745px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <ProjectOverview1 />
    </div>
  );
}

function Heading51() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">핵심 기능</p>
    </div>
  );
}

function Text131() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading52() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">소셜 로그인</p>
    </div>
  );
}

function Paragraph104() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">애플·구글 간편 로그인, JWT 기반 인증 및 자동 로그인</p>
    </div>
  );
}

function Container537() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[293.734px]" data-name="Container">
      <Heading52 />
      <Paragraph104 />
    </div>
  );
}

function Container536() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text131 />
      <Container537 />
    </div>
  );
}

function Text132() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading53() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">링크 저장</p>
    </div>
  );
}

function Paragraph105() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">웹페이지 링크 저장 시 제목·썸네일 자동 파싱, 카테고리별 관리</p>
    </div>
  );
}

function Container539() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[337.75px]" data-name="Container">
      <Heading53 />
      <Paragraph105 />
    </div>
  );
}

function Container538() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text132 />
      <Container539 />
    </div>
  );
}

function Text133() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading54() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">카테고리 생성·분류</p>
    </div>
  );
}

function Paragraph106() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">직접 카테고리를 생성하고 저장한 링크를 주제별로 체계적 관리</p>
    </div>
  );
}

function Container541() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[339.188px]" data-name="Container">
      <Heading54 />
      <Paragraph106 />
    </div>
  );
}

function Container540() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text133 />
      <Container541 />
    </div>
  );
}

function Text134() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading55() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">링크 검색</p>
    </div>
  );
}

function Paragraph107() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">제목, 카테고리, 저장 날짜 기준 필터링 및 검색</p>
    </div>
  );
}

function Container543() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[249.57px]" data-name="Container">
      <Heading55 />
      <Paragraph107 />
    </div>
  );
}

function Container542() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text134 />
      <Container543 />
    </div>
  );
}

function Text135() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading56() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">공유</p>
    </div>
  );
}

function Paragraph108() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">개별 링크는 앱 내 공유, 카테고리는 카카오톡으로 공유</p>
    </div>
  );
}

function Container545() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[294.383px]" data-name="Container">
      <Heading56 />
      <Paragraph108 />
    </div>
  );
}

function Container544() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text135 />
      <Container545 />
    </div>
  );
}

function Text136() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading57() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">링크 추천</p>
    </div>
  );
}

function Paragraph109() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">공개 카테고리 기반으로 다른 사용자에게 추천 및 발견</p>
    </div>
  );
}

function Container547() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[290.789px]" data-name="Container">
      <Heading57 />
      <Paragraph109 />
    </div>
  );
}

function Container546() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text136 />
      <Container547 />
    </div>
  );
}

function Text137() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading58() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">즐겨찾기·안 읽음 관리</p>
    </div>
  );
}

function Paragraph110() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">자주 보는 링크 고정, 미열람 링크 표시로 관리 효율화</p>
    </div>
  );
}

function Container549() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[285.797px]" data-name="Container">
      <Heading58 />
      <Paragraph110 />
    </div>
  );
}

function Container548() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text137 />
      <Container549 />
    </div>
  );
}

function Text138() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading59() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">미분류 링크 관리</p>
    </div>
  );
}

function Paragraph111() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">미분류 링크 모아 확인, 손쉬운 카테고리 이동</p>
    </div>
  );
}

function Container551() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[242.469px]" data-name="Container">
      <Heading59 />
      <Paragraph111 />
    </div>
  );
}

function Container550() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text138 />
      <Container551 />
    </div>
  );
}

function FeatureGrid1() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] h-[375px] relative shrink-0 w-full" data-name="FeatureGrid">
      <Container536 />
      <Container538 />
      <Container540 />
      <Container542 />
      <Container544 />
      <Container546 />
      <Container548 />
      <Container550 />
    </div>
  );
}

function Container535() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[423px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading51 />
      <FeatureGrid1 />
    </div>
  );
}

function Heading60() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#0f172b] text-[24px] top-[-0.5px] whitespace-nowrap">Technical Decisions</p>
    </div>
  );
}

function Paragraph112() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">대규모 협업을 위한 구조 설계와 운영 이슈 해결 과정</p>
    </div>
  );
}

function Container553() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[41px] top-[41px] w-[1198px]" data-name="Container">
      <Heading60 />
      <Paragraph112 />
    </div>
  );
}

function Text139() {
  return <div className="absolute bg-[#155dfc] h-[24px] left-0 rounded-[16777200px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading61() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text139 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[16px] not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">Modular Architecture 도입</p>
    </div>
  );
}

function Heading62() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[231.172px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">모듈화 도입 동기 — 개발 효율성 개선</p>
    </div>
  );
}

function Text140() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[239.17px] rounded-[16777200px] top-[0.75px] w-[105.633px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Productivity</p>
    </div>
  );
}

function Container556() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading62 />
      <Text140 />
    </div>
  );
}

function Container555() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container556 />
    </div>
  );
}

function Icon97() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container560() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon97 />
      </div>
    </div>
  );
}

function Container561() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container559() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container560 />
        <Container561 />
      </div>
    </div>
  );
}

function Paragraph113() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[1104px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[1101px]">프로젝트 개발이 고도화됨에 따라, 특정 기능을 검증하기 위해 여러 단계를 거쳐야 하고, 하나의 기능을 점검할 때에도 전체 프로젝트를 빌드해야 하는 상황이었습니다. 규모가 커질수록 보다 체계적인 구조가 필요해졌습니다.</p>
    </div>
  );
}

function Container562() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph113 />
      </div>
    </div>
  );
}

function Container558() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container559 />
      <Container562 />
    </div>
  );
}

function Icon98() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container565() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon98 />
      </div>
    </div>
  );
}

function Container566() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container564() {
  return (
    <div className="h-[302.25px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container565 />
        <Container566 />
      </div>
    </div>
  );
}

function Icon99() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container571() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon99 />
      </div>
    </div>
  );
}

function Container572() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container570() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container571 />
        <Container572 />
      </div>
    </div>
  );
}

function Paragraph114() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1054px]">먼저 빌드 시간이 긴 근본 원인을 살펴보니, 하나의 기능만 확인하려 해도 프로젝트 전체가 빌드 대상에 포함되는 구조에서 기인한다는 점을 파악했습니다. 기능별로 빌드 범위를 분리할 수 있다면 검증 속도를 크게 줄일 수 있겠다고 생각했습니다.</p>
    </div>
  );
}

function Container573() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph114 />
      </div>
    </div>
  );
}

function Container569() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container570 />
      <Container573 />
    </div>
  );
}

function Icon100() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container576() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon100 />
      </div>
    </div>
  );
}

function Container577() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container575() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container576 />
        <Container577 />
      </div>
    </div>
  );
}

function Paragraph115() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1058px]">단순히 디렉토리를 나누는 것만으로는 코드 간 접근 제한이 없어, 개발자가 의도치 않게 다른 기능의 코드를 참조하는 과제가 여전히 남아 있었습니다. 물리적인 경계가 없으면 관심사 분리가 코드 컨벤션에만 의존하게 됩니다.</p>
    </div>
  );
}

function Container578() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#e17100] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">한계 발견</p>
        <Paragraph115 />
      </div>
    </div>
  );
}

function Container574() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container575 />
      <Container578 />
    </div>
  );
}

function Icon101() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container581() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon101 />
      </div>
    </div>
  );
}

function Container580() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container581 />
      </div>
    </div>
  );
}

function Paragraph116() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1062px]">기능과 계층을 독립된 모듈 단위로 구성하면, 빌드 범위 제한과 접근 제어를 동시에 달성할 수 있다고 결론 내렸습니다. 각 모듈의 책임이 명확해지고, 의존성을 단방향으로 유지하면 구조적 일관성도 확보할 수 있습니다.</p>
    </div>
  );
}

function Container582() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph116 />
      </div>
    </div>
  );
}

function Container579() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container580 />
      <Container582 />
    </div>
  );
}

function Container568() {
  return (
    <div className="absolute content-stretch flex flex-col h-[248.25px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container569 />
      <Container574 />
      <Container579 />
    </div>
  );
}

function Container567() {
  return (
    <div className="flex-[1_0_0] h-[302.25px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container568 />
      </div>
    </div>
  );
}

function Container563() {
  return (
    <div className="content-stretch flex gap-[12px] h-[302.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Container564 />
      <Container567 />
    </div>
  );
}

function Icon102() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container585() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon102 />
      </div>
    </div>
  );
}

function Container586() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container584() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container585 />
        <Container586 />
      </div>
    </div>
  );
}

function Paragraph117() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[836.602px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">9개 주요 기능을 독립된 모듈로 분리하고, 모듈 간 의존성을 단방향으로 유지하며, 재사용성이 높을수록 아래 배치하는 계층 전략을 수립했습니다.</p>
    </div>
  );
}

function Container587() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[836.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph117 />
      </div>
    </div>
  );
}

function Container583() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container584 />
      <Container587 />
    </div>
  );
}

function Icon103() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container590() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon103 />
      </div>
    </div>
  );
}

function Container589() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container590 />
      </div>
    </div>
  );
}

function Paragraph118() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[649.219px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">기능별 독립 빌드·테스트가 가능해져 개발 속도가 향상되었고, 코드의 재사용성과 구조적 일관성을 확보했습니다.</p>
    </div>
  );
}

function Container591() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[649.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph118 />
      </div>
    </div>
  );
}

function Container588() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container589 />
      <Container591 />
    </div>
  );
}

function Container557() {
  return (
    <div className="absolute content-stretch flex flex-col h-[523.75px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container558 />
      <Container563 />
      <Container583 />
      <Container588 />
    </div>
  );
}

function ProblemSolvingBlock9() {
  return (
    <div className="bg-white h-[630.75px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container555 />
        <Container557 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading63() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[268.508px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">Tuist 도입 — 물리적 의존성 분리와 자동화</p>
    </div>
  );
}

function Text141() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[276.51px] rounded-[16777200px] top-[0.75px] w-[96.875px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Automation</p>
    </div>
  );
}

function Container593() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading63 />
      <Text141 />
    </div>
  );
}

function Container592() {
  return (
    <div className="bg-gradient-to-r from-[#f8fafc] h-[57px] relative shrink-0 to-[rgba(239,246,255,0.3)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container593 />
      </div>
    </div>
  );
}

function Icon104() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container598() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon104 />
      </div>
    </div>
  );
}

function Container599() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container597() {
  return (
    <div className="h-[121.125px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container598 />
        <Container599 />
      </div>
    </div>
  );
}

function Paragraph119() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[611px]">코드 레벨 분리만으로는 모든 코드에 접근이 가능해 의도치 않은 참조나 책임 경계가 모호해질 수 있었습니다. 또한 9개 모듈의 워크스페이스, 프로젝트, SPM 패키지, 디렉터리 구조를 일일이 수동으로 구성하는 것은 상당한 리소스가 필요했습니다.</p>
    </div>
  );
}

function Container600() {
  return (
    <div className="flex-[1_0_0] h-[121.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph119 />
      </div>
    </div>
  );
}

function Container596() {
  return (
    <div className="content-stretch flex gap-[12px] h-[121.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container597 />
      <Container600 />
    </div>
  );
}

function Icon105() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container603() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon105 />
      </div>
    </div>
  );
}

function Container604() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container602() {
  return (
    <div className="h-[326.625px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container603 />
        <Container604 />
      </div>
    </div>
  );
}

function Icon106() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container609() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon106 />
      </div>
    </div>
  );
}

function Container610() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container608() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container609 />
        <Container610 />
      </div>
    </div>
  );
}

function Paragraph120() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[576px]">Xcode의 타겟 기반 분리를 활용하면 접근 범위를 물리적으로 제한할 수 있고, public/internal 접근 제어자를 통해 모듈 간 경계를 강제할 수 있습니다.</p>
    </div>
  );
}

function Container611() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph120 />
      </div>
    </div>
  );
}

function Container607() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container608 />
      <Container611 />
    </div>
  );
}

function Icon107() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container614() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon107 />
      </div>
    </div>
  );
}

function Container615() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container613() {
  return (
    <div className="h-[111.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container614 />
        <Container615 />
      </div>
    </div>
  );
}

function Paragraph121() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[581px]">그러나 9개 모듈 각각에 대해 워크스페이스, 프로젝트 파일, SPM 의존성, 디렉터리 구조를 수동으로 설정하는 것은 반복적이고 정확성 유지에 주의가 필요한 작업이었습니다. 모듈이 추가될 때마다 이 작업량이 누적됩니다.</p>
    </div>
  );
}

function Container616() {
  return (
    <div className="flex-[1_0_0] h-[111.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#e17100] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">한계 발견</p>
        <Paragraph121 />
      </div>
    </div>
  );
}

function Container612() {
  return (
    <div className="content-stretch flex gap-[10px] h-[111.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container613 />
      <Container616 />
    </div>
  );
}

function Icon108() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pdc43e70} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.pab3a610} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M3.5 10.5H8.5" id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M6 1.5V10.5" id="Vector_4" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2de32600} id="Vector_5" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container619() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon108 />
      </div>
    </div>
  );
}

function Container618() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container619 />
      </div>
    </div>
  );
}

function Paragraph122() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[580px]">프로젝트 생성을 코드로 자동화할 수 있는 도구를 탐색했고, Swift 코드 기반으로 프로젝트 구조를 선언적으로 정의할 수 있는 Tuist가 이 요구에 가장 부합한다고 판단했습니다.</p>
    </div>
  );
}

function Container620() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#2b7fff] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">대안 비교</p>
        <Paragraph122 />
      </div>
    </div>
  );
}

function Container617() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container618 />
      <Container620 />
    </div>
  );
}

function Container606() {
  return (
    <div className="absolute content-stretch flex flex-col h-[272.625px] items-start left-0 top-[34px] w-[615.664px]" data-name="Container">
      <Container607 />
      <Container612 />
      <Container617 />
    </div>
  );
}

function Container605() {
  return (
    <div className="flex-[1_0_0] h-[326.625px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container606 />
      </div>
    </div>
  );
}

function Container601() {
  return (
    <div className="content-stretch flex gap-[12px] h-[326.625px] items-start relative shrink-0 w-full" data-name="Container">
      <Container602 />
      <Container605 />
    </div>
  );
}

function Icon109() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container623() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon109 />
      </div>
    </div>
  );
}

function Container624() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container622() {
  return (
    <div className="h-[129.125px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container623 />
        <Container624 />
      </div>
    </div>
  );
}

function Paragraph123() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">Tuist를 도입하여 모듈을 열거형(Enum)으로 정의하고, 공통 설정을 Swift 메서드로 추상화했습니다.</p>
    </div>
  );
}

function Paragraph124() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">Tuist Template을 활용해 디렉터리와 필수 파일 구성을 자동화했습니다.</p>
    </div>
  );
}

function Paragraph125() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">tuist graph 명령어로 전체 모듈 구조와 의존 관계를 시각적으로 확인하여 구조를 점검했습니다.</p>
    </div>
  );
}

function Container626() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[81.125px] items-start left-0 top-[28px] w-[583.609px]" data-name="Container">
      <Paragraph123 />
      <Paragraph124 />
      <Paragraph125 />
    </div>
  );
}

function Container625() {
  return (
    <div className="h-[129.125px] relative shrink-0 w-[583.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Container626 />
      </div>
    </div>
  );
}

function Container621() {
  return (
    <div className="content-stretch flex gap-[12px] h-[129.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container622 />
      <Container625 />
    </div>
  );
}

function Icon110() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container629() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon110 />
      </div>
    </div>
  );
}

function Container628() {
  return (
    <div className="h-[76.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[44.75px] relative size-full">
        <Container629 />
      </div>
    </div>
  );
}

function Paragraph126() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[609px]">새 모듈 추가 시 열거형 케이스 한 줄 추가와 명령어 한 줄이면 모듈이 자동 완성되는 구조를 구축했습니다. 협업 시에도 일관된 구조와 책임 분리가 자연스럽게 유지되었습니다.</p>
    </div>
  );
}

function Container630() {
  return (
    <div className="flex-[1_0_0] h-[76.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph126 />
      </div>
    </div>
  );
}

function Container627() {
  return (
    <div className="content-stretch flex gap-[12px] h-[76.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container628 />
      <Container630 />
    </div>
  );
}

function Container595() {
  return (
    <div className="absolute content-stretch flex flex-col h-[653.625px] items-start left-[24px] top-[24px] w-[659.664px]" data-name="Container">
      <Container596 />
      <Container601 />
      <Container621 />
      <Container627 />
    </div>
  );
}

function Paragraph127() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#90a1b9] text-[11px] top-[-0.5px] tracking-[0.55px] uppercase whitespace-nowrap">Tuist Module Graph</p>
    </div>
  );
}

function ImageErrorLoadingImage2() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Image (Error loading image)">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container632() {
  return (
    <div className="absolute content-stretch flex h-[88px] items-center justify-center left-px top-px w-[462.328px]" data-name="Container">
      <ImageErrorLoadingImage2 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="bg-[#f3f4f6] h-[90px] relative rounded-[10px] shrink-0 w-full" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container632 />
    </div>
  );
}

function Paragraph128() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[232.59px] not-italic text-[#90a1b9] text-[10px] text-center top-[0.5px] whitespace-nowrap">tuist graph로 생성된 모듈 의존 관계도</p>
    </div>
  );
}

function PokitSection3() {
  return (
    <div className="flex-[1_0_0] h-[137.5px] min-h-px min-w-px relative" data-name="PokitSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph127 />
        <ImageWithFallback2 />
        <Paragraph128 />
      </div>
    </div>
  );
}

function Container631() {
  return (
    <div className="absolute content-stretch flex h-[653.625px] items-start left-[707.66px] pt-[8px] top-[24px] w-[464.328px]" data-name="Container">
      <PokitSection3 />
    </div>
  );
}

function Container594() {
  return (
    <div className="h-[701.625px] relative shrink-0 w-full" data-name="Container">
      <Container595 />
      <Container631 />
    </div>
  );
}

function ProblemSolvingBlock10() {
  return (
    <div className="bg-white h-[760.625px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container592 />
          <Container594 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading64() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">모듈 구성 및 레이어 설계</p>
    </div>
  );
}

function Container633() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.8)] content-stretch flex flex-col h-[57px] items-start left-px pb-px pt-[16px] px-[24px] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Heading64 />
    </div>
  );
}

function Heading65() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[62.297px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">App 계층</p>
    </div>
  );
}

function Container635() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading65 />
    </div>
  );
}

function PokitSection4() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="PokitSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">최상위 실행 단위로 앱 생명주기 관리, 루트 뷰 구성 등 앱 전체의 흐름을 조율합니다.</p>
    </div>
  );
}

function TechItem8() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container635 />
        <PokitSection4 />
      </div>
    </div>
  );
}

function Heading66() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[88.461px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Feature 계층</p>
    </div>
  );
}

function Container636() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading66 />
    </div>
  );
}

function PokitSection5() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="PokitSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">로그인, 링크 저장, 검색 등 개별 기능 단위 모듈 집합입니다. 독립 실행 가능한 데모 앱 형태로 구성해 기능별 기기 테스트와 디버깅 효율을 높였습니다.</p>
    </div>
  );
}

function TechItem9() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container636 />
        <PokitSection5 />
      </div>
    </div>
  );
}

function Heading67() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[144.438px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Domain / DSKit 계층</p>
    </div>
  );
}

function Container637() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading67 />
    </div>
  );
}

function PokitSection6() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="PokitSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">서버 응답과 분리된 클라이언트 전용 데이터 모델 정의, 공통 디자인 시스템 컴포넌트 제공 계층입니다.</p>
    </div>
  );
}

function TechItem10() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container637 />
        <PokitSection6 />
      </div>
    </div>
  );
}

function Heading68() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[88.688px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">CoreKit 계층</p>
    </div>
  );
}

function Container638() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading68 />
    </div>
  );
}

function PokitSection7() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="PokitSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">네트워크 요청, DTO 정의 등 외부 의존성 연결을 담당하며, 독립적 구조로 재사용성을 높였습니다.</p>
    </div>
  );
}

function TechItem11() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container638 />
        <PokitSection7 />
      </div>
    </div>
  );
}

function Heading69() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[226.203px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Util / SharedThirdPartyLib 계층</p>
    </div>
  );
}

function Container639() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading69 />
    </div>
  );
}

function PokitSection8() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="PokitSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">범용 유틸리티, 확장, 외부 라이브러리 등 모든 모듈에서 참조 가능한 최하위 공통 계층입니다.</p>
    </div>
  );
}

function TechItem12() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container639 />
        <PokitSection8 />
      </div>
    </div>
  );
}

function Container634() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[351.875px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <TechItem8 />
      <TechItem9 />
      <TechItem10 />
      <TechItem11 />
      <TechItem12 />
    </div>
  );
}

function TechBlock2() {
  return (
    <div className="bg-white h-[458.875px] relative rounded-[14px] shrink-0 w-full" data-name="TechBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container633 />
        <Container634 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container554() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[1890.25px] items-start relative shrink-0 w-full" data-name="Container">
      <ProblemSolvingBlock9 />
      <ProblemSolvingBlock10 />
      <TechBlock2 />
    </div>
  );
}

function TechSection4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[2007.25px] items-start left-[41px] pt-[33px] top-[129px] w-[1198px]" data-name="TechSection">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Heading61 />
      <Container554 />
    </div>
  );
}

function Text142() {
  return <div className="absolute bg-[#155dfc] h-[24px] left-0 rounded-[16777200px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading70() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text142 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[16px] not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">URL 제목 및 썸네일 파싱 설계</p>
    </div>
  );
}

function Heading71() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[209.438px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">사이트별 User-Agent 요구 대응</p>
    </div>
  );
}

function Text143() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[217.44px] rounded-[16777200px] top-[0.75px] w-[132.695px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Troubleshooting</p>
    </div>
  );
}

function Container642() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading71 />
      <Text143 />
    </div>
  );
}

function Container641() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container642 />
    </div>
  );
}

function Icon111() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container646() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon111 />
      </div>
    </div>
  );
}

function Container647() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container645() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container646 />
        <Container647 />
      </div>
    </div>
  );
}

function Paragraph129() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[1004.914px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">대부분의 웹사이트는 OG(Open Graph) 태그를 통해 제목과 썸네일을 원활히 제공했지만, 일부 사이트에서는 요청 시 데이터가 정상적으로 반환되지 않는 현상이 있었습니다.</p>
    </div>
  );
}

function Container648() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[1004.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph129 />
      </div>
    </div>
  );
}

function Container644() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container645 />
      <Container648 />
    </div>
  );
}

function Icon112() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container651() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon112 />
      </div>
    </div>
  );
}

function Container652() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container650() {
  return (
    <div className="h-[191.125px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container651 />
        <Container652 />
      </div>
    </div>
  );
}

function Icon113() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1c92f080} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d="M10.5 10.5L8.35 8.35" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container657() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon113 />
      </div>
    </div>
  );
}

function Container658() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container656() {
  return (
    <div className="h-[62.375px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container657 />
        <Container658 />
      </div>
    </div>
  );
}

function Paragraph130() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">파싱이 원활하지 않은 사이트들을 수집하여 공통점을 분석해 보니, 특정 보안 정책을 적용하는 사이트에서 집중적으로 나타나는 것을 확인했습니다.</p>
    </div>
  );
}

function Container659() {
  return (
    <div className="flex-[1_0_0] h-[62.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">패턴 관찰</p>
        <Paragraph130 />
      </div>
    </div>
  );
}

function Container655() {
  return (
    <div className="content-stretch flex gap-[10px] h-[62.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container656 />
      <Container659 />
    </div>
  );
}

function Icon114() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2cad4200} id="Vector" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.6784 0.2745 1.0000)", strokeOpacity: "1" }} />
          <path d="M3.2265 7.5H8.7735" id="Vector_2" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.6784 0.2745 1.0000)", strokeOpacity: "1" }} />
          <path d="M4.25 1H7.75" id="Vector_3" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.6784 0.2745 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container662() {
  return (
    <div className="bg-[#faf5ff] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon114 />
      </div>
    </div>
  );
}

function Container661() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container662 />
      </div>
    </div>
  );
}

function Paragraph131() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1055px]">해당 사이트들이 User-Agent 헤더가 없는 요청을 봇으로 판단하여 제한하는 것이 아닌지 가설을 세우고, User-Agent를 명시하여 요청한 결과 정상 응답이 반환되는 것을 확인했습니다.</p>
    </div>
  );
}

function Container663() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#ad46ff] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">가설 검증</p>
        <Paragraph131 />
      </div>
    </div>
  );
}

function Container660() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container661 />
      <Container663 />
    </div>
  );
}

function Container654() {
  return (
    <div className="absolute content-stretch flex flex-col h-[137.125px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container655 />
      <Container660 />
    </div>
  );
}

function Container653() {
  return (
    <div className="flex-[1_0_0] h-[191.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container654 />
      </div>
    </div>
  );
}

function Container649() {
  return (
    <div className="content-stretch flex gap-[12px] h-[191.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container650 />
      <Container653 />
    </div>
  );
}

function Icon115() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container666() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon115 />
      </div>
    </div>
  );
}

function Container665() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container666 />
      </div>
    </div>
  );
}

function Paragraph132() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[411.367px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">User-Agent를 명시적으로 지정하여 요청하는 방식으로 대응했습니다.</p>
    </div>
  );
}

function Container667() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[411.367px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph132 />
      </div>
    </div>
  );
}

function Container664() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container665 />
      <Container667 />
    </div>
  );
}

function Container643() {
  return (
    <div className="absolute content-stretch flex flex-col h-[315.875px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container644 />
      <Container649 />
      <Container664 />
    </div>
  );
}

function ProblemSolvingBlock11() {
  return (
    <div className="bg-white h-[422.875px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container641 />
        <Container643 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading72() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[253.203px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">OG 태그 미지원 사이트 — UX 개선 제안</p>
    </div>
  );
}

function Text144() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[261.2px] rounded-[16777200px] top-[0.75px] w-[34.391px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">UX</p>
    </div>
  );
}

function Container669() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading72 />
      <Text144 />
    </div>
  );
}

function Container668() {
  return (
    <div className="bg-gradient-to-r from-[#f8fafc] h-[57px] relative shrink-0 to-[rgba(239,246,255,0.3)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container669 />
      </div>
    </div>
  );
}

function Icon116() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container674() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon116 />
      </div>
    </div>
  );
}

function Container675() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container673() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container674 />
        <Container675 />
      </div>
    </div>
  );
}

function Paragraph133() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[608px]">OG 태그를 지원하지 않는 사이트의 경우, 제목과 썸네일 정보를 파싱할 수 없어 링크 저장 UX가 아쉬워지는 상황이었습니다.</p>
    </div>
  );
}

function Container676() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph133 />
      </div>
    </div>
  );
}

function Container672() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container673 />
      <Container676 />
    </div>
  );
}

function Icon117() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container679() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon117 />
      </div>
    </div>
  );
}

function Container680() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container678() {
  return (
    <div className="h-[239.875px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container679 />
        <Container680 />
      </div>
    </div>
  );
}

function Icon118() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container685() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon118 />
      </div>
    </div>
  );
}

function Container686() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container684() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container685 />
        <Container686 />
      </div>
    </div>
  );
}

function Paragraph134() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[577px]">파싱 결과가 없을 때 이를 단순 오류로 처리하면 사용자가 해당 링크를 제대로 저장·관리할 수 없습니다. OG 태그 미지원은 외부 사이트의 특성이므로 클라이언트에서 직접 개선하기 어려운 영역입니다.</p>
    </div>
  );
}

function Container687() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph134 />
      </div>
    </div>
  );
}

function Container683() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container684 />
      <Container687 />
    </div>
  );
}

function Icon119() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container690() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon119 />
      </div>
    </div>
  );
}

function Container689() {
  return (
    <div className="h-[99.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[73.125px] pt-[2px] relative size-full">
        <Container690 />
      </div>
    </div>
  );
}

function Paragraph135() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[581px]">클라이언트에서 직접 개선하기 어려운 상황이라면, 파싱 결과가 없는 경우를 전제로 한 대안적 UX를 설계해야 한다고 판단했습니다. 사용자가 직접 제목을 입력하고 기본 썸네일을 자동 삽입하면 파싱 여부와 관계없이 일관된 저장 경험을 제공할 수 있습니다.</p>
    </div>
  );
}

function Container691() {
  return (
    <div className="flex-[1_0_0] h-[99.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph135 />
      </div>
    </div>
  );
}

function Container688() {
  return (
    <div className="content-stretch flex gap-[10px] h-[99.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container689 />
      <Container691 />
    </div>
  );
}

function Container682() {
  return (
    <div className="absolute content-stretch flex flex-col h-[185.875px] items-start left-0 top-[34px] w-[615.664px]" data-name="Container">
      <Container683 />
      <Container688 />
    </div>
  );
}

function Container681() {
  return (
    <div className="flex-[1_0_0] h-[239.875px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container682 />
      </div>
    </div>
  );
}

function Container677() {
  return (
    <div className="content-stretch flex gap-[12px] h-[239.875px] items-start relative shrink-0 w-full" data-name="Container">
      <Container678 />
      <Container681 />
    </div>
  );
}

function Icon120() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container694() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon120 />
      </div>
    </div>
  );
}

function Container695() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container693() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container694 />
        <Container695 />
      </div>
    </div>
  );
}

function Paragraph136() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[610px]">사용자가 직접 제목을 입력하고 기본 썸네일 이미지를 자동 삽입하는 UX 개선안을 PM에게 제안하여 적용했습니다.</p>
    </div>
  );
}

function Container696() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph136 />
      </div>
    </div>
  );
}

function Container692() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container693 />
      <Container696 />
    </div>
  );
}

function Icon121() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container699() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon121 />
      </div>
    </div>
  );
}

function Container698() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container699 />
      </div>
    </div>
  );
}

function Paragraph137() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[571.43px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">파싱이 불가능한 링크도 정상적으로 저장·관리할 수 있게 되어, 사용자 경험 저하를 최소화했습니다.</p>
    </div>
  );
}

function Container700() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[571.43px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph137 />
      </div>
    </div>
  );
}

function Container697() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container698 />
      <Container700 />
    </div>
  );
}

function Container671() {
  return (
    <div className="absolute content-stretch flex flex-col h-[485.75px] items-start left-[24px] top-[24px] w-[659.664px]" data-name="Container">
      <Container672 />
      <Container677 />
      <Container692 />
      <Container697 />
    </div>
  );
}

function Paragraph138() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#90a1b9] text-[11px] top-[-0.5px] tracking-[0.55px] uppercase whitespace-nowrap">OG Tag Fallback UX</p>
    </div>
  );
}

function Icon122() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M10.5 3.5L3.5 10.5" id="Vector" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 1.0000 0.3922 0.4039)", strokeOpacity: "1" }} />
          <path d="M3.5 3.5L10.5 10.5" id="Vector_2" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 1.0000 0.3922 0.4039)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text145() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[90.32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#fb2c36] text-[11px] top-[-0.5px] whitespace-nowrap">Before — 파싱 실패</p>
      </div>
    </div>
  );
}

function Container704() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon122 />
      <Text145 />
    </div>
  );
}

function Icon123() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #FFA2A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 1.0000 0.6353 0.6353)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2fe1fe40} id="Vector_2" stroke="var(--stroke-0, #FFA2A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 1.0000 0.6353 0.6353)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2c494540} id="Vector_3" stroke="var(--stroke-0, #FFA2A2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 1.0000 0.6353 0.6353)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container706() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon123 />
      </div>
    </div>
  );
}

function Container708() {
  return <div className="absolute bg-[#ffe2e2] h-[10px] left-0 rounded-[4px] top-0 w-[96px]" data-name="Container" />;
}

function Container709() {
  return <div className="absolute bg-[rgba(255,226,226,0.6)] h-[8px] left-0 rounded-[4px] top-[14px] w-[64px]" data-name="Container" />;
}

function Container707() {
  return (
    <div className="h-[40px] relative shrink-0 w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container708 />
        <Container709 />
      </div>
    </div>
  );
}

function Container705() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container706 />
      <Container707 />
    </div>
  );
}

function Container703() {
  return (
    <div className="bg-[rgba(254,242,242,0.5)] h-[90.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe2e2] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container704 />
        <Container705 />
      </div>
    </div>
  );
}

function Icon124() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 3.33333V12.6667" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d={svgPaths.pc0e6f00} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container710() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Icon124 />
    </div>
  );
}

function Icon125() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text146() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[100.523px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#00a63e] text-[11px] top-[-0.5px] whitespace-nowrap">After — 대안 UX 제안</p>
      </div>
    </div>
  );
}

function Container712() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon125 />
      <Text146 />
    </div>
  );
}

function Icon126() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3199)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0196 0.8745 0.4471)", strokeOpacity: "1" }} />
          <path d={svgPaths.p14d10c00} id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0196 0.8745 0.4471)", strokeOpacity: "1" }} />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0196 0.8745 0.4471)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3199">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container714() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon126 />
      </div>
    </div>
  );
}

function Container717() {
  return <div className="bg-[#b9f8cf] flex-[1_0_0] h-[10px] min-h-px min-w-px rounded-[4px]" data-name="Container" />;
}

function Text147() {
  return (
    <div className="bg-[#dcfce7] h-[12px] relative rounded-[4px] shrink-0 w-[37.664px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[12px] left-[4px] not-italic text-[#00c950] text-[8px] top-0 whitespace-nowrap">직접 입력</p>
      </div>
    </div>
  );
}

function Container716() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[12px] items-center left-0 top-0 w-[121.664px]" data-name="Container">
      <Container717 />
      <Text147 />
    </div>
  );
}

function Container718() {
  return <div className="absolute bg-[#dcfce7] h-[8px] left-0 rounded-[4px] top-[16px] w-[64px]" data-name="Container" />;
}

function Container715() {
  return (
    <div className="h-[40px] relative shrink-0 w-[121.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container716 />
        <Container718 />
      </div>
    </div>
  );
}

function Container713() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container714 />
      <Container715 />
    </div>
  );
}

function Container711() {
  return (
    <div className="bg-[rgba(240,253,244,0.5)] h-[90.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container712 />
        <Container713 />
      </div>
    </div>
  );
}

function Container702() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[221px] items-start relative shrink-0 w-full" data-name="Container">
      <Container703 />
      <Container710 />
      <Container711 />
    </div>
  );
}

function Container719() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[211.6px] not-italic text-[#90a1b9] text-[10px] text-center top-[9.5px] whitespace-nowrap">기본 썸네일 자동 삽입 + 사용자 제목 입력</p>
    </div>
  );
}

function OgTagFallbackPlaceholder() {
  return (
    <div className="bg-white flex-[1_0_0] h-[335.5px] min-h-px min-w-px relative rounded-[14px]" data-name="OGTagFallbackPlaceholder">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Paragraph138 />
        <Container702 />
        <Container719 />
      </div>
    </div>
  );
}

function Container701() {
  return (
    <div className="absolute content-stretch flex h-[485.75px] items-start left-[707.66px] pt-[8px] top-[24px] w-[464.328px]" data-name="Container">
      <OgTagFallbackPlaceholder />
    </div>
  );
}

function Container670() {
  return (
    <div className="h-[533.75px] relative shrink-0 w-full" data-name="Container">
      <Container671 />
      <Container701 />
    </div>
  );
}

function ProblemSolvingBlock12() {
  return (
    <div className="bg-white h-[592.75px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container668 />
          <Container670 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading73() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[363px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">인스타그램 썸네일 만료 이슈 — 탐정처럼 추적한 원인 분석</p>
    </div>
  );
}

function Text148() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[371px] rounded-[16777200px] top-[0.75px] w-[75.461px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Analysis</p>
    </div>
  );
}

function Container721() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading73 />
      <Text148 />
    </div>
  );
}

function Container720() {
  return (
    <div className="bg-gradient-to-r from-[#f8fafc] h-[57px] relative shrink-0 to-[rgba(239,246,255,0.3)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container721 />
      </div>
    </div>
  );
}

function Icon127() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container726() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon127 />
      </div>
    </div>
  );
}

function Container727() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container725() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container726 />
        <Container727 />
      </div>
    </div>
  );
}

function Paragraph139() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[607px]">일부 사용자가 저장한 링크의 썸네일이 표시되지 않는 현상이 보고되었습니다. 단순한 네트워크 이슈가 아닌, 특정 패턴이 있을 것이라 직감했습니다.</p>
    </div>
  );
}

function Container728() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph139 />
      </div>
    </div>
  );
}

function Container724() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container725 />
      <Container728 />
    </div>
  );
}

function Icon128() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container731() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon128 />
      </div>
    </div>
  );
}

function Container732() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container730() {
  return (
    <div className="h-[351px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container731 />
        <Container732 />
      </div>
    </div>
  );
}

function Icon129() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1c92f080} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d="M10.5 10.5L8.35 8.35" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container737() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon129 />
      </div>
    </div>
  );
}

function Container738() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container736() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container737 />
        <Container738 />
      </div>
    </div>
  );
}

function Paragraph140() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[568px]">먼저 썸네일이 표시되지 않는 링크들의 공통점을 분류해 봤습니다. 네이버·유튜브 등은 정상이었고, 인스타그램 URL에서만 집중적으로 나타나는 패턴을 발견했습니다.</p>
    </div>
  );
}

function Container739() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">패턴 관찰</p>
        <Paragraph140 />
      </div>
    </div>
  );
}

function Container735() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container736 />
      <Container739 />
    </div>
  );
}

function Icon130() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2cad4200} id="Vector" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.6784 0.2745 1.0000)", strokeOpacity: "1" }} />
          <path d="M3.2265 7.5H8.7735" id="Vector_2" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.6784 0.2745 1.0000)", strokeOpacity: "1" }} />
          <path d="M4.25 1H7.75" id="Vector_3" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.6784 0.2745 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container742() {
  return (
    <div className="bg-[#faf5ff] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon130 />
      </div>
    </div>
  );
}

function Container743() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container741() {
  return (
    <div className="h-[111.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container742 />
        <Container743 />
      </div>
    </div>
  );
}

function Paragraph141() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[578px]">인스타그램 특유의 문제라면 시간 경과와 관련이 있을 수 있다고 가정하고, 동일한 URL의 응답을 매일 기록하는 간이 모니터링을 수행했습니다. 그 결과, 저장 후 3~4일이 지나면 일관되게 이미지가 만료되는 것을 확인했습니다.</p>
    </div>
  );
}

function Container744() {
  return (
    <div className="flex-[1_0_0] h-[111.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#ad46ff] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">가설 검증</p>
        <Paragraph141 />
      </div>
    </div>
  );
}

function Container740() {
  return (
    <div className="content-stretch flex gap-[10px] h-[111.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container741 />
      <Container744 />
    </div>
  );
}

function Icon131() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container747() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon131 />
      </div>
    </div>
  );
}

function Container746() {
  return (
    <div className="h-[99.125px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[73.125px] pt-[2px] relative size-full">
        <Container747 />
      </div>
    </div>
  );
}

function Paragraph142() {
  return (
    <div className="absolute h-[73.125px] left-0 top-[26px] w-[581.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[577px]">{`공식 문서에서는 만료 정책을 찾을 수 없었지만, 모니터링 데이터가 충분히 일관되어 '썸네일 URL이 약 3~4일 후 만료된다'는 가설을 수립했습니다. 이 가설을 기반으로 만료 전 재파싱하는 갱신 로직을 설계하는 방향으로 넘어갔습니다.`}</p>
    </div>
  );
}

function Container748() {
  return (
    <div className="flex-[1_0_0] h-[99.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph142 />
      </div>
    </div>
  );
}

function Container745() {
  return (
    <div className="content-stretch flex gap-[10px] h-[99.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container746 />
      <Container748 />
    </div>
  );
}

function Container734() {
  return (
    <div className="absolute content-stretch flex flex-col h-[297px] items-start left-0 top-[34px] w-[615.664px]" data-name="Container">
      <Container735 />
      <Container740 />
      <Container745 />
    </div>
  );
}

function Container733() {
  return (
    <div className="flex-[1_0_0] h-[351px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container734 />
      </div>
    </div>
  );
}

function Container729() {
  return (
    <div className="content-stretch flex gap-[12px] h-[351px] items-start relative shrink-0 w-full" data-name="Container">
      <Container730 />
      <Container733 />
    </div>
  );
}

function Icon132() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container751() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon132 />
      </div>
    </div>
  );
}

function Container752() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container750() {
  return (
    <div className="h-[173.875px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container751 />
        <Container752 />
      </div>
    </div>
  );
}

function Paragraph143() {
  return (
    <div className="h-[48.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[613px]">JWT 토큰의 발급-만료-갱신 흐름에 착안하여 재파싱 로직을 설계했습니다. 썸네일 조회 실패 시 URL에서 새 이미지를 자동으로 파싱해 갱신하도록 구성했습니다.</p>
    </div>
  );
}

function Paragraph144() {
  return (
    <div className="h-[73.125px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[614px]">다만 사용자 데이터의 썸네일 URL을 갱신하지 않으면 만료된 URL을 계속 조회하게 되는 구조적 개선 포인트를 발견하여, 새로 파싱된 URL을 서버에 갱신하는 API를 서버 개발자에게 제안하고 협업을 진행했습니다.</p>
    </div>
  );
}

function Container754() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[125.875px] items-start left-0 top-[28px] w-[615.664px]" data-name="Container">
      <Paragraph143 />
      <Paragraph144 />
    </div>
  );
}

function Container753() {
  return (
    <div className="flex-[1_0_0] h-[173.875px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Container754 />
      </div>
    </div>
  );
}

function Container749() {
  return (
    <div className="content-stretch flex gap-[12px] h-[173.875px] items-start relative shrink-0 w-full" data-name="Container">
      <Container750 />
      <Container753 />
    </div>
  );
}

function Icon133() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container757() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon133 />
      </div>
    </div>
  );
}

function Container756() {
  return (
    <div className="h-[76.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[44.75px] relative size-full">
        <Container757 />
      </div>
    </div>
  );
}

function Paragraph145() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[615.664px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[607px]">썸네일 정보를 안정적으로 유지하면서도, 불필요한 재요청과 중복 파싱을 최소화한 자동 갱신 구조를 완성했습니다. 사용자는 별도 조작 없이 항상 유효한 썸네일을 확인할 수 있습니다.</p>
    </div>
  );
}

function Container758() {
  return (
    <div className="flex-[1_0_0] h-[76.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph145 />
      </div>
    </div>
  );
}

function Container755() {
  return (
    <div className="content-stretch flex gap-[12px] h-[76.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container756 />
      <Container758 />
    </div>
  );
}

function Container723() {
  return (
    <div className="absolute content-stretch flex flex-col h-[698.375px] items-start left-[24px] top-[24px] w-[659.664px]" data-name="Container">
      <Container724 />
      <Container729 />
      <Container749 />
      <Container755 />
    </div>
  );
}

function Paragraph146() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#90a1b9] text-[11px] top-[-0.5px] tracking-[0.55px] uppercase whitespace-nowrap">Thumbnail Refresh Flow</p>
    </div>
  );
}

function Icon134() {
  return (
    <div className="absolute left-[54.72px] size-[14px] top-[9px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Paragraph147() {
  return (
    <div className="absolute h-[15px] left-[9px] top-[25px] w-[105.445px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[15px] left-[53.07px] not-italic text-[#bb4d00] text-[10px] text-center top-[0.5px] whitespace-nowrap">매일 모니터링</p>
    </div>
  );
}

function Container762() {
  return (
    <div className="bg-[#fffbeb] flex-[1_0_0] h-[49px] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon134 />
        <Paragraph147 />
      </div>
    </div>
  );
}

function Icon135() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Icon136() {
  return (
    <div className="absolute left-[54.72px] size-[14px] top-[9px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_3291)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3291">
            <rect fill="white" height="14" style={{ fill: "white", fillOpacity: "1" }} width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph148() {
  return (
    <div className="absolute h-[15px] left-[9px] top-[25px] w-[105.445px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[15px] left-[53.02px] not-italic text-[#bb4d00] text-[10px] text-center top-[0.5px] whitespace-nowrap">3~4일 후 만료</p>
    </div>
  );
}

function Container763() {
  return (
    <div className="bg-[#fffbeb] flex-[1_0_0] h-[49px] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon136 />
        <Paragraph148 />
      </div>
    </div>
  );
}

function Icon137() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Icon138() {
  return (
    <div className="absolute left-[54.72px] size-[14px] top-[9px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3ba1200} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M7 5.25V7.58333" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M7 9.91667H7.00583" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Paragraph149() {
  return (
    <div className="absolute h-[15px] left-[9px] top-[25px] w-[105.445px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[15px] left-[53.21px] not-italic text-[#bb4d00] text-[10px] text-center top-[0.5px] whitespace-nowrap">가설 수립</p>
    </div>
  );
}

function Container764() {
  return (
    <div className="bg-[#fffbeb] flex-[1_0_0] h-[49px] min-h-px min-w-px relative rounded-[10px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon138 />
        <Paragraph149 />
      </div>
    </div>
  );
}

function Container761() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[49px] items-center left-0 pr-[-0.008px] top-[24px] w-[422.328px]" data-name="Container">
      <Container762 />
      <Icon135 />
      <Container763 />
      <Icon137 />
      <Container764 />
    </div>
  );
}

function Container760() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[15px] left-0 not-italic text-[#fe9a00] text-[10px] top-[5px] tracking-[0.5px] uppercase whitespace-nowrap">원인 분석</p>
      <Container761 />
    </div>
  );
}

function Icon139() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 2.91667V11.0833" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d={svgPaths.p10793100} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container765() {
  return (
    <div className="content-stretch flex h-[14px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Icon139 />
    </div>
  );
}

function Text149() {
  return (
    <div className="bg-[#e2e8f0] relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#62748e] text-[8px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Text150() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[72.07px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#45556c] text-[11px] top-[-0.5px] whitespace-nowrap">썸네일 조회 시도</p>
      </div>
    </div>
  );
}

function Container768() {
  return (
    <div className="bg-[#f8fafc] h-[34.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[9px] pr-px py-px relative size-full">
          <Text149 />
          <Text150 />
        </div>
      </div>
    </div>
  );
}

function Icon140() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M6 2.5V9.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d="M9.5 6L6 9.5L2.5 6" id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container769() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon140 />
    </div>
  );
}

function Text151() {
  return (
    <div className="bg-[#ffc9c9] relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#fb2c36] text-[8px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Text152() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[91.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#e7000b] text-[11px] top-[-0.5px] whitespace-nowrap">조회 실패 감지 (만료)</p>
      </div>
    </div>
  );
}

function Container770() {
  return (
    <div className="bg-[#fef2f2] h-[34.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[9px] pr-px py-px relative size-full">
          <Text151 />
          <Text152 />
        </div>
      </div>
    </div>
  );
}

function Icon141() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M6 2.5V9.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d="M9.5 6L6 9.5L2.5 6" id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container771() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon141 />
    </div>
  );
}

function Text153() {
  return (
    <div className="bg-[#bedbff] relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#2b7fff] text-[8px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Text154() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[135.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#155dfc] text-[11px] top-[-0.5px] whitespace-nowrap">URL에서 새 썸네일 자동 재파싱</p>
      </div>
    </div>
  );
}

function Container772() {
  return (
    <div className="bg-[#eff6ff] h-[34.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[9px] pr-px py-px relative size-full">
          <Text153 />
          <Text154 />
        </div>
      </div>
    </div>
  );
}

function Icon142() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M6 2.5V9.5" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
          <path d="M9.5 6L6 9.5L2.5 6" id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.7922 0.8353 0.8863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container773() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Icon142 />
    </div>
  );
}

function Text155() {
  return (
    <div className="bg-[#b9f8cf] relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#00c950] text-[8px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Text156() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[143.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#00a63e] text-[11px] top-[-0.5px] whitespace-nowrap">서버에 갱신 URL 저장 (API 협업)</p>
      </div>
    </div>
  );
}

function Container774() {
  return (
    <div className="bg-[#f0fdf4] h-[34.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[9px] pr-px py-px relative size-full">
          <Text155 />
          <Text156 />
        </div>
      </div>
    </div>
  );
}

function Container767() {
  return (
    <div className="absolute content-stretch flex flex-col h-[186px] items-start left-0 top-[24px] w-[422.328px]" data-name="Container">
      <Container768 />
      <Container769 />
      <Container770 />
      <Container771 />
      <Container772 />
      <Container773 />
      <Container774 />
    </div>
  );
}

function Container766() {
  return (
    <div className="h-[210px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[15px] left-0 not-italic text-[#2b7fff] text-[10px] top-[5px] tracking-[0.5px] uppercase whitespace-nowrap">JWT 착안 재파싱 로직</p>
      <Container767 />
    </div>
  );
}

function Container775() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[15px] left-[211.25px] not-italic text-[#90a1b9] text-[10px] text-center top-[9.5px] whitespace-nowrap">자동 감지 → 재파싱 → 서버 갱신 선순환</p>
    </div>
  );
}

function ThumbnailRefreshFlowDiagram() {
  return (
    <div className="bg-white flex-[1_0_0] h-[443.5px] min-h-px min-w-px relative rounded-[14px]" data-name="ThumbnailRefreshFlowDiagram">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Paragraph146 />
        <Container760 />
        <Container765 />
        <Container766 />
        <Container775 />
      </div>
    </div>
  );
}

function Container759() {
  return (
    <div className="absolute content-stretch flex h-[698.375px] items-start left-[707.66px] pt-[8px] top-[24px] w-[464.328px]" data-name="Container">
      <ThumbnailRefreshFlowDiagram />
    </div>
  );
}

function Container722() {
  return (
    <div className="h-[746.375px] relative shrink-0 w-full" data-name="Container">
      <Container723 />
      <Container759 />
    </div>
  );
}

function ProblemSolvingBlock13() {
  return (
    <div className="bg-white h-[805.375px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container720 />
          <Container722 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container640() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[1861px] items-start relative shrink-0 w-full" data-name="Container">
      <ProblemSolvingBlock11 />
      <ProblemSolvingBlock12 />
      <ProblemSolvingBlock13 />
    </div>
  );
}

function TechSection5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1978px] items-start left-[41px] pt-[33px] top-[2136.25px] w-[1198px]" data-name="TechSection">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Heading70 />
      <Container640 />
    </div>
  );
}

function Container552() {
  return (
    <div className="bg-white h-[4155.25px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container553 />
      <TechSection4 />
      <TechSection5 />
    </div>
  );
}

function PokitSection2() {
  return (
    <div className="h-[4626.25px] relative shrink-0 w-[1280px]" data-name="PokitSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start relative size-full">
        <Container535 />
        <Container552 />
      </div>
    </div>
  );
}

function Section6() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[4818.25px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <PokitSection2 />
    </div>
  );
}

function Container778() {
  return (
    <div className="absolute bg-[#0f172b] h-[24px] left-0 rounded-[16777200px] top-[1.5px] w-[82.32px]" data-name="Container">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-[12px] not-italic text-[12px] text-white top-[3.5px] tracking-[0.6px] uppercase whitespace-nowrap">Project</p>
    </div>
  );
}

function Heading74() {
  return (
    <div className="absolute h-[60px] left-0 top-[41.5px] w-[505.328px]" data-name="Heading 2">
      <p className="absolute font-['Pretendard:ExtraBold',sans-serif] leading-[60px] left-0 not-italic text-[#0f172b] text-[48px] top-[0.5px] whitespace-nowrap">ShowPot</p>
    </div>
  );
}

function Paragraph150() {
  return (
    <div className="absolute h-[32.5px] left-0 top-[117.5px] w-[505.328px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[32.5px] left-0 not-italic text-[#45556c] text-[20px] top-0 whitespace-nowrap">내한 공연 정보, 티켓팅 알림 (iOS 16+)</p>
    </div>
  );
}

function Container777() {
  return (
    <div className="h-[150px] relative shrink-0 w-full" data-name="Container">
      <Container778 />
      <Heading74 />
      <Paragraph150 />
    </div>
  );
}

function Text157() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[28px] left-0 rounded-[4px] top-0 w-[185.883px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[12px] not-italic text-[#62748e] text-[14px] top-[3.5px] whitespace-nowrap">2025.03.29 ~ 2025.04.14</p>
    </div>
  );
}

function Icon143() {
  return (
    <div className="absolute left-0 size-[16px] top-[6px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe485a00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p28ae6680} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[28px] left-[201.88px] top-0 w-[65.063px]" data-name="Link">
      <Icon143 />
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[20px] not-italic text-[#62748e] text-[14px] top-[3.5px] whitespace-nowrap">{` GitHub`}</p>
    </div>
  );
}

function Container779() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Text157 />
      <Link4 />
    </div>
  );
}

function ShowPotSection() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="ShowPotSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[0] left-0 not-italic text-[#45556c] text-[0px] top-[-0.5px] w-[501px]">
        <span className="leading-[24px] text-[16px]">{`내한 공연 정보를 쉽게 확인하고 티켓팅 일정을 놓치지 않도록 돕는 알림 서비스입니다. 직접 개발한 `}</span>
        <span className="font-['Pretendard:Bold',sans-serif] leading-[24px] text-[16px]">RxCompose 라이브러리를 실제 프로덕트에 적용</span>
        <span className="leading-[24px] text-[16px]">하여 검증하고 개선하는 데 중점을 두었습니다.</span>
      </p>
    </div>
  );
}

function Text158() {
  return (
    <div className="h-[20px] relative shrink-0 w-[116.82px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#62748e] text-[0px] top-[-0.5px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">Role:</span>
          <span className="font-['Pretendard:Regular',sans-serif] leading-[20px] text-[14px]">{` iOS 개발 (1인)`}</span>
        </p>
      </div>
    </div>
  );
}

function Text159() {
  return (
    <div className="h-[20px] relative shrink-0 w-[300.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#62748e] text-[0px] top-[-0.5px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">Team:</span>
          <span className="font-['Pretendard:Regular',sans-serif] leading-[20px] text-[14px]">{` PM 1, Design 2, Server 2, iOS 1, Android 2`}</span>
        </p>
      </div>
    </div>
  );
}

function ShowPotSection1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="ShowPotSection">
      <Text158 />
      <Text159 />
    </div>
  );
}

function Container780() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
      <ShowPotSection />
      <ShowPotSection1 />
    </div>
  );
}

function Text160() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-0 rounded-[4px] top-[17px] w-[59.094px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">UIKit</p>
    </div>
  );
}

function Text161() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[67.09px] rounded-[4px] top-[17px] w-[73.93px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">SnapKit</p>
    </div>
  );
}

function Text162() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[149.02px] rounded-[4px] top-[17px] w-[73.93px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">RxSwift</p>
    </div>
  );
}

function Text163() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[230.95px] rounded-[4px] top-[17px] w-[155.523px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Clean Architecture</p>
    </div>
  );
}

function Text164() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-0 rounded-[4px] top-[51px] w-[148.109px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Swift Concurrency</p>
    </div>
  );
}

function Text165() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[156.11px] rounded-[4px] top-[51px] w-[155.523px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Swift Dependencies</p>
    </div>
  );
}

function Container781() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Text160 />
      <Text161 />
      <Text162 />
      <Text163 />
      <Text164 />
      <Text165 />
    </div>
  );
}

function Container776() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[455px] items-start left-0 top-0 w-[505.328px]" data-name="Container">
      <Container777 />
      <Container779 />
      <Container780 />
      <Container781 />
    </div>
  );
}

function ImageErrorLoadingImage3() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Image (Error loading image)">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="bg-[#f3f4f6] h-[406.75px] relative shrink-0 w-[724.672px]" data-name="ImageWithFallback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ImageErrorLoadingImage3 />
      </div>
    </div>
  );
}

function Container782() {
  return (
    <div className="absolute bg-[#f8fafc] h-[408.75px] left-[553.33px] rounded-[16px] top-[23.13px] w-[726.672px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ProjectOverview2() {
  return (
    <div className="h-[455px] relative shrink-0 w-[1280px]" data-name="ProjectOverview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container776 />
        <Container782 />
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[711px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <ProjectOverview2 />
    </div>
  );
}

function Heading75() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">핵심 기능</p>
    </div>
  );
}

function Text166() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading76() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">소셜로그인</p>
    </div>
  );
}

function Paragraph151() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">카카오·애플 계정 간편 로그인</p>
    </div>
  );
}

function Container785() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[159.297px]" data-name="Container">
      <Heading76 />
      <Paragraph151 />
    </div>
  );
}

function Container784() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text166 />
      <Container785 />
    </div>
  );
}

function Text167() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading77() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">공연 목록 조회</p>
    </div>
  );
}

function Paragraph152() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">전체, 예매 임박, 추천, 알림 설정 등 다양한 기준으로 조회</p>
    </div>
  );
}

function Container787() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[308.586px]" data-name="Container">
      <Heading77 />
      <Paragraph152 />
    </div>
  );
}

function Container786() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text167 />
      <Container787 />
    </div>
  );
}

function Text168() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading78() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">공연 세부 정보</p>
    </div>
  );
}

function Paragraph153() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">공연 상세 정보와 티켓팅 일정 한눈에 확인</p>
    </div>
  );
}

function Container789() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[226.781px]" data-name="Container">
      <Heading78 />
      <Paragraph153 />
    </div>
  );
}

function Container788() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text168 />
      <Container789 />
    </div>
  );
}

function Text169() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading79() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">티켓 예매 오픈 알림</p>
    </div>
  );
}

function Paragraph154() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">원하는 시간에 맞춘 예매 오픈 알림</p>
    </div>
  );
}

function Container791() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[186.969px]" data-name="Container">
      <Heading79 />
      <Paragraph154 />
    </div>
  );
}

function Container790() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text169 />
      <Container791 />
    </div>
  );
}

function Text170() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading80() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">관심 공연 설정</p>
    </div>
  );
}

function Paragraph155() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">관심 있는 공연 저장 및 관리</p>
    </div>
  );
}

function Container793() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[150.664px]" data-name="Container">
      <Heading80 />
      <Paragraph155 />
    </div>
  );
}

function Container792() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text170 />
      <Container793 />
    </div>
  );
}

function Text171() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading81() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">구독 관리</p>
    </div>
  );
}

function Paragraph156() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">선호 장르·아티스트 구독으로 관련 정보 수신</p>
    </div>
  );
}

function Container795() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[238.922px]" data-name="Container">
      <Heading81 />
      <Paragraph156 />
    </div>
  );
}

function Container794() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text171 />
      <Container795 />
    </div>
  );
}

function Text172() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading82() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">검색</p>
    </div>
  );
}

function Paragraph157() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">아티스트·공연명 검색으로 빠른 정보 탐색</p>
    </div>
  );
}

function Container797() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[223.305px]" data-name="Container">
      <Heading82 />
      <Paragraph157 />
    </div>
  );
}

function Container796() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text172 />
      <Container797 />
    </div>
  );
}

function FeatureGrid2() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] h-[375px] relative shrink-0 w-full" data-name="FeatureGrid">
      <Container784 />
      <Container786 />
      <Container788 />
      <Container790 />
      <Container792 />
      <Container794 />
      <Container796 />
    </div>
  );
}

function Container783() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[423px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading75 />
      <FeatureGrid2 />
    </div>
  );
}

function Heading83() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#0f172b] text-[24px] top-[-0.5px] whitespace-nowrap">Technical Decisions</p>
    </div>
  );
}

function Paragraph158() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">오픈소스 라이브러리 적용과 아키텍처 개선에 대한 고민</p>
    </div>
  );
}

function Container799() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[41px] top-[41px] w-[1198px]" data-name="Container">
      <Heading83 />
      <Paragraph158 />
    </div>
  );
}

function Text173() {
  return <div className="absolute bg-[#155dfc] h-[24px] left-0 rounded-[16777200px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading84() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text173 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[16px] not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">직접 설계한 아키텍처의 적용과 검증</p>
    </div>
  );
}

function Heading85() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[244.016px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">RxCompose 실제 프로덕트 적용 검증</p>
    </div>
  );
}

function Text174() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[252.02px] rounded-[16777200px] top-[0.75px] w-[91.781px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Experiment</p>
    </div>
  );
}

function Container802() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading85 />
      <Text174 />
    </div>
  );
}

function Container801() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container802 />
    </div>
  );
}

function Icon144() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container806() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon144 />
      </div>
    </div>
  );
}

function Container807() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container805() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container806 />
        <Container807 />
      </div>
    </div>
  );
}

function Paragraph159() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[974.898px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">직접 설계하여 오픈소스로 배포한 단방향 아키텍처 라이브러리 RxCompose가 실제 프로덕트 수준의 복잡성에서도 안정적으로 동작하는지 검증할 기회가 필요했습니다.</p>
    </div>
  );
}

function Container808() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[974.898px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph159 />
      </div>
    </div>
  );
}

function Container804() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container805 />
      <Container808 />
    </div>
  );
}

function Icon145() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container811() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon145 />
      </div>
    </div>
  );
}

function Container812() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container810() {
  return (
    <div className="h-[215.5px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container811 />
        <Container812 />
      </div>
    </div>
  );
}

function Icon146() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container817() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon146 />
      </div>
    </div>
  );
}

function Container818() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container816() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container817 />
        <Container818 />
      </div>
    </div>
  );
}

function Paragraph160() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1063px]">라이브러리의 적용 가능성은 샘플 프로젝트만으로는 평가에 한계가 있습니다. 다양한 화면 구성, 비동기 흐름, 상태 관리가 복합적으로 작용하는 실제 프로덕트에서만 정확한 검증이 가능하다고 판단했습니다.</p>
    </div>
  );
}

function Container819() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph160 />
      </div>
    </div>
  );
}

function Container815() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container816 />
      <Container819 />
    </div>
  );
}

function Icon147() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container822() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon147 />
      </div>
    </div>
  );
}

function Container821() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container822 />
      </div>
    </div>
  );
}

function Paragraph161() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1060px]">마침 ShowPot 프로젝트가 UIKit + RxSwift 기반으로 다양한 화면과 비동기 흐름을 포함하고 있어, RxCompose의 실전 적용 및 개선점 발굴에 최적의 테스트베드라고 결론 내렸습니다.</p>
    </div>
  );
}

function Container823() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph161 />
      </div>
    </div>
  );
}

function Container820() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container821 />
      <Container823 />
    </div>
  );
}

function Container814() {
  return (
    <div className="absolute content-stretch flex flex-col h-[161.5px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container815 />
      <Container820 />
    </div>
  );
}

function Container813() {
  return (
    <div className="flex-[1_0_0] h-[215.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container814 />
      </div>
    </div>
  );
}

function Container809() {
  return (
    <div className="content-stretch flex gap-[12px] h-[215.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container810 />
      <Container813 />
    </div>
  );
}

function Icon148() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container826() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon148 />
      </div>
    </div>
  );
}

function Container827() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container825() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container826 />
        <Container827 />
      </div>
    </div>
  );
}

function Paragraph162() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[653.141px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">ShowPot 프로젝트 전체에 RxCompose를 적용하여 적용 가능성 테스트 및 개선사항을 실전에서 점검했습니다.</p>
    </div>
  );
}

function Container828() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[653.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph162 />
      </div>
    </div>
  );
}

function Container824() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container825 />
      <Container828 />
    </div>
  );
}

function Icon149() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container831() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon149 />
      </div>
    </div>
  );
}

function Container830() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container831 />
      </div>
    </div>
  );
}

function Paragraph163() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[956.961px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">실제 서비스 수준의 복잡성에서 라이브러리의 안정성과 개선 가능성을 동시에 파악할 수 있었고, 발견한 개선점을 라이브러리에 반영하는 선순환 구조를 만들었습니다.</p>
    </div>
  );
}

function Container832() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[956.961px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph163 />
      </div>
    </div>
  );
}

function Container829() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container830 />
      <Container832 />
    </div>
  );
}

function Container803() {
  return (
    <div className="absolute content-stretch flex flex-col h-[412.625px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container804 />
      <Container809 />
      <Container824 />
      <Container829 />
    </div>
  );
}

function ProblemSolvingBlock14() {
  return (
    <div className="bg-white h-[519.625px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container801 />
        <Container803 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading86() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[220.492px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">Closure 기반 Repository 추상화</p>
    </div>
  );
}

function Text175() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[228.49px] rounded-[16777200px] top-[0.75px] w-[70.109px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Pattern</p>
    </div>
  );
}

function Container834() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading86 />
      <Text175 />
    </div>
  );
}

function Container833() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container834 />
    </div>
  );
}

function Icon150() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container838() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon150 />
      </div>
    </div>
  );
}

function Container839() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container837() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container838 />
        <Container839 />
      </div>
    </div>
  );
}

function Paragraph164() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[1104px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[1096px]">Repository를 Protocol로 추상화하면, UseCase가 해당 Protocol의 모든 메서드에 의존하게 됩니다. 실제로 필요한 메서드는 일부인데, 더 효율적인 의존 구조가 가능할 것이라 생각했습니다.</p>
    </div>
  );
}

function Container840() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph164 />
      </div>
    </div>
  );
}

function Container836() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container837 />
      <Container840 />
    </div>
  );
}

function Icon151() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container843() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon151 />
      </div>
    </div>
  );
}

function Container844() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container842() {
  return (
    <div className="h-[277.875px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container843 />
        <Container844 />
      </div>
    </div>
  );
}

function Icon152() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container849() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon152 />
      </div>
    </div>
  );
}

function Container850() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container848() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container849 />
        <Container850 />
      </div>
    </div>
  );
}

function Paragraph165() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1065px]">Protocol로 추상화하면 UseCase가 conform하는 타입 전체에 의존하게 됩니다. 예를 들어 5개 메서드를 가진 Repository를 1개만 쓰는 UseCase에 주입하면, 나머지 4개에 대한 추가적인 결합이 생기고 테스트 시에도 사용하지 않는 메서드까지 stub을 만들어야 합니다.</p>
    </div>
  );
}

function Container851() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph165 />
      </div>
    </div>
  );
}

function Container847() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container848 />
      <Container851 />
    </div>
  );
}

function Icon153() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container854() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon153 />
      </div>
    </div>
  );
}

function Container855() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container853() {
  return (
    <div className="h-[62.375px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container854 />
        <Container855 />
      </div>
    </div>
  );
}

function Paragraph166() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">{`이 구조의 핵심은 '타입 단위 의존'에 있습니다. Protocol은 타입 전체를 하나의 의존 단위로 묶기 때문에, 필요한 기능만 선택적으로 주입하는 것이 구조적으로 쉽지 않습니다.`}</p>
    </div>
  );
}

function Container856() {
  return (
    <div className="flex-[1_0_0] h-[62.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#e17100] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">한계 발견</p>
        <Paragraph166 />
      </div>
    </div>
  );
}

function Container852() {
  return (
    <div className="content-stretch flex gap-[10px] h-[62.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container853 />
      <Container856 />
    </div>
  );
}

function Icon154() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container859() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon154 />
      </div>
    </div>
  );
}

function Container858() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container859 />
      </div>
    </div>
  );
}

function Paragraph167() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1059px]">의존 단위를 타입이 아닌 개별 기능(메서드)으로 낮출 수 있다면 해결됩니다. Swift의 클로저는 일급 객체이므로, Repository를 구조체로 정의하고 각 메서드를 클로저 프로퍼티로 노출하면 UseCase가 필요한 클로저만 참조하는 구조가 가능합니다. pointfree의 swift-dependencies도 이 패턴을 채택하고 있어 검증된 접근이라고 판단했습니다.</p>
    </div>
  );
}

function Container860() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph167 />
      </div>
    </div>
  );
}

function Container857() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container858 />
      <Container860 />
    </div>
  );
}

function Container846() {
  return (
    <div className="absolute content-stretch flex flex-col h-[223.875px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container847 />
      <Container852 />
      <Container857 />
    </div>
  );
}

function Container845() {
  return (
    <div className="flex-[1_0_0] h-[277.875px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container846 />
      </div>
    </div>
  );
}

function Container841() {
  return (
    <div className="content-stretch flex gap-[12px] h-[277.875px] items-start relative shrink-0 w-full" data-name="Container">
      <Container842 />
      <Container845 />
    </div>
  );
}

function Icon155() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container863() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon155 />
      </div>
    </div>
  );
}

function Container864() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container862() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container863 />
        <Container864 />
      </div>
    </div>
  );
}

function Paragraph168() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[623.289px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">Repository를 Protocol이 아닌, 메서드들을 클로저 형태로 인스턴스에 주입받는 구조체로 추상화했습니다.</p>
    </div>
  );
}

function Container865() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[623.289px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph168 />
      </div>
    </div>
  );
}

function Container861() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container862 />
      <Container865 />
    </div>
  );
}

function Icon156() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container868() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon156 />
      </div>
    </div>
  );
}

function Container867() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container868 />
      </div>
    </div>
  );
}

function Paragraph169() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[848.93px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">UseCase가 불필요한 의존 없이 필요한 기능만 활용할 수 있게 되었고, 테스트 시에도 관심 메서드만 모킹하면 되어 테스트 작성이 간결해졌습니다.</p>
    </div>
  );
}

function Container869() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[848.93px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph169 />
      </div>
    </div>
  );
}

function Container866() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container867 />
      <Container869 />
    </div>
  );
}

function Container835() {
  return (
    <div className="absolute content-stretch flex flex-col h-[499.375px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container836 />
      <Container841 />
      <Container861 />
      <Container866 />
    </div>
  );
}

function ProblemSolvingBlock15() {
  return (
    <div className="bg-white h-[606.375px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container833 />
        <Container835 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading87() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">계층 설계 및 의존성 분리</p>
    </div>
  );
}

function Container870() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.8)] content-stretch flex flex-col h-[57px] items-start left-px pb-px pt-[16px] px-[24px] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Heading87 />
    </div>
  );
}

function Heading88() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[140.422px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">DTO에 Generic 도입</p>
    </div>
  );
}

function Text176() {
  return (
    <div className="absolute bg-[#eff6ff] h-[20.5px] left-[148.42px] rounded-[16777200px] top-[1.75px] w-[100.422px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Optimization</p>
    </div>
  );
}

function Container872() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading88 />
      <Text176 />
    </div>
  );
}

function ShowPotSection3() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="ShowPotSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">DTO에 Generic을 도입하여 외부 데이터를 클라이언트 기능에 적합한 형태로 가공하고, 외부 변경에 유연하게 대응했습니다.</p>
    </div>
  );
}

function TechItem13() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container872 />
        <ShowPotSection3 />
      </div>
    </div>
  );
}

function Heading89() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[198.398px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Repository + UseCase 패턴</p>
    </div>
  );
}

function Text177() {
  return (
    <div className="absolute bg-[#eff6ff] h-[20.5px] left-[206.4px] rounded-[16777200px] top-[1.75px] w-[105.992px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Architecture</p>
    </div>
  );
}

function Container873() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading89 />
      <Text177 />
    </div>
  );
}

function ShowPotSection4() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="ShowPotSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">Data 계층의 주요 기능을 Repository로 추상화하여 비즈니스 로직과의 결합도를 낮추고, Feature 계층에 필요한 로직을 UseCase로 명시하여 계층 간 의존성을 분리했습니다.</p>
    </div>
  );
}

function TechItem14() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container873 />
        <ShowPotSection4 />
      </div>
    </div>
  );
}

function Heading90() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[182.484px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Swift Dependencies 활용</p>
    </div>
  );
}

function Text178() {
  return (
    <div className="absolute bg-[#eff6ff] h-[20.5px] left-[190.48px] rounded-[16777200px] top-[1.75px] w-[66.172px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Testing</p>
    </div>
  );
}

function Container874() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading90 />
      <Text178 />
    </div>
  );
}

function Code9() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[83.453px]" data-name="Code">
      <p className="font-['SFMono-Regular:Regular',sans-serif] leading-[24.375px] not-italic relative shrink-0 text-[#45556c] text-[15px] whitespace-nowrap">testValue</p>
    </div>
  );
}

function Code10() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[100.19px] top-[3px] w-[111.273px]" data-name="Code">
      <p className="font-['SFMono-Regular:Regular',sans-serif] leading-[24.375px] not-italic relative shrink-0 text-[#45556c] text-[15px] whitespace-nowrap">previewValue</p>
    </div>
  );
}

function ShowPotSection5() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="ShowPotSection">
      <Code9 />
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-[83.45px] not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">{`와 `}</p>
      <Code10 />
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-[211.46px] not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">를 활용해 테스트 환경 구성 및 프리뷰에서 목업 데이터를 제공하여 불필요한 API 호출을 줄였습니다.</p>
    </div>
  );
}

function TechItem15() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container874 />
        <ShowPotSection5 />
      </div>
    </div>
  );
}

function Container871() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[203.125px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <TechItem13 />
      <TechItem14 />
      <TechItem15 />
    </div>
  );
}

function TechBlock3() {
  return (
    <div className="bg-white h-[310.125px] relative rounded-[14px] shrink-0 w-full" data-name="TechBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container870 />
        <Container871 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container800() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[1476.125px] items-start relative shrink-0 w-full" data-name="Container">
      <ProblemSolvingBlock14 />
      <ProblemSolvingBlock15 />
      <TechBlock3 />
    </div>
  );
}

function TechSection6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1593.125px] items-start left-[41px] pt-[33px] top-[129px] w-[1198px]" data-name="TechSection">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Heading84 />
      <Container800 />
    </div>
  );
}

function Text179() {
  return <div className="absolute bg-[#155dfc] h-[24px] left-0 rounded-[16777200px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading91() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text179 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[16px] not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">UI 및 기능 구현 전략</p>
    </div>
  );
}

function Heading92() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">사용자 경험을 고려한 UI 설계</p>
    </div>
  );
}

function Container876() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.8)] content-stretch flex flex-col h-[57px] items-start left-px pb-px pt-[16px] px-[24px] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Heading92 />
    </div>
  );
}

function Heading93() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[224.047px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">{`Compositional Layout & Enum`}</p>
    </div>
  );
}

function Text180() {
  return (
    <div className="absolute bg-[#eff6ff] h-[20.5px] left-[232.05px] rounded-[16777200px] top-[1.75px] w-[27.773px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">UI</p>
    </div>
  );
}

function Container878() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading93 />
      <Text180 />
    </div>
  );
}

function ShowPotSection6() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="ShowPotSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">DataSource의 섹션과 데이터를 열거형으로 정의하고, Compositional Layout을 구성하여 하나의 화면에서 다양한 섹션·셀 구성을 유연하게 지원했습니다.</p>
    </div>
  );
}

function TechItem16() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container878 />
        <ShowPotSection6 />
      </div>
    </div>
  );
}

function Heading94() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[136.953px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Dynamic Carousel</p>
    </div>
  );
}

function Text181() {
  return (
    <div className="absolute bg-[#eff6ff] h-[20.5px] left-[144.95px] rounded-[16777200px] top-[1.75px] w-[27.773px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">UI</p>
    </div>
  );
}

function Container879() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading94 />
      <Text181 />
    </div>
  );
}

function Code11() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[287.453px]" data-name="Code">
      <p className="font-['SFMono-Regular:Regular',sans-serif] leading-[24.375px] not-italic relative shrink-0 text-[#45556c] text-[15px] whitespace-nowrap">visibleItemsInvalidationHandler</p>
    </div>
  );
}

function ShowPotSection7() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="ShowPotSection">
      <Code11 />
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-[287.45px] not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">로 셀 위치를 동적 계산하고, 오프셋에 따라 투명도·크기가 변하는 캐러셀 뷰를 구현했습니다.</p>
    </div>
  );
}

function TechItem17() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container879 />
        <ShowPotSection7 />
      </div>
    </div>
  );
}

function Heading95() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[115.953px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Custom TabBar</p>
    </div>
  );
}

function Text182() {
  return (
    <div className="absolute bg-[#eff6ff] h-[20.5px] left-[123.95px] rounded-[16777200px] top-[1.75px] w-[27.773px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">UI</p>
    </div>
  );
}

function Container880() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading95 />
      <Text182 />
    </div>
  );
}

function ShowPotSection8() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="ShowPotSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">탭바 클릭 이벤트를 BehaviorSubject로 방출하고, UITabBarController의 selectedIndex에 바인딩하여 커스텀 탭바를 구현했습니다.</p>
    </div>
  );
}

function TechItem18() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container880 />
        <ShowPotSection8 />
      </div>
    </div>
  );
}

function Container877() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[203.125px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <TechItem16 />
      <TechItem17 />
      <TechItem18 />
    </div>
  );
}

function TechBlock4() {
  return (
    <div className="bg-white h-[310.125px] relative rounded-[14px] shrink-0 w-full" data-name="TechBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container876 />
        <Container877 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading96() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">안정적인 데이터 및 인증 처리</p>
    </div>
  );
}

function Container881() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.8)] content-stretch flex flex-col h-[57px] items-start left-px pb-px pt-[16px] px-[24px] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Heading96 />
    </div>
  );
}

function Heading97() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[151.883px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Network Interceptor</p>
    </div>
  );
}

function Text183() {
  return (
    <div className="absolute bg-[#eff6ff] h-[20.5px] left-[159.88px] rounded-[16777200px] top-[1.75px] w-[74.281px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Network</p>
    </div>
  );
}

function Container883() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading97 />
      <Text183 />
    </div>
  );
}

function ShowPotSection9() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="ShowPotSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">Alamofire의 RequestInterceptor로 요청 헤더에 토큰 자동 적용, 액세스 토큰 오류 시 재발급 로직을 구현했습니다.</p>
    </div>
  );
}

function TechItem19() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container883 />
        <ShowPotSection9 />
      </div>
    </div>
  );
}

function Heading98() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[120.859px]" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">Apple Login 탈퇴</p>
    </div>
  );
}

function Text184() {
  return (
    <div className="absolute bg-[#eff6ff] h-[20.5px] left-[128.86px] rounded-[16777200px] top-[1.75px] w-[48.828px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Auth</p>
    </div>
  );
}

function Container884() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading98 />
      <Text184 />
    </div>
  );
}

function ShowPotSection10() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="ShowPotSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">SwiftJWT를 활용해 애플 리프레시 토큰 발급과 회원 탈퇴 요청에 필요한 Payload를 생성하여 탈퇴 기능을 구현했습니다.</p>
    </div>
  );
}

function TechItem20() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="TechItem">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[18px] relative size-full">
        <Container884 />
        <ShowPotSection10 />
      </div>
    </div>
  );
}

function Container882() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[128.75px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <TechItem19 />
      <TechItem20 />
    </div>
  );
}

function TechBlock5() {
  return (
    <div className="bg-white h-[235.75px] relative rounded-[14px] shrink-0 w-full" data-name="TechBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container881 />
        <Container882 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container875() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[565.875px] items-start relative shrink-0 w-full" data-name="Container">
      <TechBlock4 />
      <TechBlock5 />
    </div>
  );
}

function TechSection7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[682.875px] items-start left-[41px] pt-[33px] top-[1722.13px] w-[1198px]" data-name="TechSection">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Heading91 />
      <Container875 />
    </div>
  );
}

function Container798() {
  return (
    <div className="bg-white h-[2446px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container799 />
      <TechSection6 />
      <TechSection7 />
    </div>
  );
}

function ShowPotSection2() {
  return (
    <div className="h-[2917px] relative shrink-0 w-[1280px]" data-name="ShowPotSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start relative size-full">
        <Container783 />
        <Container798 />
      </div>
    </div>
  );
}

function Section8() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[3109px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <ShowPotSection2 />
    </div>
  );
}

function Container887() {
  return (
    <div className="absolute bg-[#0f172b] h-[24px] left-0 rounded-[16777200px] top-[1.5px] w-[82.32px]" data-name="Container">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-[12px] not-italic text-[12px] text-white top-[3.5px] tracking-[0.6px] uppercase whitespace-nowrap">Project</p>
    </div>
  );
}

function Heading99() {
  return (
    <div className="absolute h-[60px] left-0 top-[41.5px] w-[505.328px]" data-name="Heading 2">
      <p className="absolute font-['Pretendard:ExtraBold',sans-serif] leading-[60px] left-0 not-italic text-[#0f172b] text-[48px] top-[0.5px] whitespace-nowrap">인터레스트</p>
    </div>
  );
}

function Paragraph170() {
  return (
    <div className="absolute h-[32.5px] left-0 top-[117.5px] w-[505.328px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[32.5px] left-0 not-italic text-[#45556c] text-[20px] top-0 whitespace-nowrap">사용자 맞춤 인터벌 트레이닝 (iOS 17+)</p>
    </div>
  );
}

function Container886() {
  return (
    <div className="h-[150px] relative shrink-0 w-full" data-name="Container">
      <Container887 />
      <Heading99 />
      <Paragraph170 />
    </div>
  );
}

function Text185() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[28px] left-0 rounded-[4px] top-0 w-[142.961px]" data-name="Text">
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[12px] not-italic text-[#62748e] text-[14px] top-[3.5px] whitespace-nowrap">2023.11 ~ 2024.04</p>
    </div>
  );
}

function Icon157() {
  return (
    <div className="absolute left-0 size-[16px] top-[6px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pe485a00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p28ae6680} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[28px] left-[158.96px] top-0 w-[65.063px]" data-name="Link">
      <Icon157 />
      <p className="absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[20px] not-italic text-[#62748e] text-[14px] top-[3.5px] whitespace-nowrap">{` GitHub`}</p>
    </div>
  );
}

function Container888() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Text185 />
      <Link5 />
    </div>
  );
}

function InterestSection() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="InterestSection">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] w-[489px]">사용자 맞춤 인터벌 트레이닝을 가이드하는 서비스입니다. 애플워치와 연동하여 운동 정보를 실시간으로 추적하고 관리합니다.</p>
    </div>
  );
}

function Text186() {
  return (
    <div className="h-[20px] relative shrink-0 w-[128.93px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#62748e] text-[0px] top-[-0.5px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">Role:</span>
          <span className="font-['Pretendard:Regular',sans-serif] leading-[20px] text-[14px]">{` iOS 개발, 디자인`}</span>
        </p>
      </div>
    </div>
  );
}

function Text187() {
  return (
    <div className="h-[20px] relative shrink-0 w-[89.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#62748e] text-[0px] top-[-0.5px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">Team:</span>
          <span className="font-['Pretendard:Regular',sans-serif] leading-[20px] text-[14px]">{` iOS 5명`}</span>
        </p>
      </div>
    </div>
  );
}

function InterestSection1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="InterestSection">
      <Text186 />
      <Text187 />
    </div>
  );
}

function Container889() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <InterestSection />
      <InterestSection1 />
    </div>
  );
}

function Text188() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-0 rounded-[4px] top-[17px] w-[73.93px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">SwiftUI</p>
    </div>
  );
}

function Text189() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[81.93px] rounded-[4px] top-[17px] w-[51.672px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">MVVM</p>
    </div>
  );
}

function Text190() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[141.6px] rounded-[4px] top-[17px] w-[155.523px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Clean Architecture</p>
    </div>
  );
}

function Text191() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[305.13px] rounded-[4px] top-[17px] w-[59.094px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">Tuist</p>
    </div>
  );
}

function Text192() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[372.22px] rounded-[4px] top-[17px] w-[88.766px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">HealthKit</p>
    </div>
  );
}

function Text193() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-0 rounded-[4px] top-[51px] w-[148.109px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">WatchConnectivity</p>
    </div>
  );
}

function Text194() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[156.11px] rounded-[4px] top-[51px] w-[81.344px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">WatchKit</p>
    </div>
  );
}

function Text195() {
  return (
    <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[26px] left-[245.45px] rounded-[4px] top-[51px] w-[88.766px]" data-name="Text">
      <p className="absolute font-['SFMono-Regular:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[#45556c] text-[12px] top-[3.5px] whitespace-nowrap">SwiftData</p>
    </div>
  );
}

function Container890() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Text188 />
      <Text189 />
      <Text190 />
      <Text191 />
      <Text192 />
      <Text193 />
      <Text194 />
      <Text195 />
    </div>
  );
}

function Container885() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[431px] items-start left-0 top-0 w-[505.328px]" data-name="Container">
      <Container886 />
      <Container888 />
      <Container889 />
      <Container890 />
    </div>
  );
}

function ImageErrorLoadingImage4() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Image (Error loading image)">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="bg-[#f3f4f6] h-[406.75px] relative shrink-0 w-[724.672px]" data-name="ImageWithFallback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ImageErrorLoadingImage4 />
      </div>
    </div>
  );
}

function Container891() {
  return (
    <div className="absolute bg-[#f8fafc] h-[408.75px] left-[553.33px] rounded-[16px] top-[11.13px] w-[726.672px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(226,232,240,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ProjectOverview3() {
  return (
    <div className="h-[431px] relative shrink-0 w-[1280px]" data-name="ProjectOverview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container885 />
        <Container891 />
      </div>
    </div>
  );
}

function Section9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[687px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <ProjectOverview3 />
    </div>
  );
}

function Heading100() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">핵심 기능</p>
    </div>
  );
}

function Text196() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading101() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">인터벌 운동 사용자화</p>
    </div>
  );
}

function Paragraph171() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">인터벌 운동 커스터마이징 및 로컬 스토리지 저장</p>
    </div>
  );
}

function Container894() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[263.078px]" data-name="Container">
      <Heading101 />
      <Paragraph171 />
    </div>
  );
}

function Container893() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text196 />
      <Container894 />
    </div>
  );
}

function Text197() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading102() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">운동 타이머</p>
    </div>
  );
}

function Paragraph172() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">정확한 시간 측정을 위한 타이머 기능</p>
    </div>
  );
}

function Container896() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[199.063px]" data-name="Container">
      <Heading102 />
      <Paragraph172 />
    </div>
  );
}

function Container895() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text197 />
      <Container896 />
    </div>
  );
}

function Text198() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading103() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">심박수·칼로리 추적</p>
    </div>
  );
}

function Paragraph173() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">실시간 심박수 및 소모 칼로리 추적</p>
    </div>
  );
}

function Container898() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[186.969px]" data-name="Container">
      <Heading103 />
      <Paragraph173 />
    </div>
  );
}

function Container897() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text198 />
      <Container898 />
    </div>
  );
}

function Text199() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading104() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">운동 강도 가이드</p>
    </div>
  );
}

function Paragraph174() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">심박수 구간에 따른 운동 강도 가이드 제공</p>
    </div>
  );
}

function Container900() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[226.781px]" data-name="Container">
      <Heading104 />
      <Paragraph174 />
    </div>
  );
}

function Container899() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text199 />
      <Container900 />
    </div>
  );
}

function Text200() {
  return <div className="absolute bg-[#2b7fff] left-[17px] rounded-[16777200px] size-[6px] top-[23px]" data-name="Text" />;
}

function Heading105() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 5">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-0.5px] whitespace-nowrap">애플워치 연동</p>
    </div>
  );
}

function Paragraph175() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">애플워치 연동 및 미러링 기능 지원</p>
    </div>
  );
}

function Container902() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[50.75px] items-start left-[35px] top-[17px] w-[186.969px]" data-name="Container">
      <Heading105 />
      <Paragraph175 />
    </div>
  );
}

function Container901() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text200 />
      <Container902 />
    </div>
  );
}

function FeatureGrid3() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[278.25px] relative shrink-0 w-full" data-name="FeatureGrid">
      <Container893 />
      <Container895 />
      <Container897 />
      <Container899 />
      <Container901 />
    </div>
  );
}

function Container892() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[326.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading100 />
      <FeatureGrid3 />
    </div>
  );
}

function Heading106() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#0f172b] text-[24px] top-[-0.5px] whitespace-nowrap">Technical Decisions</p>
    </div>
  );
}

function Paragraph176() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.5px] whitespace-nowrap">WatchOS 연동 및 헬스케어 데이터 처리에 대한 기술적 도전</p>
    </div>
  );
}

function Container904() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[41px] top-[41px] w-[1198px]" data-name="Container">
      <Heading106 />
      <Paragraph176 />
    </div>
  );
}

function Text201() {
  return <div className="absolute bg-[#155dfc] h-[24px] left-0 rounded-[16777200px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading107() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text201 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[16px] not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">핵심 기술 구현</p>
    </div>
  );
}

function Heading108() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[149.344px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">타이머 메모리 누수 방지</p>
    </div>
  );
}

function Text202() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[157.34px] rounded-[16777200px] top-[0.75px] w-[69.766px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Memory</p>
    </div>
  );
}

function Container907() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading108 />
      <Text202 />
    </div>
  );
}

function Container906() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container907 />
    </div>
  );
}

function Icon158() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container911() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon158 />
      </div>
    </div>
  );
}

function Container912() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container910() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container911 />
        <Container912 />
      </div>
    </div>
  );
}

function Paragraph177() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[826.914px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">타이머 기능 구현 시, Timer 객체의 생명주기를 세심하게 관리하지 않으면 메모리가 의도보다 오래 유지될 수 있다는 점에 주의가 필요했습니다.</p>
    </div>
  );
}

function Container913() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[826.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph177 />
      </div>
    </div>
  );
}

function Container909() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container910 />
      <Container913 />
    </div>
  );
}

function Icon159() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container916() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon159 />
      </div>
    </div>
  );
}

function Container917() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container915() {
  return (
    <div className="h-[215.5px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container916 />
        <Container917 />
      </div>
    </div>
  );
}

function Icon160() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container922() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon160 />
      </div>
    </div>
  );
}

function Container923() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container921() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container922 />
        <Container923 />
      </div>
    </div>
  );
}

function Paragraph178() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1069px]">Foundation의 Timer.scheduledTimer는 RunLoop에 강한 참조로 등록되기 때문에, invalidate()를 명시적으로 호출하지 않으면 해제되지 않을 수 있습니다. 화면 전환이나 운동 종료 시 이를 놓치면 백그라운드에서 리소스가 계속 유지될 수 있습니다.</p>
    </div>
  );
}

function Container924() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph178 />
      </div>
    </div>
  );
}

function Container920() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container921 />
      <Container924 />
    </div>
  );
}

function Icon161() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container927() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon161 />
      </div>
    </div>
  );
}

function Container926() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container927 />
      </div>
    </div>
  );
}

function Paragraph179() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1059px]">타이머의 생명주기를 뷰나 객체의 생명주기에 자동으로 연동할 수 있는 구조가 필요했고, Combine의 Timer.publish를 AnyCancellable로 관리하면 객체 해제 시 자동으로 구독이 취소되어 이 문제를 구조적으로 해결할 수 있다고 판단했습니다.</p>
    </div>
  );
}

function Container928() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph179 />
      </div>
    </div>
  );
}

function Container925() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container926 />
      <Container928 />
    </div>
  );
}

function Container919() {
  return (
    <div className="absolute content-stretch flex flex-col h-[161.5px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container920 />
      <Container925 />
    </div>
  );
}

function Container918() {
  return (
    <div className="flex-[1_0_0] h-[215.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container919 />
      </div>
    </div>
  );
}

function Container914() {
  return (
    <div className="content-stretch flex gap-[12px] h-[215.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container915 />
      <Container918 />
    </div>
  );
}

function Icon162() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container931() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon162 />
      </div>
    </div>
  );
}

function Container932() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container930() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container931 />
        <Container932 />
      </div>
    </div>
  );
}

function Paragraph180() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[849.43px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">Combine의 Timer 객체로 타이머 기능을 구현하고, AnyCancellable을 활용해 필요 시 Timer 작업을 취소함으로써 메모리 누수를 방지했습니다.</p>
    </div>
  );
}

function Container933() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[849.43px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph180 />
      </div>
    </div>
  );
}

function Container929() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container930 />
      <Container933 />
    </div>
  );
}

function Icon163() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container936() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon163 />
      </div>
    </div>
  );
}

function Container935() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container936 />
      </div>
    </div>
  );
}

function Paragraph181() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[636.125px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">화면 이동이나 운동 상태 변화 시에도 불필요한 리소스 점유 없이 안정적으로 동작하는 타이머를 구현했습니다.</p>
    </div>
  );
}

function Container937() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[636.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph181 />
      </div>
    </div>
  );
}

function Container934() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container935 />
      <Container937 />
    </div>
  );
}

function Container908() {
  return (
    <div className="absolute content-stretch flex flex-col h-[412.625px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container909 />
      <Container914 />
      <Container929 />
      <Container934 />
    </div>
  );
}

function ProblemSolvingBlock16() {
  return (
    <div className="bg-white h-[519.625px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container906 />
        <Container908 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading109() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[239.5px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">애플워치-아이폰 실시간 데이터 동기화</p>
    </div>
  );
}

function Text203() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[247.5px] rounded-[16777200px] top-[0.75px] w-[106.406px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Connectivity</p>
    </div>
  );
}

function Container939() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading109 />
      <Text203 />
    </div>
  );
}

function Container938() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container939 />
    </div>
  );
}

function Icon164() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container943() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon164 />
      </div>
    </div>
  );
}

function Container944() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container942() {
  return (
    <div className="h-[96.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container943 />
        <Container944 />
      </div>
    </div>
  );
}

function Paragraph182() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[28px] w-[1104px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] w-[1092px]">애플워치에서 측정한 심박수와 칼로리 데이터를 아이폰에 실시간으로 반영해야 했습니다. WatchConnectivity의 기본 구조에서는 전송 주기를 직접 설정할 수 있는 별도 구조가 필요한 상황이었습니다.</p>
    </div>
  );
}

function Container945() {
  return (
    <div className="flex-[1_0_0] h-[96.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph182 />
      </div>
    </div>
  );
}

function Container941() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container942 />
      <Container945 />
    </div>
  );
}

function Icon165() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container948() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon165 />
      </div>
    </div>
  );
}

function Container949() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container947() {
  return (
    <div className="h-[277.875px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container948 />
        <Container949 />
      </div>
    </div>
  );
}

function Icon166() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container954() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon166 />
      </div>
    </div>
  );
}

function Container955() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container953() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container954 />
        <Container955 />
      </div>
    </div>
  );
}

function Paragraph183() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1070px]">WCSessionDelegate의 session(_:didReceive:) 함수를 활용하면 데이터 수신 이벤트를 처리할 수 있지만, 데이터를 얼마나 자주 보내야 실시간처럼 느껴지는지에 대한 기준이 필요했습니다.</p>
    </div>
  );
}

function Container956() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph183 />
      </div>
    </div>
  );
}

function Container952() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container953 />
      <Container956 />
    </div>
  );
}

function Icon167() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pdc43e70} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.pab3a610} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M3.5 10.5H8.5" id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d="M6 1.5V10.5" id="Vector_4" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2de32600} id="Vector_5" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container959() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon167 />
      </div>
    </div>
  );
}

function Container960() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container958() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container959 />
        <Container960 />
      </div>
    </div>
  );
}

function Paragraph184() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1064px]">너무 빈번한 전송은 배터리와 성능에 영향을 줄 수 있고, 너무 드물면 실시간성이 다소 아쉬워집니다. 0.5초, 1초, 2초 간격을 비교해 본 결과, 1초 간격이면 사용자가 실시간으로 체감하면서도 시스템 부하가 적정 수준이라고 판단했습니다.</p>
    </div>
  );
}

function Container961() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#2b7fff] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">대안 비교</p>
        <Paragraph184 />
      </div>
    </div>
  );
}

function Container957() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container958 />
      <Container961 />
    </div>
  );
}

function Icon168() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container964() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon168 />
      </div>
    </div>
  );
}

function Container963() {
  return (
    <div className="h-[50.375px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24.375px] pt-[2px] relative size-full">
        <Container964 />
      </div>
    </div>
  );
}

function Paragraph185() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">별도의 Timer 객체를 구성하여 1초마다 데이터를 전송하고, WCSessionDelegate를 통해 수신 즉시 UI에 반영하는 구조가 실시간성과 효율성을 모두 충족한다고 결론 내렸습니다.</p>
    </div>
  );
}

function Container965() {
  return (
    <div className="flex-[1_0_0] h-[50.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph185 />
      </div>
    </div>
  );
}

function Container962() {
  return (
    <div className="content-stretch flex gap-[10px] h-[50.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container963 />
      <Container965 />
    </div>
  );
}

function Container951() {
  return (
    <div className="absolute content-stretch flex flex-col h-[223.875px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container952 />
      <Container957 />
      <Container962 />
    </div>
  );
}

function Container950() {
  return (
    <div className="flex-[1_0_0] h-[277.875px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container951 />
      </div>
    </div>
  );
}

function Container946() {
  return (
    <div className="content-stretch flex gap-[12px] h-[277.875px] items-start relative shrink-0 w-full" data-name="Container">
      <Container947 />
      <Container950 />
    </div>
  );
}

function Icon169() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container968() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon169 />
      </div>
    </div>
  );
}

function Container969() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container967() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container968 />
        <Container969 />
      </div>
    </div>
  );
}

function Paragraph186() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[924.563px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">별도의 Timer 객체를 구성하여 1초마다 운동 정보를 통신하고, WCSessionDelegate를 통해 아이폰에서 수신한 데이터를 즉시 UI에 반영하도록 구현했습니다.</p>
    </div>
  );
}

function Container970() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[924.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph186 />
      </div>
    </div>
  );
}

function Container966() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container967 />
      <Container970 />
    </div>
  );
}

function Icon170() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container973() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon170 />
      </div>
    </div>
  );
}

function Container972() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container973 />
      </div>
    </div>
  );
}

function Paragraph187() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[649.094px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">사용자가 운동 중 아이폰에서도 심박수와 칼로리 변화를 실시간으로 확인할 수 있는 미러링 경험을 구현했습니다.</p>
    </div>
  );
}

function Container974() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[649.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph187 />
      </div>
    </div>
  );
}

function Container971() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container972 />
      <Container974 />
    </div>
  );
}

function Container940() {
  return (
    <div className="absolute content-stretch flex flex-col h-[499.375px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container941 />
      <Container946 />
      <Container966 />
      <Container971 />
    </div>
  );
}

function ProblemSolvingBlock17() {
  return (
    <div className="bg-white h-[606.375px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container938 />
        <Container940 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading110() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[187.25px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">애플워치 AOD 화면 상태 대응</p>
    </div>
  );
}

function Text204() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[195.25px] rounded-[16777200px] top-[0.75px] w-[102.422px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Optimization</p>
    </div>
  );
}

function Container976() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading110 />
      <Text204 />
    </div>
  );
}

function Container975() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container976 />
    </div>
  );
}

function Icon171() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container980() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon171 />
      </div>
    </div>
  );
}

function Container981() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container979() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container980 />
        <Container981 />
      </div>
    </div>
  );
}

function Paragraph188() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[1016.961px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">애플워치에서 AOD(Always On Display) 상태로 전환되면 화면 업데이트 주기와 리소스 사용이 달라지는데, 이에 맞춰 리소스 활용을 더 효율적으로 개선할 여지가 있었습니다.</p>
    </div>
  );
}

function Container982() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[1016.961px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph188 />
      </div>
    </div>
  );
}

function Container978() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container979 />
      <Container982 />
    </div>
  );
}

function Icon172() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container985() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon172 />
      </div>
    </div>
  );
}

function Container986() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container984() {
  return (
    <div className="h-[191.125px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container985 />
        <Container986 />
      </div>
    </div>
  );
}

function Icon173() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container991() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon173 />
      </div>
    </div>
  );
}

function Container992() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container990() {
  return (
    <div className="h-[62.375px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container991 />
        <Container992 />
      </div>
    </div>
  );
}

function Paragraph189() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">AOD 상태에서도 활성 상태와 동일한 빈도로 UI를 갱신하면, 화면이 저전력 모드임에도 연산이 계속 실행됩니다. 화면 상태에 따라 업데이트 전략을 분기하면 더 효율적입니다.</p>
    </div>
  );
}

function Container993() {
  return (
    <div className="flex-[1_0_0] h-[62.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph189 />
      </div>
    </div>
  );
}

function Container989() {
  return (
    <div className="content-stretch flex gap-[10px] h-[62.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container990 />
      <Container993 />
    </div>
  );
}

function Icon174() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container996() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon174 />
      </div>
    </div>
  );
}

function Container995() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container996 />
      </div>
    </div>
  );
}

function Paragraph190() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1064px]">SwiftUI의 ScenePhase Environment를 통해 현재 화면 상태(active/inactive/background)를 감지할 수 있으므로, AOD 상태에서는 업데이트 빈도를 줄이고 활성 상태에서만 전체 업데이트를 수행하도록 분기하면 배터리 효율과 정보 표시를 모두 달성할 수 있다고 판단했습니다.</p>
    </div>
  );
}

function Container997() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph190 />
      </div>
    </div>
  );
}

function Container994() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container995 />
      <Container997 />
    </div>
  );
}

function Container988() {
  return (
    <div className="absolute content-stretch flex flex-col h-[137.125px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container989 />
      <Container994 />
    </div>
  );
}

function Container987() {
  return (
    <div className="flex-[1_0_0] h-[191.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container988 />
      </div>
    </div>
  );
}

function Container983() {
  return (
    <div className="content-stretch flex gap-[12px] h-[191.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container984 />
      <Container987 />
    </div>
  );
}

function Icon175() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1000() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon175 />
      </div>
    </div>
  );
}

function Container1001() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container999() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container1000 />
        <Container1001 />
      </div>
    </div>
  );
}

function Paragraph191() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[451.148px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">ScenePhase를 감지하여 AOD 상태에서의 화면 업데이트를 최적화했습니다.</p>
    </div>
  );
}

function Container1002() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[451.148px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph191 />
      </div>
    </div>
  );
}

function Container998() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container999 />
      <Container1002 />
    </div>
  );
}

function Icon176() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1005() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon176 />
      </div>
    </div>
  );
}

function Container1004() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container1005 />
      </div>
    </div>
  );
}

function Paragraph192() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[538.523px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">배터리 소모를 줄이면서도 필요한 정보가 항상 표시되는 효율적인 AOD 대응을 구현했습니다.</p>
    </div>
  );
}

function Container1006() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[538.523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph192 />
      </div>
    </div>
  );
}

function Container1003() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1004 />
      <Container1006 />
    </div>
  );
}

function Container977() {
  return (
    <div className="absolute content-stretch flex flex-col h-[388.25px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container978 />
      <Container983 />
      <Container998 />
      <Container1003 />
    </div>
  );
}

function ProblemSolvingBlock18() {
  return (
    <div className="bg-white h-[495.25px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container975 />
        <Container977 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container905() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[1661.25px] items-start relative shrink-0 w-full" data-name="Container">
      <ProblemSolvingBlock16 />
      <ProblemSolvingBlock17 />
      <ProblemSolvingBlock18 />
    </div>
  );
}

function TechSection8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1778.25px] items-start left-[41px] pt-[33px] top-[129px] w-[1198px]" data-name="TechSection">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Heading107 />
      <Container905 />
    </div>
  );
}

function Text205() {
  return <div className="absolute bg-[#155dfc] h-[24px] left-0 rounded-[16777200px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading111() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Text205 />
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[28px] left-[16px] not-italic text-[#0f172b] text-[20px] top-0 whitespace-nowrap">HealthKit 연동 및 아키텍처</p>
    </div>
  );
}

function Heading112() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[204.656px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">애플 피트니스앱과 운동정보 연동</p>
    </div>
  );
}

function Text206() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[212.66px] rounded-[16777200px] top-[0.75px] w-[82.547px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">HealthKit</p>
    </div>
  );
}

function Container1009() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading112 />
      <Text206 />
    </div>
  );
}

function Container1008() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container1009 />
    </div>
  );
}

function Icon177() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1013() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon177 />
      </div>
    </div>
  );
}

function Container1014() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container1012() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container1013 />
        <Container1014 />
      </div>
    </div>
  );
}

function Paragraph193() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[902.453px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">사용자의 운동 데이터(심박수, 칼로리)를 앱 내에서만 관리하는 것을 넘어, 애플의 피트니스앱과도 연동하여 통합적인 건강 관리 경험을 제공하고자 했습니다.</p>
    </div>
  );
}

function Container1015() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[902.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph193 />
      </div>
    </div>
  );
}

function Container1011() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1012 />
      <Container1015 />
    </div>
  );
}

function Icon178() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1018() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon178 />
      </div>
    </div>
  );
}

function Container1019() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container1017() {
  return (
    <div className="h-[191.125px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container1018 />
        <Container1019 />
      </div>
    </div>
  );
}

function Icon179() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1024() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon179 />
      </div>
    </div>
  );
}

function Container1025() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container1023() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container1024 />
        <Container1025 />
      </div>
    </div>
  );
}

function Paragraph194() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1063px]">HKWorkoutSession을 통해 운동 세션을 생성하고, HKWorkoutSessionDelegate로 운동 상태를 핸들링하면 피트니스앱과 자연스럽게 연동할 수 있습니다. 다만 이 로직을 뷰모델에 직접 작성하면 다른 화면에서 재사용 시 추가 작업이 필요해집니다.</p>
    </div>
  );
}

function Container1026() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph194 />
      </div>
    </div>
  );
}

function Container1022() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1023 />
      <Container1026 />
    </div>
  );
}

function Icon180() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1029() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon180 />
      </div>
    </div>
  );
}

function Container1028() {
  return (
    <div className="h-[50.375px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24.375px] pt-[2px] relative size-full">
        <Container1029 />
      </div>
    </div>
  );
}

function Paragraph195() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">운동 세션 관리와 건강 데이터 접근 로직을 별도의 WorkoutManager로 추출하면, 재사용성을 확보하면서도 피트니스앱 연동을 깔끔하게 구현할 수 있다고 판단했습니다.</p>
    </div>
  );
}

function Container1030() {
  return (
    <div className="flex-[1_0_0] h-[50.375px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph195 />
      </div>
    </div>
  );
}

function Container1027() {
  return (
    <div className="content-stretch flex gap-[10px] h-[50.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1028 />
      <Container1030 />
    </div>
  );
}

function Container1021() {
  return (
    <div className="absolute content-stretch flex flex-col h-[137.125px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container1022 />
      <Container1027 />
    </div>
  );
}

function Container1020() {
  return (
    <div className="flex-[1_0_0] h-[191.125px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container1021 />
      </div>
    </div>
  );
}

function Container1016() {
  return (
    <div className="content-stretch flex gap-[12px] h-[191.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1017 />
      <Container1020 />
    </div>
  );
}

function Icon181() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1033() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon181 />
      </div>
    </div>
  );
}

function Container1034() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container1032() {
  return (
    <div className="h-[100.75px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container1033 />
        <Container1034 />
      </div>
    </div>
  );
}

function Paragraph196() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">WorkoutManager를 구성하여 HKWorkoutSession 생성과 운동 상태(시작, 종료, 일시정지, 재개)를 핸들링하는 로직을 구현했습니다.</p>
    </div>
  );
}

function Paragraph197() {
  return (
    <div className="h-[24.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">HKQuantityType으로 필요한 운동정보를 정의하고, HKHealthStore의 requestAuthorization으로 정보 요청 권한을 관리했습니다.</p>
    </div>
  );
}

function Container1036() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[52.75px] items-start left-0 top-[28px] w-[790.641px]" data-name="Container">
      <Paragraph196 />
      <Paragraph197 />
    </div>
  );
}

function Container1035() {
  return (
    <div className="h-[100.75px] relative shrink-0 w-[790.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Container1036 />
      </div>
    </div>
  );
}

function Container1031() {
  return (
    <div className="content-stretch flex gap-[12px] h-[100.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1032 />
      <Container1035 />
    </div>
  );
}

function Icon182() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1039() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon182 />
      </div>
    </div>
  );
}

function Container1038() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container1039 />
      </div>
    </div>
  );
}

function Paragraph198() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[701.023px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">사용자의 인터벌 트레이닝 기록이 애플 피트니스앱에도 자동으로 반영되어, 통합적인 건강 데이터 관리가 가능해졌습니다.</p>
    </div>
  );
}

function Container1040() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[701.023px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph198 />
      </div>
    </div>
  );
}

function Container1037() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1038 />
      <Container1040 />
    </div>
  );
}

function Container1010() {
  return (
    <div className="absolute content-stretch flex flex-col h-[416.625px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container1011 />
      <Container1016 />
      <Container1031 />
      <Container1037 />
    </div>
  );
}

function ProblemSolvingBlock19() {
  return (
    <div className="bg-white h-[523.625px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container1008 />
        <Container1010 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Heading113() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[343.211px]" data-name="Heading 4">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-0.5px] whitespace-nowrap">Clean Architecture 적용 — ViewModel 역할 집중</p>
    </div>
  );
}

function Text207() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#dbeafe] border-solid h-[22.5px] left-[351.21px] rounded-[16777200px] top-[0.75px] w-[107.992px]" data-name="Text">
      <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-[8px] not-italic text-[#155dfc] text-[11px] top-[1.5px] tracking-[0.55px] uppercase whitespace-nowrap">Architecture</p>
    </div>
  );
}

function Container1042() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading113 />
      <Text207 />
    </div>
  );
}

function Container1041() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#f8fafc] h-[57px] items-start left-px pb-px pt-[16px] px-[24px] to-[rgba(239,246,255,0.3)] top-px w-[1196px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container1042 />
    </div>
  );
}

function Icon183() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9843 0.1725 0.2118)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1046() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon183 />
      </div>
    </div>
  );
}

function Container1047() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container1045() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container1046 />
        <Container1047 />
      </div>
    </div>
  );
}

function Paragraph199() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[938.188px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">HealthKit, WatchConnectivity, SwiftData 등 다양한 프레임워크의 로직이 ViewModel에 집중되면서, ViewModel의 역할이 점차 커지는 상황이 되었습니다.</p>
    </div>
  );
}

function Container1048() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[938.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#fb2c36] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">문제 인식</p>
        <Paragraph199 />
      </div>
    </div>
  );
}

function Container1044() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1045 />
      <Container1048 />
    </div>
  );
}

function Icon184() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18577c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 12H10" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
          <path d="M6.66667 14.6667H9.33333" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9961 0.6039 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1051() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon184 />
      </div>
    </div>
  );
}

function Container1052() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container1050() {
  return (
    <div className="h-[302.25px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container1051 />
        <Container1052 />
      </div>
    </div>
  );
}

function Icon185() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p9a79300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
          <path d={svgPaths.p24092800} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.3843 0.4549 0.5569)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1057() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon185 />
      </div>
    </div>
  );
}

function Container1058() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container1056() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container1057 />
        <Container1058 />
      </div>
    </div>
  );
}

function Paragraph200() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1060px]">ViewModel이 UI 상태 관리뿐 아니라 데이터 접근, 디바이스 통신, 로컬 저장까지 모두 담당하고 있어, 하나의 변경이 여러 관심사에 영향을 미치는 상황이었습니다. 코드의 가독성과 유지보수성 측면에서 개선이 필요했습니다.</p>
    </div>
  );
}

function Container1059() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#62748e] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">초기 검토</p>
        <Paragraph200 />
      </div>
    </div>
  );
}

function Container1055() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1056 />
      <Container1059 />
    </div>
  );
}

function Icon186() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1062() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon186 />
      </div>
    </div>
  );
}

function Container1063() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container1061() {
  return (
    <div className="h-[86.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center py-[2px] relative size-full">
        <Container1062 />
        <Container1063 />
      </div>
    </div>
  );
}

function Paragraph201() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1069px]">이 문제는 단순히 코드를 나누는 것이 아니라, 각 관심사의 책임 경계를 계층적으로 분리해야 근본적으로 해결됩니다. 메서드 분리만으로는 의존성이 여전히 ViewModel에 집중되기 때문입니다.</p>
    </div>
  );
}

function Container1064() {
  return (
    <div className="flex-[1_0_0] h-[86.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#e17100] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">한계 발견</p>
        <Paragraph201 />
      </div>
    </div>
  );
}

function Container1060() {
  return (
    <div className="content-stretch flex gap-[10px] h-[86.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1061 />
      <Container1064 />
    </div>
  );
}

function Icon187() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p304dab80} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M4.5 9H7.5" id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          <path d="M5 11H7" id="Vector_3" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1067() {
  return (
    <div className="bg-[#ecfdf5] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon187 />
      </div>
    </div>
  );
}

function Container1066() {
  return (
    <div className="h-[74.75px] relative shrink-0 w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48.75px] pt-[2px] relative size-full">
        <Container1067 />
      </div>
    </div>
  );
}

function Paragraph202() {
  return (
    <div className="absolute h-[48.75px] left-0 top-[26px] w-[1070px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] w-[1070px]">Clean Architecture를 적용하여 HealthKit, WatchConnectivity, SwiftData 로직을 각각 별도 계층으로 분리하면, ViewModel은 UI 상태 관리에만 집중할 수 있고 각 로직의 재사용성도 높아질 것이라 판단했습니다.</p>
    </div>
  );
}

function Container1068() {
  return (
    <div className="flex-[1_0_0] h-[74.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16.5px] left-0 not-italic text-[#096] text-[11px] top-[4px] tracking-[0.55px] uppercase whitespace-nowrap">판단 도출</p>
        <Paragraph202 />
      </div>
    </div>
  );
}

function Container1065() {
  return (
    <div className="content-stretch flex gap-[10px] h-[74.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1066 />
      <Container1068 />
    </div>
  );
}

function Container1054() {
  return (
    <div className="absolute content-stretch flex flex-col h-[248.25px] items-start left-0 top-[34px] w-[1104px]" data-name="Container">
      <Container1055 />
      <Container1060 />
      <Container1065 />
    </div>
  );
}

function Container1053() {
  return (
    <div className="flex-[1_0_0] h-[302.25px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">사고 과정</p>
        <Container1054 />
      </div>
    </div>
  );
}

function Container1049() {
  return (
    <div className="content-stretch flex gap-[12px] h-[302.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1050 />
      <Container1053 />
    </div>
  );
}

function Icon188() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p34fe1800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.1686 0.4980 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1071() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon188 />
      </div>
    </div>
  );
}

function Container1072() {
  return <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Container" />;
}

function Container1070() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pb-[4px] relative size-full">
        <Container1071 />
        <Container1072 />
      </div>
    </div>
  );
}

function Paragraph203() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[1069.445px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#45556c] text-[15px] top-[-1px] whitespace-nowrap">Clean Architecture를 적용하여 HealthKit, WatchConnectivity, SwiftData 로직을 각각 별도 계층으로 분리하고, ViewModel이 이를 조합하여 사용하도록 구조를 재설계했습니다.</p>
    </div>
  );
}

function Container1073() {
  return (
    <div className="h-[72.375px] relative shrink-0 w-[1069.445px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">해결</p>
        <Paragraph203 />
      </div>
    </div>
  );
}

function Container1069() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1070 />
      <Container1073 />
    </div>
  );
}

function Icon189() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3334)" id="Icon">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.7882 0.3137)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_3334">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1076() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon189 />
      </div>
    </div>
  );
}

function Container1075() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[20.375px] relative size-full">
        <Container1076 />
      </div>
    </div>
  );
}

function Paragraph204() {
  return (
    <div className="absolute h-[24.375px] left-0 top-[28px] w-[762.68px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[24.375px] left-0 not-italic text-[#314158] text-[15px] top-[-1px] whitespace-nowrap">ViewModel의 책임이 명확해지고, 각 프레임워크 로직의 독립적인 테스트와 재사용이 가능해져 유지보수성이 크게 향상되었습니다.</p>
    </div>
  );
}

function Container1077() {
  return (
    <div className="h-[52.375px] relative shrink-0 w-[762.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[3px] tracking-[0.6px] uppercase whitespace-nowrap">결과</p>
        <Paragraph204 />
      </div>
    </div>
  );
}

function Container1074() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1075 />
      <Container1077 />
    </div>
  );
}

function Container1043() {
  return (
    <div className="absolute content-stretch flex flex-col h-[499.375px] items-start left-[25px] top-[82px] w-[1148px]" data-name="Container">
      <Container1044 />
      <Container1049 />
      <Container1069 />
      <Container1074 />
    </div>
  );
}

function ProblemSolvingBlock20() {
  return (
    <div className="bg-white h-[606.375px] relative rounded-[14px] shrink-0 w-full" data-name="ProblemSolvingBlock">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container1041 />
        <Container1043 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container1007() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[1150px] items-start relative shrink-0 w-full" data-name="Container">
      <ProblemSolvingBlock19 />
      <ProblemSolvingBlock20 />
    </div>
  );
}

function TechSection9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1267px] items-start left-[41px] pt-[33px] top-[1907.25px] w-[1198px]" data-name="TechSection">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.6)] border-solid border-t inset-0 pointer-events-none" />
      <Heading111 />
      <Container1007 />
    </div>
  );
}

function Container903() {
  return (
    <div className="bg-white h-[3215.25px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container904 />
      <TechSection8 />
      <TechSection9 />
    </div>
  );
}

function InterestSection2() {
  return (
    <div className="h-[3589.5px] relative shrink-0 w-[1280px]" data-name="InterestSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start relative size-full">
        <Container892 />
        <Container903 />
      </div>
    </div>
  );
}

function Section10() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[3781.5px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <InterestSection2 />
    </div>
  );
}

function Heading114() {
  return (
    <div className="h-[40px] relative shrink-0 w-[227.289px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Bold',sans-serif] leading-[40px] left-[114px] not-italic text-[#0f172b] text-[36px] text-center top-[-0.5px] whitespace-nowrap">{`Let's connect`}</p>
      </div>
    </div>
  );
}

function Paragraph205() {
  return (
    <div className="h-[48px] relative shrink-0 w-[576px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[24px] left-[288.13px] not-italic text-[#45556c] text-[16px] text-center top-[-0.5px] w-[570px]">환경이나 상황을 이유로 한계를 짓기보다, 실제로 문제를 해결하고 결과를 만들어내는 개발자가 되고자 합니다.</p>
      </div>
    </div>
  );
}

function Icon190() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p12e60400} id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0588 0.0902 0.1686)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0003 7.99614">
            <path d={svgPaths.p30e63d00} id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0588 0.0902 0.1686)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[58px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Icon190 />
      </div>
    </div>
  );
}

function Icon191() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.62%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0227 22">
            <path d={svgPaths.p5794b40} id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0588 0.0902 0.1686)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_62.5%_22.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-39.06%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00025 4.56006">
            <path d="M8 3C3.49 5 3 1 1 1" id="Vector" stroke="var(--stroke-0, #0F172B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0588 0.0902 0.1686)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[58px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Icon191 />
      </div>
    </div>
  );
}

function Container1078() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[132px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Container1079() {
  return (
    <div className="h-[52px] relative shrink-0 w-[266.648px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[133.5px] not-italic text-[#90a1b9] text-[14px] text-center top-[31.5px] whitespace-nowrap">© 2025 Kim Dohyeong. All rights reserved.</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[294px] relative shrink-0 w-[1280px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-center relative size-full">
        <Heading114 />
        <Paragraph205 />
        <Container1078 />
        <Container1079 />
      </div>
    </div>
  );
}

function Section11() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[486px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[26492.5px] items-start relative shrink-0 w-full" data-name="App">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-[#171717] content-stretch flex flex-col h-[1118px] items-start left-0 top-0 w-[1466px]" data-name="Body">
      <App />
    </div>
  );
}

function ImageErrorLoadingImage5() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Image (Error loading image)">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Image (Error loading image)">
          <path d={svgPaths.p3ade980} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d="M16 58L32 40L64 72" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p3dea400} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3.7" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex h-[88px] items-center justify-center relative rounded-[10px] shrink-0 w-full" data-name="ImageWithFallback">
      <ImageErrorLoadingImage5 />
    </div>
  );
}

function Container1080() {
  return (
    <div className="bg-white h-[122px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <ImageWithFallback5 />
      </div>
    </div>
  );
}

function Paragraph206() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard:Regular',sans-serif] leading-[20px] left-[200.49px] not-italic text-[#62748e] text-[14px] text-center top-[-0.5px] w-[389px]">TCA의 구조적 이점을 RxSwift 생태계로 가져와, 상태 관리의 예측 가능성을 높였습니다.</p>
    </div>
  );
}

function RxComposeSection1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[178px] items-start left-[973px] top-[3556.5px] w-[400px]" data-name="RxComposeSection">
      <Container1080 />
      <Paragraph206 />
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[133.109px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Pretendard:Bold',sans-serif] leading-[0] left-0 not-italic text-[#0f172b] text-[18px] top-0 tracking-[-0.45px] whitespace-nowrap">
          <span className="leading-[28px]">{`KIM `}</span>
          <span className="leading-[28px] text-[#155dfc]">DOHYEONG</span>
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.609px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[19.5px] not-italic text-[#62748e] text-[14px] text-center top-[-0.5px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40.633px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[20.5px] not-italic text-[#62748e] text-[14px] text-center top-[-0.5px] whitespace-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[39px] not-italic text-[#62748e] text-[14px] text-center top-[-0.5px] whitespace-nowrap">RxCompose</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34.82px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[17.5px] not-italic text-[#62748e] text-[14px] text-center top-[-0.5px] whitespace-nowrap">Filtee</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.055px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[16.5px] not-italic text-[#62748e] text-[14px] text-center top-[-0.5px] whitespace-nowrap">Pokit</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.922px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[28.5px] not-italic text-[#62748e] text-[14px] text-center top-[-0.5px] whitespace-nowrap">ShowPot</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.891px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard:Medium',sans-serif] leading-[20px] left-[24.5px] not-italic text-[#62748e] text-[14px] text-center top-[-0.5px] whitespace-nowrap">Interest</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[20px] relative shrink-0 w-[472.945px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container1081() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] relative size-full">
          <Link8 />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[53px] items-start left-0 pb-px pt-[12px] px-[93px] top-[5842px] w-[1466px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container1081 />
    </div>
  );
}

export default function PortfolioDesignRequest() {
  return (
    <div className="bg-[#171717] relative size-full" data-name="Portfolio Design Request">
      <Body />
      <RxComposeSection1 />
      <Header />
    </div>
  );
}