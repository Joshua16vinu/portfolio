import { motion } from "framer-motion";
import FloatingElement from "../components/FloatingElement";

const About = () => {
    return (
        <section id="about" className="py-32 px-6 relative">
            {/* Decorative Floating Element */}
            <div className="absolute right-[10%] top-[20%] pointer-events-none opacity-20 hidden md:block">
                <FloatingElement duration={8} floatingAmplitude={30}>
                    <div className="w-64 h-64 border border-blue-500/30 rounded-full" />
                </FloatingElement>
            </div>

            <div className="absolute left-[5%] bottom-[10%] pointer-events-none opacity-20 hidden md:block">
                <FloatingElement duration={10} floatingAmplitude={20} delay={1}>
                    <div className="w-48 h-48 border border-purple-500/30 rounded-full border-dashed" />
                </FloatingElement>
            </div>

            <div className="container-width grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-mono text-secondary sticky top-24 uppercase tracking-widest">
                        01 // About
                    </h2>
                </div>

                <div className="md:col-span-8 space-y-8">
                    {/* <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white">
                        Hi, I’m <span className="text-white">Joshua Vinu Koshy</span>.
                    </h3> */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-lg text-secondary leading-relaxed max-w-3xl font-sans"
                    >
                        <p>
                            I’m a final-year <span className="text-vscode-teal font-medium">Computer Engineering student</span> at FCRIT, Mumbai, with a near-perfect CGPA and a passion for engineering high-performance systems.
                            My work lives at the intersection of <span className="text-vscode-blue font-medium">FinTech</span> and <span className="text-vscode-purple font-medium">Agentic AI</span>.
                        </p>
                        <p>
                            Currently, as a Project Intern at <span className="text-vscode-orange font-medium">InfinityPool Finnotech</span>, I architect multi-agent AI workflows and quantitative trading engines.
                            I've also led the end-to-end revamp of my university's digital infrastructure, serving thousands of users.
                        </p>
                        <p>
                            Beyond coding, I head the AI & Deep Learning Club at my college and speak at workshops to mentor the next generation of developers.
                            I'm always looking for ways to turn complex problems into scalable, production-ready solutions.
                        </p>
                    </motion.div>

                    {/* <div className="pt-8">
                        <a href="#contact" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-50 transition-opacity">
                            Available for opportunities
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;
