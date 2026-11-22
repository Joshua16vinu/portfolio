import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Layers, Database, Cloud, Filter } from "lucide-react";

const domainData = [
    {
        id: "ai-ds",
        code: "DOM_01",
        title: "AI, Machine Learning & Data Science (DS)",
        scope: "Predictive modeling, autonomous agent coordination, statistical mining & offline local inference.",
        skills: [
            { name: "Data Science (DS)", level: "Core" },
            { name: "Machine Learning", level: "Core" },
            { name: "Deep Learning", level: "Core" },
            { name: "Statistical Modeling", level: "Advanced" },
            { name: "Data Mining", level: "Advanced" },
            { name: "Agentic AI Workflows", level: "Specialist" },
            { name: "Multi-Agent Orchestration", level: "Specialist" },
            { name: "RAG Pipelines", level: "Specialist" },
            { name: "Model Context Protocol (MCP)", level: "Specialist" },
            { name: "Local LLMs (Ollama, Mistral, Phi)", level: "Advanced" },
            { name: "Vector DBs (ChromaDB, FAISS)", level: "Advanced" },
            { name: "LangChain", level: "Advanced" }
        ]
    },
    {
        id: "fullstack",
        code: "DOM_02",
        title: "Full Stack Development & Microservices",
        scope: "Performant reactive web interfaces, enterprise microservice transitions, and secure API boundaries.",
        skills: [
            { name: "React.js", level: "Core" },
            { name: "Next.js", level: "Core" },
            { name: "Node.js", level: "Core" },
            { name: "Express.js", level: "Core" },
            { name: "TypeScript", level: "Advanced" },
            { name: "JavaScript (ES6+)", level: "Core" },
            { name: "RESTful API Architecture", level: "Core" },
            { name: "Microservice Patterns", level: "Advanced" },
            { name: "JWT Authentication", level: "Core" },
            { name: "Role-Based Access Control (RBAC)", level: "Core" },
            { name: "Tailwind CSS", level: "Core" },
            { name: "HTML5 / Modern CSS", level: "Core" }
        ]
    },
    {
        id: "devops",
        code: "DOM_03",
        title: "DevOps, Cloud & Distributed Systems",
        scope: "Automated delivery pipelines, cloud-native deployments, and containerized infrastructure.",
        skills: [
            { name: "DevOps Methodologies", level: "Core" },
            { name: "Docker & Containerization", level: "Advanced" },
            { name: "CI/CD Pipelines", level: "Advanced" },
            { name: "Google Cloud Platform (GCP)", level: "Advanced" },
            { name: "Cloud SQL", level: "Advanced" },
            { name: "Linux / Bash Shell", level: "Core" },
            { name: "Git & Version Control", level: "Core" },
            { name: "Postman API Automation", level: "Core" },
            { name: "Agile & Scrum Cycles", level: "Core" }
        ]
    },
    {
        id: "data-eng",
        code: "DOM_04",
        title: "Data Warehousing & Data Engineering",
        scope: "High-throughput database streaming, chunked OHLCV feeds, and relational/in-memory data stores.",
        skills: [
            { name: "Data Warehousing", level: "Core" },
            { name: "Data Mining & Extraction", level: "Advanced" },
            { name: "ETL / Data Pipelines", level: "Advanced" },
            { name: "PostgreSQL", level: "Core" },
            { name: "MySQL", level: "Core" },
            { name: "Redis In-Memory Caching", level: "Advanced" },
            { name: "MongoDB NoSQL", level: "Advanced" },
            { name: "Chunked OHLCV Streaming", level: "Specialist" },
            { name: "Backtrader Quant Engine", level: "Specialist" }
        ]
    },
    {
        id: "languages",
        code: "DOM_05",
        title: "Core Programming Languages",
        scope: "Algorithmic computation, systems programming, and high-concurrency production scripting.",
        skills: [
            { name: "Python", level: "Advanced / Primary" },
            { name: "C / C++", level: "Systems / Algorithmic" },
            { name: "Java", level: "Enterprise / Object-Oriented" },
            { name: "JavaScript / TypeScript", level: "Web & Full-Stack" },
            { name: "SQL", level: "Relational & Analytical" }
        ]
    }
];

const Skills = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");

    const filteredDomains = selectedFilter === "all"
        ? domainData
        : domainData.filter(d => d.id === selectedFilter);

    const filterOptions = [
        { id: "all", label: "All Disciplines" },
        { id: "ai-ds", label: "AI & Data Science" },
        { id: "fullstack", label: "Full Stack" },
        { id: "devops", label: "DevOps & Cloud" },
        { id: "data-eng", label: "Data Warehousing" },
        { id: "languages", label: "Languages" },
    ];

    return (
        <section id="skills" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[#dedbd2]">
            <div className="max-w-6xl mx-auto space-y-12">
                
                {/* Full-Width Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#dedbd2]">
                    <div className="space-y-2">
                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                            06 // Technical Matrix & Capabilities
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-sans">
                            Domain <span className="font-serif italic font-normal lowercase tracking-normal text-stone-800 text-3xl sm:text-4xl lg:text-[2.75rem]">specifications</span>
                        </h2>
                    </div>

                    {/* Filter Pills Bar */}
                    <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-[#ebe8e1] border border-[#dedbd2] self-start md:self-auto">
                        {filterOptions.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => setSelectedFilter(opt.id)}
                                className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                                    selectedFilter === opt.id
                                        ? "bg-stone-900 text-white shadow-sm font-semibold"
                                        : "text-stone-600 hover:text-stone-950"
                                }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Swiss Engineering Spec-Sheet Matrix (Editorial Ledger Format) */}
                <div className="divide-y divide-[#dedbd2] border-y border-[#dedbd2] bg-white rounded-3xl overflow-hidden shadow-sm">
                    {filteredDomains.map((domain) => (
                        <div
                            key={domain.id}
                            className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 hover:bg-[#faf9f6] transition-colors"
                        >
                            {/* Left Meta: Code, Title, Scope */}
                            <div className="lg:col-span-4 space-y-2">
                                <div className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
                                    {domain.code}
                                </div>
                                <h3 className="text-xl font-bold text-stone-950 font-sans leading-snug">
                                    {domain.title}
                                </h3>
                                <p className="text-xs text-stone-600 leading-relaxed font-normal pt-1">
                                    {domain.scope}
                                </p>
                            </div>

                            {/* Right Grid: Clean Monospace Technical Spec Chips */}
                            <div className="lg:col-span-8 flex flex-wrap content-start gap-2 pt-1">
                                {domain.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f2f0ea]/70 hover:bg-stone-900 border border-[#dedbd2] hover:border-stone-900 transition-all cursor-default"
                                    >
                                        <span className="text-xs font-mono font-medium text-stone-900 group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                        <span className="text-[10px] font-mono text-stone-400 group-hover:text-stone-300 transition-colors">
                                            / {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Assurance Note */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-stone-500 pt-2">
                    <div>
                        ● Complete verification through production repository commits & peer-reviewed IEEE publications.
                    </div>
                    <div className="text-stone-700 font-semibold uppercase">
                        Full Stack · DevOps · Data Warehousing · AI/ML
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;