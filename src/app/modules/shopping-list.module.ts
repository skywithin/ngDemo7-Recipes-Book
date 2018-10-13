import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShoppingBucketComponent } from "../components/shopping-bucket/shopping-bucket.component";
import { ShoppingEditComponent } from "../components/shopping-Bucket/shopping-edit/shopping-edit.component";

@NgModule({
    declarations:[
        ShoppingBucketComponent,
        ShoppingEditComponent    
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule {

}