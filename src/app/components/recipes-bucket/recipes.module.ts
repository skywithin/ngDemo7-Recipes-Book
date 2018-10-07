import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesBucketComponent } from "./recipes-bucket.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { DropdownDirective } from "../../directives/dropdown.directive";
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations: [
        RecipesBucketComponent,
        RecipeStartComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeItemComponent,
        DropdownDirective
    ],
    imports: [
        CommonModule, //important
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {

}