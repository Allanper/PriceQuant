let totalP = 0;
let totalM = 0;
let totalG = 0;
let totalValor = 0;
let totalCompras = 0;

function registrarCompra() {
  let continuar = true;

  while (continuar) {
    let qtdP = parseInt(prompt("Digite a quantidade de camisetas P:"));
    let qtdM = parseInt(prompt("Digite a quantidade de camisetas M:"));
    let qtdG = parseInt(prompt("Digite a quantidade de camisetas G:"));

    while (isNaN(qtdP) || isNaN(qtdM) || isNaN(qtdG)) {
      alert("Por favor, insira um valor numérico para as quantidades de camisetas.");

      qtdP = parseInt(prompt("Digite a quantidade de camisetas P:"));
      qtdM = parseInt(prompt("Digite a quantidade de camisetas M:"));
      qtdG = parseInt(prompt("Digite a quantidade de camisetas G:"));
    }

    totalP += qtdP;
    totalM += qtdM;
    totalG += qtdG;

    let valorTotal = qtdP * 5 + qtdM * 6 + qtdG * 8;
    totalValor += valorTotal;

    totalCompras++;

    let resposta = prompt("Deseja continuar registrando as compras? (sim ou não)").toLowerCase();
    continuar = resposta === "sim";
  }

  exibirResultado();
}

function exibirResultado() {
  let resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "<h2>Valor Total</h2>" +
                               "<p>Qtd P: " + totalP + " = " + totalP * 5 + " euros</p>" +
                               "<p>Qtd M: " + totalM + " = " + totalM * 6 + " euros</p>" +
                               "<p>Qtd G: " + totalG + " = " + totalG * 8 + " euros</p>" +
                               "<p>Média: " + (totalValor / totalCompras) + " euros</p>";
}
