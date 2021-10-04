import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chainMaker() {
    this.s = []
  },
  getLength() {
    return this.s.length;
  },
  addLink(value) {
  if (value == undefined)
    value = " ";
    this.s.push(value);
    return this;
  },
  removeLink(position) {
    if (!(position-1 in this.s))
      throw new Error('You can\'t remove incorrect link!');
    this.s.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.s.reverse();
    return this;
  },
  finishChain() {
    let res = "";
    for (let i in this.s)
      if (i < this.s.length-1)
        res = res + "(" + this.s[i] + ")~~";
      else
        res = res + "(" + this.s[i] + ")";
      console.log(res);
    return res;
  }
};

//chainMaker.addLink(1).addLink(2).addLink(3).finishChain();
//chainMaker.addLink(1).addLink().addLink(2).removeLink(2).addLink(3).finishChain();
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain();
