## Objetivo
Ajustar a headline do Bloco 1 (Hero) na versão desktop para:
1. Ficar **menor** (reduzir o tamanho atual de `md:text-6xl`).
2. Ficar **alinhada/justificada** com a sub-headline, ou seja, com a frase ocupando toda a largura da coluna — começando na extremidade esquerda e terminando na direita (text-justify).

## Mudanças

**Arquivo:** `src/components/sales/Hero.tsx` (linha 17, tag `<h1>`)

Classes atuais:
```
text-balance font-bold leading-[1.05] sm:text-5xl md:text-6xl text-white text-center text-3xl
```

Novas classes:
```
font-bold leading-[1.1] text-white text-center text-3xl sm:text-4xl md:text-5xl md:text-justify
```

Detalhes:
- Removido `text-balance` no desktop (ele impede o justify funcionar bem, pois rebalanceia as quebras de linha).
- Reduzido tamanho desktop: `md:text-6xl` → `md:text-5xl` (e `sm:text-5xl` → `sm:text-4xl` para escalonar bem).
- Adicionado `md:text-justify` para justificar a frase no desktop (extremidades esquerda/direita), mantendo `text-center` no mobile.
- Mobile (`text-3xl`, centralizado) permanece como está.

## Resultado esperado
- **Mobile:** headline centralizada, tamanho 3xl (sem alteração visual).
- **Desktop:** headline menor (5xl em vez de 6xl), justificada — primeira palavra encosta na esquerda, última palavra encosta na direita da coluna, igual a um parágrafo justificado.