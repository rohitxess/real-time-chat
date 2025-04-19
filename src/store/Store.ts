
export type UserId = string

//impliciting types

export interface Chat{
    userId: string;
    name: string;
    message: string;
    upvotes: string;
}

export abstract class Store {
    constructor() {

    }

    getChats(room:string, limit: number, offset: number){

    }

    addChat(userId: UserId,room: string, limit: number, offset: number){

    }

    upvote(userId: UserId,room: string, chatId: string){

    }
}