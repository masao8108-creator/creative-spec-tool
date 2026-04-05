import { SPECIALTIES } from "@/data/consultants";

interface FilterTabsProps {
  current: string;
  onChange: (filter: string) => void;
}

const FilterTabs = ({ current, onChange }: FilterTabsProps) => (
  <div className="px-5 pt-5 max-w-[640px] mx-auto">
    <div className="text-lg font-extrabold mb-3.5 flex items-center gap-1.5">
      👋 컨설턴트 찾기
    </div>
    <div className="overflow-x-auto -mx-5 px-5 scrollbar-hide">
      <div className="flex gap-2 pb-4 min-w-max">
        {SPECIALTIES.map((s) => (
          <button
            key={s}
            onClick={() => onChange(s)}
            className={`px-[18px] py-2 rounded-pill text-[13px] whitespace-nowrap transition-all border font-medium
              ${s === current
                ? "bg-primary text-primary-foreground border-primary font-bold"
                : "bg-background text-sub border-border hover:border-sub2 hover:text-foreground"
              }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default FilterTabs;
