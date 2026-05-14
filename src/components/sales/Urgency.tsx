import { AlertTriangle } from "lucide-react";

export function Urgency() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground">
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-alert/15 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-alert">
          <AlertTriangle className="h-4 w-4" /> Atenção
        </div>
        <h2 className="mt-6 text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Deixa eu ser direto com você.
        </h2>
        <p className="mt-6 text-lg text-white/85">
          Se você sair dessa página sem o Seu Agente de IA do Zero...
        </p>

        <ul className="mt-6 space-y-4 text-lg">
          {[
            "Você vai continuar tentando entender por conta própria e travando no mesmo lugar",
            "O mercado de agentes vai continuar crescendo — sem você dentro",
            "Quem começou hoje vai estar monetizando daqui a 3 meses enquanto você ainda está no primeiro vídeo",
            "E um dia você vai olhar para trás e perguntar: por que não comecei quando era R$ 67?",
          ].map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-bold text-alert">→</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-4 rounded-2xl border border-alert/30 bg-alert/5 p-6 text-lg sm:grid-cols-2">
          <p className="font-semibold">Ou você para de se perder hoje.</p>
          <p className="text-white/80">
            Ou você continua travado enquanto outros ganham dinheiro criando agentes.
          </p>
        </div>
      </div>
    </section>
  );
}
