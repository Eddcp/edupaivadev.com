---
layout: blog
title: "Javascript Tips: Hoisting, Escopo de variáveis, Herança e Cadeia de
  Protótipos"
date: 2022-05-04 02:35:13
thumbnail: https://images.unsplash.com/photo-1542407931-2fe6d5b417d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
tags:
  - javascript
  - tecnologia
  - desenvolvimento profissional
categories:
  - quebre o código
---
- - -

Nesse post darei algumas dicas introdutórias à linguagem Javascript, que provavelmente ajudarão os iniciantes na linguagem a entenderem algum dos seus conceitos.

JavaScript é uma linguagem de programação que possui algumas particularidades (bem estranhas por sinal), acredito que isso se dá pelo fato de seu criador Brendan Eich, ter levado apenas 10 dias para desenvolvê-la.

Quando estava aprendendo a linguagem, um dos conceitos que me causou estranheza foi o ***hoisting***

### **Hoisting**

As variáveis declaradas com **var** podem ser acessadas antes mesmo de serem de fato declaradas (é, não me pergunte o por que), isso também acontece com funções, o que pode ser bastante útil pois conseguimos chamar uma função antes mesmo de sua declaração, sem a necessidade da criação de protótipos de funções (comumente presentes nas linguagens C/C++). Talvez quando Brendan Eich decidiu criar a linguagem foi uma decisão interessante, mas que abriu a possibilidade pra bastante confusão no código. Segue um exemplo:

```js
person = 'Jon Snow';

var person;

console.log(person);
```

Nesse trecho acima nenhum erro ocorre, estranho não? Se você trabalha com outras linguagens como C ou Java, sabe que tentar acessar uma variável antes de sua declaração irá disparar um erro. Já no JavaScript, todas declarações são **“*hoisted*”** (içadas para o início do código)

No código abaixo qual o valor será printado?

```js
console.log(person);
var person = 'Jon Snow';
```

A resposta correta é undefined, afinal apenas as declarações são ***hoisted*** e não suas atribuições.

- - -

### **Escopo de Variáveis**

Antes do lançamento do ES6, a única maneira de declararmos variáveis no JavaScript era com a palavra reservada **var**. Variáveis declaradas com **var** possuem escopo de função, isto é, quando são declaradas dentro de uma função não podem ser acessadas fora dela, porém quando são declaradas dentro de um bloco podem ser acessadas fora deste, pegue o código abaixo como exemplo:

Qual o retorno do ***console.log(i)***? Se você respondeu 3, está correto. Afinal, a variável *i* foi declarada dentro do bloco do *for*, mas como não possui escopo de bloco ela pode ser acessada fora dele. Antigamente para criarmos um escopo de bloco para nossas variáveis era necessário utilizar as IIFE (*[Immediately Invoked Function Expression](https://developer.mozilla.org/pt-BR/docs/Glossario/IIFE)*). No código abaixo, não temos acesso a variável que foi definida dentro da IIFE.

IIFE: A maneira antiga de encapsularmos nossas variáveis

O ES6 introduziu duas novas maneiras de declarar variáveis **let** e **const**. Ambas possuem escopo de bloco. Pegue o código anterior, porém vamos substituir a palavra reservada **var** por **let**

![](https://cdn-images-1.medium.com/max/800/1*XVN7Lf5Ia0SYgECMa1fZ0A.png)

Como let possui escopo de bloco não poderá ser acessada fora do bloco em que ela foi definida. Já a declaração usando const também possui escopo de bloco, porém com algumas diferenças em relação ao let: Toda declaração usando const deve obrigatoriamente ser inicializada e uma vez atribuído um valor a essa variável ele não pode mudar, isso não significa que um objeto atribuído a uma variável usando const seja imutável, o que não é permitido é atribuir um objeto totalmente diferente a uma variável previamente declarada.

![](https://cdn-images-1.medium.com/max/800/1*sXECep4u9j-dUBBsaVfUoQ.png)

Nova atribuição para uma variável const é proibida, porém é possível alterar o objeto já existente

Então as variáveis declaradas utilizando let e const não são ***hoisted***?

Todas declarações (function, var, let, const e class) são hoisted no JavaScript, enquanto declarações utilizando var são inicializadas com **undefined**, as variáveis declaradas com let e const só são inicializadas na linha que a declaração ocorre de fato, antes disso elas permanecem na “*Temporal Dead Zone*”, um tempo entre a criação e sua inicialização onde a variável não pode ser acessada.

Qual dessas declarações devo usar? Uma boa prática é usar o `const` ao invés do let para declarar as variáveis e funções do seu sistema, pois gera uma previsibilidade da sua aplicação, afinal não pode haver uma reatribuição de seus valores. Há poucos usos para o let, que é o caso dos loops, afinal a cada iteração a variável recebe um novo valor. Ainda sim os loops podem ser substituídos pelas alternativas funcionais: **map**, **filter**, **reduce**. Como o ES6 provê essas novas funcionalidades prefira elas ao uso do var.

- - -

### **Herança e Cadeia de protótipos**

Um dos grandes conceitos da Orientação a Objetos é a herança. Herança é a capacidade de um objeto herdar as propriedades de outro, basicamente é o relacionamento chamado de “é um”. Um cachorro **é um** animal, se criássemos a classe Animal, a classe Cachorro herdaria as propriedades de animal.

A herança no JavaScript é baseada na cadeia de protótipos. Cada objeto possui seu prototype. Vamos para um exemplo:

**Animal** é a classe pai, **Dog** e **Lion** são as classes que herdam as propriedades de Animal. Todo objeto herda as propriedades de **Object**, dessa forma como a herança no JavaScript é baseada na cadeia de protótipos, **Animal** aponta para o prototype de **Object**, **Dog** e **Lion** apontam para o prototype de **Animal**. Assim se temos uma instância de **Dog** e tentamos acessar uma propriedade dentro desse objeto, primeiro ele procura nas propriedades de **Dog**, depois nas propriedades de **Animal** e finalmente nas propriedades de **Object**, essa é a “*Prototype* *Chain*” (Cadeia de protótipos). Conforme pode ser visto na imagem abaixo:

![](https://cdn-images-1.medium.com/max/800/1*hTFbQV1EGK1o0eycwG0NMQ.png)

Herança por cadeia de protótipos, utilizando ES5

Com a chegada do **ES6** — por mais que por trás dos panos a herança ainda seja baseada na cadeia de protótipos — temos um açúcar sintático que nos leva algo mais próximo da herança vista no Java, conforme a código abaixo:

O texto ficou um pouco extenso, mas acredito que esses sejam alguns dos pilares da linguagem JavaScript e é muito necessário você entendê-los, pois são alguns conceitos que diferem o JavaScript das demais linguagens. Fico muito agradecido se você leu até aqui, qualquer dúvida ou correção sobre alguma informação que passei aqui, sinta-se à vontade para comentar. Espero que esse texto tenha te ajudado de alguma forma :)

Referências:

* <https://www.vojtechruzicka.com/javascript-hoisting-var-let-const-variables/>
* <https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e>