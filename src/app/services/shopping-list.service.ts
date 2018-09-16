import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor(private loggingService: LoggingService) { }

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
    this.loggingService.logToConsole('Ingredient added: "' + ingredient.name + '". Amount: ' + ingredient.amount);
  }
}
