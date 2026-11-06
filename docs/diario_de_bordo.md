# Diário de bordo

Registro das decisões, aprendizados e dificuldades do projeto. As seções **Versão 1** e **Versão 2** foram escritas a partir do que está no código e na revisão feita para a Entrega 01. **Cada integrante deve acrescentar a própria seção** (modelo no final), porque o diário precisa refletir a experiência real da equipe.

## Versão 1: protótipo funcional

### Decisões

- **HTML, CSS e JavaScript puros, sem frameworks.** Mantém o site leve (menos dados trafegados, menos energia) e é o que a disciplina pede.
- **Ícones em SVG** em vez de imagens: pesam poucos bytes e herdam a cor do texto, o que ajuda no contraste dos dois temas.
- **Tema claro e escuro com memória**, respeitando a preferência do sistema operacional no primeiro acesso.
- **Botões A-, A e A+** para o tamanho do texto, pensando em baixa visão.
- **Um CSS e um JS por página**, com `base.css` e `base.js` para o que é comum. Cada integrante edita só os arquivos da sua página, o que reduz conflitos no Git.
- **Doação sem backend:** a lista de itens fica no `sessionStorage` do navegador, o que basta para demonstrar o fluxo.

## Versão 2: revisão para a Entrega 01 (04/11/2026)

### Decisões

- **Páginas exigidas pelo roteiro.** O roteiro lista 10 páginas com nome fixo. Mantivemos as páginas que já existiam (doação e os 7 temas do Aprenda) e criamos as que faltavam: `projetos`, `impacto`, `acessibilidade`, `galeria`, `midia`, `noticias`, `contato` e `orcamento_hospedagem`. A antiga `historia.html` virou `sobre.html`.
- **Menu único com 12 links** em todas as páginas, em uma linha própria abaixo da marca. Em telas menores o menu rola para o lado. O rodapé ganhou o mapa completo do site.
- **Nomes dos integrantes só na página Contato.** Antes o rodapé de todas as páginas listava os nomes; agora há um lugar só para editar.
- **Imagens, vídeo e áudio provisórios**, criados pela equipe: ilustrações SVG, um vídeo de 16 segundos com legendas (`.vtt`) e uma vinheta de áudio com descrição em texto. Podem ser trocados pelos materiais reais (ver `docs/como_trocar_as_imagens.md`).
- **Dados com fonte.** A página Impacto usa números da UNEP, da Embrapa e do IBGE, com link. Tudo que é fictício (contatos, itens de doação) está marcado como fictício.
- **Orçamento com a data da pesquisa** e aviso de que os preços mudam.

### Dificuldades e aprendizados

- **Hierarquia de títulos.** Só a página inicial tinha `<h1>`. Ao corrigir, descobrimos que títulos de cartões e do rodapé pulavam de nível (h1 para h3). Ajustamos todas as páginas para uma sequência sem saltos.
- **Menu com muitos itens.** Com 12 links, o último caía sozinho em uma segunda linha. Resolvemos reduzindo o espaçamento e passando a rolar o menu em telas menores.
- **Contraste nos dois temas.** Calculamos a razão de contraste de cada par de cores; todas ficaram acima de 4,5:1, então não precisou mexer na paleta.
- **Botões sem `type`.** Os botões do cabeçalho não tinham `type="button"`. Corrigimos para evitar comportamento inesperado dentro de formulários.
- **Legendas do vídeo não carregam abrindo o arquivo direto no navegador** (protocolo `file://`). Funcionam com o Live Server ou com o site publicado.
- **E-mail "válido" demais.** O `type="email"` aceita `maria@exemplo` (sem `.com`). Acrescentamos um `pattern` para exigir o domínio completo.
- **Validação oficial.** O W3C Validator precisa ser rodado pela equipe em cada página (ver `evidencias_de_testes.md`).

## Modelo para cada integrante

```
### [Nome]: [data]
- O que eu fiz:
- Decisões que tomei e por quê:
- O que aprendi:
- Dificuldades e como resolvi:
```
