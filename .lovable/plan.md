## Mudança

No `src/components/sales/Hero.tsx`, dentro do `<h1>`, envolver o trecho **"Agente de IA do Zero"** em um `<span className="text-alert">` para colorir com `#FF7A00` (token `--brand-alert` já existente).

### Antes
```tsx
<h1 className="... text-white">
  Pare de se perder tentando entender agentes de IA por conta própria, e saia daqui com seu Agente de IA do Zero em 37 minutos!
</h1>
```

### Depois
```tsx
<h1 className="... text-white">
  Pare de se perder tentando entender agentes de IA por conta própria, e saia daqui com seu <span className="text-alert">Agente de IA do Zero</span> em 37 minutos!
</h1>
```

Sem mudanças em outros arquivos, sem novos tokens.
