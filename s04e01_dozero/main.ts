declare function require(name: string): any;
var readline = require('readline-sync');

function cin(texto: string): string{
    return readline.question(texto);
}

function cout(texto: string){
    console.log(texto);
}

class Segredo{
    private _nivel: number;
    private _texto: string;

    constructor(nivel: number = 1, texto: string = "Comi fruta E doce no Ru"){
        this._nivel = nivel;
        this._texto = texto;
    }


	public get nivel(): number {
        cout("lendo nivel");
		return this._nivel;
	}

	public set nivel(value: number) {
        if(value < 1 || value > 10){
            cout("tentado atribuir valor" + value);
            cout("nivel deve ser entre 1 e 10");
        }
        else    
            this._nivel = value;
    }
    

	public get texto(): string {
		return this._texto;
	}

	public set texto(value: string) {
        if(value == "")
            this._texto = "Digite seu segredo";
        else
            this._texto = value;
	}
    
    public toString(): string{
        return "Nivel: " + this._nivel + " Texto: " + this._texto;
    }
    
}

function main(){
    let seg: Segredo = new Segredo();
    seg.nivel = 5;
    cout("" + seg.nivel);
    seg.texto = "Tiro meleca do nariz";
    cout("" + seg);
}

main()


