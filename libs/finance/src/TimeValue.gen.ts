/* TypeScript file generated from TimeValue.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as Curry__Es6Import from 'rescript/lib/es6/curry.js';
const Curry: any = Curry__Es6Import;

// @ts-ignore: Implicit any on import
import * as TimeValueBS__Es6Import from './TimeValue.bs';
const TimeValueBS: any = TimeValueBS__Es6Import;

export const compoundInterest: (pv:number, i:number, n:number) => number = function (Arg1: any, Arg2: any, Arg3: any) {
  const result = Curry._3(TimeValueBS.compoundInterest, Arg1, Arg2, Arg3);
  return result
};
