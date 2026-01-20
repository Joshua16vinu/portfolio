import { motion } from "framer-motion";
import { Award, Trophy, BookOpen, Star, Download, CheckCircle, Search, Filter } from "lucide-react";

const achievements = [
    {
        id: "academic",
        name: "Academic Excellence",
        publisher: "University of Mumbai",
        icon: <Award size={24} className="text-vscode-blue" />,
        version: "2024",
        status: "Rank #1",
        description: "Secured First Rank in TE Computer Engineering with an outstanding 9.69 CGPA.",
        stars: 5,
        tags: ["Education", "Engineering"]
    },
    {
        id: "hackathon",
        name: "Hacktivate Solution",
        publisher: "Hacktivate 2024",
        icon: <Trophy size={24} className="text-vscode-purple" />,
        version: "2024",
        status: "Winner",
        description: "Secured second Runner-up for AI security solution developed during a competitive 24-hour hackathon.",
        stars: 5,
        tags: ["AI", "Security"]
    },
    {
        id: "codemania",
        name: "CodeMania Contest",
        publisher: "Computer Society of India",
        icon: <Trophy size={24} className="text-vscode-orange" />,
        version: "2023",
        status: "Top 3",
        description: "Secured 3rd place in a state-level competitive programming and algorithm optimization challenge.",
        stars: 4,
        tags: ["Algorithms", "Logic"]
    },
    {
        id: "internship",
        name: "FinTech Agent Core",
        publisher: "Infinity Pool",
        icon: <Award size={24} className="text-vscode-teal" />,
        version: "2023",
        status: "Distinction",
        description: "Received excellence award for architectural contributions to Financial AI Agents & Backtesting Engine.",
        stars: 5,
        tags: ["Professional", "Finance"]
    },
    {
        id: "research",
        name: "Fraud Detection Module",
        publisher: "ICNTE Conference",
        icon: <BookOpen size={24} className="text-vscode-green" />,
        version: "2023",
        status: "Published",
        description: "Research paper on 'Reverse Auction System Security' accepted for international publication.",
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
            className="group flex flex-col sm:flex-row gap-3 md:gap-4 p-3 md:p-4 hover:bg-white/5 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-black/20"
        >
            {/* Icon Block */}
            <div className="flex-shrink-0 w-12 h-12 bg-surfaceLight border border-border rounded flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform mb-2 sm:mb-0">
                {item.icon}
            </div>

            {/* Details Block */}
            <div className="flex-1 min-w-0">
                <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                        <h4 className="font-bold text-primary text-sm flex flex-wrap items-center gap-2">
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
                    {/* Status Badge */}
                    <div className="flex flex-col items-end gap-1">
                        <span className="px-2 py-0.5 bg-vscode-blue/10 border border-vscode-blue/20 text-vscode-blue text-[10px] rounded font-medium flex items-center gap-1.5">
                            {item.status}
                        </span>
                    </div>
                </div>

                <p className="text-xs text-secondary/80 mt-2 line-clamp-2 font-sans leading-relaxed">
                    {item.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={10}
                                className={i < item.stars ? "text-vscode-yellow fill-vscode-yellow" : "text-gray-600"}
                            />
                        ))}
                    </div>

                    <div className="flex gap-1 ml-auto">
                        {item.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-secondary/60 whitespace-nowrap">
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
