import { toArray } from 'lodash/fp';

/**
 * Split each word of the string
 * @category String
 * @param {string} str
 * @returns {string[]}
 */
export function splitByWord(str: string): string[] {
  const wordRegex = /[A-Z]?[a-z]+|\d+|[A-Z]+(?![a-z])/g;
  return toArray(str.match(wordRegex));
}

export default splitByWord;
