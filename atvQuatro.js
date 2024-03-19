/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno:
*/
console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
var n2 = parseFloat(teclado("Digite o segundo n\u00FAmero: "));
var n3 = parseFloat(teclado("Digite o terceiro n\u00FAmero: "));
var menor = 0;
var medio = 0;
var maior = 0;
if (n1 > n2 && n1 > n3) {
    var maior_1 = n1;
    if (n2 > n3) {
        medio = n2;
        menor = n3;
    }
    else {
        menor = n2;
        medio = n3;
    }
}
else if (n2 > n1 && n2 > n3) {
    maior = n2;
    if (n1 > n3) {
        medio = n1;
        menor = n3;
    }
    else {
        medio = n3;
        menor = n1;
    }
}
else if (n3 > n1 && n3 > n2) {
    var maior_2 = n3;
    if (n1 > n2) {
        medio = n1;
        menor = n2;
    }
    else {
        medio = n2;
        menor = n1;
    }
}
else {
    console.log("algo deu errado");
}
;
console.log("Os n\u00FAmeros em sequ\u00EAncia: ".concat(menor, "; ").concat(medio, "; ").concat(maior));
