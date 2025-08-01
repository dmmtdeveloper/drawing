# WaterModel 3D - Layout y Dimensiones para Figma

## 📐 Frame Principal

### Desktop (1440px)

```
Frame: 1440px x 8000px (aproximado)
Content Max-Width: 1024px (centrado)
Margins: 208px laterales (1440-1024)/2
```

### Tablet (768px)

```
Frame: 768px x 10000px (aproximado)
Content Max-Width: 720px
Margins: 24px laterales
```

### Mobile (375px)

```
Frame: 375px x 12000px (aproximado)
Content Max-Width: 343px
Margins: 16px laterales
```

## 🏗️ Secciones Detalladas

### 1. Header (Fixed)

```
Height: 80px
Background: rgba(255, 255, 255, 0.95) + blur
Content Max-Width: 1024px
Padding: 16px horizontal

Logo:
- Size: 40x40px
- Border-radius: 8px
- Background: Linear gradient blue→purple

Navigation:
- Gap between items: 32px
- Font: 16px, medium
- CTA Button: 24px padding vertical, 24px horizontal
```

### 2. Hero Section

```
Height: 100vh (800px desktop, 600px mobile)
Background: Image slider + gradient overlay
Content Max-Width: 768px
Text Alignment: Center

Badge:
- Padding: 16px horizontal, 8px vertical
- Border-radius: 9999px
- Background: rgba(37, 99, 235, 0.2)
- Margin-bottom: 24px

Main Title:
- Desktop: 96px
- Tablet: 72px
- Mobile: 48px
- Line-height: 1.25
- Margin-bottom: 24px

Subtitle:
- Desktop: 24px
- Mobile: 20px
- Max-width: 672px
- Margin-bottom: 16px

Trust Indicators:
- Font-size: 18px
- Margin-bottom: 40px

Buttons Container:
- Gap: 16px
- Flex-direction: column mobile, row desktop

Trust Section:
- Margin-top: 64px
- Padding-top: 32px
- Border-top: 1px rgba(255,255,255,0.2)
```

### 3. Stats Section

```
Height: Auto
Background: Linear gradient blue
Padding: 64px vertical
Content Max-Width: 1024px

Grid:
- Desktop: 4 columns
- Mobile: 2 columns
- Gap: 32px

Stat Item:
- Text align: center
- Number: 48px desktop, 32px mobile, font-bold
- Label: 16px desktop, 14px mobile
```

### 4. Features Section

```
Height: Auto
Background: #F9FAFB
Padding: 80px vertical
Content Max-Width: 1024px

Header:
- Max-width: 768px, centered
- Title: 36px desktop, 30px mobile
- Subtitle: 20px, margin-top: 24px

Layout:
- Spacing between rows: 48px
- Card grid gap: 32px desktop, 24px mobile

Feature Card:
- Background: White
- Padding: 32px
- Border-radius: 12px
- Shadow: lg
- Min-height: 320px

Icon Container:
- Size: 64x64px
- Border-radius: 12px
- Background: Linear gradient blue
- Margin-bottom: 24px

Card Text:
- Title: 20px, semibold, margin-bottom: 16px
- Description: 16px, line-height: 1.625
```

### 5. Services Section

```
Height: Auto
Background: White
Padding: 80px vertical
Content Max-Width: 1024px

Layout: 2 columns desktop, 1 column mobile
Gap: 48px

Service Item:
- Padding: 24px
- Border-radius: 12px
- Hover background: #F9FAFB

Icon:
- Size: 48x48px
- Background: Color-coded circles
- Border-radius: 8px

Text:
- Title: 18px, semibold
- Description: 16px, color: #4B5563
```

### 6. Projects Section

```
Height: Auto
Background: Linear gradient blue-50
Padding: 80px vertical
Content Max-Width: 1024px

Grid:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 32px

Project Card:
- Aspect ratio: 16:9
- Border-radius: 12px
- Overflow: hidden
- Shadow: lg

Image:
- Full width/height
- Object-fit: cover

Overlay:
- Background: rgba(0,0,0,0.4)
- Opacity: 0 default, 1 on hover
- Content: Title + "Ver detalles" button
```

### 7. Testimonials Section

```
Height: Auto
Background: #F9FAFB
Padding: 80px vertical
Content Max-Width: 1024px

Grid:
- Desktop: 3 columns
- Mobile: 1 column
- Gap: 32px

Testimonial Card:
- Background: White
- Padding: 32px
- Border-radius: 12px
- Shadow: lg
- Min-height: 280px

Rating:
- 5 stars, color: #F59E0B
- Size: 20x20px each
- Margin-bottom: 16px

Avatar:
- Size: 48x48px
- Border-radius: 50%
- Background: Color-coded
- Initials: 16px, bold, white
```

### 8. CTA Section

```
Height: Auto
Background: Linear gradient blue→purple
Padding: 80px vertical
Content Max-Width: 1024px
Text align: center

Background Effects:
- 3 animated circles (blur + pulse)
- Opacity: 10%

Content Max-Width: 768px

Title:
- Size: 48px desktop, 36px mobile
- Line-height: 1.25
- Margin-bottom: 24px

Subtitle:
- Size: 24px desktop, 20px mobile
- Margin-bottom: 32px

Buttons:
- Gap: 16px
- Margin-bottom: 48px

Trust Indicators:
- Grid: 4 columns desktop, 2 mobile
- Gap: 32px
- Opacity: 70%
```

### 9. Contact Section

```
Height: Auto
Background: White
Padding: 80px vertical
Content Max-Width: 1024px

Layout: 2 columns desktop, 1 column mobile
Gap: 48px

Contact Info:
- Width: 40% desktop
- Space-y: 32px

Form:
- Width: 60% desktop
- Background: White
- Padding: 32px
- Border-radius: 16px
- Shadow: xl

Form Fields:
- Input height: 48px
- Padding: 12px 16px
- Border-radius: 8px
- Gap between fields: 24px
```

### 10. Footer

```
Height: Auto
Background: Linear gradient dark
Color: #D1D5DB

Newsletter Section:
- Padding: 48px vertical
- Border-bottom: 1px #374151
- Content max-width: 768px

Main Footer:
- Padding: 64px vertical
- Grid: 4 columns desktop, 1 column mobile
- Gap: 48px

Footer Bottom:
- Padding: 32px vertical
- Border-top: 1px rgba(59, 130, 246, 0.3)
- Flex: space-between
```

## 🎨 Espaciado Consistente

### Vertical Rhythm

```
Section Padding: 80px
Card Padding: 32px
Element Margins: 16px, 24px, 32px, 48px
Text Line Heights: 1.25 (tight), 1.5 (normal), 1.625 (relaxed)
```

### Horizontal Spacing

```
Container Padding: 16px mobile, 24px tablet, 32px desktop
Grid Gaps: 16px, 24px, 32px, 48px
Button Padding: 16px vertical, 32px horizontal
```

## 📱 Responsive Behavior

### Typography Scale

```
Mobile Multiplier: 0.75x
Tablet Multiplier: 0.875x
Desktop: Base scale
```

### Grid Breakdowns

```
4 cols → 2 cols → 1 col (mobile)
3 cols → 2 cols → 1 col (mobile)
2 cols → 1 col (mobile)
```

### Image Scaling

```
Desktop: Full size
Tablet: 85% scale
Mobile: Full width, height adjusted
```

Esta guía te permitirá recrear exactamente las proporciones y espaciado del sitio web en Figma!
