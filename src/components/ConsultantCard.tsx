import { useState } from "react";
import { Consultant, AVATAR_COLORS } from "@/data/consultants";

interface Props {
  consultant: Consultant;
  colorIndex: number;
  animDelay: number;
}

const ConsultantCard = ({ consultant: c, colorIndex, animDelay }: Props) => {
  const [open, setOpen] = useState(false);
  const color = AVATAR_COLORS[colorIndex % AVATAR_COLORS.length];

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: `${animDelay}s` }}>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-card border rounded-md p-4 flex items-center gap-3.5 cursor-pointer transition-all active:scale-[0.995] mb-0 select-none
          ${open ? "border-primary shadow-sm rounded-b-none" : "border-border hover:border-primary hover:shadow-sm mb-2"}`}
      >
        <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center text-[17px] font-extrabold shrink-0 ${color.bg} ${color.text}`}>
          {c.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-[15px] font-bold flex items-baseline gap-1.5">
            {c.name}
            <span className="text-[11px] text-sub2 font-normal">{c.nickname}</span>
          </h4>
          <div className="flex gap-1 mt-1 flex-wrap">
            {c.specialties.map((s) => (
              <span key={s} className="text-[10px] px-2 py-0.5 bg-section-bg rounded-pill text-sub">{s}</span>
            ))}
          </div>
        </div>
        <span className={`text-sub2 text-lg transition-all shrink-0 ${open ? "rotate-90 text-primary" : ""}`}>›</span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[400px] mb-2" : "max-h-0"}`}
      >
        <div className="p-4 bg-section-bg rounded-b-md border border-t-0 border-border">
          <p className="text-[13px] text-sub leading-relaxed mb-3">{c.tagline}</p>
          <div className="text-xs text-sub2 mb-3">
            📞 <a href={`tel:${c.phone.replace(/-/g, "")}`} className="text-primary">{c.phone}</a>
            {" · "}✉️ {c.email}
          </div>
          {(c.instagram || c.blog) && (
            <div className="flex gap-2 mb-3">
              {c.instagram && <a href={c.instagram} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary px-2.5 py-1 border border-gold-dim rounded-pill">Instagram</a>}
              {c.blog && <a href={c.blog} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary px-2.5 py-1 border border-gold-dim rounded-pill">블로그</a>}
            </div>
          )}
          <div className="flex gap-2">
            <a href={c.kakaoChat} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 rounded-md text-[13px] font-bold bg-primary text-primary-foreground hover:brightness-90 transition-all">카카오톡 상담</a>
            <a href={`tel:${c.phone.replace(/-/g, "")}`} className="flex-1 text-center py-3 rounded-md text-[13px] font-semibold border border-border text-foreground hover:border-primary hover:text-primary transition-all">전화 상담</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;
