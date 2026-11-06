# Como trocar as imagens pelas fotos da equipe

As ilustrações atuais da galeria são SVGs autorais em `img/`. Para usar suas próprias fotos:

## 1. Prepare a imagem

- Renomeie sem espaços e sem acentos: `oficina-reciclagem.jpg`.
- Reduza o tamanho: idealmente abaixo de **300 KB** e com no máximo **1200 px** de largura. Sites como squoosh.app fazem isso de graça. Imagem leve é um critério de sustentabilidade do trabalho.
- Anote a **fonte**: se a foto é de vocês, "acervo da equipe"; se é de outro site, o nome do site e o link.

## 2. Coloque na pasta `img/`

## 3. Edite o `galeria.html`

Cada imagem é um bloco `<figure>`. Troque o `src`, o `alt`, a legenda e a fonte:

```html
<figure>
  <img src="img/oficina-reciclagem.jpg"
       alt="Voluntários separando garrafas plásticas em uma oficina de reciclagem"
       width="800" height="533" loading="lazy">
  <figcaption>
    <strong>Oficina de reciclagem</strong>
    Voluntários separando materiais na oficina do bairro.
    <span class="source">Fonte: acervo da equipe ComPartilha.</span>
  </figcaption>
</figure>
```

- **`alt`**: descreva o que aparece na imagem, como se estivesse contando para quem não enxerga. Não escreva "imagem de...".
- **`width` e `height`**: tamanho real da imagem em pixels (evita que a página "pule" ao carregar).
- **`loading="lazy"`**: só carrega a imagem quando ela chega perto da tela.

## 4. Vídeo, poster e áudio

Os arquivos de `assets/` (`como-funciona.mp4`, `vinheta-compartilha.mp3`) e `img/poster-video.jpg` são provisórios. Para trocar, mantenha o mesmo nome do arquivo, ou ajuste o `src` em `midia.html`. Se o vídeo novo tiver outro texto, **atualize também** `assets/como-funciona.pt-BR.vtt` (legendas) e a transcrição na página.
