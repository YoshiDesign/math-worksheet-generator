import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { MathProblem } from './math-problem';
import { AlphaProblems } from './alpha-problems';
import { BetaProblems } from './beta-problems';
import { GammaProblems } from './gamma-problems';
import { DeltaProblems } from './delta-problems';
import { EpsilonProblems } from './epsilon-problems';
import { ZetaProblems } from './zeta-problems';
import { PrealgebraProblems } from './prealgebra-problems';
import { AimProblems } from './aim-problems';

import { ProblemType } from './problem-type.enum';

import {
  AdditionOptions,
  DivisionOptions,
  MinimumMaximumRange,
  MultiplicationOptions,
  SubtractionOptions,
  AlphaOptions,
  BetaOptions,
  GammaOptions,
  DeltaOptions,
  EpsilonOptions,
  ZetaOptions,
  PreAlgebraOptions,
  AimOptions,
  WorksheetOptions
} from '../options';

@Injectable()
export class WorksheetService {
  id: string;
  options: WorksheetOptions; // worksheet-options.ts
  problems: MathProblem[];
  lessons_selected : Array <Number>;
  all_selected_lessons : Array <Object>;

  constructor(private db: AngularFireDatabase) {
    this.options = new WorksheetOptions();
    this.problems = new Array<MathProblem>();
    this.lessons_selected = [];
    this.all_selected_lessons = [];
  }

  addProblem(problem) {
    this.problems.push(problem);
  }

  clearProblems() {     // 0
    this.problems = [];
  }

  generateProblems() {  // 1
    const availableProblemTypes: ProblemType[] = [];

    // since we are generating new problems, we should consider this a new worksheet
    this.id = null;

    this.clearProblems();

    /**
     * Add the enumerator value to the list of availableProblemTYpes
     */

     // Alpha selections
    if (this.options.alphaOptions.enabled) {
      
      // Get lesson numbers
      let lesson_elements = <HTMLSelectElement> document.getElementsByClassName('select-alpha-lesson');

      // Array of lesson ID's
      for (var i = 0; i < lesson_elements.length; i++) {
        this.options.lessonsCount += 1;
        this.lessons_selected.push(lesson_elements[i].value);
      }

      // Organize selections into the main selections obj
      this.all_selected_lessons.push({'alpha' : this.lessons_selected});
      this.lessons_selected = [];

      availableProblemTypes.push(ProblemType.Alpha);
    }

    // Beta Selections
    if (this.options.betaOptions.enabled) {
      

      let lesson_elements = <HTMLSelectElement> document.getElementsByClassName('select-beta-lesson');

      for (var i = 0; i < lesson_elements.length; i++) {
        this.options.lessonsCount += 1;
        this.lessons_selected.push(lesson_elements[i].value);
      }

      this.all_selected_lessons.push({'beta' : this.lessons_selected});
      this.lessons_selected = [];

      availableProblemTypes.push(ProblemType.Beta);
    }

    // Gamma Selections
    if (this.options.gammaOptions.enabled) {
      

      let lesson_elements = <HTMLSelectElement> document.getElementsByClassName('select-gamma-lesson');

      for (var i = 0; i < lesson_elements.length; i++) {
        this.options.lessonsCount += 1;
        this.lessons_selected.push(lesson_elements[i].value);
      }

      this.all_selected_lessons.push({'gamma' : this.lessons_selected});
      this.lessons_selected = [];

      availableProblemTypes.push(ProblemType.Gamma);
    } 

    // Delta Selections
    if (this.options.deltaOptions.enabled) {
      

      let lesson_elements = <HTMLSelectElement> document.getElementsByClassName('select-delta-lesson');

      for (var i = 0; i < lesson_elements.length; i++) {
        this.options.lessonsCount += 1;
        this.lessons_selected.push(lesson_elements[i].value);
      }

      this.all_selected_lessons.push({'delta' : this.lessons_selected});
      this.lessons_selected = [];

      availableProblemTypes.push(ProblemType.Delta);
    }

    // Epsilon Selection
    if (this.options.epsilonOptions.enabled) {
      

      let lesson_elements = <HTMLSelectElement> document.getElementsByClassName('select-epsilon-lesson');

      for (var i = 0; i < lesson_elements.length; i++) {
        this.options.lessonsCount += 1;
        this.lessons_selected.push(lesson_elements[i].value);
      }

      this.all_selected_lessons.push({'epsilon' : this.lessons_selected});
      this.lessons_selected = [];

      availableProblemTypes.push(ProblemType.Epsilon);
    }
 
    // Zeta Selections
    if (this.options.zetaOptions.enabled) {
      
      let lesson_elements = <HTMLSelectElement> document.getElementsByClassName('select-zeta-lesson');

      for (var i = 0; i < lesson_elements.length; i++) {
        this.options.lessonsCount += 1;
        this.lessons_selected.push(lesson_elements[i].value);
      }

      this.all_selected_lessons.push({'zeta' : this.lessons_selected});
      this.lessons_selected = [];
      availableProblemTypes.push(ProblemType.Zeta);
    }

    // PreAlgebra Selections
    if (this.options.prealgebraOptions.enabled) {
      

      let lesson_elements = <HTMLSelectElement> document.getElementsByClassName('select-prealgebra-lesson');

      for (var i = 0; i < lesson_elements.length; i++) {
        this.options.lessonsCount += 1;
        this.lessons_selected.push(lesson_elements[i].value);
      }

      this.all_selected_lessons.push({'prealgebra' : this.lessons_selected});
      this.lessons_selected = [];

      availableProblemTypes.push(ProblemType.Prealgebra);
    }

    // AIM Selections
    if (this.options.aimOptions.enabled) {
      

      let lesson_elements = <HTMLSelectElement> document.getElementsByClassName('select-aim-lesson');

      for (var i = 0; i < lesson_elements.length; i++) {
        this.options.lessonsCount += 1;
        this.lessons_selected.push(lesson_elements[i].value);
      }

      this.all_selected_lessons.push({'aim' : this.lessons_selected});
      this.lessons_selected = [];
      availableProblemTypes.push(ProblemType.Aim);
    }

    // console.log(this.all_selected_lessons);

    // if (this.options.additionOptions.enabled) {
    //   availableProblemTypes.push(ProblemType.Addition);
    // }

    // if (this.options.divisionOptions.enabled) {
    //   availableProblemTypes.push(ProblemType.Division);
    // }

    // if (this.options.multiplicationOptions.enabled) {
    //   availableProblemTypes.push(ProblemType.Multiplication);
    // }

    // if (this.options.subtractionOptions.enabled) {
    //   availableProblemTypes.push(ProblemType.Subtraction);
    // }



    // DEMME METHOD
    var min_problems = Math.floor(this.options.problemCount / this.options.lessonsCount);

    // Gather lesson id's in ascending order
    for (let x of this.all_selected_lessons) {
      
      for (let y in x) {

        var arr = x[y];

        for (let z in arr) {

          var current_lesson = arr[z];
            
            for (let n = 0; n < min_problems; n++) {
              this.options.problemCount--;

              switch (y) {
                case 'alpha' :
                  // console.log("Getting Alpha");
                  this.addProblem(this.getAlphaProblem(current_lesson));
                  break;
                case 'beta' :
                  this.addProblem(this.getBetaProblem(current_lesson));
                  break;
                case 'gamma' : 
                  this.addProblem(this.getGammaProblem(current_lesson));
                  break;
                case 'delta' :
                  this.addProblem(this.getDeltaProblem(current_lesson));
                  break;
                case 'epsilon' :
                  this.addProblem(this.getEpsilonProblem(current_lesson));
                  break;
                case 'zeta' :
                  this.addProblem(this.getZetaProblem(current_lesson));
                  break;
                case 'prealgebra' :
                  this.addProblem(this.getPrealgebraProblem(current_lesson));
                  break;
                case 'aim' :
                  this.addProblem(this.getAimProblem(current_lesson));
                  break;

              }

            }

        }

        // If we've supplied an even amount across selected levels, but we still have a problemCount remaining
        if (this.options.problemCount > 0) {
          for (let n = this.options.problemCount; n != 0; n-- ) {
            // TODO Generate last problems
          }
        }
      }
    }





    // OLD METHOD


    // for (let i = 0; i < this.options.problemCount; i++) {

      /**
       * Types of problems to be included:
       * 
       * This is where we will extrapolate everything into lesson by lesson inclusions
       * 
       * Right now this goes:
       * 
       *  Problem Type -> Read options -> Generate Problem -> add Problem
       *  
       * This needs to be:
       * 
       *  Lesson Number -> Lesson Problem Type -> Read Lesson Options -> Generate Problem -> Add Problem
       *  
       */

      // const problemType = availableProblemTypes[this.getRandomNumber(0, availableProblemTypes.length - 1)];

      // switch (problemType) {
      
        // case ProblemType.Addition:
          // this.addProblem(this.getAdditionProblem(this.options.additionOptions));
        //   break;
        // case ProblemType.Division:
        //   this.addProblem(this.getDivisionProblem(this.options.divisionOptions));
        //   break;
        // case ProblemType.Multiplication:
        //   this.addProblem(this.getMultiplicationProblem(this.options.multiplicationOptions));
        //   break;
        // case ProblemType.Subtraction:
        //   const problem = this.getSubtractionProblem(this.options.subtractionOptions);

        //   if (this.options.subtractionOptions.allowNegativeAnswers) {
        //     this.addProblem(problem);
        //   } else {
        //     if (problem.answer >= 0) {
        //       this.addProblem(problem);
        //     } else {
        //       i--; // it was a negative answer, so we don't want to add it, reset the loop counter
        //     }
        //   }

        //   break;
      // }
    // }
  }

  getById(id: string): FirebaseObjectObservable<WorksheetService> {
    return this.db.object(`/worksheets/${id}`);
  }

  save() {
    const worksheets = this.db.list('/worksheets');
    const savePayload = {
      options: this.options,
      problems: this.problems
    };

    if (this.id) {
      worksheets.update(this.id, savePayload).then(result => {
        console.log('Updated worksheet');
      });
    } else {
      worksheets.push(savePayload).then(result => {
        this.id = result.key;
        console.log('Saved worksheet');
      });
    }
  }

  updateFromJson(jsonObject: WorksheetService) {
    this.options.updateFromJson(jsonObject.options);

    this.clearProblems();

    jsonObject.problems.forEach(jsonProblem => {
      let problem = new MathProblem(jsonProblem.values[0], jsonProblem.values[1], jsonProblem.problemType);

      if (jsonProblem.values.length > 2) {
        for (let i = 2; i < jsonProblem.values.length; i++) {
          problem.addValue(jsonProblem.values[i]);
        }
      }

      this.addProblem(problem);
    });
  }

  // Bring the Lesson ID to each of these problem causing functions

  private getAdditionProblem(options: AdditionOptions) {

    const topAddend = this.getRandomNumberFromRange(options.addendRanges[0]); // 0 -> 100
    const bottomAddend = this.getRandomNumberFromRange(options.addendRanges[1]); // 0 -> 10
    const problem = new MathProblem(topAddend, bottomAddend, ProblemType.Addition);

    if (options.addendRanges.length > 2) {
      problem.clearValues();

      options.addendRanges.forEach(addendRange => {
        problem.addValue(this.getRandomNumber(addendRange.min, addendRange.max));
      });
    }

    return problem;
  }

  private getDivisionProblem(options: DivisionOptions) {
    const dividend = this.getRandomNumberFromRange(options.dividendRange);
    const divisor = this.getRandomNumberFromRange(options.divisorRange);
    const problem = new MathProblem(dividend, divisor, ProblemType.Division);

    return problem;
  }

  private getMultiplicationProblem(options: MultiplicationOptions) {
    const topFactor = this.getRandomNumberFromRange(options.factorRanges[0]);
    const bottomFactor = this.getRandomNumberFromRange(options.factorRanges[1]);
    const problem = new MathProblem(topFactor, bottomFactor, ProblemType.Multiplication);

    if (options.factorRanges.length > 2) {
      problem.clearValues();

      options.factorRanges.forEach(factorRange => {
        problem.addValue(this.getRandomNumber(factorRange.min, factorRange.max));
      });
    }

    return problem;
  }

  private getSubtractionProblem(options: SubtractionOptions) {
    const minuend = this.getRandomNumberFromRange(options.minuendRange);
    const subtrahend = this.getRandomNumberFromRange(options.subtrahendRanges[0]);
    const problem = new MathProblem(minuend, subtrahend, ProblemType.Subtraction);

    if (options.subtrahendRanges.length > 1) {
      problem.clearValues();

      problem.addValue(minuend);

      options.subtrahendRanges.forEach(subtrahendRange => {
        problem.addValue(this.getRandomNumber(subtrahendRange.min, subtrahendRange.max));
      });
    }

    return problem;
  }


  // MUS Functions
  private getAlphaProblem(lessonNo){

    // console.log("ALPHA LESSON" + String(lessonNo));
    const problem = new AlphaProblems();

    switch (Number(lessonNo)) {
      case 36 : // Lesson 4 - Adding 0
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.getRandomInt(10);
        problem.values[1] = problem.values[0] === 0 ? this.getRandomInt(9) : 0;
        problem.symbol = "+";
        break;
      case 37 : // Lesson 5- Adding 1
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.getRandomInt(10);
        problem.values[1] = problem.values[0] === 1 ? this.getRandomInt(9) : 1;
        problem.symbol = "+";
        break;
      case 39 : // Lesson 6 - Adding 2
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.getRandomInt(10);
        problem.values[1] = problem.values[0] === 2 ? this.getRandomInt(9) : 2;
        problem.symbol = "+";
        break;
      case 40 : // Lesson 8 - Solve for Unknown
        
        var a = this.getRandomInt(10);
        var c = this.getRandomInt(10);
        var switcher = this.getRandomInt(2);

        problem.problemType = 1;

        // smaller of the two
        var lhs = (a >= c) ? c : a;
        // larger of the two
        var rhs = (a >= c) ? a : c;

        this.options.showHorizontal = true;
        problem.requiresHorizontal = true;
        problem.solveForUnknown = true;

        problem.lhs = lhs;
        problem.rhs = rhs;
        problem.firstPosition = (switcher === 1) ? lhs : "_";
        problem.secondPosition = (switcher === 1) ? "_" : lhs;
        problem.values[0] = problem.firstPosition;
        problem.values[1] = problem.secondPosition; 
        problem.sfu_answer = rhs;

        problem.symbol = "+";

        break;
      case 41 : 
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.getRandomInt(10);
        problem.values[1] = problem.values[0] === 9 ? this.getRandomInt(9) : 9;
        problem.symbol = "+";
        break;
      case 42 : 
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.getRandomInt(10);
        problem.values[1] = problem.values[0] === 8 ? this.getRandomInt(9) : 8;
        problem.symbol = "+";
        break;
      case 44 : 
        var num = this.getRandomInt(10);
        problem.problemType = ProblemType.Addition;
        problem.values[0] = num;
        problem.values[1] = num;
        problem.symbol = "+";
        break;
      case 46 : 
        var num = this.getRandomInt(10);
        problem.problemType = ProblemType.Addition;
        problem.values[0] = num;
        problem.values[1] = num + 1;
        problem.symbol = "+";
        break;
      case 47 : 
        // Lesson 15 - Adding to make 10
        var x = 0;
        var y = 0;
        do {
          x = this.getRandomInt(10); // TODO repeat the randomization for either x or y, we're getting lots of repeats
          y = this.getRandomInt(10);
        } while (x + y != 10)
        problem.problemType = ProblemType.Addition;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "+";
        break;
      case 48 : 
        // Lesson 16 - Adding to make 9
        var x = 0;
        var y = 0;
        do {
          x = this.getRandomInt(10); // TODO repeat the randomization for either x or y, we're getting lots of repeats
          y = this.getRandomInt(10);
        } while (x + y != 9)
        problem.problemType = ProblemType.Addition;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "+";
        break;
      case 49 : 
        // Lesson 17 - 3+5, 4+7, 5+7
        var x = 0;
        var y = 0;
        do {
          x = this.getRandomInt(7);
          var inspect = (x == 3 || x == 4 || x == 5)
        } while (!inspect)

        if (x == 3)
          y = 5;
        if (x == 4 || x == 5)
          y = 7;

        // Occasionally switch x and y
        var rand = this.getRandomInt(2);
        if (rand == 1) {
          var tmp = x;
          x = y;
          y = tmp;
        }
        problem.problemType = ProblemType.Addition;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "+";
        break;
      case 51 : 
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          x = this.getRandomInt(11);
          y = this.getRandomInt(11);
          if (y == 1 || y == 0 && x > 0) {
            inspect = true;
          }
          if (!inspect) {
            if ((x - y) === 0)
              inspect = true;
            if ((x-y) === 1)
              inspect = true;
          }
        } while(!inspect)
        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 52 : // Lesson 20 - Subtracting 2
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          x = this.getRandomInt(13);
          y = this.getRandomInt(13);
          if (y == 2 && x >= 3) {
            inspect = true;
          }
          if (!inspect) {
            if ((x - y) === 2)
              inspect = true;
          }
        } while(!inspect)
        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;

      case 53 : // Lesson 21 - Subtracting 9
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          x = this.getRandomInt(21);
          y = this.getRandomInt(21);
          if (y == 9 && x >= 10) {
            inspect = true;
          }
          if (!inspect) {
            if ((x - y) === 9)
              inspect = true;
          }
        } while(!inspect)
        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;

      case 54 : // Lesson 22 - Subtracting 8
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          x = this.getRandomInt(21);
          y = this.getRandomInt(21);
          if (y == 8 && x >= 9) {
            inspect = true;
          }
          if (!inspect) {
            if ((x - y) === 8)
              inspect = true;
          }
        } while(!inspect)
        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;

      case 55 : // Lesson 23 - Doubles Subtraction

        var x = this.getRandomInt(10);
        var y = x;
        x = x * 2;

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;

      case 56 : // Lesson 24 Subtraction Making 10
        
        var x = 10;
        var y = this.getRandomInt(10);

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;

      case 57 :  // Lesson 25 Subtraction Making 9
        var x = 9;
        var y = this.getRandomInt(9);

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 58 : // Lesson 26 Subtraction - Extras
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          x = this.getRandomInt(9);
          if (x == 7) {
            y = this.getRandomInt(6);
            if (y == 4 || y == 3) {
              inspect = true; 
            }
          }
          if (x == 8) {
            y = this.getRandomInt(6);
            if (y == 5  || y == 3) {
              inspect = true;
            }
          }
        } while (!inspect)

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";

        break;
      case 59 : // Lesson 27 - Subtracting 7

        var x = 0;
        var y = 7;
        var inspect = false;
        do {
          x = this.getRandomInt(15);
          if (x >= 7)
            inspect = true;
        } while(!inspect)

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;

      case 60 : // Lesson 27 - Subtracting 6
        var x = 0;
        var y = 6;
        var inspect = false;
        do {
          x = this.getRandomInt(13);
          if (x >= 6)
            inspect = true;
        } while(!inspect)

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;

      case 61 : // Lesson 28 - Subtracting 5
        var x = 0;
        var y = 5;
        var inspect = false;
        do {
          x = this.getRandomInt(13);
          if (x >= 5)
            inspect = true;
        } while(!inspect)

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;

      case 62 : // Subtraction by 3 and 4
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          
          x = this.getRandomInt(11);
          y = this.getRandomInt(5);

          if ((y == 3 || y == 4) && x >= 5) {
            inspect = true;
          }

        } while(!inspect)

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;

    }
    return problem;
  }

  private getBetaProblem(lessonNo){

    const problem = new BetaProblems();
    console.log("Beta LESSON" + String(lessonNo));

    switch (Number(lessonNo)) {

      case 68 : 
        break;
      case 69 : 
        break;
      case 70 : 
        break;
      case 72 : 
        break;
      case 76 : 
        break;
      case 78 : 
        break;
      case 81 : 
        break;
      case 83 : 
        break;
      case 84 : 
        break;
      case 85 : 
        break;
      case 87 : 
        break;
      case 89 : 
        break;
      case 91 : 
        break;
      case 93 : 
        break;

    }
    return problem;
  }

  private getGammaProblem(lessonNo){

    console.log("Gamma LESSON" + String(lessonNo));
    const problem = new GammaProblems();

    switch (Number(lessonNo)) {
    
      case 98 : // Lesson 2 - Multiply By 1 And 0, Commutative Property
        problem.problemType = ProblemType.Multiplication;
        problem.values[0] = this.getRandomInt(10);
        problem.values[1] = problem.values[0] === (0 || 1) ? this.getRandomInt(10) : this.getRandomInt(2);
        problem.symbol = "x";
        break;
      case 100 : // Lesson 4 - Multiply By 2, 1 Quart = 2 Pints
        var x = this.getRandomInt(10);
        var y = 2;
        var switcher = this.getRandomInt(2);
        if (switcher !== 0) {
          var tmp = x;
          x = y;
          y = tmp;
        }

        problem.problemType = ProblemType.Multiplication;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "x";
        break;
      case 102 : // Lesson 6 - Multiply By 5, 5¢ = 1 Nickel
        var x = this.getRandomInt(10);
        var y = 5;
        var switcher = this.getRandomInt(2);
        if (switcher !== 0) {
          var tmp = x;
          x = y;
          y = tmp;
        }

        problem.problemType = ProblemType.Multiplication;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "x";
        break;
      case 104 : // Lesson 8 - Solve For An Unknown
        var a = this.getRandomInt(10);
        var c = this.getRandomInt(10);
        var nn = a * c;
        var switcher = this.getRandomInt(2);
        var letters = [
          "C", "E", "K", "F", "B", "N", "A", "L", "D", "G"
        ]
        var letter = letters[this.getRandomInt(letters.length - 1)];

        var lhs = a;
        var rhs = c;

        this.options.showHorizontal = true;
        problem.problemType = 8;
        problem.requiresHorizontal = true;
        problem.solveForUnknown = true;

        problem.lhs = lhs;
        problem.rhs = rhs;
        problem.lessonNo = 104;
        problem.firstPosition = lhs;
        problem.secondPosition = letter;
        problem.values[0] = problem.firstPosition;
        problem.values[1] = problem.secondPosition; 
        problem.sfu_answer = nn;

        problem.symbol = "";

        break;
      case 106 : // Lesson 10 - Multiply By 9
        break;
      case 108 : //
        break;
      case 110 : //
        break;
      case 112 : //
        break;
      case 114 : //
        break;
      case 116 : //
        break;
      case 117 : // 
        break;
      case 119 : 
        break;
      case 120 : 
        break;
      case 1211 : 
        break;
      case 1212 : 
        break;
      case 1241 : 
        break;
      case 1242 : 
        break;

    }
    return problem;
  }

  private getDeltaProblem(lessonNo){

    const problem = new DeltaProblems();
    console.log("Delta LESSON" + String(lessonNo));

    switch (Number(lessonNo)) {

      case 129 :
        break;;
      case 130 :
        break;;
      case 131 :
        break;;
      case 133 :
        break;;
      case 135 :
        break;;
      case 137 :
        break;;
      case 139 :
        break;;
      case 143 :
        break;;
      case 145 :
        break;;
      case 146 :
        break;;
      case 147 :
        break;;
      case 149 :
        break;;
      case 150 :
        break;;
      case 151 :
        break;;
      case 152 :
        break;;
      case 154 :
        break;;
      case 155 :
        break;;
      case 157 :
        break;;
    
    }
    return problem;
  }

  private getEpsilonProblem(lessonNo){

    const problem = new EpsilonProblems();
    console.log("Epsil LESSON" + String(lessonNo));

    switch (Number(lessonNo)) {
    

      case 161:
        break;
      case 163:
        break;
      case 164:
        break;
      case 166:
        break;
      case 167:
        break;
      case 168:
        break;
      case 170:
        break;
      case 171:
        break;
      case 173:
        break;
      case 175:
        break;
      case 176:
        break;
      case 177:
        break;
      case 178:
        break;
      case 179:
        break;
      case 180:
        break;
      case 181:
        break;
      case 183:
        break;
      case 187:
        break;

    }
    return problem;
  }

  private getZetaProblem(lessonNo){

    const problem = new ZetaProblems();
    console.log("Zeta LESSON" + String(lessonNo));

    switch (Number(lessonNo)) {
    
    
      case 193 :
        break;
      case 194 :
        break;
      case 197 :
        break;
      case 198 :
        break;
      case 199 :
        break;
      case 203 :
        break;
      case 204 :
        break;
      case 206 :
        break;
      case 207 :
        break;
      case 208 :
        break;
      case 209 :
        break;
      case 2101 :
        break;
      case 2102 :
        break;
      case 2103 :
        break;
      case 2104 :
        break;
      case 211 :
        break;
      case 212 :
        break;
      case 213 :
        break;

    }
    return problem;
  }

  private getPrealgebraProblem(lessonNo){

    const problem = new PrealgebraProblems();
    console.log("Prealg LESSON" + String(lessonNo));

    switch (Number(lessonNo)) {

      case 221:
        break;
      case 222:
        break;
      case 223:
        break;
      case 224:
        break;
      case 225:
        break;
      case 226:
        break;
      case 227:
        break;
      case 228:
        break;
      case 233:
        break;
      case 234:
        break;
      case 236:
        break;
      case 237:
        break;
    
    }
    return problem;
  }

  private getAimProblem(lessonNo){

    const problem = new AimProblems();
    console.log("AIM LESSON" + String(lessonNo));

    switch (Number(lessonNo)) {
      
      // case 524:
      //   break;
      case 525: // Lesson 2 - Addition +2
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.getRandomInt(10);
        problem.values[1] = problem.values[0] === 2 ? this.getRandomInt(9) : 2;
        problem.symbol = "+";
        
        break;
      case 526: // Lesson 3 - Addition +9
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.getRandomInt(10);
        problem.values[1] = problem.values[0] === 9 ? this.getRandomInt(9) : 9;
        problem.symbol = "+";
        break;
      case 527: // Lesson 4 - Addition +8
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.getRandomInt(10);
        problem.values[1] = problem.values[0] === 8 ? this.getRandomInt(9) : 8;
        problem.symbol = "+";
        break;
      case 528: // Lesson 5 - Addition Doubles
        var num = this.getRandomInt(10);
        problem.problemType = ProblemType.Addition;
        problem.values[0] = num;
        problem.values[1] = num;
        problem.symbol = "+";
        break;
      case 529: // Lesson 6 - Addition Doubles +1
        var num = this.getRandomInt(10);
        problem.problemType = ProblemType.Addition;
        problem.values[0] = num;
        problem.values[1] = num + 1;
        problem.symbol = "+";
        break;
      case 530: // Lesson 7 - Addition making 10
        var x = 0;
        var y = 0;
        do {
          x = this.getRandomInt(10); // TODO repeat the randomization for either x or y, we're getting lots of repeats
          y = this.getRandomInt(10);
        } while (x + y != 10)
        problem.problemType = ProblemType.Addition;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "+";
        break;
      case 531: // Lesson 8 - Addition making 9
        var x = 0;
        var y = 0;
        do {
          x = this.getRandomInt(10); // TODO repeat the randomization for either x or y, we're getting lots of repeats
          y = this.getRandomInt(10);
        } while (x + y != 9)
        problem.problemType = ProblemType.Addition;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "+";
        break;
      case 532: // Lesson 9 - Addition of the Extras
        var x = 0;
        var y = 0;
        do {
          x = this.getRandomInt(7);
          var inspect = (x == 3 || x == 4 || x == 5)
        } while (!inspect)

        if (x == 3)
          y = 5;
        if (x == 4 || x == 5)
          y = 7;

        // Occasionally switch x and y
        var rand = this.getRandomInt(2);
        if (rand == 1) {
          var tmp = x;
          x = y;
          y = tmp;
        }
        problem.problemType = ProblemType.Addition;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "+";
        break;
      case 533: // Lesson 10 - Solving for the Unknown
        //
        // Horizontal requirement
        //
        break;
      case 534: // Lesson 11 - Intro to Subtraction
        var x = 0;
        var y = 0;
        do {
          x = this.getRandomInt(10); // TODO repeat the randomization for either x or y, we're getting lots of repeats
          y = this.getRandomInt(10);
        } while (x < y)
        problem.problemType = ProblemType.Addition;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 535: // Lesson 12 - Subtraction -2
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          x = this.getRandomInt(13);
          y = this.getRandomInt(13);
          if (y == 2 && x >= 3) {
            inspect = true;
          }
          if (!inspect) {
            if ((x - y) === 2)
              inspect = true;
          }
        } while(!inspect)
        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 536: // Lesson 13 - Subtraction -9
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          x = this.getRandomInt(21);
          y = this.getRandomInt(21);
          if (y == 9 && x >= 10) {
            inspect = true;
          }
          if (!inspect) {
            if ((x - y) === 9)
              inspect = true;
          }
        } while(!inspect)
        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 537: // Lesson 14 - Subtraction -8
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          x = this.getRandomInt(21);
          y = this.getRandomInt(21);
          if (y == 8 && x >= 9) {
            inspect = true;
          }
          if (!inspect) {
            if ((x - y) === 8)
              inspect = true;
          }
        } while(!inspect)
        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 538: // Lesson 15 - Subtraction Doubles
        var x = this.getRandomInt(10);
        var y = x;
        x = x * 2;

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 539: // Lesson 16 - Sub Make 10
        var x = 10;
        var y = this.getRandomInt(10);

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 540: // Lesson 17 - Sub Make 9
        var x = 9;
        var y = this.getRandomInt(9);

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 541: // Lesson 18 - Sub Extras
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          x = this.getRandomInt(9);
          if (x == 7) {
            y = this.getRandomInt(6);
            if (y == 4 || y == 3) {
              inspect = true; 
            }
          }
          if (x == 8) {
            y = this.getRandomInt(6);
            if (y == 5  || y == 3) {
              inspect = true;
            }
          }
        } while (!inspect)

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 542: // Lesson 19 - Sub by 7 or adding up by 3
        var x = 0;
        var y = 7;
        var inspect = false;
        do {
          x = this.getRandomInt(15);
          if (x >= 7)
            inspect = true;
        } while(!inspect)

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 543: // Lesson 20 - Sub by 6 or adding up by 4
        var x = 0;
        var y = 6;
        var inspect = false;
        do {
          x = this.getRandomInt(13);
          if (x >= 6)
            inspect = true;
        } while(!inspect)

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 544: // Lesson 21 - Sub by 5 or adding up by 5
        var x = 0;
        var y = 5;
        var inspect = false;
        do {
          x = this.getRandomInt(13);
          if (x >= 5)
            inspect = true;
        } while(!inspect)

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;
      case 545: // Lesson 22 - Subtraction by 3 and 4
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          
          x = this.getRandomInt(11);
          y = this.getRandomInt(5);

          if ((y == 3 || y == 4) && x >= 5) {
            inspect = true;
          }

        } while(!inspect)

        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "-";
        break;

    }
    return problem;
  }

  private getRandomNumberFromRange(range: MinimumMaximumRange) {
    return this.getRandomNumber(range.min, range.max);
  }

  private getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
