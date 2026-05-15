## Objetivo
Inserir a seta (imagem enviada) na cor laranja da paleta entre o Passo 1 → Passo 2 e entre o Passo 3 → Passo 4 na seção `FourSteps`.

## Passos

1. Copiar `user-uploads://Mais_um_vídeo_sem_entender_nada..._1.png` para `src/assets/seta-laranja.png`.
2. Recolorir a seta (atualmente preta) para o laranja da marca usando `imagegen--edit_image`. A cor será o `--accent` do design system (o mesmo laranja já usado em `text-accent` na página). Fundo permanece transparente/branco. Salvar sobrescrevendo `src/assets/seta-laranja.png`.
3. Editar `src/components/sales/FourSteps.tsx`:
   - Importar a imagem.
   - Renderizar a seta entre os cards 1→2 e 3→4. Como o grid é `md:grid-cols-2`, a seta entre 1 e 2 fica entre o 1º e 2º card (na mesma linha no desktop, entre eles no mobile). Entre 3 e 4 mesma lógica.
   - Abordagem mais simples: trocar o `.map()` por render manual dos 4 passos, intercalando uma `<img>` decorativa nas duas posições. No desktop, a seta aparece sobreposta entre os cards (pequena, ~64px); no mobile aparece centralizada apontando para baixo (com `rotate-90`).

## Detalhes técnicos
- A seta original aponta para a direita-baixo. No desktop fica natural entre cards lado-a-lado; no mobile rotacionar para apontar pra baixo.
- Tamanho ~56–72px, sem afetar o layout do grid (usar coluna inteira `md:col-span-2` com `-my-2` ou simplesmente um item flex centralizado entre os pares).
- Estrutura proposta no grid: card1, seta, card2, card3, seta, card4 — mas isso quebra `grid-cols-2`. Solução: trocar para uma estrutura de "linhas" com flex, cada linha contendo `[card][seta][card]`, empilhando em mobile.

## Risco
A recoloração via IA pode alterar levemente a forma. Se ocorrer, refazer com prompt mais restritivo ou aplicar filtro CSS (`filter: hue-rotate`) como fallback.