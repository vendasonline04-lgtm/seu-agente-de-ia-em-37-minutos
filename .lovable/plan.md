## Ajustes

### 1. Ícone "Lista das 5 ferramentas" não carrega
O arquivo é `src/assets/Ferramentas 04.png` — o espaço no nome quebra o import em produção. Renomear para `src/assets/Ferramentas04.png` e atualizar o import em `src/components/sales/Deliverables.tsx`.

### 2. Frase ao lado do boneco no logo (Hero)
Em `src/components/sales/Hero.tsx`, o bloco do logo usa `gap-0` mas o PNG do boneco tem padding interno transparente, deixando a frase visualmente longe. Aplicar margem negativa no texto (`-ml-3 sm:-ml-4`) para encostar "Agente de IA / do Zero" diretamente ao lado do boneco, sem distância.

### 3. Tamanho da imagem do menino triste = menino feliz
- `Solution.tsx` (menino feliz): `max-w-2xl`
- `ProblemCycle.tsx` (ciclo bugado / menino triste): atualmente `max-w-md`
Alterar `ProblemCycle.tsx` para `max-w-2xl` para igualar as duas imagens.

## Fora do escopo
Nenhuma outra alteração de conteúdo, cores ou layout.
