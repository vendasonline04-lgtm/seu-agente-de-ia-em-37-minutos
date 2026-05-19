import { CTAButton } from "./CTAButton";
import heroProduto from "@/assets/Meninas Conversando.png";
import logo from "@/assets/logo.png";

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

        {/* Logo no topo */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <img
            src={logo}
            alt="Agente de IA do Zero — Simplifica-AI"
            className="h-36 w-auto object-contain sm:h-44"
          />
          <span className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl text-center whitespace-pre-line">
            {"Agente de IA \ndo Zero"}
          </span>
        </div>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">

          {/* Coluna esquerda — texto */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.6rem] text-white">
              Pare de se perder tentando entender agentes de IA por conta própria, e saia daqui com seu <span className="text-alert">Agente de IA do Zero</span> em <span className="text-alert">37 minutos</span>!
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              Seu Agente de IA do Zero é a aula prática onde você foca e finalmente coloca seu agente no ar, mesmo sem saber nada de programação.
            </p>

            {/* Imagem — aparece aqui só no mobile, some no desktop */}
            <div className="mt-8 flex items-center justify-center md:hidden">
              <img
                src={heroProduto}
                alt="Meninas conversando — imagem do produto"
                className="w-full max-w-lg rounded-2xl shadow-2xl"
              />
            </div>

            <div className="mt-10">
              <CTAButton variant="orange">Quero meu agente de ia agora</CTAButton>
            </div>
          </div>

          {/* Coluna direita — imagem só no desktop */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <img
              src={heroProduto}
              alt="Meninas conversando — imagem do produto"
              className="w-full max-w-lg rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
