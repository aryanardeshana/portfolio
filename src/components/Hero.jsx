import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload,
} from "react-icons/fa6";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiPhp,
    SiMongodb,
    SiMysql,
    SiGit,
    SiGithub,
    SiPostman,
} from "react-icons/si";
import { MdApi } from "react-icons/md";

import profile from "../assets/images/profile.jpg";
import resume from "../assets/pdf/Resume.pdf";

const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Front End Developer",
];

// Full tech stack - single outer ring, floating outside the photo border
const techStack = [
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss />, name: "CSS3" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiReact />, name: "React.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <MdApi />, name: "REST API" },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/**
 * Tracks whether the viewport is at/above the `md` breakpoint (768px),
 * so the orbit radius can shrink to fit small phone screens instead of
 * spilling icons over the header/nav.
 */
function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== "undefined" ? window.innerWidth >= 768 : true
    );

    useEffect(() => {
        const mql = window.matchMedia("(min-width: 768px)");
        const handler = (e) => setIsDesktop(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    return isDesktop;
}

/**
 * Renders a ring of orbiting tech icons that floats OUTSIDE the photo
 * border - never over the photo itself.
 *
 * Structure (3 levels, kept separate on purpose):
 * 1. positioner  - places the icon at its angle + radius on the circle (static)
 * 2. centerer    - pulls the icon back by half its own size so it's centered
 *                  on that point (static, plain CSS - not touched by Framer)
 * 3. motion.span - ONLY handles the counter-rotation animation, so it never
 *                  overwrites the centering transform above it
 */
function OrbitRing({ items, radius, duration }) {
    const angleStep = 360 / items.length;

    return (
        <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
            {items.map((tech, i) => {
                const angle = angleStep * i;
                return (
                    <div
                        key={tech.name}
                        className="absolute top-1/2 left-1/2 w-0 h-0"
                        style={{ transform: `rotate(${angle}deg) translateX(${radius}px)` }}
                    >
                        <div className="-translate-x-1/2 -translate-y-1/2">
                            <motion.span
                                className="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-surface border border-border shadow-card text-primary text-sm md:text-lg"
                                animate={{ rotate: -360 }}
                                transition={{ duration, repeat: Infinity, ease: "linear" }}
                                title={tech.name}
                            >
                                {tech.icon}
                            </motion.span>
                        </div>
                    </div>
                );
            })}
        </motion.div>
    );
}

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const isDesktop = useIsDesktop();
    const orbitRadius = isDesktop ? 235 : 145;

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2400);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen bg-background text-text flex items-center overflow-hidden"
        >
            {/* ambient grid backdrop - matches other sections */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />

            <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-16 py-20">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >

                        <motion.p variants={item} className="text-primary text-xl mb-3">
                            Hello, I'm
                        </motion.p>

                        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold leading-tight">
                            Aryan <br />
                            <span className="text-primary">
                                Ardeshana
                            </span>
                        </motion.h1>

                        <motion.div variants={item} className="mt-6 h-10 md:h-11 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={roles[roleIndex]}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -24 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                    className="text-2xl md:text-3xl text-text-secondary font-semibold"
                                >
                                    {roles[roleIndex]}
                                </motion.h2>
                            </AnimatePresence>
                        </motion.div>

                        <motion.p variants={item} className="mt-8 text-text-muted leading-8 text-lg max-w-xl">
                            Passionate Full Stack Developer with internship experience
                            building responsive websites, REST APIs and Admin Panels
                            using React, Node.js, Express, MongoDB, PHP and MySQL.
                            I love creating fast, modern and user-friendly web
                            applications.
                        </motion.p>

                        {/* Buttons */}

                        <motion.div variants={item} className="flex flex-wrap gap-5 mt-10">

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-primary hover:bg-primary-hover text-text px-8 py-4 rounded-xl font-semibold shadow-card transition-colors duration-300"
                            >
                                Hire Me
                            </motion.a>

                            <motion.a
                                href={resume}
                                download
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="border border-primary text-text hover:bg-primary hover:text-text px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-colors duration-300"
                            >
                                <FaDownload />
                                Download CV
                            </motion.a>

                        </motion.div>

                        {/* Social Icons */}

                        <motion.div variants={item} className="flex gap-6 mt-12 text-3xl text-text-secondary">

                            <motion.a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -4, scale: 1.15 }}
                                className="hover:text-primary transition-colors duration-300"
                            >
                                <FaGithub />
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -4, scale: 1.15 }}
                                className="hover:text-primary transition-colors duration-300"
                            >
                                <FaLinkedin />
                            </motion.a>

                            <motion.a
                                href="mailto:aryanpatel5423@gmail.com"
                                whileHover={{ y: -4, scale: 1.15 }}
                                className="hover:text-primary transition-colors duration-300"
                            >
                                <FaEnvelope />
                            </motion.a>

                        </motion.div>

                    </motion.div>

                    {/* Right Side */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center"
                    >

                        <div className="relative w-56 h-56 md:w-[420px] md:h-[420px]">

                            <div className="absolute -inset-2 rounded-full bg-primary blur-3xl opacity-30"></div>

                            {/* rotating gradient ring */}
                            <motion.div
                                className="absolute -inset-3 rounded-full text-primary opacity-50"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, currentColor 0%, transparent 20%, currentColor 40%, transparent 60%, currentColor 80%, transparent 100%)",
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            />

                            <img
                                src={profile}
                                alt="Aryan"
                                className="relative w-full h-full object-cover rounded-full border-4 border-primary shadow-glow"
                            />

                            {/* single outer ring - all 13 skills, radius adapts to screen size */}
                            <OrbitRing items={techStack} radius={orbitRadius} duration={34} />

                        </div>

                    </motion.div>

                </div>

                {/* scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="hidden md:flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-4 text-text-muted"
                >
                    <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
                    <motion.span
                        className="w-5 h-8 rounded-full border border-border flex justify-center pt-1.5"
                    >
                        <motion.span
                            className="w-1 h-1.5 rounded-full bg-primary"
                            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.span>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;