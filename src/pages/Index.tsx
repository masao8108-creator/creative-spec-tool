import { useState, useMemo } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroBanner from "@/components/HeroBanner";
import SpecialtyIconRow from "@/components/SpecialtyIconRow";
import GorillaChart from "@/components/GorillaChart";
import ConsultantCard from "@/components/ConsultantCard";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { CONSULTANTS, shuffle } from "@/data/consultants";

const Index = () => {
  const [filter, setFilter] = useState("전체");

  const featured = CONSULTANTS.filter((c) => c.featured);
  const regularShuffled = useMemo(() => shuffle(CONSULTANTS.filter((c) => !c.featured)), []);

  const matchFilter = (specs: string[]) => filter === "전체" || specs.includes(filter);

  const filteredFeatured = featured.filter((c) => matchFilter(c.specialties));
  const filteredRegular = regularShuffled.filter((c) => matchFilter(c.specialties));
  const totalCount = filteredFeatured.length + filteredRegular.length;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroBanner />
      <SpecialtyIconRow current={filter} onChange={setFilter} />
      <GorillaChart />

      {/* Consultant list - Naver Pay Card list style */}
      <section id="consultants" className="bg-card mt-2">
        <div className="max-w-[640px] mx-auto px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[15px] font-bold text-primary">{totalCount}명</span>
            <span className="text-[12px] text-sub2">전문 컨설턴트</span>
          </div>

          <div className="space-y-2">
            {filteredFeatured.map((c) => (
              <ConsultantCard key={c.name} consultant={c} variant="featured" />
            ))}
            {filteredRegular.map((c) => (
              <ConsultantCard key={c.name} consultant={c} variant="normal" />
            ))}
          </div>

          {totalCount === 0 && (
            <p className="text-[13px] text-sub2 py-8 text-center">해당 분야의 컨설턴트가 없습니다.</p>
          )}
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </div>
  );
};

export default Index;
