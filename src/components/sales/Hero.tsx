import { CTAButton } from "./CTAButton";

import heroProduto from "@/assets/meninafelizbloco1.png";
import robotMascot from "@/assets/robot-mascot.png";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-white sm:py-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(109,28,195,0.6), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,122,0,0.25), transparent 50%)"
      }} />
      <div className="relative mx-auto max-w-6xl">

        {/* Logo no topo: robô + texto */}
        <div className="mb-6 flex items-center justify-center gap-2 sm:gap-3">
          <img
            src={robotMascot}
            alt="Mascote Agente de IA"
            className="h-14 w-auto object-contain sm:h-18 drop-shadow-[0_0_25px_rgba(109,28,195,0.6)]"
          />
          <div className="flex flex-col items-center leading-none">
            <span className="font-display text-base font-bold text-white sm:text-xl tracking-tight">
              Agente de IA
            </span>
            <span className="mt-1 flex items-center gap-1.5 text-[8px] font-medium uppercase tracking-[0.3em] text-white/70 sm:text-[10px]">
              <span className="h-px w-3 bg-white/40 sm:w-5" />
              do Zero
              <span className="h-px w-3 bg-white/40 sm:w-5" />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">

          {/* Coluna esquerda — texto */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.6rem] text-white">
              Pare de perder horas tentando entender IA sozinho, e descubra como criar seu primeiro <span className="text-alert">Agente de IA do Zero</span> de forma simples, prática e sem programação: <span className="text-alert">em apenas 37 minutos!</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              Mesmo que hoje você esteja perdido com tanta informação, essa aula prática vai te mostrar exatamente o que fazer para finalmente colocar seu agente no ar.
            </p>

            {/* Imagem — aparece aqui só no mobile, some no desktop */}
            <div className="mt-8 flex items-center justify-center md:hidden">
              <img
                src={heroProduto}
                alt="Ganhei tempo com meu agente, ele faz tudo por mim!"
                className="w-full max-w-lg rounded-2xl shadow-2xl"
              />
            </div>

            <div className="mt-10">
              <CTAButton variant="orange" className="text-lg text-center">Preciso de um agente de IA urgente</CTAButton>
            </div>
          </div>

          {/* Coluna direita — imagem só no desktop */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <img
              src={heroProduto}
              alt="Ganhei tempo com meu agente, ele faz tudo por mim!"
              className="w-full max-w-lg rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
