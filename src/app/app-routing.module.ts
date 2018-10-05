import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesBucketComponent } from "./components/recipes-bucket/recipes-bucket.component";
import { RecipeStartComponent } from "./components/recipes-bucket/recipe-start/recipe-start.component";
import { ShoppingBucketComponent } from "./components/shopping-bucket/shopping-bucket.component";
import { RecipeDetailComponent } from "./components/recipes-bucket/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./components/recipes-bucket/recipe-edit/recipe-edit.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { SigninComponent } from "./components/auth/signin/signin.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipesBucketComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingBucketComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}