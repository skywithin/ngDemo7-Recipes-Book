import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./components/core/home/home.component";
import { ShoppingBucketComponent } from "./components/shopping-bucket/shopping-bucket.component";
import { PageNotFoundComponent } from "./components/core/page-not-found/page-not-found.component";

const appRoutes: Routes = [
    //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './modules/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: ShoppingBucketComponent },
    { path: 'page-not-found', component: PageNotFoundComponent, data: {message: 'What the... How did you get here?'} },
    { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}