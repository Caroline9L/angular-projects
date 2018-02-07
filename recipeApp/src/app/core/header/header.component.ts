import { Component } from '@angular/core';//, EventEmitter, Output
import { Response } from '@angular/http';

import { DataService } from '../../shared/data.service';
import { AuthService } from '../../auth/auth.service';

// import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Output() featureSelected  = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  constructor(private dataService: DataService, 
    public authService: AuthService) {}


  onSaveRecipe() {
    this.dataService.storeRecipes() 
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchRecipe() {
    this.dataService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
