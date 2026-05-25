import propack from "@/assets/propack.png";
import { CTAButton } from "./CTAButton";
import { ShieldCheck, Lock, Star } from "lucide-react";

export function OfferCTA2() {
  return (
    <section className="bg-background px-4 py-10 text-foreground sm:py-14">
      <div className="mx-auto max-w-3xl">
        <div
          className="relative overflow-hidden rounded-3xl border-2 border-accent/20 bg-card"
          style={{ boxShadow: "var(--shadow-cta)" }}
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-alert/10 blur-3xl" />

          <div className="relative flex flex-col sm:flex-row">
            {/* Left — product image */}
            <div className="flex shrink-0 items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5 p-6 sm:w-2/5 sm:rounded-l-3xl">
              <img
                src={propack}
                alt="Pacote Agente de IA em 37 minutos"
                className="w-full max-w-[260px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right — price info */}
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
              {/* Product title */}
              <p className="text-xs font-bold uppercase tracking-widest text-accent/70">
                Oferta completa
              </p>
              <h3
                className="mt-1 text-xl font-black leading-tight sm:text-2xl"
                style={{ color: "var(--color-foreground)" }}
              >
                Agente de IA em 37 Minutos
              </h3>

              {/* Separator */}
              <div className="my-4 h-px w-full rounded-full bg-border" />

              {/* Price */}
              <p className="text-sm font-medium text-foreground/50">
                De{" "}
                <span className="line-through text-foreground/40">R$ 445</span>{" "}
                por apenas:
              </p>

              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-sm font-semibold text-foreground/40">10x de</span>
                <span
                  className="font-black leading-none text-alert"
                  style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}
                >
                  R$ 8,12
                </span>
              </div>

              <p className="mt-1 text-base font-semibold text-foreground/60">
                ou <span className="font-bold text-foreground/80">R$ 67,00 à vista</span>
              </p>

              {/* CTA button */}
              <div className="mt-5">
                <CTAButton variant="orange" className="text-base text-center">
                  Quero meu agente de IA agora
                </CTAButton>
              </div>

              {/* Trust badges */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-foreground/50">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  Compra Segura
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-foreground/50">
                  <Star className="h-3.5 w-3.5 text-accent" />
                  Satisfação Garantida
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-foreground/50">
                  <Lock className="h-3.5 w-3.5 text-accent" />
                  Privacidade Protegida
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
