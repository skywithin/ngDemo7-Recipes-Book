import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
//import { RecipesModule } from './modules/recipes.module';
import { SharedModule } from './modules/shared.module';
import { ShoppingListModule } from './modules/shopping-list.module';
import { AuthModule } from './modules/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponet } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    //RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule // Exports DropdownDirective 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
