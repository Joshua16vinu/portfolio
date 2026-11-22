import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X, FileText } from "lucide-react";

const NavLink = ({ href, children, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) onClick();

        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className="text-xs font-mono uppercase tracking-widest text-stone-600 hover:text-stone-950 transition-colors py-1 relative group cursor-pointer"
        >
            <span>{children}</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-stone-900 transition-all duration-200 group-hover:w-full" />
        </a>
    );
};

const MobileMenu = ({ isOpen, onClose, links }) => {
    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 bg-[#f2f0ea]/98 backdrop-blur-xl z-[9999] flex flex-col p-6 sm:p-10 pointer-events-auto"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center pb-6 border-b border-[#dedbd2]">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-600" />
                            <span className="text-sm font-bold uppercase tracking-wider text-stone-950 font-sans">
                                Joshua Vinu Koshy
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2.5 text-stone-700 hover:text-stone-950 rounded-full border border-[#dedbd2] bg-white transition-colors cursor-pointer"
                            aria-label="Close menu"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Nav Links List */}
                    <div className="flex flex-col gap-6 justify-center flex-grow py-8 font-sans">
                        {links.map((link, idx) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClose();
                                    const element = document.getElementById(link.href.replace("#", ""));
                                    if (element) element.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900 hover:text-stone-600 transition-colors flex items-center justify-between group"
                            >
                                <span>{link.label}</span>
                                <span className="text-xs font-mono text-stone-400 group-hover:text-stone-900 transition-colors">
                                    0{idx + 1}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-6 border-t border-[#dedbd2] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-stone-600">
                        <div className="flex items-center gap-3">
                            <a
                                href="https://beyondthemodelbyjoshua.substack.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-stone-950 transition-colors inline-flex items-center gap-1"
                            >
                                <span>Substack</span>
                                <ArrowUpRight size={12} />
                            </a>
                            <span>•</span>
                            <a
                                href="https://github.com/Joshua16vinu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-stone-950 transition-colors inline-flex items-center gap-1"
                            >
                                <span>GitHub</span>
                                <ArrowUpRight size={12} />
                            </a>
                        </div>
                        <a
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors"
                        >
                            <FileText size={14} />
                            <span>Download Resume (PDF)</span>
                            <ArrowUpRight size={13} />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#research", label: "Research" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#achievements", label: "Honors" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-[#f2f0ea]/90 backdrop-blur-md border-b border-[#dedbd2] py-3.5 shadow-sm"
                        : "bg-transparent py-5 sm:py-6"
                }`}
            >
                <div className="max-w-6xl mx-auto px-5 sm:px-8 flex justify-between items-center">
                    
                    {/* Brand Identifier (Exact reference style: • DOMINIC style) */}
                    <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
                        <span className="w-2.5 h-2.5 rounded-full bg-stone-900 group-hover:scale-125 transition-transform" />
                        <span className="text-sm font-extrabold uppercase tracking-widest text-stone-950 font-sans">
                            Joshua Vinu Koshy
                        </span>
                    </a>

                    {/* Un-congested Desktop Navigation (Clean, spacious core links) */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
                        {navLinks.map((link) => (
                            <NavLink key={link.label} href={link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right Side: Clean Pill Buttons (Matching reference image) */}
                    <div className="flex items-center gap-3">
                        <a
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 hover:border-stone-900 bg-white/70 text-xs font-mono uppercase tracking-wider text-stone-900 hover:bg-white transition-all shadow-subtle"
                        >
                            <span>Resume</span>
                            <ArrowUpRight size={13} />
                        </a>

                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono uppercase tracking-wider transition-all cursor-pointer shadow-subtle"
                            aria-label="Toggle menu"
                        >
                            <span>Menu</span>
                            <span className="font-mono text-sm leading-none">☰</span>
                        </button>
                    </div>

                </div>
            </header>

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                links={navLinks}
            />
        </>
    );
};

export default Navbar;