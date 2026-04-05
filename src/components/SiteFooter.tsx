const SiteFooter = () => (
  <footer className="bg-card mt-2 border-t border-border">
    <div className="max-w-[640px] mx-auto px-5 py-8">
      <div className="text-[11px] font-bold tracking-[0.1em] text-sub2 mb-3">보험톡 · STEADY GROUP</div>
      <p className="text-[11px] text-sub2 leading-6">
        원금융서비스 스테디사업단 ·{" "}
        <a href="tel:02-6203-0887" className="text-primary hover:underline">02-6203-0887</a>
      </p>
      <a
        href="https://www.ppomppu.co.kr/zboard/zboard.php?id=consulting"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] text-primary hover:underline"
      >
        뽐뿌 보험상담실
      </a>
      <p className="text-[10px] text-sub2 mt-4">© 2010-2026 Steady Group. All Rights Reserved.</p>
    </div>
  </footer>
);

export default SiteFooter;
