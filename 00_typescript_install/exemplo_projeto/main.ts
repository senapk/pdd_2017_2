declare function require(name:string);
var input = require('readline-sync');
let nome : string = input.question("Qual seu nome?").split(" "); 
console.log("Hello " + nome)