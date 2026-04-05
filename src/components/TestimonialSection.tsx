import React, { useMemo } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { shuffle } from "@/data/consultants";

const TESTIMONIALS = [
  { name: "김**", rating: 5, text: "자동차보험 만기라 비교 견적 받았는데, 다이렉트보다 보장은 넓고 보험료는 비슷하게 나왔어요. 왜 설계사를 통해야 하는지 이해했습니다.", consultant: "경주현 컨설턴트", date: "2026.03" },
  { name: "이**", rating: 5, text: "뽐뿌에서 14년째 활동하시는 분이라 믿고 맡겼습니다. 기존 보험 3개 정리해서 월 8만원 줄었어요.", consultant: "전형근 컨설턴트", date: "2026.03" },
  { name: "박**", rating: 5, text: "아이 태아보험 가입 때 3곳 비교해주시고, 장단점을 꼼꼼하게 설명해주셔서 믿고 가입했습니다.", consultant: "변혜미 컨설턴트", date: "2026.02" },
  { name: "최**", rating: 5, text: "실손보험 5세대 전환 고민이었는데, 기존 유지가 유리한 이유를 숫자로 보여주셔서 확신이 생겼어요.", consultant: "진유림 컨설턴트", date: "2026.02" },
  { name: "정**", rating: 5, text: "보험 리모델링 상담 받았는데, 불필요한 특약 정리하고 보험료를 30% 넘게 줄였어요. 진작 상담할걸.", consultant: "한은택 컨설턴트", date: "2026.02" },
  { name: "강**", rating: 5, text: "운전자보험 비교 요청했더니 4개 보험사 비교표를 만들어서 카톡으로 보내주셨어요. 꼼꼼함에 감동.", consultant: "유승협 컨설턴트", date: "2026.01" },
  { name: "윤**", rating: 5, text: "종신보험 해지할까 고민했는데, 감액완납 방법을 알려주셔서 보장은 유지하고 보험료 부담을 덜었습니다.", consultant: "조미선 컨설턴트", date: "2026.01" },
  { name: "한**", rating: 5, text: "남편 사망보장이 부족한 걸 분석해주시고, 정기보험으로 저렴하게 보완하는 방법을 제안해주셨어요.", consultant: "한명진 컨설턴트", date: "2026.01" },
  { name: "송**", rating: 5, text: "회사 단체보험 만기라 문의했는데, 3개 보험사 비교견적을 하루만에 받았습니다. 업무 속도가 빠르세요.", consultant: "이한섭 컨설턴트", date: "2025.12" },
  { name: "오**", rating: 5, text: "어렵고 복잡할 줄 알았는데, 동네 친구한테 물어보는 것처럼 편하게 상담해주셔서 좋았어요.", consultant: "김우정 컨설턴트", date: "2025.12" },
  { name: "배**", rating: 5, text: "보험 가입한 지 10년 넘었는데 한 번도 점검 안 했거든요. 현재 보장 분석해주시고 부족한 부분만 딱 채워주셨어요.", consultant: "류미선 컨설턴트", date: "2025.12" },
  { name: "신**", rating: 5, text: "화재보험 의무가입 때문에 알아보다가 상담받았는데, 재물보험까지 같이 설계해서 오히려 보험료가 내려갔어요.", consultant: "차원주 컨설턴트", date: "2025.11" },
  { name: "조**", rating: 5, text: "암보험 갱신형vs비갱신형 차이를 모르겠어서 물어봤는데, 나이별 시뮬레이션을 그려서 설명해주셨어요. 전문가 맞습니다.", consultant: "경주현 컨설턴트", date: "2025.11" },
  { name: "임**", rating: 5, text: "카톡으로 간편하게 상담 시작했는데, 답변이 빠르고 정확해서 놀랐습니다. 비대면이 이렇게 편할 줄 몰랐어요.", consultant: "최민희 컨설턴트", date: "2025.11" },
  { name: "장**", rating: 5, text: "부모님 실손보험 전환 상담받았습니다. 어르신 눈높이에 맞춰 설명해주셔서 부모님도 이해하셨어요.", consultant: "전형근 컨설턴트", date: "2025.10" },
  { name: "나**", rating: 5, text: "저축보험 수익률이 궁금해서 물어봤는데, 솔직하게 장단점 다 알려주시더라고요. 억지로 가입 권유 안 하셔서 신뢰가 갔습니다.", consultant: "진유림 컨설턴트", date: "2025.10" },
  { name: "유**", rating: 5, text: "뽐뿌 게시판에서 질문 올렸더니 30분 만에 상세한 답변 달아주셨어요. 이런 성의 있는 분은 처음입니다.", consultant: "변혜미 컨설턴트", date: "2025.10" },
];

const TestimonialSection = () => {
  const shuffledTestimonials = useMemo(() => shuffle([...TESTIMONIALS]), []);
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
            {shuffledTestimonials.map((t, i) => (
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
