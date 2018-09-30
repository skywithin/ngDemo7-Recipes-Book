import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { LoggingService } from './logging.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor(private loggingService: LoggingService) { }

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    this.loggingService.logToConsole('Ingredient added: "' + ingredient.name + '". Amount: ' + ingredient.amount);
  }

  addIngredients(ingredients: Ingredient[]) {
    //for (let ingredient of ingredients) {
    //  this.addIngredient(ingredient);
    //}
    this.ingredients.push(...ingredients); //Spread array into single elements
    this.ingredientsChanged.next(this.ingredients.slice());
    this.loggingService.logToConsole(ingredients.length + ' ingredient(s) added');
  }
}
