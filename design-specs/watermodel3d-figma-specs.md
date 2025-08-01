# WaterModel 3D - Especificaciones de Diseño para Figma

## 🎨 Sistema de Colores

### Colores Primarios

- **Azul Principal**: #2563EB (blue-600)
- **Azul Hover**: #1D4ED8 (blue-700)
- **Azul Oscuro**: #1E3A8A (blue-800)
- **Púrpura**: #7C3AED (purple-600)

### Colores de Fondo

- **Gris Oscuro**: #111827 (gray-900)
- **Gris Medio**: #374151 (gray-700)
- **Gris Claro**: #F9FAFB (gray-50)
- **Blanco**: #FFFFFF

### Gradientes

- **Hero Background**: Linear gradient from #111827 to transparent
- **Botón Principal**: Linear gradient from #2563EB to #1D4ED8
- **Logo Background**: Linear gradient from #2563EB to #7C3AED
- **Texto Destacado**: Linear gradient from #60A5FA (blue-400) via #22D3EE (cyan-400) to #14B8A6 (teal-400)

### Colores de Estado

- **Verde**: #10B981 (green-600)
- **Amarillo**: #F59E0B (yellow-500)
- **Rojo**: #EF4444 (red-500)
- **Naranja**: #F97316 (orange-500)

## 📝 Tipografía

### Fuente Principal

- **Familia**: Inter
- **Fallbacks**: system-ui, sans-serif

### Escalas de Texto

- **text-sm**: 14px
- **text-base**: 16px
- **text-lg**: 18px
- **text-xl**: 20px
- **text-2xl**: 24px
- **text-3xl**: 30px
- **text-4xl**: 36px
- **text-5xl**: 48px
- **text-6xl**: 60px
- **text-7xl**: 72px
- **text-8xl**: 96px

### Pesos de Fuente

- **font-medium**: 500
- **font-semibold**: 600
- **font-bold**: 700

## 📐 Espaciado y Layout

### Max-widths

- **Contenedor Principal**: 1280px (max-w-5xl)
- **Contenido Centrado**: 768px (max-w-3xl)
- **Párrafos Hero**: 672px (max-w-2xl)
- **Header**: 1280px (max-w-5xl)

### Padding/Margin

- **Secciones**: py-20 (80px vertical)
- **Contenedores**: px-4 (16px)
- **Cards**: p-8 (32px)
- **Botones**: px-8 py-4 (32px horizontal, 16px vertical)

### Grid Systems

- **md:grid-cols-2**: 2 columnas en tablet+
- **lg:grid-cols-3**: 3 columnas en desktop
- **lg:grid-cols-4**: 4 columnas para stats
- **gap-8**: 32px entre elementos
- **gap-12**: 48px entre secciones

## 🧩 Componentes

### Header

- **Altura**: 80px aprox
- **Fondo**: Blanco semitransparente (white/95) con backdrop-blur
- **Posición**: Fixed, z-index: 50
- **Logo**: 40x40px con gradiente azul-púrpura
- **Navegación**: Espacio entre elementos: 32px

### Hero Section

- **Altura**: 100vh
- **Fondo**: Slider de imágenes con overlay gradient
- **Contenido**: Centrado, max-width: 768px
- **Badge**: Fondo azul semitransparente, border radius: 9999px
- **Título Principal**: 96px en desktop, gradiente animado
- **Botones**: 2 botones side-by-side en desktop

### Cards (Features, Services, etc.)

- **Fondo**: Blanco
- **Border Radius**: 12px
- **Sombra**: shadow-lg con hover:shadow-xl
- **Padding**: 32px
- **Transición**: 300ms ease
- **Hover**: transform translateY(-4px)

### Stats Section

- **Fondo**: Gradiente azul (#2563EB to #1E40AF)
- **Grid**: 4 columnas en desktop, 2 en mobile
- **Números**: text-5xl, font-bold, blanco
- **Descripción**: text-blue-100

### Testimonials

- **Layout**: Grid 3 columnas
- **Cards**: Fondo blanco, border-radius: 12px
- **Rating**: 5 estrellas amarillas
- **Avatar**: Círculo 48x48px con iniciales

### Footer

- **Fondo**: Gradiente gris-azul oscuro
- **Newsletter**: Border-bottom separador
- **Grid**: 4 columnas en desktop
- **Links**: Color azul claro con hover blanco

## 🎛️ Efectos y Animaciones

### Transiciones

- **Duración estándar**: 300ms
- **Ease**: ease-in-out
- **Hover scale**: scale(1.05) para botones
- **Hover translate**: translateY(-4px) para cards

### Sombras

- **Card normal**: shadow-lg
- **Card hover**: shadow-xl
- **Botón principal**: shadow-xl con color #2563EB/25

### Border Radius

- **Cards**: 12px
- **Botones**: 12px
- **Logo**: 8px
- **Badges**: 9999px (circular)

## 📱 Breakpoints Responsivos

### Mobile First

- **Base**: 0px - 767px
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+

### Adaptaciones Mobile

- **Grid**: 1 columna en mobile, 2-4 en desktop
- **Texto**: Escala reducida en mobile
- **Espaciado**: Padding reducido
- **Navegación**: Menú hamburguesa

## 🖼️ Imágenes y Assets

### Logo

- **Formato**: Cuadrado 40x40px
- **Contenido**: "W3D" en blanco, fondo gradiente
- **Ubicación**: Header izquierda

### Iconos

- **Tamaño estándar**: 24x24px (w-6 h-6)
- **Iconos grandes**: 32x32px (w-8 h-8)
- **Color**: Heredado del contenedor
- **Estilo**: Stroke, no fill

### Imágenes de Proyecto

- **Aspecto**: 16:9 aproximadamente
- **Border Radius**: 12px
- **Hover**: Overlay oscuro con botón "Ver detalles"

## 📋 Estructura de Páginas

### Orden de Secciones

1. **Header** (Fixed)
2. **Hero** (100vh)
3. **Stats** (azul)
4. **Features** (gris claro)
5. **Services** (blanco)
6. **Clients** (gradiente sutil)
7. **Projects** (azul claro)
8. **Process** (azul claro)
9. **Testimonials** (gris claro)
10. **CTA** (gradiente azul-púrpura)
11. **Contact** (blanco)
12. **Team** (blanco)
13. **FAQ** (azul claro)
14. **Footer** (gradiente oscuro)

## 🔧 Componentes Específicos

### Botón Principal

```
Background: Linear gradient #2563EB → #1D4ED8
Padding: 32px horizontal, 16px vertical
Border Radius: 12px
Font: Inter, 18px, semibold
Color: Blanco
Shadow: xl con blue-500/25
Hover: scale(1.05), gradiente más oscuro
```

### Botón Secundario

```
Background: Blanco/10 con backdrop-blur
Border: 2px blanco/30
Padding: 32px horizontal, 16px vertical
Border Radius: 12px
Font: Inter, 18px, semibold
Color: Blanco
Hover: background blanco/20, border blanco/50
```

### Card de Feature

```
Background: Blanco
Padding: 32px
Border Radius: 12px
Shadow: lg
Border: 1px gray-100
Hover: shadow-2xl, border-blue-200, translateY(-4px)
Icon: 64x64px con gradiente azul, border-radius: 12px
```

### Navegación Mobile

```
Background: Blanco
Position: Hidden por defecto
Flex: column
Espacio: 16px entre items
Padding: 16px
```

## 🎯 Elementos Interactivos

### Estados de Hover

- **Links**: Color cambio a azul
- **Cards**: Elevación y sombra aumentada
- **Botones**: Scale 1.05 + cambio de color
- **Iconos**: Scale 1.1

### Estados de Focus

- **Inputs**: Border azul + ring azul
- **Botones**: Outline azul
- **Links**: Outline visible

## 📊 Métricas y Datos

### Stats Destacados

- **50+**: Proyectos Completados
- **15+**: Años de Experiencia
- **98%**: Satisfacción del Cliente
- **24/7**: Soporte Técnico

### Clientes

- ESVAL
- Minera Los Pelambres
- Aguas Andinas
- INWASSER

---

## 💡 Instrucciones para Figma

1. **Crear Variables de Color**: Usar los colores especificados como variables globales
2. **Sistema de Componentes**: Crear componentes master para cards, botones, etc.
3. **Auto Layout**: Usar auto layout para grids y espaciado consistente
4. **Breakpoints**: Crear frames para mobile, tablet y desktop
5. **Texto Styles**: Definir estilos de texto basados en las escalas
6. **Effects**: Crear estilos de sombra reutilizables

Esta especificación te permitirá recrear exactamente el diseño en Figma con total fidelidad.
