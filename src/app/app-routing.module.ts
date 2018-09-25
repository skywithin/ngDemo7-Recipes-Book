import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesBucketComponent } from "./components/recipes-bucket/recipes-bucket.component";
import { RecipeStartComponent } from "./components/recipes-bucket/recipe-start/recipe-start.component";
import { ShoppingBucketComponent } from "./components/shopping-bucket/shopping-bucket.component";
import { RecipeDetailComponent } from "./components/recipes-bucket/recipe-detail/recipe-detail.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', 
      component: RecipesBucketComponent, 
      children: [
            {path: '', component: RecipeStartComponent},
            {path: ':id', component: RecipeDetailComponent}
        ] 
    },
    { path: 'shopping-list', component: ShoppingBucketComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}