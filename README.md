# 🌌 Mariana Moreno - Portafolio

Portafolio web profesional construido con **React + TypeScript + Tailwind CSS**, con una estética "Cosmic Nebula" inmersiva y efectos 3D interactivos.

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-d946ef?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=for-the-badge&logo=three.js)

---

## ✨ Características

### 🎨 Diseño Visual
- **Temática**: "Cosmic Nebula" (Nebulosa Cósmica) - Tonos Deep Purple, Fuchsia y Midnight Blue.
- **Glassmorphism**: Efectos de cristal esmerilado con `backdrop-blur`.
- **Gradientes**: Transiciones suaves Fuchsia → Purple → Indigo.
- **Background 3D**: Experiencia inmersiva con estrellas, nebulosas volumétricas y partículas interactivas usando `@react-three/fiber`.

### 🧩 Componentes
| Componente | Descripción |
|------------|-------------|
| `Background3D` | Escena 3D con nebulosas generadas proceduralmente (Clouds), estrellas y profundidad. |
| `Navbar` | Barra de navegación flotante con glassmorphism y detalles en neón morado/rosa. |
| `Hero` | Sección de bienvenida con tipografía gigante y gradientes vibrantes. |
| `Projects` | Grid responsivo de proyectos con hover effects y badges temáticos. |
| `Skills` | Visualización de herramientas y lenguajes por categorías. |
| `Contact` | Links sociales estilizados con efectos de iluminación. |

### 🎭 Interacciones
- Navegación suave (smooth scroll).
- Animaciones de entrada y hover refinadas.
- Fondo 3D que responde sutilmente al renderizado (rotación majestuosa).
- Menú móvil totalmente adaptado al tema oscuro.

---

## 🚀 Comenzar

### Requisitos Previos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MarianaMH1195/portafolio.git

# Navegar al directorio
cd portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Compilar para Producción

```bash
npm run build
```

---

## 🎨 Paleta de Colores

| Propósito | Color | Código Hex |
|-----------|-------|------------|
| Fondo Base | Cosmic Night | `#0B0F1A` |
| Acento Principal | Fuchsia | `#d946ef` |
| Acento Secundario | Violet | `#7c3aed` |
| Nebulosa | Deep Purple | `#4c1d95` |
| Estrellas | Soft Pink | `#f0abfc` |

---

## 🛠️ Stack Tecnológico

- **Core**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **3D & Animación**: 
  - [Three.js](https://threejs.org/)
  - [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
  - [React Three Drei](https://github.com/pmndrs/drei)
- **Build**: [Vite](https://vitejs.dev/)

---

## 📁 Estructura del Proyecto

```
portafolio/
├── public/                    # Recursos estáticos
├── src/
│   ├── assets/                # Imágenes y media
│   ├── components/
│   │   ├── About.tsx          # Sección Sobre mí
│   │   ├── Background3D.tsx   # Escena 3D (Nebulosa/Estrellas)
│   │   ├── ButtonPrimary.tsx  # Botones reutilizables
│   │   ├── Contact.tsx        # Sección de contacto
│   │   ├── Hero.tsx           # Sección principal
│   │   ├── MobileMenu.tsx     # Navegación móvil
│   │   ├── Navbar.tsx         # Barra de navegación
│   │   ├── Projects.tsx       # Grid de proyectos
│   │   └── Skills.tsx         # Visualización de skills
│   ├── App.tsx                # Componente raíz
│   ├── index.css              # Estilos globales y Tailwind
│   └── main.tsx               # Punto de entrada
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🔮 Mejoras Futuras

- [ ] **Animaciones Scroll Reveal**: Efectos de aparición suave al hacer scroll.
- [ ] **Modo Interactivo**: Permitir al usuario controlar la rotación de la nebulosa con el mouse.
- [ ] **Blog Integrado**: Sección para compartir artículos técnicos.
- [ ] **Filtros Avanzados**: Filtrar proyectos por tecnología en tiempo real.
- [ ] **Internacionalización (i18n)**: Soporte para inglés/español.

---

## 👩‍💻 Autora

**Mariana Moreno Henao**

- 🐙 GitHub: [@MarianaMH1195](https://github.com/MarianaMH1195)
- 💼 LinkedIn: [mariana-moreno-henao](https://www.linkedin.com/in/mariana-moreno-henao/)

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

<p align="center">
  <i>Diseñado con Pasión & Nebulas ✨</i>
</p>
