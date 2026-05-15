## Objetivo
No componente `ProblemCycle.tsx`, substituir a primeira lista de frases (as 4 com seta: "Você assiste um vídeo...", "Abre o computador...", "Vai buscar mais informação...", "Mais um vídeo...") pela imagem enviada pelo usuário.

## Passos

1. Copiar a imagem enviada para `src/assets/ciclo-bugado.png` usando `code--copy` (de `user-uploads://Mais_um_vídeo_sem_entender_nada....png`).

2. Editar `src/components/sales/ProblemCycle.tsx`:
   - Adicionar `import cicloBugado from "@/assets/ciclo-bugado.png";`
   - Remover o bloco `<ul>` que contém as 4 frases com seta (logo após "Hoje você vive um ciclo que não te deixa sair do lugar.").
   - No lugar, inserir a imagem centralizada e responsiva:
     ```tsx
     <div className="mt-8 flex justify-center">
       <img
         src={cicloBugado}
         alt="Ciclo de frustração: mais um vídeo sem entender nada, não sei por onde começar, todo mundo consegue menos eu, tanta informação que eu me perco, minha cabeça bugou de novo, toda hora eu travo e não consigo terminar"
         className="w-full max-w-md rounded-2xl"
       />
     </div>
     ```

3. Manter intacto todo o resto do componente: o título, a segunda lista ("Tem gente ganhando dinheiro..."), e o bloco final destacado.

## Impacto
Mudança apenas visual em uma seção. Nenhuma lógica ou outro componente afetado.