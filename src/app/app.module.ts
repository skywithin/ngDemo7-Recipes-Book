import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './modules/recipes.module';
import { SharedModule } from './modules/shared.module';
import { ShoppingListModule } from './modules/shopping-list.module';

import { AppComponent } from './app.component';
import { HeaderComponet } from './components/header/header.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RecipesModule, //Need to be before AppRoutingModule
    ShoppingListModule,
    AppRoutingModule,
    SharedModule // Exports DropdownDirective 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
