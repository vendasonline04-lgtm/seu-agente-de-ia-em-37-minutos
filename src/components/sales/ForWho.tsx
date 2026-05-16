const items = [
  "Você fica perdido com tanta informação e não sai do lugar",
  "Tenta entender por conta própria e sempre trava no mesmo ponto",
  "Vê outras pessoas ganhando dinheiro com agentes enquanto você ainda está no conteúdo",
  "Quer criar algo real, mas quando vai ver já não sabe mais que ordem seguir",
  "está cansado de consumir um monte de conteúdo e fica só perdendo o foco",
  "Perde tempo e dinheiro à toda por não saber usar IA",
  "Faz tarefas repetitivas e precisa ganhar tempo, para focar no que realmente importa",
];

export function ForWho() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Este produto é para você que:
        </h2>
        <ul className="mt-8 space-y-4 text-lg">
          {items.map((it, i) => (
            <li key={i} className="flex gap-3 rounded-lg border-l-4 border-alert bg-muted/60 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-alert">
                <svg viewBox="0 0 10 10" className="h-3 w-3" fill="none" aria-hidden="true">
                  <path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg font-semibold text-primary">
          Se você se reconheceu em algum desses pontos, esse produto é para você.
        </p>
      </div>
    </section>
  );
}
