import { VerticalFlow } from "@/app/organisms/VerticalFlow";

export function JWTRefreshDiagram() {
  return (
    <>
      <h6 className="text-sm font-semibold text-foreground mb-4 text-center">JWT 리프레시 구조에 착안한 재파싱 로직 흐름</h6>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* 왼쪽: JWT 패턴 대응 설명 */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">JWT 패턴과의 대응</p>
          <div className="space-y-2">
            {[
              { jwt: "API 요청", thumbnail: "썸네일 조회 요청", color: "#2563eb" },
              { jwt: "401 (토큰 만료)", thumbnail: "이미지 로드 실패 (URL 만료)", color: "#ef4444" },
              { jwt: "리프레시 토큰으로 재발급", thumbnail: "URL 재파싱 트리거", color: "#f59e0b" },
              { jwt: "새 액세스 토큰 저장", thumbnail: "새 썸네일 URL 추출 + 갱신 API", color: "#7c3aed" },
              { jwt: "원래 요청 재시도", thumbnail: "유효한 썸네일 표시", color: "#22c55e" },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-2 gap-2 items-center">
                <div
                  className="px-2 py-1.5 rounded text-center"
                  style={{ backgroundColor: item.color + "10", border: `1px solid ${item.color}30` }}
                >
                  <span className="text-xxs font-medium" style={{ color: item.color }}>{item.jwt}</span>
                </div>
                <div
                  className="px-2 py-1.5 rounded text-center"
                  style={{ backgroundColor: item.color + "10", border: `1px solid ${item.color}30` }}
                >
                  <span className="text-xxs font-semibold" style={{ color: item.color }}>{item.thumbnail}</span>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <p className="text-2xs text-center text-muted-foreground">JWT 패턴</p>
              <p className="text-2xs text-center text-muted-foreground">썸네일 재파싱</p>
            </div>
          </div>
        </div>

        {/* 오른쪽: 실제 플로우 */}
        <VerticalFlow
          maxWidth="max-w-[210px]"
          steps={[
            { label: "썸네일 조회 요청", color: "#2563eb" },
            { label: "이미지 로드 실패", color: "#ef4444", sub: "만료된 URL 감지" },
            { label: "URL 재파싱 트리거", color: "#f59e0b" },
            { label: "새 썸네일 URL 추출", color: "#7c3aed" },
            { label: "링크 데이터 갱신 API", color: "#7c3aed", sub: "서버 개발자 협업 제안" },
            { label: "유효한 썸네일 표시", color: "#22c55e" },
          ]}
        />
      </div>
    </>
  );
}
