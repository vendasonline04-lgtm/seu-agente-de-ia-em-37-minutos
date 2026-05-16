## Objetivo

1. Melhorar a nitidez das letras dentro de `src/assets/menino-feliz.png` sem alterar nenhum elemento da imagem (personagem, balões, cores, composição).
2. Aumentar o tamanho exibido da imagem no componente `Solution.tsx` para ficar visualmente parecido com o tamanho da imagem de referência enviada (imagem maior, ocupando mais largura na seção).

## Passos

### 1. Re-renderizar a imagem com letras nítidas
- Usar `imagegen--edit_image` em `src/assets/menino-feliz.png` com prompt focado apenas em:
  - Manter exatamente a mesma cena, personagem, balões, cores e layout.
  - Re-renderizar APENAS o texto dos balões com tipografia nítida, bordas limpas e alta resolução.
  - Preservar o conteúdo textual exato de cada balão:
    - "Mais um vídeo sem entender nada..."
    - "Tanta informação que eu me perco"
    - "Não sei por onde começar"
    - "Minha cabeça bugou de novo"
    - "Todo mundo consegue, menos eu"
    - "Toda hora eu travo e não consigo terminar"
- Aspect ratio: manter o atual (a imagem é praticamente quadrada → `1:1`).
- Salvar sobrescrevendo `src/assets/menino-feliz.png`.

### 2. Validar
- Abrir a imagem gerada e conferir:
  - Figuras idênticas às originais.
  - Texto dos balões legível e nítido.
- Se algum texto sair diferente, regerar travando o conteúdo no prompt.

### 3. Aumentar o tamanho exibido em `Solution.tsx`
- Hoje a imagem usa `max-w-sm` (~384px).
- Trocar para `max-w-xl` ou `max-w-2xl` para que ela ocupe largura próxima à da imagem de referência (mantendo `w-full` e `rounded-2xl`).
- Nenhuma outra alteração de layout, copy ou estilo da seção.

## Fora de escopo
- Não mudar texto, cores ou layout da seção.
- Não tocar em outras imagens ou componentes.
