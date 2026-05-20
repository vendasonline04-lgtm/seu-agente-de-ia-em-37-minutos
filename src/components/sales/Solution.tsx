import meninoFeliz from "@/assets/menino-feliz.png";

const leftBubbles = [
  "Inacreditável! Meu agente faz tudo!",
  "Agora vou focar no que importa",
  "Não perco mais dinheiro à toa",
];

const rightBubbles = [
  "Vou ganhar muito dinheiro com meu agente!",
  "Não perco mais tempo repetindo tarefas",
  "Finalmente está funcionando!",
];

function Bubble({ text, side }: { text: string; side: "left" | "right" }) {
  return (
    <div
      className="rounded-2xl px-4 py-3 text-center text-sm font-bold leading-snug text-white bg-secondary"
      style={{ maxWidth: 160 }}
    >
      {text}
    </div>
  );
}

export function Solution() {
  return (
    <section className="bg-secondary px-4 py-20 text-secondary-foreground">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          O problema não é falta de informação.
        </h2>
        <p className="mt-6 text-xl text-white/85">
          É informação demais, sem saber por onde começar.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          <p>
            Em 37 minutos, você mesmo constrói seu agente de IA do zero, sem travar, sem precisar de ajuda.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
          <p className="text-lg italic text-white/90 font-bold">
            Imagina só criar seu agente do zero sozinho, do conforto da sua casa, no seu próprio computador...
          </p>

          {/* Balões + imagem */}
          <div className="my-6 flex items-center justify-center gap-4">
            {/* Balões esquerdos */}
            <div className="flex flex-col gap-3">
              {leftBubbles.map((t, i) => (
                <Bubble key={i} text={t} side="left" />
              ))}
            </div>

            {/* Imagem central */}
            <div className="shrink-0">
              <img
                src={meninoFeliz}
                alt="Pessoa feliz com seu agente de IA funcionando"
                className="w-48 rounded-2xl sm:w-56 md:w-64"
              />
            </div>

            {/* Balões direitos */}
            <div className="flex flex-col gap-3">
              {rightBubbles.map((t, i) => (
                <Bubble key={i} text={t} side="right" />
              ))}
            </div>
          </div>

          <p className="mt-3 text-xl font-bold text-white">
            Agora você pode criar vários agentes sem travar!
          </p>
        </div>

        <p className="mt-8 text-lg">
          Essa sensação está a <span className="font-bold text-alert">37 minutos</span> de distância.
        </p>
        <p className="mt-6 text-2xl font-bold">
          Apresento o Seu Agente de IA do Zero.
        </p>
      </div>
    </section>
  );
}
