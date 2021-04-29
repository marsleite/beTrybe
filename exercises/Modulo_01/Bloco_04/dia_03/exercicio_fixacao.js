// Utilizando o array abaixo, percorra-o somando todos os valores. 
//Caso o valor final seja maior que 15, imprima-o. 
//Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

/* A resolução do problema
1. Interpretação
2. Criação do algoritmo
3.Codificação do algoritmo 
*/

/* 1 step: Adicionar o array */
let fruits = [3, 4, 10, 1, 12];
/* 2 step: criar uma variavel com o valor 0; */
let sum = 0;
/* 3 step: criar um loop que pecorra o array*/
/* 4 step: Incrementar a variavel com o valor correspondente a cada loop*/ 

for(index = 0; index < fruits.length; index += 1) {
    sum = sum + fruits[index];
}

/* 5 Step: Criar um if com a condição da variavel ser maior que 15 */

if (sum > 15) {
  /*6 step*/ console.log(`O valor total da array é ${sum}`)
} else {
  /*7 step*/console.log(`O valor é menor que 16`)
}