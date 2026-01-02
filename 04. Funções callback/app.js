//AVISO: ELIMINAR A CADEIA DE COMENTÁRIO DE CADA QUESTÃO SE QUISER RODAR CADA CÓDIGO.

//01. Utilize o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Para isso lembre de usar uma função callback.

/*
const arrayNums = [1,2,3,4];

const numerosMultiplicados = arrayNums.map((numero) => numero * 10);

console.log(numerosMultiplicados);
*/

//02. Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

/*
const arrayNums = [1,2,3,4];

arrayNums.forEach((elemento, indice) => {
    console.log(`${indice} - ${elemento}`);
})
*/

//03.  Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

/*
const arrayNumeros = [1,2,3,4,5];

const executaOperacaoEmArray = (array,callbackFunction) => {
    array.forEach(callbackFunction);
}

function operacaoSoma(numero){
    return console.log(numero += 1);
}

executaOperacaoEmArray(arrayNumeros, operacaoSoma);
*/

//04. Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

/*
const numeros = [1,2,3,4,5];

const numeroAEncontrar = 1;

if(numeros.includes(numeroAEncontrar)){
    console.log(numeros.indexOf(numeroAEncontrar));
}else{
    console.log('-1');
}
*/

//05. Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

/*
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

*/

//06. Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

/*
const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach((elemento) => console.log(elemento * 3));
const indiceBuscado = numeros.findIndex((elemento) => elemento === 18);

if(indiceBuscado !== -1){
    console.log(`Índice do número 18: ${indiceBuscado}`);
}else{
    console.log("Número não encontrado!");
}
*/
