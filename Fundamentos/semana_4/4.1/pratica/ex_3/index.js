let a = 5;
let b = 6;
let c = 7;
let resultado;

if (a > b || a > c ) {
    resultado = "A maior B e C";
} else if (b > a && b > c ) {
    resultado = "B maior A e C";
} else if (c > a && c > b ) {
    resultado = "C maior A e B";
}

console.log(resultado);