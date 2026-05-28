import exclamacao from "@/assets/exclamacao.png";

export function Solution() {
  return (
    <section className="bg-secondary px-4 py-20 text-secondary-foreground">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-6 rounded-2xl bg-white p-8 text-center">
          <div className="shrink-0">
            <img
              src={exclamacao}
              alt="Atenção"
              className="w-44 sm:w-60"
              style={{ filter: "hue-rotate(-28deg) saturate(0.88) brightness(0.94)" }}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-base text-foreground sm:text-lg font-bold">
              O problema não é falta de informação, é informação demais...
            </p>
            <h2 className="text-balance text-xl font-bold leading-tight text-foreground sm:text-2xl md:text-3xl">
              E se eu te dissesse que você pode ter um <span className="text-alert">agente de IA</span> que resolve tudo pra você?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
