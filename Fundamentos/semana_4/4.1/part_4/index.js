const nota = 81;
let resultado;

if (nota > 80) {
    resultado = "Parabéns, você foi aprovado!";
} else if (nota < 80 && nota > 60) {
    resultado = "Você está na nossa lista de espera";
} else {
    resultado = "Você foi reprovado";
}

console.log("---- Verificado de notas ----")
console.log(resultado)
console.log("---- Resultado ----")