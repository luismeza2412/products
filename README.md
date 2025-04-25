# 📘 README – Prueba Técnica Frontend Senior

### 🧩 Descripción

Landing page para catálogo de productos financieros simulados. El objetivo es presentar productos con sus atributos clave, permitir filtrado por categoría y mostrar detalle visual profesional con enfoque en accesibilidad y buenas prácticas.

---

## 🚀 Tecnologías utilizadas

- **Next.js (App Router)**
- **TypeScript** con tipado estricto
- **TailwindCSS** (estructura y layout base)
- **Styled Components** (componentes visuales reusables)
- **Recharts** (para gráficas simples)

---

## 📦 Instalación y ejecución local

```bash
git clone https://github.com/luismeza2412/products.git
cd landing-app
npm install
npm run dev
```

La app estará disponible en `http://localhost:3000`

---

## ☁️ Deploy

Deploy listo en [Vercel]()

Para desplegar:

1. Se sube el repositorio a GitHub
2. Se conectó a Vercel (https://vercel.com/import)
3. Deploy automático con configuración por defecto (Next.js)

---

## 🔍 Funcionalidades principales

- Home (`/`) con listado de productos
- Filtro por categoría tipo tabs
- Navegación a página de detalle `/product/[id]`
- Visualización de datos clave con gráfico (interés y riesgo)
- Diseño Mobile First
- Interfaz profesional, confiable y accesible

---

## 🧱 Estructura del proyecto

El proyecto fue construido con una estructura modular escalable, aprovechando el sistema de **App Router de Next.js**, y siguiendo principios de separación de responsabilidades.

```
products-catalog/
├── app/                      # App Router de Next.js (páginas principales)
│   ├── page.tsx             # Página principal (catálogo)
│   └── product/[id]/        # Página de detalle por ID
│       └── page.tsx
├── components/              # Componentes reutilizables y visuales
│   ├── ProductCard.tsx
│   ├── ProductCard.styles.ts
│   ├── Navbar.tsx
│   ├── Navbar.styles.ts
│   ├── Slider.tsx
│   └── Slider.styles.ts
├── data/                    # Mock de productos (fuente de datos local)
│   └── products.ts
├── types/                   # Tipado de datos global
│   └── product.ts
├── styles/                  # Estilos globales (opcional)
│   └── globals.css
├── public/                  # Recursos estáticos (imágenes, íconos)
├── .gitignore
├── README.md
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## 🧠 Decisiones técnicas

### 1. ¿Qué criterios seguiste para diseñar la UI?
- Inspiración en plataformas fintech modernas
- Paleta de colores confiable: azul, blanco, gris
- Tipografía clara, layout limpio y accesibilidad desde el diseño

### 2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?
- **Tailwind**: para layout y clases utilitarias globales
- **Styled Components**: para encapsular componentes reusables y mantener consistencia visual

### 3. ¿Qué harías para escalar este proyecto en una aplicación real?
- Integración con backend real vía API o GraphQL
- Manejo de estado con Zustand o Redux
- Autenticación, permisos y dashboards personalizados

