# ComPartilha 🍽️

> O que sobra aqui pode fazer falta ali.

Portal de **doação de alimentos** (módulo "Sobra Zero") combinado com **conteúdo prático de consumo consciente**, feito em HTML5, CSS3 e JavaScript puro. Projeto da Atividade A2 (Entrega 01), disciplina de Front-End, Curso Superior de Informática, UNICID. Professor: Paulo Fratta.

## Objetivos

**Geral:** reduzir o desperdício de alimentos aproximando quem tem excedente de quem precisa, e ensinar hábitos de consumo consciente, em um site leve e acessível a todos os públicos, inclusive pessoas com deficiência.

**Específicos (mensuráveis):**

1. Entregar 10 páginas HTML interligadas e navegáveis (index, sobre, projetos, impacto, acessibilidade, galeria, midia, noticias, contato, orcamento_hospedagem), mais o módulo de doação e 7 temas de consumo consciente.
2. Ter um formulário de contato com validação HTML5 (required, email, tel, date, number, pattern, label for).
3. Atingir contraste mínimo AA (4,5:1) nos textos dos temas claro e escuro.
4. Permitir navegar por todo o site usando apenas o teclado.
5. Passar no W3C Validator sem erros nas 19 páginas.

## Tema

**Sustentabilidade e impacto social**: combate ao desperdício de alimentos, doação, consumo consciente, economia solidária e acessibilidade digital.

## Estrutura

Cada página tem o seu próprio HTML e, quando precisa, o seu próprio CSS e JS.
O que é usado por todas as páginas fica em `css/base.css` e `js/base.js`.

```
ComPartilha/
├── index.html          → Início
├── doacao.html         → Doar e receber (Doador / Receba a doação)
├── aprenda.html        → Aprenda: lista dos 7 temas
├── consumo.html        → tema Consumo
├── alimentacao.html    → tema Alimentação
├── casa.html           → tema Casa
├── reutilizacao.html   → tema Reutilização
├── compras.html        → tema Compras
├── economia.html       → tema Economia
├── habitos.html        → tema Hábitos
├── sobre.html          → Sobre nós (história, missão, visão, valores)
├── projetos.html  impacto.html  acessibilidade.html  galeria.html
├── midia.html  noticias.html  contato.html  orcamento_hospedagem.html
├── favicon.svg
├── img/  assets/  docs/   → imagens, mídia e documentação
├── css/
│   ├── base.css        → comum a todas: cores, tema escuro, cabeçalho, rodapé,
│   │                     botões, cartões e componentes usados em mais de uma página
│   ├── inicio.css  doacao.css  aprenda.css  consumo.css
│   └── casa.css  habitos.css  sobre.css  paginas.css
└── js/
    ├── base.js         → comum a todas: tema claro/escuro e tamanho do texto
    ├── itens.js        → lista de doações (usada pela Início e pela Doar e receber)
    ├── checklist.js    → checklists com barra de progresso (Alimentação e Economia)
    └── inicio.js  doacao.js  consumo.js  casa.js  habitos.js  contato.js
```

Páginas sem estilo ou interação próprios (Reutilização, Compras) usam só o
`base.css`. Se a sua página precisar, crie `css/<pagina>.css` ou `js/<pagina>.js`
e ligue no `<head>` dela, igual às outras páginas fazem.

## Telas do site

1. **Início** — apresentação do ComPartilha, números das doações disponíveis e atalhos para as demais telas.
2. **Doar e receber** — módulo Sobra Zero, dividido em:
   - **Doador**: formulário para cadastrar um item disponível para doação.
   - **Receba a doação** (`doacao.html#receber`): busca e solicitação dos itens cadastrados.
3. **Aprenda** — porta de entrada dos 7 temas de consumo consciente.
4. **Consumo** — o que é consumo consciente, quiz necessidade x desejo, comparativo consumismo x consumo consciente.
5. **Alimentação** — como reduzir o desperdício em casa, com checklist e um link direto para a doação do excedente.
6. **Casa** — dicas de água e energia, com desafio interativo de 7 dias.
7. **Reutilização** — os 3 Rs (Reduzir, Reutilizar, Reciclar).
8. **Compras** — comparação entre um produto de preço menor e um mais durável/rastreável.
9. **Economia** — checklist de antes de comprar, com barra de progresso.
10. **Hábitos** — 10 hábitos de consumo consciente para priorizar.
11. **Sobre nós** — história, missão, visão e valores do projeto.
12. **Projetos**, **Impacto**, **Acessibilidade**, **Galeria**, **Mídia**, **Notícias**, **Contato** e **Orçamento de hospedagem** — páginas exigidas pelo roteiro da Atividade A2.

## Divisão das páginas

| Página | Arquivos | Responsável |
|---|---|---|
| Início | `index.html`, `css/inicio.css`, `js/inicio.js` | Henrique |
| Doar e receber | `doacao.html`, `css/doacao.css`, `js/doacao.js`, `js/itens.js` | Henrique |
| Aprenda | `aprenda.html`, `css/aprenda.css` | Julia |
| Consumo | `consumo.html`, `css/consumo.css`, `js/consumo.js` | Julia |
| Alimentação | `alimentacao.html` | Beatriz |
| Casa | `casa.html`, `css/casa.css`, `js/casa.js` | Beatriz |
| Reutilização | `reutilizacao.html` | Henrique |
| Compras | `compras.html` | Leticia |
| Economia | `economia.html` | Vitoria |
| Hábitos | `habitos.html`, `css/habitos.css`, `js/habitos.js` | Vitoria |
| Sobre nós | `sobre.html`, `css/sobre.css` | Leticia |
| Projetos, Impacto, Acessibilidade | `projetos.html`, `impacto.html`, `acessibilidade.html` | Leticia |
| Galeria, Mídia, Notícias | `galeria.html`, `midia.html`, `noticias.html`, `img/`, `assets/` | Eduarda |
| Contato, Orçamento | `contato.html`, `js/contato.js`, `orcamento_hospedagem.html` | Eduarda |

O cabeçalho e o rodapé se repetem em todas as páginas. Se precisar mudar o menu
ou o rodapé, combine com o grupo e mude em todas de uma vez.

## Sustentabilidade e acessibilidade do próprio portal

O ComPartilha tenta praticar o que prega — inclusive na forma como foi construído:

- **Leve por padrão**: sem frameworks, sem imagens pesadas (ícones em SVG), poucas
  requisições por página (2 famílias de fonte + CSS e JS pequenos) e nenhum script
  de rastreamento — menos dado trafegado, menos energia consumida.
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

## Link do site

- **Link do site**: https://doealimentoscompartilha.vercel.app
