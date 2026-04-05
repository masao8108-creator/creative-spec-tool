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
  const [shbLoaded, setShbLoaded] = useState(false);
  const [smbLoaded, setSmbLoaded] = useState(false);

  if (!visible) return null;
  if (!englishName) return null;

  const shbPath = `/profiles/${englishName}-shb.JPG`;
  const smbPath = `/profiles/${englishName}-smb.JPG`;

  // Both missing = no overlay
  if (shbError && smbError) return null;

  // At least one must have loaded successfully to show overlay
  const hasAnyCert = shbLoaded || smbLoaded;

  // If nothing loaded yet and nothing errored yet, render hidden images to probe
  // Once both error, we return null above. Once one loads, we show the overlay.
  if (!hasAnyCert && (!shbError || !smbError)) {
    return (
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        {!shbError && (
          <img
            src={shbPath}
            alt=""
            onLoad={() => setShbLoaded(true)}
            onError={() => setShbError(true)}
          />
        )}
        {!smbError && (
          <img
            src={smbPath}
            alt=""
            onLoad={() => setSmbLoaded(true)}
            onError={() => setSmbError(true)}
          />
        )}
      </div>
    );
  }

  if (!hasAnyCert) return null;

  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center"
      style={{
        background: "rgba(26, 30, 44, 0.9)",
        backdropFilter: "blur(4px)",
        padding: 12,
        overflow: "hidden",
      }}
    >
      <div className="flex gap-2 w-full items-stretch justify-center">
        {!shbError && (
          <div className="flex flex-col items-center gap-1" style={{ width: "46%" }}>
            <span className="text-[10px] font-bold" style={{ color: "#E5A31D" }}>손해보험</span>
            <div className="w-full rounded-md overflow-hidden bg-white" style={{ aspectRatio: "3/4" }}>
              <img
                src={shbPath}
                alt="손해보험 자격증"
                className="w-full h-full"
                style={{ objectFit: "contain" }}
                onError={() => setShbError(true)}
              />
            </div>
          </div>
        )}
        {!smbError && (
          <div className="flex flex-col items-center gap-1" style={{ width: "46%" }}>
            <span className="text-[10px] font-bold" style={{ color: "#E5A31D" }}>생명보험</span>
            <div className="w-full rounded-md overflow-hidden bg-white" style={{ aspectRatio: "3/4" }}>
              <img
                src={smbPath}
                alt="생명보험 자격증"
                className="w-full h-full"
                style={{ objectFit: "contain" }}
                onError={() => setSmbError(true)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateOverlay;
