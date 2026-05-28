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
              style={{ filter: "hue-rotate(-35deg) saturate(1.3)" }}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-xl text-foreground sm:text-2xl font-bold">
              O problema não é falta de informação, é informação demais...
            </p>
            <h2 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              E se eu te dissesse que você pode ter um <span className="text-alert">agente de IA</span> que resolve tudo pra você?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
