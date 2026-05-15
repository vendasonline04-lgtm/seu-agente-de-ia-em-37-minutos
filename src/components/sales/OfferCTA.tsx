import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Zap, ShieldCheck } from "lucide-react";

function Countdown() {
  const [time, setTime] = useState({ h: 0, m: 30, s: 0 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        if (h === 0 && m === 0 && s === 0) return prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="mb-6 flex flex-col items-center gap-3">
      <div className="rounded-2xl bg-alert px-8 py-4 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-white">
          Oferta válida só hoje
        </p>
        <div className="font-mono text-5xl font-bold tabular-nums tracking-wider text-white">
          {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
        </div>
      </div>
    </div>
  );
}

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
            <Countdown />

            <p className="text-lg text-foreground/70">
              De <span className="line-through">R$ 445</span> por apenas:
            </p>

            {/* Parcelamento */}
            <div className="mt-3 flex flex-col items-center gap-1">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold text-foreground/60">10x de</span>
                <span className="font-display text-5xl font-bold leading-none text-accent sm:text-6xl">
                  R$ 8,12
                </span>
              </div>
              <span className="text-base font-semibold text-foreground/60">OU</span>
              <span className="text-2xl font-bold text-foreground/70">
                R$ 67,00 à vista
              </span>
            </div>

            <div className="mt-10">
              <CTAButton variant="purple">Quero meu agente de IA do zero agora</CTAButton>
            </div>

            {/* Ícones de pagamento */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="flex items-center gap-1 rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-accent" aria-label="Pix">
                  <path d="M12 2L6.5 7.5 2 12l4.5 4.5L12 22l5.5-5.5L22 12l-4.5-4.5L12 2zm0 3.5l3.5 3.5-3.5 3.5L8.5 9 12 5.5zm-6.5 6.5L9 8.5 12 11.5 9 14.5 5.5 11zm6.5 6.5L8.5 13l3.5-3.5 3.5 3.5L12 18.5zM14.5 9l3.5 3.5-3.5 3.5L11 12.5l3.5-3.5z"/>
                </svg>
                PIX
              </span>
              <span className="flex items-center gap-1 rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
                <svg viewBox="0 0 38 24" className="h-4 w-6" aria-label="Visa">
                  <rect width="38" height="24" rx="3" fill="#1A1F71"/>
                  <text x="6" y="17" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">VISA</text>
                </svg>
              </span>
              <span className="flex items-center gap-1 rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
                <svg viewBox="0 0 38 24" className="h-4 w-6" aria-label="Mastercard">
                  <rect width="38" height="24" rx="3" fill="#252525"/>
                  <circle cx="14" cy="12" r="7" fill="#EB001B"/>
                  <circle cx="24" cy="12" r="7" fill="#F79E1B"/>
                  <path d="M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z" fill="#FF5F00"/>
                </svg>
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
              <span className="inline-flex items-center gap-2 text-alert">
                <Zap className="h-4 w-4" /> Acesso Imediato
              </span>
              <span className="inline-flex items-center gap-2 text-alert">
                <ShieldCheck className="h-4 w-4" /> Garantia de 7 dias
              </span>
              <span className="inline-flex items-center gap-2 text-alert">
                Acesso Vitalício
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
