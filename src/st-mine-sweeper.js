import { NotImplementedError } from '../extensions/index.js';
import {assert} from "chai";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix ) {
  let result = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));;

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j])
        {
          // right
          if (result[i+1] != undefined && result[i+1][j] != undefined)
            result[i+1][j] = result[i+1][j] + 1;
          // left
          if (result[i-1] != undefined && result[i-1][j] != undefined)
            result[i-1][j] = result[i-1][j] + 1;
          // bottom
          if (result[i][j+1] != undefined)
            result[i][j+1] = result[i][j+1] + 1;
          // top
          if (result[i][j-1] != undefined)
            result[i][j-1] = result[i][j-1] + 1;
          // bot-right
          if (result[i+1] != undefined && result[i+1][j+1] != undefined)
            result[i+1][j+1] = result[i+1][j+1] + 1;
          // top-right
          if (result[i-1] != undefined && result[i-1][j+1] != undefined)
            result[i-1][j+1] = result[i-1][j+1] + 1;
          // bot-left
          if (result[i+1] != undefined && result[i+1][j-1] != undefined)
            result[i+1][j-1] = result[i+1][j-1] + 1;
          // top-left
          if (result[i-1] != undefined && result[i-1][j-1] != undefined)
            result[i-1][j-1] = result[i-1][j-1] + 1;
        }
    }
  }
  return result;
}