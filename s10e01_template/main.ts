
class Repositorio<T> {
    private mapa: Map<string, T>;
    private typename: string;

    constructor(typename: string = "") {
        this.mapa = new Map();
        this.typename = typename;
    }
    rm(key: string) {
        if (!this.mapa.delete(key))
            throw this.typename + " " + key + " nao existe";
    }
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
    get(key: string) {
        let elem = this.mapa.get(key);
        if (!elem)
            throw this.typename + " " + key + " nao existe";
        return elem;
    }
    add(key: string, t: T) {
        if (this.mapa.has(key))
            throw this.typename + " " + key + " ja existe";
        this.mapa.set(key, t);
    }
}
let rnum = new Repositorio("numero");
rnum.add("1", 1);
rnum.add("2", 2);
rnum.add("2", 22);
