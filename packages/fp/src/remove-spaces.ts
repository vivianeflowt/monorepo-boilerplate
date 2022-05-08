/**
 * Remove blank spaces from string
 * @category String
 * @param {string} str
 * @returns {string}
 */
export function removeSpaces(str: string): string {
  return str.replace(/\s/g, '');
}

export default removeSpaces;
