# 🌌 Mariana Moreno - Portfolio

A professional portfolio website built with **React + TypeScript + Tailwind CSS**, featuring a dark space-ocean aesthetic with glassmorphism effects.

![Portfolio Preview](https://img.shields.io/badge/Status-In%20Development-cyan?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)

---

## ✨ Features

### 🎨 Visual Design
- **Theme**: Dark + Cute + Space + Sea duality
- **Glassmorphism**: Frosted glass effects with `backdrop-blur`
- **Gradients**: Cyan → Blue → Purple color transitions
- **Glow Effects**: Subtle glows on hover states
- **Space-Ocean Background**: Immersive cosmic-oceanic imagery

### 🧩 Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Floating glassmorphism navbar with gradient "M" logo, scroll-responsive sizing |
| `MobileMenu` | Slide-in mobile menu with overlay and animated links |
| `Hero` | Full-screen hero with gradient name, tagline, and CTA buttons |
| `Projects` | Responsive grid of project cards with glassmorphism styling |
| `Skills` | Skills section with visual representation |
| `About` | About me section |
| `Contact` | Contact section with social links |
| `ButtonPrimary` | Gradient button with glow effect |
| `ButtonSecondary` | Glassmorphism button with subtle hover |

### 🎭 Interactions
- Smooth scroll navigation between sections
- Navbar shrinks on scroll (`scale-95`)
- Animated hamburger menu (transforms to X)
- Hover effects with 300ms transitions
- Underline animations on nav links

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MarianaMH1195/portafolio.git

# Navigate to project directory
cd portafolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
portafolio/
├── public/                    # Static assets
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── fondo.png      # Space-ocean background
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

## 🎨 Color Palette

| Purpose | Color | Tailwind Class |
|---------|-------|----------------|
| Background | Dark Slate | `bg-slate-950` |
| Section Alt | Slate | `bg-slate-900` |
| Glass | White 5% | `bg-white/5` |
| Primary Accent | Cyan | `text-cyan-400` |
| Secondary Accent | Blue | `text-blue-600` |
| Tertiary Accent | Purple | `text-purple-400` |
| Text Primary | White | `text-white` |
| Text Secondary | Slate 200 | `text-slate-200` |
| Text Muted | Slate 400 | `text-slate-400` |

### Custom Colors (tailwind.config.cjs)
- `cosmic-night`: #0B0F1A
- `nebula-violet`: #3B1E4F
- `deep-ocean`: #0E3A4A
- `sea-foam`: #7FCAC3
- `star-pink`: #E6A6C9
- `sunset-gold`: #F2B705
- `coral-glow`: #FF7A5C

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting**: ESLint

---

## 📱 Responsive Design

- **Mobile**: Single column layout, hamburger menu
- **Tablet**: 2-column project grid
- **Desktop**: 3-column project grid, full navbar

---

## 🔮 Future Enhancements

- [ ] Scroll reveal animations
- [ ] Parallax effects on hero
- [ ] Cursor glow effect
- [ ] Floating particles
- [ ] Blog section
- [ ] Project filters
- [ ] Dark/Light mode toggle
- [ ] CMS integration

---

## 👩‍💻 Author

**Mariana Moreno Henao**

- 🐙 GitHub: [@MarianaMH1195](https://github.com/MarianaMH1195)
- 💼 LinkedIn: [mariana-moreno-henao](https://www.linkedin.com/in/mariana-moreno-henao/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <i>Designed with Duality & Code ✨</i>
</p>
