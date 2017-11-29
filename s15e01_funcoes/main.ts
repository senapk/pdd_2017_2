
/*
join  DONE
filter
function =>
map

*/

class Pessoa{
    nome: string;
    idade: number;
    constructor(nome = "", idade = 0){
        this.nome = nome;
        this.idade = idade;
    }
    toString(){
        return "[" + this.nome + ", " + this.idade + "]";
    }
}

let vetor = [1, 3, 5, 4, 2, 6, 7];
let vpes  = [new Pessoa("Ana", 1), new Pessoa("Bruno", 2), 
             new Pessoa("Breno", 5), new Pessoa ("Anubis", 3)];

//join
//console.log("[" + vetor.join(" - ") + "]");//[1 - 3 - 5 - 6 - 2 - 6 - 7]
//console.log(vpes.join(", "));

//filter ->retona uma nova lista para os elemento SUCESSO
function ehImpar(n : number): boolean{
    return n % 2 == 1;
}

let maiorq4 = (n: number): boolean => {
    return n > 4;
}

let menorq6 = (n: number) => n < 6;



console.log(vetor.filter(ehImpar).join(" ")); //1 3 5 7
let novalistamaiorq4 = vetor.filter(maiorq4);
console.log(novalistamaiorq4.join(" ")); //5 6 7

console.log(vetor.filter(ehImpar).filter(maiorq4).join(" "));//5 7

console.log(vetor.filter(menorq6).join(" ")); //1 3 5 4 2

console.log(vetor.filter(x => (x >= 3) && (x <=7))); //3 5 4 6 7

console.log(vpes.filter(x => x.nome[0] == "A").join(", "));

//vpes = vpes.filter(x => x.nome[0] != "A");
//console.log(vpes.join(", "));

console.log(vpes.map(x => {
    x.idade -= 2;
    if(x.idade <= 0)
        x.nome += " morreu";
    return x;
}).filter(x => x.idade <= 0).join(" "));

let panubis = vpes.find(x => x.nome == "Anubis");



# addPac nome diagnostico 

addPac davi dorNaVenta
addPac juan dorNasCostas

# addMed nome especialidade
addMed julieta otorrino
addMed marilia cirurgia

# vincular medico paciente
vincular julieta davi
vincular marilia juan 
vincular marilia davi

# mostrar nome
#    nomePac diag [medico medico medico]  #se for paciente
#    nomeMed esp [paciente paciente paciente]  # se for medico

mostrar davi
  davi dorNaVenta [julieta marilia]
mostrar marilia
  marilia cirurgia [davi juan]

# sendmsg nomeDe nomePara texto
sendmsg davi marilia posso espirrar?

# vermsg nome
vermsg marilia
  [davi - posso espirrar?]
sendmsg marilia davi nao
vermsg davi
  [marilia - nao]



class Pessoa{
    caixaEntrada: String [];
    sendMsg(nome, msg){
        obterDest(nome).caixaEntrada.push(msg);
    }   
    abstract obterDest(nome);
}
class Paciente extends Pessoa{
    obterDest(nome){
        return medicos.find(x => x.nome == nome);
    }
}
class Medico extends Pessoa{
    obterDest(nome){
        return pacientes.find(x => x.nome == nome);
    }
}


