
export class Fone {
    constructor(public readonly id: string, public numero: string){
    }

    toString(): string{
        return "" + this.id + " " + this.numero;
    }
}

export class Cliente {
    constructor(public readonly nome: string, public fone: Fone){
    }
    toString(): string {
        return "" + this.nome + " " + this.fone;
    }
}
