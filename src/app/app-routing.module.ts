import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/core/home/home.component";
import { ShoppingBucketComponent } from "./components/shopping-bucket/shopping-bucket.component";

const appRoutes: Routes = [
    //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './modules/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: ShoppingBucketComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}