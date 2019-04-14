import { readFile, getNumber, convertToNumber } from '../bank_ocr';

describe('Testing use case 1', () => {
    test('convertToNumber : should receive path for use_case_1 with 0', async () => {
        expect(await convertToNumber('./use_case_1/text_0.txt')).toEqual('000000000');
    });

    test('convertToNumber : should receive path for use_case_1 with 1', async () => {
        expect(await convertToNumber('./use_case_1/text_1.txt')).toEqual('111111111');
    });

    test('convertToNumber : should receive path for use_case_1 with 2', async () => {
        expect(await convertToNumber('./use_case_1/text_2.txt')).toEqual('222222222');
    });

    test('convertToNumber : should receive path for use_case_1 with 3', async () => {
        expect(await convertToNumber('./use_case_1/text_3.txt')).toEqual('333333333');
    });

    test('convertToNumber : should receive path for use_case_1 with 4', async () => {
        expect(await convertToNumber('./use_case_1/text_4.txt')).toEqual('444444444');
    });

    test('convertToNumber : should receive path for use_case_1 with 5', async () => {
        expect(await convertToNumber('./use_case_1/text_5.txt')).toEqual('555555555');
    });

    test('convertToNumber : should receive path for use_case_1 with 6', async () => {
        expect(await convertToNumber('./use_case_1/text_6.txt')).toEqual('666666666');
    });

    test('convertToNumber : should receive path for use_case_1 with 7', async () => {
        expect(await convertToNumber('./use_case_1/text_7.txt')).toEqual('777777777');
    });

    test('convertToNumber : should receive path for use_case_1 with 8', async () => {
        expect(await convertToNumber('./use_case_1/text_8.txt')).toEqual('888888888');
    });

    test('convertToNumber : should receive path for use_case_1 with 9', async () => {
        expect(await convertToNumber('./use_case_1/text_9.txt')).toEqual('999999999');
    });

    test('convertToNumber : should receive path for use_case_1 with all numbers', async () => {
        expect(await convertToNumber('./use_case_1/text_all_numbers.txt')).toEqual('123456789');
    });
})