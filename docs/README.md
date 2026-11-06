# ComPartilha

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

## Páginas

| Exigida pelo roteiro | Arquivo |
|---|---|
| 1. Resumo do tema e menu | `index.html` |
| 2. História, missão, visão, valores | `sobre.html` |
| 3. Projetos | `projetos.html` |
| 4. Dados, tabelas, resultados | `impacto.html` |
| 5. Medidas de inclusão para PCD | `acessibilidade.html` |
| 6. Imagens com legendas e fontes | `galeria.html` |
| 7. Vídeo, áudio e iframe | `midia.html` |
| 8. Notícias e blog | `noticias.html` |
| 9. Contato, formulário e equipe | `contato.html` |
| 10. Orçamento de hospedagem e domínio | `orcamento_hospedagem.html` |

Páginas próprias do projeto: `doacao.html` (Doar e receber) e `aprenda.html` com os 7 temas (`consumo`, `alimentacao`, `casa`, `reutilizacao`, `compras`, `economia`, `habitos`).

## Divisão de funções

> **Atenção, equipe:** esta divisão é uma **sugestão**. Ajustem para refletir o que cada um realmente fez. O professor confere pelo histórico de commits do GitHub.

| Integrante | Páginas e arquivos |
|---|---|
| Beatriz | `index.html`, `css/inicio.css`, `js/inicio.js`, `sobre.html` |
| Eduarda | `doacao.html`, `css/doacao.css`, `js/doacao.js`, `js/itens.js`, `projetos.html` |
| Henrique | `aprenda.html`, `consumo.html`, `alimentacao.html`, `casa.html` e seus CSS/JS |
| Julia | `reutilizacao.html`, `compras.html`, `economia.html`, `habitos.html` e seus CSS/JS |
| Vitória | `acessibilidade.html`, `galeria.html`, `midia.html`, pasta `img/` e `assets/` |
| [6º integrante] | `contato.html`, `noticias.html`, `impacto.html`, `orcamento_hospedagem.html`, pasta `docs/` |

Em comum: `css/base.css`, `css/paginas.css` e `js/base.js` (combinar com o grupo antes de mudar).

## Estrutura de pastas

```
ComPartilha/
├── index.html  sobre.html  projetos.html  impacto.html  acessibilidade.html
├── galeria.html  midia.html  noticias.html  contato.html  orcamento_hospedagem.html
├── doacao.html  aprenda.html  consumo.html  alimentacao.html  casa.html
├── reutilizacao.html  compras.html  economia.html  habitos.html
├── css/      base.css, paginas.css e um CSS por página
├── js/       base.js, itens.js, contato.js e um JS por página
├── img/      ilustrações SVG da galeria e poster do vídeo
├── assets/   vídeo (mp4), legendas (vtt) e áudio (mp3)
└── docs/     README, diário de bordo, escopo, orçamento e evidências de testes
```

## Como rodar

Abra `index.html` direto no navegador, ou use a extensão **Live Server** do VS Code. Para ver as **legendas do vídeo** (página Mídia), use o Live Server ou um site publicado: abrir o arquivo direto (`file://`) faz o navegador bloquear o arquivo de legendas.

## Documentos desta pasta

- [`escopo_do_projeto.md`](escopo_do_projeto.md) (e `.pdf`)
- [`diario_de_bordo.md`](diario_de_bordo.md)
- [`orcamento_hospedagem.md`](orcamento_hospedagem.md)
- [`evidencias_de_testes.md`](evidencias_de_testes.md) e a pasta `evidencias/`
- [`como_trocar_as_imagens.md`](como_trocar_as_imagens.md)
