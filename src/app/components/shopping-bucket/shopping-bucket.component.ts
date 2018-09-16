import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-shopping-bucket',
  templateUrl: './shopping-bucket.component.html'
})
export class ShoppingBucketComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.loggingService.logToConsole('Ingredient added: "' + ingredient.name + '". Amount: ' + ingredient.amount);
  }
}
