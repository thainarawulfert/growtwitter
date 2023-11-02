import {v4 as createUuid} from "uuid";
import users from "../database/user";
import user from "../database/user";
import Replay from "./Replay";

class Tweets {
  private ID: string;
  public conteudo: string;
  public tipo: string;
  private userId: string;
  public likes: string[];
  public replay: Replay[];

  constructor(userid: string, conteudo: string, tipo: string) {
    this.ID = createUuid();
    this.conteudo = conteudo;
    this.tipo = tipo;
    this.userId = this.getUserId(userid);
    this.likes = [];
    this.replay = [];
  }

  public getUserId(userId: string) {
    const buscarId = users.find((userInd) => userInd.getID() === userId);

    if (buscarId) {
      return (this.userId = buscarId.getID());
    } else {
      throw new Error("Usuario nao encontrado");
    }
  }

  public likesTweets(userId: string) {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
      for (const users of user) {
        if (users.getID() === userId) {
          console.log('like no tweet!');
        }
      }
    }
  }

  public deslikeTweet(userId: string) {
    const index = this.likes.indexOf(userId);
    if (index !== -1) {
      this.likes.splice(index, 1);
      for (const user of users) {
        if (user.getID() === userId) {
          console.log('deslike no tweet!');
        }
      }
    } else {
      console.log('O usuário não deu like neste tweet.');
    }
  }
  
  public getDetailsTweet(){
    return {id: this.ID,conteudo: this.conteudo,tipo: this.tipo, user: this.userId, likes: this.likes}
  }



  public addReplay(replay: Replay){
    this.replay.push(replay);
    return replay;
  }
}
    





export default Tweets;