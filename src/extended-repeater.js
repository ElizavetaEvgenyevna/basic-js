import { NotImplementedError } from '../extensions/index.js';
import {assert} from "chai";

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // console.log('str is: ' + str);
  if (options === undefined)
    return null;
  let repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  // console.log('repeatTimes is: ' + repeatTimes);
  let separator = options.separator === undefined ? '+' : options.separator;
  // console.log('separator is: ' + separator);
  let addition = options.addition === undefined ? '' : options.addition;
  //console.log('addition is: ' + addition);
  let additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  // console.log('additionRepeatTimes is: ' + additionRepeatTimes);
  let additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  // console.log('additionSeparator is: ' + additionSeparator);
  let real_repeat = repeatTimes + additionRepeatTimes;
  if (real_repeat == 2) return str+addition;
  let result = "";
  let substr = "";
  if (!(addition === ''))
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j == additionRepeatTimes - 1)
        substr = substr  + addition;
      else
        substr = substr  + addition + additionSeparator;
      // console.log('for j: ' + j + ' substr is: '+ substr);
    }
  for (let i = 0; i < repeatTimes; i++) {
    if (i == repeatTimes - 1)
      result = result + str + substr;
    else
      result = result + str + substr + separator;
  }
  return result;
}
