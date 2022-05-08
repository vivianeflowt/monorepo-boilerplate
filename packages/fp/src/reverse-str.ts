import { join, pipe, reverse, split } from 'lodash/fp';

/**
 * Reverse string
 * @category String
 * @param {string} str
 * @returns {string}
 */
export function reverseStr(str: string): string {
  return pipe(split(''), reverse, join(''))(str);
}

export default reverseStr;
