
class Fone {
    private _foneid: string;
    private _number: string;

    constructor(id: string = "", number: string = "") {
        this._foneid = id;
        this._number = number;
    }

	public get foneid(): string {
		return this._foneid;
	}

	public set foneid(value: string) {
		this._foneid = value;
	}

	public get number(): string {
		return this._number;
	}

	public set number(value: string) {
		this._number = value;
    }
    
    toString(): string {
        return "[" + this._foneid + " " + this._number + "]";
    }   
}

class Contato {
    private _fones: Array<Fone>;
    private _favorited: boolean;
    
    constructor(private _nome: string = "") {
        this._fones = [];
    }


	public get favorited(): boolean {
		return this._favorited;
	}

	public set favorited(value: boolean) {
		this._favorited = value;
	}
    


	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public get fones(): Array<Fone> {
		return this._fones;
	}

    addFone(fone: Fone): boolean {
        for(let elem of this._fones)
            if(elem.foneid == fone.foneid)
                return false;
        this._fones.push(fone);
        return true;
    }

    rmFone(foneid: string): boolean {
        for(let i = 0; i < this._fones.length; i++){
            if(this._fones[i].foneid == foneid){
                this._fones.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    
    toString(): string {
        let saida = "";
        saida += (this._favorited) ? "@" : "-";
        saida += " " + this._nome;
        for(let elem of this._fones)
            saida += elem;
        return saida;
    }
}