import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule, matMenuAnimations} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatCardModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
