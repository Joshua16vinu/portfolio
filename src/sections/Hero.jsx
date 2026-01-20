import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import FloatingElement from "../components/FloatingElement";
import { Code, Database, Globe, Github, Linkedin, FileText } from "lucide-react";

const MagneticSocialButton = ({ href, children, ariaLabel, className }) => {
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
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`group relative border border-white/20 text-white overflow-hidden flex items-center justify-center ${className || 'p-4 rounded-full'}`}
        >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                {children}
            </span>
            <motion.div
                className="absolute inset-0 bg-white z-0 origin-center scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"
            />
        </motion.a>
    );
};

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Typewriter State
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const toRotate = ["Joshua V K", "Tech Enthusiast"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            // Dynamic speed adjustments
            let delta = isDeleting ? 50 : 150;

            if (!isDeleting && text === fullText) {
                // Finished typing, pause
                delta = 2000;
                setIsDeleting(true);
            } else if (isDeleting && text === '') {
                // Finished deleting, moving to next word
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                delta = 500;
            }

            setTypingSpeed(delta);
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 relative overflow-visible py-20">
            <div className="container-width grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 md:order-1 space-y-8 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surfaceLight/50 backdrop-blur-sm text-xs font-mono text-secondary">
                        <span className="w-2 h-2 rounded-full bg-vscode-green animate-pulse" />
                        SYSTEM_ONLINE
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-primary min-h-[1.2em]">
                            {text}<span className="animate-pulse ml-1 text-vscode-blue">|</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-secondary/80 font-light">
                            Full Stack Developer & <span className="text-vscode-blue font-normal">AI/ML Enthusiast</span>
                        </h2>
                    </div>

                    <p className="text-base text-secondary max-w-lg leading-relaxed">
                        Project Intern @Infinity Pool Finnotech | CSE @FCRIT 2026
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <MagneticSocialButton href="/resume.pdf" ariaLabel="Resume" className="px-6 py-3 rounded-full">
                            <FileText size={20} />
                            <span className="font-medium">Resume</span>
                        </MagneticSocialButton>
                        <MagneticSocialButton href="https://linkedin.com/in/joshuavinukoshy" ariaLabel="LinkedIn">
                            <Linkedin size={24} />
                        </MagneticSocialButton>
                        <MagneticSocialButton href="https://github.com/Joshua16vinu" ariaLabel="GitHub">
                            <Github size={24} />
                        </MagneticSocialButton>
                    </div>
                </motion.div>

                {/* Dynamic Image Container */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
                    {/* Background Decorative Elements */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-white/5 rounded-full border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] border border-white/5 rounded-full"
                        />
                    </div>

                    {/* Floating Image Wrapper */}
                    <FloatingElement delay={0} floatingAmplitude={20} duration={4}>
                        <div className="relative z-10 group cursor-pointer">
                            {/* Stylish Frame */}
                            <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl md:rounded-[2rem] opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                            <div className="relative w-56 h-56 md:w-80 md:h-[400px] overflow-hidden rounded-xl md:rounded-[1.5rem] border border-border bg-surface shadow-2xl">
                                <img
                                    src="/profile.jpg"
                                    alt="Joshua Vinu Koshy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                                {/* Tech overlays on image */}
                                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/50 space-y-1">
                                    <p>STATUS: ACTIVE</p>
                                    <p>LOC: 19.0330° N, 73.0297° E</p>
                                </div>
                            </div>

                            {/* Floating Tech Icons */}
                            <FloatingElement delay={1} floatingAmplitude={10} duration={3} className="absolute -left-8 top-12 p-3 bg-surfaceLight border border-border rounded-lg shadow-xl text-vscode-blue">
                                <Code size={20} />
                            </FloatingElement>
                            <FloatingElement delay={2} floatingAmplitude={12} duration={4} className="absolute -right-6 bottom-20 p-3 bg-surfaceLight border border-border rounded-lg shadow-xl text-vscode-purple">
                                <Database size={20} />
                            </FloatingElement>
                            <FloatingElement delay={1.5} floatingAmplitude={8} duration={5} className="absolute right-8 -top-6 p-3 bg-surfaceLight border border-border rounded-lg shadow-xl text-vscode-green">
                                <Globe size={20} />
                            </FloatingElement>
                        </div>
                    </FloatingElement>
                </div>
            </div>

            {/* <motion.div style={{ y }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"> */}
            {/* <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" /> */}
            {/* <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span> */}
            {/* </motion.div> */}
        </section>
    );
};

export default Hero;
