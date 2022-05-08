import { pipe, reduce, reverse, values } from 'lodash/fp';

import { List } from './types';

/**
 * Selects unique objects in a list based on a certain key
 * @category List
 * @template T extends Object
 * @param {string} predicate
 * @returns {(list: any) => any}
 */
export function uniqueByKey<T extends Object>(
  predicate: string,
): (list: List<T>) => T[] {
  return (list: List<T>) =>
    pipe(
      reverse,
      reduce((acc, cur) => ({ ...acc, [cur[predicate]]: cur }), {}),
      values,
    )([...list]);
}

export default uniqueByKey;
