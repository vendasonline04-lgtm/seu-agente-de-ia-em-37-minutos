import aulaIcon from "@/assets/Aula01.png";
import checklistIcon from "@/assets/checklist02.png";
import promptIcon from "@/assets/Prompt03.png";
import ferramentasIcon from "@/assets/Ferramentas04.png";
import ideiasIcon from "@/assets/Ideias03.png";
import badgeDiamond from "@/assets/badge-diamond.png";
import badgeCrown from "@/assets/badge-crown.png";
import badgeStar from "@/assets/badge-star.png";

const items = [
  { icon: aulaIcon, title: "Aula de 37 minutos", desc: "Em menos de 37 minutos você cria seu primeiro agente de IA do zero", price: "R$ 197", premium: true, badge: badgeDiamond },
  { icon: checklistIcon, title: "Checklist de configuração", desc: "Configure tudo sem travar, mesmo que nunca tenha criado um agente antes", price: "R$ 87", premium: true, badge: badgeCrown },
  { icon: promptIcon, title: "Template do prompt de sistema", desc: "Copia, e cola. Não precisa criar do zero na próxima vez.", price: "R$ 67", premium: true, badge: badgeStar },
  { icon: ferramentasIcon, title: "Lista das 5 ferramentas gratuitas mais usadas para criar agentes", desc: "As ferramentas gratuitas que estão acelerando quem entrou cedo no mercado de IA.", price: "R$ 47", premium: false, badge: null },
  { icon: ideiasIcon, title: "3 ideias de agentes prontos para criar e monetizar na sequência", desc: "Terminou o primeiro? Então você já pode fazer o próximo!", price: "R$ 47", premium: false, badge: null },
];

export function Deliverables() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance text-center text-2xl font-bold sm:text-3xl">
          Veja tudo que você vai receber para criar o seu agente em 37 minutos:
        </h2>

        <ul className="mt-12 space-y-4">
          {items.map((it, i) => {
            return (
              <li
                key={i}
                className={
                  it.premium
                    ? "relative flex items-center gap-4 rounded-xl bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-4 ring-1 ring-amber-400/40 backdrop-blur"
                    : "flex items-center gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur"
                }
                style={
                  it.premium
                    ? {
                        boxShadow:
                          "0 0 0 1px rgba(255,180,80,0.25), 0 0 40px -5px rgba(255,122,0,0.55), 0 0 80px -20px rgba(255,170,60,0.45), inset 1px 1px 0 rgba(255,210,120,0.35)",
                      }
                    : undefined
                }
              >
                <img src={it.icon} alt={it.title} className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold sm:text-base">{it.title}</h3>
                  <p className="mt-0.5 text-sm text-white/80">{it.desc}</p>
                </div>
                <div className="flex w-20 shrink-0 flex-col items-end gap-1 sm:w-24">
                  {it.premium && it.badge && (
                    <img
                      src={it.badge}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      width={40}
                      height={40}
                      className="h-10 w-10"
                      style={{ filter: "drop-shadow(0 0 8px rgba(255,170,60,0.55))" }}
                    />
                  )}
                  <span
                    className={
                      it.premium
                        ? "text-base font-bold text-alert drop-shadow-[0_0_8px_rgba(255,122,0,0.6)]"
                        : "text-base font-bold text-alert"
                    }
                  >
                    {it.price}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 flex justify-end pr-1">
          <span className="text-xl font-bold text-alert sm:text-2xl">Total R$ 445</span>
        </div>
      </div>
    </section>
  );
}
