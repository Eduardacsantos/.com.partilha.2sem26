# ComPartilha 🍽️

Protótipo funcional do projeto acadêmico ComPartilha: doação de alimentos (módulo
"Sobra Zero") combinada com conteúdo prático de consumo consciente, em um portal
leve, sustentável na própria construção e acessível a todos os públicos.

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas (suporte a tema claro/escuro)
- JavaScript puro (vanilla), sem frameworks nem build step
- Google Fonts: Petrona (títulos) e Hanken Grotesk (texto)
- Uma página HTML por tela, sem backend: tudo roda no navegador

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
├── historia.html       → Sobre nós
├── favicon.svg
├── css/
│   ├── base.css        → comum a todas: cores, tema escuro, cabeçalho, rodapé,
│   │                     botões, cartões e componentes usados em mais de uma página
│   ├── inicio.css  doacao.css  aprenda.css  consumo.css
│   └── casa.css  habitos.css  historia.css
└── js/
    ├── base.js         → comum a todas: tema claro/escuro e tamanho do texto
    ├── itens.js        → lista de doações (usada pela Início e pela Doar e receber)
    ├── checklist.js    → checklists com barra de progresso (Alimentação e Economia)
    └── inicio.js  doacao.js  consumo.js  casa.js  habitos.js
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
11. **Sobre nós** — origem, valores do projeto e como o próprio site foi pensado para ser sustentável e acessível.

## Divisão das páginas

| Página | Arquivos | Responsável |
|---|---|---|
| Início | `index.html`, `css/inicio.css`, `js/inicio.js` | a definir |
| Doar e receber | `doacao.html`, `css/doacao.css`, `js/doacao.js`, `js/itens.js` | a definir |
| Aprenda | `aprenda.html`, `css/aprenda.css` | a definir |
| Consumo | `consumo.html`, `css/consumo.css`, `js/consumo.js` | a definir |
| Alimentação | `alimentacao.html` | a definir |
| Casa | `casa.html`, `css/casa.css`, `js/casa.js` | a definir |
| Reutilização | `reutilizacao.html` | a definir |
| Compras | `compras.html` | a definir |
| Economia | `economia.html` | a definir |
| Hábitos | `habitos.html`, `css/habitos.css`, `js/habitos.js` | a definir |
| Sobre nós | `historia.html`, `css/historia.css` | a definir |

O cabeçalho e o rodapé se repetem em todas as páginas. Se precisar mudar o menu
ou o rodapé, combine com o grupo e mude em todas de uma vez.

## Como cada integrante faz o seu commit

O professor acompanha quem fez o quê pelo histórico do GitHub, então cada um
commita do próprio computador, com a própria conta.

**Uma vez só:**

1. Aceite o convite do repositório (chega por e-mail ou em
   github.com/Eduardacsantos/ComPartilha/invitations).
2. Clone o projeto: no VS Code, *Source Control → Clone Repository* e cole
   `https://github.com/Eduardacsantos/ComPartilha.git`
   (ou, no terminal, `git clone https://github.com/Eduardacsantos/ComPartilha.git`).
3. Configure seu nome e o **mesmo e-mail da sua conta do GitHub**, senão o commit
   não aparece no seu perfil:
   ```
   git config --global user.name "Seu Nome"
   git config --global user.email "email-da-sua-conta@github"
   ```

**A cada vez que for trabalhar:**

1. Puxe as novidades do grupo antes de começar: `git pull`
   (no VS Code: *Source Control → … → Pull*).
2. Edite só os arquivos da sua página.
3. Confira abrindo a página no navegador.
4. Faça o commit com uma mensagem que diga o que mudou, por exemplo
   `Adiciona dicas de armazenamento na página Alimentação`:
   ```
   git add alimentacao.html
   git commit -m "Adiciona dicas de armazenamento na página Alimentação"
   git push
   ```
   Se o `git push` recusar porque alguém enviou antes, rode `git pull` e depois
   `git push` de novo.

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

## Como rodar no VS Code

1. Abra a pasta `ComPartilha` no VS Code.
2. Instale a extensão **Live Server** (se ainda não tiver).
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

Ou simplesmente abra o `index.html` direto no navegador — não precisa de servidor
nem de instalação de dependências, já que não há build step nem backend.
