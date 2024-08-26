import { Base } from "./Base";
import { Tweet } from "./Tweet";

export class User extends Base {
    public username: string;
    public name: string;
    private _email: string;
    private _password: string;
    private _tweets: Tweet[] = [];
    private _following: User[] = [];

    constructor(name: string, username: string, email: string, password: string) {
        super();
        this.name = name;
        this.username = username;
        this._email = email;
        this._password = password;
    }

    public sendTweet(content: string, type: string): void {
        const newTweet = new Tweet(content, type, this);
        this._tweets.push(newTweet);
    }

    public replyToTweet(tweet: Tweet, content: string): void {
        tweet.addReply(content, this);
    }

    public follow(user: User): void {
        if (!this._following.includes(user)) {
            this._following.push(user);
        }
    }

    public showTweets(): Tweet[] {
        return this._tweets;
    }

    public likeTweet(tweet: Tweet): void {
        tweet.like(this.id);
    }

    public get tweets(): Tweet[] {
        return this._tweets;
    }

    public get following(): User[] {
        return this._following;
    }
}
