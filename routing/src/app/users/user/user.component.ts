import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';//optional, used with ngondestroy



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription; //makes the subscription a property rather than a function. optional, used with ngondestroy

  constructor(private route: ActivatedRoute) { }//will give us access to the id passed in the url

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], //fetch info from path, snapshot is a property (indicates the current path), params is a js object where the id lives. Only things defined in route parameters are available here -- this is the "/:id". snapshot is really only good for the first iteration since Ang won't reload 
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params //params is an observable (asynch -- basically is subscribing to possible event) //this.parSub = is optional -- used with ngondestroy
      .subscribe(
      (params: Params) => {//when params change
          this.user.id = params['id']; //updates id and name
          this.user.name = params['name'];
        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe(); //no longer stores data once the call is used? Optional
  }

}
