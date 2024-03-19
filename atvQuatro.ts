/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno:
*/

console.clear();
const teclado = require (`prompt-sync`) ();

let n1 = parseFloat(teclado(`Digite o primeiro número: `));
let n2 = parseFloat(teclado(`Digite o segundo número: `));
let n3 = parseFloat(teclado(`Digite o terceiro número: `));

let menor: number = 0;
let medio: number = 0;
let maior: number = 0;

if (n1 >  n2 && n1 > n3){
    let maior: number = n1;
    if(n2>n3){
        medio = n2;
        menor = n3;
    }
    else{
        menor = n2
        medio = n3
    }

}
else if(n2 > n1 && n2 > n3){
   maior = n2
if (n1 > n3) {
     medio = n1
     menor = n3

    } else {
    medio = n3
    menor = n1

    }
}
else if(n3 > n1 && n3 > n2){
let maior: number = n3
if (n1 > n2) {
    medio = n1
    menor = n2
} else {
    medio = n2
    menor = n1
    
}
}
else{
console.log(`algo deu errado`)
};


console.log(`Os números em sequência: ${menor}; ${medio}; ${maior}`);