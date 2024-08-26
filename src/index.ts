import { User } from "./classes/User"; 
import { Tweet } from "./classes/Tweet";

// const user1 = new User("João", "joao123", "joao@example.com", "senha123");
// const user2 = new User("Maria", "maria456", "maria@example.com", "senha456");

// user1.sendTweet("Meu primeiro tweet!", "texto");
// user1.follow(user2);

// const tweet = user1.tweets[0];
// user2.likeTweet(tweet);

// console.log(user1.showTweets());
// console.log(tweet.likes);         

// Cria instâncias de User
const user1 = new User("João", "joao123", "joao@example.com", "senha123");
const user2 = new User("Maria", "maria456", "maria@example.com", "senha456");

user1.sendTweet("Meu primeiro tweet!", "texto");

const tweet = user1.tweets[0];

user2.replyToTweet(tweet, "Essa é a minha resposta ao seu tweet!");

user2.likeTweet(tweet);

console.log(tweet.showTweet());

tweet.showReplies();