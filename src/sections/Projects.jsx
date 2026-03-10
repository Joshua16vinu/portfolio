import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight, ExternalLink, Github, ChevronRight, Folder, Code, Cpu, Database, Globe, X, Scan, ChevronLeft, Maximize2, Command } from "lucide-react";

// Placeholder images logic can be added later, for now we rely on the clean "No Media" UI
const projects = [
    {
        id: "p01",
        name: "signal-agnostic-backtesting",
        version: "v1.5.0",
        status: "STABLE",
        type: "FINTECH",
        description: "Backtrader-powered engine accommodating multiple trading strategies with 15+ custom indicators and chunked OHLCV ingestion.",
        longDescription: "Engineered a robust backtesting framework that supports 15+ custom indicators with optimized data loaders. It eliminates look-ahead bias and allows for multi-timeframe simulations with high-performance throughput.",
        features: [
            "Support for 15+ custom indicators and multiple trading strategies.",
            "Optimized data loaders with chunked OHLCV ingestion.",
            "Memory-mapped datasets to handle large-scale historical data.",
            "Visualized equity curves and performance metrics (Sharpe, Drawdown)."
        ],
        stack: ["Python", "Backtrader", "Pandas", "NumPy", "Selenium", "Redis"],
        links: { live: "#", repo: "#" },
        color: "text-vscode-orange border-vscode-orange/50",
        icon: <Database size={24} />
    },
    {
        id: "p02",
        name: "real-time-event-platform",
        version: "v1.2.0",
        status: "LIVE",
        type: "SOCIAL_TECH",
        description: "Location-based event platform featuring real-time tracking, sub-100ms operations, and social sharing.",
        longDescription: "A real-time platform designed for location-based event discovery and sharing. It features sub-100ms read/write operations and utilizes Firestore real-time listeners for seamless map updates across users.",
        features: [
            "Geolocation tracking with OpenStreetMap and Leaflet.",
            "Real-time Firestore listeners for instant event updates.",
            "Sub-100ms latency for database operations.",
            "Google OAuth integration for secure user sessions."
        ],
        stack: ["React.js", "Node.js", "Firebase", "OpenStreetMap", "Leaflet"],
        links: { live: "#", repo: "#" },
        color: "text-vscode-blue border-vscode-blue/50",
        icon: <Globe size={24} />
    },
    {
        id: "p03",
        name: "agentic-ai-orchestrator",
        version: "v2.0.0",
        status: "STRICT",
        type: "AI_INFRA",
        description: "Multi-agent AI ecosystem with long-term memory and autonomous task execution for financial analysis.",
        longDescription: "Architected as a collection of specialized agents that collaborate on complex tasks. Features a long-term memory module that allows agents to learn from past market interactions and refine their strategy over time.",
        features: [
            "Multi-agent orchestration for parallel data processing.",
            "Long-term memory stream using Vector DBs (FAISS/Chroma).",
            "Autonomous news sentiment analysis sub-pipeline.",
            "Seamless integration with GenAI (Gemini) for reasoning."
        ],
        stack: ["Python", "LangChain", "Gemini", "FastAPI", "VectorDBs"],
        links: { live: "#", repo: "#" },
        color: "text-vscode-green border-vscode-green/50",
        icon: <Cpu size={24} />
    },
    {
        id: "p04",
        name: "academic-portal-revamp",
        version: "v4.0.0",
        status: "PRODUCTION",
        type: "FULL_STACK",
        description: "Enterprise-grade university portal overhaul serving 1500+ users with secure JWT auth and RBAC.",
        longDescription: "Led the end-to-end migration and redesign of a major university portal. Focused on security, performance, and accessibility, achieving a 40% reduction in average load times.",
        features: [
            "Modern React.js frontend with Tailwind CSS.",
            "Secure REST APIs with JWT authentication.",
            "Role-Based Access Control (RBAC) for administration.",
            "Optimized MySQL schema for complex relational data."
        ],
        stack: ["React.js", "Node.js", "MySQL", "Express", "Tailwind"],
        links: { live: "#", repo: "#" },
        color: "text-vscode-yellow border-vscode-yellow/50",
        icon: <ExternalLink size={24} />
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
