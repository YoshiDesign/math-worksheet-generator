import { AdditionOptions } from './addition-options';
import { DivisionOptions } from './division-options';
import { MultiplicationOptions } from './multiplication-options';
import { SubtractionOptions } from './subtraction-options';
import { AlphaOptions } from './alpha-options';
import { BetaOptions } from './beta-options';
import { GammaOptions } from './gamma-options';
import { DeltaOptions } from './delta-options';
import { EpsilonOptions } from './epsilon-options';
import { ZetaOptions } from './zeta-options';
import { PreAlgebraOptions } from './prealgebra-options';
import { AimOptions } from './aim-options';

export class WorksheetOptions {
  additionOptions = new AdditionOptions();
  divisionOptions = new DivisionOptions();
  subtractionOptions = new SubtractionOptions();
  multiplicationOptions = new MultiplicationOptions();
  instructions = 'Complete the following problems. Show all of your work.';
  landscape = false;
  showHorizontal = false;
  letterSpacing = 3;
  lineSpacing = 5;
  problemCount = 25;
  lessonsCount = 0;  // How many different levels were selected
  problemFontSize = 2;
  problemsPerRow = 5;
  showAnswers = false;
  showDateLine = true;
  showInstructions = true;
  showNameLine = true;
  showProblemNumbers = true;
  showTitle = true;
  title = 'Math Worksheet';

  containsInequality = false;

  alphaOptions = new AlphaOptions();
  betaOptions = new BetaOptions();
  gammaOptions = new GammaOptions();
  deltaOptions = new DeltaOptions();
  epsilonOptions = new EpsilonOptions();
  zetaOptions = new ZetaOptions();
  prealgebraOptions = new PreAlgebraOptions();
  aimOptions = new AimOptions();

  alphaCreated = 0;
  betaCreated = 0;
  gammaCreated = 0;
  deltaCreated = 0;
  epsilonCreated = 0;
  zetaCreated = 0;
  prealgebraCreated = 0;
  aimCreated = 0;

  updateFromJson(jsonObject: WorksheetOptions) {
    this.additionOptions.updateFromJson(jsonObject.additionOptions);
    this.divisionOptions.updateFromJson(jsonObject.divisionOptions);
    this.instructions = 'Complete the following problems. Show all of your work.';
    this.landscape = jsonObject.landscape;
    this.letterSpacing = jsonObject.letterSpacing;
    this.lineSpacing = jsonObject.lineSpacing;
    this.problemCount = jsonObject.problemCount;
    this.problemFontSize = jsonObject.problemFontSize;
    this.problemsPerRow = jsonObject.problemsPerRow;
    this.showAnswers = jsonObject.showAnswers;
    this.showDateLine = jsonObject.showDateLine;
    this.showInstructions = jsonObject.showInstructions;
    this.showNameLine = jsonObject.showNameLine;
    this.showProblemNumbers = jsonObject.showProblemNumbers;
    this.showTitle = jsonObject.showTitle;
    this.title = jsonObject.title;
    this.multiplicationOptions.updateFromJson(jsonObject.multiplicationOptions);
    this.subtractionOptions.updateFromJson(jsonObject.subtractionOptions);
  }
}
