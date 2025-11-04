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
    governance: '/images/feature-governance.jpg',
    compliance: '/images/feature-compliance.jpg',
    reservations: '/images/feature-reservations.jpg',
    assets: '/images/feature-assets.jpg',
    finance: '/images/logo-finanzas.png',
    payroll: '/images/feature-payroll.jpg',
    hr: '/images/feature-hr.jpg',
    documents: '/images/feature-documents.jpg',
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
    compliance: '/icons/compliance.svg',
    reservations: '/icons/reservations.svg',
    assets: '/icons/assets.svg',
    finance: '/icons/finance.svg',
    payroll: '/icons/payroll.svg',
    hr: '/icons/hr.svg',
    documents: '/icons/documents.svg',
  },

  // Favicon
  favicon: {
    ico: '/icons/favicon.ico',
    png16: '/icons/favicon-16x16.png',
    png32: '/icons/favicon-32x32.png',
    appleTouchIcon: '/icons/apple-touch-icon.png',
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
