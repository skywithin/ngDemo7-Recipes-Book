import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { RecipeService } from "./recipe.service";
import { AuthService } from "./auth.service";
import { Recipe } from "../models/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    private repoBaseUrl = 'https://mvagner-udemy-ng-recipe-book.firebaseio.com/';
    private recipesStore = 'recipes.json'

    constructor(
        private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeRecipes() {   // Returns an observable
        const token = this.authService.getToken();

        return this.http.put(
            this.repoBaseUrl + this.recipesStore + '?auth=' + token,
            this.recipeService.getRecipes()
        );
    }

    getRecipes() {
        const token = this.authService.getToken();

        this.http.get(this.repoBaseUrl + this.recipesStore + '?auth=' + token)
            .pipe(
                map(
                    (response: Response) => {
                        console.log('fetched recipes');
                        const recipes = response.json();
                        for (let recipe of recipes) {
                            if (!recipe['ingredientd']) {
                                recipe['ingredientd'] = []; // Make sure 'ingredients' property exists
                            }
                        }
                        return recipes;
                    }
                )
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}