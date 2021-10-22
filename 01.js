const readlineSync = require('readline-sync');

const I = parseFloat(readlineSync.question('Valor I: '));
const J = parseFloat(readlineSync.question('Valor J: '));
const K = parseFloat(readlineSync.question('Valor K: '));
const X = parseFloat(readlineSync.question('Valor X: '));
const Y = parseFloat(readlineSync.question('Valor Y: '));

const total = ((I + J + K + X + Y)/5);

console.log("resultado: " + total);