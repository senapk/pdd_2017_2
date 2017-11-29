import {poo} from "./poo_aux";
import {Repository} from "./poo_repository";
import {Controller} from "./poo_controller";

class Pessoa{
    name: string;
    constructor(id = ""){
        this.name = id;
    }
    toString(){
        return "Nome: " + this.name;
    }
}

class Prof extends Pessoa{
    nivel: string;
    constructor(name = "", nivel = ""){
        super(name);
        this.nivel = nivel;
    }
    toString(){
        return "Prof " + super.toString + " nivel " + this.nivel;
    }
}

interface HasName{
    name: string;
}



let r_pes = new Repository<Pessoa>();
r_pes.add("Marcos", new Pessoa("Marcos"));
r_pes.add("Dave", new Prof("Dave", "C"));

poo.cout("" + (r_pes.get("Dave") instanceof Pessoa));
poo.cout("" + (r_pes.get("Dave") instanceof Prof));
poo.cout("" + (r_pes.get("Marcos") instanceof Pessoa));
poo.cout("" + (r_pes.get("Marcos") instanceof Prof));
