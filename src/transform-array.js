import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr ) {
  for (let i in arr) {
    if (arr[i] === '--discard-next') {
      arr.splice(i, 2);
    }
    if (arr[i] === '--discard-prev') {
      arr.splice(i - 1, 2);
    }
    if (arr[i] === '--double-next') {
      arr.splice(i, 1);
      arr.splice(i, 0, arr[i]);
    }
    if (arr[i] === '--double-prev') {
      arr.splice(i, 1);
      arr.splice(i, 0, arr[i-1]);
    }
  }
  return(arr);
}

// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]));