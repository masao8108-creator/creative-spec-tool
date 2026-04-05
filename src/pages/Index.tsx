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

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroBanner />
      <SpecialtyIconRow current={filter} onChange={setFilter} />
      <GorillaChart />

      {/* Featured consultants - Card Gorilla "스테디셀러" style */}
      <section id="consultants" className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 py-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-extrabold flex items-center gap-1.5">
              ⭐ 대표 컨설턴트
            </h2>
          </div>
          {filteredFeatured.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredFeatured.map((c) => (
                <ConsultantCard key={c.name} consultant={c} variant="featured" />
              ))}
            </div>
          ) : (
            <p className="text-sm text-sub2 py-4">해당 분야의 대표 컨설턴트가 없습니다.</p>
          )}
        </div>
      </section>

      {/* All consultants - Card Gorilla list style */}
      <section className="bg-section-alt border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 py-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-extrabold flex items-center gap-1.5">
              🔥 인증 컨설턴트
            </h2>
            <span className="text-xs text-sub2">{filteredRegular.length}명</span>
          </div>
          {filteredRegular.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredRegular.map((c) => (
                <ConsultantCard key={c.name} consultant={c} variant="normal" />
              ))}
            </div>
          ) : (
            <p className="text-sm text-sub2 py-4">해당 분야의 컨설턴트가 없습니다.</p>
          )}
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </div>
  );
};

export default Index;
