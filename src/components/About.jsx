import { motion } from "framer-motion";
import {
    FaCode,
    FaLaptopCode,
    FaGraduationCap,
    FaBriefcase,
    FaUser,
    FaLocationDot,
} from "react-icons/fa6";

const infoItems = [
    { label: "Name", value: "Aryan Ardeshana", icon: <FaUser /> },
    { label: "Location", value: "Morbi, Gujarat", icon: <FaLocationDot /> },
    { label: "Education", value: "Bachelor of Computer Applications", icon: <FaGraduationCap /> },
    { label: "Experience", value: "6 Months Internship", icon: <FaBriefcase /> },
];

const highlightCards = [
    {
        icon: <FaLaptopCode />,
        title: "Web Development",
        desc: "Responsive modern web applications using React.",
    },
    {
        icon: <FaCode />,
        title: "Backend",
        desc: "Node.js, Express, PHP & REST APIs.",
    },
    {
        icon: <FaGraduationCap />,
        title: "Education",
        desc: "Bachelor of Computer Applications.",
    },
    {
        icon: <FaBriefcase />,
        title: "Experience",
        desc: "6 Months Internship at King Technology.",
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
    }),
};

function About() {
    return (
        <section
            id="about"
            className="relative bg-background text-text py-24 px-6 overflow-hidden"
        >
            {/* ambient grid backdrop - matches Skills section */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />

            <div className="relative max-w-7xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">
                        Get To Know Me
                    </span>

                    <h2 className="text-5xl font-bold">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <p className="text-text-muted mt-5 max-w-3xl mx-auto text-lg">
                        Passionate Full Stack Developer with internship experience
                        in MERN Stack, PHP and MySQL. I enjoy creating responsive,
                        scalable and user-friendly web applications.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-16 mt-20">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold relative inline-block">
                            Professional Summary
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-2 left-0 h-1 w-full bg-primary rounded-full origin-left"
                            />
                        </h3>

                        <p className="text-text-secondary leading-9 text-lg mt-8">
                            Hello! I'm <span className="text-primary font-semibold">
                                Aryan Ardeshana
                            </span>,
                            a passionate Full Stack Developer from Morbi, Gujarat.

                            I have completed my BCA and gained practical
                            experience during my internship at King Technology,
                            where I worked on responsive websites, admin panels,
                            REST APIs and database-driven web applications.
                        </p>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-10 grid sm:grid-cols-2 gap-5"
                        >
                            {infoItems.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    custom={i}
                                    variants={itemVariants}
                                    className="group flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary hover:shadow-glow transition-all duration-300"
                                >
                                    <span className="text-xl text-primary mt-0.5 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="font-bold text-primary text-sm">
                                            {item.label}
                                        </span>
                                        <span className="text-text-secondary">
                                            {item.value}
                                        </span>
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                        style={{ perspective: 900 }}
                    >
                        {highlightCards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -8, rotateX: 6, rotateY: -6, scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                className="group relative bg-card rounded-2xl p-8 overflow-hidden border border-transparent hover:border-primary hover:shadow-glow transition-colors duration-300"
                            >
                                <span className="absolute top-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />

                                <motion.span
                                    className="block text-5xl text-primary mb-5"
                                    whileHover={{ rotate: 8, scale: 1.15 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {card.icon}
                                </motion.span>

                                <h3 className="text-xl font-bold">
                                    {card.title}
                                </h3>

                                <p className="text-text-muted mt-3">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default About;