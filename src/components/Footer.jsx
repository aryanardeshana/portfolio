import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaEnvelope, FaPhone, FaArrowRight, } from "react-icons/fa6";
import logo from "../assets/images/logo.webp";
import { CONTACT } from "../constants/contact";
import LinkUnderline from "../constants/LinkUnderline";

const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
];

const socials = [
    { icon: FaGithub, href: CONTACT.links.github, label: "GitHub" },
    { icon: FaLinkedin, href: CONTACT.links.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: CONTACT.links.instagram, label: "Instagram" },
];

function Footer() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    const [showFloatingTop, setShowFloatingTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowFloatingTop(window.scrollY > 500);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <footer className="relative bg-background border-t border-border overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                    animate={{ backgroundPositionX: ["0%", "200%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 100%" }}
                />

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
                        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
                        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "44px 44px",
                    }}
                />
                <div className="relative max-w-7xl mx-auto px-6 py-14">
                    <div className="grid md:grid-cols-4 gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="md:col-span-2"
                        >
                            <motion.button
                                type="button"
                                onClick={() => scrollToSection("home")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-transparent border-0 p-0 cursor-pointer"
                            >
                                <img
                                    src={logo}
                                    alt="Aryan Ardeshana - Full Stack Developer"
                                    className="w-32 h-32 md:w-36 md:h-36 object-contain rounded-2xl transition-all duration-300 hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                                />
                            </motion.button>

                            <p className="text-text-muted mt-4 leading-7 max-w-md">
                                Full-Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, PHP, MySQL, JavaScript, and Tailwind CSS. Passionate about creating responsive, scalable, and user-friendly web applications with clean architecture, secure REST APIs, and modern UI/UX while continuously learning and improving my development skills.
                            </p>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-6"
                        >
                            <h3 className="text-xl font-bold text-text mb-5">
                                Quick <span className="text-primary">Links</span>
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link, i) => {
                                    return (
                                        <motion.li
                                            key={link.name}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: 0.2 + i * 0.08,
                                                duration: 0.4,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <LinkUnderline
                                                onClick={() => scrollToSection(link.id)}
                                            >
                                                {link.name}
                                            </LinkUnderline>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-6"
                        >
                            <h3 className="text-xl font-bold text-text mb-5">
                                Connect with <span className="text-primary">Me</span>
                            </h3>

                            <LinkUnderline
                                href={CONTACT.links.email}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mb-5 text-sm w-full"
                            >
                                <>
                                    <FaEnvelope className="mt-1 shrink-0" />
                                    <span className="break-all text-xs sm:text-sm">
                                        {CONTACT.email}
                                    </span>
                                </>
                            </LinkUnderline>
                            <LinkUnderline
                                href={CONTACT.links.phone}
                                className="mb-5 text-sm w-full"
                            >
                                <>
                                    <FaPhone className="mt-1 shrink-0" />
                                    <span className="text-xs sm:text-sm">
                                        {CONTACT.phone}
                                    </span>
                                </>
                            </LinkUnderline>

                            <div className="flex gap-4">
                                {socials.map((social, i) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={social.label}
                                            initial={{ opacity: 0, scale: 0.6 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -6, scale: 1.1, rotate: [0, -8, 8, 0] }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-lg hover:bg-primary hover:text-text hover:border-primary hover:shadow-glow transition-all duration-300"
                                        >
                                            <Icon />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
                    >
                        <p className="text-text-muted text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Aryan Ardeshana. All Rights Reserved.
                        </p>
                    </motion.div>
                </div >
            </footer >

            <AnimatePresence>
                {showFloatingTop && (
                    <motion.button
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        initial={{ opacity: 0, scale: 0.6, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.6, y: 20 }}
                        whileHover={{ y: -5, scale: 1.08 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary text-text flex items-center justify-center shadow-glow hover:bg-primary-hover transition-colors duration-300"
                        aria-label="Back to top"
                    >
                        <FaArrowUp />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}

export default Footer;