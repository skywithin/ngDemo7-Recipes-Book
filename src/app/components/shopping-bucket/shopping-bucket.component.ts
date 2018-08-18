import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-bucket',
  templateUrl: './shopping-bucket.component.html'
})
export class ShoppingBucketComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
