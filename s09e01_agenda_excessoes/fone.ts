export class Fone {
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