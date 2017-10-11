declare function require(name: string): any;
var readline = require('readline-sync');

export function cin(text: string): string{
    return readline.question(text);
}

export function cout(text: string){
    return console.log(text);
}
