import {Cliente, Fone} from "./cliente";

declare function require(name: string): any;
var readline = require('readline-sync');

function cin(text: string): string{
    return readline.question(text);
}

function cout(text: string){
    return console.log(text);
}


let mapa: Map<string, Cliente> = new Map<string, Cliente>();
cout("davi existe?: " + mapa.has("david"));
mapa.set("david", new Cliente("David", new Fone("oi", "344")));
cout("davi existe?: " + mapa.has("david"));

mapa.set("joao", new Cliente("joao", new Fone("tim", "432")));
mapa.set("ze", new Cliente("ze", new Fone("claro", "567")));


cout("" + mapa.delete("ze"));
for(let key of mapa.keys())
    cout("" + key);

for(let value of mapa.values())
    cout("" + value);

let array = new Array<Cliente>();

array.push(new Cliente("David", new Fone("a", "b")));
array.push(new Cliente("ze", new Fone("a", "b")));
array.push(new Cliente("joao", new Fone("a", "b")));



