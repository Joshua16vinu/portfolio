import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, BookOpen, ShieldCheck, Fingerprint, Star, ChevronLeft, ChevronRight } from "lucide-react";

import academicImg from "../assets/achievements/academic_rank.png";
import hacktivateImg from "../assets/achievements/hacktivate_runner_up.png";
import pubImg from "../assets/achievements/publication.png";

// Import new achievement assets
import hackiitk1 from "../assets/achievements/hackiitk_1.jpg";
import hackiitk2 from "../assets/achievements/hackiitk_2.png";
import hackiitk3 from "../assets/achievements/hackiitk_3.png";
import techsprint1 from "../assets/achievements/techsprint_1.png";
import techsprint2 from "../assets/achievements/techsprint_2.png";
import codemania1 from "../assets/achievements/codemania_1.jpg";
import cryptex1 from "../assets/achievements/cryptex_1.png";

const AchievementImageCarousel = ({ images, name }) => {
    const [imgIndex, setImgIndex] = useState(0);

    if (!images || images.length === 0) return null;

    return (
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
            {/* Main Image Display */}
            <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={imgIndex}
                        src={images[imgIndex]}
                        alt={`${name} - Image ${imgIndex + 1}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                    />
                </AnimatePresence>

                {images.length > 1 && (
                    <>
                        {/* Inset internal arrows more so they don't overlap with outer ones */}
                        <button
                            onClick={(e) => { e.stopPropagation(); setImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white transition-all bg-white/10 hover:bg-vscode-blue rounded-full border border-white/10 backdrop-blur-md shadow-xl z-10"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setImgIndex((prev) => (prev + 1) % images.length); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white transition-all bg-white/10 hover:bg-vscode-blue rounded-full border border-white/10 backdrop-blur-md shadow-xl z-10"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </>
                )}
            </div>

            {images.length > 1 && (
                /* Interactive Thumbnails - Shifted slightly up from very bottom */
                <div className="flex gap-2 p-2 mb-2 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl z-20">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                            className={`relative w-10 h-10 rounded-lg overflow-hidden border-2 transition-all ${i === imgIndex ? 'border-vscode-blue scale-110 shadow-[0_0_15px_rgba(0,122,204,0.4)]' : 'border-transparent opacity-40 hover:opacity-100'}`}
                        >
                            <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const achievements = [
    {
        id: "02b",
        name: "Hack IITK 2026",
        publisher: "C3iHub, IIT Kanpur",
        icon: <ShieldCheck size={32} />,
        year: "2026",
        rank: "3RD PLACE",
        description: "Achieved 3rd place in a highly competitive Cybersecurity hackathon among 9000+ participants. Engineered a fully offline policy gap analysis system using localized LLMs.",
        highlights: ["Cybersecurity", "9000+ Participants"],
        images: [hackiitk2, hackiitk1, hackiitk3],
        color: "text-vscode-purple",
        bg: "bg-vscode-purple/10",
        border: "border-vscode-purple/30"
    },
    {
        id: "01",
        name: "Academic Excellence",
        publisher: "University of Mumbai",
        icon: <Award size={32} />,
        year: "2024",
        rank: "GPA 10.0",
        description: "Secured First Rank in Third Year with Perfect 10.0 GPA. Consistently maintained top performance across all academic semesters.",
        highlights: ["GPA 10.0", "First Rank"],
        images: [academicImg],
        color: "text-vscode-blue",
        bg: "bg-vscode-blue/10",
        border: "border-vscode-blue/30"
    },
    {
        id: "02",
        name: "Hacktivate Solution",
        publisher: "Hacktivate 2024",
        icon: <ShieldCheck size={32} />,
        year: "2024",
        rank: "WINNER",
        description: "Secured 2nd Runner-up for an innovative AI Security Solution in a 24-hour Hackathon. Developed a real-time anomaly detection system using advanced LSTM networks.",
        highlights: ["AI Security", "2nd Runner-up"],
        images: [hacktivateImg],
        color: "text-vscode-purple",
        bg: "bg-vscode-purple/10",
        border: "border-vscode-purple/30"
    },
    {
        id: "06",
        name: "Research Paper on Fraud transaction detection In Reverse Auction Systems",
        publisher: "ICNTE Conf.",
        icon: <BookOpen size={32} />,
        year: "2026",
        rank: "PUBLISHED",
        description: "Authored and published an International Research Paper on Security & Cryptography. Proposed a novel cryptographic betting mechanism presented at ICNTE 2026.",
        highlights: ["Cryptography", "Research Paper"],
        images: [pubImg],
        color: "text-vscode-green",
        bg: "bg-vscode-green/10",
        border: "border-vscode-green/30"
    },
    {
        id: "03",
        name: "CodeMania Contest",
        publisher: "CSI India",
        icon: <Trophy size={32} />,
        year: "2023",
        rank: "TOP 3",
        description: "Emerged as a State-level competitive programming winner (12 Problems / 4 Hrs). Showcased high-speed algorithmic problem-solving skills in dynamic programming.",
        highlights: ["Algorithms", "Top 3"],
        images: [codemania1],
        color: "text-vscode-orange",
        bg: "bg-vscode-orange/10",
        border: "border-vscode-orange/30"
    },
    {
        id: "04",
        name: "TechSprint 2026",
        publisher: "Google Developer Group",
        icon: <Fingerprint size={32} />,
        year: "2026",
        rank: "3RD PLACE",
        description: "Secured a winning position at the Google Developer Group's TechSprint 2026 Hackathon. Recognized for innovative problem-solving in the open innovation track.",
        highlights: ["GDG Hackathon", "3rd Place"],
        images: [techsprint1, techsprint2],
        color: "text-vscode-teal",
        bg: "bg-vscode-teal/10",
        border: "border-vscode-teal/30"
    },
    {
        id: "05",
        name: "Cryptex 2023",
        publisher: "Web Dev Contest",
        icon: <Star size={32} />,
        year: "2023",
        rank: "1ST PRIZE",
        description: "Winner of the Web Development competition at Cryptex 2023. Developed a responsive and highly feature-rich web application under strict time constraints.",
        highlights: ["Web Dev", "1st Prize"],
        images: [cryptex1],
        color: "text-vscode-yellow",
        bg: "bg-vscode-yellow/10",
        border: "border-vscode-yellow/30"
    }
];

const Achievements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % achievements.length);
        }, 4000); // Increased to 4 seconds for better readability

        return () => clearInterval(timer);
    }, [isPaused]);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % achievements.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));

    const activeItem = achievements[currentIndex];

    return (
        <section id="achievements" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
            {/* Dynamic Background Glow based on active item */}
            <div className="absolute inset-0 transition-colors duration-1000 ease-in-out">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none transition-all duration-1000 ${activeItem.bg}`} />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surfaceLight border border-border/50 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-vscode-purple animate-pulse"></span>
                        <span className="text-sm font-mono text-secondary">05 // Hall of Records</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-4"
                    >
                        Awards & Honors
                    </motion.h2>
                </div>

                {/* Sliding Window Container */}
                <div
                    className="relative w-full h-[800px] md:h-[550px] rounded-[2.5rem] bg-surface/30 backdrop-blur-3xl border border-border/50 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {/* Visual Progress Bar (Top) */}
                    {!isPaused && (
                        <motion.div
                            key={`progress-${currentIndex}`}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4, ease: "linear" }}
                            className={`absolute top-0 left-0 h-1 z-30 opacity-50 bg-gradient-to-r from-transparent via-vscode-blue to-transparent`}
                        />
                    )}

                    {/* Slides */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: -40, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 40, scale: 0.98 }}
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute inset-0 flex flex-col md:flex-row pt-20 md:pt-12"
                        >
                            {/* Text Content - Narrowed to 35% */}
                            <div className="w-full md:w-[38%] p-8 sm:p-10 md:p-12 flex flex-col justify-center h-[45%] md:h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3.5 rounded-xl ${activeItem.bg} ${activeItem.color} border ${activeItem.border} shadow-lg`}>
                                        {activeItem.icon}
                                    </div>
                                    <div className={`px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono tracking-widest uppercase ${activeItem.bg} ${activeItem.color} border border-current/20`}>
                                        {activeItem.rank}
                                    </div>
                                </div>

                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 leading-tight">
                                    {activeItem.name}
                                </h3>
                                <div className="flex items-center gap-2 text-xs font-mono mb-6 opacity-80">
                                    <span className={activeItem.color}>{activeItem.publisher}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
                                    <span className="text-secondary/60">{activeItem.year}</span>
                                </div>

                                <p className="text-secondary/80 text-sm sm:text-base leading-relaxed mb-6 font-light line-clamp-4 md:line-clamp-none">
                                    {activeItem.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {activeItem.highlights.map((highlight, i) => (
                                        <span key={i} className="px-3 py-1 text-[10px] font-mono rounded-lg bg-surfaceLight/30 border border-border/50 text-secondary/80 backdrop-blur-md">
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Image Content - Expanded to 62% and reduced padding */}
                            <div className="w-full md:w-[62%] bg-surface/10 border-t md:border-t-0 md:border-l border-border/30 p-4 md:p-6 flex items-center justify-center relative h-[55%] md:h-full overflow-hidden">
                                <div className={`absolute inset-0 ${activeItem.bg} opacity-10 blur-[120px]`} />

                                {activeItem.images && activeItem.images.length > 0 ? (
                                    <AchievementImageCarousel images={activeItem.images} name={activeItem.name} />
                                ) : (
                                    <div className="relative z-10 flex flex-col items-center justify-center text-secondary/10">
                                        {activeItem.icon}
                                        <span className="mt-6 text-[10px] font-mono tracking-[0.3em] uppercase">Credential_Digital</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls (Visible on hover) */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-vscode-blue hover:scale-110 backdrop-blur-xl"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-vscode-blue hover:scale-110 backdrop-blur-xl"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Progress Dots - Moved to TOP to avoid overlap with thumbnails */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-3 z-40 px-5 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
                        {achievements.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-10 bg-vscode-blue' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
