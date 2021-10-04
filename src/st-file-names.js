import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles( names) {
  let new_arr = [];
  for (let file in names) {
    console.log('checking: '+ names[file] + ' in: '+ new_arr)
    if (!new_arr.includes(names[file]))
      new_arr.push(names[file]);
    else {
      for (let ind=1; ind < 100000; ind++) {
        if (ind > 10000) throw new Error('хватит, пожалуйста');
        let new_el = names[file] + '(' + ind + ')';
        console.log('new element: ' + new_el);
        if (!new_arr.includes(new_el)) {
          new_arr.push(new_el);
          break;
        }
      }
    }
  }
  return new_arr;
}


// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));