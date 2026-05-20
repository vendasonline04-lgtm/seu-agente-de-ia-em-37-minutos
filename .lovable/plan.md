## Destaque premium nos 3 primeiros itens do bloco "Veja tudo que você vai receber"

Aplicar efeito de destaque visual nos 3 primeiros cards (Aula, Checklist, Template) do componente `Deliverables.tsx`, mantendo os 2 últimos com o estilo atual.

### O que muda

Em `src/components/sales/Deliverables.tsx`, marcar os 3 primeiros itens como `premium` e renderizar com:

1. **Glow externo laranja/dourado** ao redor da caixa (box-shadow forte em tom #FF7A00/dourado).
2. **Borda interna iluminada** sutil no topo/esquerda (gradient border ou inset shadow).
3. **Fundo levemente mais claro** que os 2 últimos, para sensação de "elevação".
4. **Badge hexagonal dourado** à direita, antes do preço, com ícone diferente por item:
   - Item 1 (Aula): diamante
   - Item 2 (Checklist): coroa
   - Item 3 (Template): estrela
   Usando ícones do `lucide-react` (`Gem`, `Crown`, `Star`) dentro de um hexágono dourado em CSS (clip-path) com brilho.
5. **Preço com leve glow** laranja nos 3 primeiros.

Os 2 últimos itens (Ferramentas, Ideias) ficam com o card atual `bg-white/5 ring-white/10` — sem glow, sem badge — para reforçar a hierarquia.

### Detalhes técnicos

- Adicionar campo `premium: boolean` e `badgeIcon` no array `items`.
- Criar variante visual condicional no `<li>`:
  - Premium: `style={{ boxShadow: "0 0 40px -5px rgba(255,122,0,0.45), inset 1px 1px 0 rgba(255,200,100,0.35)" }}` + `bg-gradient-to-br from-white/[0.08] to-white/[0.03]`.
  - Padrão: classes atuais.
- Badge hexagonal: `div` com `clip-path: polygon(...)`, fundo gradiente dourado (`from-amber-400 to-amber-600`), ícone branco/dourado-claro centralizado, com `drop-shadow` dourado.
- Preço premium: `text-alert` com `drop-shadow-[0_0_8px_rgba(255,122,0,0.6)]`.
- Os ícones circulares atuais (laranja) permanecem inalterados — conforme pedido na referência ("ícones originais mantidos").

### Fora do escopo
Nenhuma mudança nos textos, preços, ordem, cores globais ou outros componentes da página.