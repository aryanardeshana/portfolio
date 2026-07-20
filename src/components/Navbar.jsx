import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

import logo from "../assets/images/logo.png";

const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const mobileList = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.07, delayChildren: 0.05 },
    },
};

const mobileItem = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState("home");

    // Smooth scroll-progress bar shown along the bottom edge of the navbar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });

    // Shrink & strengthen the navbar background once the page is scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Track which section is currently in view to move the underline indicator
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        navLinks.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Close mobile menu with the Escape key
    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50 transition-all duration-300 ${scrolled ? "shadow-card" : "shadow-none"
                }`}
        >
            <div
                className={`relative z-20 max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${scrolled ? "py-3" : "py-5"
                    }`}
            >

                {/* Logo */}
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer shrink-0"
                >
                    <img
                        src={logo}
                        alt="Aryan Ardeshana - Full Stack Developer"
                        className="h-14 md:h-16 w-auto object-contain -my-3 md:-my-4"
                    />
                </motion.a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-text font-medium">
                    {navLinks.map(({ id, label }) => {
                        const isActive = activeId === id;
                        return (
                            <li key={id} className="relative py-1">
                                <motion.a
                                    href={`#${id}`}
                                    whileHover={{ y: -2 }}
                                    className={`inline-block transition-colors duration-300 hover:text-primary ${isActive ? "text-primary" : ""
                                        }`}
                                >
                                    {label}
                                </motion.a>
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Hire Me Button */}
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="hidden md:block bg-primary hover:bg-primary-hover text-text px-5 py-2 rounded-lg font-semibold shadow-card transition-colors duration-300"
                >
                    Hire Me
                </motion.a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden relative w-8 h-8 text-text transition-colors duration-300 hover:text-primary"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={menuOpen ? "close" : "open"}
                            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 flex items-center justify-center text-3xl"
                        >
                            {menuOpen ? <FaXmark /> : <FaBars />}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </div>

            {/* Scroll progress bar */}
            <motion.div
                className="h-[3px] bg-primary origin-left"
                style={{ scaleX }}
            />

            {/* Backdrop - click outside the mobile menu to close it */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setMenuOpen(false)}
                        className="md:hidden fixed inset-0 bg-black/40"
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden relative bg-surface border-t border-border overflow-hidden"
                    >
                        <motion.ul
                            variants={mobileList}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col items-center py-6 gap-6 text-lg text-text"
                        >
                            {navLinks.map(({ id, label }) => (
                                <motion.li key={id} variants={mobileItem}>
                                    <a
                                        href={`#${id}`}
                                        onClick={() => setMenuOpen(false)}
                                        className={`transition-colors duration-300 hover:text-primary ${activeId === id ? "text-primary" : ""
                                            }`}
                                    >
                                        {label}
                                    </a>
                                </motion.li>
                            ))}

                            <motion.li variants={mobileItem}>
                                <a
                                    href="#contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="bg-primary hover:bg-primary-hover text-text px-5 py-2 rounded-lg font-semibold transition-all duration-300"
                                >
                                    Hire Me
                                </a>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;