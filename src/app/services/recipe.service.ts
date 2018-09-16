import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe #1',
      'This is simply a test #1',
      'https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg'),
    new Recipe(
      'A Test Recipe #2',
      'This is simply a test #2',
      'https://img.delicious.com.au/xWjPCEi5/h506-w759-cfill/del/2015/10/del1015p107-1-17294-1.jpg')
  ];
  
  getRecipes() {
    return this.recipes.slice(); //Copy of original array
  }
}
