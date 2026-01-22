import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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
            className="relative hover:text-vscode-blue transition-colors duration-300 cursor-pointer"
        >
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1">
                {children}
            </span>
        </a>
    );
};

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" /><path d="m6 6 18 18" />
    </svg>
);

const MobileMenu = ({ isOpen, onClose, links }) => {
    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 bg-black/98 backdrop-blur-xl z-[9999] flex flex-col pointer-events-auto"
                >
                    {/* Header with Close Button */}
                    <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
                        <span className="text-sm font-bold tracking-tight text-white logo-font">
                            JOSHUA.DEV
                        </span>
                        <button
                            onClick={onClose}
                            className="p-2 -mr-2 text-white hover:text-vscode-blue transition-colors"
                        >
                            <XIcon />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-6 font-mono text-xl text-white items-center justify-center flex-grow p-6">
                        {links.map((link) => (
                            <NavLink
                                key={link.label}
                                href={link.href}
                                onClick={onClose}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="p-6 text-center text-secondary/40 text-xs font-mono border-t border-white/10">
                        © 2024 JOSHUA V K
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: "#about", label: "ABOUT" },
        { href: "#experience", label: "JOURNEY" },
        { href: "#projects", label: "WORK" },
        { href: "#skills", label: "TECH" },
        { href: "#leadership", label: "LEADERSHIP" },
        { href: "#achievements", label: "AWARDS" },
        { href: "#contact", label: "CONTACT" },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 bg-background/80 backdrop-blur-sm pointer-events-none"
            >
                <a href="#" className="text-sm font-bold tracking-tight pointer-events-auto mix-blend-difference text-white logo-font hover:scale-105 transition-transform z-50">
                    JOSHUA.DEV
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 font-mono text-xs text-white mix-blend-difference pointer-events-auto">
                    {navLinks.map((link) => (
                        <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="md:hidden pointer-events-auto text-white z-50 mix-blend-difference"
                >
                    <MenuIcon />
                </button>
            </motion.nav>

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                links={navLinks}
            />
        </>
    );
};

export default Navbar;
