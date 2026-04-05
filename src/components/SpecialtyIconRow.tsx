import { SPECIALTY_ICONS, CONSULTANTS } from "@/data/consultants";

interface Props {
  current: string;
  onChange: (s: string) => void;
}

const SpecialtyIconRow = ({ current, onChange }: Props) => {
  const specs = Object.entries(SPECIALTY_ICONS);
  const counts = specs.map(([key]) => CONSULTANTS.filter((c) => c.specialties.includes(key)).length);

  return (
    <section className="py-8 border-b border-border">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-extrabold flex items-center gap-1.5">
            🛡️ 전문분야별 컨설턴트
          </h2>
          <button
            onClick={() => onChange("전체")}
            className="text-xs font-semibold text-sub border border-border rounded-lg px-3 py-1.5 hover:border-primary hover:text-primary transition-all"
          >
            전체보기
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1">
          {specs.map(([key, val], i) => (
            <button
              key={key}
              onClick={() => onChange(current === key ? "전체" : key)}
              className={`flex flex-col items-center gap-2 min-w-[80px] group transition-all ${
                current === key ? "scale-105" : ""
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all border-2 ${
                  current === key
                    ? "border-primary bg-gold-light shadow-sm"
                    : "border-transparent bg-muted group-hover:border-primary/30"
                }`}
              >
                {val.emoji}
              </div>
              <div className="text-center">
                <div className={`text-[11px] font-semibold ${current === key ? "text-primary" : "text-foreground"}`}>
                  {val.label}
                </div>
                <div className="text-[10px] text-sub2">{counts[i]}명</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyIconRow;
