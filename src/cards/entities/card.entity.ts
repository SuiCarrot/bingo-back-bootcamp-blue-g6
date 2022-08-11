import { Match, Player } from "@prisma/client";

export class Card {
    id?: string;
    numbers: string;
    bingoPossibilities: string;
    match: Match[];
    player: Player[];


}
