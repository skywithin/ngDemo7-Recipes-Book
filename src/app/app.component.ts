import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngDemo7-Recipes-Book';
  loadedFeature: string = 'recipe';
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCsxR7wpi-zQgoLtulmr4e0lwOYkJrmwJc",
      authDomain: "mvagner-udemy-ng-recipe-book.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
