# Escopo do Projeto: ComPartilha

## 1. Identificação

| Campo | Informação |
|---|---|
| Nome da equipe | Equipe ComPartilha |
| Nome do projeto/site | ComPartilha: doação de alimentos e consumo consciente |
| Integrantes | Beatriz Fonseca Dias, Eduarda Carneiro dos Santos, Henrique Cordeiro Gonçalves, Julia Caroline Hütter de Lemos, Letícia Santos da Silva e Vitória Aparecida de Assis Silva |
| Data | 04/11/2026 |
| Professor/disciplina | Prof. Paulo Fratta, Front-End, Curso Superior de Informática, UNICID |

## 2. Contexto e justificativa

**Problema.** Todo dia sobra comida em algum lugar enquanto falta em outro. O relatório Food Waste Index 2024, do Programa das Nações Unidas para o Meio Ambiente (UNEP), estima que o mundo desperdiçou 1,05 bilhão de toneladas de alimentos em 2022, quase um quinto de tudo o que estava disponível aos consumidores. Cerca de 60% desse desperdício acontece dentro das casas. Para o Brasil, a Embrapa informa, com base no mesmo relatório, cerca de 94 kg de desperdício domiciliar por pessoa ao ano (incluindo partes não comestíveis).

**Por que é relevante.** Reduzir o desperdício combate a fome e diminui o uso de água, energia e terra gastos para produzir alimento que acaba no lixo. Além disso, serviços digitais costumam excluir pessoas com deficiência, que somam 14,4 milhões de brasileiros segundo o Censo 2022 do IBGE.

**Relação com sustentabilidade e impacto social.** O site trata o tema em todas as páginas: doação de excedentes (impacto social), consumo consciente (impacto ambiental) e acessibilidade digital (inclusão). A própria construção do site segue o tema: leve, sem rastreadores e acessível.

## 3. Objetivos

**Geral:** criar um portal que conecte quem tem alimentos sobrando a quem precisa e ensine hábitos de consumo consciente, de forma leve e acessível a todos os públicos.

**Específicos (mensuráveis):**

1. Publicar 10 páginas HTML5 interligadas e navegáveis, mais o módulo de doação e 7 temas de consumo consciente.
2. Entregar um formulário de contato com validação HTML5 em todos os tipos de campo exigidos.
3. Garantir contraste AA (mínimo de 4,5:1) nos temas claro e escuro.
4. Permitir navegação completa só com o teclado, com link "Pular para o conteúdo".
5. Obter zero erros no W3C Validator em todas as páginas.

## 4. Público-alvo

- **Prioritário: pessoas com deficiência** (visual, auditiva, motora e cognitiva), que usam leitor de tela, teclado, ampliação de texto e legendas.
- **Doadores:** moradores, comerciantes e feirantes com excedente de alimentos (adultos, de 18 a 60 anos, área urbana).
- **Quem busca doação:** famílias e pessoas em vulnerabilidade alimentar, incluindo idosos.
- **Estudantes e interessados** em consumo consciente.
- Localização inicial: região metropolitana de São Paulo.

## 5. Escopo funcional (o que o site terá)

| Nº | Página | Função |
|---|---|---|
| 1 | `index.html` | Resumo do tema, apresentação, menu principal e números das doações |
| 2 | `sobre.html` | História, missão, visão e valores |
| 3 | `projetos.html` | Sobra Zero, Aprenda e portal acessível |
| 4 | `impacto.html` | Dados, tabelas e resultados |
| 5 | `acessibilidade.html` | Medidas de inclusão para PCD e como testar |
| 6 | `galeria.html` | Imagens com legendas e fontes |
| 7 | `midia.html` | Vídeo legendado, áudio com transcrição e mapa (iframe) |
| 8 | `noticias.html` | Blog e notícias da equipe |
| 9 | `contato.html` | Dados fictícios, integrantes e formulário validado |
| 10 | `orcamento_hospedagem.html` | Comparativo de 3 hospedagens e 3 domínios |
| extra | `doacao.html` | Cadastro e busca de doações (Sobra Zero) |
| extra | `aprenda.html` + 7 temas | Consumo, alimentação, casa, reutilização, compras, economia e hábitos |

Também: formulário de contato, galeria, mídia, notícias e navegação principal com 12 links presente em todas as páginas.

## 6. Escopo não funcional

- **Acessibilidade:** `alt` descritivo, contraste AA, navegação por teclado, leitores de tela, `lang="pt-BR"`, ARIA (`aria-live`, `aria-current`), legendas e transcrição, `prefers-reduced-motion`.
- **Sustentabilidade:** conteúdo educativo, ícones e ilustrações em SVG (poucos KB), sem frameworks e sem rastreamento, tema escuro, hospedagem escolhida considerando proximidade dos servidores.
- **Responsividade:** celular, tablet e desktop, sem rolagem horizontal da página.
- **Desempenho:** imagens leves (SVG e um JPG de 28 KB), vídeo de 36 KB, código limpo e separado em HTML, CSS e JS.
- **SEO básico:** `title` e `meta description` únicos por página, um `h1` por página e hierarquia de títulos.

## 7. Mapa do site

```
index.html (Início)
├── doacao.html (Doar e receber)
├── aprenda.html
│   ├── consumo.html
│   ├── alimentacao.html
│   ├── casa.html
│   ├── reutilizacao.html
│   ├── compras.html
│   ├── economia.html
│   └── habitos.html
├── projetos.html
├── impacto.html
├── acessibilidade.html
├── galeria.html
├── midia.html
├── noticias.html
├── sobre.html
├── contato.html
└── orcamento_hospedagem.html
```

**Fluxo:** o menu principal (12 links) e o mapa do site no rodapé aparecem em todas as páginas, então qualquer página leva a qualquer outra em um clique. As páginas dos 7 temas se conectam entre si com botões "anterior" e "próximo".

## 8. Conteúdo e identidade visual

- **Tom de voz:** acolhedor, direto e prático; frases curtas e sem jargão.
- **Cores:** verde `#2f6b3f` (principal), laranja `#b4491f` (destaque e ação principal), fundo `#fdfcf9`; variação para tema escuro.
- **Tipografia:** Petrona (títulos) e Hanken Grotesk (textos), via Google Fonts, com fontes do sistema como reserva.
- **Logotipo:** o nome ".ComPartilha" em texto, com ".Com" em laranja, mais o `favicon.svg`.
- **Fontes de imagens e textos:** ilustrações, vídeo e áudio são autorais da equipe; dados estatísticos citam UNEP, Embrapa e IBGE com link; mapa do OpenStreetMap com crédito.

## 9. Tecnologias e ferramentas

HTML5, CSS3 (variáveis, grid, flexbox) e JavaScript puro. Editor: VS Code com Live Server. Controle de versão: Git e GitHub (repositório `Eduardacsantos/ComPartilha`). Validação: W3C Markup Validator, verificação de contraste e testes com teclado e leitor de tela.

## 10. Cronograma e divisão de tarefas

| Etapa | Prazo | Responsável |
|---|---|---|
| Definir tema, escopo e identidade visual | 21/09/2026 | Todos |
| Páginas base, doação e temas do Aprenda | 28/09/2026 | Ver tabela de funções em `docs/README.md` |
| Páginas exigidas (projetos, impacto, acessibilidade, galeria, mídia, notícias, contato, orçamento) | 15/10/2026 | Ver tabela de funções |
| Validação W3C e testes de acessibilidade | 25/10/2026 | Todos |
| Documentação em `/docs` e compactação do `.zip` | 03/11/2026 | Ver tabela de funções |
| Entrega no Blackboard | 09/11/2026 | Todos |

Ferramentas de gestão: GitHub (histórico de commits) e [Trello/Notion, se usarem].

## 11. Riscos e restrições

| Risco | Como reduzir |
|---|---|
| Prazo curto para 10 páginas e documentação | Dividir por página; priorizar o que o roteiro exige |
| Conflitos no Git ao editar o mesmo arquivo | Cada pessoa edita só os seus arquivos; `git pull` antes de começar |
| Pouca experiência com acessibilidade e W3C | Testar com teclado a cada página; rodar o validador antes de cada entrega |
| Imagens ou vídeo pesados deixando o site lento | Comprimir antes de usar (meta: abaixo de 300 KB por imagem) |
| Dados e preços desatualizados | Citar a fonte e a data da pesquisa; conferir antes da entrega |

## 12. Critérios de aceitação

O site está pronto quando:

- [ ] As 10 páginas exigidas existem, com os nomes do roteiro, e todos os links funcionam.
- [ ] O formulário de contato valida `required`, `email`, `tel`, `date`, `number` e `pattern`, com `label for`.
- [ ] Há `<video controls poster>`, `<audio controls>` e `<iframe>` na página de mídia.
- [ ] Todas as imagens têm `alt` descritivo, com legenda e fonte na galeria.
- [ ] O W3C Validator não aponta erros em nenhuma página.
- [ ] Todo o site é navegável só com o teclado e tem `lang="pt-BR"`.
- [ ] A pasta `docs/` tem README, diário de bordo, orçamento, evidências de testes e este escopo.
- [ ] O arquivo `.zip`, o `.txt` com os nomes, o `.png` da interface e o escopo (`.pdf`) foram enviados no Blackboard.

## 13. Aprovação

| Responsável pela validação | Data | Assinatura |
|---|---|---|
| Prof. Paulo Fratta | ____/____/______ | ______________________ |
