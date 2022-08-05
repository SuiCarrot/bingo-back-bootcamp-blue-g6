import { Player } from "@prisma/client";

export class Match {
    id?: String;
    roomName: String;
    numberOfCards: Number;
    players: Player[]
}
