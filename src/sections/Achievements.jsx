import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Image, Award, Star, ExternalLink, Trophy } from "lucide-react";

import academicImg from "../assets/achievements/academic_rank.png";
import hacktivateImg from "../assets/achievements/hacktivate_runner_up.png";
import hackiitk1 from "../assets/achievements/hackiitk_1.jpg";
import hackiitk2 from "../assets/achievements/hackiitk_2.png";
import hackiitk3 from "../assets/achievements/hackiitk_3.png";
import techsprint1 from "../assets/achievements/techsprint_1.png";
import techsprint2 from "../assets/achievements/techsprint_2.png";
import codemania1 from "../assets/achievements/codemania_1.jpg";

const honorRecords = [
    {
        year: "2026",
        rankBadge: "3RD PLACE / 9,000+ PARTICIPANTS",
        title: "Hack IITK 2026 (Cybersecurity Hackathon)",
        organization: "C3iHub, Indian Institute of Technology Kanpur (IITK)",
        impact: "Engineered a fully offline policy gap analysis system using quantized local LLMs (Mistral & Phi) deployed through Ollama, adhering strictly to zero-API and air-gapped constraints.",
        highlights: ["9,000+ Participants", "Zero-API Constraint", "Offline RAG Pipeline"],
        images: [hackiitk2, hackiitk1, hackiitk3]
    },
    {
        year: "2026",
        rankBadge: "3RD POSITION · OPEN INNOVATION",
        title: "TechSprint'26 National Hackathon",
        organization: "Google Developer Group (GDG)",
        impact: "Recognized in the Open Innovation Track for an innovative real-time solution addressing complex automated analysis workflows.",
        highlights: ["GDG Open Innovation", "National Finalist", "System Architecture"],
        images: [techsprint1, techsprint2]
    },
    {
        year: "2024",
        rankBadge: "SECOND RUNNER-UP",
        title: "Hacktivate 2024 (AI & Cybersecurity)",
        organization: "Hacktify",
        impact: "Built a 24-hour rapid prototype real-time anomaly detection pipeline using recurrent neural architectures for live transaction streams.",
        highlights: ["24h Hackathon", "Real-Time Anomaly Detection", "AI Security"],
        images: [hacktivateImg]
    },
    {
        year: "2023",
        rankBadge: "1ST PRIZE & 3RD PRIZE",
        title: "Cryptex (Web Dev) & CodeMania (LeetCode Contest)",
        organization: "Computer Society of India (CSI)",
        impact: "Won 1st Prize in rapid full-stack web development at Cryptex 2023, and placed 3rd in CodeMania competitive algorithmic contest.",
        highlights: ["Web Development 1st Prize", "Competitive Programming Top 3", "Speed & Algorithmic Accuracy"],
        images: [codemania1] // Cryptex trophy photo permanently removed per user request
    }
];

const Achievements = () => {
    const [selectedImages, setSelectedImages] = useState(null);
    const [activeImgIdx, setActiveImgIdx] = useState(0);

    const openImageModal = (images, title) => {
        setSelectedImages({ images, title });
        setActiveImgIdx(0);
    };

    return (
        <section id="achievements" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[#dedbd2]">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Full-Width Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#dedbd2]">
                    <div className="space-y-2">
                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                            07 // Competitive Victories & Distinctions
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-sans">
                            Honors & <span className="font-serif italic font-normal lowercase tracking-normal text-stone-800 text-3xl sm:text-4xl lg:text-[2.75rem]">hall of records</span>
                        </h2>
                    </div>

                    <div className="text-xs font-mono text-stone-600 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-stone-900" />
                        <span>National Competitions & Graduating Rank</span>
                    </div>
                </div>

                {/* Distinguished Academic Seal Plaque (Prominent hero card for Rank #1) */}
                <div className="p-8 sm:p-10 rounded-3xl bg-[#18181b] text-white shadow-card relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-3 max-w-2xl">
                        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-stone-400 uppercase">
                            <Star size={13} className="text-amber-400 fill-amber-400" />
                            <span>Academic Cohort Distinction · FCRIT / Mumbai University</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight font-sans">
                            Rank #1 in Computer Engineering Class
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                            Secured first rank across the entire graduating engineering class with a 9.77/10 cumulative GPA, maintaining a perfect 10.0/10.0 Semester GPA across pre-final and final years with Honors in Artificial Intelligence & Machine Learning.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
                        <div className="text-left md:text-right font-mono">
                            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">10.0 / 10.0</div>
                            <div className="text-[11px] text-stone-400 uppercase">Semester GPA (Yr 3 & 4)</div>
                        </div>

                        <button
                            onClick={() => openImageModal([academicImg], "Academic Rank #1 - Perfect 10.0 GPA Verification")}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-stone-950 font-mono text-xs uppercase tracking-wider font-bold hover:bg-stone-200 transition-colors cursor-pointer mt-2"
                        >
                            <Image size={13} />
                            <span>View Image</span>
                        </button>
                    </div>
                </div>

                {/* Chronological Hall of Records: Ledger Table */}
                <div className="border border-[#dedbd2] rounded-3xl bg-white overflow-hidden shadow-sm">
                    <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 bg-[#f2f0ea]/70 border-b border-[#dedbd2] text-[11px] font-mono uppercase tracking-wider text-stone-500 font-bold">
                        <div className="col-span-1">Year</div>
                        <div className="col-span-3">Distinction</div>
                        <div className="col-span-5">Competition & Organization</div>
                        <div className="col-span-3 text-right">Verification Proof</div>
                    </div>

                    <div className="divide-y divide-[#dedbd2]">
                        {honorRecords.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#faf9f6] transition-colors"
                            >
                                {/* Year */}
                                <div className="md:col-span-1 text-sm font-mono font-bold text-stone-400">
                                    {item.year}
                                </div>

                                {/* Rank / Distinction */}
                                <div className="md:col-span-3">
                                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-stone-100 text-stone-900 border border-stone-300">
                                        {item.rankBadge}
                                    </span>
                                </div>

                                {/* Title & Details */}
                                <div className="md:col-span-5 space-y-1">
                                    <h4 className="text-base font-bold text-stone-950 font-sans">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-stone-500 font-mono">
                                        {item.organization}
                                    </p>
                                    <p className="text-xs text-stone-600 leading-relaxed font-normal pt-1">
                                        {item.impact}
                                    </p>
                                </div>

                                {/* Proof Verification Action */}
                                <div className="md:col-span-3 md:text-right pt-2 md:pt-0">
                                    {item.images && item.images.length > 0 && (
                                        <button
                                            onClick={() => openImageModal(item.images, item.title)}
                                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer bg-stone-50 hover:bg-white"
                                        >
                                            <Image size={13} />
                                            <span>View Verification ({item.images.length})</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Verification Lightbox Modal */}
            <AnimatePresence>
                {selectedImages && (
                    <div
                        className="fixed inset-0 z-[10000] bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                        onClick={() => setSelectedImages(null)}
                    >
                        <div
                            className="w-full max-w-3xl bg-white rounded-2xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col relative max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 sm:px-6 border-b border-stone-200 bg-stone-50">
                                <h3 className="text-xs font-mono uppercase tracking-wider text-stone-800 font-bold truncate pr-4">
                                    {selectedImages.title}
                                </h3>
                                <button
                                    onClick={() => setSelectedImages(null)}
                                    className="p-1 rounded-full hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="p-4 sm:p-6 flex-grow flex items-center justify-center relative bg-stone-100 min-h-[300px]">
                                <img
                                    src={selectedImages.images[activeImgIdx]}
                                    alt="Achievement Verification"
                                    className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-sm"
                                />

                                {selectedImages.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => setActiveImgIdx((prev) => (prev === 0 ? selectedImages.images.length - 1 : prev - 1))}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-stone-800 shadow-md hover:bg-white cursor-pointer"
                                        >
                                            <ChevronLeft size={18} />
                                        </button>
                                        <button
                                            onClick={() => setActiveImgIdx((prev) => (prev + 1) % selectedImages.images.length)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-stone-800 shadow-md hover:bg-white cursor-pointer"
                                        >
                                            <ChevronRight size={18} />
                                        </button>
                                    </>
                                )}
                            </div>

                            {selectedImages.images.length > 1 && (
                                <div className="p-3 border-t border-stone-200 flex justify-center gap-2 bg-stone-50">
                                    {selectedImages.images.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveImgIdx(i)}
                                            className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${i === activeImgIdx ? 'border-stone-900 scale-105' : 'border-transparent opacity-50'
                                                }`}
                                        >
                                            <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Achievements;