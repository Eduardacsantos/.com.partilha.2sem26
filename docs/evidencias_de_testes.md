# Evidências de testes

Testes feitos em **04/11/2026** com Chromium automatizado (Playwright) e scripts de verificação sobre as 19 páginas. Os prints estão em `docs/evidencias/`.

## 1. Estrutura e semântica (19 páginas)

| Verificação | Resultado |
|---|---|
| `lang="pt-BR"` em todas | Aprovado |
| Exatamente um `<h1>` por página, sem saltos de nível nos títulos | Aprovado |
| `<header>`, `<nav>`, `<main>`, `<footer>` e `meta description` | Aprovado |
| `id` únicos | Aprovado |
| Todas as imagens com `alt` | Aprovado |
| Todo campo de formulário com `<label for>` | Aprovado |
| Todos os `<button>` com `type` | Aprovado |
| Links internos e arquivos (CSS, JS, imagens, vídeo, áudio) existem | Aprovado, 0 links quebrados |

## 2. Contraste (WCAG AA, mínimo 4,5:1)

| Par de cores | Razão |
|---|---|
| Texto / fundo (claro) | 15,48 |
| Texto secundário / fundo (claro) | 5,88 |
| Branco / verde (botões e menu) | 6,37 |
| Branco / laranja (botão de destaque) | 5,37 |
| Erro / fundo (claro) | 5,30 |
| Texto / fundo (escuro) | 15,21 |
| Texto secundário / fundo (escuro) | 6,91 |
| Link verde / fundo (escuro) | 8,21 |
| Laranja / fundo (escuro) | 7,46 |

Todos os 17 pares testados passaram. Prints: `01_index_desktop.png` e `02_index_tema_escuro.png`.

## 3. Navegação por teclado

- O primeiro `Tab` em qualquer página foca "Pular para o conteúdo" (`03_teclado_foco_pular_conteudo.png`).
- Os links do menu recebem foco visível (`04_teclado_foco_menu.png`).

## 4. Formulário de contato

| Teste | Resultado |
|---|---|
| Enviar vazio | Bloqueado; campos obrigatórios marcados como inválidos (`07_formulario_campo_invalido.png`) |
| E-mail sem domínio completo (`maria@exemplo`) | Inválido |
| Telefone fora do padrão (`123`) | Inválido |
| Quantidade acima de 999 | Inválida |
| Data de retorno no passado | Inválida (mínimo = hoje) |
| Tudo preenchido corretamente | Mostra a confirmação (`08_formulario_enviado.png`) |

Também testado: cadastro de item em `doacao.html`, que funciona e mostra a mensagem de sucesso.

## 5. Responsividade

Nenhuma das 19 páginas tem rolagem horizontal em 1280, 768 e 390 px de largura. Prints: `09_index_celular.png`, `10_impacto_celular.png`, `05_galeria.png`, `06_orcamento.png`.

## 6. Multimídia

- Vídeo: 16 segundos, com `poster` e uma faixa de legendas em português.
- Áudio: `controls`, com descrição em texto.
- Mapa: `<iframe>` do OpenStreetMap com `title`.
- Console sem erros de JavaScript. No ambiente de teste (sem internet) as fontes do Google e o mapa não carregaram, o que é esperado. As legendas `.vtt` só carregam via servidor (Live Server ou site publicado), não via `file://`.

## 7. Validação do HTML (W3C)

Em **07/11/2026** as páginas foram validadas com o **Nu Html Checker, versão 26.11.4**, o mesmo motor do W3C Markup Validator (validator.w3.org), executado sobre os arquivos do repositório. As 10 páginas exigidas no roteiro foram validadas uma a uma, com print do resultado:

| Página | Erros | Avisos | Print |
|---|---|---|---|
| index.html | 0 | 0 | `evidencias/w3c_index.png` |
| sobre.html | 0 | 0 | `evidencias/w3c_sobre.png` |
| projetos.html | 0 | 0 | `evidencias/w3c_projetos.png` |
| impacto.html | 0 | 0 | `evidencias/w3c_impacto.png` |
| acessibilidade.html | 0 | 0 | `evidencias/w3c_acessibilidade.png` |
| galeria.html | 0 | 0 | `evidencias/w3c_galeria.png` |
| midia.html | 0 | 0 | `evidencias/w3c_midia.png` |
| noticias.html | 0 | 0 | `evidencias/w3c_noticias.png` |
| contato.html | 0 | 0 | `evidencias/w3c_contato.png` |
| orcamento_hospedagem.html | 0 | 0 | `evidencias/w3c_orcamento_hospedagem.png` |

As outras 9 páginas (`doacao`, `aprenda` e os 7 temas de consumo consciente) também foram validadas e deram **0 erros e 0 avisos**. Total: 19 páginas sem erros.

## 8. Acessibilidade automatizada (axe-core, WCAG 2.2 AA)

Em **07/11/2026** as 19 páginas foram analisadas com o axe-core (regras WCAG 2 A/AA, 2.1 A/AA e 2.2 AA) em Chromium, nos temas **claro e escuro**.

- Nenhuma violação de contraste, de `alt`, de rótulos de formulário, de idioma, de estrutura de títulos ou de regiões (landmarks).
- Uma ocorrência, repetida em todas as páginas: os botões **A-** e **A+** (tamanho do texto) têm `aria-label` que não repete o texto visível (critério 2.5.3, Rótulo no Nome). Leitores de tela leem o botão normalmente; o efeito é para quem usa comando de voz. Correção sugerida: incluir o texto visível no rótulo, por exemplo `aria-label="A+ aumentar tamanho do texto"`.
- Em alguns elementos o axe não consegue calcular o contraste sozinho (texto sobre fundos com gradiente), por isso vale também o cálculo manual da seção 2.

## 9. Navegação por teclado nas 19 páginas

Cada página foi percorrida apenas com a tecla `Tab` (Chromium automatizado):

| Verificação | Resultado |
|---|---|
| O primeiro `Tab` foca "Pular para o conteúdo" | 19 de 19 páginas |
| `Enter` no link leva ao conteúdo principal (`#mainContent`) | 19 de 19 páginas |
| Foco chega a todos os links, botões e campos, de 31 a 44 paradas por página, sem prender o foco | 19 de 19 páginas |
| Foco visível nos links, botões e campos de texto | Sim. Campos de data, vídeo, áudio e o mapa usam o foco desenhado pelo próprio navegador |

## 10. Leitor de tela

A leitura de `index`, `contato` e `galeria` foi verificada pela **árvore de acessibilidade** que o navegador entrega aos leitores de tela. O que foi observado:

- Ordem de leitura: link "Pular para o conteúdo", cabeçalho (`banner`), navegação principal com nome, conteúdo (`main`) e rodapé (`contentinfo`).
- Cada página tem um `h1`, e os títulos seguem a ordem h1, h2, h3.
- No formulário, todo campo tem nome acessível, os botões de opção estão agrupados em "Eu sou" e a mensagem de confirmação é anunciada com `aria-live`.
- Na galeria, cada imagem tem descrição em `alt` e legenda com a fonte.
- Pontos de atenção: o `h1` da página inicial é ".ComPartilha" (o ponto inicial pode ser lido em voz alta), e a lista de integrantes em `contato.html` mostra "Leticia" sem acento.

Esta verificação **não substitui** um teste ouvindo o site em NVDA (Windows), VoiceOver (Mac/iPhone) ou TalkBack (Android). Esse teste com voz real ainda não foi feito pela equipe.
