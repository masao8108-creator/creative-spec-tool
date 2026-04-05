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

  if (variant === "featured") {
    return (
      <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow group">
        <div className="h-1 bg-gradient-to-r from-primary to-amber-300" />
        <div className="p-5">
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-extrabold shrink-0 ${color.bg} ${color.text}`}>
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-extrabold">{c.name}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">LEAD</span>
              </div>
              <div className="text-xs text-primary font-semibold mb-1">{c.nickname}</div>
              <p className="text-[13px] text-sub leading-relaxed">{c.tagline}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {c.specialties.map((s) => (
              <span key={s} className="text-[11px] px-2.5 py-1 bg-muted rounded-pill text-sub font-medium">{s}</span>
            ))}
          </div>

          <div className="flex gap-2">
            <a
              href={c.kakaoChat}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg bg-primary text-primary-foreground text-[13px] font-bold hover:brightness-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> 카카오톡 상담
            </a>
            <a
              href={`tel:${c.phone.replace(/-/g, "")}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg border border-border text-[13px] font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="w-4 h-4" /> 전화 상담
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-sm transition-all">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3.5 px-4 py-3.5 text-left hover:bg-muted/30 transition-colors"
      >
        <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-base font-extrabold shrink-0 ${color.bg} ${color.text}`}>
          {c.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-bold">
            {c.name}
            <span className="text-sub2 font-normal text-[12px] ml-1.5">{c.nickname}</span>
          </div>
          <div className="flex gap-1 mt-1 flex-wrap">
            {c.specialties.map((s) => (
              <span key={s} className="text-[10px] px-2 py-0.5 bg-muted rounded-pill text-sub">{s}</span>
            ))}
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-sub2 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-border bg-muted/20">
          <div className="pt-3">
            <p className="text-[13px] text-sub leading-relaxed mb-3">{c.tagline}</p>
            <div className="flex items-center gap-3 text-xs text-sub2 mb-3 flex-wrap">
              <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{c.phone}</span>
              <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{c.email}</span>
            </div>
            {(c.instagram || c.blog) && (
              <div className="flex gap-2 mb-3">
                {c.instagram && (
                  <a href={c.instagram} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary flex items-center gap-1 px-2.5 py-1 border border-primary/20 rounded-pill hover:bg-primary/5">
                    <ExternalLink className="w-3 h-3" /> Instagram
                  </a>
                )}
                {c.blog && (
                  <a href={c.blog} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary flex items-center gap-1 px-2.5 py-1 border border-primary/20 rounded-pill hover:bg-primary/5">
                    <ExternalLink className="w-3 h-3" /> 블로그
                  </a>
                )}
              </div>
            )}
            <div className="flex gap-2">
              <a href={c.kakaoChat} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-primary text-primary-foreground text-[13px] font-bold hover:brightness-95 transition-all">
                <MessageCircle className="w-4 h-4" /> 카카오톡 상담
              </a>
              <a href={`tel:${c.phone.replace(/-/g, "")}`} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-border text-[13px] font-semibold hover:border-primary hover:text-primary transition-all">
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
