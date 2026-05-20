import cicloBugado from "@/assets/ciclo-bugado.png";

const leftBubbles = [
  "Mais um vídeo sem entender nada..",
  "Não sei por onde começar",
  "Meus clientes chamando, e eu não consigo atender",
];

const rightBubbles = [
  "Tanta informação que eu me perco",
  "Minha cabeça bugou de novo",
  "Toda hora eu travo e não consigo terminar",
];

function Bubble({ text, side }: { text: string; side: "left" | "right" }) {
  return (
    <div
      className={`rounded-2xl px-4 py-3 text-center text-sm font-bold leading-snug text-white ${
        side === "left"
          ? "rounded-bl-none bg-secondary"
          : "rounded-br-none bg-primary"
      }`}
      style={{ maxWidth: 160 }}
    >
      {text}
    </div>
  );
}

export function ProblemCycle() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Você não está parado por preguiça. Você está perdido.
        </h2>
        <p className="mt-6 text-center text-lg text-foreground/80">
          Hoje você vive um ciclo que não te deixa sair do lugar.
        </p>

        {/* Balões + imagem */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {/* Balões esquerdos */}
          <div className="flex flex-col gap-3">
            {leftBubbles.map((t, i) => (
              <Bubble key={i} text={t} side="left" />
            ))}
          </div>

          {/* Imagem central */}
          <div className="shrink-0">
            <img
              src={cicloBugado}
              alt="Pessoa frustrada tentando aprender agentes de IA sozinha"
              className="w-48 sm:w-56 md:w-64"
            />
          </div>

          {/* Balões direitos */}
          <div className="flex flex-col gap-3">
            {rightBubbles.map((t, i) => (
              <Bubble key={i} text={t} side="right" />
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-lg font-semibold">
          E enquanto você tenta entender por conta própria...
        </p>

        <ul className="mt-4 space-y-3 text-base sm:text-lg">
          {[
            "Tem gente ganhando dinheiro criando agentes para clientes",
            "Tem gente automatizando processos e cobrando por isso",
            "Tem gente que saiu do zero e já tem portfólio",
            "Tem gente ganhando tempo com agente, sem fazer trabalho repetitivo",
            "Tem gente economizando dinheiro com IA, pois conhece o fluxo certo",
          ].map((s, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-alert">
                <svg viewBox="0 0 10 10" className="h-3 w-3" fill="none" aria-hidden="true">
                  <path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border-l-4 border-alert bg-muted p-6">
          <p className="text-lg font-semibold text-primary">
            A diferença entre você e eles não é talento.
          </p>
          <p className="mt-2 text-lg">
            É que eles pararam de tentar entender e colocaram a mão na massa do jeito certo.
          </p>
        </div>
      </div>
    </section>
  );
}
