import { motion } from "framer-motion";
import { Terminal, ArrowRight, ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
    {
        id: "p01",
        name: "financial-assistant-agent",
        version: "v2.4.0",
        status: "DEPLOYED",
        description: "Autonomous AI agent for portfolio management. Features long-term memory & agentic workflows.",
        stack: ["python", "langchain", "openai", "vector-db"],
        links: { live: "#", repo: "#" }
    },
    {
        id: "p02",
        name: "signal-agnostic-backtesting",
        version: "v1.1.2",
        status: "STABLE",
        description: "Modular market data evaluation framework. Supports chunked ingestion & predictive ML integration.",
        stack: ["python", "backtrader", "ml", "fintech"],
        links: { live: "#", repo: "#" }
    },
    {
        id: "p03",
        name: "ai-personalized-learning",
        version: "v3.0.0-beta",
        status: "ACTIVE",
        description: "Adaptive tutoring system using Gemini API. Visualizes learning paths with real-time feedback.",
        stack: ["react", "firebase", "gemini-api", "flask"],
        links: { live: "#", repo: "#" }
    },
    {
        id: "p04",
        name: "pokemongo-event-platform",
        version: "v1.0.5",
        status: "GOLIVE",
        description: "Geo-location event discovery service. Integrated Google OAuth & OpenStreetMap.",
        stack: ["node.js", "express", "leaflet", "oauth"],
        links: { live: "#", repo: "#" }
    },
    {
        id: "p05",
        name: "secretsync-e2ee-chat",
        version: "v1.0.0",
        status: "SECURE",
        description: "Zero-knowledge messaging platform. Implements Diffie-Hellman & AES-256 for E2EE.",
        stack: ["websockets", "diffie-hellman", "crypto", "react"],
        links: { live: "#", repo: "#" }
    }
];

const TerminalEntry = ({ project, index }) => {
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
                <span className="text-vscode-green">➜</span>
                <span className="text-vscode-blue font-bold">{project.name}</span>
                <span className="text-secondary/50 text-xs">@{project.version}</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-vscode-green/10 text-vscode-green border border-vscode-green/20 ml-auto md:ml-2">
                    {project.status}
                </span>
            </div>

            {/* Config Block */}
            <div className="pl-4 md:pl-6 border-l border-border/50 space-y-1">
                <div className="flex gap-2 text-secondary/80">
                    <span className="text-vscode-purple min-w-[80px]">desc</span>
                    <span>{project.description}</span>
                </div>

                <div className="flex gap-2 text-secondary/80">
                    <span className="text-vscode-purple min-w-[80px]">stack</span>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span key={tech} className="text-vscode-orange">
                                "{tech}"
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2 text-secondary/80 pt-1">
                    <span className="text-vscode-purple min-w-[80px]">action</span>
                    <div className="flex gap-4">
                        <a href={project.links.repo} className="flex items-center gap-1 hover:text-primary hover:underline transition-colors">
                            [<Github size={12} /> source]
                        </a>
                        <a href={project.links.live} className="flex items-center gap-1 hover:text-primary hover:underline transition-colors">
                            [<ExternalLink size={12} /> live_demo]
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
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
                    <div className="bg-surfaceLight/20 border border-border rounded-lg p-4 md:p-6 font-mono text-xs md:text-sm relative overflow-hidden md:overflow-x-auto min-h-[500px] md:min-h-[600px]">
                        {/* Terminal Header */}
                        <div className="flex gap-2 mb-6 opacity-30">
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
                        </div>

                        {/* CLI Output Stream */}
                        <div className="space-y-2 overflow-x-auto pb-4">
                            <div className="text-secondary/50 mb-6 whitespace-nowrap">
                                <span className="text-vscode-green">➜</span> <span className="text-vscode-blue">~</span> list-projects --shipped --sort=date --verbose
                            </div>

                            {projects.map((project, index) => (
                                <TerminalEntry key={index} project={project} index={index} />
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
        </section>
    );
};

export default Projects;
