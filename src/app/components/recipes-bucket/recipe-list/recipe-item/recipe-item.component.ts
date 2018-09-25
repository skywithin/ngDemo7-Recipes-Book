import { Component, OnInit, Input, } from '@angular/core';
import { Recipe } from '../../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

  @Input('recipeItem') recipe: Recipe;
  @Input() recipeIndex: number;

  ngOnInit() {
  }
}
