## Objetivo

No topo do Hero, exibir a imagem da logo com a frase "Agente de IA do Zero" ao lado direito — sem nenhum outro texto acompanhando a logo.

## Arquivo a alterar

- `src/components/sales/Hero.tsx`

## Mudança

- Substituir o bloco atual da logo por um container `flex items-center justify-center gap-4`.
- Dentro do container:
  - A imagem da logo (mantendo `h-36 sm:h-44 w-auto object-contain`).
  - Um `<span>` à direita com o texto "Agente de IA do Zero", em bold, branco, tamanho proporcional (ex.: `text-2xl sm:text-3xl md:text-4xl leading-tight`).
- Garantir bom alinhamento vertical e responsivo (texto não quebra de forma estranha no mobile 694px).

## Fora de escopo

- Não alterar nenhuma outra seção, copy, imagem ou estilo do site.
