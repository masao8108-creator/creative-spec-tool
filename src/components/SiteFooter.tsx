const SiteFooter = () => (
  <footer className="text-center py-10 pb-16 border-t border-border mt-5">
    <div className="text-xs font-extrabold tracking-[0.15em] text-foreground mb-2">STEADY GROUP</div>
    <p className="text-[11px] text-sub2 leading-7">
      원금융서비스 스테디사업단<br />
      <a href="tel:02-6203-0887" className="text-primary">02-6203-0887</a>
      {" · "}
      <a href="https://www.ppomppu.co.kr/zboard/zboard.php?id=consulting" target="_blank" rel="noopener noreferrer" className="text-primary">
        뽐뿌 보험상담실
      </a>
      <br />
      © 2010-2026 Steady Group
    </p>
  </footer>
);

export default SiteFooter;
