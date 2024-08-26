import { Base } from "./Base";

export class Like extends Base{
    private _userId: string;
    private _tweetId: string;

    constructor(userId: string, tweetId: string){
        super()

        this._userId = userId;
        this._tweetId = tweetId;
    }

    public get userId(): string{
        return this._userId;
    }

    public get tweetId(): string{
        return this._tweetId;
    }
}