interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "orange" | "purple" | "default";
}

export function CTAButton({
  href = "#oferta",
  children,
  className = "text-lg text-center",
  variant = "default",
}: CTAButtonProps) {
  const styles = {
    orange: {
      background: "linear-gradient(135deg, #FF7A00 0%, #E56A00 100%)",
      boxShadow: "0 20px 60px -15px rgba(255, 122, 0, 0.55)",
    },
    purple: {
      background: "linear-gradient(135deg, #6D1CC3 0%, #531790 100%)",
      boxShadow: "0 20px 60px -15px rgba(109, 28, 195, 0.55)",
    },
    default: {
      background: "linear-gradient(135deg, #FF7A00 0%, #E56A00 100%)",
      boxShadow: "0 20px 60px -15px rgba(255, 122, 0, 0.55)",
    },
  };

  return (
    <a
      href={href}
      className={`inline-flex w-full items-center justify-center rounded-xl px-8 py-5 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110 sm:text-lg ${className}`}
      style={styles[variant]}
    >
      {children}
    </a>
  );
}
