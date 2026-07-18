import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md shadow-card border-b border-border z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-3xl font-bold cursor-pointer"
                >
                    <span className="text-primary">Aryan</span>
                    <span className="text-text">.</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-text font-medium">
                    <li>
                        <a
                            href="#home"
                            className="transition-all duration-300 hover:text-primary"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            className="transition-all duration-300 hover:text-primary"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            className="transition-all duration-300 hover:text-primary"
                        >
                            Skills
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className="transition-all duration-300 hover:text-primary"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="transition-all duration-300 hover:text-primary"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Hire Me Button */}
                <a
                    href="#contact"
                    className="hidden md:block bg-primary hover:bg-primary-hover text-text px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-card"
                >
                    Hire Me
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl text-text transition-colors duration-300 hover:text-primary"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaXmark /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-surface border-t border-border">
                    <ul className="flex flex-col items-center py-6 gap-6 text-lg text-text">

                        <li>
                            <a
                                href="#home"
                                onClick={() => setMenuOpen(false)}
                                className="transition-colors duration-300 hover:text-primary"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                onClick={() => setMenuOpen(false)}
                                className="transition-colors duration-300 hover:text-primary"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#skills"
                                onClick={() => setMenuOpen(false)}
                                className="transition-colors duration-300 hover:text-primary"
                            >
                                Skills
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                onClick={() => setMenuOpen(false)}
                                className="transition-colors duration-300 hover:text-primary"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="transition-colors duration-300 hover:text-primary"
                            >
                                Contact
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="bg-primary hover:bg-primary-hover text-text px-5 py-2 rounded-lg font-semibold transition-all duration-300"
                            >
                                Hire Me
                            </a>
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;