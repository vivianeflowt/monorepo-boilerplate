import { add, gte, isNumber, lte } from 'lodash/fp';

import { ifElse } from '../src';

test('ifElse', () => {
  expect(ifElse(lte(3))(add(1))(add(2))(2)).toEqual(4);
  expect(ifElse(gte(3))(add(1))(add(2))(4)).toEqual(6);
  expect(ifElse(isNumber)(add(1))(add(2))(1)).toEqual(2);
});
