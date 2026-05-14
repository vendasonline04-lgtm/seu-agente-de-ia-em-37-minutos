## Objetivo
Remover a seta (ícone `ArrowRight`) de todos os botões CTA da página e usar todo o espaço do botão apenas com o texto centralizado.

## Mudança

**Arquivo:** `src/components/sales/CTAButton.tsx`

- Remover o import de `ArrowRight` do `lucide-react`.
- Remover o `<ArrowRight />` do JSX.
- Remover o `<span>` em volta do texto (não é mais necessário, já que só há texto).
- Remover `gap-3` (não há mais 2 elementos para espaçar).
- Remover a classe `group` (era usada só para animar a seta no hover).

Resultado: o botão fica apenas com o texto ocupando todo o espaço interno, mantendo o gradiente, padding, sombra e demais estilos atuais.

## Impacto
Como todos os CTAs da página (`Hero`, `OfferCTA`, `Recap`, etc.) usam o componente `CTAButton`, a mudança em um único arquivo aplica em toda a página.