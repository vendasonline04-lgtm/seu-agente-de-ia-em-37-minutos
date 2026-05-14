import { Check, Zap, ShieldCheck } from "lucide-react";
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
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-alert" strokeWidth={3} />
              <span className="text-lg">{it}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xl">
          De <span className="line-through opacity-70">R$ 445</span> por apenas{" "}
          <span className="font-bold text-alert">R$ 67,00</span>
        </p>

        <div className="mt-8">
          <CTAButton>Quero meu agente de IA do zero agora</CTAButton>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
          <span className="inline-flex items-center gap-2 text-alert">
            <Zap className="h-4 w-4" /> Acesso imediato
          </span>
          <span className="inline-flex items-center gap-2 text-white/80">
            <ShieldCheck className="h-4 w-4" /> Garantia de 7 dias sem perguntas
          </span>
        </div>
      </div>
    </section>
  );
}
