import { useState } from "react";
import { Consultant, AVATAR_COLORS, CONSULTANTS } from "@/data/consultants";
import { MessageCircle, Phone, ChevronDown, Mail, ExternalLink } from "lucide-react";

interface Props {
  consultant: Consultant;
  variant: "featured" | "normal";
}

const ConsultantCard = ({ consultant: c, variant }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const idx = CONSULTANTS.indexOf(c);
  const color = AVATAR_COLORS[idx % AVATAR_COLORS.length];

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-sm transition-all">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3.5 px-4 py-3.5 text-left"
      >
        {c.profileImage ? (
          <img src={c.profileImage} alt={c.name} className="w-11 h-11 rounded-xl shrink-0 object-cover" />
        ) : (
          <div className={`w-11 h-11 rounded-xl shrink-0 flex items-center justify-center text-base font-extrabold ${color.bg} ${color.text}`}>{c.name[0]}</div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[14px] font-bold text-foreground">{c.name}</span>
            {c.featured && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary">LEAD</span>
            )}
          </div>
          <div className="text-[12px] text-sub mt-0.5">{c.tagline.slice(0, 35)}…</div>
          <div className="flex gap-1 mt-1.5 flex-wrap">
            {c.specialties.map((s) => (
              <span key={s} className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-sub2 font-medium">{s}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          {variant === "featured" && (
            <span className="text-[11px] font-bold text-primary">상담가능</span>
          )}
          <ChevronDown className={`w-4 h-4 text-sub2 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-border">
          <div className="pt-3">
            <p className="text-[13px] text-sub leading-relaxed mb-3">{c.tagline}</p>
            <div className="flex items-center gap-3 text-[12px] text-sub2 mb-3 flex-wrap">
              <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{c.phone}</span>
              <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{c.email}</span>
            </div>
            {(c.instagram || c.blog) && (
              <div className="flex gap-2 mb-3">
                {c.instagram && (
                  <a href={c.instagram} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary flex items-center gap-1 px-2.5 py-1 border border-primary/20 rounded-full hover:bg-primary/5">
                    <ExternalLink className="w-3 h-3" /> Instagram
                  </a>
                )}
                {c.blog && (
                  <a href={c.blog} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary flex items-center gap-1 px-2.5 py-1 border border-primary/20 rounded-full hover:bg-primary/5">
                    <ExternalLink className="w-3 h-3" /> 블로그
                  </a>
                )}
              </div>
            )}
            <div className="flex gap-2">
              <a href={c.kakaoChat} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary text-primary-foreground text-[13px] font-bold hover:brightness-95 transition-all">
                <MessageCircle className="w-4 h-4" /> 카카오톡 상담
              </a>
              <a href={`tel:${c.phone.replace(/-/g, "")}`} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-border text-[13px] font-semibold hover:border-primary hover:text-primary transition-all">
                <Phone className="w-4 h-4" /> 전화
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultantCard;
