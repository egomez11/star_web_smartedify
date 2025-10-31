# 🎨 Sistema de Assets - Quick Start

## ⚡ Uso Rápido

### Importar y usar imágenes
```tsx
import { images } from '../config/assets';

// En tu componente
<img src={images.logo.main} alt={images.logo.alt} />
```

### Componente optimizado
```tsx
import { OptimizedImage } from './ui/OptimizedImage';
import { images } from '../config/assets';

<OptimizedImage
  src={images.about.dashboard}
  alt="Dashboard"
  loading="lazy"
/>
```

## 📁 Estructura

```
public/
├── images/           # ← Coloca aquí tus imágenes
│   ├── logo-smartedify.jpg
│   └── README.md
└── icons/            # ← Coloca aquí tus iconos
    ├── favicon.svg
    └── README.md

src/
└── config/
    └── assets.ts     # ← Actualiza las rutas aquí
```

## 🔄 Pasos para agregar una imagen nueva

### 1. Copia la imagen
```bash
cp mi-imagen.jpg public/images/mi-imagen.jpg
```

### 2. Registra en assets.ts
```typescript
// src/config/assets.ts
export const images = {
  miSeccion: {
    miImagen: '/images/mi-imagen.jpg',
  },
};
```

### 3. Usa en tu componente
```tsx
import { images } from '../config/assets';

<img src={images.miSeccion.miImagen} alt="Mi Imagen" />
```

## ✅ Checklist

- [ ] Optimizar imagen antes de copiar ([TinyPNG](https://tinypng.com/))
- [ ] Usar nombre descriptivo en kebab-case
- [ ] Agregar entrada en `assets.ts`
- [ ] Probar en navegador

## 📚 Documentación Completa

Ver [IMAGES_GUIDE.md](./IMAGES_GUIDE.md) para guía detallada.

## 🎯 Assets Actuales

### Imágenes Disponibles
- ✅ Logo principal: `images.logo.main`
- ✅ Dashboard (placeholder): `images.about.dashboard`
- ⏳ Hero background: Por agregar
- ⏳ Screenshots: Por agregar

### Iconos
- ✅ Favicon SVG
- ⏳ Iconos personalizados: Por crear

## 🐛 Problemas Comunes

**Imagen no aparece:**
```bash
# Verifica que existe
ls public/images/tu-imagen.jpg

# Verifica la ruta (debe empezar con /)
src="/images/logo.jpg"  ✅
src="images/logo.jpg"   ❌
```

**Imagen muy grande:**
```bash
# Optimiza en https://tinypng.com/
# Objetivo: < 200KB
```
