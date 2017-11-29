import {poo} from "./poo_aux";
import {Repository} from "./poo_repository";
import {Controller} from "./poo_controller";


function randMM(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

class Cavalo {
    _nome: string;

    protected _vel: number;
    protected _pos: number;
    
    constructor(nome: string = ""){
        this._nome = nome;
        this._vel = 0;
        this._pos = 0;
    }

    correr(){
        this._vel += randMM(-1, 1);
        this._pos += this._vel;
    }

    interagir(pareo: Cavalo[]){
        
    }

    get pos(): number{
        return this._pos;
    }

    ganhou(dist: number): boolean{
        return (this._pos > dist);
    }

    public get vel(): number {
		return this._vel;
	}

	public set vel(value: number) {
		this._vel = value;
    }
    toString(): string{
        return ":pos: " + Math.floor(this.pos) + " vel: " + Math.floor(this._vel) + " " + this._nome;
    }
}

class CavaloDisposto extends Cavalo{
    disposicao: number;

    constructor(nome: string, disposicao = 0){
        super(nome);
        this.disposicao = disposicao;
    }

    correr(){
        this.disposicao -= 1;
        super.correr();
        this._pos += this.disposicao;
    }

    toString(){
        return super.toString() + " Disposto n: " + this.disposicao; 
    }
}

class CavaloManco extends Cavalo {
    private isManco: boolean;
    private chance: number;
    constructor(nome: string, chance: number){
        super(nome);
        this.isManco = false;
        this.chance = chance;
    }
    curar(){
        if(this.isManco)
            this.isManco = false;
        this._vel += 10;
    }
    correr(){
        if(randMM(0, 100) < this.chance)
            this.isManco = true;
        if(!this.isManco)
            super.correr();
    }

    toString(){
        return super.toString() + " Manco:" + this.isManco;
    }
}


class CavaloTeleporter extends CavaloManco{
    limite: number;
    constructor(nome: string, limite: number){
        super(nome, 70);
        this.limite = limite;
    }
    
    correr(){
        super.correr();
        this._pos = randMM(0, this.limite);
    }

    toString(){
        return super.toString() + " Teleporter";
    }
}



class CavaloPegasus extends Cavalo{
    constructor(nome = ""){
        super(nome);
    }

    interagir(pareo: Cavalo[]){
        let primeiro = true;

        for(let cav of pareo){
            if(this.pos < cav.pos){
                primeiro = false;
                break;
            }
        }
        if(primeiro)
            this._vel -= 5;
        
        let ultimo = true;
        for(let cav of pareo){
            if(this.pos > cav.pos){
                ultimo = false;
                break;
            }
        }
        if(ultimo)
            this._vel += 5;
    }
    toString(){
        return super.toString() + " Pegasus";
    }
}

class CavaloDoMal extends Cavalo{

    constructor(nome = ""){
        super(nome);
    }

    interagir(pareo: Cavalo[]){
        for(let cav of pareo)
            if(cav._nome != this._nome)
                if(randMM(0, 100) < 10){
                    cav._nome += "morre desgraça! ";
                    cav.vel = 0;
                }
    }
} 



class Corrida {
    pareo: Array<Cavalo>;
    static readonly DIST = 200; 
    constructor(){
        this.pareo = [new CavaloDisposto  ("MyLittlePoney", 6), 
                      new CavaloTeleporter("AppleJack    ", Corrida.DIST * 1.01), 
                      new CavaloManco(     "PoneiMaldito ", 10), 
                      new CavaloPegasus(   "BoJack       "), 
                      new CavaloDoMal(     "Cav de Fogo  ")];

        for(let cav of this.pareo)
            cav.vel = randMM(7, 10);
    }

    fogo(){
        while(true){
            for(let cav of this.pareo){
                if(cav.ganhou(Corrida.DIST)){
                    poo.cout(cav._nome + " ganhou");
                    return;
                }
                cav.interagir(this.pareo);
                cav.correr();
                poo.cout("" + cav);
            }
            
            poo.cin("...");
            for(let i = 0; i < 30; i++)
                poo.cout("\n");
        }
    }
}

let corrida = new Corrida();
corrida.fogo();






addProf  david C
addAluno mauro si
addTerc  jose  colgate

class Pessoa{
    id: string;
}

class Prof extends Pessoa{
    nivel: string;
}

class Aluno extends Pessoa{
    curso: string;
    semestre: number;
}

class Terc extends Pessoa{
    empresa: string;
}

r_pes = new Repository<Pessoa>();
r_pes.add(new Prof())
r_pes.add(new Aluno())