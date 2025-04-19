

export enum SupportedMessage {
    AddChat = "ADD_CHAT",
    UpdateChat = "Updatechat",
}

type MessagePayLoad = {
    roomId: string, 
    message: string, 
    name: string, 
    upvotes: string, 
}

export type OutGoingMessage = {
    type: SupportedMessage.AddChat, 
    payload: MessagePayLoad
} | {
    type: SupportedMessage.UpdateChat,
    payload: Partial<MessagePayLoad>
}