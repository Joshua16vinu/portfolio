import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Cpu, ShieldCheck, LineChart, Layers, Terminal, Sparkles, CheckCircle2, Lock, BookOpen, Stethoscope, Activity, MapPin } from "lucide-react";

const projects = [
    {
        id: "p01",
        num: "01",
        name: "Local LLM Policy Gap Analysis & Improvement",
        shortTitle: "Local LLM Offline RAG",
        tagline: "Hack IITK 2026 (3rd Place) · Air-Gapped Compliance Verification",
        category: "AI & CYBERSECURITY",
        year: "2026",
        icon: <ShieldCheck size={20} className="text-stone-900" />,
        isPrivate: false,
        github: "https://github.com/Joshua16vinu",
        overview: "A fully offline compliance & policy gap analysis engine running quantized local LLMs (Mistral & Phi) deployed via Ollama, adhering strictly to zero-API and air-gapped constraints.",
        problem: "Enterprise security and defense organizations forbid transmitting sensitive internal policy documents to commercial third-party cloud LLM APIs.",
        solution: "Engineered an offline vectorization pipeline on ChromaDB that semantically indexes internal documentation and cross-evaluates statements against NIST cybersecurity framework templates in Auto, Deep, and Express operational modes.",
        pipelineFlow: [
            { step: "INGESTION", detail: "Internal policy documents parsed & chunked offline" },
            { step: "VECTOR DB", detail: "ChromaDB local vector embeddings & semantic search" },
            { step: "REASONING", detail: "Ollama runtime hosting quantized Mistral & Phi models" },
            { step: "BENCHMARK", detail: "NIST cybersecurity alignment with gap remediation" }
        ],
        metrics: [
            { label: "Cloud Dependency", val: "Zero-API" },
            { label: "Participants", val: "9,000+ Teams" },
            { label: "Inference Modes", val: "3 Profiles" },
            { label: "Deployment", val: "Air-Gapped" }
        ],
        stack: ["Python", "Mistral", "Phi", "Ollama", "ChromaDB", "NLP", "LangChain"],
    },
    {
        id: "p02",
        num: "02",
        name: "Financial Assistant via Agentic Workflows",
        shortTitle: "Agentic Financial Assistant",
        tagline: "Autonomous Multi-Agent Equity Reasoning & Signals Across 7,500+ Equities",
        category: "FINTECH & AGENTIC AI",
        year: "2025 – 2026",
        icon: <Cpu size={20} className="text-stone-900" />,
        isPrivate: true,
        confidentialNote: "Proprietary Commercial IP",
        overview: "A production-grade financial reasoning platform orchestrating cooperative AI agents to generate real-time trading signals and fundamental insights across 7,500+ equities.",
        problem: "Individual analysts cannot concurrently process financial reports, quantitative factor ratios, and real-time news sentiment across thousands of listed tickers.",
        solution: "Architected a multi-agent system orchestrating specialized Fundamental, Valuation, and News Sentiment agents with long-term vector memory streams, automated n8n workflows, and Google Cloud SQL persistence.",
        pipelineFlow: [
            { step: "FEEDS", detail: "Automated n8n pipelines streaming daily market metrics" },
            { step: "AGENTS", detail: "Cooperative Fundamental, Valuation & Sentiment agents" },
            { step: "MEMORY", detail: "Long-term factor memory for autonomous weighting" },
            { step: "OUTPUT", detail: "Interactive Stock Screener & Portfolio Risk Analyzer" }
        ],
        metrics: [
            { label: "Universe", val: "7,500+ Equities" },
            { label: "Architecture", val: "Multi-Agent" },
            { label: "Pipelines", val: "n8n Automated" },
            { label: "Backend", val: "GCP Cloud SQL" }
        ],
        stack: ["Python", "Next.js", "n8n", "GCP", "Cloud SQL", "Node.js", "LLMs"],
    },
    {
        id: "p03",
        num: "03",
        name: "Signal-Agnostic Backtesting Engine",
        shortTitle: "Backtesting Quant Engine",
        tagline: "High-Throughput Event-Driven Simulation Engine with PostgreSQL Streaming",
        category: "QUANT SYSTEMS",
        year: "2024 – 2025",
        icon: <LineChart size={20} className="text-stone-900" />,
        isPrivate: true,
        confidentialNote: "Confidential Quantitative IP",
        overview: "A modular, event-driven backtesting engine in Python that decouples market data ingestion from signal generation, featuring chunked PostgreSQL streaming pipelines and institutional risk metrics.",
        problem: "Backtesting complex multi-timeframe strategies across extensive historical OHLCV data creates memory starvation and severe latency bottlenecks when loaded monolithically into RAM.",
        solution: "Engineered a chunked streaming data loader from PostgreSQL that dynamically batches historical bars, increasing data throughput by 35–40% and computing institutional Sharpe ratio, max drawdown, and equity curves.",
        pipelineFlow: [
            { step: "STREAMING", detail: "Chunked OHLCV database streaming via PostgreSQL" },
            { step: "INGESTION", detail: "Decoupled feeds preventing look-ahead bias" },
            { step: "STRATEGY", detail: "Concurrent multi-strategy runner with 15+ indicators" },
            { step: "ANALYTICS", detail: "Sharpe, drawdown, volatility & equity curve generation" }
        ],
        metrics: [
            { label: "Throughput", val: "+35–40% Boost" },
            { label: "Indicators", val: "15+ Custom" },
            { label: "Execution", val: "Event-Driven" },
            { label: "Database", val: "PostgreSQL" }
        ],
        stack: ["Python", "Backtrader", "PostgreSQL", "React.js", "Node.js", "Selenium"],
    },
    {
        id: "p04",
        num: "04",
        name: "Institutional Digital Infrastructure Revamp",
        shortTitle: "University Microservices",
        tagline: "Modernizing University Portal Infrastructure for Thousands of Active Users",
        category: "DISTRIBUTED SYSTEMS",
        year: "2025",
        icon: <Layers size={20} className="text-stone-900" />,
        isPrivate: true,
        confidentialNote: "Internal Institutional Infrastructure",
        overview: "End-to-end modernization of university infrastructure, migrating from legacy monolithic CakePHP to a performant Node.js + MySQL microservice architecture.",
        problem: "Legacy monolithic CakePHP architecture suffered from high latency, brittle authentication, and slow database queries during examination results and registration peaks.",
        solution: "Redesigned frontend in React.js with modular Node.js REST services, introducing JWT authentication, strict RBAC permission trees, and indexed MySQL caching to reduce page load times by 40%.",
        pipelineFlow: [
            { step: "MIGRATION", detail: "Legacy CakePHP monolith transitioned to Node.js" },
            { step: "SECURITY", detail: "JWT authentication with strict RBAC access layers" },
            { step: "DATABASE", detail: "Optimized MySQL schema indexing & query caching" },
            { step: "FRONTEND", detail: "Modern accessible React.js UI with admin dashboards" }
        ],
        metrics: [
            { label: "Performance", val: "40% Faster" },
            { label: "Active Users", val: "1,500+ Daily" },
            { label: "Auth Protocol", val: "JWT & RBAC" },
            { label: "Frontend", val: "React.js" }
        ],
        stack: ["React.js", "Node.js", "MySQL", "Express", "REST APIs", "JWT"],
    }
];

const openSourceProjects = [
    {
        title: "MedExplain",
        tag: "Healthcare AI & Clinical NLP",
        description: "Multimodal medical document interpretation and report simplification using LLM reasoning and specialized clinical NLP embeddings.",
        stack: ["Python", "Medical LLMs", "NLP", "FastAPI"],
        github: "https://github.com/Joshua16vinu/MedExplain"
    },
    {
        title: "Hacktivate2k24",
        tag: "2nd Runner-Up Hackathon Solution",
        description: "This application allows cybersecurity teams to conduct realistic phishing simulations, providing insights into potential vulnerabilities within an organization. By mimicking legitimate emails and launching sophisticated phishing campaigns, AI-PhishBot helps organizations train employees to recognize and respond to phishing attempts.",
        stack: ["Python", "Cyber Security", "Node.js"],
        github: "https://github.com/Joshua16vinu/Hacktivate2k24"
    },
    {
        title: "Fault-Diagnosis",
        tag: "Fault Detection in Machinery",
        description: "Statistical signal processing for industrial machinery fault classification, vibration analytics, and preventive diagnostics.",
        stack: ["Python", "PyTorch", "Signal Processing", "NumPy"],
        github: "https://github.com/Joshua16vinu/Fault-Diagnosis"
    },
    {
        title: "PokemonGo-spit-",
        tag: "Interactive Geospatial Engine",
        description: "Location-based interactive discovery platform featuring OpenStreetMap and Leaflet map rendering with real-time location event listeners.",
        stack: ["React.js", "Leaflet", "OpenStreetMap", "Node.js"],
        github: "https://github.com/Joshua16vinu/PokemonGo-spit-"
    }
];

const Projects = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const activeProject = projects[activeIdx];

    return (
        <section id="projects" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[#dedbd2]">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#dedbd2]">
                    <div className="space-y-2">
                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                            05 // Selected Systems & Architectures
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-sans">
                            Engineered <span className="font-serif italic font-normal lowercase tracking-normal text-stone-800 text-3xl sm:text-4xl lg:text-[2.75rem]">architectures</span>
                        </h2>
                    </div>

                    <div className="text-xs font-mono text-stone-600 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-stone-900" />
                        <span>Interactive System Inspector · [ 04 Core Platforms ]</span>
                    </div>
                </div>

                {/* Horizontal System Selector Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 p-1.5 rounded-2xl bg-[#ebe8e1] border border-[#dedbd2]">
                    {projects.map((proj, idx) => (
                        <button
                            key={proj.id}
                            onClick={() => setActiveIdx(idx)}
                            className={`p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer font-sans ${activeIdx === idx
                                ? "bg-white text-stone-950 shadow-sm border border-stone-300"
                                : "text-stone-600 hover:text-stone-950 hover:bg-white/40"
                                }`}
                        >
                            <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 mb-1">
                                <span>SYSTEM_{proj.num}</span>
                                {activeIdx === idx && <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />}
                            </div>
                            <div className="text-xs sm:text-sm font-bold uppercase tracking-tight line-clamp-1">
                                {proj.shortTitle}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Active System Dossier: Blueprint Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-3xl bg-white border border-[#dedbd2] shadow-sm p-6 sm:p-10 lg:p-12 space-y-10"
                    >
                        {/* Top Bar of the Active Project */}
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-[#dedbd2]">
                            <div className="space-y-2 max-w-2xl">
                                <div className="flex items-center gap-2.5 text-xs font-mono">
                                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 uppercase tracking-wider font-semibold">
                                        {activeProject.category}
                                    </span>
                                    <span className="text-stone-400">•</span>
                                    <span className="text-stone-500">{activeProject.year}</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-stone-950 font-sans">
                                    {activeProject.name}
                                </h3>
                                <p className="text-xs sm:text-sm font-mono text-stone-600">
                                    {activeProject.tagline}
                                </p>
                            </div>

                            {activeProject.isPrivate ? (
                                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-100 border border-stone-300 text-stone-700 text-xs font-mono uppercase tracking-wider self-start cursor-default">
                                    <Lock size={13} className="text-stone-500" />
                                    <span>Confidential Repo (Private)</span>
                                </div>
                            ) : (
                                <a
                                    href={activeProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-white hover:bg-stone-800 text-xs font-mono uppercase tracking-wider transition-all self-start shadow-sm"
                                >
                                    <Github size={14} />
                                    <span>Public Repository</span>
                                    <ArrowUpRight size={13} />
                                </a>
                            )}
                        </div>

                        {/* Middle: Problem vs Solution Dual Ledger */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            <div className="space-y-2 p-5 sm:p-6 rounded-2xl bg-[#f2f0ea]/70 border border-[#dedbd2]">
                                <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-bold block">
                                    // CHALLENGE & SYSTEM CONSTRAINTS
                                </span>
                                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                                    {activeProject.problem}
                                </p>
                            </div>

                            <div className="space-y-2 p-5 sm:p-6 rounded-2xl bg-[#f2f0ea]/70 border border-[#dedbd2]">
                                <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-bold block">
                                    // ARCHITECTURAL IMPLEMENTATION
                                </span>
                                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                                    {activeProject.solution}
                                </p>
                            </div>
                        </div>

                        {/* Pipeline Architecture Flowchart Strip */}
                        <div className="space-y-3">
                            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
                                System Pipeline Flow
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {activeProject.pipelineFlow.map((step, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1 relative"
                                    >
                                        <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                                            <span>STEP 0{sIdx + 1}</span>
                                            <span className="text-stone-900 font-bold">{step.step}</span>
                                        </div>
                                        <p className="text-xs text-stone-700 font-sans leading-snug pt-1">
                                            {step.detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Metric Strip & Tech Badges */}
                        <div className="pt-6 border-t border-[#dedbd2] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            {/* Metric Badges */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {activeProject.metrics.map((m, mIdx) => (
                                    <div key={mIdx} className="space-y-0.5">
                                        <div className="text-[10px] font-mono text-stone-400 uppercase">
                                            {m.label}
                                        </div>
                                        <div className="text-sm font-bold text-stone-950 font-mono">
                                            {m.val}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-1.5">
                                {activeProject.stack.map((tech, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-mono border border-stone-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Additional Public Open-Source Research Repositories */}
                <div className="pt-4 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[#dedbd2]">
                        <div>
                            <div className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-bold">
                                Open Source Codebases & Research Repositories
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-stone-950 font-sans mt-0.5">
                                Public GitHub Projects
                            </h3>
                        </div>
                        <a
                            href="https://github.com/Joshua16vinu?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-stone-600 hover:text-stone-950 inline-flex items-center gap-1.5 uppercase tracking-wider"
                        >
                            <span>Explore GitHub Profile</span>
                            <ArrowUpRight size={13} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {openSourceProjects.map((repo, rIdx) => (
                            <a
                                key={rIdx}
                                href={repo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-5 rounded-2xl bg-white border border-[#dedbd2] hover:border-stone-900 transition-all flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-xs font-mono">
                                        <span className="text-[10px] text-stone-400 uppercase tracking-wider">
                                            OPEN_SOURCE
                                        </span>
                                        <ArrowUpRight size={14} className="text-stone-400 group-hover:text-stone-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                    <h4 className="text-lg font-bold text-stone-950 font-sans group-hover:text-stone-700 transition-colors">
                                        {repo.title}
                                    </h4>
                                    <div className="text-[11px] font-mono text-stone-500">
                                        {repo.tag}
                                    </div>
                                    <p className="text-xs text-stone-600 leading-relaxed font-normal pt-1">
                                        {repo.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1 pt-2 border-t border-stone-100">
                                    {repo.stack.map((tech, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-mono text-[10px]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;