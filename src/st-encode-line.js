import { NotImplementedError } from '../extensions/index.js';
import {assert} from "chai";

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
export default function encodeLine(str ) {
  if (str=="") return "";
  let sum = 0;
  let cur_el = "";
  let result = "";
  for (let i in str)
  {
    if (str[i] == cur_el) {
      sum = sum + 1;
    }
    else
    {
      if (sum>0) {
        if (sum == 1) {
          result = result + cur_el;
          sum = 0;
        } else {
        result = result + sum + cur_el;
        sum = 0;
      }
      }
      sum = sum + 1;
      cur_el = str[i];
    }
  }
  if (sum == 1)
    result = result + cur_el;
  else
    result = result + sum + cur_el;
  return result;
}