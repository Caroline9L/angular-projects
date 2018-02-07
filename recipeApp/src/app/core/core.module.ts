import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ShoppingService } from '../shopping/shopping.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataService } from '../shared/data.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';


@NgModule({
	declarations: [
		HeaderComponent,
		HomeComponent
	],
	imports: [
		SharedModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent
	],
  providers: [
	ShoppingService, 
	RecipeService, 
	DataService, 
	AuthService, 
	AuthGuard //moved to recipes routing, since that is the only mod that uses it, which caused a huge fucking error for no good reason. keeping it here would also have been ok, so I'm doing that because fuck Angular. Apparently you still have to import in recipe routing, because also fuck angular, I want to run away and make costumes again.
	] //taken directly from app mod
})

export class CoreModule { }