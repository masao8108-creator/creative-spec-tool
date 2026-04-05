import { Consultant, AVATAR_COLORS } from "@/data/consultants";

interface Props {
  consultant: Consultant;
  colorIndex: number;
  animDelay: number;
}

const FeaturedCard = ({ consultant: c, colorIndex, animDelay }: Props) => {
  const color = AVATAR_COLORS[colorIndex % AVATAR_COLORS.length];
  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden mb-3.5 transition-shadow hover:shadow-md animate-fade-in-up"
      style={{ animationDelay: `${animDelay}s` }}
    >
      <div className="h-[3px] bg-gradient-to-r from-primary to-yellow-300" />
      <div className="p-5">
        <div className="flex gap-3.5 items-start mb-3.5">
          <div className={`w-14 h-14 rounded-md flex items-center justify-center text-[22px] font-extrabold shrink-0 ${color.bg} ${color.text}`}>
            {c.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-lg font-extrabold text-foreground">{c.name}</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gold-dim text-primary tracking-wide">LEAD</span>
            </div>
            <div className="text-xs text-primary font-semibold mb-1.5">{c.nickname}</div>
            <div className="text-[13px] text-sub leading-relaxed">{c.tagline}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {c.specialties.map((s) => (
            <span key={s} className="px-3 py-1 bg-section-bg rounded-pill text-[11px] text-sub font-medium">{s}</span>
          ))}
        </div>

        <div className="text-xs text-sub2 mb-3.5 flex items-center gap-1.5">📞 {c.phone}</div>

        {(c.instagram || c.blog) && (
          <div className="flex gap-2 mb-3">
            {c.instagram && <a href={c.instagram} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary px-2.5 py-1 border border-gold-dim rounded-pill">Instagram</a>}
            {c.blog && <a href={c.blog} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary px-2.5 py-1 border border-gold-dim rounded-pill">블로그</a>}
          </div>
        )}

        <div className="flex gap-2">
          <a
            href={c.kakaoChat}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-3 rounded-md text-[13px] font-bold bg-primary text-primary-foreground hover:brightness-90 transition-all"
          >
            카카오톡 상담
          </a>
          <a
            href={`tel:${c.phone.replace(/-/g, "")}`}
            className="flex-1 text-center py-3 rounded-md text-[13px] font-semibold border border-border text-foreground hover:border-primary hover:text-primary transition-all"
          >
            전화 상담
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
