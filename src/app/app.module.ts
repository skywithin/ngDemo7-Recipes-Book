import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponet } from './components/header/header.component';
import { RecipesBucketComponent } from './components/recipes-bucket/recipes-bucket.component';
import { RecipeListComponent } from './components/recipes-bucket/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes-bucket/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes-bucket/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    RecipesBucketComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
