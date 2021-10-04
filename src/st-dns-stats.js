import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats( domains) {
  let dict = {};
  for (let i in domains)
  {
    let arr = domains[i].split('.'); //[ 'code', 'yandex', 'ru' ]
    // console.log(arr);
    let el_arr = [];
    let j = arr.length-1;
    let el = '.' + arr[j];
    el_arr.push(el);
    if (arr[j-1] !== undefined) el_arr.push(el + '.' + arr[j-1]);
    if (arr[j-2] !== undefined) el_arr.push(el = el + '.' + arr[j-1] + '.' + arr[j-2]);

    for (let i in el_arr)
    {
      let el = el_arr[i];
      if (el in dict)
        dict[el] = dict[el] + 1;
      else
        dict[el] = 1;
    }
  }
  return dict;
}

// let domains = [
//  'code.yandex.ru',
//  'music.yandex.ru',
//  'yandex.ru'
// ];
//
// console.log(getDNSStats(domains));