import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe #1',
      'This is simply a test #1',
      'https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg'),
    new Recipe(
      'A Test Recipe #2',
      'This is simply a test #2',
      'https://img.delicious.com.au/xWjPCEi5/h506-w759-cfill/del/2015/10/del1015p107-1-17294-1.jpg')
  ]; 

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
