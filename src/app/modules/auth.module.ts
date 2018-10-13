import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SigninComponent } from "../components/auth/signin/signin.component";
import { SignupComponent } from "../components/auth/signup/signup.component";
import { AuthRoutingModule } from "../components/auth/auth-routing.module";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        AuthRoutingModule,
        CommonModule,
        FormsModule
    ]
})
export class AuthModule {}