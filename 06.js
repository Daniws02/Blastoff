const readlineSync = require('readline-sync');

const C = parseFloat(readlineSync.question('Informe a hora que o jogo começou: '));

const F = parseFloat(readlineSync.question('Informe a hora que o jogo terminou: '));


console.log("O tempo de jogo foi de " + (F - C) + " horas");