const readlineSync = require('readline-sync');

const num = parseFloat(readlineSync.question('Digite um número: '));

let i = 0;

let count = 0;

for(i=1; i <= num; i++) {
    if(num%i==0) {
        count++
    }
}
if(count == 2) {
    console.log("O número é primo");
} else {
    console.log("O número não é primo");
}
