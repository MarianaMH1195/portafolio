import React from 'react';

const skills = {
    web: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    data: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Excel"],
    tools: ["Git", "GitHub", "VS Code", "Terminal"]
};

const Skills: React.FC = () => {
    return (
        <section id="stack" className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
                    Stack Tecnológico
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Web Dev */}
                    <div className="bg-cosmic-night/40 p-6 rounded-xl border border-sea-foam/10">
                        <h3 className="text-xl font-bold text-sea-foam mb-6 text-center">Desarrollo Web</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.web.map((skill) => (
                                <span key={skill} className="px-3 py-2 bg-deep-ocean rounded-lg text-text-primary text-sm font-medium border border-transparent hover:border-sea-foam transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Data Analysis */}
                    <div className="bg-cosmic-night/40 p-6 rounded-xl border border-sea-foam/10">
                        <h3 className="text-xl font-bold text-star-pink mb-6 text-center">Análisis de Datos</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.data.map((skill) => (
                                <span key={skill} className="px-3 py-2 bg-nebula-violet rounded-lg text-text-primary text-sm font-medium border border-transparent hover:border-star-pink transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="bg-cosmic-night/40 p-6 rounded-xl border border-sea-foam/10">
                        <h3 className="text-xl font-bold text-sunset-gold mb-6 text-center">Herramientas</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.tools.map((skill) => (
                                <span key={skill} className="px-3 py-2 bg-coffee-brown rounded-lg text-text-primary text-sm font-medium border border-transparent hover:border-sunset-gold transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
