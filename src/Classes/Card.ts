import Constants from "src/utils/constants"

export default class Card{
    numbers: string[]
    constructor(){
        let baseNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]               
        this.numbers = baseNumbers.sort(() => Math.random() - 0.5).slice(0,25).map(i=>i.toString())
    }

    checkVictory(drawnNumbers: string[]): boolean{
        for(let positions of Constants.cardPositions){
            let combination = this.getCombination(positions)
            if(this.checkCombination(drawnNumbers, combination)) return true
        }
        return false
    }
    
    getCombination(positions: number[]){
        return positions.map(position => this.numbers[position])
    }

    checkCombination(wholeSet: string[], subSet: string[]): boolean {
        for(let item of subSet) if(!wholeSet.includes(item)) return false
        return true
    }
}
