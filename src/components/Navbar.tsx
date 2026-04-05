const Navbar = () => (
  <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-3.5 border-b border-border bg-background/95 backdrop-blur-md">
    <div className="text-[13px] font-extrabold tracking-widest text-foreground">
      <span className="text-primary">STEADY</span> GROUP
    </div>
    <a
      href="https://naver.me/GwSk8kqm"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[13px] font-semibold text-sub hover:text-primary transition-colors flex items-center gap-1"
    >
      상담 신청<span className="text-base transition-transform group-hover:translate-x-0.5">›</span>
    </a>
  </nav>
);

export default Navbar;
