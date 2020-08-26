import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { AnalyticsService } from '../analytics/analytics.service';
import { AuthService } from '../auth/auth.service';
import { MathProblem } from '../worksheet/math-problem';
import { WorksheetService } from '../worksheet/worksheet.service';
import { ProblemType } from '../worksheet/problem-type.enum';
import { WorksheetOptions } from '../options';

declare let window: any;

@Component({
  selector: 'app-worksheet-generator',
  templateUrl: './worksheet-generator.component.html',
  styleUrls: ['./worksheet-generator.component.scss']
})
export class WorksheetGeneratorComponent implements OnInit {
  letterSpacing: number;
  lineSpacing: number;
  mathProblemsClasses = {};
  numberOfAddends: number;
  numberOfDecimals: number;
  numberOfFactors: number;
  numberOfSubtrahends: number;
  problemFontSize: number;
  problemsPerRow: number;
  worksheetService: WorksheetService;

  private isLoggedIn = false;

  constructor(
    private route: ActivatedRoute,
    worksheetService: WorksheetService,
    private analytics: AnalyticsService,
    public authService: AuthService
  ) {

    this.worksheetService = worksheetService;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      // if (id) {
      //   this.worksheetService.getById(id).subscribe(worksheetService => {
      //     this.worksheetService.id = id;
      //     this.worksheetService.updateFromJson(worksheetService);
      //     this.initialize();
      //   });
      // } else {
        this.initialize();
      // }
    });

    // this.authService.user.subscribe(user => {
    //   // console.log(`authService.user.subscribe`, user);

    //   if (user) {
    //     this.isLoggedIn = true;
    //   } else {
    //     this.isLoggedIn = false;
    //   }
    // });
  }

  isNoN(value) {
    return Number.isNaN(value);
  }

  generateWorksheet() {
    // Refresh the message box
    // var messages = document.getElementById('messaging');

    let lessons_returned : Array <number>;

    // if (messages != undefined)
    //   document.getElementById('messaging').style.display = "block";

    this.analytics.trackEventWithCategory('worksheet', 'generate');

    this.worksheetService.clearProblems();      // 0

    lessons_returned = this.worksheetService.generateProblems();   // 1
    // this.problemsPerRow = this.worksheetService.options.problemsPerRow;
    // this.manualProblemsPerRowSliderChange(2);
    this.specifyConditions(lessons_returned);


    // if (!this.isLoggedIn) {
    //   this.authService.loginAnonymous();
    // }
  }

  // Add lessons which require specific visual overrides of defaults
  // Warning : These conditions are bound to conflict, when this happens work with the least common visual denominators, obviously
  specifyConditions(lessons_array) {

    var acquired = [];

    /*
        This data structure is simply for note-taking.
        I've added thee lessons to check for in the array directly below it (sp)
    */
    var special_cases = {
        "PreAlgebra" : [
            234             // PreAlgebra lesson 14 can't fit mroe than 2 problems per row
        ]
    }

    var sp = [234];

    for (var i = 0; i < lessons_array.length; i++) {
        for (var j = 0; j < sp.length; j++) {
            if (lessons_array[i] === sp[j]) {
                // Found a lesson that needs to be overridden in some way
                acquired.push(sp[j])
            }
        }
    }

    // Determine what we're about to do
    for (var i = 0; i < acquired.length; i++) {
        let check = acquired[i];
        switch (check) {
            case 234 : // PreAlgebra Lesson 14, 2 column default
                this.manualProblemsPerRowSliderChange(2);
                break;

        }
    }

  }

  getDivisionNumberFormat() {
    if (this.worksheetService.options.divisionOptions.showDecimals) {
      return `1.0-${this.worksheetService.options.divisionOptions.decimalPlaces}`;
    }

    return `1.0-0`;
  }

  isDivisionProblem(problem: MathProblem) {
    return problem.problemType === ProblemType.Division;
  }

  letterSpacingSliderChange(event) {
    this.mathProblemsClasses[`math-problems--letter-spacing-${this.letterSpacing}`] = false;
    this.letterSpacing = this.worksheetService.options.letterSpacing = event.value;
    this.mathProblemsClasses[`math-problems--letter-spacing-${this.letterSpacing}`] = true;
  }

  lineSpacingSliderChange(event) {
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = false;
    this.lineSpacing = this.worksheetService.options.lineSpacing = event.value;
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = true;
  }

  // numberOfAddendsSliderChange(event) {
  //   if (this.numberOfAddends > event.value) {
  //     this.worksheetService.options.additionOptions.removeAddend();
  //   }

  //   if (this.numberOfAddends < event.value) {
  //     this.worksheetService.options.additionOptions.addAddend();
  //   }

  //   this.numberOfAddends = this.worksheetService.options.additionOptions.numberOfAddends;
  // }

  // numberOfDecimalsSliderChange(event) {
  //   this.numberOfDecimals = this.worksheetService.options.divisionOptions.decimalPlaces = event.value;
  // }

  // numberOfFactorsSliderChange(event) {
  //   if (this.numberOfFactors > event.value) {
  //     this.worksheetService.options.multiplicationOptions.removeFactor();
  //   }

  //   if (this.numberOfFactors < event.value) {
  //     this.worksheetService.options.multiplicationOptions.addFactor();
  //   }

  //   this.numberOfFactors = this.worksheetService.options.multiplicationOptions.numberOfFactors;
  // }

  // numberOfSubtrahendsSliderChange(event) {
  //   if (this.numberOfSubtrahends > event.value) {
  //     this.worksheetService.options.subtractionOptions.removeSubtrahend();
  //   }

  //   if (this.numberOfSubtrahends < event.value) {
  //     this.worksheetService.options.subtractionOptions.addSubtrahend();
  //   }

  //   this.numberOfSubtrahends = this.worksheetService.options.subtractionOptions.numberOfSubtrahends;
  // }

  print() {

    // document.getElementById('messaging').style.display = "none";
    window.print();

    // this.analytics.trackEventWithCategory('worksheet', 'print');
  }

  problemFontSizeSliderChange(event) {
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = false;
    this.problemFontSize = this.worksheetService.options.problemFontSize = event.value;
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = true;
  }

  problemsPerRowSliderChange(event) {

    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = false;
    this.problemsPerRow = this.worksheetService.options.problemsPerRow = event.value;
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = true;
  }

  manualProblemsPerRowSliderChange(n) {
    console.log("manual override");
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = false;
    this.problemsPerRow = this.worksheetService.options.problemsPerRow = n;
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = true;
  }

  // save() {
  //   this.analytics.trackEventWithCategory('worksheet', 'save');

  //   this.worksheetService.save();
  // }

  showDecimalsChange(event) {
    if (event.checked) {
      this.worksheetService.options.divisionOptions.showRemainders = false;
    }
  }

  showRemaindersChange(event) {
    if (event.checked) {
      this.worksheetService.options.divisionOptions.showDecimals = false;
    }
  }

  private initialize() {
    this.letterSpacing = this.worksheetService.options.letterSpacing;
    this.lineSpacing = this.worksheetService.options.lineSpacing;
    this.numberOfAddends = this.worksheetService.options.additionOptions.numberOfAddends;
    this.numberOfDecimals = this.worksheetService.options.divisionOptions.decimalPlaces;
    this.numberOfFactors = this.worksheetService.options.multiplicationOptions.numberOfFactors;
    this.numberOfSubtrahends = this.worksheetService.options.subtractionOptions.numberOfSubtrahends;
    this.problemFontSize = this.worksheetService.options.problemFontSize;
    this.problemsPerRow = this.worksheetService.options.problemsPerRow;
    this.mathProblemsClasses[`math-problems--columns-${this.problemsPerRow}`] = true;
    this.mathProblemsClasses[`math-problems--font-size-${this.problemFontSize}`] = true;
    this.mathProblemsClasses[`math-problems--letter-spacing-${this.letterSpacing}`] = true;
    this.mathProblemsClasses[`math-problems--line-spacing-${this.lineSpacing}`] = true;
  }

  setHorizontal() {
    // Reset to max of 5 problems per row when this is selected
    // this.problemsPerRow = this.worksheetService.options.problemsPerRow = 3;
  }

  addLessonList(level) {
    console.log(level);
    var list = document.getElementById(String(level) + "-select");
    var dock = document.getElementById(String(level) + "-selector");
    var listClone = list.cloneNode(true);
    dock.appendChild(listClone);
  }

  reset() {
    location.reload();
  }
}
