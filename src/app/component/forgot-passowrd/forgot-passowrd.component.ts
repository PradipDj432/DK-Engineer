import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-passowrd',
  templateUrl: './forgot-passowrd.component.html',
  styleUrls: ['./forgot-passowrd.component.scss']
})
export class ForgotPassowrdComponent {
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
