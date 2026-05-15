export function Urgency() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground">
      <div className="mx-auto max-w-3xl">
        <h2 className="mt-6 text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Deixa eu ser direta com você.
        </h2>
        <p className="mt-6 text-lg text-white/85">
          Se você sair dessa página sem o Seu Agente de IA do Zero...
        </p>

        <ul className="mt-6 space-y-4 text-lg">
          {[
            "Vai continuar perdido, por ter tanta informação e não saber mais por onde começar",
            "Vai ver o mercado de agentes continuar a crescer, sem você dentro",
            "Vai perder dinheiro à toa, por gastar com ferramentas que você conhece pouco",
            "Vai ver muita gente fazendo dinheiro com agentes, enquanto você nunca conseguiu fazer nenhum",
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
