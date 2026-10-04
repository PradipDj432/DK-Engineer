import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as sgMail from '@sendgrid/mail';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  SendMailForm: FormGroup;
  SendMailFormSubmitted: boolean = false;
  constructor(private fb: FormBuilder) {
    this.SendMailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      body: ['', Validators.required]
    });
  }

  SendMail() {
    this.SendMailFormSubmitted = true;

    if (this.SendMailForm.invalid) {
      return; // Don't proceed if the form is invalid
    }
    else{
      this.SendMailFormSubmitted = false;
      let formmail = this.SendMailForm.value.email;
      let bodymail = this.SendMailForm.value.body;
      
    }
    
  }
 get formControls() {
  return this.SendMailForm.controls;
}
sendEmail2() {
  debugger
  window.location.href = 'mailto:recipient@example.com?subject=Your%20Subject&body=Your%20Message';
}
 
}
