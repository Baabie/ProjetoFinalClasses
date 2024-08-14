import { Tweet } from "./Tweet";
import { UserId } from "./UserId";

export class User extends UserId{
    public name: string;
    public username: string;
    private _email: string;
    private _password: string;

    constructor(name: string, username: string, email: string, password: string){
        super()

        this.name = name;
        this.username = username;
        this._email = email;
        this._password = password;
    }

    private sendTweet(tweet: Tweet): void{

    }

    private follow(user: User): void{

    }

    private showFeed(): string{
        return ""
    }

    private showTweets(): string{
        return ""
    }
}