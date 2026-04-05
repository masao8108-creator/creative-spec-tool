import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    badge: "🛡️ 뽐뿌 공식 보험상담실",
    title: "보험, 누구에게\n물어볼지 고민이라면",
    subtitle: "15년간 뽐뿌 회원님과 함께해 온\n스테디그룹 인증 컨설턴트를 만나보세요",
    bg: "bg-gradient-to-r from-amber-50 to-orange-50",
    emoji: "🏆",
  },
  {
    badge: "⭐ 검증된 전문가 12명",
    title: "카카오톡으로\n바로 상담하세요",
    subtitle: "자동차·실손·건강·종신·화재보험\n전문분야별 최적의 컨설턴트 매칭",
    bg: "bg-gradient-to-r from-sky-50 to-indigo-50",
    emoji: "💬",
  },
  {
    badge: "🔥 4월 상담 이벤트",
    title: "보험료 절약\n무료 진단 받기",
    subtitle: "현재 가입된 보험, 꼭 필요한 보장만\n남기고 보험료를 줄여보세요",
    bg: "bg-gradient-to-r from-emerald-50 to-teal-50",
    emoji: "📋",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className={`relative ${slide.bg} transition-colors duration-500`}>
      <div className="max-w-[1200px] mx-auto px-5 py-10 sm:py-16 flex items-center justify-between">
        <div className="flex-1">
          <span className="inline-block text-xs font-bold text-primary mb-3 tracking-wide">
            {slide.badge}
          </span>
          <h1 className="text-2xl sm:text-[32px] font-extrabold leading-tight text-foreground whitespace-pre-line mb-3">
            {slide.title}
          </h1>
          <p className="text-sm text-sub leading-relaxed whitespace-pre-line">{slide.subtitle}</p>
        </div>
        <div className="hidden sm:flex items-center justify-center w-40 h-40 text-7xl">
          {slide.emoji}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-sub2 hover:text-foreground transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrent((p) => (p + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-sub2 hover:text-foreground transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-5" : "bg-border"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
