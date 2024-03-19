/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno:davi furlan
*/

const teclado = require (`prompt-sync`)();

let letra: string = teclado(`Digite a letra`);

if (letra == `a` || letra == `e` || letra == `i` || letra == `o` || letra == `u`|| letra == `A` || letra == `E` || letra == `I` || letra == `O` || letra == `U`) {
    console.log(`a letra é uma vogal`);
    
} else {
    console.log(`a letra  é uma consoante`);
}

