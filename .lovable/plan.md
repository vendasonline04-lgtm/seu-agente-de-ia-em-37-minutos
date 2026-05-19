## Objetivo
Reduzir o tamanho da imagem da logo (robô) e manter a frase "Agente de IA / do Zero" ao lado direito, conforme a referência enviada.

## Alterações

### `src/components/sales/Hero.tsx`
- Reduzir a altura da imagem da logo de `h-36 sm:h-44` para algo mais compacto: `h-20 sm:h-24` (proporção parecida com a referência).
- Manter o container `flex items-center justify-center gap-4` (logo + texto lado a lado, centralizados verticalmente).
- Manter o texto em duas linhas:
  - "Agente de IA"
  - "do Zero"
- Manter a tipografia atual (bold, branco, `text-2xl sm:text-3xl md:text-4xl`).

## Fora do escopo
- Nenhuma alteração em outras seções, cores, copy ou layout do site.
