import { Quote } from "lucide-react";

const items = [
  {
    text: "Eu ficava bugado com tanta informação. Assistia um vídeo, tentava fazer, travava. Segui essa aula do início ao fim e meu agente estava rodando antes de terminar. Primeiro que eu criei na vida.",
    author: "Rafael M.",
    role: "Coordenador de Vendas",
  },
  {
    text: "Achei que precisava entender tudo antes de criar. Não precisa. Em 37 minutos eu criei meu primeiro agente e já comecei a oferecer para clientes.",
    author: "Camila T.",
    role: "Consultora de marketing",
  },
  {
    text: "Enquanto eu ficava perdido consumindo conteúdo, outros já estavam ganhando dinheiro com agentes. Essa aula me tirou do lugar. Hoje eu crio e cobro.",
    author: "Lucas P.",
    role: "Empreendedor digital",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary px-4 py-20 text-secondary-foreground">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          Quem já criou está dizendo:
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl bg-white/5 p-6 backdrop-blur ring-1 ring-white/10"
            >
              <Quote className="h-8 w-8 text-alert" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="font-bold">{t.author}</div>
                <div className="text-sm text-white/70">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
