import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { LoggingService } from '../../services/logging.service';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-bucket',
  templateUrl: './shopping-bucket.component.html'
})
export class ShoppingBucketComponent implements OnInit {
  
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { 
  }
    
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
}
