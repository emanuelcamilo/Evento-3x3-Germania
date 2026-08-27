# PROJECT BRIEF — BWK 3x3

## Identidade visual
Usar a marca BASKET WORKING como identidade oficial. A paleta é obrigatória em todo o site: preto, branco e o turquesa/verde-água da marca (aprox. #00C8AD, preferindo o tom real extraído do asset). Podem ser usadas variações, transparências e gradientes derivados dessas cores, sem descaracterizar a identidade.

A logo BASKET WORKING substitui qualquer placeholder da FIBA. Pode ser adaptada para contraste, escala, recorte ou aplicação, sem descaracterizar a marca.

## Introdução existente
Preservar a introdução já criada: abertura fullscreen, estética esportiva/cinematográfica, animações suaves e CTA de entrada. Ao acionar o botão da introdução, revelar suavemente a landing page.

## Hero / sessão inicial
Após o clique na introdução, o visitante deve chegar ao Hero.

O Hero deve:
- ocupar inicialmente toda a viewport;
- ter presença visual grande e imersiva;
- ser responsivo;
- reagir suavemente ao scroll;
- conforme a página desce, transmitir a sensação de que o Hero está se recolhendo/encolhendo para revelar o restante do site;
- evitar cortes bruscos;
- manter boa performance e respeitar prefers-reduced-motion.

O Codex pode escolher a técnica mais adequada (sticky, transform/scale, clip-path, parallax leve ou equivalente), priorizando acabamento profissional.

## Menu / header após o Hero
Adicionar um menu/header integrado ao comportamento atual da introdução e do Hero.

O menu deve:
- permanecer totalmente oculto durante a introdução;
- continuar oculto enquanto o Hero estiver dominando a tela;
- aparecer de forma suave e progressiva conforme o Hero for rolado e se recolher;
- permanecer disponível durante a navegação pelo restante do conteúdo;
- usar a identidade esportiva e minimalista já existente, com preto, branco e turquesa/verde-água da marca;
- evitar mudanças bruscas de layout, sobreposição indevida de conteúdo ou competição visual com o Hero;
- incluir navegação para **Informações**, **Local**, **Premiações**, **Parceiros** e **Sobre**;
- incluir um CTA de **Inscrição**, preparado para receber o destino real posteriormente, sem inventar URL, telefone ou contato;
- levar cada item à seção correspondente com navegação clara e, quando apropriado, rolagem suave;
- indicar estados de interação e foco de maneira coerente com o design atual.

No mobile, usar uma solução compacta e responsiva, como botão de menu com painel acessível ou equivalente. A navegação deve funcionar por teclado, apresentar nomes acessíveis para controles, manter contraste adequado e permitir fechamento previsível. Respeitar `prefers-reduced-motion` também nas transições do header e do menu mobile.

A implementação pode aproveitar o estado de scroll já calculado em `intro.js`, desde que permaneça simples, performática e sem duplicar listeners ou criar animações conflitantes.

### Background do Hero
Somente o Hero deve ter como fundo principal o turquesa/verde-água da marca. Por enquanto, deixar esse background relativamente limpo, sem elementos gráficos complexos. O restante do site continua com a estética escura já existente.

### Conteúdo do Hero
Manter a logo BASKET WORKING em grande destaque e adicionar:

**BWK 3x3**  
**1ª EDIÇÃO**

Usar escala e tipografia de título principal de landing page.

Logo abaixo, usar provisoriamente a frase:

**A nova cena do basquete gaúcho começa na quadra.**

Essa frase é provisória e poderá ser alterada depois.

Hierarquia:
1. Logo BASKET WORKING
2. BWK 3x3 + 1ª EDIÇÃO
3. Frase de impacto

## Informações do Evento
Na seção de informações, inserir:

**Muito mais que um torneio. O ponto de encontro do basquete gaúcho para quem joga e faz acontecer.**

**Data:** 27 de Setembro

**Formato:** Torneio de Basquete 3x3

Adicionar CTA:

**INSCREVER MEU TIME**

O botão será conectado futuramente a um WhatsApp. Nesta etapa, não inventar número, URL ou contato. Apenas criar o botão e seus estados visuais e deixar a implementação preparada para receber o link.

## Local do Evento
Na seção de local, inserir:

**Quadra do Parque Germânia (Porto Alegre - RS)**

Não inventar endereço adicional, mapa, coordenadas, horários ou outras informações.

## Premiações
Manter a seção existente com estrutura visual ampla e profissional, mas não inventar valores, colocações ou prêmios.

## Parceiros
Manter a seção existente preparada para receber logos e informações reais posteriormente. Não inventar parceiros.

## Sobre o Evento
Criar uma nova seção **Sobre o Evento**, posicionada como a última seção do conteúdo atual.

Inserir integralmente:

> O BWK 3x3 nasceu para elevar o padrão do basquete amador em Porto Alegre. Mais do que um torneio, somos o ponto de encontro onde a intensidade do esporte se mistura com entretenimento de ponta. Reunimos atletas, marcas de peso e uma estrutura premium no Parque Germânia para criar uma experiência única de competição, música e networking. Monte seu time e faça parte da nova cena do basquete gaúcho.

A seção deve ter bastante respiro, excelente legibilidade, responsividade e integração visual com o restante do site.

## Rodapé
Adicionar um rodapé profissional ao fim do site, depois da seção **Sobre o Evento**, sem criar uma nova direção visual.

O rodapé deve:
- seguir a mesma identidade esportiva, minimalista e escura do restante da página;
- conter a marca **BWK / BASKET WORKING** com aplicação coerente da logo existente;
- repetir links úteis para **Informações**, **Local**, **Premiações**, **Parceiros** e **Sobre**;
- incluir um CTA de **Inscrição**, preparado para receber o destino real posteriormente;
- reservar uma área identificada para **Instagram** e **WhatsApp**, sem inventar usuários, números, URLs ou destinos; enquanto os dados reais não existirem, não criar links falsos nem usar `#` como se fosse um contato válido;
- incluir uma linha discreta de copyright/edição, estruturada como placeholder claramente identificável, sem inventar ano, titular, razão social ou número da edição;
- ter hierarquia clara, bom espaçamento, contraste adequado, estados de foco visíveis e organização responsiva no mobile.

O rodapé deve encerrar visualmente a experiência existente, e não parecer um componente genérico ou separado do design da landing page.

## Background e experiência de scroll
Manter o conceito previamente definido de background/experiência visual adaptável durante a rolagem. O movimento deve dar profundidade e continuidade à página sem prejudicar leitura ou performance.

## Ordem atual
1. Introdução existente
2. Hero turquesa fullscreen
3. Informações do Evento
4. Local do Evento
5. Premiações
6. Parceiros
7. Sobre o Evento
8. Rodapé

O menu/header não constitui uma nova seção: ele surge conforme o Hero se recolhe e acompanha a navegação pelo conteúdo.

## Restrições
- Não inventar informações além da frase provisória explicitamente autorizada para o Hero.
- Não inventar premiações.
- Não inventar parceiros.
- Não inventar WhatsApp.
- Não inventar endereço ou horários.
- Preservar a identidade BASKET WORKING.
- Manter a paleta oficial.
- Somente o Hero recebe o background turquesa em destaque nesta etapa.
- Preservar a introdução já aprovada.
- Não exibir o menu durante a introdução nem enquanto o Hero dominar a viewport.
- Não inventar links, contatos, URLs, dados de copyright ou número da edição no rodapé.
- Não redesenhar a landing page nem alterar sua linguagem visual global; header e rodapé devem ser extensões do design atual observado em `index.html`, `styles.css` e `intro.js`.
- Reaproveitar a estrutura e os estilos existentes sempre que isso reduzir o tempo de implementação sem comprometer qualidade ou manutenção.
- Priorizar responsividade, acessibilidade, performance e acabamento profissional.
- Priorizar implementação rápida, transições suaves e comportamento estável em desktop e mobile.
