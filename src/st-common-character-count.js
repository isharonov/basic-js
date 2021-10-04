/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let s1CharacterCount = countCharactersInString(s1);
  let s2CharacterCount = countCharactersInString(s2);
  let commonNumber = 0;

  for (let key in s1CharacterCount) {
    if(!s2CharacterCount[key]) continue;
  
    commonNumber += s1CharacterCount[key] >= s2CharacterCount[key] ? 
                      s2CharacterCount[key] : 
                      s1CharacterCount[key];
  }

  return commonNumber;

  function countCharactersInString(string) {
    let result = {};
    for (let char of string) {
      result[char] ? result[char]++ : result[char] = 1;
    }
    return result;
  }
}
