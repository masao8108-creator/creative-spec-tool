import SiteHeader from "@/components/SiteHeader";
import HeroBanner from "@/components/HeroBanner";
import SpecialtyIconRow from "@/components/SpecialtyIconRow";
import GorillaChart from "@/components/GorillaChart";
import CtaBanner from "@/components/CtaBanner";
import TestimonialSection from "@/components/TestimonialSection";
import SiteFooter from "@/components/SiteFooter";
import { useState } from "react";

const Index = () => {
  const [filter, setFilter] = useState("전체");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroBanner />
      <SpecialtyIconRow current={filter} onChange={setFilter} />
      <GorillaChart filter={filter} />
      <TestimonialSection />
      <CtaBanner />
      <SiteFooter />
    </div>
  );
};

export default Index;
