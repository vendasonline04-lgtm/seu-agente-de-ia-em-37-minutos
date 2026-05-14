## Mudança no Bloco 1 (Hero)

**Arquivo afetado:** `src/components/sales/Hero.tsx` + nova imagem em `src/assets/`.

### 1. Nova imagem

Copiar a imagem enviada (laptop roxo com "Seu Agente de IA do Zero") para `src/assets/hero-produto.png` e importar via ES6 no `Hero.tsx`, substituindo o `/produto.png` atual.

### 2. Reordenação responsiva

Hoje a estrutura é uma única `<div>` flex com duas colunas (texto à esquerda, imagem à direita). No mobile vira coluna e a imagem fica **abaixo** do botão.

Vou reestruturar para que:

- **Mobile (`< md`)**: ordem vertical → Título → Subtítulo → **Imagem** → Botão CTA
- **Desktop (`md+`)**: layout em duas colunas → Texto (título + subtítulo + botão) à esquerda, **Imagem** à direita

### Detalhe técnico

Em vez de manter o botão dentro da coluna de texto, vou:

- Tirar o botão de dentro da coluna de texto.
- Usar uma estrutura mobile-first em coluna: `[texto] [imagem] [botão]`.
- Em `md+`, aplicar `md:grid md:grid-cols-2` onde a coluna esquerda agrupa texto + botão e a coluna direita exibe a imagem (usando `md:order-*` ou repetindo o botão fora do grid mobile via classes `md:hidden` / `hidden md:inline-flex` — vou optar pela abordagem com `order` para evitar duplicação do CTA).

Resultado: zero mudança em outros componentes, sem novos tokens, sem mudança de copy.
