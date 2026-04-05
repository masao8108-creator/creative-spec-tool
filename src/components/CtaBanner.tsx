const CtaBanner = () => (
  <section className="bg-gradient-to-br from-gold-light to-amber-50 border-y border-primary/10">
    <div className="max-w-[1200px] mx-auto px-5 py-10 text-center">
      <div className="text-3xl mb-2">🏛️</div>
      <h3 className="text-lg font-extrabold text-foreground mb-1.5">뽐뿌 보험상담실 바로가기</h3>
      <p className="text-[13px] text-sub mb-5 leading-relaxed">
        15년간 운영되어 온 뽐뿌 공식 보험상담 게시판에서<br />자유롭게 상담 글을 남겨주세요.
      </p>
      <a
        href="https://www.ppomppu.co.kr/zboard/zboard.php?id=consulting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-7 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:brightness-95 transition-all"
      >
        상담실 이동 →
      </a>
    </div>
  </section>
);

export default CtaBanner;
