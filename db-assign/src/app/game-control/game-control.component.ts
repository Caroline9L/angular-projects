import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  // styleUrls: ['./game-control.component.css']
  styles: [`
    .even {
      font-weight: bold;
    }
  `]
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  // keyStrokes = [];
  //ref = setInterval(() => { this.keyStrokes.push([]); }, 1000); //outputs the next item in the array every 5 sec.
  // @Input('clickNo') startGame = new EventEmitter<{keyStrokes: string}>(); //needs to pass to odd/even





  constructor() {
    //setInterval(() => {(this.stroke)}, 1000);
  }

  ngOnInit() {
  }

  // getEventTime() {
  //   // console.log(this.Date())
  // }

  onStartGame() {
    console.log('You clicked');
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
    // console.log(this.keyStrokes.push([]));//records click # and pushes to array
  }
  

  onPauseGame() {
    clearInterval(this.interval);
  }

}
