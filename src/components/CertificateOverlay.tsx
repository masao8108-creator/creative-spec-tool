import { useState } from "react";

interface Props {
  profileImage: string;
  visible: boolean;
}

const getEnglishName = (profileImage: string) => {
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
      className="absolute inset-0 z-10 flex flex-col items-center justify-center"
      style={{
        background: "rgba(26, 30, 44, 0.9)",
        backdropFilter: "blur(4px)",
        padding: 12,
        overflow: "hidden",
      }}
    >
      {bothMissing ? (
        <span className="text-[13px] text-white/70 font-medium">자격증 정보 준비 중</span>
      ) : (
        <div className="flex gap-2 w-full h-full items-start">
          {!shbError && (
            <div className="flex flex-col items-center gap-1" style={{ width: "48%" }}>
              <span className="text-[10px] font-bold" style={{ color: "#E5A31D" }}>손해보험</span>
              <img
                src={shbPath}
                alt="손해보험 자격증"
                className="rounded-lg w-full"
                style={{ objectFit: "contain" }}
                onError={() => setShbError(true)}
              />
            </div>
          )}
          {!smbError && (
            <div className="flex flex-col items-center gap-1" style={{ width: "48%" }}>
              <span className="text-[10px] font-bold" style={{ color: "#E5A31D" }}>생명보험</span>
              <img
                src={smbPath}
                alt="생명보험 자격증"
                className="rounded-lg w-full"
                style={{ objectFit: "contain" }}
                onError={() => setSmbError(true)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CertificateOverlay;
