import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { InputComponent } from './componentes/input/input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    FormsModule
  ]
})
export class InputsModule { }
