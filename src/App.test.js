import { total } from './App';
import { add } from  './add';

jest.mock('./add', () => {

})

// an integration test

test('total', () => {
	expect(total(20, 10)).toBe('$30');
});