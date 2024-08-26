import { Base } from "./Base";
import { Like } from "./Like";
import { User } from "./User";  // Certifique-se de importar User corretamente

export class Tweet extends Base {
    private _content: string;
    private _type: string;
    private _likes: Like[] = [];
    private _user: User;

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

    public showTweet(): string {
        return `Tweet: "${this._content}" by ${this._user.username}. Likes: ${this._likes.length}`;
    }

    public showLikes(): void {
        console.log(`Likes on "${this._content}":`);
        this._likes.forEach(like => {
            console.log(`- Liked by User ID: ${like.userId}`);
        });
    }

    public get likes(): Like[] {
        return this._likes;
    }

    public get user(): User {
        return this._user;
    }
}
