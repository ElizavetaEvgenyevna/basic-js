import { NotImplementedError } from '../extensions/index.js';
import {checkForThrowingErrors} from "../extensions/index";

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date ) {
  if (Object.prototype.toString.call(date) !== "[object Date]") return 'Unable to determine the time of year!';
  if (isNaN(date.getTime())) return 'Invalid date!';

  let month = date.getMonth();
  console.log(month);
  if (2 <= month && month <= 4) {
        return 'spring';
  }

  if (5 <= month && month <= 7) {
      return 'summer';
  }

  if (8 <= month && month <= 10) {
      return 'autumn';
  }

  return 'winter';
}