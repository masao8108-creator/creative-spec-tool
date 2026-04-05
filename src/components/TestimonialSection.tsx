import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "김**",
    rating: 5,
    text: "보험 리모델링 상담 받았는데, 불필요한 특약 정리하고 보험료를 30% 넘게 줄였어요. 진작 상담할걸 후회됩니다.",
    consultant: "이지혜 컨설턴트",
    date: "2026.03",
  },
  {
    name: "박**",
    rating: 5,
    text: "아이 태아보험 가입 때 3곳 비교해주시고, 장단점을 꼼꼼하게 설명해주셔서 믿고 가입했습니다.",
    consultant: "한명진 컨설턴트",
    date: "2026.02",
  },
  {
    name: "최**",
    rating: 5,
    text: "운전자보험 갱신할 때 여러 상품을 비교 분석해주셔서 합리적인 선택을 할 수 있었어요. 감사합니다!",
    consultant: "류미선 컨설턴트",
    date: "2026.01",
  },
  {
    name: "정**",
    rating: 4,
    text: "카카오톡으로 편하게 상담받을 수 있어서 좋았고, 응답도 빨라서 만족합니다.",
    consultant: "이지혜 컨설턴트",
    date: "2025.12",
  },
  {
    name: "이**",
    rating: 5,
    text: "종신보험 vs 정기보험 차이를 쉽게 설명해주셔서 보험에 대한 이해가 훨씬 좋아졌어요.",
    consultant: "한명진 컨설턴트",
    date: "2025.11",
  },
];

const TestimonialSection = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="bg-card mt-2">
      <div className="max-w-[640px] mx-auto px-5 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[16px] font-extrabold text-foreground">⭐ 고객 후기</h2>
          <span className="text-[12px] text-sub2">실제 상담 후기</span>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full bg-card border border-border shadow-md hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full bg-card border border-border shadow-md hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="min-w-[260px] max-w-[260px] snap-start bg-background rounded-2xl border border-border p-4 hover:shadow-sm transition-shadow flex-shrink-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`w-3.5 h-3.5 ${
                          si < t.rating
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-sub2">{t.date}</span>
                </div>

                <p className="text-[13px] text-foreground leading-relaxed mb-2.5 line-clamp-3">
                  "{t.text}"
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-sub">{t.name}</span>
                  <span className="text-[11px] text-primary font-medium">{t.consultant}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
