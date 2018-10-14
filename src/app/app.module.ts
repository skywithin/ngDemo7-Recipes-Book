import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
//import { RecipesModule } from './modules/recipes.module';
import { SharedModule } from './modules/shared.module';
import { ShoppingListModule } from './modules/shopping-list.module';
import { AuthModule } from './modules/auth.module';
import { CoreModule } from './modules/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    //RecipesModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    SharedModule // Exports DropdownDirective 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
