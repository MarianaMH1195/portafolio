

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: Array<{ label: string; id: string }>;
    scrollToSection: (id: string) => void;
}

const MobileMenu = ({
    isOpen,
    onClose,
    navLinks,
    scrollToSection,
}: MobileMenuProps) => {
    return (
        <>
            {/* Overlay oscuro */}
            <div
                className={`
          fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
                onClick={onClose}
            />

            {/* Menú deslizable */}
            <div
                className={`
          fixed top-0 right-0 h-full w-64 z-50
          bg-slate-900/95 backdrop-blur-md
          border-l border-white/10
          shadow-2xl shadow-cyan-500/20
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                {/* Header del menú */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Menu
                    </span>

                    <button
                        onClick={onClose}
                        className="
              p-2 rounded-lg
              bg-white/10 hover:bg-white/20
              border border-white/20 hover:border-cyan-400/50
              transition-all duration-300
            "
                        aria-label="Close menu"
                    >
                        <svg
                            className="w-5 h-5 text-cyan-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Links del menú */}
                <nav className="p-6 space-y-4">
                    {navLinks.map((link, index) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="
                w-full text-left px-4 py-3
                text-cyan-300/90 font-medium text-lg
                hover:text-cyan-400
                bg-white/0 hover:bg-white/10
                border border-white/0 hover:border-cyan-400/50
                rounded-xl
                transition-all duration-300
                group
              "
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <span className="flex items-center justify-between">
                                {link.label}

                                <svg
                                    className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </button>
                    ))}
                </nav>

                {/* Footer del menú */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                    <p className="text-slate-400 text-sm text-center">
                        Mariana Moreno © 2025
                    </p>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
