import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight, ExternalLink, Github, ChevronRight, Folder, Code, Cpu, Database, Globe, X, Scan, ChevronLeft, Maximize2 } from "lucide-react";

// Placeholder images logic can be added later, for now we rely on the clean "No Media" UI
const projects = [
    {
        id: "p01",
        name: "financial-assistant-agent",
        version: "v2.4.0",
        status: "DEPLOYED",
        type: "AI_AGENT",
        description: "Autonomous AI agent designed for high-frequency portfolio management and market analysis. Utilizes separate memory streams for macro-economic data and technical indicators.",
        longDescription: "This system represents a shift towards autonomous financial decision-making. By leveraging a multi-agent architecture, the system separates concerns between data acquisition, sentiment analysis (news/social), and technical chart pattern recognition. The core agent synthesizes these inputs using a custom-tuned LLM to output probability-weighted trade signals.",
        features: [
            "Multi-Agent Orchestration: dedicated sub-agents for news, charts, and risk.",
            "RAG Pipeline: Contextualizes current market conditions with historical analogies.",
            "Self-Correction: Post-trade analysis loop to refine strategy weights.",
            "Latency: Sub-500ms decision pipeline for real-time market adaptation."
        ],
        stack: ["python", "langchain", "openai", "pinecone", "fastapi", "docker"],
        links: { live: "#", repo: "#" },
        color: "text-vscode-green border-vscode-green/50",
        icon: <Cpu size={24} />
    },
    {
        id: "p02",
        name: "signal-agnostic-backtesting",
        version: "v1.1.2",
        status: "STABLE",
        type: "FINTECH",
        description: "Modular market data evaluation framework capable of stress-testing strategies across varying asset classes without code modification.",
        longDescription: "A robust backtesting engine built to eliminate look-ahead bias and overfitting. It abstracts the strategy logic from the execution engine, allowing traders to swap 'Signal Generators' and 'Risk Modules' plug-and-play. It supports tick-level data replay and simulates realistic exchange latencies and slippage models.",
        features: [
            "Event-Driven Architecture: Simulates order book dynamics accurately.",
            "Walk-Forward Optimization: Prevents curve fitting by rolling calibration windows.",
            "Distributed Computing: Parallelizes tests across CPU cores for velocity.",
            "Reporting: Generates institutional-grade tear sheets (Sharpe, Sortino, Drawdown)."
        ],
        stack: ["python", "pandas", "numpy", "matplotlib", "redis"],
        links: { live: "#", repo: "#" },
        color: "text-vscode-orange border-vscode-orange/50",
        icon: <Database size={24} />
    },
    {
        id: "p03",
        name: "ai-personalized-learning",
        version: "v3.0.0-beta",
        status: "ACTIVE",
        type: "EDUTECH",
        description: "Adaptive tutoring system using Gemini API to create unique learning paths. Visualizes concept retention with dynamic knowledge graphs.",
        longDescription: "Moving beyond static video courses, this platform uses Generative AI to act as a 1:1 Socratic tutor. It assesses user gaps in real-time and generates custom quizzes, explanations, and analogies tailored to the user's background. The frontend features a dynamic 'Skill Tree' that grows as the user masters concepts.",
        features: [
            "Knowledge Tracing: Bayesian modeling of student mastery levels.",
            "Generative Content: On-the-fly creation of quizzes and examples.",
            "Real-time Feedback: Instant code analysis and debugging assistance.",
            "Voice Mode: Conversational practice for language or oral exams."
        ],
        stack: ["react", "firebase", "gemini-1.5-pro", "flask", "d3.js"],
        links: { live: "#", repo: "#" },
        color: "text-vscode-blue border-vscode-blue/50",
        icon: <Globe size={24} />
    },
    {
        id: "p04",
        name: "pokemongo-event-platform",
        version: "v1.0.5",
        status: "GOLIVE",
        type: "SOCIAL",
        description: "Geo-location event discovery service. Integrated Google OAuth & OpenStreetMap for real-time community raids.",
        longDescription: "Designed for community coordination, this platform allows players to signal participation in local events. It solves the 'empty lobby' problem by aggregating user intent on a geospatial map. Privacy is handled via fuzzy location broadcasting until a quorum is reached.",
        features: [
            "Geospatial Indexing: Efficient radial search for nearby events.",
            "WebSockets: Real-time lobby counting and chat coordination.",
            "OAuth Integration: Trusted identity verification to prevent spam.",
            "PWA Support: Installable on mobile for field usage."
        ],
        stack: ["node.js", "express", "leaflet", "mongodb", "socket.io"],
        links: { live: "#", repo: "#" },
        color: "text-vscode-yellow border-vscode-yellow/50",
        icon: <ExternalLink size={24} />
    },
    {
        id: "p05",
        name: "secretsync-e2ee-chat",
        version: "v1.0.0",
        status: "SECURE",
        type: "SECURITY",
        description: "Zero-knowledge messaging platform. Implements Diffie-Hellman key exchange, AES-256 encryption, and ephemeral messaging.",
        longDescription: "A security-first messaging application where the server knows nothing. All encryption happens client-side. It implements the Double Ratchet algorithm to ensure future secrecy even if a key is compromised. Messages are stored only in volatile memory.",
        features: [
            "E2E Encryption: AES-256-GCM for payload protection.",
            "Double Ratchet: Forward secrecy for every single message.",
            "Ephemeral Keys: Identity keys rotate automatically.",
            "Steganography: Optional hiding of encrypted blobs in image data."
        ],
        stack: ["typescript", "react", "webcrypto-api", "signal-protocol"],
        links: { live: "#", repo: "#" },
        color: "text-vscode-purple border-vscode-purple/50",
        icon: <Code size={24} />
    }
];

const TerminalEntry = ({ project, index, onOpenOverview }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-24 last:mb-0 font-mono text-sm group"
        >
            {/* Project Header Line */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-vscode-green shrink-0">➜</span>
                <span className="text-vscode-blue font-bold break-all sm:break-normal">{project.name}</span>
                <span className="text-secondary/50 text-xs shrink-0">@{project.version}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded border ${project.color ? project.color : "text-vscode-green border-vscode-green/50"} ml-auto md:ml-2 shrink-0`}>
                    {project.status}
                </span>
            </div>

            {/* Config Block */}
            <div className="pl-4 md:pl-6 border-l border-border/50 space-y-1">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-secondary/80">
                    <span className="text-vscode-purple min-w-[60px] sm:min-w-[80px] shrink-0">desc</span>
                    <span className="line-clamp-2 sm:line-clamp-1 text-xs sm:text-sm">{project.description}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-secondary/80">
                    <span className="text-vscode-purple min-w-[60px] sm:min-w-[80px] shrink-0">stack</span>
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                        {project.stack.slice(0, 4).map((tech) => (
                            <span key={tech} className="text-vscode-orange">
                                "{tech}"
                            </span>
                        ))}
                        {project.stack.length > 4 && <span className="text-secondary/50">...</span>}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-secondary/80 pt-1">
                    <span className="text-vscode-purple min-w-[60px] sm:min-w-[80px] shrink-0">action</span>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                        <button
                            onClick={() => onOpenOverview(project)}
                            className="flex items-center gap-1 text-vscode-blue hover:text-vscode-blue/80 hover:underline transition-colors cursor-pointer"
                        >
                            [<Maximize2 size={12} /> view_details]
                        </button>
                        <a href={project.links.repo} className="flex items-center gap-1 hover:text-primary hover:underline transition-colors opacity-50 hover:opacity-100">
                            source
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;
    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                onClick={onClose}
            >
                <div
                    className="w-full max-w-5xl bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-4 right-4 z-[99999] p-2 bg-black/60 rounded-full text-white/50 hover:text-white transition-colors cursor-pointer border border-white/10">
                        <X size={20} />
                    </button>

                    {/* Left: Preview/Icon Area */}
                    <div className="w-full md:w-5/12 bg-black/50 relative flex items-center justify-center border-r border-white/5 overflow-hidden group min-h-[200px] md:min-h-full">
                        <div className={`absolute inset-0 opacity-10 bg-gradient-to-br from-transparent to-${project.color.split('-')[2]}-500`} />

                        {/* Animated Code Pattern Background */}
                        <div className="absolute inset-0 opacity-5 font-mono text-[8px] p-4 overflow-hidden pointer-events-none whitespace-pre-wrap select-none">
                            {Array(20).fill("if (init) { allow_access = true; // SYSTEM }").join('\n')}
                        </div>

                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <div className="p-6 bg-surface border border-white/10 rounded-2xl shadow-xl scale-150">
                                {project.icon}
                            </div>
                            <div className="text-center">
                                <h4 className="text-white font-mono text-lg">{project.id.toUpperCase()}</h4>
                                <span className={`text-xs ${project.color.split(' ')[0]}`}>{project.status}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="w-full md:w-7/12 p-5 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <Folder size={16} className="text-secondary" />
                                <span className="text-xs font-mono text-secondary/50">/projects/{project.name}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">{project.name}</h2>

                            <div className="flex gap-4">
                                <a href={project.links.repo} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-xs font-mono transition-colors">
                                    <Github size={14} /> SOURCE_CODE
                                </a>
                                <a href={project.links.live} className="flex items-center gap-2 px-4 py-2 bg-vscode-blue/10 hover:bg-vscode-blue/20 rounded border border-vscode-blue/20 text-vscode-blue text-xs font-mono transition-colors">
                                    <ExternalLink size={14} /> LIVE_DEMO
                                </a>
                            </div>
                        </div>

                        <div className="space-y-8 flex-grow">
                            <div>
                                <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                                    <span className="text-vscode-blue">//</span> Executive Summary
                                </h3>
                                <p className="text-secondary/80 text-sm leading-relaxed whitespace-pre-line">
                                    {project.longDescription || project.description}
                                </p>
                            </div>

                            {project.features && (
                                <div>
                                    <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                                        <span className="text-vscode-green">//</span> Key Features
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-secondary/70">
                                                <span className="text-vscode-green mt-1">➜</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div>
                                <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                                    <span className="text-vscode-purple">//</span> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded text-xs text-vscode-orange font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-6 border-t border-white/5 flex justify-between text-xs font-mono text-secondary/40">
                            <span>VERSION: {project.version}</span>
                            <span>LAST_UPDATE: 2024.11.02</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-32 px-6">
            <div className="container-width grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Header Section */}
                <div className="md:col-span-4">
                    <h2 className="text-sm font-mono text-secondary sticky top-24 uppercase tracking-widest mb-4">
                        03 // Projects
                    </h2>
                    <div className="sticky top-40 hidden md:block">
                        <div className="p-4 bg-surface border border-border rounded-lg font-mono text-xs shadow-xl">
                            <div className="flex items-center gap-2 mb-2 border-b border-border pb-2 text-secondary">
                                <Terminal size={12} />
                                <span>bash — 80x24</span>
                            </div>
                            <div className="space-y-1 text-secondary/70">
                                <p><span className="text-vscode-green">user@portfolio</span>:<span className="text-vscode-blue">~</span>$ list-projects --all</p>
                                <p>Loading modules...</p>
                                <p className="text-vscode-green">Done.</p>
                                <p className="mt-2 text-primary">Found 5 shipped projects matching criteria.</p>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-secondary/60 font-mono">
                            // Executing listing of selected works.
                            <br />// Use links to navigate.
                        </p>
                    </div>
                </div>

                {/* Main Terminal Window */}
                <div className="md:col-span-8">
                    <div className="bg-surfaceLight/20 border border-border rounded-lg p-4 md:p-6 font-mono text-xs md:text-sm relative overflow-hidden md:overflow-x-auto min-h-[500px] md:min-h-[600px] flex flex-col">
                        {/* Terminal Header */}
                        <div className="flex gap-2 mb-6 opacity-30 shrink-0">
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
                        </div>

                        {/* CLI Output Stream */}
                        <div className="space-y-2 overflow-x-auto pb-4 flex-grow">
                            <div className="text-secondary/50 mb-6 whitespace-nowrap">
                                <span className="text-vscode-green">➜</span> <span className="text-vscode-blue">~</span> list-projects --shipped --sort=date --verbose
                            </div>

                            {projects.map((project, index) => (
                                <TerminalEntry
                                    key={index}
                                    project={project}
                                    index={index}
                                    onOpenOverview={setSelectedProject}
                                />
                            ))}

                            {/* Prompt at bottom */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-2 mt-8 pt-4 border-t border-border/30"
                            >
                                <span className="text-vscode-green">➜</span>
                                <span className="text-vscode-blue">~</span>
                                <span className="w-2.5 h-4 bg-secondary/50 animate-pulse block" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
};

export default Projects;
