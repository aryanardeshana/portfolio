function LinkUnderline({
    href,
    children,
    className = "",
    target,
    rel,
    onClick,
    showUnderline = true,
}) {
    const content = (
        <span className="relative inline-flex items-center gap-2">
            {children}

            {showUnderline && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 origin-left bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            )}
        </span>
    );

    // If href exists, render as link
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                onClick={onClick}
                className={`group relative inline-flex items-center text-text-muted hover:text-primary transition-colors duration-300 ${className}`}
            >
                {content}
            </a>
        );
    }

    // Otherwise render as button
    return (
        <button
            type="button"
            onClick={onClick}
            className={`group relative inline-flex items-center text-text-muted hover:text-primary transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer ${className}`}
        >
            {content}
        </button>
    );
}

export default LinkUnderline;