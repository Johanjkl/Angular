import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { InputComponent } from './componentes/input/input.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { ProgressBarComponent } from './componentes/progress-bar/progress-bar.component';
import { SlideToggleComponent } from './componentes/slide-toggle/slide-toggle.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { ObservableComponent } from './componentes/observable/observable.component';


@NgModule({
  declarations: [
    InputComponent,
    SpinnerComponent,
    ProgressBarComponent,
    SlideToggleComponent,
    MenuComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class InputsModule { }
