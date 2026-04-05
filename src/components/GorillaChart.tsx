import { CONSULTANTS, AVATAR_COLORS } from "@/data/consultants";
import { ChevronRight, ChevronLeft, MessageCircle } from "lucide-react";
import { useRef } from "react";

const GorillaChart = () => {
  const featured = CONSULTANTS.filter((c) => c.featured);
  const topList = [...featured, ...CONSULTANTS.filter(c => !c.featured).slice(0, 2)];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -296 : 296, behavior: "smooth" });
  };

  return (
    <section id="chart" className="bg-card mt-2">
      <div className="max-w-[640px] mx-auto px-5 py-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[17px] font-extrabold text-foreground">인기 컨설턴트</h2>
          <a href="#consultants" className="text-[12px] text-sub2 flex items-center gap-0.5">
            전체보기 <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-card border border-border shadow-md items-center justify-center hover:bg-muted transition-colors"
            aria-label="이전"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-card border border-border shadow-md items-center justify-center hover:bg-muted transition-colors"
            aria-label="다음"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-3 -mx-1 px-1 snap-x snap-mandatory">
            {topList.map((c) => {
              const color = AVATAR_COLORS[CONSULTANTS.indexOf(c) % AVATAR_COLORS.length];
              return (
                <div
                  key={c.name}
                  className="group shrink-0 w-[280px] rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow snap-start"
                >
                  <div className="relative w-full h-[320px] overflow-hidden bg-muted">
                    <div
                      className="absolute -top-16 left-1/2 -translate-x-1/2 w-[220px] h-[220px] rounded-full opacity-30"
                      style={{ background: `hsl(var(--gold))` }}
                    />
                    {c.profileImage ? (
                      <img
                        src={c.profileImage}
                        alt={c.name}
                        className="w-full h-full object-cover object-top relative z-10 transition-transform duration-300 group-hover:scale-105"
                        style={{ filter: 'brightness(1.05)' }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center relative z-10">
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl font-extrabold ${color.bg} ${color.text}`}>
                          {c.name[0]}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex gap-1.5 flex-wrap mb-2">
                      {c.specialties.map((s) => (
                        <span key={s} className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-sub2 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-[12px] text-sub leading-relaxed line-clamp-1 mb-2">
                      {c.tagline}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[16px] font-extrabold text-primary">{c.name}</span>
                      <span className="text-[12px] text-sub2">{c.nickname}</span>
                      {c.featured && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary">LEAD</span>
                      )}
                    </div>
                    <a
                      href={c.kakaoChat}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary text-primary-foreground text-[13px] font-bold hover:brightness-95 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" /> 카카오톡 상담
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GorillaChart;
