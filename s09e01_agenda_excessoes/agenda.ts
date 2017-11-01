import {Fone} from './fone';
import {Contato} from './contato';
import {pdd} from "./pdd";

export class Agenda {
    private m_contatos: Map<string, Contato>;//mapa de contatos
    private m_favoritos: Map<string, Contato>;//mapa de favoritos

    constructor(){
        this.m_contatos = new Map<string, Contato>();
        this.m_favoritos = new Map<string, Contato>();
    }

    addContato(cont: Contato){
        if(this.m_contatos.has(cont.nome))
            throw new Error("Nome ja existe");
        this.m_contatos.set(cont.nome, cont);
    }
    
    hasContact(nome: string): boolean {
        return this.m_contatos.has(nome);
    }

    getContato(nome: string): Contato {
        if(!this.m_contatos.has(nome))
            throw new Error("Nao existe contato com esse nome");
        return this.m_contatos.get(nome);
    }

    rmContato(nome: string){
        if(!this.m_contatos.delete(nome))
            throw new Error("Nao existe contato com esse nome");
        this.m_favoritos.delete(nome);
    }

    favoritar(nome: string) {
        let contato = this.m_contatos.get(nome);
        if(contato.favorited)
            throw new Error("Contato ja esta favoritado");
        this.m_favoritos.set(nome, contato);
        contato.favorited = true;
    }

    desfavoritar(nome: string) {
        let contato = this.m_contatos.get(nome);
        if(!contato.favorited)
            throw new Error("Contato ja eh favorito");
        contato.favorited = false;
        this.m_favoritos.delete(nome);
    }

    toString(): string {
        return pdd.vet2str("Agenda\n", this.contatos, "\n");
    }

    get contatos(): Array<Contato> {
        return pdd.map2vet(this.m_contatos);
    }

    get favoritos(): Array<Contato> {
        return pdd.map2vet(this.m_favoritos);
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
        pdd.cout("" + agenda);
    }
}
