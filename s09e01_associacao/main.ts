
class Aluno {
    vetDisc: Array<Disc>;
    constructor(public nome: string){
        this.vetDisc = [];
    }
    addDisc(disc: Disc){
        this.vetDisc.push(disc);
        if(!disc.has(this.nome))
            disc.addAluno(this);
    }
    has(idDisc: string): boolean{
        for(let disc of this.vetDisc)
            if(disc.nome == idDisc)
                return true;
        return false;
    }
    toString(): string{
        let saida = this.nome + "[ ";
        for(let disc of this.vetDisc)
            saida += disc.nome + " ";
        return saida + "]";
    }
}

class Disc {
    vetAlunos: Array<Aluno>;

    constructor(public nome: string){
        this.vetAlunos = new Array<Aluno>();
    }
    addAluno(aluno: Aluno){
        this.vetAlunos.push(aluno);
        if(!aluno.has(this.nome))
            aluno.addDisc(this);
    }
    has(idAluno: string): boolean{
        for(let aluno of this.vetAlunos)
            if(aluno.nome == idAluno)
                return true;
        return false;
    }

    toString(): string{
        let saida = this.nome + " [ ";
        for(let aluno of this.vetAlunos)
            saida += aluno.nome + " ";
        return saida + " ]";
    }
}


let mario = new Aluno("mario");
let jose = new Aluno("jose");

let fup = new Disc("fup");

fup.addAluno(mario);


console.log("" + fup);
console.log("" + mario);