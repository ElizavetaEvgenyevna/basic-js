import { NotImplementedError } from '../extensions/index.js';

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
  let str_n = n.toString();
  let arr = [];
  let new_number = "";
  for (let i in str_n) {
    new_number = new_number + str_n.substr(0, i) + str_n.substr(parseInt(i)+1, str_n.length);
    arr.push(parseInt(new_number));
    new_number = "";
  }
  return Math.max.apply(Math, arr);
}
