import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let sorted = []
  for (let i in arr)
    if (arr[i] !== -1)
      sorted.push(arr[i]);
  sorted.sort((a,b)=>a-b);

  let ind = 0;
  for (let i in arr) {
    if (arr[i] !== -1)
    {
      arr[i] = sorted[ind];
      ind ++;
    }
  }
  return arr;
}
