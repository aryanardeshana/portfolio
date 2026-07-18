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
    hidden: { opacity: 0, y: 14, scale: 0.96 },
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
        <section id="skills" className="bg-background text-text py-24 px-6">
            <div className="max-w-5xl mx-auto">

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

                {/* Category tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mt-14"
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
                                    className={`text-xs font-semibold rounded-full px-2 py-0.5 ${isActive
                                        ? "bg-white/20 text-white"
                                        : "bg-card text-text-muted"
                                        }`}
                                >
                                    {category.skills.length}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Active category skill chips */}
                <div className="bg-surface rounded-2xl shadow-card p-8 md:p-10 mt-8 min-h-[220px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
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