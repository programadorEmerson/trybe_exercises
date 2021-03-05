/*
2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
*****
*/

let valor = 5;
let simboloUsar = "*";

console.log("---- Exercício 02 ----");
console.log("");
for (let larguraQ = 1; larguraQ <= valor; larguraQ++) {
    let desenhe = "";

    for (let index = 0; index < larguraQ; index++) {
        desenhe+=simboloUsar;
    }
    console.log(desenhe);        

}
console.log("");
console.log("---- Fim Exercício 02 ----");