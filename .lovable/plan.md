## Ocultar o bloco de depoimentos também em `src/main.tsx`

O bloco já está comentado em `src/routes/index.tsx`, mas há uma segunda renderização em `src/main.tsx` (linha 25) que ainda exibe `<Testimonials />`.

### O que fazer
- Em `src/main.tsx`, trocar a linha `<Testimonials />` por `{/* <Testimonials /> */}`, mantendo o import intacto para reativação futura.

Nenhuma outra mudança.