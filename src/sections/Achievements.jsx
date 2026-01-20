import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, BookOpen, ShieldCheck, Fingerprint, X, ExternalLink, Star, ArrowUpRight, Hash, ScanLine, Activity, ChevronLeft, ChevronRight } from "lucide-react";

import infinity1 from "../assets/achievements/infinity_pool_1.png";
import infinity2 from "../assets/achievements/infinity_pool_2.png";
import academicImg from "../assets/achievements/academic_rank.png";
import hacktivateImg from "../assets/achievements/hacktivate_runner_up.png";
import pubImg from "../assets/achievements/publication.png";

const achievements = [
    {
        id: "01",
        name: "Academic Excellence",
        publisher: "University of Mumbai",
        icon: <Award className="text-vscode-blue" size={24} />,
        year: "2024",
        rank: "RANK #01",
        description: "Secured First Rank in TE Computer Engineering (9.69 CGPA).",
        details: "Top performer across all semesters. Specialized in Data Structures and AI algorithms.",
        stars: 5,
        category: "EDUCATION",
        images: [academicImg],
        color: "group-hover:shadow-vscode-blue/20 group-hover:border-vscode-blue/30",
        accent: "text-vscode-blue"
    },
    {
        id: "02",
        name: "Hacktivate Solution",
        publisher: "Hacktivate 2024",
        icon: <ShieldCheck className="text-vscode-purple" size={24} />,
        year: "2024",
        rank: "WINNER",
        description: "2nd Runner-up for AI Security Solution in 24h Hackathon.",
        details: "Developed a real-time anomaly detection system using LSTM networks.",
        stars: 5,
        category: "SECURITY",
        images: [hacktivateImg],
        color: "group-hover:shadow-vscode-purple/20 group-hover:border-vscode-purple/30",
        accent: "text-vscode-purple"
    },
    {
        id: "03",
        name: "CodeMania Contest",
        publisher: "CSI India",
        icon: <Trophy className="text-vscode-orange" size={24} />,
        year: "2023",
        rank: "TOP 3",
        description: "State-level competitive programming winner (12 Problems/4 Hrs).",
        details: "High-speed algorithmic problem solving in dynamic programming.",
        stars: 4,
        category: "ALGORITHMS",
        images: [],
        color: "group-hover:shadow-vscode-orange/20 group-hover:border-vscode-orange/30",
        accent: "text-vscode-orange"
    },
    {
        id: "04",
        name: "FinTech Agent Core",
        publisher: "Infinity Pool",
        icon: <Fingerprint className="text-vscode-teal" size={24} />,
        year: "2023",
        rank: "ELITE",
        description: "Architectural excellence in Financial AI Agents.",
        details: "Designed the core decision-making engine using a multi-agent LLM systems.",
        stars: 5,
        category: "PROFESSIONAL",
        images: [infinity1, infinity2],
        color: "group-hover:shadow-vscode-teal/20 group-hover:border-vscode-teal/30",
        accent: "text-vscode-teal"
    },
    {
        id: "05",
        name: "Fraud Research",
        publisher: "ICNTE Conf.",
        icon: <BookOpen className="text-vscode-green" size={24} />,
        year: "2023",
        rank: "PUBLISHED",
        description: "International Research Paper on Security & Cryptography.",
        details: "Proposed a novel cryptographic betting mechanism at ICNTE.",
        stars: 4,
        category: "RESEARCH",
        images: [pubImg],
        color: "group-hover:shadow-vscode-green/20 group-hover:border-vscode-green/30",
        accent: "text-vscode-green"
    }
];

const BentoCard = ({ item, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => onClick(item)}
            className={`
                group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 cursor-pointer overflow-hidden
                flex flex-col justify-between h-[280px] w-full transition-all duration-300
                ${item.color} hover:shadow-2xl hover:bg-white/[0.07]
            `}
        >
            {/* Holographic Header */}
            <div className="flex justify-between items-start z-10">
                <div className="p-3 bg-black/40 rounded-xl border border-white/5 backdrop-blur-sm">
                    {item.icon}
                </div>
                <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-mono tracking-widest text-secondary/50 uppercase">{item.category}</span>
                    <div className="flex items-center gap-1 text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-secondary">
                        <Hash size={10} /> {item.id}
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="z-10 mt-4">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-secondary transition-all">
                    {item.name}
                </h3>
                <p className="text-xs text-secondary/70 leading-relaxed line-clamp-3">
                    {item.description}
                </p>
            </div>

            {/* Tech Footer */}
            <div className="z-10 mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold font-mono ${item.accent}`}>{item.rank}</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-black/20 group-hover:bg-white/20 transition-colors">
                    <ArrowUpRight size={14} className="text-white" />
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ScanLine size={120} />
            </div>
        </motion.div>
    );
};

const DetailModal = ({ isOpen, onClose, item }) => {
    // 1. Hooks MUST be top-level and unconditional
    const [imgIdx, setImgIdx] = useState(0);

    if (typeof document === 'undefined') return null;

    // 2. Wrap content in Portal + AnimatePresence
    return createPortal(
        <AnimatePresence>
            {isOpen && item && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

                    <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row h-auto max-h-[85vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-[99999] p-2 bg-black/60 rounded-full text-white/50 hover:text-white hover:bg-black/80 transition-colors backdrop-blur-sm border border-white/10 cursor-pointer"
                        >
                            <X size={20} />
                        </button>

                        {/* Image / Visual Side */}
                        <div className="w-full md:w-1/2 bg-[#000] relative flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
                            {/* Ambient Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${(item.accent || 'text-white').replace('text-', 'from-')}/20 to-transparent opacity-20`} />

                            {item.images && item.images.length > 0 ? (
                                <div className="relative z-10 w-full h-full flex items-center justify-center group">
                                    <img src={item.images[imgIdx]} alt="proof" className="max-h-[300px] object-contain shadow-2xl rounded-lg border border-white/10" />
                                    {item.images.length > 1 && (
                                        <div className="absolute bottom-4 flex gap-3">
                                            <button onClick={() => setImgIdx((i) => (i - 1 + item.images.length) % item.images.length)} className="p-2 bg-black/50 text-white rounded-full border border-white/10 hover:bg-white/20"><ChevronLeft size={16} /></button>
                                            <button onClick={() => setImgIdx((i) => (i + 1) % item.images.length)} className="p-2 bg-black/50 text-white rounded-full border border-white/10 hover:bg-white/20"><ChevronRight size={16} /></button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-3 text-white/20 z-10">
                                    <Activity size={48} strokeWidth={1} />
                                    <span className="text-xs font-mono tracking-widest">DATA_ENCRYPTED</span>
                                </div>
                            )}

                            {/* Decorative Patterns */}
                            <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/20 flex flex-col gap-1">
                                <span>IMG_Res: 4096x2160</span>
                                <span>MIME: image/png</span>
                            </div>
                        </div>

                        {/* Content Details Side */}
                        <div className="w-full md:w-1/2 p-8 bg-[#0a0a0a] flex flex-col overflow-y-auto">
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/5 ${item.accent || 'text-white'}`}>
                                        {item.category}
                                    </span>
                                    <span className="text-[10px] text-secondary/40 font-mono">
                                        {item.year}.REL
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                                    {item.name}
                                </h2>
                                <p className="text-sm text-secondary/60 flex items-center gap-2">
                                    <ExternalLink size={12} /> {item.publisher}
                                </p>
                            </div>

                            <div className="space-y-6 flex-1">
                                <p className="text-sm md:text-base text-secondary/80 leading-relaxed font-light">
                                    {item.description}
                                </p>

                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                        <ScanLine size={12} className="text-vscode-blue" />
                                        Executive Summary
                                    </h4>
                                    <p className="text-xs text-secondary/60 leading-relaxed font-mono">
                                        {item.details}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div>
                                        <span className="text-[10px] text-secondary/40 uppercase block mb-1">Recognition Level</span>
                                        <span className={`text-lg font-bold ${item.accent || 'text-white'}`}>{item.rank}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} className={i < item.stars ? "fill-white text-white" : "text-white/10"} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

const Achievements = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section id="achievements" className="py-24 px-6 relative">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vscode-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vscode-blue/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container-width max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-mono text-vscode-blue uppercase tracking-widest mb-2">
                            05 // Hall of Records
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Honors</span>
                        </h1>
                    </div>
                    <p className="text-secondary/60 text-sm max-w-sm leading-relaxed">
                        A curated collection of verified credentials, hackathon victories, and research contributions.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <BentoCard
                            key={index}
                            item={item}
                            index={index}
                            onClick={setSelectedItem}
                        />
                    ))}
                </div>
            </div>

            <DetailModal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} item={selectedItem} />
        </section>
    );
};

export default Achievements;
