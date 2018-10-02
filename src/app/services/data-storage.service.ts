import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    private repoBaseUrl = 'https://mvagner-udemy-ng-recipe-book.firebaseio.com/';
    private recipesStore = 'recipes.json'

    constructor(
        private http: Http,
        private recipeService: RecipeService) {}

    storeRecipes() {   // Returns an observable
        return this.http.put(
            this.repoBaseUrl + this.recipesStore,
            this.recipeService.getRecipes()
        );
    }

    getRecipes() {
        this.http.get(this.repoBaseUrl + this.recipesStore)
            .subscribe(
                (response: Response) => {
                    const recipes = response.json();
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}