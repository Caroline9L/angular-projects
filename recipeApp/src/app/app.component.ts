import { Component, Output, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({//in authentication/web setup
      apiKey: "AIzaSyAVaLUm62vsBUqxXaxeNfJ8l_cBSTAnvGw",
      authDomain: "ng-recipe-book-a67b6.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
