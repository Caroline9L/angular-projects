import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';


import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    // const token = this.authService.getToken();
    // const header = new HttpHeaders().set('Authorization', 'Blah Blah');

  //   return this.httpClient.put('https://ng-recipe-book-a67b6.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  // }
    // return this.httpClient.put('https://ng-recipe-book-a67b6.firebaseio.com/recipes.json', this.recipeService.getRecipes(), { 
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token) //replaces ?auth=' + token in the put request
      // // headers: headers //new HttpHeaders().set('Authorization', 'Blah Blah').append
    // });
    // const req = new HttpRequest('PUT', 'https://ng-recipe-book-a67b6.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true, params: new HttpParams().set('auth', token)}); //good for up/download files
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-a67b6.firebaseio.com/recipes.json', this.recipeService.getRecipes(), { reportProgress: true }); //good for up/download files

    return this.httpClient.request(req);
  }


  getRecipes() {
    // const token = this.authService.getToken();

    // this.httpClient.get('https://ng-recipe-book-a67b6.firebaseio.com/recipes.json?auth=' + token, {
    //   observe: 'response',
    //   responseType: 'text' // also json (default), blob (dl file), arraybuffer (to buffer data)
    // })
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-a67b6.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-a67b6.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);
        // (response: Response) => {
        //   const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
          // return [];
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
