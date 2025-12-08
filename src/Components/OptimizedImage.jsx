import React from 'react';

/**
 * Componente OptimizedImage - Otimiza carregamento de imagens
 * 
 * Recursos:
 * - Lazy loading automático
 * - WebP com fallback
 * - Dimensões responsivas
 * - Otimização nativa
 */
export const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
}) => {
  // Gerar versão WebP se possível
  const srcWithoutExt = src.substring(0, src.lastIndexOf('.'));
  const webpSrc = `/webp/${srcWithoutExt}.webp`;

  return (
    <picture>
      {/* WebP para navegadores modernos */}
      <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
      
      {/* Fallback para formatos antigos */}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
      />
    </picture>
  );
};

/**
 * Componente LazyImage - Imagem com lazy loading avançado
 * 
 * Recursos:
 * - IntersectionObserver
 * - Placeholder
 * - Blur up effect
 */
export const LazyImage = ({
  src,
  alt,
  placeholder,
  className = '',
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState(placeholder || src);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const img = new Image();
        img.onload = () => {
          setImageSrc(src);
          setIsLoaded(true);
          onLoad?.();
        };
        img.onerror = () => {
          setImageSrc(src);
        };
        img.src = src;
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [src, onLoad]);

  return (
    <img
      ref={ref}
      src={imageSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-50'}`}
      loading="lazy"
      decoding="async"
    />
  );
};

export default OptimizedImage;
