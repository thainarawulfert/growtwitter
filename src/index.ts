import TweetsController from "./controller/TweetsController"
import UserController from "./controller/UserController"
import {User} from "./models/User"

const usuario1 = UserController.cadastrarUser("Thainara","thainara@email.com","barto", "123")
const usuario2 = UserController.cadastrarUser('Bartolomeu', 'bartolomeu@email.com','barto22','123')

const followUser2 = UserController.userFollow(usuario1!.getID(), usuario1!.getID())
const followUser = UserController.userFollow(usuario1!.getID(), usuario2!.getID())
const follow = UserController.userFollow(usuario2!.getID(), usuario1!.getID())


const tweetTeste = TweetsController.newTweet(usuario1!.getID(), 'Teste de publicação', 'TWEET')

console.log(tweetTeste)

const tweetRT = TweetsController.likeTweets(tweetTeste.getDetailsTweet().id, usuario2!.getID())

console.log(tweetRT)

const tweetdeslike = TweetsController.deslikeTweets(tweetTeste.getDetailsTweet().id, usuario2!.getID())

console.log(tweetdeslike)
