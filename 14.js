const readlineSync = require('readline-sync');

const text = (readlineSync.question('Digite um texto: '));

const palindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed
}

console.log(palindrome(text));