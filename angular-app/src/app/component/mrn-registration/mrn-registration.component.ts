import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mrn-registration',
  templateUrl: './mrn-registration.component.html',
  styleUrls: ['./mrn-registration.component.scss']
})
export class MrnRegistrationComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  password2 = new FormControl('', [Validators.required]);
  name1 = new FormControl('', [Validators.required]);
  name2 = new FormControl('', [Validators.required]);
  name3 = new FormControl('', [Validators.required]);
  name4 = new FormControl('', [Validators.required]);
  name5 = new FormControl('', [Validators.required]);
  name6 = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagep() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    return 0
  }
  hide = true;

}
