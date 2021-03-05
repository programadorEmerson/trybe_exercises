/*
Depois, faça uma pirâmide com n asteriscos de base:
Copiar
n = 5

  *
 ***
*****
*/

let n = 5;
let linha;
let coluna;
let espaco = '';
let caracter = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (linha = 0; linha <= midOfMatrix; linha += 1) {
  for (coluna = 1; coluna <= n; coluna += 1) {

    if (coluna > controlRight && coluna < controlLeft) {
      espaco = espaco + caracter;
    } else {
      espaco = espaco + ' ';
    }

  }
  console.log(espaco);
  espaco = '';
  controlRight -= 1;
  controlLeft += 1;
};

