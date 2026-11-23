import { useState } from "react";
import { ExternalLink, Copy, Check, FileText } from "lucide-react";

const publications = [
    {
        id: "icnte-2026",
        title: "Fraudulent Transaction Detection in Reverse Auction Systems Using Machine Learning and Blockchain-Assisted Anomaly Analysis",
        authors: "P. Verma, J. J. Mathew, J. V. Koshy, A. R. Koshy, and A. M. Abbey",
        venue: "2026 6th Biennial International Conference on Nascent Technologies in Engineering (ICNTE)",
        year: "2026",
        pages: "pp. 1-6",
        doi: "10.1109/ICNTE66387.2026.11437458",
        doiUrl: "https://doi.org/10.1109/ICNTE66387.2026.11437458",
        status: "Published · IEEE Xplore",
        type: "Conference Paper",
        abstract: "Proposes an integrated system combining machine learning anomaly detection with decentralized blockchain architecture to detect bidding fraud and bid-rigging in reverse auction markets, guaranteeing verifiable tamper-proof audit trails.",
        tags: ["Machine Learning", "Blockchain", "Anomaly Detection", "Reverse Auctions", "Cybersecurity"],
        bibtex: `@inproceedings{verma2026fraudulent,
  author={Verma, P. and Mathew, J. J. and Koshy, J. V. and Koshy, A. R. and Abbey, A. M.},
  booktitle={2026 6th Biennial International Conference on Nascent Technologies in Engineering (ICNTE)}, 
  title={Fraudulent Transaction Detection in Reverse Auction Systems Using Machine Learning and Blockchain-Assisted Anomaly Analysis}, 
  year={2026},
  pages={1-6},
  doi={10.1109/ICNTE66387.2026.11437458}
}`
    },
    {
        id: "iconat-2026",
        title: "An Architectural Framework for Multi-Agent Stock Analysis and Portfolio Optimization Using Large Language Models",
        authors: "J. V. Koshy et al.",
        venue: "International Conference on Advancements in Technology (ICONAT 2026)",
        year: "2026",
        status: "Accepted & Presented · IEEE In-Press",
        type: "Conference Paper",
        abstract: "Architects a cooperative multi-agent framework where specialized LLM reasoning agents (fundamental valuation, technical signals, market sentiment) interact with long-term memory streams to autonomously analyze equity markets and optimize risk-adjusted portfolios.",
        tags: ["Agentic AI", "Multi-Agent Systems", "Quantitative Finance", "LLMs", "Portfolio Optimization"],
        //         bibtex: `@inproceedings{koshy2026multiagent,
        //   author={Koshy, J. V. and others},
        //   booktitle={International Conference on Advancementsin Technology (ICONAT)},
        //   title={An Architectural Framework for Multi-Agent Stock Analysis and Portfolio Optimization Using Large Language Models},
        //   year={2026}
        // }`
    },
    {
        id: "medin-2026",
        title: "Towards Autonomous Precision Healthcare: A Survey of Multimodal Foundation Models, Medical Large Language Models, AI Agents, and Digital Twins",
        authors: "J. V. Koshy et al.",
        venue: "Journal Medinformatics (MEDIN, eISSN: 3029-1321)",
        year: "2026",
        status: "In 3rd Round Review",
        type: "Journal Survey",
        abstract: "A comprehensive systematic survey mapping multimodal medical foundation models, autonomous clinical agent workflows, and patient digital twin simulations, analyzing state-of-the-art architectures, safety alignment, and deployment hurdles in healthcare robotics and diagnostics.",
        tags: ["Healthcare AI", "Foundation Models", "Autonomous Agents", "Digital Twins", "Survey"],
        //         bibtex: `@article{koshy2026autonomousprecision,
        //   author={Koshy, J. V. and others},
        //   journal={Medinformatics (MEDIN)},
        //   title={Towards Autonomous Precision Healthcare: A Survey of Multimodal Foundation Models, Medical Large Language Models, AI Agents, and Digital Twins},
        //   year={2026},
        //   note={Under 3rd Round Review}
        // }`
    }
];

const Research = () => {
    const [copiedId, setCopiedId] = useState(null);
    const [showBibtexId, setShowBibtexId] = useState(null);

    const handleCopy = (id, bibtex) => {
        navigator.clipboard.writeText(bibtex);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <section id="research" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[#dedbd2]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* Left Column: Heading */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                            02 // Research & Publications
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-sans leading-[1.08]">
                            Peer-Reviewed <br />
                            <span className="font-serif italic font-normal lowercase tracking-normal text-stone-800 text-3xl sm:text-4xl lg:text-[2.75rem]">
                                publications & surveys
                            </span>
                        </h2>
                        <p className="text-stone-600 text-sm leading-relaxed">
                            Research papers indexed and presented at IEEE conferences, addressing machine learning anomaly detection, multi-agent LLM systems, and autonomous health systems.
                        </p>
                        <div className="pt-1 flex flex-wrap gap-2">
                            <a
                                href="https://scholar.google.com/citations?hl=en&user=0xhyCuYAAAAJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 text-xs font-mono uppercase tracking-wider transition-colors"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9 12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                                </svg>
                                Google Scholar
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                            </a>
                            <a
                                href="https://orcid.org/0009-0007-7608-289X"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 text-xs font-mono uppercase tracking-wider transition-colors"
                            >
                                <svg width="12" height="12" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zM86.3 186.2H70.9V79.1h15.4zm-7.7-119.4c-4.9 0-8.9-4-8.9-8.9s4-8.9 8.9-8.9 8.9 4 8.9 8.9-4 8.9-8.9 8.9zm113.1 119.4h-15.4v-55.4c0-5.8-.1-13.3-8.1-13.3-8.1 0-9.4 6.3-9.4 12.9v55.8h-15.4V79.1h14.8v6.8h.2c2.1-3.9 7.1-8.1 14.6-8.1 15.6 0 18.5 10.3 18.5 23.6v84.8z"/>
                                </svg>
                                ORCID&nbsp;<span className="opacity-60">0009-0007-7608-289X</span>
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Publication Cards */}
                    <div className="lg:col-span-7 space-y-6">
                        {publications.map((pub) => (
                            <div
                                key={pub.id}
                                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#dedbd2] shadow-sm space-y-4"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 uppercase tracking-wider font-semibold">
                                        {pub.type} • {pub.year}
                                    </span>
                                    <span className="text-emerald-700 font-medium">
                                        ● {pub.status}
                                    </span>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-stone-950 leading-snug font-sans">
                                    {pub.title}
                                </h3>

                                <div className="text-xs sm:text-sm text-stone-700">
                                    {pub.authors.split("J. V. Koshy").map((part, i, arr) => (
                                        <span key={i}>
                                            {part}
                                            {i < arr.length - 1 && (
                                                <strong className="text-stone-950 underline underline-offset-2">
                                                    J. V. Koshy
                                                </strong>
                                            )}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-xs font-mono text-stone-500 italic">
                                    {pub.venue} {pub.pages && `(${pub.pages})`}
                                </div>

                                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                                    {pub.abstract}
                                </p>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {pub.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-mono text-[11px]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-[#dedbd2] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                                    <div className="flex items-center gap-2">
                                        {pub.doiUrl && (
                                            <a
                                                href={pub.doiUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors"
                                            >
                                                <span>DOI Reference</span>
                                                <ExternalLink size={12} />
                                            </a>
                                        )}
                                        <button
                                            onClick={() => setShowBibtexId(showBibtexId === pub.id ? null : pub.id)}
                                            className="px-3 py-1.5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-800 transition-colors cursor-pointer"
                                        >
                                            {showBibtexId === pub.id ? "Close BibTeX" : "BibTeX"}
                                        </button>
                                    </div>

                                    {showBibtexId === pub.id && (
                                        <button
                                            onClick={() => handleCopy(pub.id, pub.bibtex)}
                                            className="inline-flex items-center gap-1 text-stone-700 hover:text-stone-950 cursor-pointer"
                                        >
                                            {copiedId === pub.id ? (
                                                <>
                                                    <Check size={12} className="text-emerald-600" />
                                                    <span className="text-emerald-700 font-medium">Copied!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy size={12} />
                                                    <span>Copy citation</span>
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>

                                {showBibtexId === pub.id && (
                                    <pre className="p-4 rounded-xl bg-stone-100 text-stone-800 text-[11px] font-mono overflow-x-auto leading-relaxed select-all">
                                        {pub.bibtex}
                                    </pre>
                                )}
                            </div>
                        ))}

                        {/* Substack Newsletter Card */}
                        {/* <div className="p-6 sm:p-8 rounded-2xl bg-[#ebe8e1] border border-[#dedbd2] space-y-4">
                            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                                <span className="px-2.5 py-1 rounded-full bg-white text-stone-800 uppercase tracking-wider font-semibold">
                                    TECHNICAL ESSAYS & WRITING
                                </span>
                                <span className="text-stone-600 font-mono">
                                    Substack Publication
                                </span>
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-stone-950 font-sans">
                                    Beyond the Model
                                </h3>
                                <p className="text-xs font-mono text-stone-600">
                                    by Joshua Vinu Koshy
                                </p>
                            </div>

                            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                                Deep dives and essays on autonomous systems, foundation models, multi-agent reasoning dynamics, and the practical engineering of quantitative and offline AI architectures.
                            </p>

                            <div className="pt-2">
                                <a
                                    href="https://beyondthemodelbyjoshua.substack.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-white hover:bg-stone-800 text-xs font-mono uppercase tracking-wider transition-all"
                                >
                                    <FileText size={14} />
                                    <span>Read on Substack</span>
                                    <ExternalLink size={13} />
                                </a>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Research;