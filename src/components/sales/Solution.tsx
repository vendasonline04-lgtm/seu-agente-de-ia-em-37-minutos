import meninoFeliz from "@/assets/menino-feliz.png";

export function Solution() {
  return (
    <section className="bg-secondary px-4 py-20 text-secondary-foreground">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          O problema não é falta de informação.
        </h2>
        <p className="mt-6 text-xl text-white/85">
          É informação demais, sem saber por onde começar. Em 37 minutos, você mesmo constrói seu agente de IA do zero, sem travar, sem precisar de ajuda.
        </p>

        <div className="mt-10 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
          <p className="text-lg italic text-white/90 font-bold">
            Imagina só criar seu agente do zero sozinho, do conforto da sua casa, no seu próprio computador...
          </p>

          <div className="my-6 flex justify-center">
            <img
              src={meninoFeliz}
              alt="Pessoa feliz com seu agente de IA funcionando"
              className="w-full max-w-2xl rounded-2xl"
            />
          </div>

          <p className="mt-3 text-xl font-bold text-white">
            Agora você pode criar vários agentes sem travar! Essa sensação está a <span className="text-alert">37 minutos</span> de distância.
          </p>
        </div>
      </div>
    </section>
  );
}
