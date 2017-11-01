export class Repository<T> {
    private mapa: Map<string, T>;
    private nomeTipo: string;

    constructor(nomeTipo: string = ""){
        this.mapa = new Map<string, T>();
        this.nomeTipo = nomeTipo;
    }

    add(key: string, t: T) {
        if(this.mapa.has(key))
            throw new Error("" + this.nomeTipo + " " + key + " ja existe");
        this.mapa.set(key, t);
    }


    has(key: string): boolean {
        return this.mapa.has(key);
    }

    rm(key: string) {
        if(!this.mapa.delete(key))
            throw new Error(this.nomeTipo + " " + key + " nao existe");
    }

    get(key: string): T {
        let resp = this.mapa.get(key);
        if(!resp)
            throw new Error(this.nomeTipo + " " + key + " nao existe");
        return resp;
    }

    set(key: string, t: T){
        this.mapa.set(key, t);
    }

    values(): Array<T>{
        let vet = new Array<T>();
        for(let value of this.mapa.values())
            vet.push(value);
        return vet;
    }

    keys(): Array<string>{
        let vet = new Array<string>();
        for(let value of this.mapa.keys())
            vet.push(value);
        return vet;
    }
};