import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayUserName = '';
  userName = '';


  onCreateNewUser() {
    this.displayUserName = 'Username is ' + this.userName;
    this.userName = '';
  }

  onUpdateUser(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
