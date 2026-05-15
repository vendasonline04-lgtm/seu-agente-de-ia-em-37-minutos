import seloGarantia from "@/assets/selo-garantia.png";

export function Guarantee() {
  return (
    <section className="bg-white px-4 py-16 text-foreground">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-center">
          {/* Texto à esquerda */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary">
              7 Dias de Garantia
            </h3>
            <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Se em 7 dias você não gostar do conteúdo, ou por algum motivo achar que isso não é pra você, pode solicitar seu dinheiro de volta sem problema algum.
            </p>
          </div>
          {/* Imagem à direita */}
          <div className="flex shrink-0 items-center justify-center">
            <img
              src={seloGarantia}
              alt="Selo de garantia de 7 dias"
              className="h-32 w-32 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
