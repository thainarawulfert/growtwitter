import users from "../database/user";

class UserValid {
    public validateUser(username: string){
        const userExist = users.some(usuario => usuario.username === username);
      
        if (userExist){
            throw new Error("Usuario ja cadastrado")
        }else {
          return true;
        }
    }
}

export default new UserValid();

