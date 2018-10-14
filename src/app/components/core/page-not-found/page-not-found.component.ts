import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

    ngOnInit() {
      //this.errorMessage = this.route.snapshot.data['message']; //Static data coming from app-routing.module
      this.route.data.subscribe(
        (data: Data) => {
          this.errorMessage = data['message'];
        }
      );
    }

}
