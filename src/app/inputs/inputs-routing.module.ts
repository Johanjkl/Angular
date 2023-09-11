import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './componentes/input/input.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { ProgressBarComponent } from './componentes/progress-bar/progress-bar.component';
import { SlideToggleComponent } from './componentes/slide-toggle/slide-toggle.component';
import { ObservableComponent } from './componentes/observable/observable.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'spinner',
    component: SpinnerComponent
  },
  {
    path: 'progress',
    component: ProgressBarComponent
  },
  {
    path: 'slide',
    component: SlideToggleComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputsRoutingModule { }
