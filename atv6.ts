console.clear();
const teclado = require(`prompt-sync`)();

let n1: number =
parseFloat(teclado(`Digite o valor da primeira nota`));
let n2: number =
parseFloat(teclado(`Digite o valor da segunda nota`));
let nota: number = ((n1+n2)/2)
if(nota>=7 && nota <8.5){
    console.log(`A nota é B`)
}
    if (nota>=5 && nota <7){
        console.log(`a nota é C`)
    }else{

        if (nota =>3 && nota <5){
            console.log(`a nota é D`)
        }else{
            console.log(`a nota é E`)}};

        