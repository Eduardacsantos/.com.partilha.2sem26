# ComPartilha 🍽️

Protótipo funcional do projeto acadêmico ComPartilha: doação de alimentos (módulo
"Sobra Zero") combinada com conteúdo prático de consumo consciente, em um portal
leve, sustentável na própria construção e acessível a todos os públicos.

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas (suporte a tema claro/escuro)
- JavaScript puro (vanilla), sem frameworks nem build step
- Google Fonts: Petrona (títulos) e Hanken Grotesk (texto)
- Arquitetura de página única (SPA leve) — sem backend, tudo roda no navegador

## Estrutura

```
compartilha-projeto/
├── index.html   → estrutura das 10 telas do site
├── style.css    → todo o estilo, incluindo tema claro/escuro e acessibilidade
├── script.js    → navegação, módulo de doação, quiz, checklists,
│                  desafio de 7 dias, hábitos, tema e tamanho de texto
└── README.md
```

## Telas do site

1. **Início** — apresentação do ComPartilha e atalhos para as demais telas.
2. **Doação** — módulo Sobra Zero, dividido em:
   - **Doador**: formulário para cadastrar um item disponível para doação.
   - **Receba a doação**: busca e solicitação dos itens cadastrados.
3. **Consumo** — o que é consumo consciente, quiz necessidade x desejo, comparativo consumismo x consumo consciente.
4. **Alimentação** — como reduzir o desperdício em casa, com checklist e um link direto para a doação do excedente.
5. **Casa** — dicas de água e energia, com desafio interativo de 7 dias.
6. **Reutilização** — os 3 Rs (Reduzir, Reutilizar, Reciclar).
7. **Compras** — comparação entre um produto de preço menor e um mais durável/rastreável.
8. **Economia** — checklist de antes de comprar, com barra de progresso.
9. **Hábitos** — 10 hábitos de consumo consciente para priorizar.
10. **Nossa História** — origem, valores do projeto e como o próprio site foi pensado para ser sustentável e acessível.

As 7 seções de consumo consciente (3 a 9) foram trazidas de uma versão anterior do
projeto e adaptadas para reforçar o propósito do portal: reduzir o desperdício não
começa só na hora de doar, começa nas escolhas do dia a dia.

## Sustentabilidade e acessibilidade do próprio portal

O ComPartilha tenta praticar o que prega — inclusive na forma como foi construído:

- **Leve por padrão**: sem frameworks, sem imagens pesadas (só emoji), poucas
  requisições externas (2 famílias de fonte + 1 CSS + 1 JS) e nenhum script de
  rastreamento — menos dado trafegado, menos energia consumida.
- **Tema claro/escuro com memória**: respeita a preferência do sistema operacional
  no primeiro acesso e lembra a escolha do usuário depois (o tema escuro reduz o
  consumo de energia em telas OLED).
- **Tamanho de texto ajustável** (botões A-/A/A+ no cabeçalho), para quem precisa
  de fontes maiores ou menores.
- **Navegável por teclado**: foco visível em todos os elementos interativos e link
  "Pular para o conteúdo" no topo da página.
- **Compatível com leitores de tela**: uso de `label` em todos os campos, regiões
  `aria-live`/`role="status"` para mensagens dinâmicas (erros de formulário,
  feedback do quiz, confirmação de doação) e `aria-current` na navegação ativa.
- **Respeita quem prefere menos movimento**: animações são desativadas
  automaticamente para usuários com `prefers-reduced-motion` ativado no sistema.

## Como rodar no VS Code

1. Abra a pasta `compartilha-projeto` no VS Code.
2. Instale a extensão **Live Server** (se ainda não tiver).
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

Ou simplesmente abra o `index.html` direto no navegador — não precisa de servidor
nem de instalação de dependências, já que não há build step nem backend.
