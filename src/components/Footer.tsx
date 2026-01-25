import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-fuchsia-500/10 bg-cosmic-night/80 backdrop-blur-md mt-20">
            {/* Gradient Line Top */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col items-center justify-center space-y-6">

                    {/* Brand / Logo */}
                    <div className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Mariana Moreno
                    </div>

                    {/* Social Links (Inline SVGs) */}
                    <div className="flex items-center space-x-6">
                        <a
                            href="https://github.com/MarianaMH1195"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-fuchsia-400 transition-all duration-300 group"
                            aria-label="GitHub"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-fuchsia-400 transition-colors">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mariana-moreno-henao/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-fuchsia-400 transition-all duration-300 group"
                            aria-label="LinkedIn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-fuchsia-400 transition-colors">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>

                    {/* Copyright & Tagline */}
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
