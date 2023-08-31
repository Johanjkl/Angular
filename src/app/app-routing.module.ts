import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
  path: '',
  loadChildren: () => import('./inputs/inputs.module'). then(m => m.InputsModule)
 },
 {
  path: 'directivas',
  loadChildren: () => import('./directivas/directivas.module'). then(m => m.DirectivasModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
