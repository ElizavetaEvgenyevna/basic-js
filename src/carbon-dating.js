import { NotImplementedError } from '../extensions/index.js';
import {assert} from "chai";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    (isNaN(sampleActivity)) ||
    (sampleActivity.split(" ").filter((e) => isNaN(e)) && isNaN(sampleActivity)) ||
    (parseFloat(sampleActivity)<=0) ||
    (sampleActivity === "")
  )
    {
      return false;
    }
  else
  {
    const log_2 = Math.LN2;
    const k = log_2 / HALF_LIFE_PERIOD;
    let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
    if (result < 0) return false;
    if (isNaN(result)) return false;
    if (result == Infinity) return false;
    return result;
  }
}
