import { NotImplementedError } from '../extensions/index.js';

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
  let arr_1 = [];
  let arr_2 = [];
  for (let i in s1)
    arr_1.push(s1[i]);

  for (let i in s2)
    arr_2.push(s2[i]);

  let result = 0;
  for (let i in arr_1) {
    if (arr_2.includes(arr_1[i])) {
      result = result + 1;
      arr_2.splice(arr_2.indexOf(arr_1[i]), 1);
    }
  }
  return result;
}


// let s1 = "aaabdcac";
// let s2 = "aadcaa";
//
// console.log(getCommonCharacterCount(s1, s2));
