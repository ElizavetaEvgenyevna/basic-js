import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!(members instanceof Array))
    return false;
  let letter = [];
  let s ='';
  for (let i in members) {
    if (typeof members[i] == "string")
      letter.push(members[i].trim()[0].toUpperCase());
  }
  letter.sort();
  letter.forEach(i => s += i);
  return s;
}
