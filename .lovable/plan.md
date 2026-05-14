# Página de vendas — Seu Agente de IA do Zero

Vou construir uma sales page de scroll único (padrão para páginas de venda diretas) com 14 blocos sequenciais, usando a paleta fornecida e a copy exata.

## Estrutura (14 blocos)

1. **Hero** (fundo `#260452`) — headline principal + subheadline + CTA primário
2. **Depoimentos** (fundo `#531790`) — 3 cards de prova social
3. **Diagnóstico do problema** (fundo branco) — ciclo do "bugado"
4. **Virada / apresentação do produto** (fundo `#531790`)
5. **Os 4 passos** (fundo branco) — cards numerados
6. **O que você recebe** (fundo `#260452`) — lista de entregáveis com check
7. **Para quem é** (fundo branco) — bullets
8. **Tabela de valor** (fundo `#531790`) — tabela estilizada com soma R$ 445
9. **Oferta + CTA principal** (fundo branco, destaque) — preço grande R$ 67, botão `#6D1CC3`, badge de urgência `#FF7A00`
10. **Bloco de perda / urgência** (fundo `#260452`) — uso de laranja `#FF7A00` para reforço
11. **Sobre a Valentina** (fundo branco)
12. **Recapitulação + segundo CTA** (fundo `#531790`)
13. **FAQ** (fundo branco) — accordion com 5 perguntas
14. **Footer** (fundo `#260452`) — contato + disclaimer

## Design system

- Atualizar `src/styles.css` com tokens semânticos em `oklch` derivados das cores HEX fornecidas:
  - `--background` branco, `--foreground` `#260452`
  - `--primary` `#260452` (dominante), `--secondary` `#531790`, `--accent` `#6D1CC3` (CTA), `--destructive`/`--alert` `#FF7A00` (urgência)
  - Gradientes utilitários `--gradient-hero` (dominante → secundária) e sombra elegante para o card de oferta
- Tipografia: par display + sans (ex.: Sora + Inter via Google Fonts) para sensação moderna/tech
- Botão CTA com variante `cta` (cor `#6D1CC3`, hover mais escuro, leve glow)
- Cronômetro/badge de urgência fixo no topo usando `#FF7A00` para reforçar escassez (mensagem "Oferta por tempo limitado")

## Implementação técnica

- Editar `src/routes/index.tsx` substituindo o placeholder
- Criar componentes em `src/components/sales/`:
  - `Hero.tsx`, `Testimonials.tsx`, `ProblemCycle.tsx`, `Solution.tsx`, `FourSteps.tsx`, `Deliverables.tsx`, `ForWho.tsx`, `ValueStack.tsx`, `OfferCTA.tsx`, `Urgency.tsx`, `About.tsx`, `Recap.tsx`, `FAQ.tsx` (usando `accordion` shadcn), `Footer.tsx`, `UrgencyBar.tsx` (barra fixa topo com cronômetro)
- Atualizar `head()` da rota `/` com title/description/og focados no produto
- Usar ícones Lucide (Check, Zap, Shield, Clock) com cor da paleta
- 100% responsivo (mobile-first), sem dark mode (página de venda é light)
- Sem backend — botões CTA apontam para `#oferta` (âncora interna) por enquanto; quando o usuário fornecer URL de checkout, troco

## Fora de escopo

- Cronômetro real com data fim (uso visual estático com horas:minutos:segundos animado client-side simples)
- Integração com checkout (placeholder `#`)
- Captura de leads / banco de dados

Pronto para implementar assim que aprovar.