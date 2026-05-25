import procomputador from "@/assets/procomputador.png";
import prochecklist from "@/assets/prochecklist.png";
import propromt from "@/assets/propromt.png";
import proferramentas from "@/assets/proferramentas.png";
import proagente from "@/assets/proagente.png";

const items = [
  {
    image: procomputador,
    imagePosition: "left" as const,
    title: "Aula de 37 minutos",
    desc: "Em menos de 37 minutos você cria seu primeiro agente de IA do zero",
    premium: true,
  },
  {
    image: prochecklist,
    imagePosition: "right" as const,
    title: "Checklist de configuração",
    desc: "Configure tudo sem travar, mesmo que nunca tenha criado um agente antes",
    premium: true,
  },
  {
    image: propromt,
    imagePosition: "left" as const,
    title: "Template do prompt de sistema",
    desc: "Copia, e cola. Não precisa criar do zero na próxima vez.",
    premium: true,
  },
  {
    image: proferramentas,
    imagePosition: "right" as const,
    title: "Lista das 5 ferramentas gratuitas mais usadas para criar agentes",
    desc: "As ferramentas gratuitas que estão acelerando quem entrou cedo no mercado de IA.",
    premium: false,
  },
  {
    image: proagente,
    imagePosition: "left" as const,
    title: "3 ideias de agentes prontos para criar e monetizar na sequência",
    desc: "Terminou o primeiro? Então você já pode fazer o próximo!",
    premium: false,
  },
];

export function Deliverables() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-balance text-center text-2xl font-bold sm:text-3xl">
          Veja tudo que você vai receber para criar o seu agente em 37 minutos:
        </h2>

        <ul className="mt-12 space-y-4">
          {items.map((it, i) => (
            <li
              key={i}
              className={`flex items-stretch rounded-xl overflow-hidden min-h-[220px] ${
                it.premium
                  ? "ring-1 ring-amber-400/40 backdrop-blur"
                  : "ring-1 ring-white/10 backdrop-blur"
              }`}
              style={
                it.premium
                  ? {
                      boxShadow:
                        "0 0 0 1px rgba(255,180,80,0.25), 0 0 40px -5px rgba(255,122,0,0.55), 0 0 80px -20px rgba(255,170,60,0.45), inset 1px 1px 0 rgba(255,210,120,0.35)",
                    }
                  : undefined
              }
            >
              {it.imagePosition === "left" && (
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-2/5 shrink-0 object-cover rounded-xl"
                />
              )}
              <div
                className={`flex flex-1 flex-col justify-center p-5 ${
                  it.premium
                    ? "bg-gradient-to-br from-white/[0.09] to-white/[0.03]"
                    : "bg-white/5"
                }`}
              >
                <h3 className="text-base font-bold sm:text-xl">{it.title}</h3>
                <p className="mt-2 text-base text-white/80 sm:text-lg">{it.desc}</p>
              </div>
              {it.imagePosition === "right" && (
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-2/5 shrink-0 object-cover rounded-xl"
                />
              )}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
