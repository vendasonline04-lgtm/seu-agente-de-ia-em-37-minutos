## Badges premium visíveis no mobile

Hoje os badges hexagonais dourados (`badge-diamond`, `badge-crown`, `badge-star`) usam `hidden sm:block` em `src/components/sales/Deliverables.tsx`, então somem no mobile — exatamente onde o destaque "produto premium" mais importa.

### Mudança

Em `src/components/sales/Deliverables.tsx`, nos 3 itens premium:

1. Remover `hidden sm:block` do `<img>` do badge — ele passa a aparecer em todas as larguras.
2. Reorganizar o canto direito do card para que **badge fique acima do preço**, ambos alinhados à direita:
   - Envolver o `<img>` do badge e o `<span>` do preço num wrapper `flex flex-col items-end gap-2 shrink-0`.
   - Tamanho do badge mantido (~56px) — funciona bem tanto no desktop quanto no mobile do print.
3. Manter inalterados: glow do card, cor/brilho do preço, e os 2 últimos itens (sem badge, preço sozinho à direita como hoje).

### Fora do escopo
Nenhuma outra mudança visual ou de conteúdo.