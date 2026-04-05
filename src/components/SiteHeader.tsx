import { Search } from "lucide-react";

const NAV_ITEMS = [
  { label: "고릴라차트", href: "#chart" },
  { label: "전문분야", href: "#specialties" },
  { label: "컨설턴트", href: "#consultants" },
  { label: "상담후기", href: "#" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 h-14">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl">🛡️</span>
          <span className="text-[15px] font-extrabold tracking-tight text-foreground">
            보험<span className="text-primary">고릴라</span>
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-1 bg-muted rounded-lg px-3 py-2 w-60">
          <Search className="w-4 h-4 text-sub2" />
          <span className="text-xs text-sub2">컨설턴트 검색</span>
        </div>

        <a
          href="https://www.ppomppu.co.kr/zboard/zboard.php?id=consulting"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-sub hover:text-primary transition-colors"
        >
          뽐뿌 상담실 →
        </a>
      </div>

      {/* Navigation */}
      <nav className="max-w-[1200px] mx-auto px-5 flex items-center gap-6 h-11 overflow-x-auto scrollbar-hide">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[14px] font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default SiteHeader;
