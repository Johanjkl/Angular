import { Component } from '@angular/core';
import { ObservableService } from '../../servicios/observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  constructor(private observableService: ObservableService) { }
  
  public time = this.observableService.time;
}
