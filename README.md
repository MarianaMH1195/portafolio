# 🌌 Mariana Moreno - Portafolio

Portafolio web profesional construido con **React + TypeScript + Tailwind CSS**, con una estética espacial-oceánica oscura y efectos de glassmorphism.

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-cyan?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)

---

## ✨ Características

### 🎨 Diseño Visual
- **Temática**: Dark + Cute + Space + Sea (dualidad espacio-océano)
- **Glassmorphism**: Efectos de cristal esmerilado con `backdrop-blur`
- **Gradientes**: Transiciones de color Cyan → Blue → Purple
- **Efectos Glow**: Brillos sutiles en estados hover
- **Fondo Espacio-Océano**: Imagen cósmica-oceánica inmersiva

### 🧩 Componentes

| Componente | Descripción |
|------------|-------------|
| `Navbar` | Barra de navegación flotante con glassmorphism, logo "M" con gradiente, tamaño responsivo al scroll |
| `MobileMenu` | Menú móvil deslizable con overlay y enlaces animados |
| `Hero` | Sección hero de pantalla completa con nombre en gradiente, tagline y botones CTA |
| `Projects` | Grid responsivo de tarjetas de proyectos con estilo glassmorphism |
| `Skills` | Sección de habilidades con representación visual |
| `About` | Sección sobre mí |
| `Contact` | Sección de contacto con enlaces sociales |
| `ButtonPrimary` | Botón con gradiente y efecto glow |
| `ButtonSecondary` | Botón glassmorphism con hover sutil |

### 🎭 Interacciones
- Navegación suave (smooth scroll) entre secciones
- Navbar se reduce al hacer scroll (`scale-95`)
- Menú hamburguesa animado (se transforma en X)
- Efectos hover con transiciones de 300ms
- Animaciones de subrayado en enlaces de navegación

---

## 🚀 Comenzar

### Requisitos Previos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MarianaMH1195/portafolio.git

# Navegar al directorio del proyecto
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

## 📁 Estructura del Proyecto

```
portafolio/
├── public/                    # Recursos estáticos
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── fondo.png      # Fondo espacio-océano
│   ├── components/
│   │   ├── About.tsx
│   │   ├── ButtonPrimary.tsx
│   │   ├── ButtonSecondary.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Paleta de Colores

| Propósito | Color | Clase Tailwind |
|-----------|-------|----------------|
| Fondo | Slate Oscuro | `bg-slate-950` |
| Sección Alt | Slate | `bg-slate-900` |
| Glassmorphism | Blanco 5% | `bg-white/5` |
| Acento Primario | Cyan | `text-cyan-400` |
| Acento Secundario | Azul | `text-blue-600` |
| Acento Terciario | Púrpura | `text-purple-400` |
| Texto Primario | Blanco | `text-white` |
| Texto Secundario | Slate 200 | `text-slate-200` |
| Texto Atenuado | Slate 400 | `text-slate-400` |

### Colores Personalizados (tailwind.config.cjs)
- `cosmic-night`: #0B0F1A
- `nebula-violet`: #3B1E4F
- `deep-ocean`: #0E3A4A
- `sea-foam`: #7FCAC3
- `star-pink`: #E6A6C9
- `sunset-gold`: #F2B705
- `coral-glow`: #FF7A5C

---

## 🛠️ Stack Tecnológico

- **Framework**: [React 18](https://react.dev/)
- **Lenguaje**: [TypeScript 5](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Herramienta de Build**: [Vite](https://vitejs.dev/)
- **Linting**: ESLint

---

## 📱 Diseño Responsivo

- **Móvil**: Layout de una columna, menú hamburguesa
- **Tablet**: Grid de proyectos de 2 columnas
- **Desktop**: Grid de proyectos de 3 columnas, navbar completa

---

## 🔮 Mejoras Futuras

- [ ] Animaciones de scroll reveal
- [ ] Efectos parallax en hero
- [ ] Efecto de cursor con glow
- [ ] Partículas flotantes
- [ ] Sección de blog
- [ ] Filtros de proyectos
- [ ] Toggle modo oscuro/claro
- [ ] Integración con CMS

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
  <i>Diseñado con Dualidad & Código ✨</i>
</p>
