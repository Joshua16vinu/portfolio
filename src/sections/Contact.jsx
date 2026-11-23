import { useState } from "react";
import { Mail, MapPin, Copy, Check, Linkedin, Github, FileText, Clock, Briefcase, ArrowUpRight } from "lucide-react";

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("joshuvk16@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (
        <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[#dedbd2]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    
                    {/* Left Column */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                            09 // Direct Communication
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-sans leading-[1.08]">
                            Let's Connect & <br />
                            <span className="font-serif italic font-normal lowercase tracking-normal text-stone-800 text-3xl sm:text-4xl lg:text-[2.75rem]">
                                collaborate in stuttgart
                            </span>
                        </h2>
                        <p className="text-stone-600 text-sm leading-relaxed">
                            Open to discussing Werkstudent opportunities, HiWi research assistant roles, thesis inquiries, and software engineering collaborations.
                        </p>

                        <div className="p-5 rounded-2xl bg-white border border-[#dedbd2] space-y-2 text-xs">
                            <div className="font-bold text-stone-900 font-mono uppercase tracking-wider flex items-center gap-2">
                                <Briefcase size={14} className="text-emerald-700" />
                                Werkstudent Availability
                            </div>
                            <p className="text-stone-600 leading-relaxed font-normal">
                                Available for 20 hours/week during semester lecture periods, and full-time during university breaks. Based in Stuttgart, Germany (On-site, Hybrid, or Remote).
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Direct Channels (Zero phone number) */}
                    <div className="lg:col-span-7 space-y-6">
                        
                        {/* Email Card */}
                        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#dedbd2] shadow-sm space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                                    Primary Email Address
                                </div>
                                <button
                                    onClick={handleCopyEmail}
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-300 hover:border-stone-900 text-stone-800 text-xs font-mono transition-colors cursor-pointer"
                                >
                                    {copiedEmail ? (
                                        <>
                                            <Check size={12} className="text-emerald-700" />
                                            <span className="text-emerald-700 font-medium">Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={12} />
                                            <span>Copy email</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            <a
                                href="mailto:joshuvk16@gmail.com"
                                className="text-xl sm:text-2xl font-bold text-stone-950 hover:text-stone-600 transition-colors block font-sans"
                            >
                                joshuvk16@gmail.com
                            </a>

                            <div className="text-xs text-stone-500 font-mono">
                                Inquiries typically answered within 24 hours.
                            </div>
                        </div>

                        {/* Location & Timezone Details */}
                        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#dedbd2] shadow-sm space-y-3">
                            <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                                Location & Timezone
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-stone-700 pt-1">
                                <div className="space-y-1">
                                    <span className="text-stone-400 text-[10px] uppercase">CITY & STATE</span>
                                    <p className="font-semibold text-stone-950 flex items-center gap-1.5">
                                        <MapPin size={13} className="text-stone-900" />
                                        Stuttgart, Baden-Württemberg, Germany
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-stone-400 text-[10px] uppercase">TIME ZONE</span>
                                    <p className="font-semibold text-stone-950 flex items-center gap-1.5">
                                        <Clock size={13} className="text-stone-900" />
                                        CET / CEST (UTC+1)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social & Resume Links */}
                        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#dedbd2] shadow-sm flex flex-wrap items-center justify-between gap-4">
                            <div className="space-y-0.5">
                                <h4 className="text-sm font-bold text-stone-950 font-sans">
                                    Profiles & Verification
                                </h4>
                                <p className="text-xs text-stone-500 font-mono">
                                    Connect on professional networks or review source code.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href="https://linkedin.com/in/joshuavinukoshy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-mono uppercase tracking-wider transition-colors"
                                >
                                    <Linkedin size={13} />
                                    <span>LinkedIn</span>
                                    <ArrowUpRight size={12} />
                                </a>

                                <a
                                    href="https://github.com/Joshua16vinu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-mono uppercase tracking-wider transition-colors"
                                >
                                    <Github size={13} />
                                    <span>GitHub</span>
                                    <ArrowUpRight size={12} />
                                </a>

                                <a
                                    href="https://beyondthemodelbyjoshua.substack.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-mono uppercase tracking-wider transition-colors"
                                >
                                    <FileText size={13} />
                                    <span>Substack</span>
                                    <ArrowUpRight size={12} />
                                </a>

                                <a
                                    href="https://scholar.google.com/citations?hl=en&user=0xhyCuYAAAAJ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-mono uppercase tracking-wider transition-colors"
                                    title="Google Scholar Profile"
                                >
                                    {/* Google Scholar cap icon */}
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9 12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                                    </svg>
                                    <span>Scholar</span>
                                    <ArrowUpRight size={12} />
                                </a>

                                <a
                                    href="https://orcid.org/0009-0007-7608-289X"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-mono uppercase tracking-wider transition-colors"
                                    title="ORCID Profile"
                                >
                                    {/* ORCID logo */}
                                    <svg width="13" height="13" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zM86.3 186.2H70.9V79.1h15.4zm-7.7-119.4c-4.9 0-8.9-4-8.9-8.9s4-8.9 8.9-8.9 8.9 4 8.9 8.9-4 8.9-8.9 8.9zm113.1 119.4h-15.4v-55.4c0-5.8-.1-13.3-8.1-13.3-8.1 0-9.4 6.3-9.4 12.9v55.8h-15.4V79.1h14.8v6.8h.2c2.1-3.9 7.1-8.1 14.6-8.1 15.6 0 18.5 10.3 18.5 23.6v84.8z"/>
                                    </svg>
                                    <span>ORCID</span>
                                    <ArrowUpRight size={12} />
                                </a>

                                <a
                                    href="/Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 text-white hover:bg-stone-800 text-xs font-mono uppercase tracking-wider transition-colors"
                                >
                                    <FileText size={13} />
                                    <span>Download Resume</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;