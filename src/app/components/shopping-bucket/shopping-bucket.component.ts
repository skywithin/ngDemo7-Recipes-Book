import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-bucket',
  templateUrl: './shopping-bucket.component.html'
})
export class ShoppingBucketComponent implements OnInit, OnDestroy {
  
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { 
  }
    
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
