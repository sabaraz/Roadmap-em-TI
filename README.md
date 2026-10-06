https://sabaraz.github.io/Roadmap-em-TI/

# Gênese dos Sistemas — Carreiras Profissionais

Mapa estelar interativo que liga a grade do Bacharelado em Sistemas de Informação às carreiras que ela prepara. Quem nunca leu o projeto pedagógico do curso consegue navegar de uma visão geral até uma disciplina específica e entender por que ela importa para cada profissão.

Feito com HTML, CSS e JavaScript puros (SVG nativo, sem bibliotecas), a partir do projeto pedagógico do curso e de fontes públicas sobre profissões. Abre direto pelo navegador, inclusive localmente.

## Estrutura

| Arquivo | Papel |
|---|---|
| `index.html` | Esqueleto da página: cabeçalho, barra de busca e filtros, legenda, cartão lateral, rodapé. |
| `style.css` | Aparência, animações do efeito de luz, responsividade e regras de movimento reduzido. |
| `mapa.js` | Toda a lógica: modelo, layout, desenho SVG, cartão de informações e controle de navegação. |
| `ppc-data.js` | Dados do curso e das carreiras (eixos, agrupamentos, disciplinas, profissões, fontes). Arquivo gerado; não é editado à mão. |

## Como navegar

A bolha central abre os seis eixos; cada eixo abre seus agrupamentos; cada agrupamento abre disciplinas (círculos) e carreiras (estrelas de quatro pontas). Clicar de novo num nó pai recolhe tudo o que veio dele; clicar na bolha central equivale ao botão Início. Disciplinas cheias são obrigatórias, vazadas são optativas e as com anel tracejado vêm de outra área. Ao selecionar uma carreira, o caminho que leva até ela é destacado.

## As três versões

### Versão 1 — o mapa funcional

**Razão:** entregar um caminho navegável e confiável, do curso inteiro até o detalhe de cada disciplina e carreira, antes de pensar em acabamento.

- Hierarquia curso → eixos → agrupamentos → disciplinas e carreiras, com layout radial determinístico (o mesmo mapa a cada abertura).
- Cartão lateral com descrição, o que a profissão faz, disciplinas relacionadas com o trecho oficial do conteúdo e fontes.
- Busca, filtros, legenda, linha do tempo por período e destaque do caminho de uma carreira.
- Indicação de disciplinas de outros cursos relacionadas (equivalentes) e de disciplinas que vêm de outra área.
- Câmera com arrastar, pinça e roda do mouse; funciona em celular e computador.

### Versão 2 — identidade visual e clareza

**Razão:** o primeiro mapa funcionava, mas as cores eram pastéis demais para distinguir áreas, os textos citavam o documento do curso como se o leitor o conhecesse e alguns nós não acrescentavam informação.

- Título "Gênese dos Sistemas — Carreiras Profissionais" e ícone de bola de cristal na aba; rótulos dos eixos sem a palavra "Formação"; bolha central "Jornada Sistemas de Informação", preta com borda e texto em verde-água.
- Nova paleta: seis famílias de cor, uma por eixo, com tons claros e escuros dentro de cada família para que agrupamentos e disciplinas sejam distinguíveis entre si e das demais áreas.
- Fios com gradiente da cor do pai para a do filho.
- Bolhas em forma de flor (agrupamentos em formato de engrenagem floral), com efeito de luz pulsante e ícone do eixo visíveis apenas no nó selecionado.
- Fundo astrológico com anel zodiacal, nebulosas e três camadas de estrelas em movimento paralaxe lento.
- Nós sem utilidade removidos; os quatro resultados sem relação direta com o mapa viraram estrelas solitárias decorativas, sem fio nem clique.
- Segurar os botões de zoom aproxima ou afasta continuamente; legenda fecha ao clicar fora e o botão "?" some enquanto o cartão está aberto.
- Textos reescritos para quem não leu o documento do curso; fontes das profissões mantidas e ampliadas com referências externas.
- Rodapé reformulado com autoria e tecnologia usada.

### Versão 3 — fechamento

**Razão:** concluir o projeto com uma navegação reversível, rodapé adequado a telas pequenas, visual mais limpo e linguagem totalmente autoexplicativa.

- Recolher ramificações: clicar em nó pai (central, eixo ou agrupamento) retrai seus descendentes; a bolha central reproduz o Início.
- Rodapé com "Gustavo Sabará · 2026"; em telas curtas aparece só essa assinatura.
- Ponto de cor contrastante removido do interior da bolha de agrupamento, que agora tem preenchimento uniforme.
- Vocabulário revisado: "Principal/Apoio" foram trocados por **Base** (o conteúdo da disciplina é o fundamento da carreira) e **Complementa** (ajuda, mas não é o centro dela). Rótulos de status ficaram como "Profissão indicada pelo curso", "Variação de uma profissão indicada pelo curso" e "Deduzida do conteúdo das disciplinas". Nenhum texto exige conhecer o documento original.

## Onde, como, custo e impacto

Custo é a complexidade de implementação (baixa, média ou alta); impacto é o efeito percebido por quem usa o mapa.

| Recurso | Onde | Como | Custo | Impacto |
|---|---|---|---|---|
| Modelo de dados | `mapa.js`, classe `CourseMap`; dados em `ppc-data.js` | Lê o objeto global `PPC_DATA` e indexa eixos, agrupamentos, disciplinas e carreiras em mapas de consulta. | Média | Alto: base de tudo; dados separados da lógica. |
| Layout radial determinístico | `mapa.js`, classe `RadialLayout` | Posiciona eixos em fatias com folga, agrupamentos por ordem e disciplinas/carreiras em dois arcos opostos; sem aleatoriedade, então o mapa é sempre igual. | Alta | Alto: legibilidade e previsibilidade. |
| Desenho em SVG | `mapa.js`, classe `MapRenderer` | Cria nós, fios e rótulos com `createElementNS`; reconstrói só o que está aberto. | Média | Alto: nitidez em qualquer zoom, sem dependências. |
| Cartão de detalhes | `mapa.js`, classe `InfoCard`; `style.css` | Monta o conteúdo por tipo de nó (curso, eixo, agrupamento, disciplina, carreira) com listas clicáveis que levam a outros nós. | Média | Alto: é onde o leitor entende a relação disciplina–carreira. |
| Navegação e recolher | `mapa.js`, classe `MapController` (`cliqueRaiz`, `abrirEixo`, `abrirGrupo`, `inicio`) | Estado com raiz, eixos abertos, agrupamento e seleção; clicar no nó já aberto desfaz a abertura e reenquadra a câmera. | Média | Alto: navegação reversível e previsível. |
| Câmera | `mapa.js`, `MapController` (`zoomEm`, `enquadrar`) | Transformação {x, y, escala} com animação suave; arrastar, pinça, roda do mouse e botões; segurar +/− usa laço de `requestAnimationFrame` após 250 ms. | Média | Alto: uso confortável em toque e mouse. |
| Paleta por eixo | `mapa.js`, funções `tom`, `hslHex`, `contraste` | Seis famílias de cor; luminosidade varia de claro a escuro com contraste mínimo de 4,2:1 sobre o fundo; agrupamentos e disciplinas herdam variações da cor do eixo. | Média | Alto: áreas distinguíveis num relance. |
| Bolhas em flor | `mapa.js`, função `flor` | Contorno polar com pétalas (12 na raiz, 10 nos eixos, 8 nos agrupamentos) amostrado em polígono; usado também como recorte do efeito de luz. | Média | Médio: identidade visual forte. |
| Efeito de luz e ícones | `style.css` (`.luz`, `.pulso`, `.faixa`); ícones em `mapa.js` | Pulso e faixa de gradiente animados dentro da bolha, só quando selecionada; ícone do eixo visível apenas nesse estado. | Média | Médio: feedback claro de seleção. |
| Fundo astrológico | `mapa.js` (fundo) e `style.css` | Nebulosas em gradiente, anel zodiacal e três camadas de estrelas geradas por semente fixa, com paralaxe discreta do movimento da câmera. | Média | Médio: atmosfera sem custo de desempenho relevante. |
| Destaque de trilha | `mapa.js` e `style.css` | Ao selecionar uma carreira, fios do caminho ficam mais grossos e com brilho; os demais esmaecem. | Baixa | Alto: mostra por onde se chega a cada profissão. |
| Busca, filtros e legenda | `index.html`, `mapa.js` | Busca por texto em todos os nós com abertura automática do caminho; filtros por tipo; legenda que fecha ao clicar fora. | Média | Alto: acesso direto sem percorrer o mapa. |
| Responsividade | `style.css` (`@media`) | Dimensões proporcionais, regras para telas estreitas e baixas; rodapé curto em telas de pouca altura. | Baixa | Alto: funciona em celular. |
| Acessibilidade e movimento | `style.css`, `mapa.js` | Rótulos ARIA nos nós, foco por teclado e `prefers-reduced-motion` desativando animações. | Baixa | Médio |
| Geração dos dados | Scripts de apoio fora da entrega | Cruzam o texto do curso com a pesquisa de profissões e geram `ppc-data.js`; um validador confere a consistência (74 verificações). | Alta | Alto: dados rastreáveis e sem edição manual. |

## Fontes

Textos sobre as profissões foram parafraseados de fontes públicas; a relação entre carreiras e disciplinas vem do conteúdo oficial das disciplinas. Páginas iniciais das fontes consultadas:

- https://roadmap.sh
- https://www.bls.gov
- https://www.ibm.com
- https://www.techtarget.com
- https://ixdf.org
- https://developer.android.com
- https://lncc.br
- https://www-di.inf.puc-rio.br
- https://goias.gov.br
- https://www.vriconsulting.com.br
- https://buscadorncm.com.br

## Autoria

Gustavo Sabará · 2026
