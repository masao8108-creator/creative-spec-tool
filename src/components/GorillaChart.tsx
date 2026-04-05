import { CONSULTANTS, AVATAR_COLORS } from "@/data/consultants";

const columns = [
  {
    title: "👍 실시간 인기",
    getList: () => {
      const featured = CONSULTANTS.filter((c) => c.featured);
      const rest = CONSULTANTS.filter((c) => !c.featured).slice(0, 2);
      return [...featured, ...rest];
    },
    badge: (i: number) => (i === 0 ? "1위" : `${i + 1}위`),
  },
  {
    title: "👍 전문분야 추천",
    getList: () => {
      const bySpec = ["자동차보험", "실손보험", "종신보험", "화재보험"];
      return bySpec.map((s) => CONSULTANTS.find((c) => c.specialties.includes(s))!).filter(Boolean);
    },
    badge: (_: number, c: typeof CONSULTANTS[0]) => c.specialties[0],
  },
  {
    title: "👍 베테랑 추천",
    getList: () => [
      CONSULTANTS.find((c) => c.nickname === "보험아빠")!,
      CONSULTANTS.find((c) => c.nickname === "미니멀플랜")!,
      CONSULTANTS.find((c) => c.nickname === "베테랑")!,
      CONSULTANTS.find((c) => c.nickname === "보험프렌즈")!,
    ],
    badge: () => "베테랑",
  },
];

const GorillaChart = () => (
  <section id="chart" className="bg-section-alt border-b border-border">
    <div className="max-w-[1200px] mx-auto px-5 py-8">
      <h2 className="text-xl font-extrabold mb-6">고릴라차트</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {columns.map((col) => {
          const list = col.getList();
          return (
            <div key={col.title} className="bg-card rounded-lg border border-border">
              <div className="px-4 py-3 border-b border-border">
                <h3 className="text-sm font-extrabold">{col.title}</h3>
              </div>
              <div className="divide-y divide-border">
                {list.map((c, i) => {
                  const color = AVATAR_COLORS[CONSULTANTS.indexOf(c) % AVATAR_COLORS.length];
                  const badgeText = col.badge(i, c);
                  return (
                    <a
                      key={c.name + col.title}
                      href={c.kakaoChat}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors group"
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold shrink-0 ${color.bg} ${color.text}`}>
                        {c.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-bold truncate">
                          {c.name}
                          <span className="font-normal text-sub2 ml-1">{c.nickname}</span>
                        </div>
                        <div className="text-[11px] text-sub truncate">{c.tagline.slice(0, 30)}…</div>
                      </div>
                      <span className="text-[10px] font-bold text-primary whitespace-nowrap shrink-0">
                        {badgeText}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default GorillaChart;
