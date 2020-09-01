import { capitalize } from ".";

describe('utils', () => {
    it('capitalize should convert first letter to uppercase', () => {
        expect(capitalize('david is cool!')).toEqual('David is cool!');
    });
});
