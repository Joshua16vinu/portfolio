import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Award, MapPin, Folder, X, ArrowLeft, ArrowUpRight } from "lucide-react";

const experiences = [
    {
        id: "exp_1",
        role: "Software Engineer Intern",
        company: "InfinityPool Finnotech",
        logo: "/logos/infinity-pool.png",
        date: "Jul 2024 – Jun 2026",
        location: "India (Remote)",
        certificates: [
            { name: "Period 2024–25", url: "/certificates/2024-25.pdf" },
            { name: "Period 2025–26", url: "/certificates/2025-26.pdf" }
        ],
        description: [
            "Designed a Backtrader-powered trading engine with multi-timeframe simulations, optimized data loaders, and real-time market feeds for equity portfolio strategy evaluation.",
            "Architected agentic AI workflows with multi-agent orchestration and long-term memory for autonomous equity monitoring and portfolio optimization.",
            "Built chunked data pipelines streaming OHLCV historical feeds from PostgreSQL in dynamic batches, boosting throughput by 35–40%."
        ],
        skills: ["Python", "Backtrader", "Multi-Agent AI", "Vector DBs", "PostgreSQL", "Quant Systems"]
    },
    {
        id: "exp_2",
        role: "Full Stack Developer Intern",
        company: "Fr. C. Rodrigues Institute of Technology (FCRIT)",
        logo: "/logos/fcrit.png",
        date: "Jan 2025 – Jun 2025",
        location: "Navi Mumbai, India",
        certificate: "/certificates/fcrit.pdf",
        description: [
            "Led the revamp of college website with React.js, redesigned user interfaces & admin dashboards, and migrated from CakePHP to a Node.js + MySQL microservice-style architecture, cutting page load time by 40%.",
            "Implemented secure REST APIs with JWT authentication, role-based access control (RBAC), and server-side caching for examinations, faculty management, and student feedback modules.",
            "Optimized relational database schemas to efficiently serve thousands of daily institutional users."
        ],
        skills: ["React.js", "Node.js", "MySQL", "REST APIs", "JWT", "RBAC", "Microservices"]
    }
];

const Experience = () => {
    const [activeExpForModal, setActiveExpForModal] = useState(null);
    const [activePdf, setActivePdf] = useState(null);

    return (
        <section id="experience" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[#dedbd2]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    
                    {/* Left Column */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                            04 // Engineering Experience
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-sans leading-[1.08]">
                            Practical <br />
                            <span className="font-serif italic font-normal lowercase tracking-normal text-stone-800 text-3xl sm:text-4xl lg:text-[2.75rem]">
                                industry software
                            </span>
                        </h2>
                        <p className="text-stone-600 text-sm leading-relaxed">
                            Internships delivering high-throughput quantitative backtesting engines and distributed full-stack microservices.
                        </p>
                    </div>

                    {/* Right Column: Experience Cards */}
                    <div className="lg:col-span-7 space-y-6">
                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#dedbd2] shadow-sm space-y-5"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 p-1 flex-shrink-0">
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-stone-950 font-sans">
                                                {exp.role}
                                            </h3>
                                            <div className="text-xs sm:text-sm font-medium text-stone-700">
                                                {exp.company}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-xs font-mono text-stone-500 flex items-center gap-1.5">
                                        <Calendar size={13} />
                                        <span>{exp.date}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {exp.description.map((desc, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                                            <span className="text-stone-900 font-mono mt-0.5">▸</span>
                                            <span>{desc}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-[#dedbd2] flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono text-[11px]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {(exp.certificates || exp.certificate) && (
                                        <button
                                            onClick={() => {
                                                setActiveExpForModal(exp);
                                                setActivePdf(exp.certificate || null);
                                            }}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300 hover:border-stone-900 text-xs font-mono uppercase tracking-wider text-stone-900 transition-colors cursor-pointer"
                                        >
                                            <Award size={13} />
                                            <span>Credentials</span>
                                            <ArrowUpRight size={12} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Modal for PDF certificates */}
            <AnimatePresence>
                {activeExpForModal && (
                    <div
                        className="fixed inset-0 z-[10000] bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                        onClick={() => { setActiveExpForModal(null); setActivePdf(null); }}
                    >
                        <div
                            className="w-full max-w-4xl bg-white rounded-2xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col relative max-h-[90vh] h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 sm:px-6 border-b border-stone-200 bg-stone-50">
                                <h3 className="text-sm font-bold text-stone-900 font-mono uppercase tracking-wider flex items-center gap-2">
                                    <Award size={16} />
                                    {activeExpForModal.company} Credentials
                                </h3>
                                <button
                                    onClick={() => { setActiveExpForModal(null); setActivePdf(null); }}
                                    className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="p-4 sm:p-6 flex-grow flex flex-col overflow-hidden">
                                {!activePdf && activeExpForModal.certificates ? (
                                    <div className="flex flex-col items-center justify-center flex-grow py-8 overflow-y-auto">
                                        <p className="text-xs font-mono text-stone-500 mb-6 uppercase tracking-wider">
                                            Select a certificate period to preview
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            {activeExpForModal.certificates.map((cert, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setActivePdf(cert.url)}
                                                    className="p-6 rounded-2xl border border-stone-200 hover:border-stone-900 bg-stone-50 hover:bg-white transition-all text-center space-y-2 cursor-pointer w-44"
                                                >
                                                    <Folder size={40} className="mx-auto text-stone-700" />
                                                    <div className="text-sm font-bold text-stone-900 font-sans">
                                                        {cert.name}
                                                    </div>
                                                    <div className="text-[11px] font-mono text-stone-500">
                                                        PDF Document
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full flex flex-col flex-grow">
                                        {activeExpForModal.certificates && (
                                            <div className="mb-3">
                                                <button
                                                    onClick={() => setActivePdf(null)}
                                                    className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-700 hover:text-stone-950 cursor-pointer"
                                                >
                                                    <ArrowLeft size={14} />
                                                    Back to selection
                                                </button>
                                            </div>
                                        )}
                                        <iframe
                                            src={activePdf}
                                            className="w-full flex-grow rounded-xl border border-stone-200"
                                            title="Certificate Viewer"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;