import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .text {
      color: white;
    }
  `]
})
export class AppComponent {
  pIsClick = false;
  keyStrokes = [];

  pClick() {
    this.pIsClick = !this.pIsClick; //toggles
    //this.keyStrokes.push(this.keyStrokes.length + 1); //adds to array and increments
    this.keyStrokes.push(new Date()); //adds timestamp
  }

}
