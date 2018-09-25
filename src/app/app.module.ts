import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponet } from './components/header/header.component';
import { RecipesBucketComponent } from './components/recipes-bucket/recipes-bucket.component';
import { RecipeListComponent } from './components/recipes-bucket/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes-bucket/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes-bucket/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './components/recipes-bucket/recipe-start/recipe-start.component';
import { ShoppingBucketComponent } from './components/shopping-bucket/shopping-bucket.component';
import { ShoppingEditComponent } from './components/shopping-Bucket/shopping-edit/shopping-edit.component';

import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { RecipeEditComponent } from './components/recipes-bucket/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    RecipesBucketComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingBucketComponent,
    ShoppingEditComponent,

    HighlightDirective,
    UnlessDirective,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
