import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
              private router: Router, 
              private route: ActivatedRoute) { }//injects currently active route

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route}); //navigate does not append the path like routerlink. relativeTo tells it where to link onto; activeroute is the one you are on already. This is a broken thing since it's appending.
  }

}
