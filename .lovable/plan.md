## Inserir bloco "Compre agora e você vai receber tudo no seu email"

O componente `DeliverySteps` já existe em `src/components/sales/DeliverySteps.tsx` com exatamente o conteúdo pedido (headline, 3 ícones Mail/Download/PlayCircle, fundo `bg-secondary` roxo igual ao Recap, fonte/cor da headline igual). Ele só não está sendo renderizado.

## Mudanças

**`src/main.tsx`** — importar `DeliverySteps` e inseri-lo entre `<OfferCTA2 />` (bloco da oferta) e `<Urgency />` (bloco "Deixa eu ser direta com você").

Ordem atual relevante:
```
<OfferCTA2 />
<Urgency />   ← "Deixa eu ser direta com você"
```

Nova ordem:
```
<OfferCTA2 />
<DeliverySteps />   ← novo bloco
<Urgency />
```

**`src/routes/index.tsx`** — fazer o mesmo ajuste para manter as duas entradas (main.tsx e rota) consistentes. Inserir `<DeliverySteps />` logo após `<OfferCTA />` / antes de `<Urgency />`.

Nenhuma alteração de estilo é necessária — o componente já usa `bg-secondary` (mesmo roxo do Recap) e a headline já está com `text-3xl font-bold sm:text-4xl` em branco, idêntica à do Recap.
