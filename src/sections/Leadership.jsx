import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Mic, Presentation, ShieldCheck } from "lucide-react";

// Import leadership assets
import aidl1 from "../assets/leadership/aidl_1.jpg";
import aidl2 from "../assets/leadership/aidl_2.jpg";
import aidl3 from "../assets/leadership/aidl_3.jpg";
import aidl4 from "../assets/leadership/aidl_4.jpg";
import techCoord1 from "../assets/leadership/tech_coord_1.jpg";
import cryptex1 from "../assets/leadership/cryptex_1.png";

const leadershipData = [
    {
        id: "chairperson",
        role: "Chairperson",
        org: "AIDL Club",
        icon: <Users size={24} className="text-vscode-blue" />,
        date: "2023 - 2024",
        description: "Led a community of 150+ members. Orchestrated the national level WebRush'24 Hackathon, mentored over 500 students, and curated the technical curriculum.",
        highlights: ["150+ Members", "WebRush'24 Hackathon", "Mentored 500+"],
        images: [aidl1, aidl2, aidl3, aidl4],
        className: "md:col-span-2 lg:col-span-2"
    },
    {
        id: "tech_coord",
        role: "Tech Coordinator",
        org: "FCRIT",
        icon: <ShieldCheck size={24} className="text-vscode-teal" />,
        date: "2023 - 2024",
        description: "Managed the digital presence and social growth. Conducted hands-on training workshops focusing on Machine Learning and Deep Learning.",
        highlights: ["ML Training", "Digital Growth"],
        images: [techCoord1],
        className: "md:col-span-1 lg:col-span-1"
    },
    {
        id: "guest_speaker_2",
        role: "Guest Speaker- AI & ML in Finance",
        org: "Department of Information Technology, FCRIT",
        icon: <Presentation size={24} className="text-vscode-orange" />,
        date: "2025",
        description: "Conducted a Short Term Training Program focused on practical AI/ML applications for an audience of 100+ participants. Feedback was highly positive.",
        highlights: ["AI/ML STTP", "100+ Participants", "Hands-on"],
        images: [],
        className: "md:col-span-1 lg:col-span-1"
    },
    {
        id: "guest_speaker_1",
        role: "Guest Speaker",
        org: "Cryptex",
        icon: <Mic size={24} className="text-vscode-purple" />,
        date: "2024",
        description: "Delivered a dedicated session on Foundational ML to 30 attendees. Shared detailed Colab notebooks and presentations.",
        highlights: ["Foundational ML", "30 Attendees"],
        images: [cryptex1],
        className: "md:col-span-2 lg:col-span-2"
    }
];

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden group bg-black shrink-0">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                    alt="leadership event"
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-vscode-blue"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-vscode-blue"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(idx);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-vscode-blue w-6' : 'bg-white/50 w-1.5 hover:bg-white'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const BentoCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`flex flex-col bg-surface/30 backdrop-blur-md border border-border/50 rounded-3xl overflow-hidden hover:border-vscode-blue/30 transition-all duration-300 group ${item.className}`}
        >
            <ImageCarousel images={item.images} />

            <div className={`p-6 sm:p-8 flex flex-col flex-1 ${!item.images || item.images.length === 0 ? 'justify-center' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 group-hover:text-vscode-blue transition-colors">{item.role}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm font-mono">
                            <span className="text-vscode-blue">{item.org}</span>
                            <span className="w-1 h-1 rounded-full bg-border hidden sm:block"></span>
                            <span className="text-secondary/60">{item.date}</span>
                        </div>
                    </div>
                    <div className="p-3 bg-surfaceLight border border-border/50 rounded-xl shrink-0">
                        {item.icon}
                    </div>
                </div>

                <p className="text-secondary/80 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {item.highlights.map((highlight, i) => (
                        <span key={i} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-background border border-border/50 text-secondary">
                            {highlight}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Leadership = () => {
    return (
        <section id="leadership" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vscode-blue/10 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vscode-purple/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16 sm:mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surfaceLight border border-border/50 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-vscode-blue animate-pulse"></span>
                        <span className="text-sm font-mono text-secondary">06 // Leadership</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Community & Speaking
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary/80 max-w-2xl text-base sm:text-lg"
                    >
                        Initiatives in managing tech communities, speaking at events, and mentoring student developers to foster growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {leadershipData.map((item, index) => (
                        <BentoCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
