import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ href = "#oferta", children, className = "" }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-xl px-8 py-5 text-base font-bold uppercase tracking-wide text-cta-foreground transition-all duration-300 hover:scale-[1.02] hover:brightness-110 sm:text-lg ${className}`}
      style={{
        background: "var(--gradient-cta)",
        boxShadow: "var(--shadow-cta)",
      }}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
