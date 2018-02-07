import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from './servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serverService.getAppName();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSaveServer() {
    this.serverService.storeServers(this.servers) //calling the observable from the service
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }//this subscription is what sends the info to the db

  // onGetServer() {
  //   this.serverService.getServers() //calling the observable from the service
  //     .subscribe(
  //       (response: Response) => {
  //         const data = response.json(); //.json is included in Response import -- it turns the info into a js object
  //         console.log(data);
  //       },
  //       (error) => console.log(error)
  //     );
  // }
  onGetServer() { //this is a more centralized version where we can call whatever from the service - it deals with the response and all that
    this.serverService.getServers() //calling the observable from the service
      .subscribe(
        (servers: any[]) => this.servers = servers, //assigns the data to the approp. server
        (error) => console.log(error)
      );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
