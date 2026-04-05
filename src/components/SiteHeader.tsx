import { Menu } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-[640px] mx-auto flex items-center justify-between px-5 h-12">
        <a href="/" className="flex items-center gap-1.5">
          <span className="text-lg">🛡️</span>
          <span className="text-[15px] font-extrabold tracking-tight text-foreground">
            보험<span className="text-primary">고릴라</span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://www.ppomppu.co.kr/zboard/zboard.php?id=consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold text-sub hover:text-primary transition-colors"
          >
            상담실
          </a>
          <button className="text-sub2">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
