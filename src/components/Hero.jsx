import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload,
} from "react-icons/fa6";

import profile from "../assets/images/profile.jpg";
import resume from "../assets/pdf/Resume.pdf";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen bg-background text-text flex items-center"
        >
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 py-20">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <p className="text-primary text-xl mb-3">
                             Hello, I'm
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Aryan <br />
                            <span className="text-primary">
                                Ardeshana
                            </span>
                        </h1>

                        <h2 className="mt-6 text-2xl md:text-3xl text-text-secondary font-semibold">
                            Full Stack Developer
                        </h2>

                        <p className="mt-8 text-text-muted leading-8 text-lg max-w-xl">
                            Passionate Full Stack Developer with internship experience
                            building responsive websites, REST APIs and Admin Panels
                            using React, Node.js, Express, MongoDB, PHP and MySQL.
                            I love creating fast, modern and user-friendly web
                            applications.
                        </p>

                        {/* Buttons */}

                        <div className="flex flex-wrap gap-5 mt-10">

                            <a
                                href="#contact"
                                className="bg-primary hover:bg-primary-hover text-text px-8 py-4 rounded-xl font-semibold shadow-card transition-all duration-300"
                            >
                                Hire Me
                            </a>

                            <a
                                href={resume}
                                download
                                className="border border-primary text-text hover:bg-primary hover:text-text px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300"
                            >
                                <FaDownload />
                                Download CV
                            </a>

                        </div>

                        {/* Social Icons */}

                        <div className="flex gap-6 mt-12 text-3xl text-text-secondary">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="mailto:aryanpatel5423@gmail.com"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                <FaEnvelope />
                            </a>

                        </div>

                    </motion.div>

                    {/* Right Side */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center"
                    >

                        <div className="relative">

                            <div className="absolute -inset-2 rounded-full bg-primary blur-3xl opacity-30"></div>

                            <img
                                src={profile}
                                alt="Aryan"
                                className="relative w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-primary shadow-glow"
                            />

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Hero;