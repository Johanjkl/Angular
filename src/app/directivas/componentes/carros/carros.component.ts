import { Component } from '@angular/core';
import { CARROS } from '../../carros';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {
  carros = CARROS  
}
