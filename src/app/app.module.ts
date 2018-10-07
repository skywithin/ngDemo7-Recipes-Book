import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './components/recipes-bucket/recipes.module';

import { AppComponent } from './app.component';
import { HeaderComponet } from './components/header/header.component';
import { ShoppingBucketComponent } from './components/shopping-bucket/shopping-bucket.component';
import { ShoppingEditComponent } from './components/shopping-Bucket/shopping-edit/shopping-edit.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    ShoppingBucketComponent,
    ShoppingEditComponent,
    //HighlightDirective,
    //UnlessDirective,
    //DropdownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RecipesModule, //Need to be before AppRoutingModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
