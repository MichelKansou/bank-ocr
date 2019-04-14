import { readFile, getNumber, convertToNumber, checkSum } from '../bank_ocr';

describe('Testing main functions', () => {
    test('readFile : Should read file and parse it to an array of lines' , async () => {
        const expectedOutput = [ '     |  |',
                                ' _  _||_ ',
                                ' _  _| _|',
                                '   |_|  |',
                                ' _ |_  _|',
                                ' _ |_ |_|',
                                ' _   |  |',
                                ' _ |_||_|',
                                ' _ |_| _|' ]                      
       expect(await readFile('./use_case_1/text_all_numbers.txt')).toEqual(expectedOutput)
    });

    test('readFile : throws error when path is not provided', async () => {
        let error;

        try {
            await readFile();
        } catch (e) {
            error = e;
        }

        expect(error).toEqual(new Error("Require path in order to read file"));
    });

    test('getNumber : should receive string of character and return a number or ?', () => {
        expect(getNumber('     |  |')).toEqual(1);
        expect(getNumber(' _  _||_ ')).toEqual(2);
        expect(getNumber(' _  _| _|')).toEqual(3);
        expect(getNumber('   |_|  |')).toEqual(4);
        expect(getNumber(' _ |_  _|')).toEqual(5);
        expect(getNumber(' _ |_ |_|')).toEqual(6);
        expect(getNumber(' _   |  |')).toEqual(7);
        expect(getNumber(' _ |_||_|')).toEqual(8);
        expect(getNumber(' _ |_| _|')).toEqual(9);
        expect(getNumber('     |  ')).toEqual('?');
    });

    test('convertToNumber : should receive path for a text file numbers', async () => {
        expect(await convertToNumber('./use_case_1/text_all_numbers.txt')).toEqual('123456789');
    });

    //checksum calculation:
    //(d1+2*d2+3*d3 +..+9*d9) mod 11 = 0
    test('checkSum : should receive array of numbers and calculate if checksum is valid', () => {
        expect(checkSum([3,4,5,8,8,2,8,6,5])).toEqual(true);
        
        expect(checkSum([6,6,4,3,7,1,4,9,5])).toEqual(false);
    });
})