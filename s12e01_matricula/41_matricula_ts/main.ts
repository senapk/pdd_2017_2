import {poo} from "./poo_aux";
import {Repository} from "./poo_repository";
import {Controller} from "./poo_controller";
import {Aluno, Discp} from "./matricula";

class Matricula extends Controller{
    r_alu: Repository<Aluno>;
    r_dis: Repository<Discp>;
    
    constructor(){
        super();
        this.r_alu = new Repository<Aluno>();
        this.r_dis = new Repository<Discp>();
    }
    process(line: string): string{
        let ui = line.split(" ");
        let cmd = ui[0];

        if(cmd == "addAlu")//_nome
            this.r_alu.add(ui[1], new Aluno(ui[1]));
        else if(cmd == "addDis")//_nome
            this.r_dis.add(ui[1], new Discp(ui[1]));
        else if(cmd == "show"){
            return "Alunos: " + this.r_alu.keys().join(" ")  + "\n" +
                   "Discps: " + this.r_dis.keys().join(" ");
        
        }else if(cmd == "mat"){//_alu _dis
            this.r_alu.get(ui[1]).matricular(this.r_dis.get(ui[2]));
        }else if(cmd == "showAlu"){//_alu
            return "Aluno " + this.r_alu.get(ui[1]).id_aluno + "\n"
                + "Discp" + this.r_alu.get(ui[1]).allDiscp.join(" ");
        }
        return "done";
    }
}

let mat  = new Matricula();
mat.commandLine();
