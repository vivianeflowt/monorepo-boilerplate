import { IndexComparator, List } from './types';

/**
 * Sort a list based on the compare function
 * @category List
 * @template T
 * @param {IndexComparator} comparator
 * @returns {(list: any) => any}
 */
export function sortList<T>(
  comparator: IndexComparator<T>,
): (list: List<T>) => T[] {
  return (list: List<T>) => {
    return [...list].sort(comparator);
  };
}

export default sortList;
