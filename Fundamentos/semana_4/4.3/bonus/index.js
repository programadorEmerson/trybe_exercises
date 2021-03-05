/*
1- Ordene o array numbers em ordem crescente e imprima seus valores;
2- Ordene o array numbers em ordem decrescente e imprima seus valores;
3- Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
Copiar
*/
let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

for (let i = 1; i < array.length; i++) { // pega o tamanho do array array.length no caso 10

  for (let j = 0; j < i; j++) { // Aqui ele percorre o array todo pela 1 vez, ou seja 1/10, e assim por diante

    if (array[i] < array[j]) { // aqui ele verifica no loop index 0, se o valor na posição 0(i) é menor que o da posição 0(j)
      let position = array[i]; //se for ele armazena a posição do item 1 da comparação no position

      array[i] = array[j]; // atribuindo ao segundo valor o do primeiro numero
      array[j] = position; // atribuindo o valor do primeiro numero o valor do segundo ou seja a troca
    }
  }

}
console.log("---- Início do conteúdo bonus ----")
console.log("-")
console.log("Valor original: "+[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]);
console.log("Do menor para o maior: "+array); // imprime o novo valor do array
console.log("Do maior para o menor: "+array.sort()); // imprime o novo valor do array
console.log("-")
console.log("---- Fim do conteúdo bonus ----")