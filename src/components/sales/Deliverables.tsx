import aulaIcon from "@/assets/Aula01.png";
import checklistIcon from "@/assets/checklist02.png";
import promptIcon from "@/assets/Prompt03.png";
import ferramentasIcon from "@/assets/Ferramentas04.png";
import ideiasIcon from "@/assets/Ideias03.png";

const items = [
  { icon: aulaIcon, title: "Aula de 37 minutos", desc: "Você assiste e aplica sem segredo e sem enrolação.", price: "R$ 197" },
  { icon: checklistIcon, title: "Checklist de configuração", desc: "Cada etapa numerada para você não perder nenhum passo e replicar em qualquer agente novo.", price: "R$ 87" },
  { icon: promptIcon, title: "Template do prompt de sistema", desc: "Copia, e cola. Não precisa criar do zero na próxima vez.", price: "R$ 67" },
  { icon: ferramentasIcon, title: "Lista das 5 ferramentas gratuitas mais usadas para criar agentes", desc: "Tudo gratuito. Tudo testado. Você não precisa pagar nada extra para criar.", price: "R$ 47" },
  { icon: ideiasIcon, title: "3 ideias de agentes prontos para criar e monetizar na sequência", desc: "Terminou o primeiro? Então você já pode fazer o próximo!", price: "R$ 47" },
];

export function Deliverables() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-center text-2xl font-bold sm:text-3xl">
          Veja tudo que você vai receber para criar o seu agente em 37 minutos:
        </h2>

        <ul className="mt-12 space-y-5">
          {items.map((it, i) => (
            <li
              key={i}
              className="flex items-center gap-4 rounded-xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur"
            >
              <img src={it.icon} alt={it.title} className="h-12 w-12 shrink-0 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold">{it.title}</h3>
                <p className="mt-1 text-white/80">{it.desc}</p>
              </div>
              <span className="shrink-0 text-lg font-bold text-alert">{it.price}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-end pr-1">
          <span className="text-xl font-bold text-alert sm:text-2xl">Total R$ 445</span>
        </div>
      </div>
    </section>
  );
}
