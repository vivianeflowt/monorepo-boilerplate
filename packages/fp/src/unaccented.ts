/**
 * Convert accented letters to unaccented letters
 * @category String
 * @param {string} str
 * @returns {string}
 */
export function unaccented(str: string): string {
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

export default unaccented;
