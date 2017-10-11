import {Fone} from './fone';
import {Contato} from './contato';
import {cin, cout} from "./readline";

export class Agenda {
    private _contatos: Map<string, Contato>;
    private _favoritos: Map<string, Contato>;

    constructor(){
        this._contatos = new Map<string, Contato>();
        this._favoritos = new Map<string, Contato>();
    }

    addContato(cont: Contato){
        if(this._contatos.has(cont.nome))
            throw new Error("Nome ja existe");
        this._contatos.set(cont.nome, cont);
    }
    
    hasContact(nome: string): boolean {
        return this._contatos.has(nome);
    }
    getContato(nome: string): Contato {
        if(!this._contatos.has(nome))
            throw new Error("Nao existe contato com esse nome");
        return this._contatos.get(nome);
    }

    rmContato(nome: string){
        if(!this._contatos.delete(nome))
            throw new Error("Nao existe contato com esse nome");
        this._favoritos.delete(nome);
    }

    favoritar(nome: string) {
        let contato = this._contatos.get(nome);
        if(contato.favorited)
            throw new Error("Contato ja esta favoritado");
        this._favoritos.set(nome, contato);
        contato.favorited = true;
    }

    desfavoritar(nome: string) {
        let contato = this._contatos.get(nome);
        if(!contato.favorited)
            throw new Error("Contato ja eh favorito");
        contato.favorited = false;
        this._favoritos.delete(nome);
    }

    toString(): string {
        let saida = "Contatos:\n";
        saida += this.getContatos();
        return saida;
    }

    getContatos(): string {
        let saida = "";
        for(let contato of this._contatos.values())
            saida += contato + "\n";
        return saida;
    }

    getFavoritos(): string {
        let saida = "";
        for(let contato of this._favoritos.values())
            saida += contato + "\n";
        return saida;
    }

    static test() {
        let agenda = new Agenda();
        let joao = new Contato("Joao");
        joao.addFone(new Fone("oi", "88"));
        joao.addFone(new Fone("tim", "99"));
        agenda.addContato(joao);
        
        agenda.addContato(new Contato("Rex"));
        let rex = agenda.getContato("Rex");
        if(rex)//testando se nao eh nulo
            rex.addFone(new Fone("casa", "32"));
        
        agenda.addContato(new Contato("Silva"));
        agenda.favoritar("Silva");
        agenda.favoritar("Rex");
        cout("" + agenda);
    }
}
