import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
    {
        title: "Online Clipboard",
        image: "https://placehold.co/600x400/111827/06b6d4?text=Online+Clipboard",
        description:
            "A secure online clipboard application for saving and accessing notes from anywhere.",
        tech: ["React", "Node.js", "MongoDB","Express.js", "REST API"],
        live: "https://online-clipboard.in/",
    },
    {
        title: "King Technology",
        image: "https://placehold.co/600x400/111827/06b6d4?text=King+Technology",
        description:
            "A responsive corporate website with modern UI and admin management features.",
        tech: ["Tailwind CSS","JavaScript", "PHP", "MySQL"],
        live: "https://kingtechnology.in/",
    },
    {
        title: "JR Building",
        image: "https://placehold.co/600x400/111827/06b6d4?text=JR+Building",
        description:
            "Construction company website with responsive design and service showcase.",
        tech: ["React.js","Node.js","Express.js"],
        live: "https://jrbuilding.in/",
    },
    {
        title: "RSS Pharma",
        image: "https://placehold.co/600x400/111827/06b6d4?text=RSS+Pharma",
        description:
            "Professional pharmaceutical company website with responsive layout.",
        tech: ["Tailwind CSS","JavaScript", "PHP", "MySQL"],
        live: "https://rsspharma.in/",
    },
    {
        title: "King Textile",
        image: "https://placehold.co/600x400/111827/06b6d4?text=King+Textile",
        description:
            "Modern textile business website showcasing products and company profile.",
        tech: ["Tailwind CSS","JavaScript", "PHP", "MySQL"],
        live: "https://kingtextile.in/",
    },
    {
        title: "Madhav Constructions",
        image: "https://placehold.co/600x400/111827/06b6d4?text=Madhav+Constructions",
        description:
            "Construction company website with modern UI, responsive design, services, contact forms and admin panel.",
        tech: ["React.js","Node.js","Express.js"],
        live: "http://madhavconstructions.com/",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -12, scale: 0.97, transition: { duration: 0.15 } },
};

function Projects() {
    const filters = useMemo(() => {
        const unique = new Set();
        projects.forEach((p) => p.tech.forEach((t) => unique.add(t)));
        return ["All", ...Array.from(unique)];
    }, []);

    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.tech.includes(activeFilter));

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

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mt-14"
                >
                    {filters.map((filter) => {
                        const isActive = filter === activeFilter;
                        const count =
                            filter === "All"
                                ? projects.length
                                : projects.filter((p) => p.tech.includes(filter)).length;

                        return (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`relative flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 ${isActive
                                    ? "bg-primary text-white border-primary shadow-glow"
                                    : "bg-surface text-text-secondary border-border hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {isActive && (
                                    <motion.span
                                        className="absolute inset-0 rounded-full border-2 border-primary"
                                        animate={{ scale: [1, 1.12], opacity: [0.5, 0] }}
                                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                                    />
                                )}
                                <span className="relative z-10 font-medium">{filter}</span>
                                <span
                                    className={`relative z-10 text-xs font-semibold rounded-full px-2 py-0.5 ${isActive ? "bg-white/20 text-white" : "bg-card text-text-muted"
                                        }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Project grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="group relative bg-surface border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary hover:shadow-glow transition-colors duration-300"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6">
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

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-lg transition duration-300"
                                    >
                                        <FaArrowUpRightFromSquare />
                                        Live Preview
                                    </a>
                                </div>

                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

export default Projects;