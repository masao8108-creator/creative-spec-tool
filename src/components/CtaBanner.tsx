const CtaBanner = () => (
  <section className="bg-card mt-2">
    <div className="max-w-[640px] mx-auto px-5 py-6">
      <div className="bg-gold-light rounded-2xl p-5 text-center">
        <div className="text-2xl mb-2">🏛️</div>
        <h3 className="text-[15px] font-bold text-foreground mb-1">뽐뿌 보험상담실</h3>
        <p className="text-[12px] text-sub mb-4 leading-relaxed">
          15년간 운영된 공식 보험상담 게시판에서<br />자유롭게 상담 글을 남겨주세요.
        </p>
        <a
          href="https://www.ppomppu.co.kr/zboard/zboard.php?id=consulting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-[13px] font-bold hover:brightness-95 transition-all"
        >
          상담실 이동 →
        </a>
      </div>
    </div>
  </section>
);

export default CtaBanner;
