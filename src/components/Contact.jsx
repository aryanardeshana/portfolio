import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    FaLocationDot,
    FaEnvelope,
    FaPhone,
    FaPaperPlane,
    FaCheck,
    FaTriangleExclamation,
} from "react-icons/fa6";

const contactInfo = [
    {
        icon: <FaLocationDot />,
        title: "Location",
        value: "Morbi, Gujarat, India",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        value: "your@email.com",
    },
    {
        icon: <FaPhone />,
        title: "Phone",
        value: "+91 XXXXX XXXXX",
    },
];

const infoVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
    }),
};

// Field limits live in one place so the UI and the validator always agree.
const LIMITS = {
    name: { min: 2, max: 50 },
    email: { max: 100 },
    subject: { min: 3, max: 80 },
    message: { min: 10, max: 500 },
};

const NAME_PATTERN = /^[A-Za-z\s'-]+$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "Enter your name", maxLength: LIMITS.name.max },
    { name: "email", label: "Email", type: "email", placeholder: "Enter your email", maxLength: LIMITS.email.max },
    { name: "subject", label: "Subject", type: "text", placeholder: "Subject", maxLength: LIMITS.subject.max },
];

function validateField(name, rawValue) {
    const value = rawValue.trim();

    switch (name) {
        case "name":
            if (!value) return "Name is required.";
            if (value.length < LIMITS.name.min) return `Name must be at least ${LIMITS.name.min} characters.`;
            if (value.length > LIMITS.name.max) return `Name must be under ${LIMITS.name.max} characters.`;
            if (!NAME_PATTERN.test(value)) return "Name can only contain letters, spaces, - and '.";
            return "";

        case "email":
            if (!value) return "Email is required.";
            if (value.length > LIMITS.email.max) return `Email must be under ${LIMITS.email.max} characters.`;
            if (!EMAIL_PATTERN.test(value)) return "Enter a valid email address.";
            return "";

        case "subject":
            if (!value) return "Subject is required.";
            if (value.length < LIMITS.subject.min) return `Subject must be at least ${LIMITS.subject.min} characters.`;
            if (value.length > LIMITS.subject.max) return `Subject must be under ${LIMITS.subject.max} characters.`;
            return "";

        case "message":
            if (!value) return "Message is required.";
            if (value.length < LIMITS.message.min) return `Message must be at least ${LIMITS.message.min} characters.`;
            if (value.length > LIMITS.message.max) return `Message must be under ${LIMITS.message.max} characters.`;
            return "";

        default:
            return "";
    }
}

function Contact() {
    const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [focused, setFocused] = useState(null);
    const [status, setStatus] = useState("idle"); // idle | sending | sent

    const handleChange = (e) => {
        const { name, value } = e.target;
        const limit = LIMITS[name]?.max;

        // Hard stop at the character limit instead of only flagging it after the fact.
        if (limit && value.length > limit) return;

        setValues((prev) => ({ ...prev, [name]: value }));

        if (touched[name]) {
            setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setFocused(null);
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (status !== "idle") return;

        const nextErrors = Object.fromEntries(
            Object.keys(values).map((name) => [name, validateField(name, values[name])])
        );
        setErrors(nextErrors);
        setTouched({ name: true, email: true, subject: true, message: true });

        const hasErrors = Object.values(nextErrors).some(Boolean);
        if (hasErrors) return;

        setStatus("sending");
        setTimeout(() => {
            setStatus("sent");
            setTimeout(() => {
                setStatus("idle");
                setValues({ name: "", email: "", subject: "", message: "" });
                setTouched({});
                setErrors({});
            }, 1800);
        }, 1200);
    };

    return (
        <section
            id="contact"
            className="relative bg-background text-text py-24 px-6 min-h-screen flex items-center overflow-hidden"
        >
            {/* ambient grid backdrop */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
            />

            <div className="relative max-w-7xl mx-auto w-full">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">
                        Get In Touch
                    </span>

                    <h2 className="text-5xl font-bold">
                        Contact <span className="text-primary">Me</span>
                    </h2>

                    <p className="text-text-muted mt-5 max-w-2xl mx-auto">
                        Have a project in mind or looking for a React / MERN Stack
                        Developer? Feel free to contact me.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-14 mt-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-surface rounded-2xl shadow-card border border-border p-8"
                    >
                        <h3 className="text-3xl font-bold mb-8">
                            Let's Connect
                        </h3>

                        <div className="space-y-8">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    custom={i}
                                    variants={infoVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{ x: 6 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group flex gap-5"
                                >
                                    <motion.div
                                        whileHover={{ rotate: -8, scale: 1.08 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-text text-xl shrink-0 group-hover:shadow-glow transition-shadow duration-300"
                                    >
                                        {item.icon}
                                    </motion.div>

                                    <div>
                                        <h4 className="font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                                            {item.title}
                                        </h4>

                                        <p className="text-text-muted">
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative pulse rail, echoes the Skills section language */}
                        <div className="relative mt-10 h-px bg-border overflow-hidden">
                            <motion.span
                                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
                                animate={{ left: ["0%", "100%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        noValidate
                        className="relative bg-surface rounded-2xl shadow-card border border-border p-8 space-y-6"
                    >
                        {fields.map((field) => {
                            const hasError = touched[field.name] && errors[field.name];

                            return (
                                <div key={field.name} className="relative">
                                    <div className="flex items-center justify-between mb-2">
                                        <label htmlFor={field.name} className="font-medium">
                                            {field.label}
                                        </label>

                                        {LIMITS[field.name]?.max && (
                                            <span
                                                className={`text-xs ${values[field.name].length >= LIMITS[field.name].max
                                                    ? "text-danger"
                                                    : "text-text-muted"
                                                    }`}
                                            >
                                                {values[field.name].length}/{LIMITS[field.name].max}
                                            </span>
                                        )}
                                    </div>

                                    <input
                                        id={field.name}
                                        type={field.type}
                                        name={field.name}
                                        value={values[field.name]}
                                        onChange={handleChange}
                                        onFocus={() => setFocused(field.name)}
                                        onBlur={handleBlur}
                                        placeholder={field.placeholder}
                                        maxLength={field.maxLength}
                                        aria-invalid={Boolean(hasError)}
                                        aria-describedby={hasError ? `${field.name}-error` : undefined}
                                        className={`relative z-10 w-full bg-card border rounded-lg px-4 py-3 outline-none transition-colors duration-300 ${hasError
                                            ? "border-danger focus:border-danger"
                                            : "border-border focus:border-primary"
                                            }`}
                                    />

                                    <motion.span
                                        initial={false}
                                        animate={{ width: focused === field.name ? "100%" : "0%" }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full ${hasError ? "bg-danger" : "bg-primary"
                                            }`}
                                    />

                                    <AnimatePresence>
                                        {hasError && (
                                            <motion.p
                                                id={`${field.name}-error`}
                                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="flex items-center gap-1.5 text-xs text-danger overflow-hidden"
                                            >
                                                <FaTriangleExclamation className="shrink-0" />
                                                {errors[field.name]}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}

                        <div className="relative">
                            <div className="flex items-center justify-between mb-2">
                                <label htmlFor="message" className="font-medium">
                                    Message
                                </label>

                                <span
                                    className={`text-xs ${values.message.length >= LIMITS.message.max
                                        ? "text-danger"
                                        : "text-text-muted"
                                        }`}
                                >
                                    {values.message.length}/{LIMITS.message.max}
                                </span>
                            </div>

                            <textarea
                                id="message"
                                rows="6"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                onFocus={() => setFocused("message")}
                                onBlur={handleBlur}
                                placeholder="Write your message... (min 10 characters)"
                                maxLength={LIMITS.message.max}
                                aria-invalid={Boolean(touched.message && errors.message)}
                                aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                                className={`relative z-10 w-full bg-card border rounded-lg px-4 py-3 outline-none resize-none transition-colors duration-300 ${touched.message && errors.message
                                    ? "border-danger focus:border-danger"
                                    : "border-border focus:border-primary"
                                    }`}
                            />

                            <motion.span
                                initial={false}
                                animate={{ width: focused === "message" ? "100%" : "0%" }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full ${touched.message && errors.message ? "bg-danger" : "bg-primary"
                                    }`}
                            />

                            <AnimatePresence>
                                {touched.message && errors.message && (
                                    <motion.p
                                        id="message-error"
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center gap-1.5 text-xs text-danger overflow-hidden"
                                    >
                                        <FaTriangleExclamation className="shrink-0" />
                                        {errors.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status !== "idle"}
                            whileHover={status === "idle" ? { y: -2 } : {}}
                            whileTap={status === "idle" ? { scale: 0.98 } : {}}
                            className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-300 ${status === "sent"
                                ? "bg-success text-text"
                                : "bg-primary hover:bg-primary-hover hover:shadow-glow text-text"
                                } disabled:cursor-not-allowed`}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {status === "idle" && (
                                    <motion.span
                                        key="idle"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center gap-2"
                                    >
                                        <FaPaperPlane />
                                        Send Message
                                    </motion.span>
                                )}

                                {status === "sending" && (
                                    <motion.span
                                        key="sending"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center gap-2"
                                    >
                                        <motion.span
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                            className="w-4 h-4 border-2 border-text/40 border-t-text rounded-full"
                                        />
                                        Sending...
                                    </motion.span>
                                )}

                                {status === "sent" && (
                                    <motion.span
                                        key="sent"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center gap-2"
                                    >
                                        <FaCheck />
                                        Message Sent
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;