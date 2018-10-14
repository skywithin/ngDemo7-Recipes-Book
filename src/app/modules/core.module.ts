import { NgModule } from "@angular/core";
import { SharedModule } from "./shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { HomeComponent } from "../components/core/home/home.component";
import { HeaderComponet } from "../components/core/header/header.component";

@NgModule({
    declarations: [
        HeaderComponet,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponet
    ]
})
export class CoreModule{

}