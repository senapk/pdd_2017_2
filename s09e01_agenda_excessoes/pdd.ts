declare function require(name: string): any;
var readline = require('readline-sync');

export class pdd{
    static cin(text: string): string{
        return readline.question(text);
    }

    static cout(text: string){
        return console.log(text);
    }

    static vet2str<T>(prefix: string, vet: Array<T>, separador: string){
        let saida = prefix;
        for(let elem of vet)
            saida += elem + separador;
        return saida;
    }

    static map2vet<T>(mapa: Map<string, T>): Array<T> {
        let vet = new Array<T>();
        for(let elem of mapa.values())
            vet.push(elem);
        return vet;
    }
}