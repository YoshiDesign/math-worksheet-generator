import { ProblemType } from './problem-type.enum';

export class GammaProblems {
  problemType: ProblemType;
  symbol: string;
  values;
  requiresHorizontal : boolean;
  solveForUnknown : boolean;
  sfu_answer : number;
  firstPosition;
  secondPosition;
  lhs;
  rhs;
  lessonNo;
  problemNo : any;

  constructor() {
    this.problemNo = 0;
    this.problemType = null;
    this.requiresHorizontal = false;
    this.solveForUnknown = false;
    this.firstPosition = 0;
    this.secondPosition = 0;
    this.sfu_answer = 0;
    this.values = [];
    this.lhs = 0;
    this.rhs = 0;
    this.lessonNo = 0;
  }

  get answer(): number {

    if (this.solveForUnknown == true) {

      if (this.rhs === 0)
        return 0;

      return this.rhs;

    }

    let total = 0; // Start with zero so the looping has a starting value

    if (this.problemType === ProblemType.Subtraction) {
      total = this.values[0] * 2;
    }
    if (this.problemType === ProblemType.Multiplication) {
      total = 1;
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