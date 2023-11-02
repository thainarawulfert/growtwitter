import tweets from "../database/tweets";
import users from "../database/user";
import userValid from "../middleware/userValid";
import {User} from "../models/User";

class UserController{
    public cadastrarUser(nome:string, email:string, username:string, password:string): User | null{

        try{
            const userExist = userValid.validateUser(username);
            if(userExist){
                const userAdd = new User(nome ,email ,username , password)
                users.push(userAdd);
                console.log("Usuário Cadastrado");
                return userAdd;
            } else {
                return null
            }
        }catch(error:any){
            return null
        }

        
    }

    public userFollow (userF: string, userFollow:string){
      const userSeguidor = users.find(user => user.getID() === userF)
      const userSeguido = users.find(user => user.getID() === userFollow)

      if (userSeguidor && userSeguido) {
        userSeguidor.seguirUser(userSeguido);
    } else {
        console.log("Usuário não encontrado.");
    }
    }
}




export default new UserController()