import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-[640px] mx-auto flex items-center justify-between px-5 h-12">
        <a href="/" className="flex items-center gap-1.5">
          <img src={logo} alt="보험톡" className="h-7 w-auto" />
          <span className="text-[15px] font-extrabold tracking-tight">
            <span style={{ color: '#1A1E2C' }}>보험</span><span style={{ color: '#E5A31D' }}>톡</span>
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
