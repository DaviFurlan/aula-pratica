/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior,
 com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`,
  se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome:davi furlan
*/
const teclado = require(`prompt-sync`)();

let numero1: number = parseFloat(teclado(`digite o primeiro numero:`));
let numero2: number =parseFloat(teclado(`digite o segundo numero:`));


if (numero1 > numero2)

console.log(`O numero maior é: ${numero1} e o numero menor é: ${numero2}`);

else if (numero1 < numero2) {
    console.log(`O numero maior é: ${numero2} e o numero menor é: ${numero1}`);
} else {
    console.log(`O numero: ${numero1} e o numero: ${numero2} São iguais`);
}




 







