import { motion } from "framer-motion";

function Button({
    href,
    children,
    className = "",
    target,
    rel,
    onClick,
    download = false,
    variant = "primary",
}) {
    const base =
        "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-colors duration-300";

    const variants = {
        primary:
            "bg-primary hover:bg-primary-hover text-text shadow-card",

        outline:
            "border border-primary text-text hover:bg-primary hover:text-text",
    };

    return (
        <motion.a
            href={href}
            target={target}
            rel={rel}
            download={download}
            onClick={onClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.a>
    );
}

export default Button;