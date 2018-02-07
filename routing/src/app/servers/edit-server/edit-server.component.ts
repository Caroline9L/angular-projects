import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false; //will check if changes are saved when navigation is initiated

  constructor(private serversService: ServersService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
      );
    this.route.fragment.subscribe(); //allows for reaction to query change parameters
    const id = +this.route.snapshot.params['id'];  
    this.server = this.serversService.getServer(id);
    //subscribe route params to update id if params change
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true; //changes the state to true on click so that navigation can happen
    this.router.navigate(['../'], {relativeTo: this.route}); //navigate up a level from where you are
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) { //are you allowed to edit in the first place?
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {//if changes are detected and changesSaved was not activated
      return confirm('Do you want to discard your changes?');
    } else {
      return true;
    }
  }

}
