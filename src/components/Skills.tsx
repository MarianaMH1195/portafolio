import React from 'react';

const skills = {
    web: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    data: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Excel"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Trello", "Slack"]
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
                        <h3 className="text-xl font-bold text-fuchsia-300 mb-6 text-center">Desarrollo Web</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.web.map((skill) => (
                                <span key={skill} className="px-3 py-2 bg-purple-900/40 rounded-lg text-purple-100 text-sm font-medium border border-transparent hover:border-fuchsia-400 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Data Analysis */}
                    <div className="bg-cosmic-night/40 p-6 rounded-xl border border-fuchsia-500/10">
                        <h3 className="text-xl font-bold text-fuchsia-400 mb-6 text-center">Análisis de Datos</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.data.map((skill) => (
                                <span key={skill} className="px-3 py-2 bg-indigo-900/40 rounded-lg text-indigo-100 text-sm font-medium border border-transparent hover:border-fuchsia-400 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="bg-cosmic-night/40 p-6 rounded-xl border border-fuchsia-500/10">
                        <h3 className="text-xl font-bold text-pink-400 mb-6 text-center">Herramientas</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.tools.map((skill) => (
                                <span key={skill} className="px-3 py-2 bg-fuchsia-900/30 rounded-lg text-pink-100 text-sm font-medium border border-transparent hover:border-pink-400 transition-colors">
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
