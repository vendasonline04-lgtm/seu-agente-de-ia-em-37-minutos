const rows = [
  ["Aula de 37 minutos", "R$ 197"],
  ["Checklist de configuração", "R$ 87"],
  ["Template do prompt de sistema", "R$ 67"],
  ["Lista das 5 ferramentas gratuitas", "R$ 47"],
  ["3 ideias de agentes para criar e monetizar", "R$ 47"],
];

export function ValueStack() {
  return (
    <section className="bg-secondary px-4 py-20 text-secondary-foreground">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Olha o que você vai receber:
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
          <table className="w-full text-left">
            <thead className="bg-white/10 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Item</th>
                <th className="px-6 py-4 text-right">Valor</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([item, val], i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="px-6 py-4 text-base">{item}</td>
                  <td className="px-6 py-4 text-right font-semibold tabular-nums">{val}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-alert/60 bg-alert/10">
                <td className="px-6 py-5 text-lg font-bold">Total</td>
                <td className="px-6 py-5 text-right text-lg font-bold tabular-nums text-alert">R$ 445</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-center text-xl font-semibold">
          Hoje, tudo isso por <span className="text-alert">muito menos</span>.
        </p>
      </div>
    </section>
  );
}
