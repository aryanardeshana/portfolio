import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
    FaCode,
    FaServer,
    FaDatabase,
    FaToolbox,
} from "react-icons/fa6";

import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiPhp,
    SiMongodb,
    SiMysql,
    SiGit,
    SiGithub,
    SiPostman,
    SiVscodium,
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        icon: <FaCode />,
        skills: [
            { name: "HTML5", icon: <SiHtml5 /> },
            { name: "CSS3", icon: <SiCss /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "React.js", icon: <SiReact /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Bootstrap", icon: <SiBootstrap /> },
        ],
    },
    {
        title: "Backend",
        icon: <FaServer />,
        skills: [
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "PHP", icon: <SiPhp /> },
        ],
    },
    {
        title: "Database",
        icon: <FaDatabase />,
        skills: [
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "MySQL", icon: <SiMysql /> },
        ],
    },
    {
        title: "Tools",
        icon: <FaToolbox />,
        skills: [
            { name: "Git", icon: <SiGit /> },
            { name: "GitHub", icon: <SiGithub /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "VS Code", icon: <SiVscodium /> },
        ],
    },
];

const chipVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.94 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.35, delay: i * 0.05, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -8, scale: 0.96, transition: { duration: 0.15 } },
};

function Skills() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeCategory = skillCategories[activeIndex];

    return (
        <section id="skills" className="relative bg-background text-text py-24 px-6 overflow-hidden">
            {/* ambient grid backdrop */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />

            <div className="relative max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">
                        Tech Stack
                    </span>

                    <h2 className="text-5xl font-bold">
                        My <span className="text-primary">Skills</span>
                    </h2>

                    <p className="text-text-muted mt-5 max-w-2xl mx-auto text-lg">
                        Technologies and tools I use to build fast,
                        responsive and scalable web applications.
                    </p>
                </motion.div>

                {/* Mobile tab bar (horizontal pills) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="flex md:hidden flex-wrap justify-center gap-3 mt-14"
                >
                    {skillCategories.map((category, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={category.title}
                                onClick={() => setActiveIndex(index)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 ${isActive
                                    ? "bg-primary text-white border-primary shadow-glow"
                                    : "bg-surface text-text-secondary border-border hover:border-primary hover:text-primary"
                                    }`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span className="font-medium">{category.title}</span>
                                <span
                                    className={`text-xs font-semibold rounded-full px-2 py-0.5 ${isActive ? "bg-white/20 text-white" : "bg-card text-text-muted"
                                        }`}
                                >
                                    {category.skills.length}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Desktop layout: pipeline rail + content */}
                <div className="hidden md:grid grid-cols-[220px_1fr] gap-10 mt-16 items-start">
                    {/* Pipeline rail */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        {skillCategories.map((category, index) => {
                            const isActive = index === activeIndex;
                            const isLast = index === skillCategories.length - 1;
                            return (
                                <div key={category.title} className="flex flex-col">
                                    <button
                                        onClick={() => setActiveIndex(index)}
                                        className="group flex items-center gap-3 text-left"
                                    >
                                        <span
                                            className={`relative flex items-center justify-center w-11 h-11 rounded-full border-2 shrink-0 transition-all duration-300 ${isActive
                                                ? "border-primary bg-primary text-white shadow-glow"
                                                : "border-border bg-surface text-text-muted group-hover:border-primary group-hover:text-primary"
                                                }`}
                                        >
                                            {isActive && (
                                                <motion.span
                                                    className="absolute inset-0 rounded-full border-2 border-primary"
                                                    animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                                                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                                                />
                                            )}
                                            <span className="text-lg relative z-10">{category.icon}</span>
                                        </span>

                                        <span className="flex flex-col">
                                            <span
                                                className={`font-semibold transition-colors duration-300 ${isActive ? "text-primary" : "text-text-secondary group-hover:text-primary"
                                                    }`}
                                            >
                                                {category.title}
                                            </span>
                                            <span className="text-xs text-text-muted">
                                                {category.skills.length} skills
                                            </span>
                                        </span>
                                    </button>

                                    {!isLast && (
                                        <div className="relative w-px h-10 bg-border ml-[22px] overflow-hidden">
                                            <motion.span
                                                className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                                                animate={{ top: ["-10%", "110%"] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: index * 0.35,
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Active category skill grid */}
                    <div className="bg-surface rounded-2xl shadow-card p-8 md:p-10 min-h-[260px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory.title}
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.25 }}
                                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                                style={{ perspective: 800 }}
                            >
                                {activeCategory.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        custom={i}
                                        variants={chipVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        whileHover={{ y: -6, rotateX: 6, rotateY: -6, scale: 1.03 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                        className="group relative flex flex-col items-center gap-3 bg-card border border-border rounded-xl px-4 py-6 overflow-hidden hover:border-primary hover:shadow-glow transition-colors duration-300"
                                    >
                                        <motion.span
                                            className="text-3xl text-primary"
                                            whileHover={{ rotate: 8, scale: 1.15 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            {skill.icon}
                                        </motion.span>
                                        <span className="text-text-secondary font-medium text-sm text-center">
                                            {skill.name}
                                        </span>
                                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile skill grid (kept simple, no rail) */}
                <div className="md:hidden bg-surface rounded-2xl shadow-card p-8 mt-8 min-h-[220px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                        >
                            {activeCategory.skills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    custom={i}
                                    variants={chipVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="group flex flex-col items-center gap-3 bg-card border border-border rounded-xl px-4 py-6 hover:border-primary hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </span>
                                    <span className="text-text-secondary font-medium text-sm text-center">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default Skills;