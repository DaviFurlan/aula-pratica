var teclado = require("prompt-sync")();
var x = parseFloat(teclado("Digite o valor de x"));
var y = parseFloat(teclado("Digite o valor de y"));
console.log("O valor de x \u00E9 ".concat(x, " e O valor de y \u00E9 ").concat(y));
var aux = x;
var x = y;
var y = aux;
console.log("O valor de x \u00E9 ".concat(x, " e o valor de y \u00E9 ").concat(y));
