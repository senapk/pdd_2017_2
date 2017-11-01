
class Repository<T> {
    private mapa: Map<string, T>;
    private typename: string;

    constructor(typename: string = "") {
        this.mapa = new Map();
        this.typename = typename;
    }

    rm(key: string) {
        if (!this.mapa.delete(key))
            throw new Error(this.typename + " " + key + " nao existe");
    }
    
    //Cŕeditos Especiais: Alê: ta iterado?
    get values(): Array<T> {
        let array = new Array<T>();
        for (let elem of this.mapa.values())
            array.push(elem);
        return array;
    }
    get keys(): Array<string> {
        let array = new Array<string>();
        for (let elem of this.mapa.keys())
            array.push(elem);
        return array;
    }
    has(key: string) {
        return this.mapa.has(key);
    }
    get(key: string) {
        let elem = this.mapa.get(key);
        if (!elem)
            throw new Error(this.typename + " " + key + " nao existe");
        return elem;
    }
    //adiciona se nao existir
    add(key: string, t: T) {
        if (this.mapa.has(key))
            throw new Error(this.typename + " " + key + " ja existe");
        this.mapa.set(key, t);
    }

    sort(){
        this.mapa = new Map([...this.mapa.entries()].sort());
    }

    toString(){
        return "Valores:  \n  " + this.values.join("\n  ");
    }
}

enum Tipo {Pop, Coracao, Veneno};

class Pirulito {
    nome: string;
    tipo: Tipo;
    isChupado: boolean;
    constructor(nome: string, tipo: Tipo, isChupado: boolean){
        this.nome = nome;
        this.tipo = tipo;
        this.isChupado = isChupado;
    }
    toString(): string {
        return "" + this.nome + " " + this.tipo + " " +  
               (this.isChupado? "verdade": "mintira");
    }
}

let array = new Array<Pirulito>();

let repirulito = new Repository<Pirulito>("Pirulito");
repirulito.add("theBest", new Pirulito("theBest", Tipo.Pop, false));
repirulito.add("worse", new Pirulito("worse", Tipo.Veneno, true));
repirulito.add("love", new Pirulito("love", Tipo.Coracao, true));

for(let elem of repirulito.values) {
    console.log("" + elem);
}

console.log("" + repirulito);
repirulito.sort();
console.log("" + repirulito);












