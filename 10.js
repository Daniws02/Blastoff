const readlineSync = require('readline-sync');

const num = parseFloat(readlineSync.question('Digite um valor: '));

let i = 0;

function Fatorial(num) {
    let resultado = num;
    for(let i = 1; i < num; i++) {
        resultado = resultado * i;
    }
    return resultado;
}


console.log(Fatorial(num));