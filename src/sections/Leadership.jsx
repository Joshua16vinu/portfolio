import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import aidl1 from "../assets/leadership/aidl_1.jpg";
import aidl2 from "../assets/leadership/aidl_2.jpg";
import aidl3 from "../assets/leadership/aidl_3.jpg";
import aidl4 from "../assets/leadership/aidl_4.jpg";
import techCoord1 from "../assets/leadership/tech_coord_1.jpg";

const leadershipItems = [
    {
        id: "head-aidl",
        role: "Head / Chairperson",
        organization: "AI & Deep Learning Club (FCRIT)",
        period: "2023 – 2024",
        description: "Led the student technical committee, conceptualizing and executing 20+ specialized workshops, hackathons, and webinars on Machine Learning, Deep Learning, and Computer Vision for over 250+ active participants. Spearheaded HackQuinox 2025 and hands-on Python-to-ML bootcamps.",
        highlights: ["20+ Workshops & Hackathons", "250+ Participants", "Bootcamp Series"],
        images: [aidl1, aidl2, aidl3, aidl4]
    },
    {
        id: "speaker-it",
        role: "Guest Speaker – AI & ML in Finance",
        organization: "Dept. of Information Technology, FCRIT",
        period: "2025",
        description: "Delivered a dedicated Short Term Training Program (STTP) session covering practical AI/ML deployment in financial modeling and algorithmic trading strategies for an audience of 100+ students and faculty.",
        highlights: ["AI in Finance STTP", "100+ Audience", "Quantitative Concepts"],
        images: [techCoord1]
    },
    {
        id: "speaker-cryptex",
        role: "Technical Speaker",
        organization: "Cryptex 2024",
        period: "2024",
        description: "Conducted an intensive, hands-on workshop on Foundational Machine Learning and Neural Networks for 30+ students. Authored interactive Google Colab notebooks covering linear models, optimization landscapes, and evaluation metrics.",
        highlights: ["Hands-on ML Workshop", "Interactive Colab", "30+ Attendees"],
        images: [] // Cryptex trophy image removed per instruction
    }
];

const Leadership = () => {
    const [activeImgIndexes, setActiveImgIndexes] = useState({});

    const handleNextImg = (itemId, max) => {
        setActiveImgIndexes(prev => ({
            ...prev,
            [itemId]: ((prev[itemId] || 0) + 1) % max
        }));
    };

    const handlePrevImg = (itemId, max) => {
        setActiveImgIndexes(prev => ({
            ...prev,
            [itemId]: ((prev[itemId] || 0) === 0 ? max - 1 : (prev[itemId] || 0) - 1)
        }));
    };

    return (
        <section id="leadership" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[#dedbd2]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    
                    {/* Left Column */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                            08 // Community & Mentorship
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-sans leading-[1.08]">
                            Leadership & <br />
                            <span className="font-serif italic font-normal lowercase tracking-normal text-stone-800 text-3xl sm:text-4xl lg:text-[2.75rem]">
                                technical talks
                            </span>
                        </h2>
                        <p className="text-stone-600 text-sm leading-relaxed">
                            Leading student AI initiatives, conducting deep learning bootcamps, and speaking on quantitative financial modeling.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-7 space-y-6">
                        {leadershipItems.map((item) => {
                            const curIdx = activeImgIndexes[item.id] || 0;
                            return (
                                <div
                                    key={item.id}
                                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#dedbd2] shadow-sm space-y-4"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <div>
                                            <div className="text-xs font-mono text-stone-500">
                                                {item.organization} • {item.period}
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-stone-950 font-sans mt-0.5">
                                                {item.role}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                                        {item.description}
                                    </p>

                                    {item.images && item.images.length > 0 && (
                                        <div className="relative rounded-xl overflow-hidden border border-stone-200 aspect-video max-h-72 w-full bg-stone-100">
                                            <img
                                                src={item.images[curIdx]}
                                                alt={`${item.role}`}
                                                className="w-full h-full object-cover"
                                            />
                                            {item.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={() => handlePrevImg(item.id, item.images.length)}
                                                        className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 text-stone-900 shadow hover:bg-white cursor-pointer"
                                                    >
                                                        <ChevronLeft size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleNextImg(item.id, item.images.length)}
                                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 text-stone-900 shadow hover:bg-white cursor-pointer"
                                                    >
                                                        <ChevronRight size={16} />
                                                    </button>
                                                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
                                                        {item.images.map((_, dIdx) => (
                                                            <div
                                                                key={dIdx}
                                                                className={`h-1.5 rounded-full transition-all ${
                                                                    dIdx === curIdx ? 'w-4 bg-stone-900' : 'w-1.5 bg-white/70'
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {item.highlights.map((h, hIdx) => (
                                            <span
                                                key={hIdx}
                                                className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-mono text-[11px]"
                                            >
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Leadership;