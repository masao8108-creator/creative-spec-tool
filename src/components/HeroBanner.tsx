import { ChevronRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="bg-card">
      <div className="max-w-[640px] mx-auto px-5 pt-5 pb-4">
        {/* Diagnostic banner - like Naver card's 카드발급 진단하기 */}
        <a
          href="#consultants"
          className="flex items-center gap-3.5 bg-card border border-border rounded-2xl p-4 hover:shadow-sm transition-shadow"
        >
          <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center text-2xl shrink-0">
            🛡️
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-bold text-foreground">보험 컨설턴트 찾기</span>
              <span className="text-[11px] text-primary font-semibold">30초 매칭</span>
            </div>
            <p className="text-[12px] text-sub mt-0.5">
              나에게 맞는 전문가 확인해보기 <ChevronRight className="inline w-3 h-3" />
            </p>
          </div>
        </a>
        <p className="text-[11px] text-sub2 text-center mt-2 tracking-wide">검증된 전문가에게 TALK</p>
      </div>
    </section>
  );
};

export default HeroBanner;
