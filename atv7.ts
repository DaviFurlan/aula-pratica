const teclado = require(`prompt-sync`);

let quantMaçã: number = parseFloat(teclado(`Digite a quantidade de maçãs compradas`));
let valorTotal: number = 0;

if (quantMaçã <12){
    valorTotal = quantMaçã*0.3
}else{
    valorTotal = quantMaçã*0.25
}
console.log(`O valor total da compra é de ${valorTotal}`);
