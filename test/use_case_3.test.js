import { convertToNumber, checkSum } from '../bank_ocr';

describe('Testing use case 3', () => {
    test('convertToNumber : should receive path for use_case_3 with valid checksum', async () => {
        const validChecksum = await convertToNumber('./use_case_3/text_1.txt', true);

        expect(validChecksum).toEqual('000000051');
    });

    test('convertToNumber : should receive path for use_case_3 with valid checksum', async () => {
        const validChecksum = await convertToNumber('./use_case_3/text_2.txt', true);

        expect(validChecksum).toEqual('457508000');
    });

    test('convertToNumber : should receive path for use_case_2 with valid checksum', async () => {
        const invalidChecksum = await convertToNumber('./use_case_3/text_3.txt', true);

        expect(invalidChecksum).toEqual('49006771? ILL');
    });

    test('convertToNumber : should receive path for use_case_2 with valid checksum', async () => {
        const invalidChecksum = await convertToNumber('./use_case_3/text_4.txt', true);

        expect(invalidChecksum).toEqual('1234?678? ILL');
    });

    test('convertToNumber : should receive path for use_case_2 with valid checksum', async () => {
        const invalidChecksum = await convertToNumber('./use_case_3/text_5.txt', true);

        expect(invalidChecksum).toEqual('664371495 ERR');
    });
})