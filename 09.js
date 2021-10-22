const readlineSync = require('readline-sync');

const num = parseFloat(readlineSync.question('Digite o número da tabuada: '));

const x = parseFloat(readlineSync.question('Digite o máximo de vezes que ela irá se multiplicar: '));

let i = 0;

for(i = 0; i < x+1; i++) {
    console.log(`${i} X ${num} = ` + i*num);
}
