import { CONSULTANTS, AVATAR_COLORS } from "@/data/consultants";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const GorillaChart = () => {
  const [showAll, setShowAll] = useState(false);
  const featured = CONSULTANTS.filter((c) => c.featured);
  const topList = showAll ? [...featured, ...CONSULTANTS.filter(c => !c.featured).slice(0, 3)] : featured;

  return (
    <section id="chart" className="bg-card mt-2">
      <div className="max-w-[640px] mx-auto px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[15px] font-bold text-foreground">인기 컨설턴트</h2>
          <a href="#consultants" className="text-[12px] text-sub2 flex items-center gap-0.5">
            전체보기 <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Horizontal scroll cards like Naver Pay */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
          {topList.map((c, i) => {
            const color = AVATAR_COLORS[CONSULTANTS.indexOf(c) % AVATAR_COLORS.length];
            return (
              <a
                key={c.name}
                href={c.kakaoChat}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-[140px] rounded-2xl border border-border bg-card p-3.5 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-[10px] font-bold text-primary bg-gold-light px-1.5 py-0.5 rounded">
                    {c.featured ? "LEAD" : `TOP ${i + 1}`}
                  </span>
                </div>
                <Avatar className="w-11 h-11 rounded-xl">
                  {c.profileImage && <AvatarImage src={c.profileImage} alt={c.name} className="object-cover" />}
                  <AvatarFallback className={`rounded-xl text-lg font-extrabold ${color.bg} ${color.text}`}>{c.name[0]}</AvatarFallback>
                </Avatar>
                <div className="text-[13px] font-bold text-foreground truncate">{c.name}</div>
                <div className="text-[11px] text-sub mt-0.5 truncate">{c.nickname}</div>
                <div className="text-[11px] text-sub2 mt-1 line-clamp-2 leading-relaxed">{c.tagline.slice(0, 25)}…</div>
              </a>
            );
          })}
        </div>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="w-full flex items-center justify-center gap-1 mt-2 py-2 text-[12px] text-sub2 hover:text-foreground transition-colors"
          >
            더보기 <ChevronDown className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </section>
  );
};

export default GorillaChart;
