import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

/**
 * Componente de imagen optimizada con lazy loading y mejores prácticas
 * Facilita el reemplazo de imágenes en todo el proyecto
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  objectFit = 'cover',
}) => {
  const style: React.CSSProperties = {
    objectFit,
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={(e) => {
        // Fallback en caso de error
        const target = e.target as HTMLImageElement;
        target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
      }}
    />
  );
};

export default OptimizedImage;
