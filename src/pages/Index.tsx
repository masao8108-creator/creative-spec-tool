import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsRibbon from "@/components/StatsRibbon";
import FilterTabs from "@/components/FilterTabs";
import FeaturedCard from "@/components/FeaturedCard";
import ConsultantCard from "@/components/ConsultantCard";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";
import { CONSULTANTS, shuffle } from "@/data/consultants";

const Index = () => {
  const [filter, setFilter] = useState("전체");

  const featured = CONSULTANTS.filter((c) => c.featured);
  const regularShuffled = useMemo(() => shuffle(CONSULTANTS.filter((c) => !c.featured)), []);

  const matchFilter = (specialties: string[]) =>
    filter === "전체" || specialties.includes(filter);

  const filteredFeatured = featured.filter((c) => matchFilter(c.specialties));
  const filteredRegular = regularShuffled.filter((c) => matchFilter(c.specialties));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsRibbon />
      <FilterTabs current={filter} onChange={setFilter} />

      {filteredFeatured.length > 0 && (
        <>
          <div className="text-lg font-extrabold px-5 pt-6 pb-3.5 max-w-[640px] mx-auto flex items-center gap-1.5">
            ⭐ 대표 컨설턴트
          </div>
          <div className="max-w-[640px] mx-auto px-5">
            {filteredFeatured.map((c, i) => (
              <FeaturedCard key={c.name} consultant={c} colorIndex={i} animDelay={i * 0.1} />
            ))}
          </div>
        </>
      )}

      {filteredRegular.length > 0 && (
        <>
          <div className="text-lg font-extrabold px-5 pt-6 pb-3.5 max-w-[640px] mx-auto flex items-center gap-1.5">
            🔥 인증 컨설턴트
          </div>
          <div className="max-w-[640px] mx-auto px-5">
            {filteredRegular.map((c, i) => (
              <ConsultantCard key={c.name} consultant={c} colorIndex={i + 2} animDelay={i * 0.05} />
            ))}
          </div>
        </>
      )}

      <CtaBanner />
      <SiteFooter />
    </div>
  );
};

export default Index;
