import { Base } from "./Base";
import { Like } from "./Like";
import { User } from "./User";

export class Tweet extends Base {
    private _content: string;
    private _type: string;
    private _likes: Like[] = [];
    private _user: User;
    private _replies: Tweet[] = [];
    constructor(content: string, type: string, user: User) {
        super();
        this._content = content;
        this._type = type;
        this._user = user;
    }

    public like(userId: string): void {
        const newLike = new Like(userId, this.id);
        this._likes.push(newLike);
    }

    public addReply(content: string, user: User): void {
        const replyTweet = new Tweet(content, "reply", user);
        this._replies.push(replyTweet);
    }

    public showTweet(): string {
        return `Tweet: "${this._content}" by ${this._user.username}. Likes: ${this._likes.length}, Replies: ${this._replies.length}`;
    }

    public showReplies(): void {
        console.log(`Replies to "${this._content}":`);
        this._replies.forEach(reply => {
            console.log(`- ${reply.showTweet()}`);
        });
    }

    public get likes(): Like[] {
        return this._likes;
    }

    public get replies(): Tweet[] {
        return this._replies;
    }

    public get user(): User {
        return this._user;
    }
}
