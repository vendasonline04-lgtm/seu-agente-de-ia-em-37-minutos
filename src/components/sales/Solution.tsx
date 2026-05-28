import exclamacao from "@/assets/exclamacao.png";

export function Solution() {
  return (
    <section className="bg-secondary px-4 py-20 text-secondary-foreground">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          O problema não é falta de informação, é informação demais...
        </h2>

        <div className="mt-10 flex items-center gap-6 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur text-left">
          <div className="shrink-0">
            <img
              src={exclamacao}
              alt="Atenção"
              className="w-20 sm:w-28"
            />
          </div>
          <p className="text-xl text-white/90 sm:text-2xl">
            E se eu te dissesse que você pode ter um <span className="font-bold text-alert">agente de IA</span> que resolve tudo pra você?
          </p>
        </div>
      </div>
    </section>
  );
}
