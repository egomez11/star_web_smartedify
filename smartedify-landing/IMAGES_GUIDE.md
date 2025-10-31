# 📸 Guía de Gestión de Imágenes e Iconos - SmartEdify

Esta guía explica cómo trabajar con imágenes e iconos en el proyecto SmartEdify Landing Page.

## 📁 Estructura de Carpetas

```
smartedify-landing/
├── public/
│   ├── images/           # Imágenes del proyecto
│   │   ├── logo-smartedify.jpg
│   │   └── README.md
│   └── icons/            # Iconos personalizados
│       └── README.md
└── src/
    ├── config/
    │   └── assets.ts     # Configuración centralizada
    └── components/
        └── ui/
            └── OptimizedImage.tsx
```

## 🎯 Sistema de Assets Centralizado

### 1. Configuración (`src/config/assets.ts`)

Todas las rutas de imágenes están centralizadas en este archivo:

```typescript
import { images } from '../config/assets';

// Uso en componente
<img src={images.logo.main} alt={images.logo.alt} />
```

**Ventajas:**
- ✅ Un solo lugar para actualizar todas las referencias
- ✅ Autocompletado en el editor
- ✅ Fácil mantenimiento
- ✅ Previene enlaces rotos

### 2. Componente OptimizedImage

Componente con mejores prácticas integradas:

```tsx
import { OptimizedImage } from './ui/OptimizedImage';
import { images } from '../config/assets';

<OptimizedImage
  src={images.about.dashboard}
  alt="Dashboard de SmartEdify"
  className="dashboard-img"
  loading="lazy"
  objectFit="cover"
/>
```

**Características:**
- Lazy loading por defecto
- Fallback automático si la imagen falla
- Control de object-fit
- Optimización de rendimiento

## 🔄 Cómo Reemplazar Imágenes

### Método 1: Reemplazar archivo directamente
```bash
# Coloca tu nueva imagen con el mismo nombre
cp tu-nuevo-logo.jpg public/images/logo-smartedify.jpg
```

### Método 2: Actualizar configuración
```typescript
// src/config/assets.ts
export const images = {
  logo: {
    main: '/images/mi-nuevo-logo.png', // Cambiar aquí
    alt: 'SmartEdify Logo',
  },
};
```

### Método 3: Añadir nueva imagen
```typescript
// 1. Copia imagen a public/images/
cp mi-imagen.jpg public/images/hero-background.jpg

// 2. Añade en assets.ts
export const images = {
  hero: {
    background: '/images/hero-background.jpg', // Nueva entrada
  },
};

// 3. Usa en componente
<OptimizedImage src={images.hero.background} alt="Hero Background" />
```

## 🎨 Iconos

### React Icons (Actual)
```tsx
import { FiCalendar } from 'react-icons/fi';

<FiCalendar size={24} color="#F97316" />
```

### Iconos Personalizados SVG (Futuro)
```typescript
// 1. Coloca SVG en public/icons/
public/icons/mi-icono.svg

// 2. Añade en assets.ts
export const icons = {
  custom: {
    miIcono: '/icons/mi-icono.svg',
  },
};

// 3. Usa en componente
<img src={icons.custom.miIcono} alt="Mi Icono" />
```

## 📋 Checklist para Nuevas Imágenes

Antes de agregar una imagen, verifica:

- [ ] ¿La imagen está optimizada? (usa [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/))
- [ ] ¿El tamaño es apropiado? (máx 2000px width)
- [ ] ¿El formato es correcto? (JPG para fotos, PNG para transparencias, SVG para vectores)
- [ ] ¿El nombre sigue la convención? (kebab-case)
- [ ] ¿Está en la carpeta correcta? (`public/images/` o `public/icons/`)
- [ ] ¿Se agregó a `assets.ts`?
- [ ] ¿El alt text es descriptivo?

## 🚀 Mejores Prácticas

### 1. Optimización
```bash
# Instalar herramienta de optimización (opcional)
npm install -D imagemin imagemin-mozjpeg imagemin-pngquant
```

### 2. Lazy Loading
Siempre usar `loading="lazy"` excepto para imágenes above-the-fold:

```tsx
<OptimizedImage 
  src={images.hero.main} 
  loading="eager"  // Hero debe cargar inmediatamente
/>

<OptimizedImage 
  src={images.features.governance} 
  loading="lazy"   // Características pueden cargar después
/>
```

### 3. Alt Text
Siempre proporcionar texto alternativo descriptivo:

```tsx
// ❌ Mal
<img src={images.logo.main} alt="logo" />

// ✅ Bien
<img src={images.logo.main} alt="SmartEdify - Plataforma de Gestión de Condominios" />
```

### 4. Responsive Images
Para diferentes tamaños de pantalla:

```tsx
<picture>
  <source 
    srcSet="/images/hero-mobile.jpg" 
    media="(max-width: 768px)" 
  />
  <source 
    srcSet="/images/hero-tablet.jpg" 
    media="(max-width: 1024px)" 
  />
  <img 
    src="/images/hero-desktop.jpg" 
    alt="Hero" 
  />
</picture>
```

## 📦 Imágenes Requeridas

### Prioritarias
- [x] Logo principal (`logo-smartedify.jpg`)
- [ ] Hero background de alta calidad
- [ ] Dashboard screenshot real
- [ ] 8 imágenes de servicios

### Secundarias
- [ ] Favicon set completo
- [ ] Screenshots de plataforma (3-5)
- [ ] Fotos del equipo
- [ ] Logos de clientes
- [ ] Certificaciones/badges

### Placeholders Actuales
- Dashboard: Unsplash (temporal)
- Servicios: React Icons (reemplazar con custom)

## 🔗 Recursos Útiles

### Bancos de Imágenes Gratuitas
- [Unsplash](https://unsplash.com/) - Fotos de alta calidad
- [Pexels](https://www.pexels.com/) - Fotos y videos gratis
- [Pixabay](https://pixabay.com/) - Imágenes libres de derechos

### Herramientas de Optimización
- [TinyPNG](https://tinypng.com/) - Compresión PNG/JPG
- [Squoosh](https://squoosh.app/) - Optimizador de Google
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimizador SVG

### Generadores de Iconos
- [Heroicons](https://heroicons.com/) - Iconos SVG hermosos
- [Feather Icons](https://feathericons.com/) - Iconos simples
- [React Icons](https://react-icons.github.io/react-icons/) - Librería actual

## 💡 Tips

1. **Nombres descriptivos**: `hero-dashboard.jpg` > `img1.jpg`
2. **Versionado**: Añade `-v2` si actualizas: `logo-smartedify-v2.jpg`
3. **Organización**: Crea subcarpetas si hay muchas imágenes: `images/services/`, `images/team/`
4. **Documentación**: Actualiza `assets.ts` cuando agregues imágenes
5. **Testing**: Verifica que las imágenes se vean bien en diferentes tamaños de pantalla

## 🐛 Troubleshooting

### Imagen no se muestra
```typescript
// Verifica la ruta (debe iniciar con /)
src="/images/logo.jpg"  // ✅ Correcto
src="images/logo.jpg"   // ❌ Incorrecto

// Verifica que el archivo existe
ls public/images/logo.jpg
```

### Imagen muy pesada
```bash
# Optimiza con TinyPNG o convierte a WebP
# Tamaño objetivo: < 200KB para fotos
```

### Imagen borrosa
```typescript
// Usa imágenes 2x para pantallas Retina
// Si diseño es 400x300, usa imagen 800x600
```

## 📞 Soporte

Si tienes problemas con imágenes, verifica:
1. La ruta en `assets.ts`
2. El archivo existe en `public/images/`
3. El formato es compatible (JPG, PNG, SVG, WebP)
4. La consola del navegador para errores 404
