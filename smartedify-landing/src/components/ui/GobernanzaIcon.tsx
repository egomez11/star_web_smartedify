import React from 'react';
import { icons } from '../../config/assets';

interface GobernanzaIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  alt?: string;
}

export const GobernanzaIcon: React.FC<GobernanzaIconProps> = ({
  size = 'md',
  className = '',
  alt = 'Icono Gobernanza',
}) => {
  const sizeMap: Record<string, number> = {
    sm: 20,
    md: 36,
    lg: 56,
  };

  const px = sizeMap[size] || sizeMap.md;
  const src = (icons && icons.custom && icons.custom.governance) || '/images/logo-assembly.png';

  return (
    <div className={className} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <img
        src={src}
        alt={alt}
        style={{ width: px, height: 'auto', display: 'block', borderRadius: 4 }}
        loading="lazy"
      />
    </div>
  );
};

export default GobernanzaIcon;
