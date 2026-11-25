---
title: Reconstruindo meu site com Astro
description: Por que migrei meu site pessoal do Next.js 12 para Astro e Tailwind, e o que aprendi no caminho.
pubDate: 2026-11-24
tags: [astro, tailwind, seo, i18n]
translationKey: rebuilding-with-astro
draft: false
---

Construí meu site antigo em 2022 com Next.js 12, Ant Design e styled-components. Ele funcionava, e por um tempo fiquei satisfeito. Mas toda vez que abria o projeto eu sentia a mesma coisa. Muito código para uma página que é basicamente texto, um layout com cara de antigo e conteúdo espalhado em componentes React que eu precisava editar na mão.

Então decidi recomeçar em vez de ficar remendando.

## O que estava errado na versão antiga

O maior problema era o jeito de lidar com idiomas. O site tinha uma única URL e o idioma ficava salvo no `localStorage`. Uma pequena função `translate` procurava cada frase em inglês num dicionário enorme e trocava pela versão em português direto no navegador. Na época achei a solução divertida, mas os buscadores só enxergavam a versão em inglês e não havia como compartilhar um link da página em português.

Além disso, o site carregava uma biblioteca de componentes, um runtime de CSS-in-JS e algumas bibliotecas de animação só para mostrar um perfil, uma linha do tempo e alguns projetos. O design ainda dependia de um menu lateral e de uma tela de introdução que pareciam muito 2020.

## O que eu queria da nova versão

Antes de escrever qualquer código, fiz uma lista curta.

- Ser HTML estático em primeiro lugar, rápido e fácil de ler para os buscadores.
- Inglês e português, cada um com sua própria URL.
- Ter um blog de fácil atualização.
- Facilidade em atualizar a lista de projetos.
- O botão de tema e o download do currículo nos dois idiomas tinham que continuar.

## Por que Astro

Cheguei a pensar em ir para a versão mais nova do Next.js, mas este site é conteúdo, não uma aplicação. O Astro gera tudo como HTML no build e só envia JavaScript quando um componente realmente precisa. Aqui isso se resume a alguns scripts minúsculos para o botão de tema, o menu do currículo e o fechamento dos diálogos. Todo o resto é HTML e CSS puros.

O Astro também já vem com rotas de i18n e content collections, o que resolveu dois dos meus requisitos sem bibliotecas extras.

## Como os idiomas funcionam agora

O inglês fica na raiz e o português fica em `/pt/`. Cada página avisa os buscadores sobre sua tradução com tags `hreflang`, e o seletor de idioma no topo leva para a mesma página no outro idioma. Os posts do blog são ligados por uma chave em comum no frontmatter, então se o post existe nos dois idiomas o seletor vai direto para a tradução. Se não existir, ele leva para a lista de posts.

Todos os textos da interface ficam num único arquivo, com os dois idiomas lado a lado, o que deixa difícil esquecer uma tradução.

## Conteúdo como arquivos

Projetos e posts agora são content collections. Cada uma tem um schema validado com Zod, então se eu esquecer um campo obrigatório ou digitar uma URL quebrada o build falha e mostra exatamente o que está faltando. Um post é um arquivo Markdown dentro de `en` ou `pt`, e a pasta define o idioma. Os rascunhos aparecem enquanto escrevo localmente e ficam de fora do build de produção.

Os projetos seguem a mesma ideia. Um arquivo Markdown por projeto, com um resumo em cada idioma, a stack e links opcionais para o site, o código, um vídeo de demonstração ou um documento para download. Foi assim que minha dissertação de mestrado foi parar no card do CAPE-KIDS.

## Estilização com Tailwind

Comecei com CSS puro e depois migrei tudo para o Tailwind v4. As cores são definidas uma única vez como variáveis CSS para os modos claro e escuro, e o Tailwind as expõe como utilitários comuns. Assim uma classe como `bg-surface` ou `text-fg-muted` funciona nos dois temas sem esforço.

A troca também corrigiu um bug que eu não tinha percebido de início. O botão de tema mostrava o sol e a lua ao mesmo tempo. O Astro aplica escopo aos estilos de cada componente, e a regra que escondia um dos ícones nunca chegava ao SVG, porque o ícone era renderizado por outro componente. Com o Tailwind as classes são globais, então um simples `dark:hidden` no ícone resolve.

## Modo escuro sem piscar

O tema é definido por um pequeno script inline no head, que roda antes da página ser pintada. Ele lê a escolha salva ou usa a preferência do sistema. Assim a página nunca pisca em branco antes de ficar escura. Ao clicar no botão, a troca é animada com a View Transitions API nos navegadores que suportam.

## Pequenos detalhes que curti fazer

- As seções aparecem conforme você rola a página usando animações guiadas por scroll em CSS, sem nenhum JavaScript.
- O menu do currículo é um elemento `details` nativo, então funciona antes mesmo de qualquer script carregar.
- As imagens passam pelo pipeline de imagens do Astro e são servidas em WebP no tamanho certo.
- A navegação entre páginas usa view transitions entre documentos, o que deixa tudo mais suave sem transformar o site numa single page app.

## O básico de SEO, bem feito

Toda página agora tem URL canônica, tags de Open Graph e Twitter e dados estruturados. A página inicial me descreve como Person e os posts são marcados como BlogPosting. O build também gera sitemap, arquivo robots e um feed RSS para cada idioma.

## Hora de limpar

O último passo foi decidir o que remover. A tela de introdução, o menu lateral, a página antiga de projetos e a aba de hobbies se foram. Também tirei os projetos de iniciante que eu carregava desde 2020. Eles foram importantes para aprender, mas já não representam o tipo de trabalho que faço hoje. Ficaram os projetos dos quais tenho orgulho agora, como minha dissertação de mestrado e o ArckDoc.

## Próximos passos

Agora que escrever ficou tão fácil quanto criar um arquivo, quero usar este espaço para compartilhar notas sobre arquitetura front-end, coisas que aprendo construindo o ArckDoc e o que mais valer a pena registrar.

Obrigado pela leitura.
