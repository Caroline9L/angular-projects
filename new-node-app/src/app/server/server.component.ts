import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
//  styleUrls: ['./server.component.css']
  styles: [`
    .online {
      color: white;
    }
    p{
      padding: 1rem 0;
    }
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; //if the number output is greater than .5, output is online, otherwise it's offline
  }

  getServerStatus() { //method to return string - in {{ }} in html
    return this.serverStatus;
  }

  getColor () {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
