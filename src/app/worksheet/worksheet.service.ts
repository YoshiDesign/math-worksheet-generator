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
                  this.addProblem(this.getAlphaProblem(current_lesson));
                  break;
                case 'beta' :
                  this.getBetaProblem(current_lesson);
                  break;
                case 'gamma' : 
                  this.getGammaProblem(current_lesson);
                  break;
                case 'delta' :
                  this.getDeltaProblem(current_lesson);
                  break;
                case 'epsilon' :
                  this.getEpsilonProblem(current_lesson);
                  break;
                case 'zeta' :
                  this.getZetaProblem(current_lesson);
                  break;
                case 'prealgebra' :
                  this.getPrealgebraProblem(current_lesson);
                  break;
                case 'aim' :
                  this.getAimProblem(current_lesson);
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

    console.log("ALPHA LESSON" + String(lessonNo));
    const problem = new AlphaProblems();

    switch (Number(lessonNo)) {
      case 36 : 
        break;
      case 37 : 
        break;
      case 39 : 
        break;
      case 40 : 
        break;
      case 41 : 
        break;
      case 42 : 
        break;
      case 44 : 
        break;
      case 46 : 
        break;
      case 47 : 
        break;
      case 48 : 
        break;
      case 49 : 
        break;
      case 51 : 
        break;
      case 52 : 
        break;
      case 53 : 
        break;
      case 54 : 
        break;
      case 55 : 
        break;
      case 56 : 
        break;
      case 57 : 
        break;
      case 58 : 
        break;
      case 59 : 
        break;
      case 60 : 
        break;
      case 61 : 
        break;
      case 62 : 
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
    
      case 98 : 
        break;
      case 100 : 
        break;
      case 102 : 
        break;
      case 104 : 
        break;
      case 106 : 
        break;
      case 108 : 
        break;
      case 110 : 
        break;
      case 112 : 
        break;
      case 114 : 
        break;
      case 116 : 
        break;
      case 117 : 
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
      
      case 524:
        break;
      case 525:
        break;
      case 526:
        break;
      case 527:
        break;
      case 528:
        break;
      case 529:
        break;
      case 530:
        break;
      case 531:
        break;
      case 532:
        break;
      case 533:
        break;
      case 534:
        break;
      case 535:
        break;
      case 536:
        break;
      case 537:
        break;
      case 538:
        break;
      case 539:
        break;
      case 540:
        break;
      case 541:
        break;
      case 542:
        break;
      case 543:
        break;
      case 544:
        break;
      case 545:
        break;

    }
    return problem;
  }



  // 



  private getRandomNumberFromRange(range: MinimumMaximumRange) {
    return this.getRandomNumber(range.min, range.max);
  }

  private getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
