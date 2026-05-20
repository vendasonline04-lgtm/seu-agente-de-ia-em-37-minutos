## Badges premium sofisticados nos 3 primeiros itens

Os badges atuais são desenhados em CSS (hexágono com clip-path + ícone lucide) e ficam visualmente pobres. Substituir por imagens PNG geradas em alta qualidade, no mesmo estilo do mock de referência: hexágono dourado 3D, com bisel, brilho interno, estrelas/partículas e ícone central premium.

### Abordagem

Gerar 3 PNGs com fundo transparente em `src/assets/`:

- `badge-diamond.png` — hexágono dourado 3D com ícone de **diamante** brilhante (item Aula)
- `badge-crown.png` — hexágono dourado 3D com ícone de **coroa** (item Checklist)
- `badge-star.png` — hexágono dourado 3D com ícone de **estrela** (item Template)

Estilo unificado: gradiente dourado rico (âmbar/ouro), borda externa em laranja brilhante, bisel interno com luz no topo-esquerda, micro-estrelas/sparkles ao redor, ícone central branco/dourado-claro com glow. Fundo transparente para encaixar sobre o card escuro.

### Mudanças em código

Em `src/components/sales/Deliverables.tsx`:
- Remover a construção CSS do hexágono (clip-path + lucide).
- Importar os 3 PNGs e renderizar como `<img>` (~52px) com `drop-shadow` dourado sutil para integrar ao glow do card.
- Manter o resto inalterado (glow do card, preço com brilho, hierarquia dos 2 últimos itens sem badge).

### Fora do escopo
Nenhuma outra alteração visual ou de conteúdo.