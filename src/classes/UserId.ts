import { randomUUID } from "crypto";

export abstract class UserId{
    private _id: string

    constructor(){
        this._id = randomUUID()

    }
}