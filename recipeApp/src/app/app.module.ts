import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms'; // ReactiveFormsModule
import { HttpModule } from '@angular/http';
// import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { ShoppingComponent } from './shopping/shopping.component';
// import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
// import { DropdownDirective } from './shared/dropdown.directive';
// import { ShoppingService } from './shopping/shopping.service';
// import { RecipesComponent } from './recipes/recipes.component'; //removed to own module
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { AppRoutingModule } from './app-routing.module';
// import { RecipeService } from './recipes/recipe.service'; //used elsewhere than recipes, needs to stay
// import { DataService } from './shared/data.service';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SigninComponent } from './auth/signin/signin.component';
// import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth/auth-guard.service';
// import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingModule } from './shopping/shopping.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
    // HeaderComponent, //removed to core module
    // HomeComponent,
    // ShoppingComponent,//removed to own module
    // ShoppingEditComponent,
    // RecipesComponent, //removed to own module
    // RecipeListComponent,
    // RecipeItemComponent,
    // RecipeDetailComponent,
    // RecipeEditComponent,
    // RecipeStartComponent,
    // DropdownDirective,
    // SignupComponent,
    // SigninComponent
  ],
  imports: [
    BrowserModule, //contains commonModule, so not needed to add
    // FormsModule,
    // ReactiveFormsModule,
    HttpModule,
    AppRoutingModule, 
    // RecipesModule, //removing to facilitate lazy loading so this isn't immediately called
    SharedModule,
    AuthModule,
    ShoppingModule,
    CoreModule
  ],
  // providers: [ShoppingService, RecipeService, DataService, AuthService, AuthGuard], //removed to core module
  bootstrap: [AppComponent]
})
export class AppModule { }
