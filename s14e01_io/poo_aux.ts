declare function require(name: string): any;
var readline = require('readline-sync');
readline.setDefaultOptions({keepWhitespace : true});

export class poo{
    static cin(text: string): string{
        return readline.question(text);
    }

    static cout(text: string){
        return console.log(text);
    }

    //recebe um texto e retorna o texto com um tab de 2 espacos
    static tab(text: string, prefix: string = "  "): string {
        return prefix + text.split("\n").join("\n" + prefix);
    }
}