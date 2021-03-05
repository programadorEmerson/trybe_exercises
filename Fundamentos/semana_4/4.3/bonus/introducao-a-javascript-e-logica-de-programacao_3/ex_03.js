/*
3- Agora inverta o lado do triângulo. Por exemplo:
Copiar
n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
*/

let valor = 5;
let simboloUsar = "*";

console.log("---- Exercício 03 ----");
console.log("");
for (let larguraQ = 1; larguraQ <= valor; larguraQ++) {
    let desenhe = "";

    for (let linhas = 1; linhas <= valor; linhas++) {
        let inicioDesenho = valor - larguraQ;

        if (inicioDesenho >= linhas) {
            desenhe+=" ";
        } else {
            desenhe+=simboloUsar;
        }
    }

    console.log(desenhe);        

}
console.log("");
console.log("---- Fim Exercício 03 ----");