import tweets from "../database/tweets"
import users from "../database/user"
import Replay from "../models/Replay"
import Tweets from "../models/Tweets"

class TweetsController {
    public newTweet(id:string, conteudo:string, tipo: string) {
    
        const tweetNew = new Tweets(id, conteudo, tipo)
        tweets.push(tweetNew)

        return tweetNew

    }

    public likeTweets(id:string, idUsuario:string){
        const tweetslike = this.getAllTweets().find(tweet => tweet.getDetailsTweet().id === id)

        if(tweetslike === undefined){
            console.log('Tweets not found')
            return
        } else {
            tweetslike.likesTweets(idUsuario)
            return tweets
        }


    }

    public deslikeTweets(id: string, idUsuario: string){
        const tweetsdeslike = this.getAllTweets().find(tweets => tweets.getDetailsTweet().id === id)

        if(tweetsdeslike === undefined){
            console.log('tweet não existe')
            return
        } else {
            tweetsdeslike.deslikeTweet(idUsuario)
            return tweets
        }

    }

    public replayTweet(idUsuario: string, idTweet: string, conteudo: string) {
        const user = users.find((user) => user.getDetails().id === idUsuario); 
        if (!user) {
          console.log("Usuário não encontrado");
          return;
        }
    
        const tweetsFeed = tweets.find(tweet => tweet.getDetailsTweet().id === idTweet)
        if (!tweetsFeed) {
          console.log("Tweet não encontrado");
          return;
        }
    
        const novaReplay = new Replay(user.getDetails().id, conteudo);
    
        tweetsFeed.addReplay(novaReplay);
        return tweets
      }


    public getAllTweets(){
        return tweets
    }


}




export default new TweetsController()