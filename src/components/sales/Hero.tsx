import { CTAButton } from "./CTAButton";
import { Zap } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-white sm:py-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(109,28,195,0.6), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,122,0,0.25), transparent 50%)"
      }} />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
          <Zap className="h-3.5 w-3.5 text-alert" />
          Acesso imediato
        </div>
        <h1 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
          Pare de se perder tentando entender agentes de IA por conta própria
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          Saia daqui com seu primeiro agente rodando em <span className="font-bold text-alert">37 minutos</span>, mesmo que você não saiba nada.
        </p>
        <p className="mt-4 text-base text-white/70">
          Acesso imediato. Você cria seu primeiro agente ainda hoje.
        </p>

        <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-2 text-left text-base text-white/90">
          <li className="flex gap-2"><span className="text-alert">→</span> Não é teoria.</li>
          <li className="flex gap-2"><span className="text-alert">→</span> Não é mais um vídeo para assistir.</li>
          <li className="flex gap-2"><span className="text-alert">→</span> É criação. Do zero. Junto comigo. Em 37 minutos.</li>
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-base text-white/80">
          <span className="font-semibold text-white">Seu Agente de IA do Zero</span> é a aula onde você para de se perder e finalmente cria — com o agente rodando antes de fechar a aba.
        </p>

        <div className="mt-10">
          <CTAButton>Quero meu agente em 37 min</CTAButton>
        </div>
      </div>
    </section>
  );
}
