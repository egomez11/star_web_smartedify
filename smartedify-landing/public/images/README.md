# 📁 Carpeta de Imágenes - SmartEdify

Esta carpeta contiene todas las imágenes utilizadas en el proyecto SmartEdify Landing Page.

## 🖼️ Estructura de Archivos

### Logos
- **logo-smartedify.jpg** - Logo principal de SmartEdify (3D con barras naranjas y curvas azules)
- Tamaño recomendado para logos: 200x200px mínimo
- Formato: JPG, PNG, SVG (preferido)

### Imágenes de Producto
- Capturas de pantalla del dashboard
- Mockups de la aplicación
- Imágenes de características

### Imágenes de Fondo
- Hero backgrounds
- Section backgrounds

## 📝 Convenciones de Nomenclatura

- Usar kebab-case: `mi-imagen-ejemplo.jpg`
- Prefijos:
  - `logo-` para logos y marcas
  - `hero-` para imágenes de hero section
  - `feature-` para imágenes de características
  - `screenshot-` para capturas de pantalla
  - `icon-` para iconos (aunque se recomienda usar la carpeta /icons)
  - `bg-` para fondos

## 🎨 Recomendaciones

1. **Optimización**: Comprimir imágenes antes de subirlas
2. **Formatos**: 
   - Fotos: JPG (optimizado)
   - Transparencias: PNG
   - Logos/vectores: SVG
   - Animaciones: WebP
3. **Tamaños**: Mantener resoluciones razonables (máx 2000px width)
4. **Nombres**: Descriptivos y en inglés

## 🔄 Cómo Reemplazar Imágenes

1. Coloca tu nueva imagen en esta carpeta
2. Usa el mismo nombre o actualiza la referencia en el componente
3. Ejemplo en componente React:
   ```tsx
   <img src="/images/logo-smartedify.jpg" alt="SmartEdify Logo" />
   ```

## ✅ Checklist de Imágenes Necesarias

- [x] Logo principal (logo-smartedify.jpg)
- [ ] Hero background
- [ ] Dashboard screenshot
- [ ] Feature images (x8 para cada servicio)
- [ ] Team photos
- [ ] Client logos
