export default class Globe{
    drawnNumbers: number[]
    remainingNumbers: number[]
    constructor(){
        this.drawnNumbers = []
        this.remainingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]               
    };

    drawNumber(remainingNumbers: number[], drawnNumbers: number[]){        
    const 
        drawnNumber = remainingNumbers.sort(() => Math.random() - 0.5).slice(-1),
        max = remainingNumbers.length - 1
        

        drawnNumbers.push(...drawnNumber)
        remainingNumbers = remainingNumbers.splice(0, max)

        let 
            draw = drawnNumber[drawnNumber.length-1],
            data = {
                remainingNumbers,
                drawnNumbers,
                draw
        }
        return data
    }

    lastNumbers(drawnNumbers: number[]): number[]{
        let 
            lastNumbers = [],
            min = drawnNumbers.length - 6
            
        if(drawnNumbers.length < 6) return lastNumbers = drawnNumbers

        lastNumbers = drawnNumbers.slice(min, drawnNumbers.length)

        return lastNumbers
    }
}