import { Injectable } from '@angular/core';

// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { MathProblem } from './math-problem';
import { AlphaProblems } from './alpha-problems';
import { BetaProblems } from './beta-problems';
import { GammaProblems } from './gamma-problems';
import { DeltaProblems } from './delta-problems';
import { EpsilonProblems } from './epsilon-problems';
import { ZetaProblems } from './zeta-problems';
import { PrealgebraProblems } from './prealgebra-problems';
import { AimProblems } from './aim-problems';
import { AimMDProblems } from './aim-md-problems';

import {WorksheetGeneratorComponent} from '../worksheet-generator/worksheet-generator.component';

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
import { splitAtColon } from '../../../node_modules/@angular/compiler/src/util';
import { NonNullAssert } from '../../../node_modules/@angular/compiler';

@Injectable()
export class WorksheetService {
  id: string;
  options: WorksheetOptions; // worksheet-options.ts
  problems: MathProblem[];
  lessons_selected : Array <Number>;
  all_selected_lessons : Array <Object>;

  constructor(/*private db : AngularFireDatabase*/) {
    this.options = new WorksheetOptions();
    this.problems = new Array<MathProblem>();
    this.lessons_selected = [];
    this.all_selected_lessons = [];

  }

  addProblem(problem) {
     // console.log ('push problem');
    this.problems.push(problem);
  }

  clearProblems() {     // 0
    this.problems = [];
    this.all_selected_lessons = [];
    this.lessons_selected = [];
    this.options.lessonsCount = 0;
  }

  generateProblems() {  // 1
     // console.log ('Generate Problem');
    const availableProblemTypes: ProblemType[] = [];
    var lessons_returned : Array <number> = [];

    // since we are generating new problems, we should consider this a new worksheet
    this.id = null;

    this.clearProblems();

     // console.log ("Generating ...");

    /**
     * Add the enumerator value to the list of availableProblemTYpes
     */

     // Alpha selections
    if (this.options.alphaOptions.enabled) {
      
      // Get lesson numbers
      let lesson_elements : HTMLCollection =  document.getElementsByClassName('select-alpha-lesson');
       // console.log (`-A- found ${lesson_elements.length} alpha lessons.`);
      let adding_lesson = false;

      // Array of lesson ID's
      for (var i = 0; i < lesson_elements.length; i++) {

        let test_el = <HTMLSelectElement> lesson_elements[i];

        if (test_el.value !== "default") {
          this.options.lessonsCount += 1;
          this.lessons_selected.push(Number(test_el.value));
          adding_lesson = true;
        }

      }

      // Organize selections into the main selections obj
      if (adding_lesson){

        // this.all_selected_lessons.push({'alpha' : this.lessons_selected});
        this.all_selected_lessons['alpha'] = this.lessons_selected
        this.lessons_selected = [];
        availableProblemTypes.push(ProblemType.Alpha);
        
      }

    }

    // Beta Selections
    if (this.options.betaOptions.enabled) {
      
      let lesson_elements : HTMLCollection = document.getElementsByClassName('select-beta-lesson');

      let adding_lesson = false;

      //  // console.log (`-B- found ${lesson_elements.length} beta lessons.`);

      for (var i = 0; i < lesson_elements.length; i++) {

        let test_el = <HTMLSelectElement> lesson_elements[i];

        if (test_el.value !== "default") {
          this.options.lessonsCount += 1;
          this.lessons_selected.push(Number(test_el.value));
          adding_lesson = true;
        }

      }

      if (adding_lesson){

        // this.all_selected_lessons.push({'beta' : this.lessons_selected});
        this.all_selected_lessons['beta'] = this.lessons_selected
        this.lessons_selected = [];
        availableProblemTypes.push(ProblemType.Beta);
        
      }

    }

    // Gamma Selections
    if (this.options.gammaOptions.enabled) {
      
      let lesson_elements : HTMLCollection = document.getElementsByClassName('select-gamma-lesson');
      let adding_lesson = false;

       // console.log (`-G- found ${lesson_elements.length} gamma lessons.`);

      for (var i = 0; i < lesson_elements.length; i++) {

        let test_el = <HTMLSelectElement> lesson_elements[i];

        if (lesson_elements[i].getAttribute('value') !== "default") {

          this.options.lessonsCount += 1;
          this.lessons_selected.push(Number(test_el.value));
          adding_lesson = true;
        }

      }

      if (adding_lesson){

        // this.all_selected_lessons.push({'gamma' : this.lessons_selected});
        this.all_selected_lessons['gamma'] = this.lessons_selected
        this.lessons_selected = [];
        availableProblemTypes.push(ProblemType.Gamma);
        
      }

    } 

    // Delta Selections
    if (this.options.deltaOptions.enabled) {
      
      let lesson_elements : HTMLCollection = document.getElementsByClassName('select-delta-lesson');
      let adding_lesson = false;

       // console.log (`-D- found ${lesson_elements.length} delta lessons.`);

      for (var i = 0; i < lesson_elements.length; i++) {

        let test_el = <HTMLSelectElement> lesson_elements[i];

        if (test_el.value !== "default") {
          this.options.lessonsCount += 1;
          this.lessons_selected.push(Number(test_el.value));
          adding_lesson = true;
        }

      }

      if (adding_lesson){

        // this.all_selected_lessons.push({'delta' : this.lessons_selected});
        this.all_selected_lessons['delta'] = this.lessons_selected
        this.lessons_selected = [];
        availableProblemTypes.push(ProblemType.Delta);
        
      }

    }

    // Epsilon Selection
    if (this.options.epsilonOptions.enabled) {
      
      let lesson_elements : HTMLCollection = document.getElementsByClassName('select-epsilon-lesson');
      let adding_lesson = false;

       // console.log (`-E- found ${lesson_elements.length} epsilon lessons.`);

      for (var i = 0; i < lesson_elements.length; i++) {

        let test_el = <HTMLSelectElement> lesson_elements[i];

        if (test_el.value !== "default") {
          this.options.lessonsCount += 1;
          this.lessons_selected.push(Number(test_el.value));
          adding_lesson = true;
        }

      }

      if (adding_lesson){

        // this.all_selected_lessons.push({'epsilon' : this.lessons_selected});
        this.all_selected_lessons['epsilon'] = this.lessons_selected
        this.lessons_selected = [];
        availableProblemTypes.push(ProblemType.Epsilon);
        
      }

    }
 
    // Zeta Selections
    if (this.options.zetaOptions.enabled) {
      
      let lesson_elements : HTMLCollection = document.getElementsByClassName('select-zeta-lesson');
      let adding_lesson = false;

       // console.log (`-Z- found ${lesson_elements.length} zeta lessons.`);

      for (var i = 0; i < lesson_elements.length; i++) {

        let test_el = <HTMLSelectElement> lesson_elements[i];

        if (test_el.value !== "default") {

          this.options.lessonsCount += 1;
          this.lessons_selected.push(Number(test_el.value));
          adding_lesson = true;
        }

      }

      if (adding_lesson){

        // this.all_selected_lessons.push({'zeta' : this.lessons_selected});
        this.all_selected_lessons['zeta'] = this.lessons_selected
        this.lessons_selected = [];
        availableProblemTypes.push(ProblemType.Zeta);
        
      }
    }

    // PreAlgebra Selections
    if (this.options.prealgebraOptions.enabled) {
      

      let lesson_elements : HTMLCollection = document.getElementsByClassName('select-prealgebra-lesson');
      let adding_lesson = false;

       // console.log (`-PA- found ${lesson_elements.length} prealgebra lessons.`);

      for (var i = 0; i < lesson_elements.length; i++) {

        let test_el = <HTMLSelectElement> lesson_elements[i];

        if (test_el.value !== "default") {
          this.options.lessonsCount += 1;
          this.lessons_selected.push(Number(test_el.value));
          adding_lesson = true;
        }

      }

      if (adding_lesson){

        // this.all_selected_lessons.push({'prealgebra' : this.lessons_selected});
        this.all_selected_lessons['prealgebra'] = this.lessons_selected
        this.lessons_selected = [];
        availableProblemTypes.push(ProblemType.Prealgebra);
        
      }

    }

    // AIM Selections
    if (this.options.aimOptions.enabled) {
      
      let lesson_elements :HTMLCollection = document.getElementsByClassName('select-aim-lesson');
      let adding_lesson = false;

       // console.log (`-AIM- found ${lesson_elements.length} AIM lessons.`);

      for (var i = 0; i < lesson_elements.length; i++) {

        let test_el = <HTMLSelectElement> lesson_elements[i];

        if (test_el.value !== "default") {
          this.options.lessonsCount += 1;
          this.lessons_selected.push(Number(test_el.value));
          adding_lesson = true;
        }

      }

      if (adding_lesson){

        // this.all_selected_lessons.push({'aim' : this.lessons_selected});
        this.all_selected_lessons['aim'] = this.lessons_selected
        this.lessons_selected = [];
        availableProblemTypes.push(ProblemType.Aim);
        
      }
    }
    // AIM MD Selections
    if (this.options.aimMdOptions.enabled) {
      
        let lesson_elements :HTMLCollection = document.getElementsByClassName('select-aimMD-lesson');
        let adding_lesson = false;
  
         // console.log (`-AIM- found ${lesson_elements.length} AIM lessons.`);
  
        for (var i = 0; i < lesson_elements.length; i++) {
  
          let test_el = <HTMLSelectElement> lesson_elements[i];
  
          if (test_el.value !== "default") {
            this.options.lessonsCount += 1;
            this.lessons_selected.push(Number(test_el.value));
            adding_lesson = true;
          }
  
        }
  
        if (adding_lesson){
  
          // this.all_selected_lessons.push({'aim' : this.lessons_selected});
          this.all_selected_lessons['aimMD'] = this.lessons_selected
          this.lessons_selected = [];
          availableProblemTypes.push(ProblemType.Aim);
        
        }
      }
     // console.log (`Modulus of lessons per level = ${String(Math.floor(this.options.problemCount % this.options.lessonsCount))}`);

    // DEMME METHOD
    var current_level : string;
    var current_lesson : number;
    var original_count : number = this.options.problemCount;
    var min_problems : number = Math.floor(this.options.problemCount / this.options.lessonsCount);
    // Math.floor is a safety mechanism to ensure this is never a float.
    var extra_mod : number = Math.floor(this.options.problemCount % this.options.lessonsCount);
    var levels : Array <string> = Object.keys(this.all_selected_lessons);
    var track = 0;

    // Gather lesson id's in ascending orders
    for (let i = 0; i < levels.length; i++) { // Current level to get problems
 
      current_level = levels[i];

      for (let j = 0; j < this.all_selected_lessons[String(levels[i])].length; j++) { // loop through lessons of current level
        
        current_lesson = this.all_selected_lessons[String(levels[i])][j]; // INT - The current lesson id we're looking at

        track++;
         // console.log (`Problem No. ${track} -- [${current_lesson}]`);
          
        for (let n = 0; n < min_problems; n++) {
          this.options.problemCount--;
          // Add the lesson_id to our array of lesson_ids included in this worksheet
          lessons_returned.push(this.generateProblemFrom(current_level, current_lesson));
        }
      }
    }
    for (let i = 0; i < extra_mod; i++)
    {
        // Add the lesson_id to our array of lesson_ids included in this worksheet
        lessons_returned.push(this.generateProblemFrom(current_level, current_lesson));
    }

    this.options.problemCount = original_count;

    return lessons_returned;

  }

  private generateProblemFrom(current_level, current_lesson) : number {
    switch (current_level) {
      case 'alpha' :
        //  // console.log ("Getting Alpha");
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
      case 'aimMD' :
        this.addProblem(this.getAimMDProblem(current_lesson));
        break;

    }
    console.log(`Adding Lesson ${current_lesson}`);
    return Number(current_lesson);
  }

  // getById(id: string): FirebaseObjectObservable<WorksheetService> {
  //   return this.db.object(`/worksheets/${id}`);
  // }

  // save() {
  //   const worksheets = this.db.list('/worksheets');
  //   const savePayload = {
  //     options: this.options,
  //     problems: this.problems
  //   };

  //   if (this.id) {
  //     worksheets.update(this.id, savePayload).then(result => {
  //        // console.log ('Updated worksheet');
  //     });
  //   } else {
  //     worksheets.push(savePayload).then(result => {
  //       this.id = result.key;
  //        // console.log ('Saved worksheet');
  //     });
  //   }
  // }

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
    // const dividend = this.getRandomNumberFromRange(options.dividendRange);
    // const divisor = this.getRandomNumberFromRange(options.divisorRange);
    // const problem = new MathProblem(dividend, divisor, ProblemType.Division);

    // return problem;
    return 0;
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

    //  // console.log ("ALPHA LESSON" + String(lessonNo));
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

        problem.lessonNo = 40;
        problem.custom = true;

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
      case 51 : // Subtracting 0 and 1
        var x = 0;
        var y = 0;
        var inspect = false;
        do {
          x = this.getRandomInt(11);
          y = this.getRandomInt(11);
          if ((y == 1 || y == 0) && x > 0) {
            inspect = true;
          }
          if (!inspect) {
            if (((x - y) >= 0) && ((x == 1 || x == 0) || (y==1 || y==0)))
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
    //  // console.log ("Beta LESSON" + String(lessonNo));

    switch (Number(lessonNo)) {

      case 68 : 

        this.options.showHorizontal = true;
        this.options.containsInequality = true;
        this.options.problemsPerRow = 3;
        problem.problemType = ProblemType.Inequality;
        problem.isInequality = true;
        problem.equation_inequality = (this.getRandomInt(2)) == 1 ? true : false;
        problem.lessonNo = 68;

        var w = 0;
        var x = 0;
        var y = 0;
        var z = 0;
        var ans;

        if (problem.equation_inequality == true) {

          // Equation inequality
          w = this.getRandomInt(10);
          x = this.getRandomInt(10);
          y = this.getRandomInt(10);
          z = this.getRandomInt(10);

          problem.values[0] = String(w) + " + " + String(x);
          problem.values[1] = String(y) + " + " + String(z);
          
          if ((w + x) < (y + z)) {
            ans = "<";
          } else if ((w + x) > (y + z)) {
            ans = ">";
          } else if ((w + x) == (y + z)) {
            ans = "=";
          }

        } else {
          // whole number inequality
          x = this.getRandomInt(10);
          y = this.getRandomInt(10);
          if (x > y) ans = ">";
          else if (x < y) ans = "<";
          else if (x == y) ans = "=";
          problem.values[0] = x;
          problem.values[1] = y;
        }
        problem.answer_inequality = ans;

        break;
      case 69 : // Round to nearest 10

      // Pick a value that isn't a multiple of 10 already
        do {
          var x : number = this.pickFromRange(10, 90);
        } while (x % 10 == 0);
        var y = x;
        var orig_x = x;
        var ansTen = 1;
        var iSwitch = 0;

        do {

          ++x;
          --y;

          if (x % 10 ==  0 && y % 10 == 0) {

            ansTen = x;

          }

          if (x % 10 !=  0 && y % 10 == 0) {

            ansTen = y;

          }

          if (x % 10 == 0 && y % 10 != 0) {

            ansTen = x;
          }

        } while(ansTen % 10 !== 0)

        problem.lessonNo = 69;
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.RoundingTen;
        problem.roundingTen = true;
        problem.answer_roundingTen = ansTen;
        problem.values[0] = orig_x;

        break;
      case 70 : // Multiple Digit Addition
        var x = 0;
        var y = 0;
        do {

          x = this.getRandomInt(999);
          y = this.getRandomInt(999);

        } while ((x < 100) || (y < 100));
        problem.custom = false;
        problem.problemType = ProblemType.Addition;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "+";
        break;
      case 72 : // 2 Digit addition with carry

        var x = 0;
        var y = 0;
        var str_x = "";
        var str_y = "";

        do {

          x = this.getRandomInt(99);
          y = this.getRandomInt(99);
          str_x = String(x);
          str_y = String(y);
          var str_x_split = str_x.split("");
          var str_y_split = str_y.split("");

        } while ((Number(str_x_split) + Number(str_y_split) < 10));
        problem.custom = false;
        problem.problemType = ProblemType.Addition;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "+";
        problem.lessonNo = 72;

        break;
      case 76 : // Sum < 1000
         // console.log ('IN BETA PROBLEM');
        var x = 0;
        var y = 0;
        var str_x = "";
        var str_y = "";

        do {

          x = this.pickFromRange(455, 100);
          y = this.pickFromRange(455, 100);
          str_x = String(x);
          str_y = String(y);
          var str_x_split = str_x.split("");
          var str_y_split = str_y.split("");

        } while ((Number(str_x_split) + Number(str_y_split) < 10));
        problem.custom = false;
        problem.problemType = ProblemType.Addition;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "+";
        problem.lessonNo = 76;
         // console.log ("PROBLEM");
         // console.log (problem);
        break;
      case 78 : // Lesson 13

        problem.lessonNo = 78;
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.getRandomInt(100);
        problem.values[1] = this.getRandomInt(100);
        problem.values[2] = this.getRandomInt(100);
        problem.values[3] = this.getRandomInt(100);
        problem.symbol = "+";

        this.options.showHorizontal = false;

        break;
      case 81 : 
        problem.custom = false;
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.pickFromRange(501, 1000);
        problem.values[1] = this.pickFromRange(501, 1000);
        problem.symbol = "+";
        problem.lessonNo = 81;

        this.options.showHorizontal = false;

        break;
      case 83 : // Lesson 18
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.pickFromRange(1000, 101);
        problem.values[1] = this.pickFromRange(1000, 101);
        problem.values[2] = this.pickFromRange(1000, 101);
        problem.values[3] = this.pickFromRange(1000, 101);
        problem.symbol = "+";
        problem.lessonNo = 83;

        this.options.showHorizontal = false;
        
        break;
      case 84 : //Lesson 19
        problem.problemType = ProblemType.Addition;
        problem.values[0] = this.pickFromRange(9999, 350);
        problem.values[1] = this.pickFromRange(9999, 350);
        problem.values[2] = this.pickFromRange(9999, 350);
        problem.values[3] = this.pickFromRange(9999, 350);
        problem.symbol = "+";
        problem.lessonNo = 84;

        this.options.showHorizontal = false;
        break;
      case 85 : // Lesson 2 & 3 Digit Subtraction Without Regrouping
        var d;
        var topDigits = new Array();
        for (var ii = 0; ii < topDigits.length; ii ++) {
            topDigits[ii] = null;
        }
        var bottomDigits = new Array();
        for (var ii = 0; ii < bottomDigits.length; ii ++) {
            bottomDigits[ii] = null;
        }
        topDigits.length = 0;
        bottomDigits.length = 0;

        var topNumber = 0;
        var bottomNumber = 0;

        for (d = 0; d < 3; d++) {//loop 3 times
            topDigits[d] = (Math.floor(Math.random() * 9)) + 1;//pick a digit between 1 and 9, inclusive
            topNumber += topDigits[d] * Math.pow(10, d);//build top number
        }
        for (d = 0; d < 3; d++) {//loop 3 times
            bottomDigits[d] = (Math.floor(Math.random() * (topDigits[d] - 1))) + 1;//pick a digit limited in size by the corresponding top digit
            bottomNumber += bottomDigits[d] * Math.pow(10, d);//build bottom number
        }
        problem.problemType = ProblemType.Subtraction;
        
        problem.values[0] = topNumber;
        problem.values[1] = bottomNumber;
        
        problem.symbol = "-";
        problem.lessonNo = 85;

        this.options.showHorizontal = false;
        
        break;
      case 87 : // Lesson 22
        var topDigits = new Array();
        for (var ii = 0; ii < topDigits.length; ii ++) {
            topDigits[ii] = null;
        }
        var bottomDigits = new Array();
        for (var ii = 0; ii < bottomDigits.length; ii ++) {
            bottomDigits[ii] = null;
        }
        topDigits.length = 0;
        bottomDigits.length = 0;
        var topNumber = 0;
        var bottomNumber = 0;
        for (d = 0; d < 2; d++) {//loop 2 times
            topDigits[d] = (Math.floor(Math.random() * 8)) + 1;//pick a number between 1 and 9, inclusive
            topNumber += topDigits[d] * Math.pow(10, d);//build top number
        }
        bottomDigits[0] = (Math.floor(Math.random() * (8 - topDigits[0]))) + (topDigits[0] + 1);//pick a digit greater than the corresponding top digit
        bottomNumber += bottomDigits[0] * Math.pow(10, 0);//build bottom number
        bottomDigits[1] = (Math.floor(Math.random() * (topDigits[1])));//pick a digit less than the corresponding top digit
        bottomNumber += bottomDigits[1] * Math.pow(10, 1);//build bottom number
        
        problem.values[0] = topNumber;
        problem.values[1] = bottomNumber;
        
        problem.symbol = "-";
        problem.problemType = ProblemType.Subtraction;
        this.options.showHorizontal = false;
        problem.lessonNo = 87;

        break;
      case 89 : // Lesson 2-Digit Subtraction with Regrouping
        var topNumber = Math.floor(Math.random() * 900) + 100;
        var bottomNumber = Math.floor(Math.random() * (topNumber - 100)) + 100;
        problem.values[0] = topNumber;
        problem.values[1] = bottomNumber;

        problem.symbol = "-";
        problem.problemType = ProblemType.Subtraction;
        this.options.showHorizontal = false;
        problem.lessonNo = 89;
        break;
      case 91 : // Lesson
        var topNumber = Math.floor(Math.random() * 9000) + 1000;
        var bottomNumber = Math.floor(Math.random() * (topNumber - 100)) + 100;
        problem.values[0] = topNumber;
        problem.values[1] = bottomNumber;

        problem.symbol = "-";
        problem.problemType = ProblemType.Subtraction;
        this.options.showHorizontal = false;
        problem.lessonNo = 91;
        break;
      case 93 : // Lesson
        var topNumber = Math.floor(Math.random() * 90000) + 10000;
        var bottomNumber = Math.floor(Math.random() * (topNumber - 100)) + 100;
        problem.problemType = ProblemType.Subtraction;
        problem.values[0] = topNumber;
        problem.values[1] = bottomNumber;
        problem.lessonNo = 93;

        problem.symbol = "-";
        problem.problemType = ProblemType.Subtraction;
        this.options.showHorizontal = false;
        break;

    }
    return problem;
  }

  private getGammaProblem(lessonNo){

    const problem = new GammaProblems();

    switch (Number(lessonNo)) {
    
      case 98 : // Lesson 2 - Multiply By 1 And 0, Commutative Property
        problem.custom = false;
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
    case 101 : // Lesson 5 - Multiply By 10, 10¢ = 1 Dime
        var x = this.getRandomInt(10);
        var y = 10;
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
        do{
          var a = this.getRandomInt(10);
          var c = this.getRandomInt(10);
          var nn = a * c;
          var switcher = this.getRandomInt(2);
          var letters = [ // Arbitrary coefficients
            "C", "E", "K", "F", "B", "N", "A", "L", "D", "G", "X"
          ]
          var letter = letters[this.getRandomInt(letters.length - 1)];

          var lhs = a;
          var rhs = c;
        } while(a == 0);

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
        problem.custom = true;

        problem.symbol = "";

        break;
      case 106 : // Lesson 10 - Multiply By 9
        var x = this.getRandomInt(10);
        var y = 9;
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
      case 108 : // x3
        var x = this.getRandomInt(10);
        var y = 3;
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
      case 110 : // x6
        var x = this.getRandomInt(10);
        var y = 6;
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
      case 112 : // x4
        var x = this.getRandomInt(10);
        var y = 4;
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
      case 114 : // x7
        var x = this.getRandomInt(10);
        var y = 7;
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
      case 116 : // x8
        var x = this.getRandomInt(10);
        var y = 8;
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
      case 117 : // 
        var x = this.getRandomInt(10);
        var y = this.getRandomInt(251);
        // var switcher = this.getRandomInt(2);
        // if (switcher !== 0) {
        //   var tmp = x;
        //   x = y;
        //   y = tmp;
        // }

        problem.problemType = ProblemType.Multiplication;
        problem.values[0] = y;
        problem.values[1] = x;
        problem.symbol = "x";
        break;
      case 119 : 
        var x = this.getRandomInt(100);
        var y = this.getRandomInt(100);

        problem.problemType = ProblemType.Multiplication;
        problem.values[0] = y;
        problem.values[1] = x;
        problem.symbol = "x";
        break;
      case 120 : 
        var x = this.getRandomInt(100);
        var y = this.getRandomInt(100);

        problem.problemType = ProblemType.Multiplication;
        problem.values[0] = y;
        problem.values[1] = x;
        problem.symbol = "x";
        break;
      case 1211 : 
        var x = 0; 
        var y = 0;
        do {
          x = this.getRandomInt(100);
          y = this.getRandomInt(751);
        } while (y < 100 && x < 10 )

        problem.problemType = ProblemType.Multiplication;
        problem.values[0] = y;
        problem.values[1] = x;
        problem.symbol = "x";
        break;
      case 1212 : 
        var x = 0; 
        var y = 0;
        do {
          x = this.getRandomInt(751);
          y = this.getRandomInt(751);
        } while (y < 100 && x < 100 )

        problem.problemType = ProblemType.Multiplication;
        problem.values[0] = y;
        problem.values[1] = x;
        problem.symbol = "x";
        break;
      case 1241 : 
        var x = 0; 
        var y = 0;
        do {
          x = this.getRandomInt(751);
          y = this.getRandomInt(9000);
        } while (y < 1000 && x < 100 )

        problem.problemType = ProblemType.Multiplication;
        problem.values[0] = y;
        problem.values[1] = x;
        problem.symbol = "x";
        break;
      case 1242 : 
        var x = 0; 
        var y = 0;
        do {
          x = this.getRandomInt(9000);
          y = this.getRandomInt(9000);
        } while (y < 1000 && x < 1000 )

        problem.problemType = ProblemType.Multiplication;
        problem.values[0] = y;
        problem.values[1] = x;
        problem.symbol = "x";
        break;

    }
    return problem;
  }

  private getDeltaProblem(lessonNo){

    const problem = new DeltaProblems();

    switch (Number(lessonNo)) {

      case 129 : // Lesson 2
        problem.custom = false;
        var y : any;
        var x : any; 
        var ans = 0;

        do {
          y = this.getRandomInt(3);
          x = this.getRandomInt(10);
          if (x === 0 || y === 0) {
            x = 7;
            y = 102;
          }
        } while(Math.ceil((x / y)) !== (x / y) || Math.floor((x / y)) !== (x / y))
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;

        break;
      case 130 : // Lesson 3
        problem.custom = false;
        var y : any;
        var x : any; 
        var ans = 0;

        do {
          y = 10;
          x = this.getRandomInt(101);
          if (x === 0) {
            x = 7; // Will prompt another iteration
          }
        } while(x % 10 !== 0)
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;
        break;
      case 131 : // Lesson 4 - Division by 3 or 5
        problem.custom = false;
        var y : any;
        var x : any; 
        var ans = 0;

        do {
          y = this.getRandomInt(2) === 0 ? 3 : 5;
          if (y == 3)
            x = this.getRandomInt(31);
          if (y == 5)
            x = this.getRandomInt(51);
          /**
           * if 5 | max 50
           * 
           */

        } while(x !== 0 && (Math.ceil((x / y)) !== (x / y) || Math.floor((x / y)) !== (x / y)))
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;
        break;
      case 133 : // Lesson 6 - Divide by 9
        problem.custom = false;
        var y : any;
        var x : any; 
        var ans = 0;

        do {
          y = 9;
          x = this.getRandomInt(90);
          if (x === 0) {
            x = 7; // Will prompt another iteration
          }
        } while (x % 9 !== 0)
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;
        break;
      case 135 : // Lesson 8
        problem.custom = false;
        var y : any;
        var x : any; 
        var ans = 0;

        do {
          y = 6;
          x = this.getRandomInt(60);
          if (x === 0) {
            x = 7; // Will prompt another iteration
          }
        } while (x % 6 !== 0)
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;

        break;
      case 137 : // Lesson 10 - Division by 4
        problem.custom = false;
        var y : any;
        var x : any; 
        var ans = 0;

        do {
          y = 4;
          x = this.getRandomInt(40);
          if (x === 0) {
            x = 7; // Will prompt another iteration
          }
        } while (x % 4 !== 0)
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;
        break;
      case 139 : // Lesson 12 Div by 7 or 8
        problem.custom = false;
        var y : any;
        var x : any; 
        var ans = 0;

        do {
          y = this.getRandomInt(2) === 0 ? 7 : 8;
          if (y == 7)
            x = this.getRandomInt(71);
          if (y == 8)
            x = this.getRandomInt(81);

        } while(x !== 0 && (Math.ceil((x / y)) !== (x / y) || Math.floor((x / y)) !== (x / y)))
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;
        break;
      case 143 :// Lesson 16 - Div with a 1 dig remainder
        problem.custom = false;
        var y : any;
        var x : any; 
        var ans = 0;

        problem.problemType = ProblemType.Division;

        var divisor = Math.floor(Math.random() * 8) + 2;
        var quotient = Math.floor(Math.random() * 9) + 1;
        var remainder = Math.floor(Math.random() * (divisor - 1)) + 1;
        var dividend = (divisor * quotient) + remainder;
        
        problem.values[1] = divisor;
        problem.values[0] = dividend;
        problem.divAnswer = quotient;
        problem.divRemainder = remainder;
        problem.symbol = "÷";

        break;
      case 145 : // Lesson 18

        problem.problemType = ProblemType.Division;
        var divisor = Math.floor(Math.random() * 8) + 2;
        var quotient = Math.floor(Math.random() * (Math.floor(100/divisor) - 9)) + 10;
        var remainder = Math.floor(Math.random() * (divisor - 1)) + 1;
        var dividend = (divisor * quotient) + remainder;
        problem.custom = false;
        problem.values[1] = divisor;
        problem.values[0] = dividend;
        problem.divAnswer = quotient;
        problem.divRemainder = remainder;

        break;

      case 146 : // Lesson 19
        var divisor = Math.floor(Math.random() * 8) + 2;
        var quotient = Math.floor(Math.random() * (Math.floor(999/divisor) - 109)) + 100;
        var remainder = Math.floor(Math.random() * (divisor - 1)) + 1;
        var dividend = (divisor * quotient) + remainder;

        problem.custom = false;
        problem.problemType = ProblemType.Division;
        problem.values[1] = divisor;
        problem.values[0] = dividend;
        problem.divAnswer = quotient;
        problem.divRemainder = remainder;
        break;

      case 147 : // Lesson 20
        var divisor = Math.floor(Math.random() * 8) + 2;
        var quotient = Math.floor(Math.random() * (Math.floor(999/divisor)));
        var remainder = Math.floor(Math.random() * (divisor - 1)) + 1;
        var dividend = (divisor * quotient) + remainder;

        problem.custom = false;
        problem.lessonNo = 147;
        problem.problemType = ProblemType.Division;
        problem.values[1] = divisor;
        problem.values[0] = dividend;
        problem.divAnswer = quotient;
        problem.divRemainder = String(" ") + String(remainder) + "/" + String(divisor);

        break;

      case 149 : // Lesson 22
        var divisor = Math.floor(Math.random() * 11) + 10;
        var quotient = Math.floor(Math.random() * 31) + 20;
        var remainder = Math.floor(Math.random() * (divisor - 1)) + 1;
        var dividend = (divisor * quotient) + remainder;

        problem.custom = false;
        problem.problemType = ProblemType.Division;
        problem.values[1] = divisor;
        problem.values[0] = dividend;
        problem.divAnswer = quotient;
        problem.divRemainder = remainder;

        break;
      case 150 : // Lessons 23
        var divisor = Math.floor(Math.random() * 9) + 2;
        var quotient = Math.floor(Math.random() * (9999/divisor));
        var remainder = Math.floor(Math.random() * (divisor - 1)) + 1;
        var dividend = (divisor * quotient) + remainder;

        problem.custom = false;
        problem.problemType = ProblemType.Division;
        problem.values[1] = divisor;
        problem.values[0] = dividend;
        problem.divAnswer = quotient;
        problem.divRemainder = remainder;

        break;
      case 151 : // Lesson 24
        var divisor = Math.floor(Math.random() * 90) + 10;
        var quotient = Math.floor(Math.random() * (9999/divisor));
        var remainder = Math.floor(Math.random() * (divisor - 1)) + 1;
        var dividend = (divisor * quotient) + remainder;


        problem.custom = false;
        problem.symbol = "÷";
        problem.problemType = ProblemType.Division;
        problem.values[1] = divisor;
        problem.values[0] = dividend;
        problem.divAnswer = quotient;
        problem.divRemainder = remainder;

        break;
      case 152 : // Lesson 25
        var divisor = Math.floor(Math.random() * 800) + 100;
        var quotient = Math.floor(Math.random() * (100000/divisor));
        var remainder = Math.floor(Math.random() * (divisor - 1)) + 1;
        var dividend = (divisor * quotient) + remainder;
        

        problem.custom = false;
        problem.symbol = "÷";
        problem.problemType = ProblemType.Division;
        problem.values[1] = divisor;
        problem.values[0] = dividend;
        problem.divAnswer = quotient;
        problem.divRemainder = remainder;
        
        // TODO DIVISION ALIGNMENT FUNCTION
        // Division quotient alignment
        // var shift = 0;
        // var quo_ln = String(quotient).length;
        // var div_ln = String(divisor).length;
        // if (quo_ln == 2) {
          
        // }
        // if (quo_ln == 3) {
          
        // }

        break;
      case 154 : // Lesson 27 TODO
        problem.deltaProblem = true;
        problem.lessonNo = 154;
        problem.both = false;

        problem.divFractionOf = true;
        var factor1 = this.pickFromRange(1, 6);
        var factor2 = this.pickFromRange(1, 8);
        var product = factor1 * factor2;
        var numerator = this.pickFromRange(1, (factor2 - 1));
        var denominator = factor2;
        var divProd =  ((product/denominator) * numerator);

        problem.numerals = true;
        this.options.showHorizontal = true;
        problem.factor1 = factor1;
        problem.factor2 = factor2;
        problem.product = product;
        problem.numerator = numerator;
        problem.denominator = denominator;
        problem.divProd = divProd;

        break;
      case 155 : // Lesson 28 TODO

        var arabic = this.pickFromRange(399, 1);
        var roman = this.romanize(arabic);
        var direction = this.pickFromRange(2, 1);

        // problem.override = true;
        problem.numerals = true;
        problem.both = false;
        problem.lessonNo = 155;
        this.options.showHorizontal = true;
        problem.deltaProblem = true;
        problem.arabic = arabic;
        problem.roman = roman;
        problem.direction = direction;

        break;

      case 157 : // Lesson 30 
        var arabic = this.pickFromRange(3999, 400);
        var roman = this.romanize(arabic);
        var direction = this.pickFromRange(2, 1);

        problem.numerals = true;
        problem.both = false;
        // problem.override = true;
        problem.lessonNo = 157;
        this.options.showHorizontal = true;
        problem.deltaProblem = true;
        problem.arabic = arabic;
        problem.roman = roman;
        problem.direction = direction;

        break;
    }
    return problem;
  }

  // EPSILON PROBLEMS
  private getEpsilonProblem(lessonNo){

    const problem = new EpsilonProblems();
    problem.isFraction = true; // Since all Epsilon problems are fractions

    switch (Number(lessonNo)) {

      case 161: // Lesson 3
        
        problem.lessonNo = 161;
        this.options.showHorizontal = true;
        
        var operator = new Array("+", "-");
        var thisOperator = operator[Math.floor(Math.random() * 2)]
        var denominator = Math.floor(Math.random() * 5) + 2;
        var addend1 = Math.floor(Math.random() * (denominator - 1)) + 1;
        var addend2 = Math.floor(Math.random() * (denominator - addend1)) + 1;
        var addSum = addend1 + addend2;
        var numerator1 = 0;
        var numerator2 = 0;
        var numerator3 = 0;

        if (thisOperator == "+") {
            numerator1 = addend1;
            numerator2 = addend2;
            numerator3 = addSum;
        }else{
            numerator1 = addSum;
            numerator2 = addend1;
            numerator3 = addend2;
        }

        
        problem.numerator1 = numerator1;
        problem.numerator2 = numerator2;
        problem.numerator3 = numerator3;
        problem.denominator = denominator;
        problem.thisOperator = thisOperator;

        break;
      case 163: // Lesson 5

        problem.lessonNo = 163;
        var operator = new Array("+", "-");
        var denom2Choices = new Array();

        var denominator1 = 0;
        var denominator2 = 0;
        var denominator3 = 0;
        var numerator1 = 0;
        var numerator2 = 0;
        var numerator3 = 0;
        var dTemp1 = 0;
        var dTemp2 = 0;

        for (var k = 0; k < denom2Choices.length; k++) {
            denom2Choices[k] = 0;
        }
        denom2Choices.length = 0;
        var thisOperator = operator[Math.floor(Math.random() * 2)];
        denominator1 = Math.floor(Math.random() * 5) + 2;
        for (var k = 0; k < 5; k++) {
            if (denominator1 != (k + 2)) {
                denom2Choices[denom2Choices.length] = (k + 2);
            }
        }
        denominator2 = denom2Choices[Math.floor(Math.random() * 3) + 1]
        denominator3 = denominator2 * denominator1;
        var addend1 = Math.floor(Math.random() * Math.floor(denominator1 / 2)) + 1;
        var addend2 = Math.floor(Math.random() * Math.floor((denominator2 - ((denominator2 * addend1) / denominator1)))) + 1;
        var addSum = (addend1 * denominator2) + (addend2 * denominator1);
        if (thisOperator == "+") {
            numerator1 = addend1;
            numerator2 = addend2;
            numerator3 = addSum;
        }else{
            if ((addend1 / denominator1) > (addend2 / denominator2)) {
                numerator1 = addend1;
                numerator2 = addend2;
            }else{
                numerator1 = addend2;
                numerator2 = addend1;
                dTemp1 = denominator1;
                dTemp2 = denominator2;
                denominator1 = dTemp2;
                denominator2 = dTemp1;
            }
            numerator3 = (numerator1 * denominator2) - (numerator2 * denominator1);
        }
        for (var f = 6; f > 1; f--) {
            if ((denominator1 % f == 0) && (denominator2 % f == 0)) { //reduce, if possible...they are using least common denom in this lesson
                denominator3 = denominator3 / f;
                numerator3 = numerator3 / f;
            }
        }
        
        this.options.showHorizontal = true;
        

        problem.numerator1 = numerator1;
        problem.numerator2 = numerator2;
        problem.numerator3 = numerator3;
        problem.denominator = denominator;
        problem.denominator1 = denominator1;
        problem.denominator2 = denominator2;
        problem.denominator3 = denominator3;
        problem.thisOperator = thisOperator;

        break;

      case 164: // Lesson 6

        problem.lessonNo = 164;
      
        var operator = new Array("+", "-");
        var denom2Choices = new Array();
        var numerator1 = 0;
        var numerator2 = 0;
        var numerator3 = 0;
        var denominator2 = 0;
        var denominator3 = 0;

        for (var k = 0; k < denom2Choices.length; k++) {
            denom2Choices[k] = 0;
        }
        denom2Choices.length = 0;
        var thisOperator = operator[Math.floor(Math.random() * 2)];
        var denominator1 = Math.floor(Math.random() * 5) + 2;
        for (var k = 0; k < 5; k++) {
            if (denominator1 != (k + 2)) {
                denom2Choices[denom2Choices.length] = (k + 2);
            }
        }
        denominator2 = denom2Choices[Math.floor(Math.random() * 3) + 1]
        denominator3 = denominator2 * denominator1;
        var addend1 = Math.floor(Math.random() * Math.floor(denominator1 / 2)) + 1;
        var addend2 = Math.floor(Math.random() * Math.floor((denominator2 - ((denominator2 * addend1) / denominator1)))) + 1;
        var addSum = (addend1 * denominator2) + (addend2 * denominator1);
        if (thisOperator == "+") {
            numerator1 = addend1;
            numerator2 = addend2;
            numerator3 = addSum;
        }else{
            if ((addend1 / denominator1) > (addend2 / denominator2)) {
                numerator1 = addend1;
                numerator2 = addend2;
            }else{
                numerator1 = addend2;
                numerator2 = addend1;
                dTemp1 = denominator1;
                dTemp2 = denominator2;
                denominator1 = dTemp2;
                denominator2 = dTemp1;
            }
            numerator3 = (numerator1 * denominator2) - (numerator2 * denominator1);
          }
          this.options.showHorizontal = true;
          
          problem.numerator1 = numerator1;
          problem.numerator2 = numerator2;
          problem.numerator3 = numerator3;
          problem.denominator = denominator;
          problem.denominator1 = denominator1;
          problem.denominator2 = denominator2;
          problem.denominator3 = denominator3;
          problem.thisOperator = thisOperator;


        break;

      case 166: // Lesson 8
          
        problem.lessonNo = 166;
        var denominator1 = Math.floor(Math.random() * 4) + 2;
        var denominator2 = Math.floor(Math.random() * 4) + 6;
        var denominator3 = Math.floor(Math.random() * 7) + 2;
        var numerator1 = Math.floor(Math.random() * (denominator1 - 1)) + 1;
        var numerator2 = Math.floor(Math.random() * (denominator2 - 1)) + 1;
        var numerator3 = Math.floor(Math.random() * (denominator3 - 1)) + 1;
        for (f = 9; f > 1; f--) {
            if ((denominator1 % f == 0) && (numerator1 % f == 0)) { //reduce fraction1
                denominator1 = denominator1 / f;
                numerator1 = numerator1 / f;
            }
        }
        for (f = 9; f > 1; f--) {
            if ((denominator2 % f == 0) && (numerator2 % f == 0)) { //reduce fraction2
                denominator2 = denominator2 / f;
                numerator2 = numerator2 / f;
            }
        }
        for (f = 9; f > 1; f--) {
            if ((denominator3 % f == 0) && (numerator3 % f == 0)) { //reduce fraction3
                denominator3 = denominator3 / f;
                numerator3 = numerator3 / f;
            }
        }
    
        var sumDenominator = denominator1 * denominator2 * denominator3;
        var sumNumerator = (numerator1 * denominator2 * denominator3) + (numerator2 * denominator1 * denominator3) + (numerator3 * denominator1 * denominator2);
    
        for (f = 9; f > 1; f--) {
            if ((sumDenominator % f == 0) && (sumNumerator % f == 0)) { //reduce answer
                sumDenominator = sumDenominator / f;
                sumNumerator = sumNumerator / f;
            }
        }
        this.options.showHorizontal = true;
        
        problem.numerator1 = numerator1;
        problem.numerator2 = numerator2;
        problem.numerator3 = numerator3;
        problem.denominator = denominator;
        problem.denominator1 = denominator1;
        problem.denominator2 = denominator2;
        problem.denominator3 = denominator3;
        problem.thisOperator = thisOperator;
        problem.sumNumerator = sumNumerator;
        problem.sumDenominator = sumDenominator;

        break;
      case 167: // Lesson 9

        problem.lessonNo = 167;

        var denominator1 = Math.floor(Math.random() * 9) + 2;
        var denominator2 = Math.floor(Math.random() * 9) + 2;
        var numerator1 = Math.floor(Math.random() * (denominator1 - 1)) + 1;
        var numerator2 = Math.floor(Math.random() * (denominator2 - 1)) + 1;
        for (f = 9; f > 1; f--) {
            if ((denominator1 % f == 0) && (numerator1 % f == 0)) { //reduce fraction1
                denominator1 = denominator1 / f;
                numerator1 = numerator1 / f;
            }
        }
        for (f = 9; f > 1; f--) {
            if ((denominator2 % f == 0) && (numerator2 % f == 0)) { //reduce fraction2
                denominator2 = denominator2 / f;
                numerator2 = numerator2 / f;
            }
        }
    
        var productDenominator = denominator1 * denominator2;
        var productNumerator = numerator1 * numerator2;

        this.options.showHorizontal = true;
        
        problem.numerator1 = numerator1;
        problem.numerator2 = numerator2;

        problem.denominator = denominator;
        problem.denominator1 = denominator1;
        problem.denominator2 = denominator2;

        problem.thisOperator = thisOperator;
        problem.productNumerator = productNumerator;
        problem.productDenominator = productDenominator;

        break;
      case 168: // Lesson 10
        
        problem.lessonNo = 168;
        var denominator1 = Math.floor(Math.random() * 9) + 2;
        var denominator2 = Math.floor(Math.random() * 9) + 2;
        var numerator1 = Math.floor(Math.random() * (denominator1 - 1)) + 1;
        var numerator2 = Math.floor(Math.random() * (denominator2 - 1)) + 1;
        for (f = 9; f > 1; f--) {
            if ((denominator1 % f == 0) && (numerator1 % f == 0)) { //reduce fraction1
                denominator1 = denominator1 / f;
                numerator1 = numerator1 / f;
            }
        }
        for (f = 9; f > 1; f--) {
            if ((denominator2 % f == 0) && (numerator2 % f == 0)) { //reduce fraction2
                denominator2 = denominator2 / f;
                numerator2 = numerator2 / f;
            }
        }

        var quotientNumerator = numerator1 * denominator2;
        var quotientDenominator = denominator1 * numerator2;

        this.options.showHorizontal = true;
        
        problem.numerator1 = numerator1;
        problem.numerator2 = numerator2;

        problem.denominator = denominator;
        problem.denominator1 = denominator1;
        problem.denominator2 = denominator2;

        problem.thisOperator = thisOperator;
        problem.quotientNumerator = quotientNumerator;
        problem.quotientDenominator = quotientDenominator;
        problem.divNumDom = (quotientNumerator / quotientDenominator) === (Math.floor(quotientNumerator / quotientDenominator));
        problem.numDivDom = (quotientNumerator / quotientDenominator);

        break;
      case 170:  // Lesson 12
        problem.lessonNo = 170;

        var denominator = Math.floor(Math.random() * 8) + 2;
        var numerator = Math.floor(Math.random() * (denominator - 1)) + 1;
        var factor = Math.floor(Math.random() * 9) + 2;
        var problemDenominator = denominator * factor;
        var problemNumerator = numerator * factor;
        var answerDenominator = problemDenominator;
        var answerNumerator = problemNumerator;

        for (f = 10; f > 1; f--) {
            if ((answerDenominator % f == 0) && (answerNumerator % f == 0)) { 
                answerDenominator = answerDenominator / f;
                answerNumerator = answerNumerator / f;
            }
        }
        this.options.showHorizontal = true;
        

        problem.problemDenominator = problemDenominator;
        problem.problemNumerator = problemNumerator;
        problem.answerNumerator = answerNumerator;
        problem.answerDenominator = answerDenominator;

        break;

      case 171:  // Lesson 13
        problem.lessonNo = 171;

        var denominator = Math.floor(Math.random() * 8) + 2;
        var numerator = Math.floor(Math.random() * (denominator - 1)) + 1;
        var factor = Math.floor(Math.random() * 9) + 2;
        var problemDenominator = denominator * factor;
        var problemNumerator = numerator * factor;
        var answerDenominator = problemDenominator;
        var answerNumerator = problemNumerator;

        for (f = 10; f > 1; f--) {
            if ((answerDenominator % f == 0) && (answerNumerator % f == 0)) { //reduce fraction2
                answerDenominator = answerDenominator / f;
                answerNumerator = answerNumerator / f;
            }
        }
        this.options.showHorizontal = true;
        

        problem.problemDenominator = problemDenominator;
        problem.problemNumerator = problemNumerator;
        problem.answerNumerator = answerNumerator;
        problem.answerDenominator = answerDenominator;

        break;
      case 173: // Lesson 15
        
        problem.lessonNo = 173;
        var wholeNumber = Math.floor(Math.random() * 5) + 1;
        var mixDenominator = Math.floor(Math.random() * 5) + 2;
        var mixNumerator = Math.floor(Math.random() * (mixDenominator - 1)) + 1;
        for (f = 8; f > 1; f--) {
          if ((mixDenominator % f == 0) && (mixNumerator % f == 0)) { //reduce fraction
            mixDenominator = mixDenominator / f;
            mixNumerator = mixNumerator / f;
          }
        }
        var improperNumerator = (mixDenominator * wholeNumber) + mixNumerator;
        var improperDenominator = mixDenominator;

        problem.mainSwitch = ((Math.floor(Math.random() * 2) + 1) == 1)

        this.options.showHorizontal = true;
        

        problem.wholeNumber = wholeNumber;
        problem.mixNumerator = mixNumerator;
        problem.improperNumerator = improperNumerator;
        problem.mixDenominator = mixDenominator;
        problem.improperDenominator = improperDenominator;
        
        break;
        case 175: // Lesson 17
        
        problem.lessonNo = 175;
        
        var wholeAddend1 = Math.floor(Math.random() * 10) + 1;
        var wholeAddend2 = Math.floor(Math.random() * 10) + 1;
        var denominator = Math.floor(Math.random() * 8) + 3;
        var numAddend1 = Math.floor(Math.random() * (denominator - 2)) + 1;
        var numAddend2 = Math.floor(Math.random() * (denominator - (numAddend1 + 1))) + 1;
        var wholeSum = wholeAddend1 + wholeAddend2;
        var numSum = numAddend1 + numAddend2;

        this.options.showHorizontal = true;
        

        problem.mainSwitch = ((Math.floor(Math.random() * 2) + 1) == 1);
        problem.wholeAddend1 = wholeAddend1;
        problem.wholeAddend2 = wholeAddend2;
        problem.denominator = denominator;
        problem.numAddend1 = numAddend1;
        problem.numAddend2 = numAddend2;
        problem.wholeSum = wholeSum;
        problem.numSum = numSum;

        break;
      case 176: // Lesson 18
        
        problem.lessonNo = 176;
        var wholeAddend1 = Math.floor(Math.random() * 9) + 2;
        var wholeAddend2 = Math.floor(Math.random() * 10) + 1;
        var denominator = Math.floor(Math.random() * 8) + 3;
        var numAddend1 = Math.floor(Math.random() * (denominator - 1)) + 1;
        var numAddend2 = Math.floor(Math.random() * (numAddend1)) + (denominator - numAddend1);
        var wholeSum = wholeAddend1 + wholeAddend2 + 1;
        var numSum = (numAddend1 + numAddend2) - denominator;
        var denomSum = denominator;//denominator needs to be preserved for the problem itself, so make a copy to be reduced in the final answer
        
        for (f = 10; f > 1; f--) {
          if ((denomSum % f == 0) && (numSum % f == 0)) { //reduce fraction
            denomSum = denomSum / f;
            numSum = numSum / f;
          }
        }

        this.options.showHorizontal = true;
        

        problem.wholeAddend1 = wholeAddend1;
        problem.wholeAddend2 = wholeAddend2;
        problem.denominator = denominator;
        problem.numAddend1 = numAddend1;
        problem.numAddend2 = numAddend2;
        problem.wholeSum = wholeSum;
        problem.numSum = numSum;
        problem.denomSum = denomSum;
        
        break;
        case 177: // Lesson 19
        
        problem.lessonNo = 177;
        
        var wholeAddend1 = Math.floor(Math.random() * 9) + 2;
        var wholeAddend2 = Math.floor(Math.random() * 10) + 1;
        var denominator = Math.floor(Math.random() * 8) + 3;
        var numAddend1 = Math.floor(Math.random() * (denominator - 1)) + 1;
        var numAddend2 = Math.floor(Math.random() * (numAddend1 - 1)) + (denominator - numAddend1) + 1;
        var wholeSum = wholeAddend1 + wholeAddend2 + 1;
        var numSum = (numAddend1 + numAddend2) - denominator;
        var denomDiff = denominator;//denominator needs to be preserved for the problem itself, so make a copy to be reduced in the final answer

        for (f = 10; f > 1; f--) {
            if ((denomDiff % f == 0) && (numAddend1 % f == 0)) { //reduce fraction
                denomDiff = denomDiff / f;
                numAddend1 = numAddend1 / f;
            }
        }
        this.options.showHorizontal = true;
        

        problem.wholeAddend1 = wholeAddend1;
        problem.wholeAddend2 = wholeAddend2;
        problem.denominator = denominator;
        problem.numAddend1 = numAddend1;
        problem.numAddend2 = numAddend2;
        problem.wholeSum = wholeSum;
        problem.numSum = numSum;
        problem.denomDiff = denomDiff;

        

        break;
      case 179: // Lesson 21
        problem.lessonNo = 179;
        var wholeAddend1 = Math.floor(Math.random() * 9) + 2;
        var wholeAddend2 = Math.floor(Math.random() * 10) + 1;
        var denominator1 = Math.floor(Math.random() * 8) + 3;
        var denominator2 = Math.floor(Math.random() * 8) + 3;
        var denomSum = denominator1 * denominator2;
        var numAddend1 = Math.floor(Math.random() * (denominator1 - (Math.ceil(denominator1 / 2)))) + (Math.ceil(denominator1 / 2));
        var numAddend2 = Math.floor(Math.random() * (denominator2 - (Math.ceil(denominator2 / 2)))) + (Math.ceil(denominator2 / 2));
        var wholeSum = wholeAddend1 + wholeAddend2 + 1;
        var numSum = ((numAddend1 * denominator2) + (numAddend2 * denominator1)) - (denominator1 * denominator2);
        var reducedDenom = denomSum;//make a copy, so that I don't change denomSum...I'll need it
        for (f = 10; f > 1; f--) {
          if ((reducedDenom % f == 0) && (numSum % f == 0)) { //reduce fraction
            reducedDenom = reducedDenom / f;
            numSum = numSum / f;
          }
        }

        this.options.showHorizontal = true;
        
        problem.wholeAddend1 =  wholeAddend1;
        problem.wholeAddend2 =  wholeAddend2;
        problem.denominator1 =  denominator1;
        problem.denominator2 =  denominator2;
        problem.denomSum =  denomSum;
        problem.numAddend1 =  numAddend1;
        problem.numAddend2 =  numAddend2;
        problem.wholeSum =  wholeSum;
        problem.numSum =  numSum;
        problem.reducedDenom =  reducedDenom;
        
        break;
      case 180: // Lesson 22
        
        problem.lessonNo = 180;
        var whole1 = Math.floor(Math.random() * 8) + 3;
        var whole2 = Math.floor(Math.random() * (whole1 - 2)) + 1;
        var denominator1 = Math.floor(Math.random() * 8) + 3;
        var denominator2 = Math.floor(Math.random() * 8) + 3;
        var denomDiff = denominator1 * denominator2;
        var num1 = Math.floor(Math.random() * (denominator1 - (Math.floor(denominator1 / 2)))) + 1;
        var num2 = Math.floor(Math.random() * (denominator2 - (Math.ceil(denominator2 / 2)))) + (Math.ceil(denominator2 / 2));
        var wholeDiff = (whole1 - whole2) - 1;
        var numDiff = ((num1 * denominator2) - (num2 * denominator1)) + (denominator1 * denominator2);
        var reducedDenom = denomDiff;//make a copy, so that I don't change denomSum...I'll need it
        for (f = 10; f > 1; f--) {
            if ((reducedDenom % f == 0) && (numDiff % f == 0)) { //reduce fraction
                reducedDenom = reducedDenom / f;
                numDiff = numDiff / f;
            }
        }
        this.options.showHorizontal = true;
        

        problem.whole1 = whole1;
        problem.whole2 = whole2;
        problem.denominator1 = denominator1;
        problem.denominator2 = denominator2;
        problem.denomDiff = denomDiff;
        problem.num1 = num1;
        problem.num2 = num2;
        problem.wholeDiff = wholeDiff;
        problem.numDiff = numDiff;
        problem.reducedDenom = reducedDenom;

        break;
      case 181: // Lesson 23
        
        problem.lessonNo = 181;

        var whole1 = Math.floor(Math.random() * 6) + 1;
        var whole2 = Math.floor(Math.random() * 6) + 1;
        var denom1 = Math.floor(Math.random() * 5) + 2;
        var denom2 = Math.floor(Math.random() * 5) + 2;
        var num1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
        var num2 = Math.floor(Math.random() * (denom2 - 1)) + 1;
        for (f = 10; f > 1; f--) {
            if ((denom1 % f == 0) && (num1 % f == 0)) { //reduce fraction1
                denom1 = denom1 / f;
                num1 = num1 / f;
            }
        }
        for (f = 10; f > 1; f--) {
            if ((denom2 % f == 0) && (num2 % f == 0)) { //reduce fraction2
                denom2 = denom2 / f;
                num2 = num2 / f;
            }
        }
        var NumQ = ((denom1 * whole1) + num1) * denom2;
        var DenomQ = ((denom2 * whole2) + num2) * denom1;
        var wholeAnswer = Math.floor(NumQ / DenomQ);
        var numAnswer = (NumQ % DenomQ);
        var denomAnswer = DenomQ;
        for (f = 10; f > 1; f--) {
            if ((denomAnswer % f == 0) && (numAnswer % f == 0)) { //reduce answer fraction
                denomAnswer = denomAnswer / f;
                numAnswer = numAnswer / f;
            }
        }	
        this.options.showHorizontal = true;
        

        problem.whole1 = whole1;
        problem.whole2 = whole2;
        problem.denom1 = denom1;
        problem.denom2 = denom2;
        problem.num1 = num1;
        problem.num2 = num2;
        problem.NumQ = NumQ;
        problem.DenomQ = DenomQ;
        problem.wholeAnswer = wholeAnswer;
        problem.numAnswer = numAnswer;
        problem.denomAnswer = denomAnswer;

        break;
      case 183: // Lesson 25
        problem.lessonNo = 183;
        var whole1 = Math.floor(Math.random() * 4) + 1;
        var whole2 = Math.floor(Math.random() * 4);
        var whole3 = Math.floor(Math.random() * 3) + 1;
        var denom1 = Math.floor(Math.random() * 4) + 2;
        var denom2 = Math.floor(Math.random() * 4) + 3;
        var denom3 = Math.floor(Math.random() * 4) + 2;
        var num1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
        var num2 = Math.floor(Math.random() * (denom2 - 1)) + 1;
        var num3 = Math.floor(Math.random() * (denom3 - 1)) + 1;
        for (f = 6; f > 1; f--) {
            if ((denom1 % f == 0) && (num1 % f == 0)) { //reduce fraction1
                denom1 = denom1 / f;
                num1 = num1 / f;
            }
        }
        for (f = 6; f > 1; f--) {
            if ((denom2 % f == 0) && (num2 % f == 0)) { //reduce fraction2
                denom2 = denom2 / f;
                num2 = num2 / f;
            }
        }
        for (f = 6; f > 1; f--) {
            if ((denom3 % f == 0) && (num3 % f == 0)) { //reduce fraction3
                denom3 = denom3 / f;
                num3 = num3 / f;
            }
        }
        var numProduct = ((denom1 * whole1) + num1) * ((denom2 * whole2) + num2) * ((denom3 * whole3) + num3);
        var denomProduct = denom1 * denom2 * denom3;
        for (f = 6; f > 1; f--) {
            if ((denomProduct % f == 0) && (numProduct % f == 0)) { //reduce answer fraction
                denomProduct = denomProduct / f;
                numProduct = numProduct / f;
            }
        }
        var wholeAnswer = Math.floor(numProduct / denomProduct);
        var numAnswer = (numProduct % denomProduct);
        var denomAnswer = denomProduct;
        this.options.showHorizontal = true;
        


        problem.whole1 = whole1
        problem.whole2 = whole2
        problem.whole3 = whole3
        problem.denom1 = denom1
        problem.denom2 = denom2
        problem.denom3 = denom3
        problem.num1 = num1
        problem.num2 = num2
        problem.num3 = num3
        problem.numProduct = numProduct
        problem.denomProduct = denomProduct
        problem.wholeAnswer = wholeAnswer
        problem.numAnswer = numAnswer
        problem.denomAnswer = denomAnswer

        break;
      case 187: // Lesson 29
        
        problem.lessonNo = 187;

        var denomChoices = new Array(2, 4, 5, 10)
        var denom = denomChoices[Math.floor(Math.random() * 4)];
        var num = Math.floor(Math.random() * denom) + 1;
        var decimal = (100 / denom) * num;
        this.options.showHorizontal = true;
        

        problem.denomChoices = denomChoices;
        problem.denom = denom;
        problem.num = num;
        problem.decimal = decimal;

        break;

    }
    return problem;
  }

  private getZetaProblem(lessonNo){

    const problem = new ZetaProblems();

    switch (Number(lessonNo)) {
    
      case 193 : // Lesson 4

        problem.lessonNo = 193;

        var decimalPlaces = Math.floor(Math.random() * 2) + 1;
        var addend1 = ((Math.floor(Math.random() * 999) + 1) / 100).toFixed(decimalPlaces);
        var addend2 = ((Math.floor(Math.random() * 999) + 1) / 100).toFixed(decimalPlaces);
        var sum = (parseFloat(addend1) + parseFloat(addend2)).toFixed(decimalPlaces);

        this.options.showHorizontal = true;
        problem.decimalPlaces =  decimalPlaces;
        problem.addend1 =  addend1;
        problem.addend2 =  addend2;
        problem.sum =  sum;

        break;
      case 194 : // Lesson 5
        problem.lessonNo = 194;
        var decimalPlaces = Math.floor(Math.random() * 2) + 1;
        var addend1 = ((Math.floor(Math.random() * 999) + 1) / 100).toFixed(decimalPlaces);
        var addend2 = ((Math.floor(Math.random() * 999) + 1) / 100).toFixed(decimalPlaces);
        var sum = (parseFloat(addend1) + parseFloat(addend2)).toFixed(decimalPlaces);

        this.options.showHorizontal = true;
        problem.decimalPlaces =  decimalPlaces;
        problem.addend1 =  addend1;
        problem.addend2 =  addend2;
        problem.sum =  sum;

        break;
      case 197 : // Lesson 8
        problem.lessonNo = 197;
        var prefix_1_index = 0;
        var prefix_2_index = 0;
        var prefixes = Array("k", "h", "dk", "", "d", "c", "m");
        var units = Array("g", "m", "L");
        var quantity = Math.floor(Math.random() * 49) + 1;
    
        prefix_1_index = this.pickFromRange(5, 0);
        prefix_2_index = this.pickFromRange(6, prefix_1_index + 1);
    
        var power = prefix_2_index - prefix_1_index;
        var multiplier = Math.pow(10, power);
        var unit_index = Math.floor(Math.random() * 3);
        var prefix_1 = prefixes[prefix_1_index];
        var prefix_2 = prefixes[prefix_2_index];
        var unit_abbrev = units[unit_index];
        var unitMultr = (Math.floor(quantity * multiplier * 1000000) / 1000000);

        this.options.showHorizontal = true;

        problem.prefix_1_index = prefix_1_index;
        problem.prefix_2_index = prefix_2_index;
        problem.prefixes = prefixes;
        problem.units = units;
        problem.quantity = quantity;
        problem.power = power;
        problem.multiplier = multiplier;
        problem.unit_index = unit_index;
        problem.prefix_1 = prefix_1;
        problem.prefix_2 = prefix_2;
        problem.unit_abbrev = unit_abbrev;
        problem.unitMultr = unitMultr;

        break;
      case 198 : // Lesson 9
        problem.lessonNo = 198;

        var factor1W = Math.floor(Math.random() * 99) + 1;
        var factor2W = Math.floor(Math.random() * 99) + 1;
        var productW = factor1W * factor2W;
        var factor1D = (factor1W / 10).toFixed(1);
        var factor2D = (factor2W / 10).toFixed(1);
        var productD = ((factor1W * factor2W) / 100).toFixed(2);


        problem.factor1W =  factor1W;
        problem.factor2W =  factor2W;
        problem.productW =  productW;
        problem.factor1D =  factor1D;
        problem.factor2D =  factor2D;
        problem.productD =  productD;

        this.options.showHorizontal = true;
        break;
      case 199 : // Lesson 10
        problem.lessonNo = 199;

        var factor1W = Math.floor(Math.random() * 999) + 1;
        var factor2W = Math.floor(Math.random() * 999) + 1;
        var productW = factor1W * factor2W;
        var factor1D = (factor1W / 100).toFixed(2);
        var factor2D = (factor2W / 100).toFixed(2);
        var productD = ((factor1W * factor2W) / 10000).toFixed(4);

        problem.factor1W = factor1W;
        problem.factor2W = factor2W;
        problem.productW = productW;
        problem.factor1D = factor1D;
        problem.factor2D = factor2D;
        problem.productD = productD;

        this.options.showHorizontal = true;
        break;
      case 203 : // Lesson 14
        problem.lessonNo = 203;
        var decimalPlaces1 = Math.floor(Math.random() * 3) + 1;
        var decimalPlaces2 = Math.floor(Math.random() * 3) + 1;
        var placeValue1 = Math.pow(10, decimalPlaces1);
        var placeValue2 = Math.pow(10, decimalPlaces2);
        var factor1W = Math.floor(Math.random() * 999) + 1;
        var factor2W = Math.floor(Math.random() * 999) + 1;
        var productW = factor1W * factor2W;
        var factor1D = (factor1W / placeValue1).toFixed(decimalPlaces1);
        var factor2D = (factor2W / placeValue2).toFixed(decimalPlaces2);
        var productD = ((factor1W * factor2W) / (placeValue1 * placeValue2)).toFixed(decimalPlaces1 + decimalPlaces2);

        this.options.showHorizontal = true;

        problem.decimalPlaces1 = decimalPlaces1;
        problem.decimalPlaces2 = decimalPlaces2;
        problem.placeValue1 = placeValue1;
        problem.placeValue2 = placeValue2;
        problem.factor1W = factor1W;
        problem.factor2W = factor2W;
        problem.productW = productW;
        problem.factor1D = factor1D;
        problem.factor2D = factor2D;
        problem.productD = productD;

        break;
      case 204 : // Lesson 15
        problem.lessonNo = 204;

        var prefix_1_index = 0;
        var prefix_2_index = 0;
        var prefixes = Array("k", "h", "dk", "", "d", "c", "m");
        var units = Array("g", "m", "L");
        var quantity = Math.floor(Math.random() * 49) + 1;

        prefix_2_index = this.pickFromRange(5, 0);
        prefix_1_index = this.pickFromRange(6, prefix_2_index + 1);

        var power = prefix_2_index - prefix_1_index;
        var multiplier = Math.pow(10, power);
        var unit_index = Math.floor(Math.random() * 3);
        var prefix_1 = prefixes[prefix_1_index];
        var prefix_2 = prefixes[prefix_2_index];
        var unit_abbrev = units[unit_index];

        problem.prefix_1_index = prefix_1_index;
        problem.prefix_2_index = prefix_2_index;
        problem.prefixes = prefixes;
        problem.units = units;
        problem.quantity = quantity;
        problem.power = power;
        problem.multiplier = multiplier;
        problem.unit_index = unit_index;
        problem.prefix_1 = prefix_1;
        problem.prefix_2 = prefix_2;
        problem.unit_abbrev = unit_abbrev;
        problem.unitMultr = (Math.floor(quantity * multiplier * 1000000) / 1000000);

        this.options.showHorizontal = true;
        break;
      case 206 : // Lesson 17
        problem.lessonNo = 206;
        var places = (Math.floor(Math.random() * 3) + 1);
        var divisor = Math.floor(Math.random() * 8) + 2;
        var quotient = ((Math.floor(Math.random() * 897) + 2) / (Math.pow(10, places)));
        var dividend = (divisor * quotient).toFixed(places);
        this.options.showHorizontal = true;

        problem.places = places;
        problem.divisor = divisor;
        problem.quotient = quotient;
        problem.dividend = dividend;

        break;
      case 207 : // Lesson 18
        problem.lessonNo = 207;
        var places = (Math.floor(Math.random() * 3) + 1);
        var divisor1 : any = ((Math.floor(Math.random() * 33) + 2) / (Math.pow(10, places))).toFixed(places);
        var quotient = (Math.floor(Math.random() * 847) + 2) * (Math.pow(10, places));
        var dividend1 = Math.round(divisor1 * quotient);
        problem.places = places;
        problem.divisor1 = divisor1;
        problem.quotient = quotient;
        problem.dividend1 = dividend1;

        this.options.showHorizontal = true;
        break;
      case 208 : // Lesson 19
        problem.lessonNo = 208;
        var digit = this.pickFromRange(9, 1);
        var tenPower = this.pickFromList([10, 100, 1000]);
        var factor1 = digit / tenPower;
        var factor2 = this.pickFromRange(500, 25);
        var product = Math.round(factor1 * factor2 * tenPower) / tenPower;
        var letter = this.pickFromList(["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "T", "U", "V", "W", "X", "Y", "Z"]);
        this.options.showHorizontal = true;

        problem.digit = digit;
        problem.tenPower = tenPower;
        problem.factor1 = factor1;
        problem.factor2 = factor2;
        problem.product = product;
        problem.letter = letter;

        break;
      case 209 : // Lesson 20
        problem.lessonNo = 209;
        var divisorPlaces : any  = (Math.floor(Math.random() * 2) + 1);
        var quotientPlaces : any = (Math.floor(Math.random() * 2) + 1);
        var divisor1 : any  = ((Math.floor(Math.random() * 33) + 2) / (Math.pow(10, divisorPlaces))).toFixed(divisorPlaces);
        var quotient = (Math.floor(Math.random() * 847) + 2) / Number((Math.pow(10, quotientPlaces)).toFixed(quotientPlaces));
        var dividend1 = Math.round((divisor1 * quotient) * (Math.pow(10, (divisorPlaces + quotientPlaces)))) / (Math.pow(10, (divisorPlaces + quotientPlaces)));
        this.options.showHorizontal = true;

        problem.divisorPlaces = divisorPlaces;
        problem.quotientPlaces = quotientPlaces;
        problem.divisor1 = divisor1;
        problem.quotient = quotient;
        problem.dividend1 = dividend1;

        break;
      case 2101 :
        problem.lessonNo = 2101;

        var divisorPlaces:any = (Math.floor(Math.random() * 2));
        var quotientPlaces:any = (Math.floor(Math.random() * 3) + 2);
        var divisorChoices = new Array(2, 4, 5, 8);
        var divisor1:any = ((divisorChoices[Math.floor(Math.random() * 4)]) / (Math.pow(10, divisorPlaces))).toFixed(divisorPlaces);
        var quotient = (Math.floor(Math.random() * 847) + 2) / Number((Math.pow(10, quotientPlaces)).toFixed(quotientPlaces));
        var dividend1 = Math.round((divisor1 * quotient) * (Math.pow(10, (divisorPlaces + quotientPlaces)))) / (Math.pow(10, (divisorPlaces + quotientPlaces)));
        problem.divisorPlaces = divisorPlaces;
        problem.quotientPlaces = quotientPlaces;
        problem.divisorChoices = divisorChoices;
        problem.divisor1 = divisor1;
        problem.quotient = quotient;
        problem.dividend1 = dividend1;
        this.options.showHorizontal = true;

        break;
      case 2102 :
        problem.lessonNo = 2102;

        var divisorPlaces : any = (Math.floor(Math.random() * 3));
        var dividendPlaces = (Math.floor(Math.random() * 3) + 1);
        var divisorChoices = new Array(3, 6, 7, 9);
        var divisor1 : any = ((divisorChoices[Math.floor(Math.random() * 4)]) / (Math.pow(10, divisorPlaces))).toFixed(divisorPlaces);
        var dividend1 = (Math.floor(Math.random() * 847) + 56) / Number((Math.pow(10, dividendPlaces)).toFixed(dividendPlaces));
        var quotient = Math.round((dividend1 / divisor1) * (Math.pow(10, 2))) / (Math.pow(10, 2));

        problem.divisorPlaces = divisorPlaces;
        problem.dividendPlaces = dividendPlaces;
        problem.divisorChoices = divisorChoices;
        problem.divisor1 = divisor1;
        problem.quotient = quotient;
        problem.dividend1 = dividend1;

        this.options.showHorizontal = true;
        break;
      case 2103 :
        problem.lessonNo = 2103;

        var divisorPlaces : any = (Math.floor(Math.random() * 2));
        var dividendPlaces = (Math.floor(Math.random() * 3) + 1);
        var divisorChoices = new Array(3, 6, 7, 9, 11);
        var divisor1 : any = ((divisorChoices[Math.floor(Math.random() * 4)]) / (Math.pow(10, divisorPlaces))).toFixed(divisorPlaces);
        var dividend1 : number = (Math.floor(Math.random() * 847) + 56) / Number((Math.pow(10, dividendPlaces)).toFixed(dividendPlaces));
        var quotient1 : any = "" + String((dividend1 / divisor1)) + "q";
        if ((dividend1 * Math.pow(10, dividendPlaces)) % (divisor1 * Math.pow(10, divisorPlaces)) == 0) {
            quotient1 = Number(((dividend1 * Math.pow(10, dividendPlaces)) / (divisor1 * Math.pow(10, divisorPlaces))).toFixed(0)) / (Math.pow(10, (dividendPlaces + divisorPlaces)));
            quotient1 = "" + quotient1 + "q";
        }
        var possibleRepeats = new Array();
        for (var p = 0; p < possibleRepeats.length; p++) {
            possibleRepeats[p] == null;
        }
        possibleRepeats.length = 0;
        if (Math.pow(10, divisorPlaces) * divisor1 == 3) {
            possibleRepeats.length = 3;
            possibleRepeats[0] = "q";
            possibleRepeats[1] = "3";
            possibleRepeats[2] = "6";
        }
        if (Math.pow(10, divisorPlaces) * divisor1 == 6) {
            possibleRepeats.length = 6;
            possibleRepeats[0] = "q";
            possibleRepeats[1] = "66";
            possibleRepeats[2] = "33";
            possibleRepeats[3] = "q";
            possibleRepeats[4] = "66";
            possibleRepeats[5] = "33";
        }
        if (Math.pow(10, divisorPlaces) * divisor1 == 7) {
            possibleRepeats.length = 7;
            possibleRepeats[0] = "q";
            possibleRepeats[1] = "142857";
            possibleRepeats[2] = "285714";
            possibleRepeats[3] = "428571";
            possibleRepeats[4] = "571428";
            possibleRepeats[5] = "714285";
            possibleRepeats[6] = "857142";
        }
        if (Math.pow(10, divisorPlaces) * divisor1 == 9) {
            possibleRepeats.length = 9;
            possibleRepeats[0] = "q";
            possibleRepeats[1] = "11";
            possibleRepeats[2] = "22";
            possibleRepeats[3] = "33";
            possibleRepeats[4] = "44";
            possibleRepeats[5] = "55";
            possibleRepeats[6] = "66";
            possibleRepeats[7] = "77";
            possibleRepeats[8] = "88";
        }
        if (Math.pow(10, divisorPlaces) * divisor1 == 11) {
            possibleRepeats.length = 11;
            possibleRepeats[0] = "q";
            possibleRepeats[1] = "09";
            possibleRepeats[2] = "18";
            possibleRepeats[3] = "27";
            possibleRepeats[4] = "36";
            possibleRepeats[5] = "45";
            possibleRepeats[6] = "54";
            possibleRepeats[7] = "63";
            possibleRepeats[8] = "72";
            possibleRepeats[9] = "81";
            possibleRepeats[10] = "90";
        }
        var repeatedDigits = String(possibleRepeats[Math.round(Math.pow(10, dividendPlaces) * dividend1) % (Math.pow(10, divisorPlaces) * divisor1)]);
        if (repeatedDigits == "q") { //try again if it's a non-repeating decimal
            this.getZetaProblem(2103);
        }else{
            quotient1 = quotient1.split(repeatedDigits)[0];
            if (repeatedDigits.charAt(0) == repeatedDigits.charAt(1)) {1
                repeatedDigits = repeatedDigits.charAt(0);
            }
        }

        problem.divisorPlaces = divisorPlaces;
        problem.dividendPlaces = dividendPlaces;
        problem.divisorChoices = divisorChoices;
        problem.divisor1 = divisor1;
        problem.dividend1 = dividend1;
        problem.quotient1 = quotient1;
        problem.possibleRepeats = possibleRepeats;

        this.options.showHorizontal = true;
        break;

      case 2104 :
        problem.lessonNo = 2104;
        var factors = new Array(1, 10, 100);
        var factor = factors[Math.floor(Math.random() * 3)];
        var preQuotient = (Math.floor(Math.random() * 9999) + 1);
        var preDivisor = Math.floor(Math.random() * 11) + 2;
        var remainder = Math.floor(Math.random() * (preDivisor - 1)) + 1;
        var preDividend = Math.round((preQuotient * preDivisor) + remainder);
        var divisor1 : any = preDivisor / factor; // TODO
        var dividend1 = preDividend / factor;
        var quotient = preQuotient;
        var numerator = remainder;
        var denominator = preDivisor;

        for (var f = 12; f > 1; f--) {
          if ((numerator % f == 0) && (denominator % f == 0)) { //reduce fraction1
              denominator = denominator / f;
              numerator = numerator / f;
          }
        }

        problem.factors =  factors;
        problem.factor =  factor;
        problem.preQuotient =  preQuotient;
        problem.preDivisor =  preDivisor;
        problem.remainder =  remainder;
        problem.preDividend =  preDividend;
        problem.divisor1 =  divisor1;
        problem.dividend1 =  dividend1;
        problem.quotient =  quotient;
        problem.numerator =  numerator;
        problem.denominator =  denominator;

        this.options.showHorizontal = true;
        break;
      case 211 : // Lesson 22
        problem.lessonNo = 211;

        var digit = this.pickFromRange(9, 1);
        var tenPower = this.pickFromList([10, 100, 1000]);
        var factor1 = digit / tenPower;
        var factor2 = this.pickFromRange(500, 25);
        var addedNumber = this.pickFromRange(400, 1) / 100;
        var product = Math.round(factor1 * factor2 * tenPower) / tenPower;
        var productPlusAddedNumber = Math.round((product + addedNumber) * 1000) / 1000;
        var letter = this.pickFromList(["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "T", "U", "V", "W", "X", "Y", "Z"]);

        problem.digit = digit
        problem.tenPower = tenPower
        problem.factor1 = factor1
        problem.factor2 = factor2
        problem.addedNumber = addedNumber
        problem.product = product
        problem.productPlusAddedNumber = productPlusAddedNumber
        problem.letter = letter

        this.options.showHorizontal = true;
        break;
      case 212 : // Lesson 23

        problem.lessonNo = 212;

        var denominator = Math.floor(Math.random() * 12) + 5;
        var numerator = Math.floor(Math.random() * (denominator - 3)) + 2;

        for (f = 12; f > 1; f--) {
            if ((numerator % f == 0) && (denominator % f == 0)) { //reduce fraction1
                denominator = denominator / f;
                numerator = numerator / f;
            }
        }
        var quotient = Math.floor((numerator / denominator) * 100);
        var remainder = Math.round((((numerator / denominator) * 100) - quotient) * denominator);
        var numeratorCode = "";
        var denominatorCode = "";
        var reducedRemainder = remainder;
        var reducedDenominator = denominator;

        for (var f = 15; f > 1; f--) {
            if ((reducedRemainder % f == 0) && (reducedDenominator % f == 0)) { //reduce fraction
                reducedDenominator = reducedDenominator / f;
                reducedRemainder = reducedRemainder / f;
            }
        }

        if (remainder != 0) { //code for numerator: close existing table cell, open another with style "numerator", insert numerator, close cell, and then open a new cell with rowspan of "2"
            numeratorCode = '</td><td class="numerator" align="center">' + reducedRemainder + '</td><td rowspan="2">';
        }
        if (remainder != 0) { //code for denominator: create a table cell containing the denominator
            denominatorCode = '<td align="center">' + reducedDenominator + '</td>';
        }
        this.options.showHorizontal = true;

        problem.denominator = denominator;
        problem.numerator = numerator;
        problem.quotient = quotient;
        problem.remainder = remainder;
        problem.numeratorCode = numeratorCode;
        problem.denominatorCode = denominatorCode;
        problem.reducedRemainder = reducedRemainder;
        problem.reducedDenominator = reducedDenominator;

        break;
      case 213 : // Lesson 24
        problem.lessonNo = 213;

        var denominators = new Array(10, 100, 100, 100, 1000, 1000, 1000);
        var denominator = denominators[Math.floor(Math.random() * 7)];
        var prob = (Math.floor((Math.random() * (denominator - 1)) + 1)) / denominator;
        var problemAsText = prob.toString().split(".")[1];
        var numerator = prob * denominator;
        var reducedNumerator = prob * denominator;
        var reducedDenominator = denominator;
        var reducedNumeratorCode = "";
        var reducedDenominatorCode = "";
        var reduced = false;

        for (f = 32; f > 1; f--) {
            if ((reducedNumerator % f == 0) && (reducedDenominator % f == 0)) { //reduce fraction
                reducedDenominator = Math.round(reducedDenominator / f);
                reducedNumerator = Math.round(reducedNumerator / f);
                reduced = true;
            }
        }
        problem.denominators = denominators;
        problem.denominator = denominator;
        problem.prob = prob;
        problem.problemAsText = problemAsText;
        problem.numerator = numerator;
        problem.reducedNumerator = reducedNumerator;
        problem.reducedDenominator = reducedDenominator;
        problem.reducedNumeratorCode = reducedNumeratorCode;
        problem.reducedDenominatorCode = reducedDenominatorCode;
        problem.reduced = reduced;
        problem.roundNumerator = Math.round(numerator);
        this.options.showHorizontal = true;
        break;

    }
    return problem;
  }

  /**
   * Pre Algebra
   * @param lessonNo 
   */
  private getPrealgebraProblem(lessonNo){

    const problem = new PrealgebraProblems();

    switch (Number(lessonNo)) {

      // Lesson 1 Addition with Negative numbers
      case 221:
        var addends = new Array();
        addends.length = 2;
        addends[0] = Math.floor((Math.random() * 59) - 29);
        addends[1] = Math.floor((Math.random() * 59) - 29);
        for (var addendIndex = 0; addendIndex <= 1; addendIndex ++) { //Check both numbers, to make sure they are not 0.
            if (addends[addendIndex] == 0) {
                addends[addendIndex] = (addends[addendIndex] - (Math.floor(Math.random() * 29) + 1));
            }
        }
        if ((addends[0] >= 0) && (addends[1] >= 0)) { //Check to be sure the numbers are not both positive. If they are, change one.
            var addendToChange = Math.floor(Math.random() * 2);
            addends[addendToChange] = (addends[addendToChange] * -1);
        }
        // problem.problemType = ProblemType.Addition;

        this.options.showHorizontal = true;
        problem.containsNegative = true;
        problem.values[0] = addends[0];
        problem.values[1] = addends[1];
        problem.lessonNo = 221;
        problem.addends = addends;
        problem.symbol = "+";

        break;

      case 222: // Lesson 2
        var addends = new Array();
        addends.length = 2;
        addends[0] = Math.floor((Math.random() * 59) - 29);
        addends[1] = Math.floor((Math.random() * 59) - 29);
        for (var addendIndex = 0; addendIndex <= 1; addendIndex ++) { //Check both numbers, to make sure they are not 0.
            if (addends[addendIndex] == 0) {
                addends[addendIndex] = (addends[addendIndex] - (Math.floor(Math.random() * 29) + 1));
            }
        }
        if ((addends[0] >= 0) && (addends[1] >= 0)) { //Check to be sure the numbers are not both positive. If they are, change one.
            var addendToChange = Math.floor(Math.random() * 2);
            addends[addendToChange] = (addends[addendToChange] * -1);
        }

        problem.addends = addends;
        problem.lessonNo = 222;
        this.options.showHorizontal = true;
        problem.containsNegative = true;
        problem.values[0] = addends[0];
        problem.values[1] = addends[1];
        problem.symbol = "-";
        break;

      case 223: // Lesson 3
        var factors = new Array();
        factors.length = 2;
        factors[0] = Math.floor((Math.random() * 39) - 19);
        factors[1] = Math.floor((Math.random() * 39) - 19);
        for (var factorIndex = 0; factorIndex <= 1; factorIndex ++) { //Check both numbers, to make sure they are not 0.
            if (factors[factorIndex] == 0) {
                factors[factorIndex] = (factors[factorIndex] - (Math.floor(Math.random() * 19) + 1));
            }
        }
        if ((factors[0] >= 0) && (factors[1] >= 0)) { //Check to be sure the numbers are not both positive. If they are, change one.
            var factorToChange = Math.floor(Math.random() * 2);
            factors[factorToChange] = (factors[factorToChange] * -1);
        }

        problem.factors = factors;
        problem.lessonNo = 223;
        this.options.showHorizontal = true;
        problem.containsNegative = true;
        problem.values[0] = factors[0];
        problem.values[1] = factors[1];
        problem.symbol = "x";
        break;

      case 224: // Lesson 4
        var factors = new Array();
        factors.length = 2;
        factors[0] = Math.floor((Math.random() * 29) - 15);
        factors[1] = Math.floor((Math.random() * 29) - 15);
        for (var factorIndex = 0; factorIndex <= 1; factorIndex ++) { //Check both numbers, to make sure they are not 0.
            if (factors[factorIndex] == 0) {
                factors[factorIndex] = (factors[factorIndex] - (Math.floor(Math.random() * 15) + 1));
            }
        }
        if ((factors[0] >= 0) && (factors[1] >= 0)) { //Check to be sure the numbers are not both positive. If they are, change one.
            var factorToChange = Math.floor(Math.random() * 2);
            factors[factorToChange] = (factors[factorToChange] * -1);
        }
        var product = (factors[0] * factors[1]);

        // problem.problemType = ProblemType.Division;
        problem.product = product;
        problem.factors = factors;
        problem.lessonNo = 224;
        this.options.showHorizontal = true;
        problem.containsNegative = true;
        problem.values[0] = product;
        problem.values[1] = factors[1];
        problem.symbol = "÷";
        problem.divAnswer = factors[0];
        problem.divRemainder = false;

        break;

      case 225: // lesson 5

        problem.lessonNo = 225;
        var types = new Array("whole", "whole", "fraction");
        var type = types[Math.floor(Math.random() * 3)];

        if (type == "whole") {
            var base = Math.floor(Math.random() * 29) + 2;
            var exponents = new Array(5, 4, 3, 3, 3, 2, 2, 2, 2);
            var exponent = exponents[Math.floor(Math.random() * 9)];
            while (Math.pow(base, exponent) > 1000) {
                base = Math.floor(base * .9);// I don't want the answer to be too large: if it is, I'll make the base smaller.
            }
            
        } else { //(If type is fraction...)
            var denominator = Math.floor(Math.random() * 7) + 5;
            var numerator = Math.floor(Math.random() * (denominator - 6) + 5);
            var exponent = Math.floor(Math.random() * 6) + 2;
            for (var f = 12; f > 1; f--) {
                if ((numerator % f == 0) && (denominator % f == 0)) { //reduce fraction
                    denominator = Math.round(denominator / f);
                    numerator = Math.round(numerator / f);
                }// end if
            }// end for
            while (Math.pow(denominator, exponent) >= 1000) {
                exponent = exponent - 1;// I don't want the answer to be too large: if it is, I'll make the exponent smaller.
            }
            
          }

          var mock_sets = [[3,4,4],[5,8,2],[3,5,4],[4,5,4],[5,7,3],[3,5,3]];
          console.log(mock_sets.length);

          // This is a hot-fix
          if (!numerator || !denominator)
          {
            let n = this.getRandomInt(6);
            numerator = mock_sets[n][0]
            denominator = mock_sets[n][1]
            exponent = mock_sets[n][2]

          }

          problem.pow_1 = Math.pow(numerator, exponent);
          problem.pow_2 = Math.pow(denominator, exponent);
          problem.numerator = numerator;
          problem.denominator= denominator;
          problem.exponent = exponent;
          problem.exponents = exponents;
          problem.lessonNo = 225;
          this.options.showHorizontal = true;
          problem.baseEx = Math.pow(base, exponent);
          problem.numEx = Math.pow(numerator, exponent);
          problem.deEx = Math.pow(denominator, exponent);
          problem.override = true;
          problem.types = types;
          problem.type = type;
          problem.base = base;
        break;

      case 227: // Lesson 7

        var s1 = 0;
        var s2 = 0;

        var types = new Array("whole", "whole", "whole", "fraction", "fraction");
        var type = types[Math.floor(Math.random() * 5)];
        var openers = new Array("-", "(-", "-(-", "-(");
        var opener = openers[Math.floor(Math.random() * 4)];
        if (type == "fraction") {
            opener = openers[Math.floor(Math.random() * 3) + 1]; // If this is a fraction problem, don't pick the first option for opening string: "-"
        }
        var closer = "";
        if (opener != "-") { // if the opener is anything other than "-", define the closer as ")".
            closer = ")";
        }
        if (type == "whole") { //whole numbers get one treatment...
            var base = Math.floor(Math.random() * 29) + 1;
            var exponents = new Array(3, 3, 3, 2, 2, 2, 2);
            var exponent = exponents[Math.floor(Math.random() * 7)];
            while ((Math.pow(base, exponent) > 1000) || (Math.pow(base, exponent) < -1000)) {
                var reducer = (Math.floor(Math.random() * 7) + 3) / 10;
                base = Math.floor(base * reducer);// I don't want the answer to be too large: if it is, I'll make the base smaller.
            }
            var correctedBase = base;
            if ((opener == "(-") || (opener == "-(-")) {
                correctedBase = base * -1;
            }
            var finalFactor = 1;
            if (opener != "(-") {
                finalFactor = -1;
            }
            s2 = 1;

        } else { //(If type is fraction...)
            var denominator = Math.floor(Math.random() * 7) + 5;
            var numerator = Math.floor(Math.random() * (denominator - 6) + 5);
            var exponent = Math.floor(Math.random() * 6) + 2;
            for (f = 12; f > 1; f--) {
                if (((numerator % f == 0) && (denominator % f == 0)) && (Math.round(denominator / f) != NaN)) { //reduce fraction

                    denominator = Math.round(denominator / f);

                    numerator = Math.round(numerator / f);
                }// end if
            }// end for
            while (Math.pow(denominator, exponent) >= 700) {
                exponent = exponent - 1;// I don't want the answer to be too large: if it is, I'll make the exponent smaller.
            }
            var answerSign = "";
            if ((opener == "-(") || ((opener == "-(-") && (exponent % 2 == 0)) || ((opener == "(-") && (exponent % 2 != 0))){
                answerSign = " - "; // This is the code for an en-dash, or something along that line. I'm using it as the conditional subtraction sign.
            }
            s1 = 1;
          }


          problem.miz1 = (Math.pow(correctedBase, exponent) * finalFactor);
          problem.miz2 = Math.pow(numerator, exponent);
          problem.miz3 = Math.pow(denominator, exponent);

          problem.lessonNo = 227;
          problem.s1 = s1;
          problem.s2 = s2;
          this.options.showHorizontal = true;
          problem.types = types;
          problem.type = type;
          problem.openers = openers;
          problem.opener = opener;
          problem.closer = closer;
          problem.base = base;
          problem.exponents = exponents;
          problem.exponent = exponent;
          problem.reducer = reducer;
          problem.correctedBase = correctedBase;
          problem.finalFactor = finalFactor;
          problem.denominator = denominator;
          problem.numerator = numerator;
          problem.answerSign = answerSign;

        break;
      case 228: // TODO Eliminate font size option because images dont scale? Scale Images?


        var problemTypes = new Array("perfectSquares", "squaredNumbers", "perfectSquares", "perfectSquares", "squaredLetters", "perfectSquares");
        var problemType = Math.floor(Math.random() * 6);
        let imageSource;
        let squareRoot;
      
        if (problemTypes[problemType] == "perfectSquares") {
            squareRoot = Math.floor(Math.random() * 13) + 1; // Pick a number from 1 to 13
            imageSource = '/assets/worksheets/' + squareRoot + '.gif';
        }
        if (problemTypes[problemType] == "squaredNumbers") {
            squareRoot = Math.floor(Math.random() * 20) + 1; // Pick a number from 1 to 20
            imageSource = '/assets/worksheets/' + squareRoot + 'S.gif';
        }
        if (problemTypes[problemType] == "squaredLetters") {
            squareRoot = this.pickFromList(["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "T", "U", "V", "W", "X", "Y", "Z"]);
            imageSource = '/assets/worksheets/' + squareRoot + '2.gif';
        }

        problem.lessonNo = 228;
        problem.imageSource = imageSource;
        problem.squareRoot = squareRoot;

        break;
      case 229:

      do {
        var solution = this.pickFromRange(0, 75);
        var letter = this.pickFromList(["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "T", "U", "V", "W", "X", "Y", "Z"]);
        var adder = this.pickFromRange(-50, 50);
        var coefficient = this.pickFromRange(-5, 25); //coefficient of the variable, on the right side of the equation to begin with
        var numOperator = (adder >= 0) ? " + ": " - ";
        var letOperator = (coefficient >= 0) ? " + ": " - ";

      } while ((Math.abs(coefficient) <= 2) || (Math.abs(adder) <= 2));
        // if() {
        //   return this.addProblem(this.getPrealgebraProblem(229));
        //     // return(null);
        // }

        var firstAdd = this.pickFromList(["letterFirst", "numberFirst"]);
        var numberPresented = solution + adder;

        problem.lessonNo = 229;
        problem.coefficient = coefficient;
        problem.letter = letter; 
        problem.adder = adder;
        problem.solution = solution;
        problem.letOperator = letOperator;
        problem.numOperator = numOperator;
        problem.absAdder = Math.abs(adder);
        problem.absCoLett = (Math.abs(coefficient) + letter);
        problem.absAddSol =  Math.abs(adder + solution);
        problem.coP1 = (coefficient + 1);
        problem.s1 = (firstAdd == "numberFirst" || 1==1) ? 1 : 0;

        break;
    case 233:

        var s1 = 0;

        do {
          var letter = this.pickFromList(["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "T", "U", "V", "W", "X", "Y", "Z"]);
          var solution = this.pickFromRange(-10, 16);
          var lastMult = this.pickFromList([-5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
          var halfSolved = (solution * lastMult);
          var firstAdder = this.pickFromRange(-15, 15);
          var secondAdder = this.pickFromRange(-15, 15);
          var additor1 = (firstAdder >= 1) ? '+' : ''; //"additor" is the sign used to signify addition. If the number is negative, it comes with its own subtraction sign.
          var additor2 = (secondAdder >= 1) ? '+' : '';
          var additor3 = ((lastMult+secondAdder) >= 1) ? '+' : '';
          var additor4 = ((halfSolved+firstAdder) >= 1) ? '+' : '';
          var additor5 = (halfSolved >= 1) ? '+' : '';
          //alert(additor4);
          var whichFirst = this.pickFromList(["number", "letter"]);
        } while ((solution == 0) 
          || (firstAdder == 0) 
          || (secondAdder == 0) 
          || (Math.abs(lastMult+secondAdder) <= 2) 
          || (Math.abs(secondAdder) <= 2) 
          || ((halfSolved+firstAdder) == 0))

        // Deteremines Layout on frontend
        if(whichFirst == "number") {
            problem.s1 = 1;
        } else {
            problem.s1 = 0;
        }

        problem.lessonNo = 233;
        problem.lastMsecAdd = lastMult+secondAdder;
        problem.letter = letter;
        problem.solution = solution;
        problem.lastMult = lastMult;
        problem.halfSolved = halfSolved;
        problem.firstAdder = firstAdder;
        problem.secondAdder = secondAdder;
        problem.additor1= additor1;
        problem.additor2= additor2;
        problem.additor3= additor3;
        problem.additor4= additor4;
        problem.additor5= additor5;
        problem.halfSolveFirstAdd = halfSolved+firstAdder;
        break;

    case 234: // I switched to 4-space tabs :)

        do {
            var letter = this.pickFromList(["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "T", "U", "V", "W", "X", "Y", "Z"]);
            var solution = this.pickFromRange(-10, 16);
            var lastMult = this.pickFromList([-5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            var halfSolved = (solution * lastMult);
            var firstAdder =this.pickFromRange(-64, 90);
            var secondAdder =this.pickFromRange(-90, 70);
            var additor1 = (firstAdder >= 1) ? '+' : ''; //"additor" is the sign used to signify addition. If the number is negative, it comes with its own subtraction sign.
            var additor2 = (secondAdder >= 1) ? '+' : '';
            var additor3 = ((lastMult+secondAdder) >= 1) ? '+' : '';
            var additor4 = ((halfSolved+firstAdder) >= 1) ? '+' : '';
            var additor5 = (halfSolved >= 1) ? '+' : '';
            //alert(additor4);
            var whichFirst = this.pickFromList(["number", "letter"]);
        } while ((solution == 0) || (firstAdder == 0) || (secondAdder == 0) || (Math.abs(lastMult+secondAdder) <= 10) || (Math.abs(secondAdder) <= 10) || ((halfSolved+firstAdder) == 0));

        problem.s1 = 0;
        problem.lessonNo = 234;
        problem.lastMsecAdd = lastMult+secondAdder;
        problem.letter = letter;
        problem.solution = solution;
        problem.lastMult = lastMult;
        problem.halfSolved = halfSolved;
        problem.firstAdder = firstAdder;
        problem.secondAdder = secondAdder;
        problem.additor1= additor1;
        problem.additor2= additor2;
        problem.additor3= additor3;
        problem.additor4= additor4;
        problem.additor5= additor5;
        problem.halfSolveFirstAdd = halfSolved+firstAdder;

        var squareExpression1 = this.makeSquareExpression(firstAdder);
        var squareExpression2 = this.makeSquareExpression(halfSolved+firstAdder);
        var rectExpression1 = this.makeRectExpression(firstAdder);
        var rectExpression2 = this.makeRectExpression(halfSolved+firstAdder)

        problem.squareExpression1 = squareExpression1;
        problem.squareExpression2 = squareExpression2;
        problem.rectExpression1 = rectExpression1;
        problem.rectExpression2 = rectExpression2;

        if(whichFirst == "number") {
            problem.s1 = 1;
        } else {
            problem.s1 = 0;
        }
        
        this.options.problemsPerRow = 2;

        break;
      case 236: // Lesson 16

        var centigradeSeed = this.pickFromRange(50, -2);
        var centigradeValue = (centigradeSeed * 5);
        var addMore = (this.pickFromRange(100, 0) >= 88) ? true : false;
        if (addMore) {
            var addend = this.pickFromRange(5, 1);
            centigradeValue += addend;
        }
        var dividedByFive = centigradeValue / 5;
        var timesNine = (dividedByFive * 10) - dividedByFive;
        var plusThirtyTwo = timesNine + 32;
    
        problem.lessonNo = 236;
        problem.centigradeValue = centigradeValue;
        problem.dividedByFive = dividedByFive;
        problem.timesNine = timesNine;
        problem.plusThirtyTwo = plusThirtyTwo;
      

        break;
      case 237:

        var centigradeSeed = this.pickFromRange(50, -2);
        var centigradeValue = (centigradeSeed * 5);
        var addMore = (this.pickFromRange(100, 0) >= 88) ? true : false;
        if (addMore) {
            var addend = this.pickFromRange(5, 1);
            centigradeValue += addend;
        }
        problem.lessonNo = 237;
        var dividedByFive = centigradeValue / 5;
        timesNine = (dividedByFive * 10) - dividedByFive;
        problem.dividedByFive = centigradeValue / 5;
        problem.plusThirtyTwo = timesNine + 32;
        problem.timesNine = timesNine;

        break;
    
    }
    return problem;
  }

  private getAimProblem(lessonNo){

    const problem = new AimProblems();

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

  /**
   * quick lil helper function
   * @param max 
   */
  public rnum_gt_1(max) : number {
      let x;
    do {
        x = this.getRandomInt(max);
    } while (x < 2)

    return x
  }

  public get_div_fact() : Array<number> {
      return [1]
  }
  public get_mult_fact() : number {
    return 0
  }

  private getAimMDProblem(lessonNo){

    const problem = new AimMDProblems();

    switch (Number(lessonNo)) {
      
      // case 524:
      //   break;
      case 546: // Lesson 3, Doubles ( Same as Gamma lesson 4 )
        var pos = [2,3,4,5,6,7,8,9,10]
        var x = this.rnum_gt_1(10);

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

      case 547: // Lesson 4 - Tens Facts (Same as gamma lesson 5)
        var pos = [3,4,5,6,7,8,9]
        var x = this.getRandomInt(10);

        var y = 10;
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
      case 548: // Lesson 5 (Gamma lesson 6)
        var pos = [3,4,5,6,7,8,9]
        var x = this.rnum_gt_1(10);

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
      case 549: // Lesson 6 ( Gamma 10 )
        var pos = [3,4,6,7,8,9]
        var x = this.rnum_gt_1(10);

        var y = 9;
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

      case 550: // Lesson 7 (Gamma 12)
        var pos = [3,4,6,7,8]
        var x = this.rnum_gt_1(10);

        var y = 3;
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
      case 551: // Lesson 8 (Gamma 16)
        var pos = [4,6,7,8]
        var x = this.rnum_gt_1(10);

        var y = 4;
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
      case 552: // Lesson 9 (gamma lesson 14)
        var pos = [6,7,8]
        var x = this.rnum_gt_1(10);

        var y = 6;
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
      case 553: // Lesson 10 (Gamma 18 && 20)
        
        var switcher = this.getRandomInt(2);
        var pos = [7,8]
        var x : number = this.pickFromRange(6,8);

        if (switcher){
            var y = 7;

        } else {
            var y = 8;
            switcher = this.getRandomInt(2);
            if (switcher) x = 8;

        }

        switcher = this.getRandomInt(2);
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

      case 554: // Lesson 9
        do{
            var a = this.rnum_gt_1(10);
            var c = this.rnum_gt_1(10);
            var nn = a * c;
            var switcher = this.getRandomInt(2);
            var letters = [ // Arbitrary coefficients
            "c", "e", "k", "f", "b", "n", "a", "l", "d", "g", "x"
            ]
            var letter = letters[this.getRandomInt(letters.length - 1)];

            var lhs = a;
            var rhs = c;
        } while(a == 0);

        this.options.showHorizontal = true;
        problem.problemType = 8;
        problem.requiresHorizontal = true;
        problem.solveForUnknown = true;

        problem.lhs = lhs;
        problem.rhs = rhs;
        problem.lessonNo = 554;
        problem.firstPosition = lhs;
        problem.secondPosition = letter;
        problem.values[0] = problem.firstPosition;
        problem.values[1] = problem.secondPosition; 
        problem.sfu_answer = nn;
        problem.custom = true;

        problem.symbol = "";
        break;
      case 555: // L
        
        // var x = 0;
        // var y = 0;
        // do {
        //   x = this.rnum_gt_1(10); // TODO repeat the randomization for either x or y, we're getting lots of repeats
        //   y = this.rnum_gt_1(10);
        // } while (x < y)
        // problem.problemType = ProblemType.Addition;
        // problem.values[0] = x;
        // problem.values[1] = y;
        // problem.symbol = "-";
        break;
      case 556: // Lesson 12a -- DELTA 2
        var facts = [
            [4,2], [6,2], [8,2], [10,2], [12,2], [14,2], [16,2], [18,2], [20,2],
            [6,3], [8,4], [10,5], [12,6], [14,7], [16,8], [18,8], [20,10]
        ]
        problem.custom = false;
        var y : number;
        var x : number; 
        var ans = 0;

        do {
            y = this.rnum_gt_1(10);
            x = this.rnum_gt_1(21);
            if (x === 1 || y === 1 || x === 0 || y === 0) {
                let vals = [6,8,10,12,14,16,18]
                x = vals[this.getRandomInt(7)];
                y = 2;
                break;
            }
        } while(x != y * 2)
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;

        break;

      case 557: // Lesson 12b - Delta lesson 3

        var facts = [
            [30,10],[40,10],[50,10], [60,10], [70,10], [80,10], [90,10], [100,10],
            [30,3], [40,4], [50,5], [60,6], [70,7], [80,8], [90,9]
        ]
        problem.custom = false;
        var y : number;
        var x : number; 
        var ans = 0;

        do {
            let switchs = this.getRandomInt(5)
            y = 10;
            x = this.rnum_gt_1(101);
            if (x === 0 || switchs == 1) {
                let vals = [3,4,5,6,7,8,9]
                y = vals[this.getRandomInt(7)]
                x = y * 10
                break;
            }
        } while(x % 10 !== 0)
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;

        break;
      case 558: // Lesson 12c - Delta 4
        var facts = [
            [15,5], [20,5], [25,5], [30,5], [35,5], [40,5], [45,5],
            [15,3], [20,4], [30,6], [35,7], [40,8], [45,9]
        ]
        problem.custom = false;
        var y : number;
        var x : number; 
        var ans = 0;

        do {
            y = this.rnum_gt_1(20);
            if (y == 3)
                x = 15;
            else if (y == 4)
                x = 20
            else if (y == 5)
                x = 25
            else if (y == 6)
                x = 30
            else if (this.getRandomInt(2) == 1) {
                // entropy at its finest
                continue
            }
            else if (y == 7)
                x = 35
            else if (y == 8)
                x = 40
            else if (y == 9)
                x = 45
            else {
                y = 5
                let vals = [2,3,4,5,6,7,8,9]
                x = y * vals[this.getRandomInt(8)]
            }
            /**
             * if 5 | max 50
             * 
             */


        } while(x !== 0 && (Math.ceil((x / y)) !== (x / y) || Math.floor((x / y)) !== (x / y)))
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;
        break;
      case 559: // Lesson 12d Delta 6
        var facts = [
            [27,9], [36,9], [54,9], [63,9], [72,9], [81,9],
            [27,3], [36,4], [54,6], [63,7], [72,8]
        ]
        problem.custom = false;
        var y : number;
        var x : number; 
        var ans = 0;

        do {
            y = 9;
            x = this.rnum_gt_1(90);
            if (x === 0 || (x < 53 && x >45) || (x < 63 && x > 54) || (x < 8)) {
                let vals = [27, 36, 45,54, 63, 72]
                x = vals[this.getRandomInt(6)]
                y = x / 9
            }
        } while (x % 9 !== 0)
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;
        break;
      case 560: // Lesson 12e - also Delta lesson 4
        var facts = [
            [1,2]
        ]
        problem.custom = false;
        var y : number;
        var x : number; 
        var ans = 0;

        do {
           let vals = [9, 12, 18, 21, 24]
           x = vals[this.getRandomInt(5)]
           let switchs = this.getRandomInt(3)
           if (switchs == 2) {
               y = 3
               break
           } else {
               y = x / 3
               break
           }
           

        } while(x !== 0 && (Math.ceil((x / y)) !== (x / y) || Math.floor((x / y)) !== (x / y)))
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;
        break;
        
      case 561: // Lesson 12g - Delta 10
        problem.custom = false;
        var y : number;
        var x : number; 
        var ans = 0;

        do {
            // let switchs = this.getRandomInt(3)
            // if (switchs == 1){
                y = 4;
                x = this.rnum_gt_1(40);
                if (x === 0) {
                x = 7; // Will prompt another iteration
                }
            // } 
            // else {

            // }
        } while (x % 4 !== 0)
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;
        break;
      case 562: // 12g Delta 8
      problem.custom = false;
      var y : number;
      var x : number; 
      var ans = 0;

      do {
          let vals = [36, 42, 48]
          x = vals[this.getRandomInt(3)]
          let switchs = this.getRandomInt(3)
          if (switchs == 2) {
              y = x / 6
              break;
          } else {
              y = 6
              break;
          }
      } while (x % 6 !== 0)
      ans = (x / y);
      this.options.showHorizontal = true;
      problem.problemType = ProblemType.Division;
      problem.values[0] = x;
      problem.values[1] = y;
      problem.symbol = "÷";
      problem.divAnswer = ans;
        break;

    case 563: // 12h - Delta 12
        
        problem.custom = false;
        var y : number;
        var x : number; 
        var ans = 0;

        do {

            let switchs = this.getRandomInt(5)
            if (switchs == 4) { 
                x = 56
                y = 7
                break
            }
            if (switchs == 3) {
                x = 49
                y = 7
                break
            }
            if (switchs == 2) {
                x = 56
                y = 8
                break
            } else {
                x = 64
                y = 8
                break
            }

        } while(x !== 0 && (Math.ceil((x / y)) !== (x / y) || Math.floor((x / y)) !== (x / y)))
        ans = (x / y);
        this.options.showHorizontal = true;
        problem.problemType = ProblemType.Division;
        problem.values[0] = x;
        problem.values[1] = y;
        problem.symbol = "÷";
        problem.divAnswer = ans;

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
  private  pickFromRange(upperLimit, lowerLimit) {
    var result = Math.floor(Math.random() * ((upperLimit + 1) - lowerLimit)) + lowerLimit;
    return result;
  }
  private romanize (num) {
    if (!+num)
        return false;
    var	digits = String(+num).split("");
        var key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"];
        var roman = "";
        var i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

private pickFromList(hatArray) {
  var hatIndex = this.pickFromRange((hatArray.length - 1), 0);
  return(hatArray[hatIndex]);
}

private makeRectExpression(simpleNumber) {


    var wholeRoot;
    var firstFactor;
    var secondFactor;
    var remainder;
    var newExpression;

    wholeRoot = Math.floor(Math.sqrt(Math.abs(simpleNumber)));
    firstFactor = this.pickFromRange(2, wholeRoot);
    secondFactor = Math.floor(simpleNumber / firstFactor);
    remainder = simpleNumber - (firstFactor * secondFactor);
    newExpression = (secondFactor <= 0) ? '+' + firstFactor + '&nbsp;<b>&middot;</b>&nbsp;' + secondFactor + '+' + remainder: '' + firstFactor + '&nbsp;<b>&middot;</b>&nbsp;' + secondFactor + '+' + remainder;
    return(newExpression);
}

private makeSquareExpression(simpleNumber) {

    var wholeRoot;
    var largestSquare;
    var firstAddend;
    var secondAddend;
    var thirdAddend;
    var newExpression;

    if(simpleNumber <= 0) {
        wholeRoot = Math.floor(Math.sqrt(simpleNumber*-1));
        largestSquare = Math.pow(wholeRoot, 2);
        firstAddend = this.pickFromRange((wholeRoot - 1), 1);
        secondAddend = wholeRoot - firstAddend;
        thirdAddend = (simpleNumber+largestSquare==0) ? '': (simpleNumber+largestSquare);
        newExpression = '-(' + firstAddend + '+' + secondAddend + ')<sup>2</sup>' + thirdAddend;
        return(newExpression);
    } else {
        wholeRoot = Math.floor(Math.sqrt(simpleNumber));
        largestSquare = Math.pow(wholeRoot, 2);
        firstAddend = this.pickFromRange((wholeRoot - 1), 1);
        secondAddend = wholeRoot - firstAddend;
        thirdAddend = (simpleNumber-largestSquare==0) ? '': '+' + (simpleNumber-largestSquare);
        newExpression = '(' + firstAddend + '+' + secondAddend + ')<sup>2</sup>' + thirdAddend;
        return(newExpression);
    }
}

// private schoolRound(numberToRound, toNearest) { //toNearest is nearest "10", "100", etc.
//     var remainder = numberToRound % toNearest;
//     var roundedNumber = numberToRound - remainder; //subtract the remainder
//     if (remainder >= 5) {
//         roundedNumber = roundedNumber + toNearest; //if the remainder is greater than or equal to 5, it will be the next higher instead
//     }
//     return(roundedNumber);
// }

}
