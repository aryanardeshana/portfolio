import { motion } from "framer-motion";
import {
    FaCode,
    FaLaptopCode,
    FaGraduationCap,
    FaBriefcase,
} from "react-icons/fa6";

function About() {
    return (
        <section
            id="about"
            className="bg-background text-text py-24 px-6"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
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

                        <h3 className="text-3xl font-bold">
                             Professional Summary
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

                        <div className="mt-10 grid sm:grid-cols-2 gap-5">

                            <div>
                                <h4 className="font-bold text-primary">
                                    Name
                                </h4>

                                <p className="text-text-secondary">
                                    Aryan Ardeshana
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-primary">
                                    Location
                                </h4>

                                <p className="text-text-secondary">
                                    Morbi, Gujarat
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-primary">
                                    Education
                                </h4>

                                <p className="text-text-secondary">
                                    Bachelor of Computer Applications
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-primary">
                                    Experience
                                </h4>

                                <p className="text-text-secondary">
                                    6 Months Internship
                                </p>
                            </div>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >

                        <div className="bg-card rounded-2xl p-8 hover:scale-105 duration-300">
                            <FaLaptopCode className="text-5xl text-primary mb-5" />

                            <h3 className="text-xl font-bold">
                                Web Development
                            </h3>

                            <p className="text-text-muted mt-3">
                                Responsive modern web applications using React.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 hover:scale-105 duration-300">
                            <FaCode className="text-5xl text-primary mb-5" />

                            <h3 className="text-xl font-bold">
                                Backend
                            </h3>

                            <p className="text-text-muted mt-3">
                                Node.js, Express, PHP & REST APIs.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 hover:scale-105 duration-300">
                            <FaGraduationCap className="text-5xl text-primary mb-5" />

                            <h3 className="text-xl font-bold">
                                Education
                            </h3>

                            <p className="text-text-muted mt-3">
                                Bachelor of Computer Applications.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 hover:scale-105 duration-300">
                            <FaBriefcase className="text-5xl text-primary mb-5" />

                            <h3 className="text-xl font-bold">
                                Experience
                            </h3>

                            <p className="text-text-muted mt-3">
                                6 Months Internship at King Technology.
                            </p>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default About;