const readlineSync = require('readline-sync');

const A = [1,2,3,4];
const B = [1,2,5,8];

let i = 0;
let j = 0;

console.log("Os números de intersecção entre A e B são: ")

for(i = 0 ; i < A.length; i++) {
    for(j = 0; j < B.length; j++) {
        if(A[i] == B[j]) {
            console.log(A[i])
        }
    }
}