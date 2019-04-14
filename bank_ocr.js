import fs from 'fs';
import "@babel/polyfill";

export const readFile = async (path) => {
    if (path === undefined || path === '' | path === null) { throw new Error("Require path in order to read file") }
    
    const arrayOfLines = await fs.readFileSync(path).toString().split("\n");
    const lines = [];

    for (let index = 0; index < 3; index++) {
        console.log(arrayOfLines[index].match(/.{1,3}/g))
        arrayOfLines[index].match(/.{1,3}/g).forEach((char, i) => {
            lines[i] ?  lines[i] += char : lines[i] = char;
        })
    }

    return lines
}

export const getNumber = (input) => {
    switch (input) {
        case " _ " +
             "| |" +
             "|_|":
            return 0
    
        case "   " +
             "  |" +
             "  |" :
            return 1;

        case " _ " +
             " _|" +
             "|_ " :
            return 2;
        
        case " _ " +
             " _|" +
             " _|" :
            return 3;

        case "   " +
             "|_|" +
             "  |" :
           return 4;

        case " _ " +
             "|_ " +
             " _|" :
            return 5;
        
        case " _ " +
             "|_ " +
             "|_|" :
           return 6;
        
        case " _ " +
             "  |" +
             "  |" :
            return 7;

        case " _ " +
             "|_|" +
             "|_|" :
           return 8;

        case " _ " +
             "|_|" +
             " _|" :
            return 9;

        default:
            return '?';
    }
}

export const convertToNumber = async (path) => {
    console.log('====================================');
    const arrayOfNumbers = await readFile(path);
    var output = "";

    arrayOfNumbers.forEach(charNumber => {
        output += getNumber(charNumber);
    });
    
    console.log("OUTPUT");
    console.log(output);
    console.log('====================================');
    return output;
}