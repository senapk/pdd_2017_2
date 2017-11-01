import {poo} from "./poo_aux";

export class Aluno{
    id_aluno: string;
    disciplinas: Map<string, Discp>;
    constructor(id_aluno : string = ""){
        this.id_aluno = id_aluno;
        this.disciplinas = new Map<string, Discp>();
    }
    matricular(discp: Discp){
        if(this.disciplinas.has(discp.idDiscp))
            return;
        this.disciplinas.set(discp.idDiscp, discp);
        discp.__alunos.set(this.id_aluno, this);
    }

    desmatricular(idDiscp: string){
        let disciplina = this.disciplinas.get(idDiscp);
        if(!disciplina)
            return;
        disciplina.__alunos.delete(this.id_aluno);
        this.disciplinas.delete(idDiscp);
    }
    get allDiscp(): Array<Discp>{
        return poo.map2vet(this.disciplinas);
    }
    toString(): string{
        return "" + this.id_aluno;
    }
}

export class Discp{
    idDiscp : string;
    __alunos : Map<string, Aluno>;
    constructor(idDiscp : string = ""){
        this.idDiscp = idDiscp;
        this.__alunos = new Map<string, Aluno>();
    }

    get allAlu(): Array<Aluno>{
        return poo.map2vet(this.__alunos);
    }
    toString():string{
        return "" + this.idDiscp;
    }
}





