import { CONSULTANTS, shuffle } from "@/data/consultants";
import { ChevronRight, ChevronLeft, MessageCircle } from "lucide-react";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";

const ChartCardImage = ({ name, profileImage }: { name: string; profileImage: string }) => {
  const [imgError, setImgError] = useState(false);

  const getBgColor = () => {
    if (name === '유승협') return '#e8e6e1';
    return '#f0f0ec';
  };

  if (imgError) {
    return (
      <div className="w-full h-[280px] flex items-center justify-center bg-muted">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #E5A31D, #f0c45c)' }}
        >
          <span className="text-[32px] font-[800] text-white">{name[0]}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={profileImage}
      alt={name}
      className="w-full h-[280px] object-cover"
      style={{
        filter: 'brightness(1.05)',
        backgroundColor: getBgColor(),
        objectPosition: name === '최민희' ? 'center 10%' : 'center 15%',
      }}
      onError={() => {
        console.warn(`[프로필 이미지 로드 실패] ${name}: ${profileImage}`);
        setImgError(true);
      }}
    />
  );
};

const GorillaChart = ({ filter = "전체" }: { filter?: string }) => {
  const allBase = useMemo(() => shuffle([...CONSULTANTS]), []);
  const allConsultants = filter === "전체" ? allBase : allBase.filter(c => c.specialties.includes(filter));

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardWidth = 260;
  const gap = 16;

  const totalCards = allConsultants.length;

  const updateActiveIndex = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, totalCards - 1));
  }, [totalCards]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  // Pause auto-slide on user interaction, resume after 5s
  const handleUserInteraction = useCallback(() => {
    setPaused(true);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setPaused(false), 5000);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onTouch = () => handleUserInteraction();
    el.addEventListener("touchstart", onTouch, { passive: true });
    el.addEventListener("pointerdown", onTouch);
    return () => {
      el.removeEventListener("touchstart", onTouch);
      el.removeEventListener("pointerdown", onTouch);
    };
  }, [handleUserInteraction]);

  // Auto-slide every 2 seconds (pauses on interaction)
  useEffect(() => {
    if (totalCards <= 1 || paused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1 >= totalCards ? 0 : prev + 1;
        scrollRef.current?.scrollTo({ left: next * (cardWidth + gap), behavior: "smooth" });
        return next;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [totalCards, cardWidth, gap, paused]);

  const scroll = (dir: "left" | "right") => {
    handleUserInteraction();
    scrollRef.current?.scrollBy({ left: dir === "left" ? -(cardWidth + gap) : (cardWidth + gap), behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    handleUserInteraction();
    scrollRef.current?.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <section id="consultants" className="bg-card mt-2">
      <div className="max-w-[640px] mx-auto px-5 py-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[17px] font-extrabold text-foreground">인증 컨설턴트</h2>
          <span className="text-[12px] text-sub2">{totalCards}명</span>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-3 top-[140px] z-20 w-9 h-9 rounded-full bg-card border border-border shadow-md items-center justify-center hover:bg-muted transition-colors"
            aria-label="이전"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-3 top-[140px] z-20 w-9 h-9 rounded-full bg-card border border-border shadow-md items-center justify-center hover:bg-muted transition-colors"
            aria-label="다음"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-3 -mx-1 px-1"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {allConsultants.map((c) => (
              <div
                key={c.name}
                className="group shrink-0 rounded-2xl bg-card overflow-hidden hover:shadow-md transition-shadow"
                style={{
                  width: `${cardWidth}px`,
                  scrollSnapAlign: "start",
                  border: c.featured ? '2px solid #E5A31D' : '1px solid hsl(var(--border))',
                }}
              >
                <div className="overflow-hidden">
                  <ChartCardImage name={c.name} profileImage={c.profileImage} />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 flex-wrap mb-1">
                    <span className="text-[16px] font-extrabold text-foreground">{c.name}</span>
                    <span className="text-[12px] text-sub2">{c.nickname}</span>
                  </div>
                  <div className="flex items-center gap-1 flex-wrap mb-2">
                    <span className="text-[12px] font-extrabold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 flex items-center gap-0.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
                      뽐뿌인증컨설턴트
                    </span>
                    {c.featured && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 border border-amber-300/50">⭐ 우수설계사</span>
                    )}
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-muted text-sub">{c.yearsOfExperience}년차</span>
                  </div>
                  <p className="text-[12px] text-sub leading-relaxed line-clamp-1 mb-2">
                    {c.tagline}
                  </p>
                  <div className="flex gap-1 mb-3 flex-wrap">
                    {c.specialties.map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-sub2 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={c.kakaoChat || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-[13px] font-bold hover:brightness-95 transition-all"
                    style={{ background: 'linear-gradient(135deg, #E5A31D, #f0c45c)', color: '#fff' }}
                  >
                    <MessageCircle className="w-4 h-4" /> 카카오톡 상담
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-2">
            {allConsultants.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-primary w-4' : 'bg-border'}`}
                aria-label={`${i + 1}번째 컨설턴트`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GorillaChart;
