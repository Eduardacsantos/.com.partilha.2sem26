# Diário de bordo

Registro das decisões, atividades, aprendizados e dificuldades durante o desenvolvimento do projeto. O diário foi organizado de acordo com a divisão de páginas da equipe e com o cronograma definido pelo grupo.

> **Observação para revisão:** este texto é uma versão organizada a partir da divisão de tarefas, dos prazos e das informações já registradas no projeto. Antes da entrega, cada integrante deve conferir e ajustar os relatos para que representem fielmente o que realizou.

## 1. Início do projeto — 21/09/2026

### Atividades do grupo
- Realizamos o planejamento inicial do site, definindo o tema, o objetivo do projeto e o público que gostaríamos de alcançar.
- Conversamos sobre a identidade visual e a organização das páginas, pensando em uma navegação simples e acessível.
- Dividimos as responsabilidades entre os integrantes para que cada pessoa pudesse desenvolver uma parte do site.
- Definimos como prazo inicial **21/09/2026** para o tema, o escopo e a identidade visual.

### Decisões
- Utilizar HTML, CSS e JavaScript, sem frameworks, mantendo a estrutura mais simples e adequada à proposta da disciplina.
- Separar os arquivos de cada página para facilitar o desenvolvimento individual e diminuir conflitos durante a integração.
- Pensar desde o início em recursos de acessibilidade, como ajuste do tamanho do texto, contraste e navegação.

## 2. Divisão das páginas e responsabilidades

| Integrante | Páginas e arquivos atribuídos |
|---|---|
| **Henrique** | Início (`index.html`, `css/inicio.css`, `js/inicio.js`); Doar e receber (`doacao.html`, `css/doacao.css`, `js/doacao.js`, `js/itens.js`); Reutilização (`reutilizacao.html`) |
| **Julia** | Aprenda (`aprenda.html`, `css/aprenda.css`); Consumo (`consumo.html`, `css/consumo.css`, `js/consumo.js`) |
| **Beatriz** | Alimentação (`alimentacao.html`); Casa (`casa.html`, `css/casa.css`, `js/casa.js`) |
| **Leticia** | Compras (`compras.html`); Sobre nós (`sobre.html`, `css/sobre.css`); Projetos, Impacto e Acessibilidade (`projetos.html`, `impacto.html`, `acessibilidade.html`) |
| **Vitoria** | Economia (`economia.html`); Hábitos (`habitos.html`, `css/habitos.css`, `js/habitos.js`) |
| **Eduarda** | Galeria, Mídia e Notícias (`galeria.html`, `midia.html`, `noticias.html`, pastas `img/` e `assets/`); Contato e Orçamento (`contato.html`, `js/contato.js`, `orcamento_hospedagem.html`) |

*O cabeçalho e o rodapé são compartilhados por todas as páginas. Alterações no menu ou no rodapé devem ser combinadas com o restante da equipe.*

## 3. Desenvolvimento inicial — até 28/09/2026

### Atividades do grupo
- Começamos a transformar o planejamento em páginas do site.
- Organizamos a estrutura dos arquivos e a aparência geral, buscando manter uma identidade visual consistente.
- Desenvolvemos as páginas-base, a área de doação e os temas da seção Aprenda, conforme a primeira etapa do cronograma.
- Cada integrante começou a trabalhar nos arquivos que ficaram sob sua responsabilidade.

### Decisões e aprendizados
- Utilizamos arquivos separados de CSS e JavaScript quando necessário, para facilitar a manutenção.
- Criamos recursos comuns para evitar repetir elementos em todas as páginas.
- Percebemos a importância de combinar previamente mudanças em elementos compartilhados, principalmente no cabeçalho e no rodapé.

## 4. Continuação do desenvolvimento — 29/09 a 15/10/2026

### Atividades do grupo
- Demos continuidade à criação das páginas individuais, seguindo a divisão de responsabilidades.
- Trabalhamos na organização dos conteúdos, títulos, imagens, links e elementos de navegação.
- Desenvolvemos as páginas previstas para a segunda etapa do cronograma: Projetos, Impacto, Acessibilidade, Galeria, Mídia, Notícias, Contato e Orçamento.
- Ao longo do desenvolvimento, verificamos se as páginas mantinham uma aparência coerente com o restante do site.

### Dificuldades e aprendizados
- Foi necessário prestar atenção à padronização dos elementos visuais, pois as páginas estavam sendo desenvolvidas por pessoas diferentes.
- A organização dos arquivos ajudou a separar as tarefas e reduzir alterações simultâneas nos mesmos documentos.
- Também percebemos que o menu e o rodapé precisavam funcionar de maneira consistente em todas as páginas.

## 5. Integração e revisão — 16/10 a 25/10/2026

### Atividades do grupo
- Reunimos as páginas desenvolvidas individualmente e verificamos a navegação entre elas.
- Revisamos os links do menu, o cabeçalho, o rodapé e a organização geral do conteúdo.
- Começamos a verificar a apresentação do site em diferentes tamanhos de tela.
- Realizamos uma revisão de acessibilidade e preparamos a etapa de validação com o W3C.
- O prazo previsto para validação e testes de acessibilidade foi **25/10/2026**.

### Dificuldades e soluções
- O menu tinha muitos links e alguns deles poderiam quebrar a organização em telas menores. A solução adotada foi reduzir os espaçamentos e permitir a rolagem horizontal em telas pequenas.
- Revisamos a hierarquia dos títulos para evitar saltos entre níveis, mantendo uma estrutura mais organizada.
- Conferimos o contraste das cores nos temas claro e escuro. Segundo a revisão registrada no projeto, os pares de cores ficaram acima da razão de contraste de 4,5:1.
- Corrigimos os botões do cabeçalho, acrescentando `type="button"` para evitar comportamentos inesperados em formulários.

## 6. Ajustes finais e documentação — 26/10 a 03/11/2026

### Atividades do grupo
- Fizemos uma nova revisão das páginas e dos recursos implementados.
- Conferimos os formulários e os campos de preenchimento.
- Organizamos os arquivos e as informações necessárias para a documentação do projeto.
- Preparamos a compactação dos arquivos em `.zip`, conforme a etapa prevista para **03/11/2026**.
- Revisamos o conteúdo da documentação dentro da pasta `docs`.

### Dificuldades e aprendizados
- Identificamos que o campo de e-mail aceitava alguns endereços incompletos com a validação padrão. Por isso, acrescentamos um `pattern` para exigir um domínio completo.
- Percebemos que as legendas do vídeo não carregavam quando o arquivo era aberto diretamente pelo navegador usando `file://`. Verificamos que funcionavam com o Live Server ou com o site publicado.
- Entendemos que a validação automática e os testes manuais são etapas importantes para encontrar problemas que não aparecem durante a criação das páginas.

## 7. Revisão da Entrega 01 — 04/11 a 07/11/2026

### Atividades do grupo
- Fizemos uma revisão geral do que foi desenvolvido e comparamos as páginas com os requisitos da entrega.
- Conferimos se as páginas previstas estavam presentes e se os arquivos estavam organizados.
- Revisamos os conteúdos, os links e os elementos compartilhados.
- Consultamos a documentação para verificar as orientações de uso e de substituição dos materiais provisórios.
- Identificamos os pontos que ainda precisavam de conferência antes do envio final.

### Decisões registradas na revisão
- Mantivemos as páginas exigidas pelo roteiro e ajustamos a estrutura do site para contemplar os itens solicitados.
- Organizamos o menu com 12 links em uma linha abaixo da marca. Em telas menores, o menu permite rolagem horizontal.
- Concentramos os nomes dos integrantes na página Contato, em vez de repeti-los no rodapé de todas as páginas.
- Mantivemos imagens, vídeo e áudio provisórios produzidos para o projeto, com orientações para substituí-los posteriormente.
- Na página Impacto, utilizamos informações acompanhadas de fontes, como UNEP, Embrapa e IBGE. Informações fictícias, como contatos e itens de doação, foram identificadas como fictícias.
- Incluímos a data da pesquisa no orçamento e um aviso de que os preços podem mudar.

## 8. Registro das decisões técnicas do projeto

- **HTML, CSS e JavaScript puros, sem frameworks:** escolha feita para manter o site leve e adequado ao conteúdo da disciplina.
- **Ícones em SVG:** utilizados por ocuparem pouco espaço e permitirem adaptação da cor ao tema.
- **Tema claro e escuro com memória:** o site considera a preferência do sistema operacional no primeiro acesso e mantém a escolha do usuário.
- **Ajuste do tamanho do texto:** foram previstos os botões A-, A e A+ para auxiliar pessoas com baixa visão.
- **Arquivos separados por página:** cada integrante ficou responsável pelos arquivos atribuídos, enquanto os elementos comuns foram organizados para reutilização.
- **Doação sem backend:** a lista de itens utiliza o `sessionStorage` do navegador para demonstrar o funcionamento do fluxo.

## 9. Modelo de registro individual

Cada integrante deve revisar e completar seu registro com base no que realmente fez durante o projeto.

### Henrique
- **Páginas atribuídas:** Início, Doar e receber e Reutilização.
- **O que eu fiz:** desenvolvi e revisei as páginas que ficaram sob minha responsabilidade, verificando a organização do conteúdo e a navegação.
- **Decisões que tomei e por quê:** procurei manter a estrutura e a identidade visual alinhadas às demais páginas do site.
- **O que aprendi:** aprendi a organizar os arquivos de uma página e a importância de integrar o trabalho individual ao restante do projeto.
- **Dificuldades e como resolvi:** revisei os elementos das minhas páginas e alinhei possíveis ajustes com o grupo.

### Julia
- **Páginas atribuídas:** Aprenda e Consumo.
- **O que eu fiz:** desenvolvi e revisei as páginas da seção Aprenda e a página Consumo, cuidando da organização dos conteúdos e dos respectivos arquivos.
- **Decisões que tomei e por quê:** busquei manter uma apresentação clara e consistente com a identidade visual do site.
- **O que aprendi:** aprendi a estruturar conteúdos em páginas diferentes e a importância de manter padrões visuais.
- **Dificuldades e como resolvi:** revisei a estrutura das páginas e conferi sua integração com o menu e os demais elementos compartilhados.

### Beatriz
- **Páginas atribuídas:** Alimentação e Casa.
- **O que eu fiz:** fiquei responsável pela criação e revisão das páginas Alimentação e Casa, incluindo os arquivos correspondentes à página Casa.
- **Decisões que tomei e por quê:** organizei os conteúdos para facilitar a leitura e procurei seguir o padrão visual definido pelo grupo.
- **O que aprendi:** aprendi a desenvolver páginas seguindo uma estrutura comum e a importância de separar os arquivos de estilo e comportamento.
- **Dificuldades e como resolvi:** conferi a apresentação das páginas e ajustei o que precisava para manter a consistência com o restante do site.

### Leticia
- **Páginas atribuídas:** Compras, Sobre nós, Projetos, Impacto e Acessibilidade.
- **O que eu fiz:** fiquei responsável pela criação e revisão das páginas atribuídas, organizando seus conteúdos e verificando sua relação com a proposta do projeto.
- **Decisões que tomei e por quê:** procurei deixar as informações organizadas e apresentar os conteúdos de forma clara para os visitantes.
- **O que aprendi:** aprendi a importância de apresentar informações de maneira acessível e de manter a padronização entre diferentes páginas.
- **Dificuldades e como resolvi:** revisei os conteúdos e a estrutura das páginas, observando se estavam de acordo com o padrão definido pela equipe.

### Vitoria
- **Páginas atribuídas:** Economia e Hábitos.
- **O que eu fiz:** desenvolvi e revisei as páginas Economia e Hábitos, cuidando da organização dos conteúdos e dos arquivos correspondentes.
- **Decisões que tomei e por quê:** busquei manter a leitura simples e a aparência alinhada às outras páginas.
- **O que aprendi:** aprendi a organizar informações em páginas web e a importância da revisão antes da integração.
- **Dificuldades e como resolvi:** conferi a estrutura e a navegação das páginas e alinhei os ajustes necessários com o grupo.

### Eduarda
- **Páginas atribuídas:** Galeria, Mídia, Notícias, Contato e Orçamento.
- **O que eu fiz:** fiquei responsável pelas páginas e pelos arquivos relacionados à galeria, mídia, notícias, contato e orçamento.
- **Decisões que tomei e por quê:** procurei organizar os materiais e as informações para facilitar o acesso dos visitantes.
- **O que aprendi:** aprendi a importância de organizar arquivos de mídia e de revisar formulários e informações de contato.
- **Dificuldades e como resolvi:** revisei os elementos das páginas e conferi sua integração com o restante do site.

## 10. Cronograma e divisão de tarefas

| Etapa | Prazo | Responsável |
|---|---|---|
| Definir tema, escopo e identidade visual | 21/09/2026 | Todos |
| Páginas-base, doação e temas do Aprenda | 28/09/2026 | Conforme a divisão de funções |
| Páginas exigidas (Projetos, Impacto, Acessibilidade, Galeria, Mídia, Notícias, Contato e Orçamento) | 15/10/2026 | Conforme a divisão de funções |
| Validação W3C e testes de acessibilidade | 25/10/2026 | Todos |
| Documentação em `/docs` e compactação do `.zip` | 03/11/2026 | Conforme a divisão de funções |
| Entrega no Blackboard | 09/11/2026 | Todos |

## 11. Considerações finais

Durante o desenvolvimento, o grupo dividiu as páginas entre os integrantes para conseguir trabalhar em diferentes partes do site ao mesmo tempo. Ao longo do processo, foi necessário manter a comunicação para integrar as páginas, padronizar o menu e o rodapé e revisar a acessibilidade.

A revisão também mostrou a importância de testar o site, corrigir detalhes de formulários e conferir a organização dos títulos e dos arquivos. Com a documentação e os ajustes finais, o grupo organizou o projeto para a entrega prevista no Blackboard em **09/11/2026**.
