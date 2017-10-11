import {Fone} from './fone';
import {Contato} from './contato';
import {cin, cout} from "./readline";
import {Agenda} from "./agenda";

class Controller {
    private agenda: Agenda;
    
    constructor(){
        this.agenda = new Agenda();
    }

    process(line: string) {
        let ui = line.split(" ");
        let cmd = ui[0];

            if(cmd == "help"){
                cout("" +
                    "addCont _nome" + "\n" +
                    "addFone _nome _foneid _number" + "\n" +
                    "rmFone  _nome _foneid" + "\n" +
                    "show" + "\n" + 
                    "fim"
                );
            }
            if(cmd == "addCont"){//nome
                this.agenda.addContato(new Contato(ui[1]));
                cout("sucesso");
            }
            if(cmd == "addFone"){//_nome _foneid _number
                this.agenda.getContato(ui[1]).addFone(new Fone(ui[2], ui[3]));
                cout("sucesso");
            }
            if(cmd == "rmFone"){
                let cont = this.agenda.getContato(ui[1]).rmFone(ui[2]);
                cout("sucesso");
            }
            if(cmd == "show"){
                cout("" + this.agenda);
            }
        
    }
    
    static interactive(){
        let cont = new Controller();

        let line = "";
        while(line.split(" ")[0] != "fim"){
            line = cin("(help): ");
            cout(">> " + line);
            
            try {
                cont.process(line);
            }catch(e){
                cout("" + e.message)
            }
        }
    }

}


Controller.interactive();

/*

addCont david
addCont rui
addCont rex
addFone david oi 35
addFone david casa 32
show










*/







