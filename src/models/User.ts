import { v4 as createUuid } from "uuid";
import Tweets from "./Tweets";
import users from "../database/user";


export class User{
    private id: string;
    private nome: string;
    private email: string;
    public username: string;
    private senha: string;
    public seguir: string[];

    constructor(nome:string, email:string,username: string, senha:string) {
        this.id = createUuid();
        this.nome = nome;
        this.email = email;
        this.username = username;
        this.senha = senha;
        this.seguir = [];
    }
    
    public getID() : string { 
        return this.id;
    }

    public getDetails(){
        
        return {
           id: this.id,
            nome: this.nome,
            email: this.email,
            username: this.username,
            seguir: this.getFollow()
        }
      
    }

    public seguirUser(user: User){
    
        if (user !== this && !this.seguir.includes(user.getID())) {
            this.seguir.push(user.getID());
            console.log(`${this.nome} começou a seguir ${user.nome}`);
        } else {
            console.log("Não é possível seguir este usuário.");
        }

    }

    public getFollow(){
        return this.seguir.join('')
    }


}
