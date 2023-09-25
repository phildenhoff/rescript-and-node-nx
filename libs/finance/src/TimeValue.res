/**
  * Compute the future value of an investment using compounding interest.
  * For some principal investment pv, interest rate i, and number of periods n,
  * returns the future value of the investment.
  *
  * @example
  * fv(1000, 0.0675, 20) // => 2896.703652
  */
@genType
let compoundInterest = (pv, i: float, n): float => pv *. (1.0 +. i) ** n