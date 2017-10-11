import {cin, cout} from "./readline";

class Twitter{
    msg: string;
    username: string;
    constructor(msg : string, username : string){
        this.msg = msg;
        this.username = username;
    }
    toString(){
        return "[" + this.username + ": " + this.msg + "]";
    }

}

class User{
    username: string;
    quemEuSigo: Array<User>;
    quemMeSegue: Array<User>;
    timeline: Array<Twitter>;
    constructor(username : string){
        this.username = username;
        this.quemEuSigo = [];
        this.quemMeSegue = [];
        this.timeline = [];
    }

    follow(user: User){
        this.quemEuSigo.push(user);
        user.quemMeSegue.push(this);
        
    }

    twitter(msg: string){
        let tw = new Twitter(this.username, msg);
        for (let seguidor of this.quemMeSegue){
            seguidor.timeline.push(tw);
        }
    }
    getTimeline(): string{
        let st  = this.username + "\n";
        for(let twit of this.timeline){
            st += twit + "\n";
        }
        return st;

    }
}

class Manager{
    usuarios: Map<string, User>;
    constructor(){
        this.usuarios = new Map<string, User>();
    }


    static main(){
        let manager = new Manager();
        let st = "";
        while(st != "fim"){
            let ui = cin("help: ").split(" ");
            let cmd = ui[0];

            if(cmd == "addUser"){
                manager.usuarios.set(ui[1], new User(ui[1]));
            }

            if(cmd == "follow"){
                let eu = manager.usuarios.get(ui[1]);
                let outro = manager.usuarios.get(ui[2]);
                if(eu && outro)
                    eu.follow(outro);
            }
            if(cmd == "timeline"){
                let eu = manager.usuarios.get(ui[1]);
                if(eu)
                    cout(eu.getTimeline())
            }
            if(cmd == "twitter"){
                let eu = manager.usuarios.get(ui[1]);
                if(eu)
                    eu.twitter(ui.slice(2).join(" "));
            }
        }
    }
}

Manager.main();


/*
addUser david
addUser rex
addUser tina

follow david rex
follow davi tina

twitter rex hoje estou triste
twitter tina ganhei chocolate
twitter rex partiu ru!

timeline david
  rex: hoje estou triste
  tina: ganhei chocolate
  rex: partiu ru!















*/