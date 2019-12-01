import { ProblemType } from './problem-type.enum';

export class BetaProblems {

  problemType: ProblemType;
  values = [];
  symbol: string;
  requiresHorizontal : boolean;
  roundingTen : boolean;
  isInequality : boolean;
  equation_inequality : boolean;
  answer_inequality : string;
  answer_roundingTen : number;

  constructor() {
    this.roundingTen = false;
    this.problemType = null;
    this.requiresHorizontal = false;
    this.isInequality = false;
    this.equation_inequality = false;
    this.answer_inequality = "";
    this.answer_roundingTen = 0;
  }

  get answer(): number {
    let total = 0; // Start with zero so the looping has a starting value

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


}