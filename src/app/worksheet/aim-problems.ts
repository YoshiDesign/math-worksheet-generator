import { ProblemType } from './problem-type.enum';

export class AimProblems {

  custom : boolean;
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

  constructor() {
    this.custom = true;
    this.problemType = null;
    this.requiresHorizontal = false;
    this.solveForUnknown = false;
    this.firstPosition = 0;
    this.secondPosition = 0;
    this.sfu_answer = 0;
    this.values = [];
    this.lhs = 0;
    this.rhs = 0;
  }

  get answer(): number {

    if (this.solveForUnknown == true) {

      return this.rhs - this.lhs;

    }

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