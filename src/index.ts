import { User } from "./classes/User";  // Certifique-se de que o caminho está correto
import { Tweet } from "./classes/Tweet";

const user1 = new User("João", "joao123", "joao@example.com", "senha123");
const user2 = new User("Maria", "maria456", "maria@example.com", "senha456");

user1.sendTweet("Meu primeiro tweet!", "texto");
user1.sendTweet("Meu segundo tweet!", "texto");

const tweet = user1.tweets[0];
user2.likeTweet(tweet);

console.log(tweet.showTweet());  // Exibe o tweet com o nome do usuário e a contagem de likes
tweet.showLikes();  // Opcional: lista os likes
