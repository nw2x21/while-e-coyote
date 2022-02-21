const prompt = require("prompt-sync")();
let input = 0;
let sum = 0;
// begin a loop that only ends when the user inputs "done"
while(input !== "done"){
    // ask for a number, or the word "done"
    input = prompt("please input a number or the word 'done': ");
    console.log("input is: " + input);
    // if the user inputs "done", add everything up and console log it
    if(input === "done"){
        console.log("adding the numbers now...");
        console.log("The sum is: " + sum);
    } else{
    // else if the user inputs a number, add it to the sum and loop again
    sum += Number(input);
    console.log("Right now the sum is: " + sum);
    }
}
// console.log(typeof 25);