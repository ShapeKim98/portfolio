import { FadeInView } from "../animation";
import { ContentCard } from "../ContentCard";

export function RxComposeArchitectureDiagram() {
  return (
    <FadeInView>
      <ContentCard className="mb-10">
        <h4 className="text-md font-bold text-foreground mb-5 tracking-snug">
          RxCompose 단방향 데이터 흐름 구조도
        </h4>

        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 672 206"
            className="w-full"
            style={{ minWidth: "520px" }}
          >
            <defs>
              <marker id="rxah-v" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#7c3aed" />
              </marker>
              <marker id="rxah-a" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#f59e0b" />
              </marker>
              <marker id="rxah-r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#ef4444" />
              </marker>
              <marker id="rxah-g" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#22c55e" />
              </marker>
              <marker id="rxah-o" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#f97316" />
              </marker>
              <marker id="rxah-b" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#3b82f6" />
              </marker>
            </defs>

            {/* View: x=8, w=54, right=62, cx=35 */}
            <rect x="8" y="14" width="54" height="40" rx="8"
              fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5"/>
            <text x="35" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3b82f6">View</text>
            <text x="35" y="44" textAnchor="middle" fontSize="6.5" fill="#94a3b8">@Compose</text>

            {/* → send()  62→84 */}
            <line x1="62" y1="34" x2="84" y2="34" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#rxah-v)"/>
            <text x="73" y="27" textAnchor="middle" fontSize="6" fill="#7c3aed" fontWeight="600">send()</text>

            {/* Action: x=84, w=60, right=144, cx=114 */}
            <rect x="84" y="14" width="60" height="40" rx="8"
              fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5"/>
            <text x="114" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7c3aed">Action</text>
            <text x="114" y="44" textAnchor="middle" fontSize="6" fill="#94a3b8">PublishRelay</text>

            {/* → bind()  144→166 */}
            <line x1="144" y1="34" x2="166" y2="34" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#rxah-a)"/>
            <text x="155" y="27" textAnchor="middle" fontSize="6" fill="#f59e0b" fontWeight="600">bind()</text>

            {/* Reducer: x=166, w=64, right=230, cx=198 */}
            <rect x="166" y="14" width="64" height="40" rx="8"
              fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.5)" strokeWidth="1.5"/>
            <text x="198" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f59e0b">Reducer</text>
            <text x="198" y="44" textAnchor="middle" fontSize="6" fill="#94a3b8">reducer(&amp;state,…)</text>

            {/* → returns  230→252 */}
            <line x1="230" y1="34" x2="252" y2="34" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#rxah-r)"/>
            <text x="241" y="27" textAnchor="middle" fontSize="6" fill="#ef4444" fontWeight="600">returns</text>

            {/* Effect<Action>: x=252, w=68, right=320, cx=286 */}
            <rect x="252" y="14" width="68" height="40" rx="8"
              fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5"/>
            <text x="286" y="29" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ef4444">Effect&lt;Action&gt;</text>
            <text x="286" y="43" textAnchor="middle" fontSize="6" fill="#94a3b8">유형에 따라 분기</text>

            {/* Effect → 분기 블럭  320→338 */}
            <line x1="320" y1="34" x2="338" y2="34" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#rxah-r)"/>

            {/* 섹션 배경 */}
            <rect x="338.5" y="14.5" width="143" height="39"   rx="7"    fill="rgba(34,197,94,0.08)"/>
            <rect x="338.5" y="54"   width="143" height="34"             fill="rgba(124,58,237,0.06)"/>
            <rect x="338.5" y="88"   width="143" height="76"             fill="rgba(249,115,22,0.06)"/>
            <rect x="338.5" y="164"  width="143" height="29.5" rx="7"    fill="rgba(239,68,68,0.05)"/>

            {/* 외곽 테두리 */}
            <rect x="338" y="14" width="144" height="180" rx="8"
              fill="none" stroke="rgba(148,163,184,0.6)" strokeWidth="1.5"/>

            {/* 구분선 */}
            <line x1="339" y1="54"  x2="481" y2="54"  stroke="rgba(148,163,184,0.4)" strokeWidth="1"/>
            <line x1="339" y1="88"  x2="481" y2="88"  stroke="rgba(148,163,184,0.4)" strokeWidth="1"/>
            <line x1="339" y1="164" x2="481" y2="164" stroke="rgba(148,163,184,0.4)" strokeWidth="1"/>

            {/* .none 섹션 (cy=34) */}
            <text x="410" y="31" textAnchor="middle" fontSize="9" fontWeight="700" fill="#22c55e">.none</text>
            <text x="410" y="45" textAnchor="middle" fontSize="6.5" fill="#94a3b8">Effect 종료 — State 갱신</text>

            {/* .send 섹션 (cy=71) */}
            <text x="410" y="69" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7c3aed">.send(Action)</text>
            <text x="410" y="81" textAnchor="middle" fontSize="6.5" fill="#94a3b8">새 Action 재귀 디스패치</text>

            {/* Side Effect 섹션 (y=88~164) */}
            <text x="410" y="104" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">Side Effect</text>
            <text x="410" y="116" textAnchor="middle" fontSize="6.5" fill="#94a3b8">단방향 흐름 외부에서 독립 동작</text>
            <rect x="350" y="121" width="120" height="22" rx="4"
              fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.3)" strokeWidth="1"/>
            <text x="410" y="136" textAnchor="middle" fontSize="7" fontWeight="600" fill="#f59e0b">.run / .timer / .interval</text>
            <text x="410" y="154" textAnchor="middle" fontSize="6" fill="rgba(249,115,22,0.7)" fontStyle="italic">완료 후 Action으로 직렬화</text>

            {/* .cancel 섹션 (cy=179) */}
            <text x="410" y="177" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ef4444">.cancel()</text>
            <text x="410" y="188" textAnchor="middle" fontSize="6.5" fill="#94a3b8">Side Effect 취소</text>

            {/* .send → Action */}
            <path d="M 338,71 L 109,71 L 109,54"
              fill="none" stroke="#7c3aed" strokeWidth="1.3" strokeDasharray="4 2" markerEnd="url(#rxah-v)"/>
            <text x="223" y="65" textAnchor="middle" fontSize="6" fill="#7c3aed" fontWeight="600">재진입</text>

            {/* SideEffect → Action */}
            <path d="M 338,126 L 99,126 L 99,54"
              fill="none" stroke="#f97316" strokeWidth="1.3" strokeDasharray="4 2" markerEnd="url(#rxah-o)"/>
            <text x="218" y="120" textAnchor="middle" fontSize="6" fill="#f97316" fontWeight="600">직렬화 후 재진입</text>

            {/* 블럭(.none) → State  482→500 */}
            <line x1="482" y1="34" x2="500" y2="34" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#rxah-g)"/>

            {/* State: x=500, w=60, right=560, cx=530 */}
            <rect x="500" y="14" width="60" height="40" rx="8"
              fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.5)" strokeWidth="1.5"/>
            <text x="530" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#22c55e">State</text>
            <text x="530" y="44" textAnchor="middle" fontSize="6" fill="#94a3b8">@ComposableState</text>

            {/* → Driver  560→578 */}
            <line x1="560" y1="34" x2="578" y2="34" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#rxah-b)"/>
            <text x="569" y="27" textAnchor="middle" fontSize="6" fill="#3b82f6" fontWeight="600">Driver</text>

            {/* View 바인딩: x=578, w=86, right=664, cx=621 */}
            <rect x="578" y="14" width="86" height="40" rx="8"
              fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="5 3"/>
            <text x="621" y="30" textAnchor="middle" fontSize="9" fontWeight="600" fill="#3b82f6">View 바인딩 ↩</text>
            <text x="621" y="44" textAnchor="middle" fontSize="6" fill="#94a3b8">사이클 완성</text>

            {/* @PresentState 주석 */}
            <line x1="530" y1="54" x2="530" y2="62"
              stroke="rgba(124,58,237,0.4)" strokeWidth="1" strokeDasharray="2 2"/>
            <rect x="484" y="62" width="92" height="38" rx="4"
              fill="rgba(124,58,237,0.04)" stroke="rgba(124,58,237,0.25)" strokeWidth="1" strokeDasharray="4 2"/>
            <text x="530" y="76" textAnchor="middle" fontSize="7.5" fill="#7c3aed" fontWeight="700">@PresentState</text>
            <text x="530" y="87" textAnchor="middle" fontSize="6" fill="#94a3b8">특정 프로퍼티 변경만 감지</text>
            <text x="530" y="96" textAnchor="middle" fontSize="6" fill="#94a3b8">present()로 화면 전환에 활용</text>

          </svg>
        </div>
      </ContentCard>
    </FadeInView>
  );
}
