import { sortList } from '../src';

test('sortList', () => {
  expect(sortList<number>((a, b) => a - b)([2, 4, 6, 3])).toEqual([2, 3, 4, 6]);
});
