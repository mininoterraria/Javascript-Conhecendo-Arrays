//AVISO: ELIMINAR A CADEIA DE COMENTÁRIO DE CADA QUESTÃO SE QUISER RODAR CADA CÓDIGO.

//01. Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

/*
const arrayNumeros = [1,2,3,4,5,5];
const arrayStrings = ['feijão','arroz','dalva','dalva'];

function juntarArrays(...parametros){
    let tratarArrays = [].concat(...parametros);
    tratarArrays = [...new Set(tratarArrays)];
    return tratarArrays
}

const arrayJuntados = juntarArrays(arrayNumeros, arrayStrings);

console.log(arrayJuntados);

*/



//02. Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

/*
const valores = [1,2,3,4,5];

const valoresSomados = valores.reduce((acum, valor) => acum + valor, 0);

console.log(valoresSomados);
*/

//03. Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

/*
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

let listasUnidas = [...coresLista1, ...coresLista2];

listasUnidas = [...new Set(listasUnidas)];

console.log(listasUnidas);

*/

//04. Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

/*
const arrayNumeros = [1,2,3,4,5,5,6,7,8,9,10];

function retornarValoresPares(array) {
    return array.filter((elemento) => elemento % 2 === 0);
}

const arrayValoresPares = retornarValoresPares(arrayNumeros);

console.log(arrayValoresPares);
*/


//05. Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

/*
const arrayNumeros = [1,2,3,4,5,5,6,7,8,9,10];

function filtrarNumeros (array) {
    return array.filter((elemento) => elemento % 3 === 0 && elemento > 5);
}

const numerosFiltrados = filtrarNumeros(arrayNumeros);

console.log(numerosFiltrados);
*/

//06. Crie uma função que receba um array de números e retorne a soma de todos os elementos.

/*
const arrayNumeros = [1,2,3,4,5,5,6,7,8,9,10];

function somarElementos (array){
    return array.reduce((acum, elemento) => acum + elemento,0);
}

const somaElementosArray = somarElementos(arrayNumeros);

console.log(somaElementosArray);
*/









