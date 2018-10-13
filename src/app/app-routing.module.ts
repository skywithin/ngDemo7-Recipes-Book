import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShoppingBucketComponent } from "./components/shopping-bucket/shopping-bucket.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { SigninComponent } from "./components/auth/signin/signin.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
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