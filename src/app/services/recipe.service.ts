import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe #1',
      'This is simply a test #1',
      'https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg',
      [
        new Ingredient('Chiken', 1),
        new Ingredient('Rice', 1),
        new Ingredient('Curry', 1)
      ]),
    new Recipe(
      'A Test Recipe #2',
      'This is simply a test #2',
      'https://img.delicious.com.au/xWjPCEi5/h506-w759-cfill/del/2015/10/del1015p107-1-17294-1.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Chiken', 1)
      ])
  ];
  
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //Copy of original array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }  

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
