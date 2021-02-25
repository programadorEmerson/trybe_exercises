let nota = 80;

resultado = "";

if (nota < 0 || nota > 100) {
  resultado = "Erro, nota incorreta!";
} else if (nota >= 90) {
  resultado = "A";
} else if (nota >= 80) {
  resultado = "B";
} else if (nota >= 70) {
  resultado = "C";
} else if (nota >= 60) {
  resultado = "D";
} else if (nota >= 50) {
  resultado = "E";
} else {
  resultado = "F";
}

console.log(resultado);