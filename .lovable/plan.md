## Objetivo
Deixar a imagem da logo sem a frase "Agente de IA do Zero" embutida, mantendo apenas a frase ao lado direito — com "Agente de IA" na primeira linha e "do Zero" na segunda.

## Alterações

### 1. Substituir a imagem da logo
- Gerar uma nova versão da logo **somente com o símbolo/ícone** (sem o texto "Agente de IA do Zero" embutido na arte).
- Salvar como novo asset (ex.: `src/assets/logo-icon.png`, fundo transparente).
- Atualizar o import em `src/components/sales/Hero.tsx` para usar o novo arquivo.

### 2. Ajustar o texto ao lado da logo (`src/components/sales/Hero.tsx`)
- Manter o container flex horizontal (logo + texto).
- Trocar o `<span>` atual por uma estrutura em duas linhas:
  - Linha 1: **Agente de IA**
  - Linha 2: **do Zero**
- Manter tipografia atual (bold, branco, `text-2xl sm:text-3xl md:text-4xl`, leading apertado).
- Alinhamento vertical centralizado em relação à logo.

## Fora do escopo
- Nenhuma outra seção, cor, copy ou layout do site será alterada.

## Observação
A frase "Agente de IA do Zero" está embutida no arquivo de imagem da logo atual, por isso é necessário gerar uma nova versão só com o ícone. Se você preferir, pode me enviar um arquivo de logo sem texto e eu apenas troco o asset, sem gerar uma nova imagem.
