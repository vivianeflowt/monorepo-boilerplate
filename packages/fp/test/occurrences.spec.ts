import { occurrences } from '../src';

const array = [2, 1, 4, 2, 3, 4, 4, 5, 6, 6];

test('occurrences', () => {
  expect(occurrences(4)(array)).toEqual(3);
});
