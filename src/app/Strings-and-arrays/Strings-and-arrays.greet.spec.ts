import { greet } from './Strings-and-arrays.greet';
describe('Greetings test', () => {
    it('Should include the name in to the message', () => {
        expect(greet('John')).toContain('John');
    });
});
