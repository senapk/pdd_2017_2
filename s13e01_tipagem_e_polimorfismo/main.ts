Animal{
    nome
    especie
}

Felino extends Animal{
    isDomestico
}

Passaro extends Animal{
    cor
}

interface Bipede{
     
}








class Vagao{
    embarcar(emb: Embarcavel): boolean;

}

enum Tipo{CAT, DOG, HABBIT};

class Animal implements Comparable{
    pos: number;
    tipo: Tipo;
    constructor(pos = 0){
        this.pos = pos;
    }
    int compareTo(other: Animal){
        return this.pos - other.pos;
    }
}

class Cat extends Animal{
    constructor(pos = 0){
        super(pos);
        this.tipo = Tipo.CAT;
    }
}

class Dog extends Animal{
    constructor(pos = 0){
        super(pos);
    }
}

interface HasPos{
    pos: number;
}

class Robo implements HasPos{
    x: number;
    pos: number;
    constructor(x = 0){
        this.x = x;
    }
}

function andar(coisa: HasPos){
    let gato:Cat; 

    if(coisa instanceof Cat){
        gato = coisa;
        fazerChurrasco(gato);
    }
    coisa.pos += 1;
}

let raul = new Dog(4);
andar(raul);
console.log(raul.pos); //5

let chaninha = new Cat(7);
andar(chaninha);
console.log(chaninha.pos); //8

let cop = new Robo(9);

let to_com_sorte = false;
if(to_com_sorte)
    andar(raul);
else
    andar(cop);

console.log(raul.pos); //6
console.log(cop.x);

interface isComparable<T>{
    compareTo(t: T);
}

function ordenar(array: Array<isComparable>){
    for(let i = 0; i < array.length; i++){
        let imenor = i;
        let j = i;
        for(; j < array.length; j++){
            if(array[j].compareTo(array[imenor]) < 0)
                imenor = j;
        }
        let aux = array[i];
        array[i]= array[j];
        array[j]= aux;
    }
}

