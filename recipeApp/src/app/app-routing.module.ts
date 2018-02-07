// import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { HeaderComponent } from './header/header.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingComponent } from './shopping/shopping.component';

// import { SignupComponent } from './auth/signup/signup.component';
// import { SigninComponent } from './auth/signin/signin.component';
// import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent }, 
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, //loadchildren for lazy load -- points to what we want to load when that path is chosen. indicate relative path ./path#class //, canLoad: [AuthGuard]

  // { path: 'recipes', component: RecipesComponent, children: [
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
  //   { path: ':id', component: RecipeDetailComponent },
  //   { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
  //   ] 
  // }, //move to local routing mod as part of making it a module
  { path: 'shopping', component: ShoppingComponent }
  // { path: 'signup', component: SignupComponent},
  // { path: 'signin', component: SigninComponent }
];

@NgModule({
	imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) //preload can load lazy sections ahead of need to speed things up
  ],
	exports: [RouterModule]
})

export class AppRoutingModule { //bundles all the routing functionality

}
