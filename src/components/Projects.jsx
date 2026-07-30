import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Button from "../constants/Button";
import onlineClipboardImg from "../assets/images/onlineclipboard.webp";
import kingTechnologyImg from "../assets/images/kingtechnology.webp";
import jrBuildingImg from "../assets/images/jrbuilding.webp";
import rssPharmaImg from "../assets/images/rsspharma.webp";
import kingTextileImg from "../assets/images/kingtextile.webp";
import madhavImg from "../assets/images/madhavconstructions.webp";

const projects = [
    {
        title: "RSS Pharma",
        image: rssPharmaImg,
        description:
            "Professional pharmaceutical company website with responsive layout.",
        tech: ["Tailwind CSS", "JavaScript", "PHP", "MySQL"],
        live: "https://rsspharma.in/",
    },
    {
        title: "King Textile",
        image: kingTextileImg,
        description:
            "Modern textile business website showcasing products and company profile.",
        tech: ["Tailwind CSS", "JavaScript", "PHP", "MySQL"],
        live: "https://kingtextile.in/",
    },
    {
        title: "King Technology",
        image: kingTechnologyImg,
        description:
            "A responsive corporate website with modern UI and admin management features.",
        tech: ["Tailwind CSS", "JavaScript", "PHP", "MySQL"],
        live: "https://kingtechnology.in/",
    },
    {
        title: "Online Clipboard",
        image: onlineClipboardImg,
        description:
            "A secure online clipboard application for saving and accessing notes from anywhere.",
        tech: ["React", "Node.js", "MongoDB", "Express.js", "REST API"],
        live: "https://online-clipboard.in/",
    },
    {
        title: "JR Building",
        image: jrBuildingImg,
        description:
            "Construction company website with responsive design and service showcase.",
        tech: ["React.js", "Node.js", "Express.js"],
        live: "https://jrbuilding.in/",
    },
    {
        title: "Madhav Constructions",
        image: madhavImg,
        description:
            "Construction company website with modern UI, responsive design, services, contact forms and admin panel.",
        tech: ["React.js", "Node.js", "Express.js"],
        live: "http://madhavconstructions.com/",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },

    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            delay: i * 0.06,
            ease: "easeOut",
        },
    }),
};

function Projects() {

    return (
        <section id="projects" className="relative bg-background text-text py-24 px-6 overflow-hidden">
            {/* ambient grid backdrop */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">
                        Portfolio
                    </span>

                    <h2 className="text-5xl font-bold">
                        My <span className="text-primary">Projects</span>
                    </h2>

                    <p className="text-text-muted mt-5 max-w-3xl mx-auto text-lg">
                        Here are some of my featured web development projects.
                    </p>
                </motion.div>

                {/* Project grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="group relative bg-surface border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary hover:shadow-glow transition-colors duration-300 flex flex-col"
                        >
                            <div className="relative h-64 bg-[#111827] flex items-center justify-center overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-1">

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-text-muted mb-5 leading-7">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-card border border-border text-primary px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Button
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-auto px-5 py-3 rounded-lg"
                                >
                                    <FaArrowUpRightFromSquare />
                                    Live Preview
                                </Button>

                            </div>

                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;