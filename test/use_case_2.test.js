import { convertToNumber, checkSum } from '../bank_ocr';

describe('Testing use case 2', () => {
    test('convertToNumber : should receive path for use_case_2 with valid checksum', async () => {
        const validChecksum = await convertToNumber('./use_case_2/valid_checksum.txt');

        expect(validChecksum).toEqual('345882865');
        expect(checkSum(validChecksum.split(''))).toEqual(true);
    });

    test('convertToNumber : should receive path for use_case_2 with valid checksum', async () => {
        const invalidChecksum = await convertToNumber('./use_case_2/invalid_checksum.txt');

        expect(invalidChecksum).toEqual('664371495');
        expect(checkSum(invalidChecksum.split(''))).toEqual(false);
    });
})