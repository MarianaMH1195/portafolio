import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Detectar scroll para reducir navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navegación suave a secciones
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    // Links de navegación
    const navLinks = [
        { label: 'Proyectos', id: 'projects' },
        { label: 'Contacto', id: 'contact' },
    ];

    return (
        <>
            {/* Navbar principal */}
            <nav
                className={`
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          transition-all duration-300 ease-in-out
          ${isScrolled ? 'top-4 scale-95' : 'top-6 scale-100'}
        `}
            >
                <div
                    className={`
            flex items-center justify-between
            bg-white/5 backdrop-blur-md
            border border-white/10
            shadow-lg shadow-cyan-500/20
            transition-all duration-300
            ${isScrolled ? 'px-6 py-3 rounded-full' : 'px-8 py-4 rounded-2xl'}
          `}
                >
                    {/* Logo "M" con gradiente y glow */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="group relative"
                        aria-label="Ir al inicio"
                    >
                        <div className="relative">
                            <span
                                className="
                  text-3xl font-bold
                  bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
                  bg-clip-text text-transparent
                  group-hover:scale-110
                  transition-transform duration-300
                  inline-block
                "
                            >
                                M
                            </span>

                            {/* Glow effect en hover */}
                            <div
                                className="
                  absolute inset-0 -z-10
                  bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
                  opacity-0 group-hover:opacity-50
                  blur-xl
                  transition-opacity duration-300
                "
                            />
                        </div>
                    </button>

                    {/* Links de navegación (desktop) */}
                    <div className="hidden md:flex items-center gap-8 ml-12">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="
                  relative
                  text-cyan-300/90 font-medium
                  hover:text-cyan-400
                  hover:scale-105
                  transition-all duration-300
                  group
                "
                            >
                                {link.label}

                                {/* Underline animado */}
                                <span
                                    className="
                    absolute -bottom-1 left-0 w-0
                    h-0.5 bg-cyan-400
                    group-hover:w-full
                    transition-all duration-300
                  "
                                />

                                {/* Glow sutil en hover */}
                                <span
                                    className="
                    absolute inset-0 -z-10
                    bg-cyan-400/20
                    opacity-0 group-hover:opacity-100
                    blur-lg
                    transition-opacity duration-300
                  "
                                />
                            </button>
                        ))}
                    </div>

                    {/* Botón hamburguesa (móvil) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="
              md:hidden
              ml-8 p-2
              bg-white/10 backdrop-blur-md
              border border-white/20
              rounded-lg
              hover:bg-white/20 hover:border-cyan-400/50
              transition-all duration-300
              group
            "
                        aria-label="Toggle menu"
                    >
                        {/* Icono hamburguesa animado */}
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`
                  block h-0.5 w-full bg-cyan-400
                  transition-all duration-300
                  ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0'}
                `}
                            />
                            <span
                                className={`
                  block h-0.5 w-full bg-cyan-400
                  transition-all duration-300
                  ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}
                `}
                            />
                            <span
                                className={`
                  block h-0.5 w-full bg-cyan-400
                  transition-all duration-300
                  ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'}
                `}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Menú móvil */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={navLinks}
                scrollToSection={scrollToSection}
            />
        </>
    );
};

export default Navbar;
