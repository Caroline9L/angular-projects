import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { } //tells the router to do something on a certain command/event 

  ngOnInit() {
  }

  onLoadServers() {
    //some complex calculation
    this.router.navigate(['/servers']); // navigate takes an array like the routes relative or absolute path. router tells the router to navigate (or do something) when this function is called
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' }); //adds extra parameters to path -- http://localhost:4200/servers/1/edit?allowEdit=1#loading
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
