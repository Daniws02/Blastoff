const readlineSync = require('readline-sync');

const C = parseFloat(readlineSync.question('Valor de C: '));

const F = 32+((9*C)/5);

console.log(`O valor de ${C} em Fahrenheit é: ` + F);