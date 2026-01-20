import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { MoveRight, Mail } from "lucide-react";
import FloatingElement from "../components/FloatingElement";
import { useRef } from "react";

const MagneticButton = ({ children }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href="mailto:joshuvk16@gmail.com"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-medium text-lg rounded-full overflow-hidden"
        >
            <span className="relative z-10 flex items-center gap-2">
                Send an Email <Mail size={18} />
            </span>
            <motion.div
                className="absolute inset-0 bg-blue-400 z-0 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.a>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="min-h-[60vh] flex flex-col justify-center px-6 relative overflow-hidden py-24">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none" />

            <div className="container-width relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-sm font-mono text-vscode-green uppercase tracking-widest mb-4">
                                // 07 Initialize Handshake
                            </h2>
                            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight tracking-tight">
                                Ready to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vscode-blue to-vscode-teal">Ignite?</span>
                            </h3>
                        </div>

                        <p className="text-secondary text-lg max-w-lg leading-relaxed">
                            Whether it's an AI breakthrough, a SaaS product, or a technical inquiry — I'm always open to discussing new frontiers.
                        </p>

                        <div className="pt-6">
                            <MagneticButton />
                            <p className="mt-6 text-sm font-mono text-secondary/60 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-vscode-green animate-pulse" />
                                VOICE_LINK_ACTIVE: <span className="text-primary hover:text-vscode-blue transition-colors cursor-pointer">+91 8657406860</span>
                            </p>
                        </div>
                    </div>

                    <div className="relative hidden md:flex justify-center">
                        <FloatingElement delay={1} duration={8} floatingAmplitude={15}>
                            <div className="relative z-10 p-8 border border-border bg-surfaceLight/80 backdrop-blur-md rounded-2xl w-full max-w-sm mx-auto flex flex-col justify-between gap-12 group hover:border-vscode-blue/50 transition-colors shadow-2xl">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-vscode-blue animate-pulse shadow-[0_0_10px_rgba(86,156,214,0.5)]" />
                                        <p className="font-mono text-xs text-vscode-blue tracking-wider">SYSTEM.STATUS</p>
                                    </div>
                                    <p className="font-mono text-2xl text-primary">ONLINE</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-vscode-gray/20 to-transparent" />
                                    <div className="grid grid-cols-2 gap-4 text-sm font-mono text-secondary">
                                        <div className="space-y-1">
                                            <span className="text-xs text-secondary/50">LOCATION</span>
                                            <p className="text-vscode-orange">"NAVI MUMBAI"</p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-xs text-secondary/50">TIMEZONE</span>
                                            <p className="text-vscode-orange">"IST (UTC+5:30)"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FloatingElement>

                        {/* Decorative background elements behind card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-vscode-blue/10 blur-[80px] pointer-events-none rounded-full" />
                    </div>
                </div>

                <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-mono text-secondary/40 h-full">© {new Date().getFullYear()} JOSHUA V K. ALL SYSTEMS OPERATIONAL.</p>

                    <div className="flex gap-8">
                        <a href="https://linkedin.com/in/joshuavinukoshy" className="text-xs font-mono text-secondary hover:text-white transition-colors flex items-center gap-2">
                            LINKEDIN <ArrowUpRightIcon />
                        </a>
                        <a href="https://github.com/Joshua16vinu" className="text-xs font-mono text-secondary hover:text-white transition-colors flex items-center gap-2">
                            GITHUB <ArrowUpRightIcon />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ArrowUpRightIcon = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
);

export default Contact;
