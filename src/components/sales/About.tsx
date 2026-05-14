export function About() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-accent">
          Quem vai criar junto com você
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Sou Valentina, especialista em inteligência artificial aplicada.
        </h2>

        <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/85">
          <p>Já criei inúmeros agentes de IA para diversas finalidades.</p>
          <p>
            Sei exatamente onde as pessoas travam — e como eliminar cada um desses obstáculos.
          </p>
          <p>
            Essa aula de <span className="font-bold text-accent">37 minutos</span> é o atalho direto que eu tirei de quem já cria, cobra e fatura com agentes de IA.
          </p>
          <p className="text-xl font-bold text-primary">
            Não tem teoria aqui. Tem criação ao vivo.
          </p>
        </div>
      </div>
    </section>
  );
}
