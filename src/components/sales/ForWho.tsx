import doresMenina from "@/assets/DoresMenina.jpg";

const items = [
  "Fica perdido com tanta informação e não sai do lugar",
  "Tenta entender por conta própria e sempre trava no mesmo ponto",
  "Vê outras pessoas ganhando dinheiro com agentes enquanto você ainda está no conteúdo",
  "Quer criar algo real, mas quando vai ver já não sabe mais que ordem seguir",
  "Está cansado de consumir um monte de conteúdo e fica só perdendo o foco",
  "Perde tempo e dinheiro à toda por não saber usar IA",
  "Faz tarefas repetitivas e precisa ganhar tempo, para focar no que realmente importa",
];

export function ForWho() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          O Agente de IA do Zero em 37 minutos é para você que:
        </h2>

        <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">

          {/* Bullets */}
          <ul className="flex-1 space-y-3">
            {items.map((it, i) => (
              <li key={i} className="flex gap-3 rounded-lg border-l-4 border-alert bg-muted/60 px-4 py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-alert">
                  <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
                    <path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-sm sm:text-base">{it}</span>
              </li>
            ))}
          </ul>

          {/* Imagem */}
          <div className="flex shrink-0 items-center justify-center md:w-72 lg:w-80">
            <img
              src={doresMenina}
              alt="Mulher frustrada tentando entender IA"
              className="w-full max-w-xs rounded-2xl shadow-lg md:max-w-none"
            />
          </div>

        </div>

        <p className="mt-8 text-base font-semibold text-primary sm:text-lg">
          Se você se reconheceu em algum desses pontos, esse produto é para você.
        </p>
      </div>
    </section>
  );
}
