import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponet } from './components/header/header.component';
import { RecipesBucketComponent } from './components/recipes-bucket/recipes-bucket.component';
import { RecipeListComponent } from './components/recipes-bucket/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes-bucket/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes-bucket/recipe-list/recipe-item/recipe-item.component';
import { ShoppingBucketComponent } from './components/shopping-bucket/shopping-bucket.component';
import { ShoppingEditComponent } from './components/shopping-Bucket/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    RecipesBucketComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingBucketComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
