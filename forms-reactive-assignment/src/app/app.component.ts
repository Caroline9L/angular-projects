import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { CustomValidators } from './custom-validators';

// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;
  // statuses = ['Stable', 'Critical', 'Finished'];
  // forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'project': new FormControl(
        null, 
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
        ),
      'email': new FormControl('example@test.com', [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    });

    this.projectForm.patchValue({
      'project': 'Example'
    });

  }
  
  onSubmit() {
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }

//this is all going in the custom validators.ts file this time
  // // testForbidden(control: FormControl): {[s: string]: boolean} {
  // //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  // //     return {'testIsForbidden': true};
  // //   }
  // //   return null;
  // // }

  // testForbidden(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'Test') {
  //         resolve({'testIsForbidden': true});
  //       } else {
  //         resolve(null);
  //       }
  //     }, 2500);
  //   });
  //   return promise;
  // }

}
