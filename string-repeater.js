const prompt = require('prompt-sync')();

let string1 = prompt("Enter the string you want to use; ")

let string2 = string1

console.log(string2)

if (string1.length < 10){
    string1 = string1 + string2
    
    console.log(string1);
}