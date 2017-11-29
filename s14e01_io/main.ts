import {poo} from "./poo_aux";

class Calculadora {
    bateria: number;
    static readonly BATERIA_DEFAULT = 2;

    constructor(bateria = Calculadora.BATERIA_DEFAULT){
        this.bateria = bateria;
    }

    soma(a: number, b: number): number {
        if(this.bateria == 0)
            throw new Error("Bateria acabou");
        
        this.bateria -= 1;
        return a + b;
    }

    recarga(carga: number){
        this.bateria += carga;
    }
}


class Controller{
    calc: Calculadora;

    constructor(){
        this.calc = new Calculadora();
    }

    process(line: string): string{
        let ui = line.split(" ");
        let cmd = ui[0];

        if(cmd == "soma"){//a  b
            return "" + this.calc.soma(Number(ui[1]), Number(ui[2]));
        }
        else if(cmd == "recarga"){//carga
            this.calc.recarga(Number(ui[1]));
        }
        else if(cmd == "mostrar"){
            return "" + this.calc.bateria;
        }
        else
            return "comando invalido";
        return "done";
    }

    commandLine(){
        while(true){
            let line = poo.cin(">>");
            try{
                poo.cout(this.process(line));
            }catch(e){
                poo.cout(e.message);
            }
        }
    }
}

let cont = new Controller();
cont.commandLine();













