import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mrn-login',
  templateUrl: './mrn-login.component.html',

  styleUrls: ['./mrn-login.component.scss'],

})
export class MrnLoginComponent {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password2 = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'ID is required.';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessagep() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    return 0
  }
}
