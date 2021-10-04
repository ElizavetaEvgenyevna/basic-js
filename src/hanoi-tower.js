import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
var sum_global = 1;

export default function calculateHanoi(disksNumber, turnsSpeed) {

  Hanoi(disksNumber, sum_global);
  let result = {'turns': sum_global, 'seconds': Math.round(sum_global/turnsSpeed*3600)};
  return result;

}

function Hanoi(n, sum)
{
  if (n===1) { sum_global = sum; return; }
  sum = sum * 2 + 1;
  Hanoi(n-1, sum);
}
