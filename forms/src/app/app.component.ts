import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer: '';
  genders = ['male', 'female', 'anon'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({ //this method overrides all existing content (setValue)
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'anon'
    // });
    this.signupForm.form.patchValue({ //this method only overrides what I tell it to (patchValue)
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form:NgForm){ 
  //   console.log(form); //returned inputs will output in this object under value
  // }

  onSubmit() {
    this.submitted = true;
    // console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

  // onReset() {
  //   this.signupForm.reset();
  // }
}
