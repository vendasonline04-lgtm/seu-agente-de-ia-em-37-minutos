import { CTAButton } from "./CTAButton";
import { Zap, ShieldCheck } from "lucide-react";

export function OfferCTA() {
  return (
    <section id="oferta" className="bg-background px-4 py-24 text-foreground">
      <div className="mx-auto max-w-3xl">
        <div
          className="relative overflow-hidden rounded-3xl border-2 border-accent/20 bg-card p-10 text-center sm:p-14"
          style={{ boxShadow: "var(--shadow-cta)" }}
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-alert/10 blur-3xl" />

          <div className="relative">
            <p className="text-lg text-foreground/70">
              De <span className="line-through">R$ 445</span> por apenas:
            </p>
            <div className="mt-4 flex items-end justify-center gap-2">
              <span className="font-display text-2xl font-bold text-foreground/60">R$</span>
              <span className="font-display text-7xl font-bold leading-none text-accent sm:text-8xl">
                67
              </span>
              <span className="font-display text-2xl font-bold text-foreground/60">,00</span>
            </div>
            <p className="mt-2 text-sm uppercase tracking-widest text-foreground/60">
              Pagamento único · Acesso vitalício
            </p>

            <div className="mt-10">
              <CTAButton>Quero meu agente de IA do zero agora</CTAButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
              <span className="inline-flex items-center gap-2 text-alert">
                <Zap className="h-4 w-4" /> Acesso imediato
              </span>
              <span className="inline-flex items-center gap-2 text-foreground/80">
                <ShieldCheck className="h-4 w-4" /> Garantia de 7 dias sem perguntas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
