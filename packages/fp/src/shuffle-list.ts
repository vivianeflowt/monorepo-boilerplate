import { List } from './types';

/**
 * Randomly shuffles the elements of a list
 * @category List
 * @template T
 * @param {List<T>} list
 * @returns {*}
 */
export function shuffleList<T>(list: List<T>): T[] {
  return [...list]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default shuffleList;
