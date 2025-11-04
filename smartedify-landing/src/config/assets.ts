/**
 * Configuración centralizada de imágenes e iconos
 * Facilita el reemplazo de assets en todo el proyecto
 */

export const images = {
  // Logos
  logo: {
    main: '/images/logo-smartedify.jpg',
    alt: 'SmartEdify Logo',
  },

  // Hero Section
  hero: {
    background: '/images/hero-bg.jpg',
    dashboard: '/images/dashboard-preview.jpg',
  },

  // About Section
  about: {
    dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
  },

  // Features
  features: {
    // Apuntando a assets disponibles en public/images
    governance: '/images/logo-assembly.png',
    compliance: '/images/logo-security.png',
    reservations: '/images/logo-reservation.png',
    assets: '/images/logo-mantenimiento.png',
    finance: '/images/logo-finanzas.png',
    payroll: '/images/logo-finanzas.png',
    hr: '/images/logo-rrhh.png',
    documents: '/images/logo-smartedify.jpg',
  },

  // Platform
  platform: {
    architecture: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80',
    security: '/images/platform-security.jpg',
  },

  // Placeholders (Unsplash)
  placeholders: {
    tech: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    analytics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80',
  },
};

export const icons = {
  // Iconos personalizados (cuando estén disponibles)
  custom: {
    // Usamos el logo proporcionado como icono de gobernanza (archivo en public/images)
    governance: '/images/logo-assembly.png',
    compliance: '/images/logo-security.png',
    reservations: '/images/logo-reservation.png',
    assets: '/images/logo-mantenimiento.png',
    finance: '/images/logo-finanzas.png',
    payroll: '/images/logo-finanzas.png',
    hr: '/images/logo-rrhh.png',
    documents: '/images/logo-smartedify.jpg',
  },

  // Favicon
  favicon: {
    // Se usa el favicon disponible en public/icons
    ico: '/icons/favicon.svg',
    png16: '/icons/favicon.svg',
    png32: '/icons/favicon.svg',
    appleTouchIcon: '/icons/favicon.svg',
  },
};

// Helper function para obtener imagen con fallback
export const getImage = (path: string, fallback?: string): string => {
  return path || fallback || images.placeholders.tech;
};

// Export default para importación simple
export default {
  images,
  icons,
  getImage,
};
