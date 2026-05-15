## Objetivo
Remover a seção "Quem vai criar junto com você / Seu Agente de IA do Zero – Simplifica-AI" da página inicial.

## Mudanças
1. Em `src/routes/index.tsx`: remover o import de `About` e a tag `<About />` do JSX.
2. Excluir o arquivo `src/components/sales/About.tsx`.

Nenhuma outra seção é alterada.