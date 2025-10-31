# Configuración de GitHub Pages y Dominio Personalizado

## ✅ Pasos Completados

1. ✅ Configuración de Vite para GitHub Pages
2. ✅ GitHub Actions workflow para despliegue automático
3. ✅ Scripts de deploy en package.json
4. ✅ Push al repositorio

## 📋 Pasos Pendientes en GitHub

### 1. Habilitar GitHub Pages

1. Ve a tu repositorio: https://github.com/egomez11/star_web_smartedify
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona:
   - **Source:** `GitHub Actions`
4. El workflow se ejecutará automáticamente con el próximo push

### 2. Verificar el Despliegue

Una vez que el workflow termine (puedes verlo en la pestaña **Actions**):
- Tu sitio estará disponible en: `https://egomez11.github.io/star_web_smartedify/`

## 🌐 Configurar Dominio Personalizado en Squarespace

### Opción A: Usar un Subdominio (Recomendado)

Si tienes `ejemplo.com` en Squarespace y quieres usar `smartedify.ejemplo.com`:

#### En GitHub:
1. Ve a **Settings** > **Pages**
2. En **Custom domain**, ingresa: `smartedify.ejemplo.com`
3. Haz clic en **Save**
4. Espera la verificación DNS

#### En Squarespace:
1. Ve a **Settings** > **Domains** > **DNS Settings**
2. Agrega un registro **CNAME**:
   ```
   Host: smartedify
   Target: egomez11.github.io
   TTL: Automático (o 3600)
   ```

### Opción B: Usar el Dominio Raíz

Si quieres usar directamente `ejemplo.com`:

#### En GitHub:
1. Ve a **Settings** > **Pages**
2. En **Custom domain**, ingresa: `ejemplo.com`
3. Haz clic en **Save**
4. ✅ Marca la opción **Enforce HTTPS** (después de la verificación DNS)

#### En Squarespace:
1. Ve a **Settings** > **Domains** > **DNS Settings**
2. Agrega 4 registros **A** para el dominio raíz (@):
   ```
   Host: @
   Target: 185.199.108.153
   
   Host: @
   Target: 185.199.109.153
   
   Host: @
   Target: 185.199.110.153
   
   Host: @
   Target: 185.199.111.153
   ```
3. Agrega un registro **CNAME** para www:
   ```
   Host: www
   Target: egomez11.github.io
   ```

### 3. Crear archivo CNAME en el proyecto

Después de configurar el dominio en GitHub, crea el archivo:

**`/workspaces/star_web_smartedify/smartedify-landing/public/CNAME`**

Con el contenido:
```
tudominio.com
```
o
```
smartedify.tudominio.com
```

Luego haz commit:
```bash
cd /workspaces/star_web_smartedify
git add smartedify-landing/public/CNAME
git commit -m "config: Agregar CNAME para dominio personalizado"
git push origin main
```

## ⏱️ Tiempos de Propagación

- **GitHub Pages:** 2-10 minutos después del push
- **DNS de Squarespace:** 1-48 horas (usualmente 1-4 horas)

## 🔍 Verificar Configuración

### Verificar DNS:
```bash
# Para CNAME
dig smartedify.tudominio.com CNAME

# Para registros A
dig tudominio.com A
```

### Verificar el sitio:
1. Espera que el workflow de GitHub Actions termine
2. Ve a la pestaña **Actions** en GitHub para ver el progreso
3. Una vez completado, visita tu URL

## 🚀 Despliegue Automático

Cada vez que hagas push a la rama `main`, el sitio se desplegará automáticamente:
1. GitHub Actions detecta el push
2. Instala dependencias
3. Ejecuta el build
4. Despliega a GitHub Pages

## 📊 Monitorear Despliegues

Ve a: https://github.com/egomez11/star_web_smartedify/actions

Ahí verás el estado de cada despliegue.

## 🔧 Solución de Problemas

### El sitio no carga (404)
- Verifica que `base: '/star_web_smartedify/'` esté en `vite.config.ts`
- Revisa que el workflow haya terminado exitosamente

### Errores de CSS o recursos
- Asegúrate de que todas las rutas sean relativas
- Verifica que el `base` en vite.config.ts sea correcto

### El dominio personalizado no funciona
- Espera 24-48 horas para la propagación DNS
- Verifica los registros DNS con `dig` o herramientas online
- Asegúrate de que el archivo CNAME esté en el directorio public/

## 📝 Notas Importantes

1. **HTTPS:** GitHub Pages proporciona certificado SSL gratuito
2. **Cache:** Puede tomar unos minutos ver los cambios por el cache del navegador
3. **Subdirectorio:** Si usas el path base `/star_web_smartedify/`, todas las rutas deben considerarlo
4. **Dominio personalizado:** El archivo CNAME es crucial para mantener el dominio

## 🎯 Próximos Pasos

1. [ ] Habilitar GitHub Pages en Settings
2. [ ] Esperar el primer despliegue automático
3. [ ] Verificar el sitio en `https://egomez11.github.io/star_web_smartedify/`
4. [ ] (Opcional) Configurar dominio personalizado en Squarespace
5. [ ] (Opcional) Crear archivo CNAME en public/
6. [ ] (Opcional) Actualizar `base` en vite.config.ts a `'/'` si usas dominio raíz
