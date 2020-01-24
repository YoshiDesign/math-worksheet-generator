import { ProblemType } from './problem-type.enum';

export class BetaProblems {

  custom : boolean;
  problemType: ProblemType;
  values = [];
  symbol: string;
  requiresHorizontal : boolean;
  roundingTen : boolean;
  isInequality : boolean;
  equation_inequality : boolean;
  answer_inequality : string;
  answer_roundingTen : number;
  problemNo : any;
  lessonNo : number;
  betaProblem : boolean;

  constructor() {
    this.custom = true;
    this.problemNo = 0;
    this.roundingTen = false;
    this.problemType = null;
    this.requiresHorizontal = false;
    this.isInequality = false;
    this.equation_inequality = false;
    this.answer_inequality = "";
    this.answer_roundingTen = 0;
    this.lessonNo = 0;
    this.betaProblem = true;
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