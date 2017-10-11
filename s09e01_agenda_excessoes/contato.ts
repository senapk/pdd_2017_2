import {Fone} from "./fone";

export class Contato {
    readonly nome: string;
    private _fones: Array<Fone>;
    private _favorited: boolean;
    
    constructor(nome: string = "") {
        this.nome = nome;
        this._fones = [];
    }

	public get favorited(): boolean {
		return this._favorited;
	}

	public set favorited(value: boolean) {
		this._favorited = value;
	}

	public get fones(): Array<Fone> {
		return this._fones;
	}

    addFone(fone: Fone) {
        for(let elem of this._fones)
            if(elem.foneid == fone.foneid)
                throw new Error("Id duplicado");
        this._fones.push(fone);
    }

    rmFone(foneid: string) {
        for(let i = 0; i < this._fones.length; i++)
            if(this._fones[i].foneid == foneid)
                this._fones.splice(i, 1);
        throw new Error("Id nao existe");
    }
    
    toString(): string {
        let saida = "";
        saida += (this._favorited) ? "@" : "-";
        saida += " " + this.nome;
        for(let elem of this._fones)
            saida += elem;
        return saida;
    }
}