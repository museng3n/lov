import logoIconImage from '@/assets/triggerio-icon.png';
import logoTextImage from '@/assets/triggerio-logotext.png';

interface TriggerioLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const TriggerioLogo = ({ className = '', size = 'md' }: TriggerioLogoProps) => {
  const sizeMap = {
    sm: { iconHeight: 50, textHeight: 26 },
    md: { iconHeight: 80, textHeight: 38 },
    lg: { iconHeight: 120, textHeight: 56 },
  };

  const { iconHeight, textHeight } = sizeMap[size];

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* Logo icon */}
      <img
        src={logoIconImage}
        alt="Triggerio Icon"
        style={{ height: iconHeight }}
        className="object-contain"
      />

      {/* Logo text */}
      <img
        src={logoTextImage}
        alt="Triggerio"
        style={{ height: textHeight }}
        className="object-contain"
      />
    </div>
  );
};

export default TriggerioLogo;
