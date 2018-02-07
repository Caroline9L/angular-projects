import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
// import { Router } from '@angular/router';

// import { HttpEvent, HttpEventType } from '@angular/common/http';

// import { DataStorageService } from '../../shared/data-storage.service';
// import { AuthService } from '../../auth/auth.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  // constructor(private router: Router,
                // private dataStorageService: DataStorageService,
  //             private authService: AuthService, 
  //             private store: Store<fromApp.AppState>) {
  // }
  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    // this.dataStorageService.storeRecipes()
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     }
    //   );
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    // this.dataStorageService.getRecipes();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    // this.authService.logout();
    // this.router.navigate(['/']); //works but wasn't what we were going for
    this.store.dispatch(new AuthActions.Logout());
  }
}
