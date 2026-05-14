import { CTAButton } from "./CTAButton";
import heroProduto from "@/assets/hero-produto.png";

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
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center md:gap-16">
          {/* Texto: título + subtítulo (ordem 1 no mobile, esquerda no desktop) */}
          <div className="order-1 text-left md:order-none">
            <h1 className="font-bold leading-[1.1] text-white text-center text-3xl sm:text-4xl md:text-5xl md:text-justify">
              Pare de se perder tentando entender agentes de IA por conta própria, e saia daqui com seu <span className="text-alert">Agente de IA do Zero</span> em 37 minutos!
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              Seu Agente de IA do Zero é a aula prática onde você foca e finalmente coloca seu agente no ar, mesmo sem saber nada de programação.
            </p>
            {/* CTA visível só no desktop, dentro da coluna de texto */}
            <div className="mt-10 hidden md:block">
              <CTAButton>Quero meu agente de ia agora</CTAButton>
            </div>
          </div>

          {/* Imagem (ordem 2 no mobile = acima do botão; à direita no desktop) */}
          <div className="order-2 flex items-center justify-center md:order-none">
            <img
              src={heroProduto}
              alt="Seu Agente de IA do Zero — imagem do produto"
              className="w-full max-w-lg rounded-2xl shadow-2xl"
            />
          </div>

          {/* CTA visível só no mobile, abaixo da imagem */}
          <div className="order-3 md:hidden">
            <CTAButton>Quero meu agente de ia agora</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
