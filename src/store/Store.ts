
export type UserId = string

//impliciting types

export interface Chat{
    id: string;
    userId: string;
    name: string;
    message: string;
    upvotes: UserId[];
}

// class will have a constructor to initialize and methods to call  

export abstract class Store {
    constructor() {

    }

    getChats(room:string, limit: number, offset: number){

    }

    addChat(userId: UserId,name: string, room: string, message: string){

    }

    upvote(userId: UserId,room: string, chatId: string){

    }
}