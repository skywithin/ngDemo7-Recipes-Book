import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  selectedRecipeId: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.selectedRecipeId = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.selectedRecipeId);
        }
      );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    //this.router.navigate(['edit'], {relativeTo: this.route}); //relative path - also works
    this.router.navigate(['../',this.selectedRecipeId,'edit'], {relativeTo: this.route}); // more complex way
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.selectedRecipeId);
    this.router.navigate(['/recipes']);
  }
}
