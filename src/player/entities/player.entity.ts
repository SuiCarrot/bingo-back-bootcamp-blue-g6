import { Match } from "@prisma/client";


export class Player {

    id?: string;
    playerName: string;
    avatar: string;
    match: Match[];
    isHost: boolean
}
