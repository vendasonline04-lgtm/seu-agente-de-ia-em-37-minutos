export function About() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-accent">
          Quem vai criar junto com você
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Seu Agente de IA do Zero – Simplifica-AI
        </h2>

        {/* Bloco de Garantia — texto à esquerda, selo à direita */}
        <div className="mt-12 flex flex-col-reverse items-center gap-6 bg-background sm:flex-row sm:items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary">
              7 Dias de garantia
            </h3>
            <p className="mt-2 text-base text-foreground/80">
              Se em 7 dias você não gostar do conteúdo, ou por algum motivo achar que isso não é pra você, pode solicitar seu dinheiro de volta sem problema algum.
            </p>
          </div>
          {/* Selo de garantia */}
          <div className="flex shrink-0 flex-col items-center justify-center">
            <div
              className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 text-center"
              style={{ borderColor: "var(--color-accent, #6d1cc3)", background: "var(--color-accent, #6d1cc3)" }}
            >
              <span className="text-xs font-bold uppercase tracking-tight text-white">Garantia</span>
              <span className="text-4xl font-bold leading-none text-white">7</span>
              <span className="text-xs font-bold uppercase tracking-tight text-white">dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
