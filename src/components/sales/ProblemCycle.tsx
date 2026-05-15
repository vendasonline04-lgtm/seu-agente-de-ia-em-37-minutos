import cicloBugado from "@/assets/ciclo-bugado.png";

export function ProblemCycle() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Você não está parado por preguiça. Você está bugado.
        </h2>
        <p className="mt-6 text-lg text-foreground/80">
          Hoje você vive um ciclo que não te deixa sair do lugar.
        </p>

        <div className="mt-8 flex justify-center">
          <img
            src={cicloBugado}
            alt="Ciclo de frustração ao tentar aprender agentes de IA sozinho"
            className="w-full max-w-md rounded-2xl"
          />
        </div>

        <p className="mt-10 text-lg font-semibold">
          E enquanto você tenta entender por conta própria...
        </p>

        <ul className="mt-4 space-y-3 text-base sm:text-lg">
          {[
            "Tem gente ganhando dinheiro criando agentes para clientes",
            "Tem gente automatizando processos e cobrando por isso",
            "Tem gente que saiu do zero e já tem portfólio",
          ].map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 font-bold text-alert">→</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border-l-4 border-alert bg-muted p-6">
          <p className="text-lg font-semibold text-primary">
            A diferença entre você e eles não é talento.
          </p>
          <p className="mt-2 text-lg">
            É que eles pararam de tentar entender e começaram a criar.
          </p>
        </div>
      </div>
    </section>
  );
}
