
export type UserId = string

//impliciting types

export interface Chat{
    userId: string;
    name: string;
    message: string;
    upvotes: string;
}

// class will have a constructor to initialize and methods to call  

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