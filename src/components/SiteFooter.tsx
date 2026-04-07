const SiteFooter = () => (
  <footer className="bg-card mt-2 border-t border-border">
    <div className="max-w-[900px] mx-auto px-5 py-8">
      <div className="text-[13px] font-bold tracking-tight text-foreground mb-4">보험상담실</div>

      <div className="text-[11px] text-sub2 leading-[1.8] space-y-1">
        <p>최민형 대표 (손해보험 협회 등록번호 : 2013059106006 / 생명보험 협회 등록번호 : 201305-9106-0006)</p>
        <p>(주)원금융서비스 보험대리점 제 2019020052호</p>
        <p>원금융서비스 심의필 제 2026-00-0000호 (2020-00-00~2020-00-00)</p>
      </div>

      <div className="text-[11px] text-sub2 leading-[1.8] mt-4 space-y-1">
        <p className="font-semibold text-sub">법령 및 내부통제기준에 따른 광고 관련 절차 준수 에 관한 사항:</p>
        <p>본 광고는 광고심의 기준을 준수하였으며, 유효기간은 심의일로부터 1년입니다.</p>
        <p>상기 내용은 모집종사자 개인의 의견이며, 계약체결에 따른 이익 또는 손실은 보험계약자 및 피보험자에게에게 귀속됩니다.</p>
        <p>보험계약자가 기존 보험계약을 해지하고 새로운 보험계약을 체결하는 과정에서</p>
        <p className="pl-3">질병이력, 연령증가 등으로 가입이 거절되거나 보험료가 인상될 수 있습니다.</p>
        <p className="pl-3">가입 상품에 따라 새로운 면책기간 적용 및 보장 제한 등 기타 불이익이 발생할 수 있습니다.</p>
      </div>

      <div className="flex items-center gap-3 mt-5 text-[11px]">
        <span className="text-sub2 hover:text-primary cursor-pointer">이용약관</span>
        <span className="text-border">|</span>
        <span className="text-sub2 hover:text-primary cursor-pointer">개인정보처리방침</span>
      </div>

      <p className="text-[10px] text-sub2 mt-4">Copyright © 2026 보험상담실 All rights reserved.</p>
    </div>
  </footer>
);

export default SiteFooter;
