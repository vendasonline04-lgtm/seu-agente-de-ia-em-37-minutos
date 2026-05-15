## Objetivo
Melhorar o selo "7 Dias de Garantia": maior, com mais resolução e sem as barras pretas das laterais (fundo branco limpo).

## Mudanças

1. **Regenerar `src/assets/selo-garantia.png`**
   - Gerar em alta resolução (1024x1024) com `imagegen--generate_image` (premium, para o número "7" ficar nítido).
   - Prompt: selo/medalha roxo com laços, estrelas e o número "7" no centro, fundo branco sólido (sem bordas pretas, sem letterbox).
   - `transparent_background: false` e fundo branco explícito no prompt.

2. **Aumentar o tamanho na página** (`src/components/sales/Guarantee.tsx`, linha 22)
   - Trocar `h-32 w-32` por algo bem maior e responsivo, ex.: `h-56 w-56 sm:h-72 sm:w-72`.
   - Manter `object-contain` para preservar proporção.

Nenhuma outra alteração de layout/copy.