/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let count = 1;
  let result = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i+1]) {
      result.push(count);
      result.push(str[i]);

      count = 1;
      continue;
    }

    count++;
  }

  return result
    .filter((e) => e !== 1)
    .join('');
}
