/**
 * Remove extra blank spaces from string
 * @category String
 * @param {string} str
 * @returns {string}
 */
export function trimExtraSpaces(str: string): string {
  return str.replace(/(\s{2,})/g, ' ').trim();
}

export default trimExtraSpaces;
