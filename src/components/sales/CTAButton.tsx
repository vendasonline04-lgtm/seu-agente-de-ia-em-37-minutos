interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "orange";
}

export function CTAButton({
  href = "#oferta",
  children,
  className = "",
  variant = "default",
}: CTAButtonProps) {
  const isOrange = variant === "orange";
  return (
    <a
      href={href}
      className={`inline-flex w-full items-center justify-center rounded-xl px-8 py-5 text-base font-bold uppercase tracking-wide text-cta-foreground transition-all duration-300 hover:scale-[1.02] hover:brightness-110 sm:text-lg ${className}`}
      style={{
        background: isOrange
          ? "linear-gradient(135deg, #FF7A00 0%, #E56A00 100%)"
          : "var(--gradient-cta)",
        boxShadow: isOrange
          ? "0 20px 60px -15px rgba(255, 122, 0, 0.55)"
          : "var(--shadow-cta)",
      }}
    >
      {children}
    </a>
  );
}
