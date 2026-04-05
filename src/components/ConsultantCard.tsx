import { useState } from "react";
import { Consultant, AVATAR_COLORS, CONSULTANTS } from "@/data/consultants";
import { MessageCircle, Phone, ChevronDown, Mail, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Props {
  consultant: Consultant;
  variant: "featured" | "normal";
}

const ConsultantCard = ({ consultant: c, variant }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const idx = CONSULTANTS.indexOf(c);
  const color = AVATAR_COLORS[idx % AVATAR_COLORS.length];

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-sm transition-all">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 px-4 py-4 text-left"
      >
        {c.profileImage ? (
          <img
            src={c.profileImage}
            alt={c.name}
            className="w-24 h-24 rounded-full shrink-0 object-cover border-2 transition-transform duration-300 group-hover:scale-110"
            style={{
              filter: 'brightness(1.05)',
              backgroundColor: '#f0f0ec',
              borderColor: '#f0f0ec',
              objectPosition: c.name === '최민희' ? 'center 10%' : 'center 20%',
            }}
          />
        ) : (
          <div
            className="w-24 h-24 rounded-full shrink-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #E5A31D, #f0c45c)' }}
          >
            <span className="text-[32px] font-[800] text-white">{c.name[0]}</span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[15px] font-extrabold text-foreground">{c.name}</span>
            <span className="text-[12px] text-sub2">{c.nickname}</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary flex items-center gap-0.5">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
              인증
            </span>
            {c.featured && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-accent/15 text-accent">LEAD</span>
            )}
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-muted text-sub">{c.yearsOfExperience}년차</span>
          </div>
          <div className="text-[12px] text-sub mt-1 line-clamp-1">{c.tagline}</div>
          <div className="flex gap-1 mt-2 flex-wrap">
            {c.specialties.map((s) => (
              <span key={s} className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-sub2 font-medium">{s}</span>
            ))}
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-sub2 transition-transform shrink-0 ${expanded ? "rotate-180" : ""}`} />
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
