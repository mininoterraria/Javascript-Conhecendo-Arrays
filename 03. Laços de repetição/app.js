//01. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

/*
const arrayNumeros = [1,2,3,4,5];

for(const numeros of arrayNumeros){
    console.log(numeros);
}
*/

//02. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

/*
const arrayComidas = ['feijão','arroz','carne'];


const exibirDadosArray = (array) => {
    for(let i = 0; i < array.length; i++){
        console.log(`${i} - ${array[i]}`); 
    }
}

exibirDadosArray(arrayComidas);
*/

//03. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

/*
const arrayInteiros = [1,2,3,4,5];

const somarElementosArray = (array) => {
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

console.log(somarElementosArray(arrayInteiros));
*/

//04. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

/*
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
*/

//05. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

/*
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }
}
*/

//06. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let somaNumeros = 0;

for(let i = 0; i < numeros.length; i++){
    somaNumeros += numeros[i];
}

const media = somaNumeros / numeros.length;

console.log(media.toFixed(2));


