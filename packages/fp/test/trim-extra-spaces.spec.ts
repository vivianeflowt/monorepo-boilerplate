import { trimExtraSpaces } from '../src';

test('trimExtraSpaces', () => {
  expect(trimExtraSpaces(' aaa  bbb   ccc ddd  eee ')).toEqual(
    'aaa bbb ccc ddd eee',
  );
});
