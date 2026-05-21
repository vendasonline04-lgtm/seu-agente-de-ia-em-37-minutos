## Logo: robô isolado em PNG transparente + texto via CSS

### Passos

1. **Gerar o robô isolado** com `imagegen--generate_image` (modelo `premium`, ~1024x1024, `transparent_background=true`), recriando apenas o personagem robô fofo roxo/branco com base luminosa que aparece na logo atual — sem nenhum texto. Salvar em `src/assets/robot-mascot.png`.

2. **Atualizar `src/components/sales/Hero.tsx`**:
   - Remover o import de `logo2atual.png`.
   - Importar `robot-mascot.png`.
   - Substituir o bloco do `<img>` da logo por um container flex horizontal contendo:
     - `<img>` do robô (~h-28 mobile, h-36 desktop).
     - Um bloco de texto com `<span>` "Agente de IA" (font-display, bold, white, ~text-3xl/text-5xl) e abaixo "do Zero" (menor, com tracking, opacidade leve, com pequenos traços laterais como divisor) — tudo flutuando direto sobre o gradiente do Hero, sem caixa de fundo.
   - Garantir `aria-label` ou alt apropriado para acessibilidade.

3. **Remover** `src/assets/logo2atual-dark.png` (não será mais usado). Manter `logo2atual.png` original intacto.

### Fora do escopo
Nenhuma outra mudança no Hero ou demais componentes.