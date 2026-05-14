const steps = [
  { n: "01", title: "Configura o ambiente", desc: "Em menos de 5 minutos." },
  { n: "02", title: "Define o objetivo e o comportamento do agente", desc: "" },
  { n: "03", title: "Conecta as ferramentas e testa ao vivo", desc: "" },
  { n: "04", title: "Seu agente está rodando. Você criou.", desc: "" },
];

export function FourSteps() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Os 4 passos que você executa junto comigo:
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="font-display text-5xl font-bold text-accent/20">{s.n}</div>
              <h3 className="mt-3 text-xl font-bold text-primary">
                Passo {parseInt(s.n)} → {s.title}
              </h3>
              {s.desc && <p className="mt-2 text-foreground/70">{s.desc}</p>}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-lg">
          <p className="font-semibold">Sem enrolação. Sem teoria desnecessária.</p>
          <p className="mt-2 text-foreground/80">
            <span className="font-bold text-accent">37 minutos</span> do início ao agente funcionando — pronto para usar e pronto para monetizar.
          </p>
        </div>
      </div>
    </section>
  );
}
