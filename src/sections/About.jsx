import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Briefcase } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[#dedbd2]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* Left Column: Bold Headline & Editorial Label */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                            01 // Academic & Engineering Profile
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-sans leading-[1.08]">
                            Engineering Autonomy & <br />
                            <span className="font-serif italic font-normal lowercase tracking-normal text-stone-800 text-3xl sm:text-4xl lg:text-[2.75rem]">
                                computational rigor
                            </span>
                        </h2>

                        <div className="pt-4 border-t border-[#dedbd2] space-y-2 text-xs font-mono text-stone-600">
                            <div className="flex items-center gap-2">
                                <MapPin size={13} className="text-stone-900" />
                                <span>Based in Stuttgart, Baden-Württemberg, Germany</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Briefcase size={13} className="text-emerald-700" />
                                <span>Eligible for 20h/week Werkstudent / HiWi employment</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Editorial Paragraphs */}
                    <div className="lg:col-span-7 space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
                        <p>
                            I am an incoming <strong className="text-stone-950 font-semibold">Master of Science in Computer Science student at the University of Stuttgart</strong> (Winter Intake, Autonomous Systems track), having graduated <strong className="text-stone-950 font-semibold">Rank #1</strong> in Computer Engineering with Honors in AI & ML).
                        </p>
                        <p>
                            My engineering work bridges <strong className="text-stone-950 font-semibold">system autonomy, high throughput, and algorithmic precision</strong>. At InfinityPool Finnotech, I architected an event-driven backtesting engine with Backtrader that evaluates multi-timeframe equity portfolios with real-time market feeds and agentic AI memory pipelines.
                        </p>
                        <p>
                            Alongside industry software development, I actively conduct peer-reviewed research in machine learning anomaly detection, multi-agent financial systems, and foundation models in healthcare. At Hack IITK 2026, my team won 3rd place out of 9,000+ participants for building an offline policy gap analysis engine using local LLMs deployed via Ollama without any cloud dependencies.
                        </p>
                        <p>
                            Currently in Stuttgart, I am seeking <strong className="text-stone-950 font-semibold">Werkstudent (Working Student) and Research Assistant (HiWi)</strong> opportunities in AI/ML, autonomous systems, data engineering, and backend software engineering.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;