import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, FileCode, FileJson, FileCog, X } from "lucide-react";
import { useState } from "react";

const leadershipData = [
    {
        id: "chairperson.tsx",
        role: "Chairperson",
        org: "AIDL Club",
        icon: <FileCode size={14} className="text-blue-400" />,
        fileType: "react",
        context: "Leading 150+ members",
        code: `const Chairperson = {
    organization: "AIDL Club",
    scale: "150+ Members",
    highlight: "WebRush'24 Hackathon",
    impact: [
        "Orchestrated National Event",
        "Mentored 500+ Students",
        "Curated Tech Curriculum"
    ],
    status: "ACTIVE"
};`
    },
    {
        id: "tech_coord.config",
        role: "Tech_Coordinator",
        org: "FCRIT",
        icon: <FileCog size={14} className="text-yellow-400" />,
        fileType: "config",
        context: "Digital presence manager",
        code: `module.exports = {
    role: "Tech_Coordinator",
    focus: ["ML", "Deep Learning"],
    deliverables: {
        workshops: "Hands-on Training",
        digital: "Social Presence Growth"
    },
    execute: function() {
        return "Knowledge Transfer";
    }
};`
    },
    {
        id: "speaker_log.json",
        role: "Guest_Speaker",
        org: "Cryptex'24",
        icon: <FileJson size={14} className="text-purple-400" />,
        fileType: "json",
        context: "AI concepts trainer",
        code: `{
    "event": "Cryptex_2024",
    "topic": "Foundational ML",
    "audience_size": 30,
    "feedback": "4.8/5.0",
    "materials": [
        "Slides.pdf",
        "Colab_Notebooks"
    ]
}`
    }
];

const SyntaxHighlighter = ({ code }) => {
    // Simple regex-based highlighting for a cleaner look
    const lines = code.split('\n');
    return (
        <div className="font-mono text-xs md:text-sm leading-6">
            {lines.map((line, i) => (
                <div key={i} className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-8 text-[10px] md:text-xs pt-[2px]">{i + 1}</span>
                    <span className="table-cell whitespace-pre-wrap text-gray-300">
                        {line.split(/(":?[\w\s\d.'-]+"?)|(\/\/.*)/g).map((token, j) => {
                            if (!token) return null;
                            if (token.startsWith('"')) return <span key={j} className="text-[#ce9178]">{token}</span>; // Strings
                            if (token.match(/\b(const|let|var|function|return|module|exports)\b/)) return <span key={j} className="text-[#569cd6]">{token}</span>; // Keywords
                            if (token.endsWith(':')) return <span key={j} className="text-[#9cdcfe]">{token}</span>; // Keys
                            if (token.match(/[{}\[\],;]/)) return <span key={j} className="text-[#ffd700]">{token}</span>; // Punctuation
                            return token;
                        })}
                    </span>
                </div>
            ))}
        </div>
    );
};

const SidebarItem = ({ item, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs transition-colors ${isActive ? "bg-[#37373d] text-white" : "text-secondary/70 hover:bg-[#2a2d2e] hover:text-white"}`}
    >
        {item.icon}
        <span className="truncate">{item.id}</span>
    </button>
);

const Tab = ({ item, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 text-xs border-r border-[#1e1e1e] min-w-[120px] transition-colors cursor-pointer ${isActive ? "bg-[#1e1e1e] text-white border-t-2 border-t-vscode-blue" : "bg-[#2d2d2d] text-secondary/60 hover:bg-[#2a2d2e]"}`}
    >
        {item.icon}
        <span className="truncate">{item.id}</span>
        {isActive && <X size={12} className="ml-auto opacity-50 hover:text-white" />}
    </button>
);

const Leadership = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="leadership" className="py-24 px-6 relative">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-vscode-blue/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container-width">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Header / Context */}
                    <div className="lg:col-span-4 sticky top-32">
                        <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-4">
                            06 // Leadership
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Verified <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vscode-blue to-vscode-teal">
                                Contributions
                            </span>
                        </h3>
                        <p className="text-secondary/70 leading-relaxed text-sm">
                            I believe in open knowledge sharing. Here's a log of my initiatives in managing tech communities and mentoring student developers.
                        </p>
                    </div>

                    {/* The IDE Workspace */}
                    <div className="lg:col-span-8">
                        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-[#333] shadow-2xl flex flex-col md:flex-row min-h-[400px]">

                            {/* Sidebar - Explorer (Hidden on mobile) */}
                            <div className="hidden md:flex flex-col w-48 bg-[#252526] border-r border-[#1e1e1e]">
                                <div className="px-4 py-3 text-xs font-bold text-secondary/50 uppercase tracking-wider flex items-center justify-between">
                                    Explorer <span className="text-[10px]">...</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="px-2 py-1 text-secondary/70 flex items-center gap-1 text-xs font-bold">
                                        <ChevronRight size={12} className="rotate-90" /> POR_2024
                                    </div>
                                    <div className="pl-2">
                                        {leadershipData.map((item, index) => (
                                            <SidebarItem
                                                key={item.id}
                                                item={item}
                                                isActive={activeTab === index}
                                                onClick={() => setActiveTab(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Main Editor Area */}
                            <div className="flex-1 flex flex-col min-w-0">
                                {/* Tabs */}
                                <div className="flex overflow-x-auto scrollbar-hide bg-[#252526]">
                                    {leadershipData.map((item, index) => (
                                        <Tab
                                            key={item.id}
                                            item={item}
                                            isActive={activeTab === index}
                                            onClick={() => setActiveTab(index)}
                                        />
                                    ))}
                                </div>

                                {/* Breadcrumbs */}
                                <div className="px-4 py-2 border-b border-[#333] flex items-center gap-2 text-xs text-secondary/50 font-mono">
                                    <span>src</span>
                                    <ChevronRight size={10} />
                                    <span>leadership</span>
                                    <ChevronRight size={10} />
                                    <span className="text-white">{leadershipData[activeTab].role}</span>
                                </div>

                                {/* Code Area */}
                                <div className="flex-1 p-6 relative overflow-auto scrollbar-hide bg-[#1e1e1e]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <SyntaxHighlighter code={leadershipData[activeTab].code} />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;
