import { useState } from "react";

interface Props {
  profileImage: string;
  visible: boolean;
}

const getEnglishName = (profileImage: string) => {
  // Extract english name from path like "/profiles/cha-wonju.jpg" → "cha-wonju"
  const match = profileImage.match(/\/profiles\/([^.]+)/);
  return match ? match[1] : null;
};

const CertificateOverlay = ({ profileImage, visible }: Props) => {
  const englishName = getEnglishName(profileImage);
  const [shbError, setShbError] = useState(false);
  const [smbError, setSmbError] = useState(false);

  if (!visible) return null;

  const shbPath = `/profiles/${englishName}-shb.JPG`;
  const smbPath = `/profiles/${englishName}-smb.JPG`;
  const bothMissing = !englishName || (shbError && smbError);

  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-start gap-2 p-3 overflow-y-auto"
      style={{
        background: "rgba(26, 30, 44, 0.9)",
        backdropFilter: "blur(4px)",
      }}
    >
      {bothMissing ? (
        <div className="flex-1 flex items-center justify-center">
          <span className="text-[13px] text-white/70 font-medium">자격증 정보 준비 중</span>
        </div>
      ) : (
        <>
          {!shbError && (
            <div className="w-full flex flex-col items-center gap-1">
              <span className="text-[12px] font-bold" style={{ color: "#E5A31D" }}>손해보험 자격증</span>
              <img
                src={shbPath}
                alt="손해보험 자격증"
                className="rounded-lg"
                style={{ width: "90%" }}
                onError={() => setShbError(true)}
              />
            </div>
          )}
          {!smbError && (
            <div className="w-full flex flex-col items-center gap-1">
              <span className="text-[12px] font-bold" style={{ color: "#E5A31D" }}>생명보험 자격증</span>
              <img
                src={smbPath}
                alt="생명보험 자격증"
                className="rounded-lg"
                style={{ width: "90%" }}
                onError={() => setSmbError(true)}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CertificateOverlay;
