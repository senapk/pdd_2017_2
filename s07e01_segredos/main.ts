declare function require(name: string): any;
var readline = require('readline-sync');

function cin(text: string): string{
    return readline.question(text);
}

function cout(text: string){
    return console.log(text);
}

/* function cin(text: string = ""): string {
    let saida = prompt(text);
    if(saida)
        return saida;
    return "";
}

function cout(text: string) {
    alert(text);
} */


class Segredo{
    private _nivel: number = 0;
    private _texto: string = "";
    
    static readonly minNivel : number = 1;
    static readonly maxNivel: number = 10;

    constructor (nivel: number = Segredo.minNivel, texto: string = "Escreva seu segredo") {
        this.texto = texto;
        this.nivel = nivel;
    }
    
    public get nivel(): number {
		return this._nivel;
	}

	public set nivel(value: number) {
        if((value < Segredo.minNivel) || (value > Segredo.maxNivel)){
            cout("nivel deve ser entre " + Segredo.minNivel + " e " + Segredo.maxNivel + "\n");
            return;
        }
        this._nivel = value;
	}

	public get texto(): string {
		return this._texto;
	}

	public set texto(value: string) {
        if(value == "")
            cout("Segredo não pode ser vazio");
		this._texto = value;
	}

    toString(){
        return "[Nivel: " + this.nivel + ", Texto: " + this.texto + "]";
    }
}



class Usuario {

    private _username: string;
    private _password: string;
    private _isAdmin: boolean = false;
    private _segredo: Segredo = new Segredo();
    
    constructor(username: string = "", password: string = ""){
        this._username = username;
        this._password = password;
    }

	public get username(): string  {
		return this._username;
	}

	public changePassword(oldPass: string, newPass: string ): boolean {
        if(this._password != oldPass)
            return false;
        this._password = newPass;
        return true;
	}
    
    public matchPassword(password: string): boolean {
        return (password == this._password);

    }

	public get isAdmin(): boolean {
		return this._isAdmin;
	}

	public set isAdmin(value: boolean) {
		this._isAdmin = value;
	}

    public set segredo(value: Segredo) {
		this._segredo = value;
	}
    
    public get segredo(): Segredo  {
		return this._segredo;
	}
    
    toString(): string{
        return "Nome: " + this._username + "\nSegredo: " + this._segredo;
    }
}

class Sistema{
    private _usuarios: Usuario[];

    constructor(){
        this._usuarios = [];
        this._usuarios.push(new Usuario("admin", "admin"));
    }

    addUser(usuario: Usuario): boolean{
        for(let elem of this._usuarios)
            if(elem.username == usuario.username)
                return false;
        this._usuarios.push(usuario);
        return true;
    }

    rmUser(username: string): boolean {
        for(let ind in this._usuarios)
            if(this._usuarios[ind].username == username){
                this._usuarios.splice(Number(ind), 1);
                return true;
            }
        return true;
    }

    getUser(username: string, password: string): Usuario | undefined {
        for(let elem of this._usuarios)
            if(elem.username == username && elem.matchPassword(password))
                return elem;
        return undefined;
    }

    getUsernames(): string[] {
        //let comp = function(one: string, two: string):

        let usernames : string[] = [];
        for(let elem of this._usuarios)
            usernames.push(elem.username);
        usernames.sort();

        return usernames;
    }

    sortear(): string{
        let ind : number = Math.floor(Math.random() * this._usuarios.length);
        return this._usuarios[ind].username;
    }

    toString(): string {
        let comp = function(a: Usuario, b: Usuario): number {
            return -(a.segredo.nivel - b.segredo.nivel);
        };
        this._usuarios.sort(comp);

        let st: string = "Sistema ordenado por nivel:" + "\n";
        for(let elem of this._usuarios)
            st += elem + "\n";
        
        return st;
    }
}


function commandLine(sistema: Sistema): Sistema {
    let usuario: Usuario | undefined = undefined;
    let ui: string[] = [""];
    
    while(ui[0] != "fim"){
        ui = cin("Digite comando ou help: ").split(" ");
        if(ui[0] == "help"){
            cout(             
                "\nCOMANDOS GERAIS" + "\n\n" +                                   
                "iniciar" + "\n" +                    
                "addUser _username _password" + "\n" +
                "showUsernames" + "\n" +
                "login _username _password" + "\n" + 
                "sortear" + "\n" +                     

                "\nCOMANDOS LOGADO" + "\n\n" +                                                       
                "logout" + "\n" +
                "rmAccount _password" + "\n" +
                "show" + "\n" +
                "setSegredo _nivel _segredo" + "\n" +
                "changePass _oldPass _newPass" + "\n" +                    
                "showAll" + "\n"
            );
        }
        else if(ui[0] == "iniciar"){
            sistema = new Sistema();
            cout("Sistema iniciado");
        }
        else if(ui[0] == "addUser"){
            cout((sistema.addUser(new Usuario(ui[1], ui[2]))?
                "sucesso\n" : "username ja existe\n"));
        }
        else if(ui[0] == "showUsernames"){
            cout("Usernames\n" + sistema.getUsernames().join("\n"));
        }
        else if(ui[0] == "login"){
            usuario = sistema.getUser(ui[1], ui[2]);
            cout((usuario ? "Sucesso" : "Erro") + "\n");
        }
        else if(ui[0] == "sortear"){
            cout("Sorteado: " + sistema.sortear() + "\n");
        }
        else if(usuario == undefined){
            cout("ninguem logado");
            continue;
        }
        else if(ui[0] == "logout"){
            usuario = undefined;
            cout("Logout efetuado\n");
        }
        else if(ui[0] == "rmAccount"){
            if(usuario.matchPassword(ui[1])){
                sistema.rmUser(usuario.username);
                cout("Usuario removido\n");
            }else{
                cout("password invalido\n");
            }
        }
        else if(ui[0] == "show"){
            cout("" + usuario);
        }
        else if(ui[0] == "setSegredo"){
            usuario.segredo.texto = ui.slice(2).join(" ");
            usuario.segredo.nivel = Number(ui[1]);
            cout("segredo salvo");
        }
        else if(ui[0] == "changePass"){
            cout((usuario.changePassword(ui[1], ui[2]))?
                "sucesso\n" : "erro\n"
            );
        }
        else if(ui[0] == "rmAccount"){
            if(!usuario.matchPassword(ui[1]))
                continue;
            sistema.rmUser(usuario.username);
        }
        else if(ui[0] == "showAll"){
            cout((usuario.username == "admin")?
                ("" + sistema):("Usuario nao autorizado"));
        }
    }
    return sistema;
}


function inicializar(sistema: Sistema): Sistema{
    cout("" + sistema.addUser(new Usuario("mario", "pmario")));
    cout("" + sistema.addUser(new Usuario("ivo", "pivo")));
    cout("" + !sistema.addUser(new Usuario("mario", "armario")));
    let mario: Usuario | undefined = sistema.getUser("mario", "pmario");
    cout("" + !mario);
    if(mario)
        mario.segredo = new Segredo(4, "assaltei a geladeira de madrugada");

    let user2: Usuario | undefined = sistema.getUser("mario", "naosei");//senha errada
    cout("" + !user2);

    let ivo: Usuario | undefined = sistema.getUser("ivo", "pivo");
    if(ivo)
        ivo.segredo = new Segredo(3, "comi doce E fruta no RU");


    let admin = sistema.getUser("admin", "admin");
    if(admin)
        admin.segredo = new Segredo(1, "eu reprovei em etica");
    
    return sistema;
}

