import { ProblemType } from './problem-type.enum';

export class ZetaProblems {
  problemType: ProblemType;
  zetaProblem : boolean;
  values = [];
  symbol: string;
  requiresHorizontal : boolean;
  lessonNo : Number;
  decimalPlaces : any;
  addend1 : any;
  addend2 : any;
  sum : any;
  prefix_1_index : any;
  prefix_2_index : any;
  prefixes : any;
  places
  divisor : any;
  quotient : any;
  dividend : any;
  units : any;
  divisor1 : any;
  dividend1 : any;
  quantity : any;
  digit: any;
  tenPower: any;
  factor1: any;
  factor2: any;
  factors: any;
  factor : any;
  preQuotient : any;
  preDivisor : any;
  remainder : any;
  preDividend : any;
  numeratorCode: any;
  denominators: any;
  roundNumerator : any;
  prob: any;
  problemAsText: any;
  reducedNumerator: any;
  reducedNumeratorCode: any;
  reducedDenominatorCode: any;
  reduced: any;
  denominatorCode: any;
  reducedRemainder: any;
  reducedDenominator: any;
  numerator : any;
  denominator : any;
  product: any;
  addedNumber : any;
  productPlusAddedNumber : any;
  letter: any;
  divisorPlaces : any;
  quotientPlaces : any;
  power : any;
  multiplier : any;
  unit_index : any;
  unitMultr : any;
  prefix_1 : any;
  divisorChoices : any;
  dividendPlaces : any;
  quotient1 : any;
  possibleRepeats : any;
  prefix_2 : any;
  decimalPlaces1 : any
  decimalPlaces2 : any
  placeValue1 : any
  placeValue2 : any
  unit_abbrev : any;
  factor1W : any;
  factor2W : any;
  productW : any;
  factor1D : any;
  factor2D : any;
  productD : any;

  constructor() {
    this.zetaProblem = true;
    this.problemType = null;
    this.requiresHorizontal = false;
  }

}