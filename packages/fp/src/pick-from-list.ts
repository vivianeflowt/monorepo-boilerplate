import { List } from './types';

/**
 * Select a random element from the list
 * @category List
 * @template T
 * @param {List<T>} list
 * @returns {*}
 */
export function pickFromList<T>(list: List<T>): T {
  return [...list][Math.floor(Math.random() * (list.length - 1))];
}

export default pickFromList;
