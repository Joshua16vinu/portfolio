import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight, ExternalLink, Github, ChevronRight, Folder, Code, Cpu, Database, Globe, X, Scan, ChevronLeft, Maximize2, Command } from "lucide-react";

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
        description: "Backtrader-powered engine accommodating multiple trading strategies with 15+ custom indicators.",
        longDescription: "Engineered a robust backtesting framework that accommodates multiple trading strategies through optimized event-driven execution. It features optimized data loaders with chunked OHLCV ingestion and memory-mapped datasets, eliminating look-ahead bias.",
        features: [
            "Performance: Improved backtest throughput by 35–40% via async caching.",
            "Versatility: Supports 15+ custom indicators and multi-timeframe simulations.",
            "Risk Analysis: Calculates Sharpe, max drawdown, and equity curves.",
            "Data Pipeline: Async loading with Selenium/Chartink integration."
        ],
        stack: ["python", "backtrader", "pandas", "numpy", "selenium", "redis"],
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
        name: "real-time-location-events",
        version: "v1.0.5",
        status: "GOLIVE",
        type: "SOCIAL",
        description: "Real-time event sharing system with geolocation tracking and async media uploads.",
        longDescription: "A location-based platform designed for community coordination. It utilizes OpenStreetMap and Leaflet for rendering, with a backend optimized for low-latency updates (sub-300ms) using Firestore real-time listeners and cached POI search.",
        features: [
            "Low Latency: Map update latency reduced to under 300ms.",
            "Geolocation: Real-time tracking with OpenStreetMap/Leaflet.",
            "Security: Google OAuth and secure Node.js APIs.",
            "Performance: Consistent sub-100ms read/write operations."
        ],
        stack: ["react", "node.js", "firebase", "leaflet", "openstreetmap"],
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

const ProjectCard = ({ project, index, onOpenOverview }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`
                group relative flex flex-col justify-between
                bg-[#0d1117]/80 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden
                hover:border-vscode-blue/50 hover:shadow-[0_0_30px_rgba(86,156,214,0.1)]
                transition-all duration-300 min-h-[320px]
            `}
        >
            {/* Top Bar (Status) */}
            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-md bg-white/5 ${project.color.split(' ')[0]}`}>
                        {project.icon}
                    </div>
                    <span className="text-xs font-mono text-secondary/60 uppercase tracking-wider">
                        {project.type}
                    </span>
                </div>
                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono border ${project.color}`}>
                    <span className="relative flex h-1.5 w-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.color.split(' ')[0].replace('text-', 'bg-')}`}></span>
                        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${project.color.split(' ')[0].replace('text-', 'bg-')}`}></span>
                    </span>
                    {project.status}
                </div>
            </div>

            {/* Main Content */}
            <div className="p-5 flex-grow flex flex-col relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-vscode-blue transition-colors">
                    {project.name}
                </h3>
                <p className="text-secondary/70 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack Preview (Limited) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-[#1e1e1e] border border-white/5 rounded text-[10px] text-secondary font-mono">
                            {tech}
                        </span>
                    ))}
                    {project.stack.length > 3 && (
                        <span className="px-2 py-1 bg-[#1e1e1e] border border-white/5 rounded text-[10px] text-secondary font-mono">
                            +{project.stack.length - 3}
                        </span>
                    )}
                </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 border-t border-white/5 bg-white/[0.02] flex items-center justify-between gap-3">
                <button
                    onClick={() => onOpenOverview(project)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-vscode-blue/10 text-vscode-blue text-xs font-medium border border-vscode-blue/20 hover:bg-vscode-blue/20 transition-all"
                >
                    <Maximize2 size={14} /> View Details
                </button>
                <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-secondary hover:text-white hover:bg-white/10 border border-white/10 transition-all"
                    aria-label="View Source"
                >
                    <Github size={16} />
                </a>
                <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-secondary hover:text-white hover:bg-white/10 border border-white/10 transition-all"
                    aria-label="Live Demo"
                >
                    <ExternalLink size={16} />
                </a>
            </div>

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-vscode-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
                    <div className="w-full md:w-7/12 p-5 md:p-8 flex flex-col overflow-y-auto scrollbar-hide">
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
        <section id="projects" className="py-32 px-6 relative">
            {/* Background Decoration */}
            <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-vscode-blue/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container-width grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Header Section */}
                <div className="md:col-span-4 self-start sticky top-24">
                    <h2 className="text-sm font-mono text-secondary uppercase tracking-widest mb-4">
                        03 // Projects
                    </h2>
                    <h3 className="text-4xl font-bold text-white mb-6">
                        System <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-vscode-blue to-vscode-green">
                            Architectures
                        </span>
                    </h3>

                    <div className="hidden md:block p-6 bg-[#0d1117]/50 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4 text-white">
                            <Command size={20} className="text-vscode-blue" />
                            <span className="font-mono text-sm font-bold">Mission Control</span>
                        </div>
                        <p className="text-secondary/60 text-xs leading-relaxed mb-4">
                            A collection of deployed agents, platforms, and engines. Each module represents a solution to a complex problem.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs text-secondary/70">
                                <div className="w-1.5 h-1.5 rounded-full bg-vscode-green" />
                                <span>Agentic AI Systems</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-secondary/70">
                                <div className="w-1.5 h-1.5 rounded-full bg-vscode-orange" />
                                <span>Fintech Engines</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-secondary/70">
                                <div className="w-1.5 h-1.5 rounded-full bg-vscode-yellow" />
                                <span>Real-time Platforms</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Grid Window */}
                <div className="md:col-span-8">
                    {/* "Terminal" Header for Context */}
                    <div className="mb-6 flex items-center justify-between text-xs font-mono text-secondary/50">
                        <span>~/projects $ list --view=grid</span>
                        <span>{projects.length} modules found</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                                onOpenOverview={setSelectedProject}
                            />
                        ))}
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
