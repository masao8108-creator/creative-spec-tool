const CtaBanner = () => (
  <div className="mx-5 my-8 max-w-[600px] sm:mx-auto bg-gradient-to-br from-gold-light to-[#fff8eb] rounded-lg p-7 text-center border border-primary/15">
    <div className="text-[28px] mb-2">🏛️</div>
    <h3 className="text-[17px] font-extrabold text-foreground mb-1.5">뽐뿌 보험상담실 바로가기</h3>
    <p className="text-[13px] text-sub mb-4">
      15년간 운영되어 온 뽐뿌 공식 보험상담 게시판에서<br />자유롭게 상담 글을 남겨주세요.
    </p>
    <a
      href="https://www.ppomppu.co.kr/zboard/zboard.php?id=consulting"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-7 py-3 bg-primary text-primary-foreground rounded-md text-sm font-bold hover:brightness-90 transition-all"
    >
      상담실 이동 →
    </a>
  </div>
);

export default CtaBanner;
