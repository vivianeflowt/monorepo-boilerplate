import { reduce } from 'lodash/fp';

import { List } from './types';

/**
 * Returns amount that a given value is found within an array
 * @category Array
 * @template T
 * @param {T} value
 * @returns {(list: any) => any}
 */
export function occurrences<T>(value: T): (list: List<T>) => number {
  return (list: List<T>) =>
    reduce((acc, cur) => (cur === value ? acc + 1 : acc), 0)([...list]);
}

export default occurrences;
