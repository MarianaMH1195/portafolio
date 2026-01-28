import React, { useState, useEffect } from 'react';

interface GithubProfile {
    name: string;
    bio: string;
    avatar_url: string;
    location: string;
    html_url: string;
    public_repos: number;
    followers: number;
}

const About: React.FC = () => {
    const [profile, setProfile] = useState<GithubProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('https://api.github.com/users/MarianaMH1195');
                if (response.ok) {
                    const data = await response.json();
                    setProfile(data);
                }
            } catch (error) {
                console.error("Error fetching GitHub profile:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    return (
        <section id="sobre-mi" className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto bg-cosmic-night/50 p-8 rounded-2xl border border-sea-foam/10 backdrop-blur-sm">

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Columna Izquierda: Foto y Stats */}
                    <div className="flex-shrink-0 flex flex-col items-center space-y-4">
                        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-fuchsia-500/20 shadow-2xl shadow-fuchsia-500/10 group">
                            {loading ? (
                                <div className="w-full h-full bg-slate-800 animate-pulse" />
                            ) : (
                                <img
                                    src={profile?.avatar_url || "https://github.com/MarianaMH1195.png"}
                                    alt="Profile"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            )}
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
                        </div>

                        {!loading && profile && (
                            <div className="flex gap-4 text-sm text-slate-400">
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {profile.location || 'Remote'}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Columna Derecha: Contenido */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-text-primary mb-2 flex items-center justify-center md:justify-start gap-3">
                            Sobre Mí
                        </h2>

                        {!loading && profile && (
                            <h3 className="text-xl text-fuchsia-300 mb-6 font-medium">
                                {profile.bio}
                            </h3>
                        )}

                        <div className="text-text-secondary space-y-4 text-lg leading-relaxed">
                            <p>
                                No llegué al mundo tech siguiendo una línea recta, y eso es parte de lo que me define. Hoy soy <strong className="text-fuchsia-300">desarrolladora web full stack</strong> y <strong className="text-fuchsia-300">analista de datos</strong> en formación constante, enfocada en crear experiencias digitales claras, funcionales y con sentido.
                            </p>
                            <p>
                                He aprendido en contextos muy distintos —algunos técnicos, otros profundamente humanos— y cada uno me dejó habilidades que hoy aplico al desarrollo: adaptabilidad, comunicación y una forma analítica de enfrentar problemas. Combino esa mirada versátil con curiosidad, criterio y ganas de seguir creciendo dentro del mundo tecnológico.
                            </p>
                        </div>

                        {/* Links / Stats adicionales */}
                        {!loading && profile && (
                            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                                <a
                                    href={profile.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-fuchsia-300 transition-colors border border-fuchsia-500/20 flex items-center gap-2"
                                >
                                    <span>GitHub Followers</span>
                                    <span className="bg-fuchsia-500/20 px-2 py-0.5 rounded text-white font-mono">{profile.followers}</span>
                                </a>
                                <div className="px-4 py-2 bg-white/5 rounded-lg text-sm text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
                                    <span>Repositorios</span>
                                    <span className="bg-cyan-500/20 px-2 py-0.5 rounded text-white font-mono">{profile.public_repos}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
