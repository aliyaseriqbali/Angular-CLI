import { getCurrencies } from './Strings-and-arrays.getcurrencies';

describe('Array test ', () => {
    it('It should return the supported currencies', () => {
        expect(getCurrencies()).toContain('USD');
        expect(getCurrencies()).toContain('AUD');
        expect(getCurrencies()).toContain('EUR');
    });
});
