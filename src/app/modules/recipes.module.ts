import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesBucketComponent } from "../components/recipes-bucket/recipes-bucket.component";
import { RecipeStartComponent } from "../components/recipes-bucket/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "../components/recipes-bucket/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../components/recipes-bucket/recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "../components/recipes-bucket/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "../components/recipes-bucket/recipe-list/recipe-item/recipe-item.component";
import { RecipesRoutingModule } from "../components/recipes-bucket/recipes-routing.module";
import { SharedModule } from "./shared.module";

@NgModule({
    declarations: [
        RecipesBucketComponent,
        RecipeStartComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeItemComponent
    ],
    imports: [
        RecipesRoutingModule,
        CommonModule, //important
        ReactiveFormsModule,
        SharedModule
    ]
})
export class RecipesModule {

}