//AVISO: ELIMINAR A CADEIA DE COMENTÁRIO DE CADA QUESTÃO SE QUISER RODAR CADA CÓDIGO.

//01. Crie uma função que receba dois arrays e os concatene em um único array.

/*
const arrayStrings = ['feijao','arroz'];
const arrayNumeros = [1,2];

const concatenarArrays = (array1,array2) => array1.concat(array2);

console.log(concatenarArrays(arrayStrings, arrayNumeros));
*/

//02. Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

/*
const numeros = [1,2,3,4,5,6,7,8,9,10];
const parteNumeros = numeros.slice(3,7 + 1);
console.log(parteNumeros);
*/

//03. Dado o array frutas contendo frutas que desejamos comprar na feira, Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

/*
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2,2,'Kiwi','Pêssego');
console.log(frutas);
*/

//04. Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

/*
const menuPrincipal = ['Arroz','Feijão','Carne'];
const menuDeSobremesas = ['Bolo','Doce','Chocolate'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);
*/

//05. Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

/*
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

console.log(matriz);
*/

//06. Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

//console.log(matriz[1][2]);

//07. Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

/*
matriz[2][1].push(15);
console.log(matriz[2]);
*/












