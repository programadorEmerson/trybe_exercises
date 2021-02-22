var notaFinal = 81;
let resultadoFinal;

if (notaFinal > 80) {
    resultado = "aprovado";
} else if (notaFinal < 80 && notaFinal > 60) {
    resultado = "lista";
} else {
    resultado = "reprovado";
}

switch (resultado) {
  case "aprovado":
    resultadoFinal = "Parabéns, você foi aprovado!";
    break;

  case "reprovado":
    resultadoFinal = "Você está na nossa lista de espera";
    break;

  case "lista":
    resultadoFinal = "Você foi reprovado";
    break;

  default:
    resultadoFinal = "Não se aplica";
    break;
}


console.log("---- Verificador de nota ----")
console.log(resultadoFinal)
console.log("---- Resultado ----")
