const readlineSync = require('readline-sync');

const A = parseFloat(readlineSync.question('Valor da distância A: '));
const B = parseFloat(readlineSync.question('Valor do combustível gasto B: '));


const total = (A/B);

console.log("resultado: " + total);