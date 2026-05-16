import { Zap, ShieldCheck } from "lucide-react";
import { CTAButton } from "./CTAButton";

const items = [
  "Aula de 37 minutos — do zero ao agente rodando",
  "Checklist de configuração",
  "Template do prompt de sistema",
  "Lista das 5 ferramentas gratuitas",
  "3 ideias de agentes para criar e monetizar",
];

export function Recap() {
  return (
    <section className="bg-secondary px-4 py-20 text-secondary-foreground">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Tudo que você recebe por R$ 67:
        </h2>

        <ul className="mx-auto mt-10 max-w-xl space-y-3 text-left">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-alert">
                <svg viewBox="0 0 10 10" className="h-3 w-3" fill="none" aria-hidden="true">
                  <path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-lg">{it}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xl">
          De <span className="line-through opacity-70">R$ 445</span> por apenas
        </p>

        {/* Preço com parcelamento em destaque */}
        <div className="mt-3 flex flex-col items-center gap-1">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-semibold text-white/60">10x de</span>
            <span className="font-display text-5xl font-bold leading-none text-alert">
              R$ 8,12
            </span>
          </div>
          <span className="text-base font-semibold text-white/60">OU</span>
          <span className="text-xl font-bold text-white/80">R$ 67,00 à vista</span>
        </div>

        <div className="mt-8">
          <CTAButton>Quero meu agente de IA do zero agora</CTAButton>
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
    </section>
  );
}
