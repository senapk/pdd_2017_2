
/* class Divida{
    constructor(public nome: string, 
                public value: number){}
}

let dividas = new Array<Divida>();
dividas.push(new Divida("marcia", 2.5));
dividas.push(new Divida("gvt", 140)); 

//sera que estou devendo a gvt
for(let divida of dividas)
    if(divida.nome == "gvt")
        console.log("sim")
    
//paguei a gvt
for(let ind in dividas)
    if(dividas[ind].nome == "gvt")
        dividas.splice(Number(ind), 1); */

let dividas = new Map<string, number>();
dividas.set("gvt", 140);
dividas.set("marcia", 2.50);
dividas.set("aluguel", 200);

if(dividas.has("gvt"))
    console.log(dividas.get("gvt"));

for(let key of dividas.keys())
    console.log("" + key + ": " + dividas.get(key));//gvt marcia

for(let value of dividas.values())
    console.log(value);//140 2.50

dividas.delete("gvt");



