import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //this is now an attribute with the [], and cannot be its own html tag
  //selector: '.app-servers', //this is now a class and must be indicated as class
  selector: 'app-servers',
  //template: `
  //  <app-server></app-server>
  //  This is an inline template in the component.ts file, it must be wrapped with backticks.
  //  <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false; //turn off button -- this is bound in the html  class
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server'; //gives a place to dump the input
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true; //after 2 sec make class true
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName; //event being bound to button & outputs info
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; //outputs the grabbed and dumped data. <> indicates the type
    //of input (like html)
  }

}
