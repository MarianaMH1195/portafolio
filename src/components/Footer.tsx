import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-fuchsia-500/10 bg-cosmic-night/80 backdrop-blur-md mt-20">
            {/* Gradient Line Top */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col items-center justify-center space-y-6">
                    {/* Copyright & Tagline - Solo esto queda */}
                    <div className="text-center space-y-2">
                        <p className="text-slate-400 text-sm">
                            © {currentYear} Mariana Moreno Henao. Todos los derechos reservados.
                        </p>
                        <p className="text-slate-500 text-xs flex items-center justify-center gap-1">
                            Diseñado con <span className="text-fuchsia-400">❤</span> y Dualidad & Código.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
