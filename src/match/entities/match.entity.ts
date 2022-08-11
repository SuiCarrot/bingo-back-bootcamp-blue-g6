import { Player } from "@prisma/client";

export class Match {
    id?: String;
    roomName: String;
    numberOfCards: Number;
    drawTime: Number;
    numberOfRounds: Number;
    drawNumbers: String;
    link: String;
    winner: String;
    players: Player[];
}
