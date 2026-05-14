const items = [
  "Fica bugado com tanta informação e não sai do lugar",
  "Tenta entender por conta própria e sempre trava no mesmo ponto",
  "Vê outras pessoas ganhando dinheiro com agentes enquanto você ainda está no conteúdo",
  "Quer criar algo real — e quer saber como transformar isso em renda",
  "Está cansado de consumir e precisa finalmente colocar a mão na massa",
];

export function ForWho() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Este produto é para você que:
        </h2>
        <ul className="mt-8 space-y-4 text-lg">
          {items.map((it, i) => (
            <li key={i} className="flex gap-3 rounded-lg border-l-4 border-accent bg-muted/60 p-4">
              <span className="font-bold text-accent">→</span>
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
