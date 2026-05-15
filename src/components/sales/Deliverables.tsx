import { Check } from "lucide-react";

const items = [
  { title: "Aula de 37 minutos", desc: "Você assiste e aplica sem segredo e sem enrolação." },
  { title: "Checklist de configuração", desc: "Cada etapa numerada para você não perder nenhum passo e replicar em qualquer agente novo." },
  { title: "Template do prompt de sistema", desc: "Copia, e cola. Não precisa criar do zero na próxima vez." },
  { title: "Lista das 5 ferramentas gratuitas mais usadas para criar agentes", desc: "Tudo gratuito. Tudo testado. Você não precisa pagar nada extra para criar." },
  { title: "3 ideias de agentes prontos para criar e monetizar na sequência", desc: "Terminou o primeiro? Então você já pode fazer o próximo!" },
];

export function Deliverables() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-center text-3xl font-bold sm:text-4xl">
          Olhe o que você vai receber:
        </h2>

        <ul className="mt-12 space-y-5">
          {items.map((it, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-alert text-alert-foreground">
                <Check className="h-5 w-5" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-lg font-bold">{it.title}</h3>
                <p className="mt-1 text-white/80">{it.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
