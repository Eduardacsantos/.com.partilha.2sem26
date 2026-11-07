# Orçamento de hospedagem e domínio

Pesquisa feita em **04/11/2026** e conferida de novo em **07/11/2026** (Vercel e Railway). Os preços vêm dos sites dos provedores, de sites de comparação e do Registro.br e mudam com frequência: **confirmem no site oficial de cada empresa antes de contratar.** A versão para o site está em `orcamento_hospedagem.html`.

**Situação atual:** o ComPartilha já está no ar na **Vercel**, com o endereço gratuito `https://compartilha2sem2678.vercel.app/`. **Custo total até agora: R$ 0,00.**

## Hospedagens

| Provedor | Preço de entrada | Depois do período grátis ou na renovação | Servidores no Brasil | SSL (HTTPS) | Destaques |
|---|---|---|---|---|---|
| **Vercel (em uso)** | R$ 0 (plano Hobby) | R$ 0; plano Pro: US$ 20 por usuário por mês | Não conferimos (CDN global) | Grátis | Publica sozinha a cada envio ao GitHub. Grátis só para uso não comercial |
| Railway | US$ 0 (teste de US$ 5, até 30 dias) | US$ 1 de crédito grátis por mês; Hobby: US$ 5 por mês | Não (US East na aula) | Grátis | Usado nas aulas. Aceita banco de dados; o crédito grátis é pequeno |
| Locaweb | R$ 7,90 por mês | R$ 7,90 por mês | Sim | Grátis | Empresa nacional, preço previsível, suporte em português |

## Domínios

| Domínio | Onde registrar | Preço por ano | Exigência | Observação |
|---|---|---|---|---|
| **compartilha2sem2678.vercel.app (em uso)** | Vercel (já incluído) | R$ 0,00 | Conta gratuita na Vercel | Já está no ar. Subdomínio da Vercel, mais longo e sem identidade própria |
| compartilha.com.br | Registro.br | R$ 40,00 | CPF ou CNPJ | Valor fixo desde 2017. Opção para o futuro |
| compartilha.com | Registradores internacionais | R$ 50 a R$ 100 (varia com o dólar) | Nenhuma | Renovação costuma ser mais cara |

A disponibilidade do nome "compartilha" ainda precisa ser conferida.

## Custo estimado em 12 meses

| Combinação | 1º ano | 2º ano |
|---|---|---|
| **Vercel + endereço .vercel.app (escolhida e já no ar)** | **R$ 0,00** | **R$ 0,00** |
| Vercel + compartilha.com.br (se comprarmos o domínio) | R$ 40,00 | R$ 40,00 |
| Railway + endereço .up.railway.app | US$ 0 (teste e plano grátis) | US$ 0 a US$ 60 (plano Hobby: US$ 5 × 12) |
| Locaweb + compartilha.com.br | R$ 134,80 | R$ 134,80 |

Cálculo da Locaweb: R$ 7,90 × 12 + R$ 40,00 do domínio. Os valores do Railway estão em dólar, como no site do provedor.

## Justificativa

Publicamos o ComPartilha na **Vercel, com o endereço gratuito `compartilha2sem2678.vercel.app`**, por: (1) **custo zero**: o plano Hobby é gratuito e não tem prazo, ao contrário do crédito de teste do Railway, que acaba; (2) **publicação automática**: a Vercel liga ao repositório do GitHub e republica o site a cada alteração enviada; (3) **HTTPS incluído**, sem custo e sem configuração; (4) **adequada ao nosso site**, que é estático (HTML, CSS e JavaScript) e não precisa de banco de dados nem de servidor próprio.

**Limites que aceitamos:** o plano gratuito da Vercel é só para uso pessoal e não comercial, e o projeto é pausado se passar dos limites de uso (cerca de 100 GB de tráfego por mês). Isso serve para um trabalho acadêmico. Se o ComPartilha virasse um serviço real, o caminho seria um plano pago ou uma hospedagem nacional como a Locaweb (R$ 134,80 no primeiro ano, com o domínio .com.br), que tem preço previsível e suporte em português.

**Domínio próprio:** não compramos domínio. Se quisermos um endereço mais curto, o compartilha.com.br custa R$ 40,00 por ano no Registro.br.

**Sustentabilidade:** não confirmamos se Vercel, Railway ou Locaweb usam energia 100% renovável. Perguntar ao provedor é o próximo passo. O maior ganho ambiental vem do site leve (sem frameworks, imagens pesadas ou rastreadores).

**Outra alternativa gratuita:** como o site é estático, também poderia ser publicado no GitHub Pages sem custo.

## Fontes

- Vercel: documentação do plano Hobby (vercel.com/docs/plans/hobby, atualizada em 14/09/2026) e guias de preços de 2026 (Modelence, Kuberns, DeployWise), consultados em 07/11/2026.
- Railway: Railway Docs, pricing (docs.railway.com/pricing), conforme os slides da aula "Do repositório ao site no ar" (consulta de outubro de 2026).
- NIC.br via Teletime (14/10/2026): domínio .br custa R$ 40 por ano.
- Guia Ferramentas Digitais, Locaweb Review (março/2026): Locaweb R$ 7,90.
- TecMundo e Guia Ferramentas Digitais: faixas de preço de .com.
