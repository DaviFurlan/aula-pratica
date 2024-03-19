console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite o valor da primeira nota"));
var n2 = parseFloat(teclado("Digite o valor da segunda nota"));
var nota = ((n1 + n2) / 2);
if (nota >= 7 && nota < 8.5) {
    console.log("A nota \u00E9 B");
}
if (nota >= 5 && nota < 7) {
    console.log("a nota \u00E9 C");
}
else {
    if (function (nota) { return 3 && nota < 5; }) {
        console.log("a nota \u00E9 D");
    }
    else {
        console.log("a nota \u00E9 E");
    }
}
;
