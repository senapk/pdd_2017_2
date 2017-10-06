declare function require(name: string): any;
var readline = require('readline-sync');

function cin(text: string): string{
    return readline.question(text);
}

function cout(text: string){
    return console.log(text);
}

import {Fone} from "./fone";
import {Contato} from "./contato";

class Agenda {
    private _contatos: Map<string, Contato>;
    private _favoritos: Map<string, Contato>;
    constructor(){
        this._contatos = new Map<string, Contato>();
        this._favoritos = new Map<string, Contato>();
        
    }

    addCont(cont: Contato): boolean{
        if(this._contatos.has(cont.nome))
            return false;
        this._contatos.set(cont.nome, cont);
        return true;
    }

    getCont(nome: string): Contato | null {
        if(!this._contatos.has(nome))
            return null;
        return this._contatos.get(nome);
    }

    rmCont(nome: string): boolean{
        if(this._contatos.delete(nome)){
            this._favoritos.delete(nome);
            return true;
        }
        return false;
    }
    favoritar(nome: string): boolean {
        if(this._contatos.has(nome)){
            let contato = this._contatos.get(nome);
            if(!contato.favorited){
                this._favoritos.set(nome, contato);
                contato.favorited = true;
                return true;
            }
        }
        return false;
    }
    desfavoritar(nome: string): boolean {
        if(this._contatos.has(nome)){
            let contato = this._contatos.get(nome);
            if(contato.favorited){
                contato.favorited = false;
                this._favoritos.delete(nome);
                return true;
            }
        }
        return false;
    }
}




