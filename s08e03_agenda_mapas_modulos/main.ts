import {Fone} from './fone';
import {Contato} from './contato';
import {cin, cout} from "./readline";
import {Agenda} from "./agenda";

class Controller {
    private agenda: Agenda;
    
    constructor(){
        this.agenda = new Agenda();
    }

    process(line: string){
        cout(line + ":");
        this.exec(line);
    }

    exec(line: string) {
        let ui = line.split(" ");
        let cmd = ui[0];

        if(cmd == "help"){
            cout("" +
                "addCont _nome" + "\n" +
                "addFone _nome _foneid _number" + "\n" +
                "rmFone  _nome _foneid" + "\n" +
                "show"
            );
        }
        if(cmd == "addCont"){//nome
            cout("  " + this.agenda.addContato(new Contato(ui[1])));
        }
        if(cmd == "addFone"){//_nome _foneid _number
            let cont = this.agenda.getContato(ui[1]);
            if(cont)
                cout("  addFone " + cont.addFone(new Fone(ui[2], ui[3])));
            else
                cout("  Contato nao existe");
        }
        if(cmd == "rmFone"){
            let cont = this.agenda.getContato(ui[1]);
            if(cont)
                cout("  rmFone: " + cont.rmFone(ui[2]));
            else
                cout("  Contato nao existe");
        }
        if(cmd == "show"){
            cout("" + this.agenda);
        }
    }
}

let cont = new Controller();
cont.process("addCont joao");
cont.process("addCont marcos");
cont.process("addCont silva");
cont.process("addCont joao");
cont.process("addFone joao oi 32123");
cont.process("addFone joao oi 4");
cont.process("addFone joao tim 123");
cont.process("rmFone joao tim");
cont.process("rmFone valdir oi");
cont.process("show");












