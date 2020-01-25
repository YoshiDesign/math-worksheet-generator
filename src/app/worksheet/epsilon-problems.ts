import { ProblemType } from './problem-type.enum';

export class EpsilonProblems {
  custom : boolean;
  problemType: ProblemType;
  values = [];
  symbol: string;
  fraction : boolean;
  requiresHorizontal : boolean;
  single : boolean;
  double : boolean;
  triple : boolean;
  epsilonProblem : boolean;
  disp : any;
  answerKey : any;
  operator : any;
  thisOperator : any;
  isFraction : boolean;

  wholeAddend1 : any;
  numAddend1 : any;
  wholeAddend2 : any;
  numAddend2 : any;
  wholeSum : any;
  numSum : any;
  denomSum : any;
  denomDiff : any;

  mainSwitch : boolean;

  wholeNumber : any;
  mixNumerator : any;
  improperNumerator : any;
  mixDenominator : any;
  improperDenominator : any;

  denominator : any;
  denominator1: any
  denominator2: any;
  denominator3: any;
  reducedDenom: any;

  whole1 : any;
  whole2 : any;
  wholeDiff : any;
  num1 : any;
  num2 : any;
  numDiff : any;

  problemDenominator: any;
  problemNumerator  : any;
  answerNumerator   : any;
  answerDenominator : any;

  quotientNumerator : any;
  quotientDenominator : any;

  productNumerator : any;
  productDenominator : any;

  divNumDom : any;
  numDivDom : any;

  sumNumerator : any;
  sumDenominator : any;

  addend1 : any;
  addend2 : any;
  addSum : any;

  numerator1 : any;
  numerator2 : any;
  numerator3 : any;

  lessonNo : Number;

  denom1 : any;
  denom2 : any;
  NumQ : any;
  DenomQ : any;
  numAnswer : any;
  denomAnswer : any;
  wholeAnswer : any;

whole3 : any;
denom3 : any;
num3 : any;
numProduct : any;
denomProduct : any;
denomChoices : any;
denom : any;
num : any;

decimal : any;
problemNo : any;
  constructor() {
    this.isFraction = false;
    this.custom = true;
    this.problemNo = 0;
    this.fraction = false;
    this.requiresHorizontal = false;
    this.epsilonProblem = true;

  }
}