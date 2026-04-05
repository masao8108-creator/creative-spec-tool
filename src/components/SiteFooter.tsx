const SiteFooter = () => (
  <footer className="border-t border-border bg-muted/30">
    <div className="max-w-[1200px] mx-auto px-5 py-10 text-center">
      <div className="text-xs font-extrabold tracking-[0.15em] text-foreground mb-3">STEADY GROUP</div>
      <p className="text-[11px] text-sub2 leading-7">
        원금융서비스 스테디사업단 ·{" "}
        <a href="tel:02-6203-0887" className="text-primary hover:underline">02-6203-0887</a>
        <br />
        <a href="https://www.ppomppu.co.kr/zboard/zboard.php?id=consulting" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          뽐뿌 보험상담실
        </a>
      </p>
      <p className="text-[10px] text-sub2 mt-4">© 2010-2026 Steady Group. All Rights Reserved.</p>
    </div>
  </footer>
);

export default SiteFooter;
