import { removeSpaces } from '../src';

const str = '  test   text ';

test('removeSpaces', () => {
  expect(removeSpaces(str)).toEqual('testtext');
});
