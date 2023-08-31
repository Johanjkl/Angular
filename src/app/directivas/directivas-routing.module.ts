import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosComponent } from './componentes/carros/carros.component';

const routes: Routes = [
  {
    path:'',
    component: CarrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivasRoutingModule { }
