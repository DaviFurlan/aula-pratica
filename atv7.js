var teclado = require("prompt-sync");
var quantMaçã = parseFloat(teclado("Digite a quantidade de ma\u00E7\u00E3s compradas"));
var valorTotal = 0;
if (quantMaçã < 12) {
    valorTotal = quantMaçã * 0.3;
}
else {
    valorTotal = quantMaçã * 0.25;
}
console.log("O valor total da compra \u00E9 de ".concat(valorTotal));
