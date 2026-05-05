import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Award, ExternalLink, ChevronRight, MapPin, Folder, X, ArrowLeft } from "lucide-react";

const experiences = [
    {
        id: "exp_1",
        role: "Project Intern",
        company: "InfinityPool Finnotech",
        logo: "/logos/infinity-pool.png",
        date: "July 2024 - April 2026",
        location: "Remote",
        certificateLink: null,
        certificates: [
            { name: "2024-25", url: "/certificates/2024-25.pdf" },
            { name: "2025-26", url: "/certificates/2025-26.pdf" }
        ],

        description: [
            "Designed a Backtrader-powered trading engine with 40+ technical indicators.",
            "Architected agentic AI workflows with multi-agent orchestration and long-term memory.",
            "Built custom web crawlers for news sentiment analysis and market signals."
        ],
        skills: ["Python", "Backtrader", "AI Agents", "Web Crawling"]
    },
    {
        id: "exp_2",
        role: "Full Stack Developer Intern",
        company: "FCRIT",
        logo: "/logos/fcrit.png",
        date: "Jan 2025 - June 2025",
        location: "Mumbai, India",
        certificateLink: null,
        certificate: "/certificates/fcrit.pdf",
        description: [
            "Led the revamp of fcrit.ac.in using React.js and modern UI principles.",
            "Implemented secure REST APIs with JWT authentication and RBAC.",
            "Developed a real-time event sharing system with geolocation tracking."
        ],
        skills: ["React.js", "Node.js", "REST APIs", "JWT"]
    }
];

const ExperienceCard = ({ exp, index, onOpenModal }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col h-full bg-surface/40 backdrop-blur-md border border-border/60 hover:border-vscode-blue/50 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(86,156,214,0.1)] hover:-translate-y-1.5 relative group overflow-hidden"
        >
            {/* Top Section: Logo & Role */}
            <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-surfaceLight border border-border/50 p-1 flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500">
                    <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary group-hover:text-vscode-blue transition-colors duration-300 line-clamp-2">
                        {exp.role}
                    </h3>
                    <div className="text-base font-medium text-secondary mt-1">
                        {exp.company}
                    </div>
                </div>
            </div>

            {/* Meta tags */}
            <div className="flex flex-wrap gap-3 text-xs font-mono text-secondary/80 mb-6">
                <div className="flex items-center gap-1.5 bg-surfaceLight/50 px-3 py-1.5 rounded-lg border border-border/50">
                    <Calendar size={14} className="text-vscode-orange" />
                    {exp.date}
                </div>
                {exp.location && (
                    <div className="flex items-center gap-1.5 bg-surfaceLight/50 px-3 py-1.5 rounded-lg border border-border/50">
                        <MapPin size={14} className="text-vscode-teal" />
                        {exp.location}
                    </div>
                )}
            </div>

            {/* Description */}
            <div className="space-y-3 mb-8 flex-grow">
                {exp.description.map((desc, i) => (
                    <div key={i} className="flex gap-3 text-sm text-secondary/90 leading-relaxed group/item">
                        <ChevronRight size={16} className="text-vscode-blue flex-shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                        <span>{desc}</span>
                    </div>
                ))}
            </div>

            {/* Bottom Section: Skills & Cert */}
            <div className="mt-auto pt-6 border-t border-border/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2 flex-1">
                        {exp.skills.map((skill, i) => (
                            <span key={i} className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-vscode-blue/5 text-vscode-blue border border-vscode-blue/20">
                                {skill}
                            </span>
                        ))}
                    </div>

                    {exp.certificateLink ? (
                        <a
                            href={exp.certificateLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl bg-surfaceLight border border-border hover:border-vscode-teal hover:text-vscode-teal transition-all duration-300 group/btn whitespace-nowrap cursor-pointer"
                        >
                            <Award size={14} className="text-vscode-teal group-hover/btn:scale-110 transition-transform" />
                            <span>View Certificate</span>
                            <ExternalLink size={12} className="opacity-50 group-hover/btn:opacity-100" />
                        </a>
                    ) : exp.certificates || exp.certificate ? (
                        <button
                            onClick={onOpenModal}
                            className="flex items-center justify-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl bg-surfaceLight border border-border hover:border-vscode-teal hover:text-vscode-teal transition-all duration-300 group/btn whitespace-nowrap cursor-pointer"
                        >
                            <Award size={14} className="text-vscode-teal group-hover/btn:scale-110 transition-transform" />
                            <span>{exp.certificates ? "View Certificates" : "View Certificate"}</span>
                            {exp.certificates && <Folder size={12} className="opacity-50 group-hover/btn:opacity-100" />}
                        </button>
                    ) : null}
                </div>
            </div>

            {/* Background glow effect on hover */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-vscode-blue/5 rounded-full blur-[60px] -z-10 group-hover:bg-vscode-blue/10 transition-colors duration-700 pointer-events-none" />

        </motion.div>
    );
};

const Experience = () => {
    const [activeExpForModal, setActiveExpForModal] = useState(null);
    const [activePdf, setActivePdf] = useState(null);

    return (
        <section id="experience" className="py-32 px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-vscode-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-vscode-purple/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-mono text-vscode-blue uppercase tracking-widest mb-4"
                    >
                        02 // Experience
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Where I've Worked
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary max-w-2xl text-lg"
                    >
                        My professional journey and the organizations I've had the privilege to collaborate with.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={exp.id}
                            exp={exp}
                            index={index}
                            onOpenModal={() => {
                                setActiveExpForModal(exp);
                                setActivePdf(exp.certificate || null);
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Certificates Modal (Moved out of the grid to prevent transform issues) */}
            <AnimatePresence>
                {activeExpForModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/90 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-5xl bg-surface border border-border/60 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative max-h-[95vh] h-[85vh]"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-4 sm:px-6 border-b border-border/50 bg-surfaceLight/30 flex-shrink-0">
                                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                                    <Award className="text-vscode-teal" size={20} />
                                    {activeExpForModal.company} Certificates
                                </h3>
                                <button
                                    onClick={() => { setActiveExpForModal(null); setActivePdf(null); }}
                                    className="text-secondary hover:text-vscode-red transition-colors p-1.5 rounded-lg hover:bg-vscode-red/10"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-4 sm:p-6 overflow-hidden flex-grow flex flex-col h-full">
                                {!activePdf && activeExpForModal.certificates ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center flex-grow py-8 overflow-y-auto"
                                    >
                                        <h4 className="text-secondary mb-8 text-center max-w-md">
                                            Select a period to view the internship certificate
                                        </h4>
                                        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                                            {activeExpForModal.certificates?.map((cert, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setActivePdf(cert.url)}
                                                    className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/40 hover:border-vscode-blue/40 bg-surfaceLight/20 hover:bg-vscode-blue/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(86,156,214,0.1)] w-40 sm:w-48"
                                                >
                                                    <div className="relative">
                                                        <Folder size={64} className="text-vscode-blue/80 group-hover:text-vscode-blue transition-colors duration-300" />
                                                        <div className="absolute inset-0 bg-vscode-blue/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    </div>
                                                    <span className="text-base text-primary font-semibold tracking-wide">
                                                        {cert.name}
                                                    </span>
                                                    <span className="text-xs text-secondary/70 font-mono">
                                                        PDF Document
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="w-full h-full flex flex-col flex-grow"
                                    >
                                        {activeExpForModal.certificates && (
                                            <div className="flex items-center justify-between mb-4 flex-shrink-0">
                                                <button
                                                    onClick={() => setActivePdf(null)}
                                                    className="flex items-center gap-2 text-sm text-vscode-blue hover:text-vscode-blue/80 hover:bg-vscode-blue/10 px-3 py-1.5 rounded-lg transition-colors font-medium"
                                                >
                                                    <ArrowLeft size={16} />
                                                    Back to Folders
                                                </button>
                                            </div>
                                        )}
                                        <div className="flex-grow w-full bg-white/5 rounded-xl border border-border/50 overflow-hidden h-full">
                                            <iframe
                                                src={activePdf}
                                                className="w-full h-full border-none"
                                                title="Certificate PDF Viewer"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
