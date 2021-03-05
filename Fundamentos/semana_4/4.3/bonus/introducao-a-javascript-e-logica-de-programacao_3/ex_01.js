/*
Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
Copiar
n = 5

*****
*****
*****
*****
*****
*/

let valor = 10;
let simboloUsar = "*";

console.log("---- Exercício 01 ----");
console.log("");
for (let larguraQ = 1; larguraQ <= valor; larguraQ++) {
    let desenhe = "";
    for (let index = 0; index < valor; index++) {
        desenhe+=simboloUsar;
    }
        console.log(desenhe);        

}
console.log("");
console.log("---- Fim Exercício 01 ----");