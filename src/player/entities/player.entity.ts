import { Match } from "@prisma/client";


export class Player {

    id?: string;
    playerName: string;
    avatar: string;
    score: number;
    isHost: boolean;
    match: Match[];
}
