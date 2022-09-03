import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html'
})
export class ErrorBoxComponent {

  constructor(public errorService: ErrorService) { }


}
