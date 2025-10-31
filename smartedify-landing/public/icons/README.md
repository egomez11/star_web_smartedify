# 🎯 Carpeta de Iconos - SmartEdify

Esta carpeta contiene iconos personalizados y recursos gráficos pequeños del proyecto.

## 📦 Contenido

### Iconos de Servicios
Iconos SVG personalizados para cada servicio de SmartEdify:
- Governance
- Compliance
- Reservations
- Asset Management
- Finance
- Payroll
- HR
- Documents

### Iconos de UI
- Flechas
- Checks
- Close buttons
- Menu icons

### Favicon
- `favicon.ico` - Icono del navegador
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`

## 📝 Formato Recomendado

**SVG** es el formato preferido para iconos por:
- Escalabilidad infinita
- Tamaño de archivo pequeño
- Fácil personalización con CSS
- Mejor rendimiento

## 🎨 Estilo de Iconos

Los iconos deben seguir el sistema de diseño de SmartEdify:
- **Líneas**: 2px stroke width
- **Esquinas**: Redondeadas (border-radius: 4px)
- **Colores**:
  - Primario: #1E3FA7
  - Acento: #F97316
  - Neutral: #6B7280

## 🔄 Uso en React

### Con React Icons (actual)
```tsx
import { FiCalendar } from 'react-icons/fi';

<FiCalendar size={24} color="#F97316" />
```

### Con SVG personalizado
```tsx
<img src="/icons/custom-icon.svg" alt="Custom Icon" />
```

### Como componente SVG
```tsx
import CustomIcon from '/icons/custom-icon.svg?react';

<CustomIcon className="icon" />
```

## 📋 Checklist de Iconos

### Básicos
- [ ] Favicon set completo
- [x] Logo icon (parte del logo principal)

### Servicios (actualmente usando React Icons)
- [ ] Governance custom icon
- [ ] Compliance custom icon
- [ ] Reservations custom icon
- [ ] Asset Management custom icon
- [ ] Finance custom icon
- [ ] Payroll custom icon
- [ ] HR custom icon
- [ ] Documents custom icon

### UI
- [ ] Menu hamburger
- [ ] Close (X)
- [ ] Arrow down
- [ ] Check mark
- [ ] Error icon
- [ ] Success icon
