import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgModel } from '@angular/forms';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  // MatCoreModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    // MatCoreModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    // MatCoreModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTooltipModule
  ]
})
export class MaterialComponentModule { }
