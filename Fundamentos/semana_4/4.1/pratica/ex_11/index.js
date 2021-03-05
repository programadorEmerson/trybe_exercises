let valorINSS;
let valorIR;

let pagamento = 3000.00;

if (pagamento <= 1556.94) {
  valorINSS = pagamento * 0.08;
} else if (pagamento <= 2594.92) {
  valorINSS = pagamento * 0.09;
} else if (pagamento <= 5189.82) {
  valorINSS = pagamento * 0.11;
} else {
  valorINSS = 570.88;
}

let salarioBase = pagamento - valorINSS;

if (salarioBase <= 1903.98) {
  valorIR = 0;
} else if (salarioBase <= 2826.65) {
  valorIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  valorIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  valorIR = (salarioBase * 0.225) - 636.13;
} else {
  valorIR = (salarioBase * 0.275) - 869.36;
};

console.log("Salário com descontos: " + (salarioBase - valorIR));