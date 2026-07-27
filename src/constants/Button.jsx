import { motion } from "framer-motion";

function Button({
    href,
    type = "button",
    children,
    className = "",
    target,
    rel,
    onClick,
    download = false,
    disabled = false,
    variant = "primary",
}) {
    const base =
        "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-colors duration-300";

    const variants = {
        primary:
            "bg-primary hover:bg-primary-hover text-text shadow-card",

        outline:
            "border border-primary text-text hover:bg-primary hover:text-text",

        success:
            "bg-success text-text shadow-card",
    };

    // Button
    if (!href) {
        return (
            <motion.button
                type={type}
                onClick={onClick}
                disabled={disabled}
                whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
                whileTap={!disabled ? { scale: 0.97 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
                className={`${base} ${variants[variant]} ${className} ${disabled ? "opacity-70 cursor-not-allowed" : ""
                    }`}
            >
                {children}
            </motion.button>
        );
    }

    // Link
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