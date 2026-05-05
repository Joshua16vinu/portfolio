import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Mic, Presentation, ShieldCheck } from "lucide-react";

const leadershipData = [
    {
        id: "chairperson",
        role: "Chairperson",
        org: "AIDL Club",
        icon: <Users size={22} className="text-vscode-blue" />,
        date: "2023 - 2024",
        description: "Led a community of 150+ members. Orchestrated the national level WebRush'24 Hackathon, mentored over 500 students, and curated the technical curriculum.",
        highlights: ["150+ Members", "WebRush'24 Hackathon", "Mentored 500+"],
        images: [
            // Example placeholder images - replace with actual paths (e.g. "/images/aidl-1.jpg")
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop", 
            "https://images.unsplash.com/photo-1515169065258-16e534f3c7b2?q=80&w=2070&auto=format&fit=crop"
        ]
    },
    {
        id: "tech_coord",
        role: "Tech Coordinator",
        org: "FCRIT",
        icon: <ShieldCheck size={22} className="text-vscode-teal" />,
        date: "2023 - 2024",
        description: "Managed the digital presence and social growth. Conducted hands-on training workshops focusing on Machine Learning and Deep Learning.",
        highlights: ["ML Training", "Digital Growth", "Workshops"],
        images: [
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
        ]
    },
    {
        id: "guest_speaker_1",
        role: "Guest Speaker",
        org: "Cryptex'24",
        icon: <Mic size={22} className="text-vscode-purple" />,
        date: "2024",
        description: "Delivered a dedicated session on Foundational ML to 30 attendees. Shared detailed Colab notebooks and presentations, receiving a 4.8/5.0 feedback.",
        highlights: ["Foundational ML", "30 Attendees", "4.8/5.0 Rating"],
        images: [
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop"
        ]
    },
    {
        id: "guest_speaker_2",
        role: "Guest Speaker",
        org: "Dept of IT",
        icon: <Presentation size={22} className="text-vscode-orange" />,
        date: "2023",
        description: "Conducted a Short Term Training Program focused on practical AI/ML applications for an audience of 100+ participants. Feedback was highly positive.",
        highlights: ["AI/ML STTP", "100+ Participants", "Hands-on"],
        images: [] // Leave empty if no images available
    }
];

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <div className="relative w-full h-48 sm:h-56 overflow-hidden group bg-surfaceLight border-b border-border/50">
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
            
            {/* Overlay Gradient for readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

            {images.length > 1 && (
                <>
                    <button 
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-vscode-blue"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button 
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-vscode-blue"
                    >
                        <ChevronRight size={18} />
                    </button>
                    
                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {images.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-vscode-blue w-3' : 'bg-white/50'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const LeadershipCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col bg-surface/30 backdrop-blur-sm border border-border/60 hover:border-vscode-blue/30 rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(86,156,214,0.1)] hover:-translate-y-1 transition-all duration-300"
        >
            <ImageCarousel images={item.images} />
            
            <div className={`p-6 md:p-8 flex-1 flex flex-col ${(!item.images || item.images.length === 0) ? 'pt-8' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{item.role}</h3>
                        <div className="flex items-center gap-2">
                            <p className="text-vscode-blue text-sm font-mono">{item.org}</p>
                            <span className="w-1 h-1 rounded-full bg-border"></span>
                            <span className="text-secondary/60 text-xs font-mono">{item.date}</span>
                        </div>
                    </div>
                    <div className="p-2 bg-surfaceLight border border-border/50 rounded-lg">
                        {item.icon}
                    </div>
                </div>
                
                <p className="text-secondary/80 text-sm leading-relaxed flex-1 mb-6">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {item.highlights.map((highlight, i) => (
                        <span key={i} className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-surfaceLight border border-border/50 text-secondary hover:text-primary transition-colors">
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
        <section id="leadership" className="py-32 px-6 relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-vscode-blue/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-vscode-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-mono text-vscode-blue uppercase tracking-widest mb-4"
                    >
                        06 // Leadership
                    </motion.h2>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-primary mb-6"
                    >
                        Community & Speaking
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary max-w-2xl text-lg"
                    >
                        Initiatives in managing tech communities, speaking at events, and mentoring student developers.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {leadershipData.map((item, index) => (
                        <LeadershipCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
