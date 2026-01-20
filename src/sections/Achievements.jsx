import { motion } from "framer-motion";
import { Award, Trophy, BookOpen, Star, Download, CheckCircle, Search, Filter } from "lucide-react";

const achievements = [
    {
        id: "aca.rank.v1",
        name: "Academic_Excellence",
        publisher: "University_of_Mumbai",
        icon: <Award size={24} className="text-vscode-blue" />,
        version: "v3.1.0",
        downloads: "Rank #1",
        description: "Secured First Rank in TE Computer Engineering (9.69 CGPA).",
        stars: 5,
        tags: ["Education", "Engineering"]
    },
    {
        id: "hack.security.ai",
        name: "Hacktivate_Solution",
        publisher: "Hacktivate_2024",
        icon: <Trophy size={24} className="text-vscode-purple" />,
        version: "v2.0.0",
        downloads: "2nd Runner-Up",
        description: "AI-driven security solution developed during 24h hackathon.",
        stars: 5,
        tags: ["AI", "Security"]
    },
    {
        id: "algo.codemania",
        name: "CodeMania_Algo",
        publisher: "CSI_Tech_Fest",
        icon: <Trophy size={24} className="text-vscode-orange" />,
        version: "v1.5.2",
        downloads: "Top 3",
        description: "Competitive programming algorithm optimization challenge.",
        stars: 4,
        tags: ["Algorithms", "Cpp"]
    },
    {
        id: "exp.intern.fin",
        name: "FinTech_Agent_Core",
        publisher: "Infinity_Pool",
        icon: <Award size={24} className="text-vscode-teal" />,
        version: "v1.0.0",
        downloads: "Distinction",
        description: "Exemplary contributions to Financial AI Agent architecture.",
        stars: 5,
        tags: ["Professional", "Finance"]
    },
    {
        id: "res.paper.icnte",
        name: "Fraud_Detection_Module",
        publisher: "ICNTE_Conference",
        icon: <BookOpen size={24} className="text-vscode-green" />,
        version: "v0.9.beta",
        downloads: "Accepted",
        description: "Research paper on Reverse Auction System security.",
        stars: 4,
        tags: ["Research", "Publication"]
    }
];

const ExtensionCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex gap-3 md:gap-4 p-3 md:p-4 hover:bg-white/5 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-black/20"
        >
            {/* Icon Block */}
            <div className="w-12 h-12 bg-surfaceLight border border-border rounded flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                {item.icon}
            </div>

            {/* Details Block */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-bold text-primary text-sm flex items-center gap-2">
                            {item.name}
                            <span className="text-[10px] font-normal text-secondary bg-surface px-1.5 rounded border border-border">
                                {item.version}
                            </span>
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-vscode-blue mt-0.5">
                            <CheckCircle size={10} />
                            <span className="hover:underline">{item.publisher}</span>
                        </div>
                    </div>
                    {/* Install Button State */}
                    <div className="flex flex-col items-end gap-1">
                        <button className="px-3 py-1 bg-surfaceLight border border-border text-secondary text-xs rounded hover:bg-vscode-blue hover:text-white transition-colors flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-vscode-green"></span>
                            Verified
                        </button>
                    </div>
                </div>

                <p className="text-xs text-secondary/80 mt-2 line-clamp-2 font-sans leading-relaxed">
                    {item.description}
                </p>

                <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={10}
                                className={i < item.stars ? "text-vscode-yellow fill-vscode-yellow" : "text-gray-600"}
                            />
                        ))}
                        <span className="text-[10px] text-secondary ml-1">({Math.floor(Math.random() * 50) + 10})</span>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] text-secondary">
                        <Download size={10} />
                        <span>{item.downloads}</span>
                    </div>

                    <div className="flex gap-1 ml-auto">
                        {item.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-secondary/60">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-6">
            <div className="container-width grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {/* Sidebar / Filter Header */}
                <div className="md:col-span-4">
                    <h2 className="text-sm font-mono text-secondary sticky top-24 uppercase tracking-widest mb-6">
                        05 // Achievements
                    </h2>

                    <div className="sticky top-40 space-y-4">
                        <div className="p-4 bg-surfaceLight/50 border border-border rounded-lg space-y-3">
                            <div className="flex items-center justify-between text-xs text-secondary uppercase font-bold tracking-wider">
                                <span>Filter By</span>
                                <Filter size={12} />
                            </div>
                            <div className="space-y-1">
                                {["Academic", "Hackathon", "Research", "Verified"].map((filter, i) => (
                                    <div key={i} className={`text-xs px-2 py-1.5 rounded cursor-pointer transition-colors font-mono ${i === 3 ? "bg-vscode-blue/10 text-vscode-blue" : "text-secondary hover:bg-white/5"}`}>
                                        {filter}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main List */}
                <div className="md:col-span-8">
                    <div className="bg-surface border border-border rounded-lg overflow-hidden min-h-[500px]">
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-border bg-surfaceLight/30 flex justify-between items-center">
                            <span className="text-xs font-bold text-secondary uppercase tracking-wider">Honors Received (5)</span>
                            <span className="text-xs text-secondary/50 font-mono">Sort by: Relevance</span>
                        </div>

                        {/* List */}
                        <div className="divide-y divide-border/50">
                            {achievements.map((item, index) => (
                                <ExtensionCard key={index} item={item} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
