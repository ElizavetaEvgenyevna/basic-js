import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  const str = n.toString();
  // console.log(str);
  if (str.length == 1)
    return n;
  else
  {
    let result = 0;
    for (let i in str) {
      result = result + parseInt(str[i]);
      // console.log(str[i]);
    }
    return getSumOfDigits(result);
    // console.log(result);
  }
}

// console.log(getSumOfDigits(95));