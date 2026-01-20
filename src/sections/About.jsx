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
                            I’m a final-year <span className="text-vscode-teal font-medium">Computer Engineering student</span> who thrives at the intersection of academic excellence and real-world innovation.
                            From leading technical clubs to mentoring peers and placing as a finalist in multiple hackathons, I’ve always believed in learning by doing.
                        </p>
                        <p>
                            Currently, I design and build <span className="text-vscode-blue font-medium">AI-powered solutions</span> and <span className="text-vscode-blue font-medium">full-stack web applications</span>,
                            with a growing focus on <span className="text-vscode-purple font-medium">agentic AI workflows</span> and end-to-end SaaS products.
                        </p>
                        <p>
                            Passionate about community, collaboration, and innovation, I love turning ideas into impactful solutions.
                            So if you’re into <span className="text-vscode-orange font-mono">"AI"</span>, <span className="text-vscode-orange font-mono">"coding"</span>, or just exploring what’s possible with tech, let’s start a conversation!
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
