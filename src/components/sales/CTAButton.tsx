import { Rocket } from "lucide-react";

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
  const styles: Record<string, React.CSSProperties> = {
    orange: {
      background: "linear-gradient(135deg, #FF7A00 0%, #E56A00 100%)",
      boxShadow: "0 20px 60px -15px rgba(255, 122, 0, 0.55)",
    },
    purple: {
      background: "linear-gradient(145deg, #7B2CF5 0%, #5A1AB8 55%, #4A148C 100%)",
      boxShadow:
        "0 0 0 1px rgba(123,44,245,0.2), 0 0 40px rgba(123,44,245,0.45), 0 12px 40px rgba(74,20,140,0.5)",
    },
    default: {
      background: "linear-gradient(135deg, #FF7A00 0%, #E56A00 100%)",
      boxShadow: "0 20px 60px -15px rgba(255, 122, 0, 0.55)",
    },
  };

  const isPurple = variant === "purple";

  return (
    <a
      href={href}
      className={`relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl px-8 py-5 font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.025] hover:brightness-110 active:scale-[0.99] sm:text-lg ${isPurple ? "btn-cta-pulse" : ""} ${className}`}
      style={styles[variant]}
    >
      {/* Internal shine — only for purple */}
      {isPurple && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 75%)",
          }}
        />
      )}

      <span className="relative flex items-center gap-3">
        {isPurple && <Rocket className="h-5 w-5 shrink-0" aria-hidden />}
        {children}
      </span>
    </a>
  );
}
