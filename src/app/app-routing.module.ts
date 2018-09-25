import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesBucketComponent } from "./components/recipes-bucket/recipes-bucket.component";
import { ShoppingBucketComponent } from "./components/shopping-bucket/shopping-bucket.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesBucketComponent },
    { path: 'shopping-list', component: ShoppingBucketComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}