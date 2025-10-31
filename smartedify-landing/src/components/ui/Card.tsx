import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  floating = false,
  delay = 0 
}) => {
  const classes = `card ${floating ? 'card-floating' : ''} ${className}`;
  const style = floating ? { animationDelay: `${delay}s` } : undefined;

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};