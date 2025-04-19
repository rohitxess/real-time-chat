import {Chat, Store, UserId} from "./Store"

export interface Room {
    roomId: string;
    chats: Chat[]
}

export class InMemeoryStore implements Store {

    private store: Map<string, Room>;

    constructor() {
        this.store = new Map<string, Room>()
    }
    upvote(userId: string, roomId: string, chatId: string) {
        const room = this.store.get(roomId);
        if(!room){
            return
        }
    }
    initRoom(roomId: string){
        this.store.set(roomId, {
            roomId, 
            chats: []
        });
    }
    
    getChats(userID: UserId, roomId: string, limit: number, offset: number){
        const room = this.store.get(roomId);
        if (!room){
            return []
        }
    }

    addChat(userId: UserId, name: string, roomId: string, message: string){
        const room = this.store.get(roomId);
        if(!room){
            return
        }
        room.chats.push({
            id: (globalChatId++).toString(),
            userId,
            name, 
            message, 
            upvotes: []
        })
    }
}

