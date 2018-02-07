import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server']; //retrieves data from the resolver stored in resolve: {server:} in app-routing
        }
      );


      //replaced by below
    // this.server = this.serversService.getServer(1);

    //replaced by resolver
  //  const id = +this.route.snapshot.params['id']; //+ makes this string into a number so that the id matches how it is stored in the server
  //  this.server = this.serversService.getServer(id);
  //  this.route.params
  //   .subscribe(
  //     (params: Params) => {
  //       this.server = this.serversService.getServer(+params['id']);
  //     }
  //   );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' }); //or this.router.navigate(['/servers', this.server.id, 'edit']). preserve keeps our parameters when the page is reloaded or we navigate to a slightly different place. merge will allow new ones to be added. preserve lets the old ones override
  }

}
