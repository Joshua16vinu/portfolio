import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, FileText, Mail, MapPin } from "lucide-react";

// const capabilities = [
//     {
//         title: "AUTONOMOUS SYSTEMS",
//         description: "Multi-agent coordination, perception, and decision models for intelligent systems."
//     },
//     {
//         title: "AGENTIC WORKFLOWS",
//         description: "Cooperative LLM agent reasoning, factor weighting, and long-term memory streams."
//     },
//     {
//         title: "QUANTITATIVE ENGINES",
//         description: "Event-driven Backtrader architectures with chunked OHLCV database streaming."
//     },
//     {
//         title: "LOCAL LLM & OFFLINE RAG",
//         description: "Zero-API compliance pipelines deployed with quantized local models via Ollama."
//     }
// ];

const Hero = () => {
    return (
        <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 max-w-6xl mx-auto w-full">

            {/* Top 3-Column Layout: Left Intro, Center Arch Photo, Right Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center pb-16 sm:pb-20 border-b border-[#dedbd2]">

                {/* Left Column: Heading & Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-5 order-2 lg:order-1 space-y-6 text-center lg:text-left"
                >
                    <div className="space-y-1">
                        <span className="text-sm font-sans text-stone-500 font-medium tracking-wide">
                            Hey. I'm Joshua,
                        </span>
                        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-stone-950 font-sans leading-[1.05]">
                            AI/ML & <br />
                            <span className="font-serif italic font-normal lowercase tracking-normal text-stone-800 text-4xl sm:text-5xl xl:text-[3.5rem] block -my-1">
                                autonomous systems
                            </span>
                            RESEARCHER
                        </h1>
                    </div>

                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-md mx-auto lg:mx-0">
                        Master's student at the University of Stuttgart specializing in Autonomous Systems, with a background in Computer Engineering.
                    </p>

                    {/* Action Pill Buttons (Matching reference image: Black pill + Outline pill) */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono uppercase tracking-wider transition-all shadow-subtle group cursor-pointer"
                        >
                            <span>Contact Me</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-300 hover:border-stone-900 bg-white/70 hover:bg-white text-stone-900 text-xs font-mono uppercase tracking-wider transition-all shadow-subtle"
                        >
                            <FileText size={14} />
                            <span>Resume</span>
                            <ArrowUpRight size={13} />
                        </a>

                        <a
                            href="https://beyondthemodelbyjoshua.substack.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-300 hover:border-stone-900 bg-white/70 hover:bg-white text-stone-900 text-xs font-mono uppercase tracking-wider transition-all shadow-subtle"
                        >
                            <span>Substack</span>
                            <ArrowUpRight size={13} />
                        </a>
                    </div>
                </motion.div>

                {/* Center Column: The Signature Arch Photo Frame (Matching reference image) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:col-span-4 order-1 lg:order-2 flex justify-center"
                >
                    <div className="relative w-64 sm:w-72 md:w-80">
                        {/* Arch container: rounded top, clean bottom */}
                        <div className="relative w-full aspect-[3/4.2] rounded-t-full rounded-b-3xl overflow-hidden bg-[#e6e3db] border-2 border-[#d9d5cb] shadow-arch p-1.5">
                            <div className="w-full h-full rounded-t-full rounded-b-[1.25rem] overflow-hidden bg-stone-200">
                                <img
                                    src="/profile.jpg"
                                    alt="Joshua Vinu Koshy"
                                    className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700 ease-out"
                                />
                            </div>
                        </div>

                        {/* Minimalist location badge */}
                        <div className="mt-3 text-center">
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                                Stuttgart, Germany · Uni Stuttgart
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Stacked Editorial Metrics (Matching reference image) */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-3 order-3 flex flex-row lg:flex-col justify-around lg:justify-center gap-6 lg:gap-7 text-center lg:text-right border-t lg:border-t-0 pt-6 lg:pt-0 border-[#dedbd2]"
                >
                    <div className="space-y-0.5">
                        <div className="text-3xl sm:text-4xl font-extrabold text-stone-950 font-sans tracking-tight">
                            #1
                        </div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                            Rank in Cohort
                        </div>
                    </div>

                    <div className="space-y-0.5">
                        <div className="text-3xl sm:text-4xl font-extrabold text-stone-950 font-sans tracking-tight">
                            9.77
                        </div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                            Graduating CGPA
                        </div>
                    </div>

                    <div className="space-y-0.5">
                        <div className="text-3xl sm:text-4xl font-extrabold text-stone-950 font-sans tracking-tight">
                            3+
                        </div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                            Research Papers
                        </div>
                    </div>

                    <div className="space-y-0.5">
                        <div className="text-3xl sm:text-4xl font-extrabold text-stone-950 font-sans tracking-tight">
                            Oct '26
                        </div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                            MSc Autonomous Systems
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Bottom 4-Column Minimal Capabilities Bar (Matching reference image) */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 sm:pt-14">
                {capabilities.map((cap, idx) => (
                    <div key={idx} className="space-y-1.5 text-center sm:text-left">
                        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-950">
                            {cap.title}
                        </h2>
                        <p className="text-xs text-stone-600 leading-relaxed font-normal">
                            {cap.description}
                        </p>
                    </div>
                ))}
            </div> */}

        </section>
    );
};

export default Hero;