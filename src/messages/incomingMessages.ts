

import z from 'zod';


const JOIN_ROOM = "JOIN_ROOM";
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPVOTE_MESSAGE = 'UPVOTE_MESSAGE'

export enum SupportedMessages {
    JoinRoom = "JOIN_ROOM",
    SendMesage = "se"

}
const initMessage = z.object({
    name: z.string(),
    userId: z.string(),
    roomId: z.string(),
})

export type InitMessageType = z.infer<typeof initMessage>

export const UserMessage = z.object({
    userId: z.string(),
    roomId: z.string(),
    message: z.string()
})

export type UserMessageType = z.infer<typeof UserMessage>

export const UpvoteMessage = z.object({
    userId: z.string(),
    roomId: z.string(),
    chatId: z.string()
})

export type UpVoteMessageType = z.infer<typeof UpvoteMessage>
