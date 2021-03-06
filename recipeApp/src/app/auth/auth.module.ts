import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
// import { AuthService } from './auth.service';


@NgModule({
	declarations: [
		SignupComponent,
		SigninComponent
		// AuthService
	],
	imports: [
	    FormsModule,
		// CommonModule
		AuthRoutingModule
	]
})

export class AuthModule { }
