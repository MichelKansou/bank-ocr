import { readFile } from '../bank_ocr';

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
})