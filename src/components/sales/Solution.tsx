export function Solution() {
  return (
    <section className="bg-secondary px-4 py-20 text-secondary-foreground">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          O problema não é falta de informação.
        </h2>
        <p className="mt-6 text-xl text-white/85">
          É informação demais, sem uma mão te guiando na ordem certa.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          <p>
            Você não precisa de mais um conteúdo para consumir.
          </p>
          <p>
            Você precisa de <span className="font-bold text-alert">37 minutos</span> onde alguém cria junto com você — do zero ao agente funcionando, sem parar para teoria, sem te deixar travar.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
          <p className="text-lg italic text-white/90">
            Imagina você abrindo o computador, mostrando seu agente funcionando para alguém e dizendo:
          </p>
          <p className="mt-3 text-xl font-bold text-white">
            "esse aqui eu fiz — e posso fazer para você também."
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
