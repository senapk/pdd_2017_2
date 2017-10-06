
class Passageiro {
    private _cpf: string;

	constructor(cpf: string = "") {
		this._cpf = cpf;
	}

	public get cpf(): string {
		return this._cpf;
	}

	public set cpf(value: string) {
		this._cpf = value;
    }
    
    toString(): string {
        return "Cpf: " + this._cpf;
    }
}

class Vagao {
    private _cadeiras: Array<Passageiro | null>;

	constructor(capacidade: number) {
        this._cadeiras = [];
        for(let i = 0; i < capacidade; i++)
            this._cadeiras.push(null);
    }


	public get cadeiras(): Array<Passageiro | null> {
		return this._cadeiras;
	}
    
    search(cpf: string): Passageiro | null {
        for(let indice in this._cadeiras) {
            let pass = this._cadeiras[indice];
            if(pass && (pass.cpf == cpf))
                return pass;
        }
        return null;
    }
    
    getCapacidade(): number {
        return this._cadeiras.length;
    }

    getLotacao(): number {
        let cont = 0;
        for(let cadeira of this._cadeiras)
            if(cadeira)
                cont += 1;
        return cont;
    }

    embarcar(passageiro: Passageiro): boolean {
        for(let indice in this._cadeiras) {
            let pass = this._cadeiras[indice];
            if(!pass) {
                this._cadeiras[indice] = passageiro;
                return true;
            }
        }
        return false;
    }

    desembarcar(cpf: string): Passageiro | null {
        for(let indice in this._cadeiras) {
            let pass = this._cadeiras[indice];
            if(pass && (pass.cpf == cpf)) {
                this._cadeiras[indice] = null;
                return pass;
            }
        }
        return null;
    }
    
    toString(): string {
        let saida = "[ ";
        for(let pass of this._cadeiras) {
            if(pass)
                saida += pass.cpf + " ";
            else
                saida += "- ";
        }
        saida += "]";
        return saida;
    }

    static test() {
        let vagao = new Vagao(4);
        vagao.embarcar(new Passageiro("Rui"));
        vagao.embarcar(new Passageiro("Diana"));
        vagao.embarcar(new Passageiro("Reh"));
        vagao.desembarcar("Rui");
        vagao.embarcar(new Passageiro("Raul"));
        vagao.embarcar(new Passageiro("Nick"));
        vagao.desembarcar("Reh")
        console.log("" + vagao);
    }
}


class Trem {
    private _maxVagoes: number;
    private _vagoes: Array<Vagao>;

	constructor(maxVagoes: number) {
        this._maxVagoes = maxVagoes;
        this._vagoes = [];
    }

    addVagao(vagao: Vagao): boolean {
        if(this._vagoes.length >= this._maxVagoes)
            return false;
        this._vagoes.push(vagao);
        return true;
    }

    embarque(pass: Passageiro): boolean {
        for(let vagao of this._vagoes)
            if(vagao.embarcar(pass))
                return true;
        return false;
    }

    desembarque(idPass: string): Passageiro | null {
        for(let vagao of this._vagoes) {
            let pass = vagao.desembarcar(idPass);    
            if(pass)
                return pass;
        }
        return null;
    }

    search(idPass: string): Passageiro | null {
        for(let vagao of this._vagoes) {
            let pass = vagao.search(idPass);    
            if(pass)
                return pass;
        }
        return null;
    }

    toString(): string {
        let saida = "Trem: ";
        for(let vagao of this._vagoes)
            saida += vagao;
        return saida;
    }
}

class RegistroPassageiros {
    _passageiros: Array<Passageiro>
    constructor(){
        this._passageiros = [];
    }

    addPassageiro(pass: Passageiro): boolean {
        for(let elem of this._passageiros)
            if(elem.cpf == pass.cpf)
                return false;
        this._passageiros.push(pass);
        return true;
    }

    toString() {
        let st = "Vendas\n";
        for(let pass of this._passageiros)
            st += pass + "\n";
        st += "-------\n";
        return st;
    }
}

class Controller {
    private _trem: Trem;
    private _registro: RegistroPassageiros;
    
	constructor() {
        this._trem = new Trem(4);
        this._registro = new RegistroPassageiros();
    }
    
    commandLine(){
        
        if(ui[0] == "embarcar") {
            let pass = new Passageiro(ui[1]);
            if(this._trem.embarque(pass))
                this._registro.addPassageiro(pass);
        }

        if(ui[0] == "desembarcar") {
            if(this._trem.desembarque(ui[1]))
                cout("Desembar")
            else
                cout("Nao existe");
        }
    }
    
	
    
}