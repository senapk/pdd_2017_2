
class Operacao{
    public valor : number;
    constructor(public descricao : string = "", valor : number = 0){
        this.valor = valor;
    }
}

class Conta{
    public saldo : number;
    public id : number;
    public extrato : Operacao[];

    constructor(id : number = 0){
        //TODAS as variaveis precisam ser inicializadas, TODAS
        this.id = id;
        this.saldo = 0;
        this.extrato = [];
    }

    saque(value : number) : boolean{
        if(value <= 0) 
            return false;
        
        if(value > this.saldo)
            return false;
        this.saldo -= value;
        this.extrato.push(new Operacao("saque", -value));
        return true;
    }

    deposito(value : number) : boolean{
        if(value < 0)
            return false;
        this.saldo += value;
        this.extrato.push(new Operacao("deposito", value));
        return true;
    }
}

function intUsuario(conta : Conta):void{

    let op : string[] = [""];
    while(op[0] != "fim"){
        op = prompt("Digite comando ou help").split(" ")

        if(op[0] == "help"){
            alert("saldo\n" + 
                  "extrato\n" + 
                  "saque $valor\n" + 
                  "deposito $valor\n" + 
                  "fim\n");
        }

        if(op[0] == "saldo"){
            alert("Conta " + conta.id + 
                  ", Saldo: " + conta.saldo);
        }
        if(op[0] == "extrato"){
            //criando uma string para guardar os valores de saída
            let saida : string = "Extrato: \n";
            //percorrendo todos os valores
            for(let oper of conta.extrato)
                saida += "[" + oper.descricao + ", " + oper.valor + "]\n";
            alert(saida);
        }
        if(op[0] == "saque"){
            if(conta.saque(Number(op[1])))
                alert("ok");
            else
                alert("erro");
        }
    }
}

function inicializar(conta : Conta){
    conta.deposito(50);
    conta.deposito(100);
    conta.saque(30);
    conta.deposito(20);
}

function main(){
    let conta : Conta = new Conta();
    inicializar(conta);
    intUsuario(conta);
}

main()
