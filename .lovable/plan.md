## Aumentar logo e remover fundo claro

Em `src/components/sales/Hero.tsx`:

1. **Aumentar tamanho**: trocar `h-20 ... sm:h-24` por `h-32 ... sm:h-40` no `<img>` do logo.

2. **Fundo igual ao da página**: a imagem `logo2atual.png` tem um retângulo de fundo claro/lavanda que destoa do gradiente roxo do Hero. Vou gerar uma nova versão da logo com fundo transparente usando `imagegen--edit_image` (transparent_background=true), salvando como `src/assets/logo2atual-transparent.png`, e atualizar o import no Hero. Assim o logo fica "flutuando" sobre o gradiente roxo (`#260452 → #531790`) sem caixa visível.

### Fora do escopo
Nenhuma outra mudança no Hero ou em outros componentes.