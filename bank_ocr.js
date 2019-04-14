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