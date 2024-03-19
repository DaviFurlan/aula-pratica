/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior,
 com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`,
  se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome:davi furlan
*/
var teclado = require("prompt-sync")();
var numero1 = parseFloat(teclado("digite o primeiro numero:"));
var numero2 = parseFloat(teclado("digite o segundo numero:"));
if (numero1 > numero2)
    console.log("O numero maior \u00E9: ".concat(numero1, " e o numero menor \u00E9: ").concat(numero2));
else if (numero1 < numero2) {
    console.log("O numero maior \u00E9: ".concat(numero2, " e o numero menor \u00E9: ").concat(numero1));
}
else {
    console.log("O numero: ".concat(numero1, " e o numero: ").concat(numero2, " S\u00E3o iguais"));
}
