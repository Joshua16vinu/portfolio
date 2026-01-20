import { motion } from "framer-motion";
import FloatingElement from "../components/FloatingElement";

const skillCategories = [
    { name: "Programming Languages", skills: ["Python", "C++", "Java", "JavaScript", "SQL", "HTML/CSS"] },
    { name: "AI/ML Frameworks", skills: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "OpenCV", "Hugging Face", "NLTK", "SpaCy"] },
    { name: "Full Stack Development", skills: ["React", "Node.js", "Express.js", "Flask", "MongoDB", "PostgreSQL", "MySQL", "RESTful APIs"] },
    { name: "Tools & Platforms", skills: ["Git/GitHub", "Docker", "AWS", "Google Cloud", "Azure", "CI/CD", "Jupyter"] }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="container-width grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-mono text-secondary sticky top-24 uppercase tracking-widest">
                        04 // Tech Stack
                    </h2>
                </div>

                <div className="md:col-span-8 space-y-16">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-6">
                            <h3 className="text-vscode-blue font-mono font-medium text-lg border-l-2 border-vscode-blue/30 pl-4">
                                <span className="text-vscode-purple">class</span> {category.name.replace(/\s+/g, '')}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, index) => {
                                    // Cycle through VS Code accent colors
                                    const colors = [
                                        'text-vscode-teal border-vscode-teal/20 hover:bg-vscode-teal/10 hover:border-vscode-teal/50 hover:shadow-vscode-teal/20',
                                        'text-vscode-orange border-vscode-orange/20 hover:bg-vscode-orange/10 hover:border-vscode-orange/50 hover:shadow-vscode-orange/20',
                                        'text-vscode-yellow border-vscode-yellow/20 hover:bg-vscode-yellow/10 hover:border-vscode-yellow/50 hover:shadow-vscode-yellow/20',
                                        'text-vscode-blue border-vscode-blue/20 hover:bg-vscode-blue/10 hover:border-vscode-blue/50 hover:shadow-vscode-blue/20',
                                    ];
                                    const colorClass = colors[(index + catIndex) % colors.length];

                                    return (
                                        <FloatingElement
                                            key={index}
                                            delay={index * 0.2}
                                            duration={3 + Math.random() * 2}
                                            floatingAmplitude={5}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                                                viewport={{ once: true }}
                                                className={`px-5 py-2.5 bg-surfaceLight border rounded-full text-sm backdrop-blur-sm cursor-default transition-all shadow-lg ${colorClass}`}
                                            >
                                                <span className="opacity-70 font-mono">"</span>{skill}<span className="opacity-70 font-mono">"</span>
                                            </motion.div>
                                        </FloatingElement>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
