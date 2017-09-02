//include do readline-sync
declare function require(name : string);
var input = require('readline-sync');

class Telefone{
    id : string;
    numero : string;
    constructor(id : string = "" , numero : string = ""){
        this.id = id;
        this.numero = numero;
    }
}

class Contato{
    nome : string;
    email : string;
    telefones : Telefone[];

    constructor(nome : string = "", email : string = ""){
        this.nome = nome;
        this.email = email;
        this.telefones = [];
    }

    show(){
        console.log("nome: " + this.nome + " email: " + this.email);
        for(let fone of this.telefones)
            console.log("\t[id: " + fone.id + " numero: " + fone.numero + "]");
    }

    addFone(fone : Telefone): boolean{
        for(let elemento of this.telefones)
            if (elemento.id == fone.id)
                return false;
        this.telefones.push(fone);
        return true;
    }

    rmFone(id : string): boolean{
        for (let i in this.telefones){
            if (this.telefones[i].id == id){
                //remove 1 elemento a partir da posicao i
                this.telefones.splice(Number(i), 1);
                return true;
            }
        }
        return false;
    }
}

//realiza a interação com o usuario alterando contado
//retorna as alterações de contato
function commandLine(contato : Contato) : Contato{
    let op : string[] = [""];
    while(op[0] != "fim"){
        op = input.question("Digite comando ou help: ").split(" ");
        if (op[0] == "help"){
            console.log("iniciar $nome $email");
            console.log("show");
            console.log("addFone $id $numero");
            console.log("rmFone $id");
            console.log("fim");
        }

        if (op[0] == "iniciar"){
            contato = new Contato(op[1], op[2]);
            contato.show();
        }

        if (op[0] == "addFone") {
            if (contato.addFone(new Telefone(op[1], op[2])))
                console.log("telefone adicionado");
            else
                console.log("id ja existe");
            contato.show();
        }

        if (op[0] == "rmFone"){
            if (contato.rmFone(op[1]))
                console.log("telefone removido");
            else
                console.log("id nao existe");
            contato.show();
        }

        if(op[0] == "show"){
            console.log("Info Contato");
            contato.show();
        }
    }
    return contato;
}

//inicializa o contato e retorna o contato inicializado
function inicializar(contato : Contato) : Contato{
    contato = new Contato("Anibal", "bonitao18@gmail.com");
    contato.addFone(new Telefone("oi", "88"));
    contato.addFone(new Telefone("tim", "85"));
    contato.addFone(new Telefone("casa", "87"));
    contato.rmFone("tim");
    return contato;
}

function main(){
    let contato : Contato = new Contato();
    contato = inicializar(contato);
    contato = commandLine(contato);
}

main()


















