## Objetivo

Deixar as letras presentes em `src/assets/menino-feliz.png` legíveis e em alta resolução, sem alterar as figuras (personagem, cenário, cores, composição).

## Abordagem

Usar `imagegen--edit_image` com a imagem atual como referência e um prompt focado apenas em refinar o texto:

- Manter exatamente a mesma cena, personagem, cores, layout e enquadramento.
- Apenas re-renderizar o texto existente com bordas nítidas, alta resolução, tipografia limpa e legível.
- Preservar o mesmo conteúdo textual, posição e estilo (fonte/cor) das letras originais.
- Salvar o resultado em `src/assets/menino-feliz.png` (substituindo a versão atual).

## Validação

- Após gerar, abrir a imagem e conferir se:
  1. As figuras permanecem idênticas.
  2. As letras estão nítidas e legíveis.
- Se o texto sair diferente do original, regenerar ajustando o prompt para travar o conteúdo textual exato.

## Observação

Caso o usuário queira preservar 100% o arquivo original e apenas sobrepor texto novo via HTML em cima da imagem (alternativa sem IA), me avise — é mais previsível para legibilidade, mas muda a forma como o texto aparece no componente `Solution.tsx`.
