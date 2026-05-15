## Objetivo
Aumentar a seta laranja no desktop para ficar bem notória, mantendo o tamanho atual no mobile.

## Mudança
Em `src/components/sales/FourSteps.tsx`, no componente `Arrow`:
- Mobile: manter `h-14 w-14` (sem alteração).
- Desktop: trocar `md:h-16 md:w-16` por `md:h-28 md:w-28`.