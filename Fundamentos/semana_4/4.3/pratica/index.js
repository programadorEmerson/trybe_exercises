/*
Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
2- Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
    A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
4- Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
5- Utilizando for , descubra qual o maior valor contido no array e imprima-o;
6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
7- Utilizando for , descubra qual o menor valor contido no array e imprima-o;
8- Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Passo 1
console.log("---- Início passo 01 ----");
for (index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}
console.log("---- Fim passo 01 ----");

console.log("");

// Passo 2
console.log("---- Início passo 02 ----");
let valorTotal = 0;
for (let index = 0; index < numbers.length; index++) {
  valorTotal += numbers[index];
}
console.log("Valor total: " + valorTotal);
console.log("---- Fim passo 02 ----");

console.log("");

// Passo 3
console.log("---- Início passo 03 ----");

for (let index = 0; index < numbers.length; index++) {
  valorTotal += numbers[index];
}
console.log("Valor total: " + (valorTotal/numbers.length));
console.log("---- Fim passo 03 ----");

console.log("");

// Passo 4
console.log("---- Início passo 04 ----");
if ((valorTotal/numbers.length) > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}
console.log("---- Fim passo 04 ----");

console.log("");

// Passo 5
console.log("---- Início passo 05 ----");
numbers = numbers.sort();
let valorMaior = numbers[0];
console.log("mAIOR valor do array"+valorMaior);
console.log("---- Início passo 05 ----");

console.log();

// Passo 6
console.log("---- Início passo 06 ----");

let qtdade_impar = 0;
let qtdade_par = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
      qtdade_par++
  } else {
      qtdade_impar++
  }
}
console.log("Total de n impar: " + qtdade_impar + ", Total de n par: " + qtdade_par);
console.log("---- Fim passo 06 ----");

console.log("");

// Passo 7
console.log("---- Início passo 07 ----");
let valorMenor = numbers[numbers.length-1];
console.log("Menor valor do array: "+valorMenor);
console.log("---- Início passo 07 ----");

console.log();

// Passo 8
console.log("---- Início passo 08 ----");

let lovaLista = [];
for (let index = 1; index <= 25; index++) {
    lovaLista.push(index);    
}
console.log(lovaLista);
console.log("---- Início passo 08 ----");

console.log();

console.log("---- Início passo 09 ----");
for (let index = 0; index < lovaLista.length; index++) {
    console.log(lovaLista[index] +"/"+"2= " +lovaLista[index]/2);   
}
console.log("---- Início passo 09 ----");