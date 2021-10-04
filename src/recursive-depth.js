import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let result;
    if (Array.isArray(arr)) result = 1 + Math.max(...arr.map(t => this.calculateDepth(t)));
    else result = 0
    if (result=='-Infinity') {
      arr.push(1);
      return this.calculateDepth(arr);
    }
    return result;
  }
}

// const depthCalc = new DepthCalculator();

// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));
