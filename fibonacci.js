const prompt = require('prompt-sync')();

const n = Number(prompt('Enter a number you want in the fibonacci game : '));

let a = 0;
let d = 1;
let r = 1;

let count = 0;

if (count < n) {console.log(a); count = count +1};
if (count < n) {console.log(d); count = count +1};

while (count < n) {
console.log(r);

a = d;
d = c;
r = a + d;

count = count + 1


}

