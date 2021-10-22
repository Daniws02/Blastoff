const readlineSync = require('readline-sync');

const a = parseFloat(readlineSync.question('Valor de a: '));
const b = parseFloat(readlineSync.question('Valor de b: '));
const c = parseFloat(readlineSync.question('Valor de c: '));


let numeros = [a,b,c]

numeros.sort()

console.log("O menor número é: " + numeros[0])