/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let digits = n.toString().split('');
  let maxNumber = 0;

  for (let i = 0; i < digits.length; i++) {
    let digitsCopy = digits.slice();
    let currentNumber;

    digitsCopy[i] = '';
    currentNumber = +digitsCopy.join('');
    if (currentNumber > maxNumber) maxNumber = currentNumber;
  }

  return maxNumber;
}
