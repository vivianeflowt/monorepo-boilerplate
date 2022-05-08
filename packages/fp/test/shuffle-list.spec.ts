import { shuffleList } from '../src';

const array = [2, 1, 4, 2, 3, 4, 4, 5, 6, 6];

test('should pass', () => {
  expect(shuffleList(array)).not.toEqual(array);
});
