export function Footer() {
  return (
    <footer className="bg-primary px-4 py-12 text-primary-foreground">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display text-2xl font-bold">Valentina</p>
        <p className="mt-2 text-sm text-white/70">
          Suporte:{" "}
          <a href="mailto:contato@simplifica-ai.com" className="underline hover:text-alert">
            contato@simplifica-ai.com
          </a>
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-white/60">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. A compra desse material não garante nenhum tipo de resultado. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto.
        </p>
        <p className="mt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Seu Agente de IA do Zero. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
