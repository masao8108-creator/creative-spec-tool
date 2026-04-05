const stats = [
  { value: "12", label: "인증 컨설턴트" },
  { value: "15", label: "년 운영" },
  { value: "공식", label: "뽐뿌 인증" },
];

const StatsRibbon = () => (
  <section className="bg-section-bg border-y border-border">
    <div className="flex max-w-[640px] mx-auto">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`flex-1 text-center py-5 px-2.5 ${i < stats.length - 1 ? "border-r border-border" : ""}`}
        >
          <div className="text-[26px] font-extrabold text-primary leading-none">{s.value}</div>
          <div className="text-[11px] text-sub2 mt-1.5 font-medium">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsRibbon;
