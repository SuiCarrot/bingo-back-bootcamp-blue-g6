import { Player } from "@prisma/client";

export class Match {
    id?: String;
    roomName?: String;
    numberOfCards?: Number;
    drawTime?: Number;
    numberOfRounds?: Number;
    link?: String;
    winner?: String;
}