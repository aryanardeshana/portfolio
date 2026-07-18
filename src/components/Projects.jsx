import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

import clipboard from "../assets/projects/clipboard.png";
import kingtechnology from "../assets/projects/kingtechnology.png";
import jrbuilding from "../assets/projects/jrbuilding.png";
import rsspharma from "../assets/projects/rsspharma.png";
import kingtextile from "../assets/projects/kingtextile.png";

const projects = [
    {
        title: "Online Clipboard",
        image: clipboard,
        description:
            "A secure online clipboard application to save and access text from anywhere.",
        tech: ["React", "Node.js", "MongoDB"],
        live: "https://online-clipboard.in/",
        github: "#",
    },
    {
        title: "King Technology",
        image: kingtechnology,
        description:
            "Corporate business website with responsive UI and admin management.",
        tech: ["React", "PHP", "MySQL"],
        live: "https://kingtechnology.in/",
        github: "#",
    },
    {
        title: "JR Building",
        image: jrbuilding,
        description:
            "Construction company website with modern responsive design.",
        tech: ["React", "PHP", "MySQL"],
        live: "https://jrbuilding.in/",
        github: "#",
    },
    {
        title: "RSS Pharma",
        image: rsspharma,
        description:
            "Pharmaceutical company website with clean UI and responsive layout.",
        tech: ["React", "PHP", "MySQL"],
        live: "https://rsspharma.in/",
        github: "#",
    },
    {
        title: "King Textile",
        image: kingtextile,
        description:
            "Business website showcasing textile products and company information.",
        tech: ["React", "PHP", "MySQL"],
        live: "https://kingtextile.in/",
        github: "#",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="bg-background text-text py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-5xl font-bold">
                        My <span className="text-primary">Projects</span>
                    </h2>

                    <p className="text-text-muted mt-5 max-w-3xl mx-auto text-lg">
                        Some of my recent projects built using modern web technologies.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

                    {projects.map((project, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-surface rounded-xl overflow-hidden shadow-card hover:-translate-y-2 transition-all duration-300"
                        >

                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">

                                <h3 className="text-2xl font-bold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-text-muted leading-7">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-5">

                                    {project.tech.map((item, i) => (
                                        <span
                                            key={i}
                                            className="bg-card border border-border text-primary px-3 py-1 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}

                                </div>

                                <div className="flex gap-4 mt-6">

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-text px-5 py-3 rounded-lg font-medium transition-all duration-300"
                                    >
                                        <FaArrowUpRightFromSquare />
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-text px-5 py-3 rounded-lg font-medium transition-all duration-300"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;