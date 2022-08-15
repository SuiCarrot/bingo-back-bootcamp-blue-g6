


const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
export class Numbers{

    randomNumbers = (min: number, max: number) => {        
            min = Math.ceil(min);
            max = Math.floor(max);

            return Math.floor(Math.random() * (max - min + 1)) + min;        
    };
    
    cardNumbers = ()=> {
        var 
        cardNumbers:string[] = [],
        cont = 0,
        max = 89, 
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]            
        
        while (cont < 25){
            let 
            index = this.randomNumbers(1, max),
            number = numbers.splice(index, 1)
            cardNumbers.push(number.toString())

            cont++
            max--
        }
        return cardNumbers
    }
        bingoPossibilities= (cardNumbers: string[])=>{
        const 
            p0 = [cardNumbers[0], cardNumbers[1], cardNumbers[2], cardNumbers[3], cardNumbers[4],],
            p1 = [cardNumbers[5], cardNumbers[6], cardNumbers[7], cardNumbers[8], cardNumbers[9],],
            p2 = [cardNumbers[10], cardNumbers[11], cardNumbers[12], cardNumbers[13], cardNumbers[14],],
            p3 = [cardNumbers[15], cardNumbers[16], cardNumbers[17], cardNumbers[18], cardNumbers[19],],
            p4 = [cardNumbers[20], cardNumbers[21], cardNumbers[22], cardNumbers[23], cardNumbers[24],],
            p5 = [cardNumbers[4], cardNumbers[8], cardNumbers[12], cardNumbers[16], cardNumbers[20],],
            p6 = [cardNumbers[0], cardNumbers[5], cardNumbers[10], cardNumbers[15], cardNumbers[20], ],
            p7 = [cardNumbers[1], cardNumbers[6], cardNumbers[11], cardNumbers[16], cardNumbers[21],],
            p8 = [cardNumbers[2], cardNumbers[7], cardNumbers[12], cardNumbers[17], cardNumbers[22],],
            p9 = [cardNumbers[3], cardNumbers[8], cardNumbers[13], cardNumbers[18], cardNumbers[23],],
            p10 = [cardNumbers[4], cardNumbers[9], cardNumbers[14], cardNumbers[19], cardNumbers[24],],
            p11 = [cardNumbers[0], cardNumbers[6], cardNumbers[12], cardNumbers[18], cardNumbers[24],],

            bingoPossibilities = [p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11]

        return bingoPossibilities
    }


}