const readlineSync = require('readline-sync');

const num1 = parseFloat(readlineSync.question('Valor do primeiro número: '));
const num2 = parseFloat(readlineSync.question('Valor do segundo número: '));


let numeros = [num1,num2];

numeros.sort(order);

function order(a, b) {
    return(a - b)
}

console.log(numeros)

if(numeros[1]%numeros[0] == 0) {
    console.log("São múltiplos");
} else {
    console.log("Não são múltiplos");
}