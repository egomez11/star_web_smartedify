import React from 'react';

interface IconProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Icon: React.FC<IconProps> = ({ 
  children, 
  className = '',
  size = 'md'
}) => {
  const sizeClass = size === 'sm' ? 'icon-sm' : size === 'lg' ? 'icon-lg' : 'icon-md';
  
  return (
    <span className={`icon ${sizeClass} ${className}`} role="img" aria-hidden="true">
      {children}
    </span>
  );
};