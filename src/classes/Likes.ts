import { User } from "./User";
import { UserId } from "./UserId";

export type Like = 1

export class Likes extends UserId {
    public like: Like;
    private _user: User

    constructor(like: Like, content: string, user: User){
        super()
        this.like = like;
        this._user = user
    }
}