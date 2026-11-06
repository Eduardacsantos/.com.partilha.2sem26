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

## 7. Pendente: feito pela equipe

**W3C Markup Validator** (https://validator.w3.org/): não conseguimos rodar o validador oficial neste ambiente. Para cada página, abra o validador, use "Validate by File Upload", tire um print do resultado e salve em `docs/evidencias/w3c_<pagina>.png`. Anote aqui o resultado:

| Página | Erros | Avisos | Print |
|---|---|---|---|
| index.html | | | |
| sobre.html | | | |
| projetos.html | | | |
| impacto.html | | | |
| acessibilidade.html | | | |
| galeria.html | | | |
| midia.html | | | |
| noticias.html | | | |
| contato.html | | | |
| orcamento_hospedagem.html | | | |

**Leitor de tela** (NVDA no Windows, VoiceOver no Mac/iPhone ou TalkBack no Android): percorrer `index`, `contato` e `galeria` e anotar o que foi lido de forma estranha.
