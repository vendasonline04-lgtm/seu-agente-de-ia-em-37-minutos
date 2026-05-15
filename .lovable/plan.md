## Objetivo
Deixar a imagem do "ciclo bugado" (em `ProblemCycle.tsx`) em alta resolução, com as letras nítidas — sem embaçar.

## Abordagem
A imagem original enviada pelo usuário tem resolução baixa, então qualquer ampliação no CSS deixa as letras borradas. Vou recriar a imagem em alta resolução usando IA de edição de imagem (`imagegen--edit_image`), preservando exatamente o mesmo layout, personagem, balões roxos e textos.

## Passos

1. Usar `imagegen--edit_image` com a imagem atual (`src/assets/ciclo-bugado.png`) como referência, gerando uma versão em alta resolução com texto nítido. Salvar em `src/assets/ciclo-bugado.png` (sobrescreve).
   - Prompt: recriar a mesma cena (jovem com mãos na cabeça, frustrado, em frente ao notebook, fundo gradiente roxo/laranja) com os mesmos 6 balões roxos contendo exatamente os mesmos textos em português:
     - "Mais um vídeo sem entender nada..."
     - "Tanta informação que eu me perco"
     - "Não sei por onde começar"
     - "Minha cabeça bugou de novo"
     - "Todo mundo consegue, menos eu"
     - "Toda hora eu travo e não consigo terminar"
   - Aspect ratio: `1:1` (mesma proporção da original).
   - Texto deve ficar perfeitamente legível e nítido (alta resolução).

2. Não é preciso editar `ProblemCycle.tsx` — o import já aponta para `@/assets/ciclo-bugado.png` e o arquivo será atualizado no mesmo caminho.

## Risco
Modelos de geração de imagem ocasionalmente erram ortografia em português. Caso algum texto saia errado após a geração, faço uma segunda passada de edição corrigindo apenas os balões com erro.