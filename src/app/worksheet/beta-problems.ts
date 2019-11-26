import { ProblemType } from './problem-type.enum';

export class BetaProblems {

  problemType: ProblemType;
  values: number[] = [];
  symbol: string;
  requiresHorizontal : boolean;

  constructor() {
    this.problemType = null;
    this.requiresHorizontal = false;
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