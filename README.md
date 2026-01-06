01. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
```js
const arrayEsparso = [];
arrayEsparso[1] = 'feijão';
arrayEsparso[3] = 'arroz';
arrayEsparso[7] = 'carne';
console.log(arrayEsparso);
console.log(arrayEsparso.length);
```
02. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
```js
const valoresNumericos = [1,2,3,4,5];
console.log(valoresNumericos);

valoresNumericos[0] = 0;
console.log(valoresNumericos);
```
03. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
```js
const meuArray = [];
meuArray.push(2);
meuArray.push(3);
meuArray.push(5);
meuArray[0] = meuArray[0] * 2;
```
04. Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
```js
const array = [];
array.push(5);
array.push(2);
array.push(7);

console.log(array);
```
05. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
```js
const clinica = [];
clinica.push('cachorro');
clinica.push('gato');
clinica.push('papagaio');

console.log(clinica);

clinica.pop();
clinica.pop();
clinica.pop();

console.log(clinica);
```
06. Crie uma função que receba dois arrays e os concatene em um único array.
```js
const arrayStrings = ['feijao','arroz'];
const arrayNumeros = [1,2];

const concatenarArrays = (array1,array2) => array1.concat(array2);

console.log(concatenarArrays(arrayStrings, arrayNumeros));
```
07. Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
```js
const numeros = [1,2,3,4,5,6,7,8,9,10];
const parteNumeros = numeros.slice(3,7 + 1);
console.log(parteNumeros);
```
08. Dado o array frutas contendo frutas que desejamos comprar na feira, Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
```js
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2,2,'Kiwi','Pêssego');
console.log(frutas);
```
09. Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
```js
const menuPrincipal = ['Arroz','Feijão','Carne'];
const menuDeSobremesas = ['Bolo','Doce','Chocolate'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);
```
10. Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
```js
const matriz = []; //Matriz central.
let contador = 1; //Contador que povoará com números os arrays mais internos.

for (let i = 0; i <= 2; i++){
    matriz.push([]); //Elemento da matriz central.

    for(let j = 0; j <= 2;j++){
        matriz[i].push([]); //Elementos do elemento da matriz central.

        for(let k = 0; k <= 2; k++){
            matriz[i][j].push([]); //Elementos dos elementos do elemento da matriz central.

            for(let l = 0; l <= 2; l++){ //Povoamento dos elementos mais internos.
                matriz[i][j][k].push(contador);
                contador += 1;
            }
        }
    }
}
    //Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
console.log(matriz[1][2])

    //Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
    matriz[2][1].push(15);
```
11. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
```js
const arrayNumeros = [1,2,3,4,5];

for(const numeros of arrayNumeros){
    console.log(numeros);
}
```
12. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
```js
const arrayComidas = ['feijão','arroz','carne'];


const exibirDadosArray = (array) => {
    for(let i = 0; i < array.length; i++){
        console.log(`${i} - ${array[i]}`); 
    }
}
exibirDadosArray(arrayComidas);
```
13. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
```js
const arrayInteiros = [1,2,3,4,5];

const somarElementosArray = (array) => {
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

console.log(somarElementosArray(arrayInteiros));
```
14. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
```js
const arrayNumeros = [48,54,49,1,24,92,29,62,29,66,92,100,9,40,98,33,12,3,86,7];

const maiorMenorValor = (array) => {
    let menorValor = Infinity;
    let maiorValor = -Infinity;

    for(let i = 0; i < array.length; i++){
        if(array[i] < menorValor){
            menorValor = array[i];
        }else if(array[i] > maiorValor){
            maiorValor = array[i];
        }
    }

    return `O menor número é ${menorValor} e o maior é ${maiorValor}`;
}

console.log(maiorMenorValor(arrayNumeros));
```
15. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
```js
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }
}
```
16. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
```js
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let somaNumeros = 0;

for(let i = 0; i < numeros.length; i++){
    somaNumeros += numeros[i];
}

const media = somaNumeros / numeros.length;

console.log(media.toFixed(2));
```
17. Utilize o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Para isso lembre de usar uma função callback.
```js
const arrayNums = [1,2,3,4];

const numerosMultiplicados = arrayNums.map((numero) => numero * 10);

console.log(numerosMultiplicados);
```
18. Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
```js
const arrayNums = [1,2,3,4];

arrayNums.forEach((elemento, indice) => {
    console.log(`${indice} - ${elemento}`);
})
```
19.  Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
```js
const arrayNumeros = [1,2,3,4,5];

const executaOperacaoEmArray = (array,callbackFunction) => {
    array.forEach(callbackFunction);
}

function operacaoSoma(numero){
    return console.log(numero += 1);
}

executaOperacaoEmArray(arrayNumeros, operacaoSoma);
```
20. Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
```js
const numeros = [1,2,3,4,5];

const numeroAEncontrar = 1;

if(numeros.includes(numeroAEncontrar)){
    console.log(numeros.indexOf(numeroAEncontrar));
}else{
    console.log('-1');
}
```
21. Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
```js
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

const alunoProcurado = todasAsTurmas.find((nomeAluno) => nomeAluno === 'Ana Souza');

if(alunoProcurado){
    console.log(alunoProcurado);
}else{
    console.log("Aluno não encontrado!");
}
```
22. Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
```js
const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach((elemento) => console.log(elemento * 3));
const indiceBuscado = numeros.findIndex((elemento) => elemento === 18);

if(indiceBuscado !== -1){
    console.log(`Índice do número 18: ${indiceBuscado}`);
}else{
    console.log("Número não encontrado!");
}
```
23. Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
```js
const arrayNumeros = [1,2,3,4,5,5];
const arrayStrings = ['feijão','arroz','dalva','dalva'];

function juntarArrays(...parametros){
    let tratarArrays = [].concat(...parametros);
    tratarArrays = [...new Set(tratarArrays)];
    return tratarArrays
}

const arrayJuntados = juntarArrays(arrayNumeros, arrayStrings);

console.log(arrayJuntados);
```
24. Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
```js
const valores = [1,2,3,4,5];

const valoresSomados = valores.reduce((acum, valor) => acum + valor, 0);

console.log(valoresSomados);
```
25. Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
```js
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

let listasUnidas = [...coresLista1, ...coresLista2];

listasUnidas = [...new Set(listasUnidas)];

console.log(listasUnidas);
```
26. Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
```js
const arrayNumeros = [1,2,3,4,5,5,6,7,8,9,10];

function retornarValoresPares(array) {
    return array.filter((elemento) => elemento % 2 === 0);
}

const arrayValoresPares = retornarValoresPares(arrayNumeros);

console.log(arrayValoresPares);
```
27. Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
```js
const arrayNumeros = [1,2,3,4,5,5,6,7,8,9,10];

function filtrarNumeros (array) {
    return array.filter((elemento) => elemento % 3 === 0 && elemento > 5);
}

const numerosFiltrados = filtrarNumeros(arrayNumeros);

console.log(numerosFiltrados);
```
28. Crie uma função que receba um array de números e retorne a soma de todos os elementos.
```js
const arrayNumeros = [1,2,3,4,5,5,6,7,8,9,10];

function somarElementos (array){
    return array.reduce((acum, elemento) => acum + elemento,0);
}

const somaElementosArray = somarElementos(arrayNumeros);

console.log(somaElementosArray);
```

