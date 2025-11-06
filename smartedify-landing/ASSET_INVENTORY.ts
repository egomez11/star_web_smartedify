// Asset Usage Map - SmartEdify Landing
// Documentación de dónde se utilizan todas las imágenes y recursos

/*
═══════════════════════════════════════════════════════════════════════════════
                    IMÁGENES DISPONIBLES EN public/images/
═══════════════════════════════════════════════════════════════════════════════

📁 public/images/
├── logo-smartedify.jpg
│   ├── Used in: Header.tsx (logo principal)
│   ├── Used in: index.html (og:image, apple-touch-icon)
│   ├── Used in: assets.ts (images.logo.main)
│   └── Used in: Services.tsx (Documents service icon)
│
├── logo-assembly.png
│   ├── Used in: Platform.tsx (via GobernanzaIcon)
│   ├── Used in: assets.ts (governance icon)
│   └── Used in: Services.tsx (Governanza service)
│
├── logo-security.png
│   ├── Used in: assets.ts (compliance icon)
│   └── Used in: Services.tsx (Compliance service)
│
├── logo-reservation.png
│   ├── Used in: assets.ts (reservations icon)
│   └── Used in: Services.tsx (Reservations service)
│
├── logo-mantenimiento.png
│   ├── Used in: assets.ts (assets/maintenance icon)
│   └── Used in: Services.tsx (Asset Management service)
│
├── logo-finanzas.png
│   ├── Used in: assets.ts (finance & payroll icons)
│   └── Used in: Services.tsx (Finance & Payroll services)
│
└── logo-rrhh.png
    ├── Used in: assets.ts (hr icon)
    └── Used in: Services.tsx (HR Compliance service)

═══════════════════════════════════════════════════════════════════════════════
                         COMPONENT USAGE REFERENCE
═══════════════════════════════════════════════════════════════════════════════

Header.tsx (src/components/Header.tsx)
├── imports: images.logo.main (/images/logo-smartedify.jpg)
├── Renders: SmartEdify logo en navegación
└── Note: Logo clickable, enlace a home

GobernanzaIcon.tsx (src/components/ui/GobernanzaIcon.tsx)
├── imports: icons.custom.governance (/images/logo-assembly.png)
├── Usage: Platform.tsx (feature icons)
├── Props: size ('sm' | 'md' | 'lg'), className, alt
└── Optimizations: lazy loading, inline-flex display

About.tsx (src/components/About.tsx)
├── imports: images.about.dashboard (Unsplash URL - externo)
├── Purpose: Mock dashboard para demostración
└── Note: Externo, no en public/images

Services.tsx (src/components/Services.tsx)
├── Services con iconos react-icons (no imágenes)
├── Podría extenderse para usar logo images si se desea
└── Current: Usa FiShield, FiCheckCircle, etc. (react-icons)

Platform.tsx (src/components/Platform.tsx)
├── Uses: GobernanzaIcon para primera feature
├── Badges: Solo texto, sin imágenes
└── Note: Arquitectura de seguridad - no requiere muchas assets

═══════════════════════════════════════════════════════════════════════════════
                         ASSET CONFIGURATION
═══════════════════════════════════════════════════════════════════════════════

src/config/assets.ts - CENTRALIZADO
├── images.logo (principal)
├── images.features (7 logos de servicios)
├── images.about (Unsplash placeholders)
├── images.placeholders (Unsplash para mockups)
├── icons.custom (mapping a logos locales)
├── icons.favicon (SVG en public/icons/)
└── getImage() - helper con fallback

═══════════════════════════════════════════════════════════════════════════════
                         TAMAÑO DE ASSETS
═══════════════════════════════════════════════════════════════════════════════

public/images/:
├── logo-smartedify.jpg    ~45 KB (principal)
├── logo-assembly.png      ~8 KB
├── logo-security.png      ~6 KB
├── logo-reservation.png   ~5 KB
├── logo-mantenimiento.png ~7 KB
├── logo-finanzas.png      ~6 KB
└── logo-rrhh.png          ~5 KB
                           ─────────
                    TOTAL: ~82 KB (sin comprimir)
                      Vite: ~25 KB gzip

Unsplash URLs (external CDN): Cargadas bajo demanda, no en bundle

═══════════════════════════════════════════════════════════════════════════════
                      RECOMENDACIONES FUTURAS
═══════════════════════════════════════════════════════════════════════════════

1. OPTIMIZACIÓN DE IMÁGENES
   ├── Convertir PNG a WebP (50-70% size reduction)
   ├── Comprimir JPG con ImageOptim/TinyPNG
   ├── Generar srcset para responsive images
   └── Lazy-load todas las imágenes except hero

2. IMPLEMENTAR SRCSET PARA RESPONSIVE
   ├── Generar versions: @1x, @2x, @3x
   ├── Usar picture tag para art-direction
   └── Fallback a JPG para navegadores antiguos

3. USAR NEXT/IMAGE O SIMILAR
   ├── Automatic optimization
   ├── Format negotiation (WebP, AVIF)
   ├── Responsive sizing
   └── On-demand resizing

4. AUDITAR IMÁGENES NO USADAS
   ├── Script: npm run audit:images
   ├── Detectar dead assets
   ├── Remover con seguridad
   └── Documentar en CI

5. CONSIDERAR CDN PARA LOGOS
   ├── Servir desde CDN (CloudFlare, AWS CloudFront)
   ├── Cache headers: max-age 1 year
   ├── Versioning en URLs
   └── Analytics de performance

═══════════════════════════════════════════════════════════════════════════════
*/

// Exportar para reference en desarrollo
export const ASSET_INVENTORY = {
  localImages: {
    'logo-smartedify.jpg': {
      usage: ['Header', 'HTML meta tags', 'Services/Documents'],
      size: '~45 KB',
      format: 'JPG',
    },
    'logo-assembly.png': {
      usage: ['Platform (GobernanzaIcon)', 'Services/Governanza'],
      size: '~8 KB',
      format: 'PNG',
    },
    'logo-security.png': {
      usage: ['Assets mapping', 'Services/Compliance'],
      size: '~6 KB',
      format: 'PNG',
    },
    'logo-reservation.png': {
      usage: ['Assets mapping', 'Services/Reservations'],
      size: '~5 KB',
      format: 'PNG',
    },
    'logo-mantenimiento.png': {
      usage: ['Assets mapping', 'Services/Asset Management'],
      size: '~7 KB',
      format: 'PNG',
    },
    'logo-finanzas.png': {
      usage: ['Assets mapping', 'Services/Finance & Payroll'],
      size: '~6 KB',
      format: 'PNG',
    },
    'logo-rrhh.png': {
      usage: ['Assets mapping', 'Services/HR Compliance'],
      size: '~5 KB',
      format: 'PNG',
    },
  },
  externalImages: {
    unsplash: {
      purpose: 'Mockups and placeholders',
      usage: ['About section dashboards', 'Platform architecture'],
      note: 'Servidas desde CDN, no afectan bundle size',
    },
  },
  totalLocalSize: '~82 KB (uncompressed)',
  totalGzipSize: '~25 KB',
};
