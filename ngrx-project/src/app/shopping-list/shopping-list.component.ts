import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from './shopping-list.service';
// import * as fromShoppingList from './store/shopping-list.reducers'; 
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {//, OnDestroy
  // ingredients: Ingredient[];
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  // private subscription: Subscription;

  // constructor(private slService: ShoppingListService,
  //             private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }
  // constructor(private store: Store<fromShoppingList.AppState>) { }//private slService: ShoppingListService,
  constructor(private store: Store<fromApp.AppState>) { }


  ngOnInit() {
    // this.ingredients = this.slService.getIngredients();
    this.shoppingListState = this.store.select('shoppingList'); //this is an observable
    // this.subscription = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
