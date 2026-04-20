export interface Consultant {
  name: string;
  nickname: string;
  tagline: string;
  phone: string;
  kakaoChat: string;
  email: string;
  instagram: string | null;
  blog: string | null;
  specialties: string[];
  featured: boolean;
  profileImage: string;
  yearsOfExperience: number;
}

export const CONSULTANTS: Consultant[] = [
  { name: "경주현", nickname: "경프로", tagline: "보험방송 경제TV 출연전문가. 저도 누군가의 고객입니다. 고객의 입장에서 가장 유리한 상품을 매달 비교분석 합니다.", phone: "010-9427-8923", kakaoChat: "https://open.kakao.com/o/sg4ng8Qe", email: "juhyun3896@naver.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: true, profileImage: "/profiles/kyung-juhyun.jpeg", yearsOfExperience: 12 },
  { name: "전형근", nickname: "보험아빠", tagline: "뽐뿌에서 14년차로 가장오래 근무한 전형근팀장입니다", phone: "010-9138-3955", kakaoChat: "https://open.kakao.com/o/sxnZlULh", email: "wjsgudrms32@naver.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: true, profileImage: "/profiles/jeon-hyunggeun.jpg", yearsOfExperience: 14 },
  { name: "변혜미", nickname: "미니멀플랜", tagline: "18년차 보험강사출신으로 누구보다 꾸준하게 걸어왔습니다. 앞으로도 회원님과 함께하겠습니다.", phone: "010-5511-9923", kakaoChat: "https://open.kakao.com/o/s7BhPGFg", email: "auna9923@naver.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: true, profileImage: "/profiles/byun-hyemi.jpeg", yearsOfExperience: 18 },
  { name: "유승협", nickname: "부자아빠", tagline: "처음의 친절함 변하지 않겠습니다.", phone: "010-6243-5386", kakaoChat: "https://open.kakao.com/o/sbtxQLSe", email: "ocfore119@naver.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: true, profileImage: "/profiles/yoo-seunghyup.png", yearsOfExperience: 18 },
  { name: "진유림", nickname: "금융언니", tagline: "우수인증설계사. 제 가족의 보험이라 생각하고 관리합니다", phone: "010-7629-1070", kakaoChat: "https://open.kakao.com/o/glq8C7mi", email: "yrjs@hanmail.net", instagram: "https://www.instagram.com/1_jinyurim/", blog: "https://blog.naver.com/jyr2267271", specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: true, profileImage: "/profiles/jin-yurim.jpeg", yearsOfExperience: 15 },
  { name: "한명진", nickname: "해피투게더", tagline: "필요한 보장만 담아, 현실적으로 설계합니다.", phone: "010-2356-3050", kakaoChat: "https://open.kakao.com/o/sQThmtCe", email: "wedding3050@naver.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/han-myungjin.jpg", yearsOfExperience: 9 },
  { name: "한은택", nickname: "베테랑", tagline: "보험은 선택이 아닌 필수입니다", phone: "010-7777-3552", kakaoChat: "https://open.kakao.com/o/sDFn4Y8h", email: "het77777@naver.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/han-euntaek.jpg", yearsOfExperience: 10 },
  { name: "조미선", nickname: "보험프렌즈", tagline: "2012년 재무설계로 시작, 10만 건 이상 설계 경험. 혹시 모를 내일을 오늘 준비하는 마음, 유비무환. 꼭 필요한 집중보장! 믿고 편하게 상담할 수 있는 보험프렌즈 조미선입니다", phone: "010-5689-7455", kakaoChat: "https://open.kakao.com/o/sX75BlYh", email: "choms07242002@gmail.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/jo-misun.png", yearsOfExperience: 14 },
  { name: "류미선", nickname: "심플한보험", tagline: "11년간 보험사 총무로 쌓은 전문성과 체계로 고객님의 보험을 직접 관리해드리겠습니다.", phone: "010-8251-8703", kakaoChat: "https://open.kakao.com/o/sP50qVQh", email: "nusim84@naver.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/ryu-misun.jpg", yearsOfExperience: 11 },
  { name: "이한섭", nickname: "보험커넥트", tagline: "보험은 내일의 불안을 오늘의 안심으로 바꾸는 일입니다. 상품보다 사람을 먼저 생각하고, 가입 이후의 관리와 책임까지 함께합니다.", phone: "010-8903-3444", kakaoChat: "https://open.kakao.com/o/s6dQTNWh", email: "dlgkstjq12@gmail.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/lee-hansub.png", yearsOfExperience: 6 },
  { name: "최민희", nickname: "보험스마일", tagline: "따뜻한 미소로 고객님의 보험을 설계합니다.", phone: "010-2089-0801", kakaoChat: "https://open.kakao.com/o/s4VhHF0h", email: "shininglifegogo@gmail.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/choi-minhee.jpg", yearsOfExperience: 5 },
  { name: "김우정", nickname: "보험프렌드", tagline: "어렵고 복잡한 보험, 이제 편안한 동네 친구에게 가벼운 마음으로 물어보세요! 당신의 평생 든든한 보험프렌드 김우정입니다.", phone: "010-9485-3819", kakaoChat: "https://open.kakao.com/o/s79pwfYh", email: "woojung1118@naver.com", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/kim-woojung.jpg", yearsOfExperience: 4 },
  { name: "차원주", nickname: "보험헬퍼", tagline: "고객의 입장에서 최선의 보험을 설계합니다", phone: "010-2165-0546", kakaoChat: "https://open.kakao.com/o/s1OwLbhi", email: "", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/cha-wonju.jpg", yearsOfExperience: 1 },
  { name: "최민형", nickname: "보험뽐뿌", tagline: "안정적이고 지속적일 수 있도록 함께 하겠습니다.", phone: "010-9639-0805", kakaoChat: "https://open.kakao.com/o/sqIvGA0h", email: "", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/choi-minhyung.jpg", yearsOfExperience: 1 },
  { name: "유하은", nickname: "공식보험파트너", tagline: "설계는 똑똑하게 보상은 확실하게", phone: "", kakaoChat: "https://open.kakao.com/o/sZXDc3pi", email: "", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: true, profileImage: "/profiles/yoo-haeun.jpeg", yearsOfExperience: 7 },
  { name: "주영은", nickname: "보험기준점", tagline: "판매보다 기준을 먼저 세우는", phone: "", kakaoChat: "https://open.kakao.com/o/sbHzDyqi", email: "", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/joo-youngeun.jpeg", yearsOfExperience: 4 },
  { name: "정민석", nickname: "1프로의차이", tagline: "보험= 소비or자산, 1프로의 차이로 달라집니다.", phone: "", kakaoChat: "https://open.kakao.com/o/sCCrB8pi", email: "", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/jung-minseok.jpeg", yearsOfExperience: 10 },
  { name: "주유림", nickname: "확실한보상Care", tagline: "보험의 완성은 보상입니다. 당신의 권리를 완벽히 설계합니다.", phone: "", kakaoChat: "https://open.kakao.com/o/sfbC4yqi", email: "", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/joo-yurim.jpeg", yearsOfExperience: 6 },
  { name: "이태경", nickname: "보험_디자이너", tagline: "보험도 디자인이 필요합니다. 당신의 라이프 맞춤형 디자이너", phone: "", kakaoChat: "https://open.kakao.com/o/sMqStzqi", email: "", instagram: null, blog: null, specialties: ["신규상담", "보장분석", "리모델링", "보상청구"], featured: false, profileImage: "/profiles/lee-taekyung.jpeg", yearsOfExperience: 9 },
];

export const SPECIALTY_ICONS: Record<string, { emoji: string; label: string }> = {
  "신규상담": { emoji: "📋", label: "신규상담" },
  "보장분석": { emoji: "🔍", label: "보장분석" },
  "리모델링": { emoji: "🔄", label: "리모델링" },
  "연금컨설팅": { emoji: "💰", label: "연금컨설팅" },
  "상속컨설팅": { emoji: "📜", label: "상속컨설팅" },
  "보상청구": { emoji: "🏥", label: "보상청구" },
};

export const AVATAR_COLORS = [
  { bg: "bg-amber-50", text: "text-amber-700" },
  { bg: "bg-sky-50", text: "text-sky-700" },
  { bg: "bg-emerald-50", text: "text-emerald-700" },
  { bg: "bg-rose-50", text: "text-rose-700" },
  { bg: "bg-indigo-50", text: "text-indigo-700" },
  { bg: "bg-orange-50", text: "text-orange-700" },
  { bg: "bg-teal-50", text: "text-teal-700" },
  { bg: "bg-violet-50", text: "text-violet-700" },
  { bg: "bg-red-50", text: "text-red-700" },
  { bg: "bg-lime-50", text: "text-lime-700" },
  { bg: "bg-fuchsia-50", text: "text-fuchsia-700" },
  { bg: "bg-cyan-50", text: "text-cyan-700" },
];

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
