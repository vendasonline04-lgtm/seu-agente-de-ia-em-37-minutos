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
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-center text-2xl font-bold sm:text-3xl">
          Veja tudo que você vai receber para criar o seu agente em 37 minutos:
        </h2>

        <ul className="mt-12 space-y-5">
          {items.map((it, i) => {
            const BadgeIcon = it.BadgeIcon;
            return (
              <li
                key={i}
                className={
                  it.premium
                    ? "relative flex items-center gap-4 rounded-xl bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-5 ring-1 ring-amber-400/40 backdrop-blur"
                    : "flex items-center gap-4 rounded-xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur"
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
                <img src={it.icon} alt={it.title} className="h-12 w-12 shrink-0 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold">{it.title}</h3>
                  <p className="mt-1 text-white/80">{it.desc}</p>
                </div>
                {it.premium && BadgeIcon && (
                  <div className="relative hidden shrink-0 sm:block" style={{ width: 44, height: 50 }}>
                    <div
                      className="absolute inset-0"
                      style={{
                        ...hexClip,
                        background: "linear-gradient(135deg, #fde68a 0%, #f59e0b 50%, #b45309 100%)",
                        filter: "drop-shadow(0 0 8px rgba(255,170,60,0.7))",
                      }}
                    />
                    <div
                      className="absolute inset-[2px] flex items-center justify-center"
                      style={{
                        ...hexClip,
                        background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                      }}
                    >
                      <BadgeIcon className="h-5 w-5 text-amber-50" strokeWidth={2.5} />
                    </div>
                  </div>
                )}
                <span
                  className={
                    it.premium
                      ? "shrink-0 text-lg font-bold text-alert drop-shadow-[0_0_8px_rgba(255,122,0,0.6)]"
                      : "shrink-0 text-lg font-bold text-alert"
                  }
                >
                  {it.price}
                </span>
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
