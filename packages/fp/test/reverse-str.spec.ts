import { reverseStr } from '../src';

test('reverseStr', () => {
  expect(reverseStr('abcde')).toEqual('edcba');
});
