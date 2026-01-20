import { motion } from "framer-motion";
import { GitCommit, GitBranch, GitPullRequest, GitMerge, Clock, Hash } from "lucide-react";

const gitHistory = [
    {
        id: "c0mm1t_4",
        type: "work",
        branch: "feature/internship",
        message: "Joined Infinity Pool Finnotech as Project Intern",
        author: "Infinity Pool Finnotech",
        date: "July 2024 - Present",
        hash: "7f3a21b",
        stats: "+2,400 additions",
        details: [
            "Built AI-powered financial assistant with agentic workflows.",
            "Integrated Kite/yFinance APIs for real-time tracking.",
            "Implemented multi-step agents using LangChain."
        ]
    },
    {
        id: "c0mm1t_3",
        type: "work",
        branch: "fix/web-performance",
        message: "Revamped FCRIT Website Backend",
        author: "FCRIT",
        date: "Jan 2025 - June 2025",
        hash: "3b2e91c",
        stats: "+1,200 additions, -400 deletions",
        details: [
            "Reduced load time by 40% via Node.js microservices.",
            "Developed REST APIs with RBAC and Caching."
        ]
    },
    {
        id: "c0mm1t_2",
        type: "education",
        branch: "chore/education",
        message: "Completed Third Year Engineering",
        author: "FCRIT, Mumbai",
        date: "2022 - 2026",
        hash: "1a8d4e2",
        stats: "CGPA: 9.69",
        details: [
            "Major: Computer Engineering",
            "Achievement: First Rank in Department"
        ]
    }
];

const GitCommitNode = ({ item, index, isLast }) => {
    return (
        <div className="flex gap-4 relative group">
            {/* Git Graph Visuals */}
            <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full border-2 z-10 bg-background group-hover:scale-125 transition-transform duration-300 ${item.type === 'work' ? 'border-vscode-blue bg-vscode-blue' : 'border-vscode-purple bg-vscode-purple'}`} />
                {!isLast && (
                    <div className="w-0.5 flex-1 bg-border group-hover:bg-vscode-blue/50 transition-colors my-1" />
                )}
            </div>

            {/* Commit Content */}
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex-1 pb-12"
            >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    {/* Meta Info Line */}
                    <div className="flex items-center gap-3 text-xs font-mono text-secondary/60">
                        <span className="flex items-center gap-1 text-vscode-orange">
                            <Hash size={12} /> {item.hash}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={12} /> {item.date}
                        </span>
                    </div>

                    {/* Branch Badge */}
                    <div className={`flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full border w-fit ${item.type === 'work' ? 'bg-vscode-blue/10 text-vscode-blue border-vscode-blue/20' : 'bg-vscode-purple/10 text-vscode-purple border-vscode-purple/20'}`}>
                        <GitBranch size={10} />
                        {item.branch}
                    </div>
                </div>

                {/* Commit Message (Role) */}
                <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-vscode-blue transition-colors font-mono">
                    {item.message}
                </h3>

                {/* Author (Company) */}
                <div className="flex items-center gap-2 mb-4">
                    <img
                        src={`https://ui-avatars.com/api/?name=${item.author}&background=random&color=fff&size=20`}
                        alt="avatar"
                        className="w-5 h-5 rounded-full"
                    />
                    <span className="text-sm font-medium text-secondary hover:underline cursor-pointer">
                        {item.author}
                    </span>
                    <span className="text-xs text-vscode-green ml-2 opacity-80">
                        {item.stats}
                    </span>
                </div>

                {/* Diff / Details */}
                <div className="bg-surfaceLight border border-border rounded p-4 font-mono text-sm space-y-2">
                    {item.details.map((detail, i) => (
                        <div key={i} className="flex gap-3 text-secondary/80 hover:text-primary transition-colors hover:bg-white/5 p-1 rounded -ml-1">
                            <span className="text-vscode-green select-none">+</span>
                            <span className="leading-relaxed">{detail}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-6">
            <div className="container-width grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-mono text-secondary sticky top-24 uppercase tracking-widest mb-6">
                        02 // Experience
                    </h2>

                    <div className="sticky top-40 hidden md:block">
                        <div className="p-4 border border-border bg-surfaceLight/30 rounded-lg">
                            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-4">
                                <GitBranch size={16} className="text-vscode-blue" />
                                <span>Timeline</span>
                            </div>
                            <ul className="space-y-2 text-xs font-mono text-secondary">
                                <li className="flex justify-between items-center group cursor-pointer hover:text-vscode-blue">
                                    <span className="flex items-center gap-2">
                                        <GitCommit size={12} /> Main Career
                                    </span>
                                    <span className="text-[10px] opacity-50">active</span>
                                </li>
                                <li className="flex justify-between items-center group cursor-pointer hover:text-vscode-purple">
                                    <span className="flex items-center gap-2">
                                        <GitPullRequest size={12} /> Internships
                                    </span>
                                    <span className="text-[10px] opacity-50">2 merged</span>
                                </li>
                                <li className="flex justify-between items-center group cursor-pointer hover:text-vscode-orange">
                                    <span className="flex items-center gap-2">
                                        <GitMerge size={12} /> Education
                                    </span>
                                    <span className="text-[10px] opacity-50">1 merged</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-8">
                    <div className="bg-surface border border-border rounded-xl p-4 md:p-8">
                        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                            <div className="flex items-center gap-2 text-sm text-secondary">
                                <GitCommit size={16} />
                                <span>Commits ({gitHistory.length})</span>
                            </div>
                            <div className="text-xs font-mono text-secondary/50">
                                Branch: <span className="text-vscode-blue">main</span>
                            </div>
                        </div>

                        <div className="relative pl-2">
                            {/* Connector Line Base - Hidden as individual lines handle it */}
                            {gitHistory.map((item, index) => (
                                <GitCommitNode
                                    key={index}
                                    item={item}
                                    index={index}
                                    isLast={index === gitHistory.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
