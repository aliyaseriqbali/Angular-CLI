import { compute } from './fundamental.compute';
describe('Compute test', () => {

  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
});
});
