import { SPECIALTY_ICONS, CONSULTANTS } from "@/data/consultants";

interface Props {
  current: string;
  onChange: (s: string) => void;
}

const SpecialtyIconRow = ({ current, onChange }: Props) => {
  const specs = Object.entries(SPECIALTY_ICONS);

  return (
    <section className="bg-card mt-2">
      <div className="max-w-[640px] mx-auto px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[15px] font-bold text-foreground">전문분야</h2>
          {current !== "전체" && (
            <button
              onClick={() => onChange("전체")}
              className="text-[12px] text-primary font-semibold"
            >
              초기화
            </button>
          )}
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          <button
            onClick={() => onChange("전체")}
            className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${
              current === "전체"
                ? "bg-foreground text-card border-foreground"
                : "bg-card text-sub border-border hover:border-foreground/30"
            }`}
          >
            전체
          </button>
          {specs.map(([key, val]) => (
            <button
              key={key}
              onClick={() => onChange(current === key ? "전체" : key)}
              className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold transition-all border flex items-center gap-1.5 ${
                current === key
                  ? "bg-foreground text-card border-foreground"
                  : "bg-card text-sub border-border hover:border-foreground/30"
              }`}
            >
              <span className="text-base">{val.emoji}</span>
              {val.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyIconRow;
