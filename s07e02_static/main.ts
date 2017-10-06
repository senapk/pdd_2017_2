declare function require(name: string): any;
var readline = require('readline-sync');

function cin(text: string): string{
    return readline.question(text);
}

function cout(text: string){
    return console.log(text);
}

/* function cin(text: string = ""): string {
    let saida = prompt(text);
    if(saida)
        return saida;
    return "";
}

function cout(text: string) {
    alert(text);
} */

let proxNum = 0;

class Pessoa {
    static pais: string = "Brasil";
    public nome: string;
    public cpf: number;

    constructor(nome: string = ""){
        this.nome = nome;
        this.cpf = proxNum;
        proxNum += 1;
    }
    
    toString(): string {
        return this.nome + " " + this.cpf;
    }
}

/* cout(Pessoa.pais);
Pessoa.pais = "China";
cout(Pessoa.pais);
let mario = new Pessoa("Mario");
let joao = new Pessoa("Joao");
let silviano = new Pessoa("Silva");
cout("" + joao + "\n" + mario + "\n" + silviano)
 */

class Telefone{
    numero: string;
    id: string;

    constructor(numero: string, id: string){
        this.numero = numero;
        this.id = id;
    }

/*     static validarTelefone(numero: string): boolean {
        para cada caratere
            se for diferente de ().- ou nao for digito
                return false
        return true
    }*/ 
}

class Calculadora {
    static somar(a: number, b: number): number{
        return a + b;
    }
    static subtrair(a: number, b: number): number{
        return a - b;
    }
}

let calc: Calculadora = new Calculadora();

/* cout("" + Calculadora.somar(5, 6));
cout("" + Calculadora.subtrair(8, 9));
 */

//--------------------------------------------

/* let lista: string[] = ["uva", "avo", "ivo", "ovo", "eva"];
lista.sort();
for(let elem of lista)
    cout(elem); */



/* function comp(a: number, b: number): number {
    return a - b;
}

let lnum: number[] = [3, 2, 1, 11, 12, 32, 31];
lnum.sort(comp);
for(let elem of lnum)
    cout("" + elem); 
*/

let classe: Array<Pessoa> = [
    new Pessoa("Davi"), new Pessoa("Davi"), 
    new Pessoa("Adriana"), new Pessoa("Xavier")
];

classe.sort();
for(let elem of classe)
    cout("" + elem);

classe.sort((one: Pessoa, two: Pessoa)=>{
    return one.cpf - two.cpf;
});

for(let elem of classe)
    cout("" + elem);