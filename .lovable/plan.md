## Objetivo
Substituir a logo atual (`src/assets/logo.png`) por uma versão em alta resolução e sem fundo (PNG transparente).

## Passos
1. Gerar uma nova logo em alta resolução (1024x1024) com fundo transparente, mantendo o mesmo conceito visual da imagem de referência enviada: robô fofo de IA em tons de roxo com o texto "Agente de IA do Zero".
2. Salvar em `src/assets/logo.png` (sobrescrevendo a atual) para que o import existente em `src/components/sales/Hero.tsx` continue funcionando sem alterações.
3. Verificar visualmente o resultado no preview.

## Detalhes técnicos
- Ferramenta: `imagegen--generate_image` com `transparent_background: true`, `model: premium` (texto legível) e dimensões 1024x1024.
- Nenhum código React precisa ser alterado — apenas o asset é trocado.