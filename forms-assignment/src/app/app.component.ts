import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  options = ['Basic', 'Advanced', 'Pro']; //alternative to coding options in template
  defaultOption = 'Advanced';

  defaultEmail = 'example@example.com';
  defaultPassword = 'password123';
  info = {
    email: '',
    password: '',
    subOption: ''
  };
  submitted = false;


  onSubmit() {
    console.log(this.signupForm.value);
    this.submitted = true;
    this.info.email = this.signupForm.value.email;
    this.info.password = this.signupForm.value.password;
    this.info.subOption = this.signupForm.value.defaultOption;

    this.signupForm.reset();
  }

}
// 
//  
