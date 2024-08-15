import { UserId } from "./UserId";


export class Tweet extends UserId{
    private _content: string;
    private _type: string;

    constructor(content: string, type: string){
        super()

        this._content = content;
        this._type = type;
    }

    private reply(): string {
        return "";
    }

    private like(): void{
        this.like();
        console.log(`Likes ${this.like}`)
        
    }

    private show(): string {
        this.showReplies();
        return "";
    }

    private showReplies(): string {
        return "";
    }
}