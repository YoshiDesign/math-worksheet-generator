import { ProblemType } from './problem-type.enum';

export class PrealgebraProblems {
  custom : boolean;
  problemType: ProblemType;
  values = [];
  symbol: string;
  containsNegative : boolean;
  divAnswer : any;
  divRemainder : any;
  lessonNo : any;
  types
  type : any;
  base : any;
  exponents : any;
  exponent : any;
  denominator : any;
  numerator : any;
  numEx : any;
  deEx : any;
  override : boolean;
  baseEx : any;
  prealgebraProblem : boolean;
  correctEx : any;
  openers : any
  opener : any;
  closer : any;
  reducer : any;
  correctedBase : any;
  finalFactor : any;
  problemNo : any;
  answerSign : any;


  constructor() {
    this.custom = true;
    this.problemNo = 0;
    this.prealgebraProblem = true;
    this.override = false;
    this.containsNegative = false;
    this.divAnswer = 0;
    this.divRemainder = 0;
  }

  get answer(): any {
    let total = 0; // Start with zero so the looping has a starting value

    // For division problems, we don't need to do the loop
    if (this.problemType === ProblemType.Division) {
      return this.values[0] / this.values[1];
    }

    // The starting point for multiplication should be 1
    // That way in the loop, the first iteration will be 1 * the first value
    if (this.problemType === ProblemType.Multiplication) {
      total = 1;
    }

    // In order for the loop to start at the right place, we just double the first value
    // That way for the first loop, we start with the correct value
    // Ex: If the first value was 15, the starting value would be 30,
    // then the first loop would be 30-15=15 which is our actual starting value for the subtraction
    if (this.problemType === ProblemType.Subtraction) {
      total = this.values[0] * 2;
    }

    this.values.forEach(value => {
      switch (this.problemType) {
        case ProblemType.Addition:
          total += value;
          break;
        case ProblemType.Multiplication:
          total *= value;
          break;
        case ProblemType.Subtraction:
          total -= value;
          break;
      }
    });

    return total;
  }
  
  get answerFloored(): number {
    return Math.floor(this.answer);
  }

  get remainder(): number {
    if (this.problemType === ProblemType.Division) {
      return this.values[0] % this.values[1];
    }
    return 0;
  }

}