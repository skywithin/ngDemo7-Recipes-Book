import { Component} from "@angular/core";
import { Response} from "@angular/http";
import { DataStorageService } from "../../services/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponet {
    constructor(private dataStorageService: DataStorageService) {}

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }
}