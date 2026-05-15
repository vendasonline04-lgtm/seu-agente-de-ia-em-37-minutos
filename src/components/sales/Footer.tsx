export function Footer() {
  return (
    <footer className="bg-primary px-4 py-12 text-primary-foreground">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display font-bold text-base">​ Seu Agente de IA do Zero – Simplifica-AI</p>
        <p className="mt-2 text-sm text-white/70">
          Suporte: contato@simplifica-ai.com
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
